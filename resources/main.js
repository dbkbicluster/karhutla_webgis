// --- Highlight Feature saat klik ---
let selectedFeature = null;

// style highlight
const highlightStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: 'yellow',
    width: 3
  }),
  fill: new ol.style.Fill({
    color: 'rgba(255, 255, 0, 0.3)'
  })
});

// event klik di map
map.on('singleclick', function (evt) {
  let featureFound = false;

  map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
    featureFound = true;

    // reset style feature sebelumnya
    if (selectedFeature && selectedFeature !== feature) {
      selectedFeature.setStyle(undefined); // balik ke style default
    }

    // apply style highlight ke feature yang baru diklik
    feature.setStyle(highlightStyle);
    selectedFeature = feature;

    return true; // stop loop, cukup feature pertama
  });

  // kalau klik area kosong, reset highlight
  if (!featureFound && selectedFeature) {
    selectedFeature.setStyle(undefined);
    selectedFeature = null;
  }
});

function checkLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    // ganti sesuai kebutuhan (hardcode atau request ke server)
    if (user === "dbk" && pass === "123456") {
        document.getElementById("loginModal").style.display = "none";
    } else {
        error.style.display = "block";
    }
}

function searchCoordinate() {
  const input = document.getElementById("coordInput").value.trim();
  if (!input) {
    alert("Masukkan koordinat, contoh: -2.123, 116.456");
    return;
  }

  // parsing "lat, lon"
  const parts = input.split(",");
  if (parts.length !== 2) {
    alert("Format salah! Gunakan format: Lat, Lon");
    return;
  }

  const lat = parseFloat(parts[0]);
  const lon = parseFloat(parts[1]);

  if (isNaN(lat) || isNaN(lon)) {
    alert("Koordinat tidak valid!");
    return;
  }

  // konversi ke koordinat peta (Web Mercator EPSG:3857)
  const coords = ol.proj.fromLonLat([lon, lat]);

  // buat marker di koordinat
  const marker = new ol.Feature({
    geometry: new ol.geom.Point(coords),
  });

  marker.setStyle(
    new ol.style.Style({
      image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({ color: "red" }),
        stroke: new ol.style.Stroke({ color: "white", width: 2 }),
      }),
    })
  );

  // bikin vector layer untuk marker
  const vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [marker],
    }),
  });

  map.addLayer(vectorLayer);

  // zoom ke koordinat
  map.getView().animate({ center: coords, zoom: 15 });
}

// tampilkan koordinat cursor di pojok kiri bawah
map.on('pointermove', function (evt) {
  const coord = ol.proj.toLonLat(evt.coordinate); // konversi ke EPSG:4326 (lon, lat)
  const lon = coord[0].toFixed(6);
  const lat = coord[1].toFixed(6);

  document.getElementById('mouse-coord').innerHTML =
    `Koordinat: ${lat}, ${lon}`;
});

const fireDashboardState = {
  status: 'all',
  selectedId: null
};

const fireSelectionLayer = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: new ol.style.Style({
    image: new ol.style.Circle({
      radius: 12,
      fill: new ol.style.Fill({ color: 'rgba(249, 115, 22, 0.24)' }),
      stroke: new ol.style.Stroke({ color: '#f97316', width: 3 })
    })
  }),
  zIndex: 400
});
map.addLayer(fireSelectionLayer);

function clearSelectedFireMarker() {
  fireSelectionLayer.getSource().clear();
  fireDashboardState.selectedId = null;
  document.querySelectorAll('.fire-incident-item').forEach((button) => {
    button.classList.remove('is-selected');
  });
}

function setSelectedFireMarker(lat, lon, itemId) {
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    clearSelectedFireMarker();
    return;
  }

  fireSelectionLayer.getSource().clear();
  const feature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat]))
  });
  fireSelectionLayer.getSource().addFeature(feature);
  fireDashboardState.selectedId = itemId;

  document.querySelectorAll('.fire-incident-item').forEach((button) => {
    button.classList.toggle('is-selected', String(button.dataset.id) === String(itemId));
  });
}

