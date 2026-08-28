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