function parseForestFireArea(value) {
  if (value === null || value === undefined || value === '') {
    return 0;
  }

  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  const cleaned = String(value).replace(/[^0-9,.-]/g, '').replace(',', '.');
  const numericValue = parseFloat(cleaned);
  return Number.isFinite(numericValue) ? numericValue : 0;
}

function getForestFireIncidents() {
  const featureCollection = window.json_koordinat_kebakaran_hutan_20260902;
  if (!featureCollection || !Array.isArray(featureCollection.features)) {
    return [];
  }

  const sortedFeatures = [...featureCollection.features].sort((featureA, featureB) => {
    const aTitik = Number(featureA?.properties?.Titik ?? NaN);
    const bTitik = Number(featureB?.properties?.Titik ?? NaN);

    if (Number.isFinite(aTitik) && Number.isFinite(bTitik)) {
      return bTitik - aTitik;
    }

    return 0;
  });

  return sortedFeatures.map((feature, index) => {
    const props = feature.properties || {};
    const geometry = feature.geometry || {};
    const coordinates = Array.isArray(geometry.coordinates) ? geometry.coordinates : [null, null];
    const latitude = props.Latitude !== null && props.Latitude !== undefined && props.Latitude !== ''
      ? Number(props.Latitude)
      : Number(coordinates[1]);
    const longitude = props.Longitude !== null && props.Longitude !== undefined && props.Longitude !== ''
      ? Number(props.Longitude)
      : Number(coordinates[0]);

    return {
      id: props.Titik || index + 1,
      lokasi: props.Lokasi || 'Lokasi tidak tercatat',
      status: props.Status || 'Belum tersedia',
      luas: parseForestFireArea(props['Luas Terda']),
      vegetasi: props.Vegetasi || '-',
      latitude: Number.isFinite(latitude) ? latitude : null,
      longitude: Number.isFinite(longitude) ? longitude : null,
    };
  });
}

function renderFireChart(incidents) {
  const chartEl = document.getElementById('fire-chart');
  if (!chartEl) return;

  const active = incidents.filter((item) => String(item.status).toLowerCase().includes('aktif')).length;
  const done = incidents.filter((item) => String(item.status).toLowerCase().includes('padam')).length;
  const entries = [
    { label: 'Aktif', value: active, color: '#fbbf24' },
    { label: 'Padam', value: done, color: '#86efac' },
    { label: 'Total', value: incidents.length, color: '#93c5fd' }
  ];
  const maxValue = Math.max(...entries.map((entry) => entry.value), 1);

  chartEl.innerHTML = `
    <div class="fire-chart-title">
      <span>Distribusi</span>
      <strong>${incidents.length} titik</strong>
    </div>
    <div class="fire-chart-bars">
      ${entries.map((entry) => `
        <div class="fire-chart-item">
          <div class="fire-chart-bar"><span style="height:${Math.max(10, (entry.value / maxValue) * 100)}%; background:${entry.color};"></span></div>
          <strong>${entry.value}</strong>
          <small>${entry.label}</small>
        </div>
      `).join('')}
    </div>
  `;
}

function renderForestFireDashboard() {
  const incidents = getForestFireIncidents();
  const total = incidents.length;
  const active = incidents.filter((item) => String(item.status).toLowerCase().includes('aktif')).length;
  const done = incidents.filter((item) => String(item.status).toLowerCase().includes('padam')).length;
  const totalArea = incidents.reduce((sum, item) => sum + item.luas, 0);

  const totalEl = document.getElementById('fire-total');
  const activeEl = document.getElementById('fire-active');
  const doneEl = document.getElementById('fire-done');
  const areaEl = document.getElementById('fire-area-total');
  const listEl = document.getElementById('fire-incident-list');

  if (totalEl) totalEl.textContent = total;
  if (activeEl) activeEl.textContent = active;
  if (doneEl) doneEl.textContent = done;
  if (areaEl) areaEl.textContent = totalArea.toLocaleString('id-ID', { maximumFractionDigits: 0 });

  renderFireChart(incidents);

  const filteredIncidents = fireDashboardState.status === 'all'
    ? incidents
    : incidents.filter((item) => String(item.status).toLowerCase() === String(fireDashboardState.status).toLowerCase());

  if (!listEl) return;

  if (!filteredIncidents.length) {
    listEl.innerHTML = '<div class="fire-empty">Tidak ada data untuk filter ini.</div>';
    return;
  }

  listEl.innerHTML = filteredIncidents.map((item) => {
    const statusClass = String(item.status).toLowerCase().includes('aktif') ? 'is-active' : 'is-done';
    const coordinateText = item.latitude !== null && item.longitude !== null
      ? `${item.latitude.toFixed(5)}, ${item.longitude.toFixed(5)}`
      : 'Koordinat tidak tersedia';
    const selectedClass = String(fireDashboardState.selectedId) === String(item.id) ? 'is-selected' : '';

    return `
      <button class="fire-incident-item ${selectedClass}" type="button" data-id="${item.id}" data-lat="${item.latitude ?? ''}" data-lon="${item.longitude ?? ''}">
        <div>
          <strong>${item.lokasi}</strong>
          <small>${coordinateText}</small>
          <small>Luas: ${item.luas.toLocaleString('id-ID', { maximumFractionDigits: 0 })} Ha</small>
        </div>
        <span class="fire-incident-badge ${statusClass}">${item.status}</span>
      </button>
    `;
  }).join('');

  listEl.querySelectorAll('.fire-incident-item').forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = button.dataset.id;
      const lat = Number(button.dataset.lat);
      const lon = Number(button.dataset.lon);
      if (Number.isFinite(lat) && Number.isFinite(lon)) {
        setSelectedFireMarker(lat, lon, itemId);
        const target = ol.proj.fromLonLat([lon, lat]);
        map.getView().animate({ center: target, zoom: 14, duration: 800 });
      }
    });
  });
}

function initialiseForestFireDashboard() {
  const dashboard = document.getElementById('fire-dashboard');
  const closeBtn = document.getElementById('fire-dashboard-close');
  const toggleBtn = document.getElementById('fire-dashboard-toggle');
  const filterButtons = document.querySelectorAll('.fire-filter-btn');
  const isCompactLayout = () => window.innerWidth <= 700;

  let dashboardOpen = true;

  function forceLegendClosed() {
    const legend = document.querySelector('.layer-switcher');
    if (legend) {
      legend.classList.remove('shown');
      legend.style.display = 'none';
    }
    if (typeof layerSwitcher !== 'undefined' && window.innerWidth > 1200) {
      layerSwitcher.hidePanel();
      layerSwitcher.element.style.display = 'none';
    }
  }

  function restoreLegendForDesktop() {
    const legend = document.querySelector('.layer-switcher');
    if (legend) {
      legend.style.display = window.innerWidth <= 1200 ? 'none' : '';
    }
    if (typeof layerSwitcher !== 'undefined') {
      layerSwitcher.element.style.display = window.innerWidth <= 1200 ? 'none' : '';
      if (window.innerWidth > 1200) {
        layerSwitcher.showPanel();
      }
    }
  }

  function updateDashboardView() {
    if (!dashboard) return;

    dashboard.classList.toggle('is-collapsed', !dashboardOpen);

    if (toggleBtn) {
      toggleBtn.textContent = dashboardOpen ? 'Close Dashboard' : 'Open Dashboard';
      toggleBtn.style.display = isCompactLayout() ? 'inline-flex' : (dashboardOpen ? 'none' : 'inline-flex');
    }

    if (dashboardOpen) {
      restoreLegendForDesktop();
    } else {
      const legend = document.querySelector('.layer-switcher');
      if (legend) {
        legend.style.display = '';
      }
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      fireDashboardState.status = button.dataset.status;
      filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      renderForestFireDashboard();
    });
  });

  if (closeBtn && dashboard) {
    closeBtn.addEventListener('click', () => {
      dashboardOpen = false;
      updateDashboardView();
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      dashboardOpen = !dashboardOpen;
      updateDashboardView();
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1200) {
      forceLegendClosed();
    } else {
      restoreLegendForDesktop();
    }
    updateDashboardView();
  });

  if (window.innerWidth <= 1200) {
    forceLegendClosed();
  }

  updateDashboardView();
  renderForestFireDashboard();
}

document.addEventListener('DOMContentLoaded', initialiseForestFireDashboard);
