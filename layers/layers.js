var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRITopo_1 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRISatellite_2 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_dbk_drone_ellipsis_3 = new ol.layer.Tile({
            'title': 'dbk_drone_ellipsis',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.ellipsis-drive.com/v3/path/1e0fab29-8bb9-4297-a9ca-43e282e66cf1/raster/timestamp/2865206c-149c-44ed-9fa9-689c53335a9c/tile/{z}/{x}/{y}?style=a56119f3-c247-4695-84a9-d4d641bdd3dd&token=epat_FF5fJNi2jjkeORpflu9fhj7YZa0r04rgP6xI4lMUud9dqtqk6MnfimnNsaXQkjuD'
            })
        });
var format_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4 = new ol.format.GeoJSON();
var features_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4 = format_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4.readFeatures(json_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4.addFeatures(features_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4);
var lyr_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4, 
                style: style_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4,
                popuplayertitle: 'FUNGSI_KAWASAN_HUTAN_SK.6627_2021',
                interactive: true,
    title: 'FUNGSI_KAWASAN_HUTAN_SK.6627_2021<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_0.png" /> APL<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_1.png" /> CA<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_2.png" /> DANAU/AIR<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_3.png" /> HL<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_4.png" /> HP<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_5.png" /> HPK<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_6.png" /> HPT<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_7.png" /> KSA/KPA<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_8.png" /> SM<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_9.png" /> SUNGAI<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_10.png" /> TAHURA<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_11.png" /> TN<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_12.png" /> TNL<br />\
    <img src="styles/legend/FUNGSI_KAWASAN_HUTAN_SK6627_2021_4_13.png" /> TWA<br />' });
var format_HPH_AREA_DBKBI_CLUSTER_5 = new ol.format.GeoJSON();
var features_HPH_AREA_DBKBI_CLUSTER_5 = format_HPH_AREA_DBKBI_CLUSTER_5.readFeatures(json_HPH_AREA_DBKBI_CLUSTER_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HPH_AREA_DBKBI_CLUSTER_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HPH_AREA_DBKBI_CLUSTER_5.addFeatures(features_HPH_AREA_DBKBI_CLUSTER_5);
var lyr_HPH_AREA_DBKBI_CLUSTER_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HPH_AREA_DBKBI_CLUSTER_5, 
                style: style_HPH_AREA_DBKBI_CLUSTER_5,
                popuplayertitle: 'HPH_AREA_DBK-BI_CLUSTER',
                interactive: true,
                title: '<img src="styles/legend/HPH_AREA_DBKBI_CLUSTER_5.png" /> HPH_AREA_DBK-BI_CLUSTER'
            });
var format_WIUP_6 = new ol.format.GeoJSON();
var features_WIUP_6 = format_WIUP_6.readFeatures(json_WIUP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUP_6.addFeatures(features_WIUP_6);
var lyr_WIUP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUP_6, 
                style: style_WIUP_6,
                popuplayertitle: 'WIUP',
                interactive: true,
                title: '<img src="styles/legend/WIUP_6.png" /> WIUP'
            });
var format_WIUPBatuanMuaraKaryaSejahtera_7 = new ol.format.GeoJSON();
var features_WIUPBatuanMuaraKaryaSejahtera_7 = format_WIUPBatuanMuaraKaryaSejahtera_7.readFeatures(json_WIUPBatuanMuaraKaryaSejahtera_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUPBatuanMuaraKaryaSejahtera_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUPBatuanMuaraKaryaSejahtera_7.addFeatures(features_WIUPBatuanMuaraKaryaSejahtera_7);
var lyr_WIUPBatuanMuaraKaryaSejahtera_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUPBatuanMuaraKaryaSejahtera_7, 
                style: style_WIUPBatuanMuaraKaryaSejahtera_7,
                popuplayertitle: 'WIUP Batuan Muara Karya Sejahtera',
                interactive: true,
                title: '<img src="styles/legend/WIUPBatuanMuaraKaryaSejahtera_7.png" /> WIUP Batuan Muara Karya Sejahtera'
            });
var format_IUP_OP_BI_8 = new ol.format.GeoJSON();
var features_IUP_OP_BI_8 = format_IUP_OP_BI_8.readFeatures(json_IUP_OP_BI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUP_OP_BI_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUP_OP_BI_8.addFeatures(features_IUP_OP_BI_8);
var lyr_IUP_OP_BI_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUP_OP_BI_8, 
                style: style_IUP_OP_BI_8,
                popuplayertitle: 'IUP_OP_BI',
                interactive: true,
                title: '<img src="styles/legend/IUP_OP_BI_8.png" /> IUP_OP_BI'
            });
var format_IUP_OP_DBK_9 = new ol.format.GeoJSON();
var features_IUP_OP_DBK_9 = format_IUP_OP_DBK_9.readFeatures(json_IUP_OP_DBK_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUP_OP_DBK_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUP_OP_DBK_9.addFeatures(features_IUP_OP_DBK_9);
var lyr_IUP_OP_DBK_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUP_OP_DBK_9, 
                style: style_IUP_OP_DBK_9,
                popuplayertitle: 'IUP_OP_DBK',
                interactive: true,
                title: '<img src="styles/legend/IUP_OP_DBK_9.png" /> IUP_OP_DBK'
            });
var format_PPKH_COKAL_AREA_10 = new ol.format.GeoJSON();
var features_PPKH_COKAL_AREA_10 = format_PPKH_COKAL_AREA_10.readFeatures(json_PPKH_COKAL_AREA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPKH_COKAL_AREA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPKH_COKAL_AREA_10.addFeatures(features_PPKH_COKAL_AREA_10);
var lyr_PPKH_COKAL_AREA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPKH_COKAL_AREA_10, 
                style: style_PPKH_COKAL_AREA_10,
                popuplayertitle: 'PPKH_COKAL_AREA',
                interactive: false,
    title: 'PPKH_COKAL_AREA<br />\
    <img src="styles/legend/PPKH_COKAL_AREA_10_0.png" /> Disposal<br />\
    <img src="styles/legend/PPKH_COKAL_AREA_10_1.png" /> Jetty<br />\
    <img src="styles/legend/PPKH_COKAL_AREA_10_2.png" /> PIT<br />\
    <img src="styles/legend/PPKH_COKAL_AREA_10_3.png" /> Sarana Infrastruktur<br />' });
var format_PPKH_COKAL_POLYLINE_11 = new ol.format.GeoJSON();
var features_PPKH_COKAL_POLYLINE_11 = format_PPKH_COKAL_POLYLINE_11.readFeatures(json_PPKH_COKAL_POLYLINE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPKH_COKAL_POLYLINE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPKH_COKAL_POLYLINE_11.addFeatures(features_PPKH_COKAL_POLYLINE_11);
var lyr_PPKH_COKAL_POLYLINE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPKH_COKAL_POLYLINE_11, 
                style: style_PPKH_COKAL_POLYLINE_11,
                popuplayertitle: 'PPKH_COKAL_POLYLINE',
                interactive: false,
                title: '<img src="styles/legend/PPKH_COKAL_POLYLINE_11.png" /> PPKH_COKAL_POLYLINE'
            });
var format_ArealKoridor_12 = new ol.format.GeoJSON();
var features_ArealKoridor_12 = format_ArealKoridor_12.readFeatures(json_ArealKoridor_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArealKoridor_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArealKoridor_12.addFeatures(features_ArealKoridor_12);
var lyr_ArealKoridor_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArealKoridor_12, 
                style: style_ArealKoridor_12,
                popuplayertitle: 'Areal Koridor',
                interactive: true,
                title: '<img src="styles/legend/ArealKoridor_12.png" /> Areal Koridor'
            });
var format_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13 = new ol.format.GeoJSON();
var features_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13 = format_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13.readFeatures(json_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13.addFeatures(features_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13);
var lyr_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13, 
                style: style_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13,
                popuplayertitle: 'Penyesuaian_Ijin_Koridor_DBK_2025_Polygon_',
                interactive: true,
                title: '<img src="styles/legend/Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13.png" /> Penyesuaian_Ijin_Koridor_DBK_2025_Polygon_'
            });
var format_Penyesuaian_Ijin_Koridor_DBK_2025_14 = new ol.format.GeoJSON();
var features_Penyesuaian_Ijin_Koridor_DBK_2025_14 = format_Penyesuaian_Ijin_Koridor_DBK_2025_14.readFeatures(json_Penyesuaian_Ijin_Koridor_DBK_2025_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penyesuaian_Ijin_Koridor_DBK_2025_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penyesuaian_Ijin_Koridor_DBK_2025_14.addFeatures(features_Penyesuaian_Ijin_Koridor_DBK_2025_14);
var lyr_Penyesuaian_Ijin_Koridor_DBK_2025_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Penyesuaian_Ijin_Koridor_DBK_2025_14, 
                style: style_Penyesuaian_Ijin_Koridor_DBK_2025_14,
                popuplayertitle: 'Penyesuaian_Ijin_Koridor_DBK_2025',
                interactive: true,
                title: '<img src="styles/legend/Penyesuaian_Ijin_Koridor_DBK_2025_14.png" /> Penyesuaian_Ijin_Koridor_DBK_2025'
            });
var format_dbk_2014_15 = new ol.format.GeoJSON();
var features_dbk_2014_15 = format_dbk_2014_15.readFeatures(json_dbk_2014_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dbk_2014_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dbk_2014_15.addFeatures(features_dbk_2014_15);
var lyr_dbk_2014_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dbk_2014_15, 
                style: style_dbk_2014_15,
                popuplayertitle: 'dbk_2014',
                interactive: true,
                title: '<img src="styles/legend/dbk_2014_15.png" /> dbk_2014'
            });
var format_dbk_kadastral_bpn_muaralaung_16 = new ol.format.GeoJSON();
var features_dbk_kadastral_bpn_muaralaung_16 = format_dbk_kadastral_bpn_muaralaung_16.readFeatures(json_dbk_kadastral_bpn_muaralaung_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dbk_kadastral_bpn_muaralaung_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dbk_kadastral_bpn_muaralaung_16.addFeatures(features_dbk_kadastral_bpn_muaralaung_16);
var lyr_dbk_kadastral_bpn_muaralaung_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dbk_kadastral_bpn_muaralaung_16, 
                style: style_dbk_kadastral_bpn_muaralaung_16,
                popuplayertitle: 'dbk_kadastral_bpn_muara-laung',
                interactive: true,
                title: '<img src="styles/legend/dbk_kadastral_bpn_muaralaung_16.png" /> dbk_kadastral_bpn_muara-laung'
            });
var format_LAHAN_BEBAS_DBK_20260826_17 = new ol.format.GeoJSON();
var features_LAHAN_BEBAS_DBK_20260826_17 = format_LAHAN_BEBAS_DBK_20260826_17.readFeatures(json_LAHAN_BEBAS_DBK_20260826_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAHAN_BEBAS_DBK_20260826_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAHAN_BEBAS_DBK_20260826_17.addFeatures(features_LAHAN_BEBAS_DBK_20260826_17);
var lyr_LAHAN_BEBAS_DBK_20260826_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAHAN_BEBAS_DBK_20260826_17, 
                style: style_LAHAN_BEBAS_DBK_20260826_17,
                popuplayertitle: 'LAHAN_BEBAS_DBK_20260826',
                interactive: true,
                title: '<img src="styles/legend/LAHAN_BEBAS_DBK_20260826_17.png" /> LAHAN_BEBAS_DBK_20260826'
            });
var format_KORIDORIJINKDP_18 = new ol.format.GeoJSON();
var features_KORIDORIJINKDP_18 = format_KORIDORIJINKDP_18.readFeatures(json_KORIDORIJINKDP_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KORIDORIJINKDP_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KORIDORIJINKDP_18.addFeatures(features_KORIDORIJINKDP_18);
var lyr_KORIDORIJINKDP_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KORIDORIJINKDP_18, 
                style: style_KORIDORIJINKDP_18,
                popuplayertitle: 'KORIDOR IJIN KDP',
                interactive: false,
                title: '<img src="styles/legend/KORIDORIJINKDP_18.png" /> KORIDOR IJIN KDP'
            });
var format_KoridordanMainroadOperasionalKDP_19 = new ol.format.GeoJSON();
var features_KoridordanMainroadOperasionalKDP_19 = format_KoridordanMainroadOperasionalKDP_19.readFeatures(json_KoridordanMainroadOperasionalKDP_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KoridordanMainroadOperasionalKDP_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KoridordanMainroadOperasionalKDP_19.addFeatures(features_KoridordanMainroadOperasionalKDP_19);
var lyr_KoridordanMainroadOperasionalKDP_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KoridordanMainroadOperasionalKDP_19, 
                style: style_KoridordanMainroadOperasionalKDP_19,
                popuplayertitle: 'Koridor dan Mainroad Operasional KDP',
                interactive: true,
                title: '<img src="styles/legend/KoridordanMainroadOperasionalKDP_19.png" /> Koridor dan Mainroad Operasional KDP'
            });
var format_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20 = new ol.format.GeoJSON();
var features_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20 = format_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20.readFeatures(json_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20.addFeatures(features_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20);
var lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20, 
                style: style_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20,
                popuplayertitle: 'TRACK_LOGGING_ROAD_DBK_BI_CLUSTER',
                interactive: true,
    title: 'TRACK_LOGGING_ROAD_DBK_BI_CLUSTER<br />\
    <img src="styles/legend/TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20_0.png" /> Jalan Logging PT. KAJR<br />\
    <img src="styles/legend/TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20_1.png" /> Jalan Logging PT. KDP<br />\
    <img src="styles/legend/TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20_2.png" /> Jalan Logging PT. KTA<br />\
    <img src="styles/legend/TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20_3.png" /> Jalan Logging PT. MPP<br />\
    <img src="styles/legend/TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20_4.png" /> Jalan Logging PT. NARS<br />' });
var format_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21 = new ol.format.GeoJSON();
var features_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21 = format_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21.readFeatures(json_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21.addFeatures(features_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21);
var lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21, 
                style: style_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21,
                popuplayertitle: 'TRACK_SURVEY_ROAD_DBK_BI_CLUSTER',
                interactive: true,
                title: '<img src="styles/legend/TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21.png" /> TRACK_SURVEY_ROAD_DBK_BI_CLUSTER'
            });
var format_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22 = new ol.format.GeoJSON();
var features_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22 = format_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22.readFeatures(json_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22.addFeatures(features_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22);
var lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22, 
                style: style_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22,
                popuplayertitle: 'TRACK_HAULING_ROAD_DBK_BI_CLUSTER',
                interactive: true,
    title: 'TRACK_HAULING_ROAD_DBK_BI_CLUSTER<br />\
    <img src="styles/legend/TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22_0.png" /> Jalan Hauling PT. BP<br />\
    <img src="styles/legend/TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22_1.png" /> Jalan Hauling PT. Cokal<br />\
    <img src="styles/legend/TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22_2.png" /> Jalan Hauling PT. DBK<br />' });
var format_CENTERLINE_DESIGN_ALL_SEGMENT_23 = new ol.format.GeoJSON();
var features_CENTERLINE_DESIGN_ALL_SEGMENT_23 = format_CENTERLINE_DESIGN_ALL_SEGMENT_23.readFeatures(json_CENTERLINE_DESIGN_ALL_SEGMENT_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTERLINE_DESIGN_ALL_SEGMENT_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTERLINE_DESIGN_ALL_SEGMENT_23.addFeatures(features_CENTERLINE_DESIGN_ALL_SEGMENT_23);
var lyr_CENTERLINE_DESIGN_ALL_SEGMENT_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTERLINE_DESIGN_ALL_SEGMENT_23, 
                style: style_CENTERLINE_DESIGN_ALL_SEGMENT_23,
                popuplayertitle: 'CENTERLINE_DESIGN_ALL_SEGMENT',
                interactive: true,
                title: '<img src="styles/legend/CENTERLINE_DESIGN_ALL_SEGMENT_23.png" /> CENTERLINE_DESIGN_ALL_SEGMENT'
            });
var format_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24 = new ol.format.GeoJSON();
var features_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24 = format_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24.readFeatures(json_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24.addFeatures(features_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24);
var lyr_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24, 
                style: style_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24,
                popuplayertitle: 'POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1',
                interactive: true,
                title: '<img src="styles/legend/POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24.png" /> POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1'
            });
var format_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25 = new ol.format.GeoJSON();
var features_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25 = format_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25.readFeatures(json_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25.addFeatures(features_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25);
var lyr_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25, 
                style: style_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25,
                popuplayertitle: 'Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1',
                interactive: true,
    title: 'Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1<br />\
    <img src="styles/legend/Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25_0.png" /> Jalan Existing<br />\
    <img src="styles/legend/Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25_1.png" /> Tahap Konstruksi<br />\
    <img src="styles/legend/Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25_2.png" /> <br />' });
var format_lom_pit_2604_26 = new ol.format.GeoJSON();
var features_lom_pit_2604_26 = format_lom_pit_2604_26.readFeatures(json_lom_pit_2604_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lom_pit_2604_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lom_pit_2604_26.addFeatures(features_lom_pit_2604_26);
var lyr_lom_pit_2604_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lom_pit_2604_26, 
                style: style_lom_pit_2604_26,
                popuplayertitle: 'lom_pit_2604',
                interactive: false,
                title: '<img src="styles/legend/lom_pit_2604_26.png" /> lom_pit_2604'
            });
var format_DUMP_LOM_48M_27 = new ol.format.GeoJSON();
var features_DUMP_LOM_48M_27 = format_DUMP_LOM_48M_27.readFeatures(json_DUMP_LOM_48M_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DUMP_LOM_48M_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DUMP_LOM_48M_27.addFeatures(features_DUMP_LOM_48M_27);
var lyr_DUMP_LOM_48M_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DUMP_LOM_48M_27, 
                style: style_DUMP_LOM_48M_27,
                popuplayertitle: 'DUMP_LOM_48M',
                interactive: false,
                title: '<img src="styles/legend/DUMP_LOM_48M_27.png" /> DUMP_LOM_48M'
            });
var format_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28 = new ol.format.GeoJSON();
var features_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28 = format_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28.readFeatures(json_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28.addFeatures(features_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28);
var lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28, 
                style: style_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28,
                popuplayertitle: 'Realisasi_Bukaan_Lahan_DBK_2024_TW4-2026_TW2_Updated_EOM_Juni2026_r2',
                interactive: true,
    title: 'Realisasi_Bukaan_Lahan_DBK_2024_TW4-2026_TW2_Updated_EOM_Juni2026_r2<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_0.png" /> Bukaan Tambang Aktif<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_1.png" /> Gudang Handak Permanen<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_2.png" /> Gudang Handak Sementara<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_3.png" /> Jalan Hauling<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_4.png" /> Jalan Tambang<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_5.png" /> Pelabuhan<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_6.png" /> Perumahan Karyawan Tambang<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_7.png" /> Rencana Fuel Tank<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_8.png" /> Rencana Mess<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_9.png" /> Rencana Mess Hauling<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_10.png" /> Settling Pond<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_11.png" /> Stock ROM PIT<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_12.png" /> Stockpile Ampar<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_13.png" /> Stockpile Muara Laung<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_14.png" /> Timbunan OB (OPD)<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_15.png" /> Timbunan Tanah Pucuk<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_16.png" /> Workshop<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_17.png" /> Workshop ABN<br />\
    <img src="styles/legend/Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28_18.png" /> <br />' });
var format_datahotspot28082026_045154_29 = new ol.format.GeoJSON();
var features_datahotspot28082026_045154_29 = format_datahotspot28082026_045154_29.readFeatures(json_datahotspot28082026_045154_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_datahotspot28082026_045154_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_datahotspot28082026_045154_29.addFeatures(features_datahotspot28082026_045154_29);
cluster_datahotspot28082026_045154_29 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_datahotspot28082026_045154_29
});
var lyr_datahotspot28082026_045154_29 = new ol.layer.Vector({
                declutter: false,
                source:cluster_datahotspot28082026_045154_29, 
                style: style_datahotspot28082026_045154_29,
                popuplayertitle: 'hotspot sipongi 20260901',
                interactive: true,
    title: 'hotspot sipongi 20260901<br />\
    <img src="styles/legend/datahotspot28082026_045154_29_0.png" /> High<br />\
    <img src="styles/legend/datahotspot28082026_045154_29_1.png" /> Medium<br />\
    <img src="styles/legend/datahotspot28082026_045154_29_2.png" /> Low<br />' });
var format_koordinat_kebakaran_hutan_20260830 = new ol.format.GeoJSON();
var features_koordinat_kebakaran_hutan_20260830 = format_koordinat_kebakaran_hutan_20260830.readFeatures(json_koordinat_kebakaran_hutan_20260830, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koordinat_kebakaran_hutan_20260830 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koordinat_kebakaran_hutan_20260830.addFeatures(features_koordinat_kebakaran_hutan_20260830);
cluster_koordinat_kebakaran_hutan_20260830 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_koordinat_kebakaran_hutan_20260830
});
var lyr_koordinat_kebakaran_hutan_20260830 = new ol.layer.Vector({
                declutter: false,
                source:cluster_koordinat_kebakaran_hutan_20260830, 
                style: style_koordinat_kebakaran_hutan_20260830,
                popuplayertitle: 'koordinat_kebakaran_hutan_20260831',
                interactive: true,
    title: 'koordinat_kebakaran_hutan_20260831<br />\
    <img src="styles/legend/koordinat_kebakaran_hutan_20260830_0.png" /> Aktif<br />\
    <img src="styles/legend/koordinat_kebakaran_hutan_20260830_1.png" /> Sudah Padam<br />' });
var group_Karhutla = new ol.layer.Group({
                                layers: [lyr_datahotspot28082026_045154_29,lyr_koordinat_kebakaran_hutan_20260830,],
                                fold: 'open',
                                title: 'Karhutla'});
var group_Realisasi_Bukaan_Lahan = new ol.layer.Group({
                                layers: [lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28,],
                                fold: 'close',
                                title: 'Realisasi_Bukaan_Lahan'});
var group_Mining = new ol.layer.Group({
                                layers: [lyr_lom_pit_2604_26,lyr_DUMP_LOM_48M_27,],
                                fold: 'close',
                                title: 'Mining'});
var group_Infrastructure = new ol.layer.Group({
                                layers: [lyr_CENTERLINE_DESIGN_ALL_SEGMENT_23,lyr_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24,lyr_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25,],
                                fold: 'close',
                                title: 'Infrastructure'});
var group_TraseJalanExisting = new ol.layer.Group({
                                layers: [lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20,lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21,lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22,],
                                fold: 'close',
                                title: 'Trase Jalan Existing'});
var group_TraseJalanKoridorPTKDP = new ol.layer.Group({
                                layers: [lyr_KORIDORIJINKDP_18,lyr_KoridordanMainroadOperasionalKDP_19,],
                                fold: 'close',
                                title: 'Trase Jalan Koridor PT. KDP'});
var group_Batas_Lahan = new ol.layer.Group({
                                layers: [lyr_dbk_kadastral_bpn_muaralaung_16,lyr_LAHAN_BEBAS_DBK_20260826_17,],
                                fold: 'close',
                                title: 'Batas_Lahan'});
var group_Batas_PPKHKoridorDBK = new ol.layer.Group({
                                layers: [lyr_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13,lyr_Penyesuaian_Ijin_Koridor_DBK_2025_14,lyr_dbk_2014_15,],
                                fold: 'close',
                                title: 'Batas_PPKH & Koridor DBK'});
var group_BATAS_PPKH_COKAL = new ol.layer.Group({
                                layers: [lyr_PPKH_COKAL_AREA_10,lyr_PPKH_COKAL_POLYLINE_11,lyr_ArealKoridor_12,],
                                fold: 'close',
                                title: 'BATAS_PPKH_COKAL'});
var group_BatasIUPHPH = new ol.layer.Group({
                                layers: [lyr_HPH_AREA_DBKBI_CLUSTER_5,lyr_WIUP_6,lyr_WIUPBatuanMuaraKaryaSejahtera_7,lyr_IUP_OP_BI_8,lyr_IUP_OP_DBK_9,],
                                fold: 'close',
                                title: 'Batas IUP & HPH'});
var group_KawasanHutan = new ol.layer.Group({
                                layers: [lyr_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4,],
                                fold: 'close',
                                title: 'Kawasan Hutan'});
var group_Basemap_Imagery = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,lyr_ESRITopo_1,lyr_ESRISatellite_2,lyr_dbk_drone_ellipsis_3,],
                                fold: 'open',
                                title: 'Basemap_Imagery'});

lyr_GoogleHybrid_0.setVisible(false);lyr_ESRITopo_1.setVisible(false);lyr_ESRISatellite_2.setVisible(true);lyr_dbk_drone_ellipsis_3.setVisible(true);lyr_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4.setVisible(false);lyr_HPH_AREA_DBKBI_CLUSTER_5.setVisible(false);lyr_WIUP_6.setVisible(true);lyr_WIUPBatuanMuaraKaryaSejahtera_7.setVisible(false);lyr_IUP_OP_BI_8.setVisible(false);lyr_IUP_OP_DBK_9.setVisible(true);lyr_PPKH_COKAL_AREA_10.setVisible(false);lyr_PPKH_COKAL_POLYLINE_11.setVisible(false);lyr_ArealKoridor_12.setVisible(false);lyr_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13.setVisible(false);lyr_Penyesuaian_Ijin_Koridor_DBK_2025_14.setVisible(false);lyr_dbk_2014_15.setVisible(false);lyr_dbk_kadastral_bpn_muaralaung_16.setVisible(false);lyr_LAHAN_BEBAS_DBK_20260826_17.setVisible(false);lyr_KORIDORIJINKDP_18.setVisible(false);lyr_KoridordanMainroadOperasionalKDP_19.setVisible(false);lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20.setVisible(false);lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21.setVisible(false);lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22.setVisible(false);lyr_CENTERLINE_DESIGN_ALL_SEGMENT_23.setVisible(false);lyr_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24.setVisible(false);lyr_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25.setVisible(true);lyr_lom_pit_2604_26.setVisible(false);lyr_DUMP_LOM_48M_27.setVisible(false);lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28.setVisible(false);lyr_datahotspot28082026_045154_29.setVisible(true);lyr_koordinat_kebakaran_hutan_20260830.setVisible(true);
var layersList = [group_Basemap_Imagery,group_KawasanHutan,group_BatasIUPHPH,group_BATAS_PPKH_COKAL,group_Batas_PPKHKoridorDBK,group_Batas_Lahan,group_TraseJalanKoridorPTKDP,group_TraseJalanExisting,group_Infrastructure,group_Mining,group_Realisasi_Bukaan_Lahan,group_Karhutla];
lyr_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4.set('fieldAliases', {'Kode_Prov': 'Kode_Prov', 'FKH_2020': 'FKH_2020', 'FGSI': 'FGSI', });
lyr_HPH_AREA_DBKBI_CLUSTER_5.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'Perusahaan': 'Perusahaan', 'No': 'No', 'Komoditas': 'Komoditas', 'Luas': 'Luas', 'SK': 'SK', 'Data_Modif': 'Data_Modif', 'Kabupaten': 'Kabupaten', });
lyr_WIUP_6.set('fieldAliases', {'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', });
lyr_WIUPBatuanMuaraKaryaSejahtera_7.set('fieldAliases', {'Text': 'Text', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_IUP_OP_BI_8.set('fieldAliases', {'LAYER': 'LAYER', 'Perusahaan': 'Perusahaan', 'Luas': 'Luas', 'No_SK': 'No_SK', 'Status_Izi': 'Status_Izi', });
lyr_IUP_OP_DBK_9.set('fieldAliases', {'LAYER': 'LAYER', 'Perusahaan': 'Perusahaan', 'Luas': 'Luas', 'No_SK': 'No_SK', 'Status_Izi': 'Status_Izi', 'area': 'area', });
lyr_PPKH_COKAL_AREA_10.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_PPKH_COKAL_POLYLINE_11.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_ArealKoridor_12.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'LOKASI_ARE': 'LOKASI_ARE', 'LUAS_AREAL': 'LUAS_AREAL', 'KAWASAN_HU': 'KAWASAN_HU', 'PENGGUNAAN': 'PENGGUNAAN', });
lyr_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Desc_': 'Desc_', 'Length': 'Length', 'Note': 'Note', 'Number': 'Number', 'Draft': 'Draft', 'Area_m2': 'Area_m2', 'Area_Ha': 'Area_Ha', });
lyr_Penyesuaian_Ijin_Koridor_DBK_2025_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Desc_': 'Desc_', 'Length': 'Length', 'Note': 'Note', 'Number': 'Number', 'Draft': 'Draft', });
lyr_dbk_2014_15.set('fieldAliases', {'IPPKH': 'IPPKH', 'luas': 'luas', 'luas_geogr': 'luas_geogr', });
lyr_dbk_kadastral_bpn_muaralaung_16.set('fieldAliases', {'LAYER': 'LAYER', 'Block_Name': 'Block_Name', 'Status_Lah': 'Status_Lah', 'Peruntukan': 'Peruntukan', 'Luas': 'Luas', });
lyr_LAHAN_BEBAS_DBK_20260826_17.set('fieldAliases', {'FID': 'FID', });
lyr_KORIDORIJINKDP_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', });
lyr_KoridordanMainroadOperasionalKDP_19.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'TimeSpan': 'TimeSpan', 'TimeStamp': 'TimeStamp', 'BeginTime': 'BeginTime', 'EndTime': 'EndTime', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Id': 'Id', 'Shape_Le_1': 'Shape_Le_1', 'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Visible': 'Visible', 'Points': 'Points', 'StartTime': 'StartTime', 'ElapsedTim': 'ElapsedTim', 'Length': 'Length', 'AvgSpeed': 'AvgSpeed', 'Link': 'Link', 'TrackName': 'TrackName', 'Position': 'Position', 'Time': 'Time', 'Altitude': 'Altitude', 'LegLength': 'LegLength', 'LegTime': 'LegTime', 'LegSpeed': 'LegSpeed', 'LegCourse': 'LegCourse', });
lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20.set('fieldAliases', {'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'PjgRuas': 'PjgRuas', 'PjgTotal': 'PjgTotal', });
lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21.set('fieldAliases', {'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'PjgRuas': 'PjgRuas', 'PjgTotal': 'PjgTotal', });
lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22.set('fieldAliases', {'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'PjgRuas': 'PjgRuas', 'PjgTotal': 'PjgTotal', });
lyr_CENTERLINE_DESIGN_ALL_SEGMENT_23.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24.set('fieldAliases', {'TEXT_STA': 'TEXT_STA', });
lyr_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25.set('fieldAliases', {'Nama': 'Nama', 'Deskripsi': 'Deskripsi', 'PjgRuas': 'PjgRuas', 'PjgTotal': 'PjgTotal', 'Status': 'Status', });
lyr_lom_pit_2604_26.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_DUMP_LOM_48M_27.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nama': 'Nama', 'Area': 'Area', 'FKH': 'FKH', 'Segment': 'Segment', 'Lokasi': 'Lokasi', 'Tahun': 'Tahun', 'Bulan': 'Bulan', 'Triwulan': 'Triwulan', 'Luas': 'Luas', 'Luas_All': 'Luas_All', 'in_ppkh': 'in_ppkh', 'in_koridor': 'in_koridor', 'out_ppkhko': 'out_ppkhko', 'Shape_Leng': 'Shape_Leng', 'no_urut': 'no_urut', 'Shape_Area': 'Shape_Area', });
lyr_datahotspot28082026_045154_29.set('fieldAliases', {'Provinsi': 'Provinsi', 'Kab Kota': 'Kab Kota', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Tanggal': 'Tanggal', 'Waktu': 'Waktu', 'Satelit': 'Satelit', 'Confidence': 'Confidence', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_koordinat_kebakaran_hutan_20260830.set('fieldAliases', {'Titik': 'Titik', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Lokasi': 'Lokasi', 'Luas Terda': 'Luas Terda', 'Vegetasi': 'Vegetasi', 'Status': 'Status', 'Foto': 'Foto', });
lyr_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4.set('fieldImages', {'Kode_Prov': 'TextEdit', 'FKH_2020': 'TextEdit', 'FGSI': 'TextEdit', });
lyr_HPH_AREA_DBKBI_CLUSTER_5.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'Perusahaan': 'TextEdit', 'No': 'Range', 'Komoditas': 'TextEdit', 'Luas': 'TextEdit', 'SK': 'TextEdit', 'Data_Modif': 'TextEdit', 'Kabupaten': 'TextEdit', });
lyr_WIUP_6.set('fieldImages', {'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_WIUPBatuanMuaraKaryaSejahtera_7.set('fieldImages', {'Text': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_IUP_OP_BI_8.set('fieldImages', {'LAYER': 'TextEdit', 'Perusahaan': 'TextEdit', 'Luas': 'TextEdit', 'No_SK': 'TextEdit', 'Status_Izi': 'TextEdit', });
lyr_IUP_OP_DBK_9.set('fieldImages', {'LAYER': 'TextEdit', 'Perusahaan': 'TextEdit', 'Luas': 'TextEdit', 'No_SK': 'TextEdit', 'Status_Izi': 'TextEdit', 'area': 'TextEdit', });
lyr_PPKH_COKAL_AREA_10.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_PPKH_COKAL_POLYLINE_11.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_ArealKoridor_12.set('fieldImages', {'LAYER': '', 'ELEVATION': '', 'LOKASI_ARE': '', 'LUAS_AREAL': '', 'KAWASAN_HU': '', 'PENGGUNAAN': '', });
lyr_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Desc_': 'TextEdit', 'Length': 'TextEdit', 'Note': 'TextEdit', 'Number': 'TextEdit', 'Draft': 'TextEdit', 'Area_m2': 'TextEdit', 'Area_Ha': 'TextEdit', });
lyr_Penyesuaian_Ijin_Koridor_DBK_2025_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Desc_': 'TextEdit', 'Length': 'TextEdit', 'Note': 'TextEdit', 'Number': 'TextEdit', 'Draft': 'TextEdit', });
lyr_dbk_2014_15.set('fieldImages', {'IPPKH': 'TextEdit', 'luas': 'TextEdit', 'luas_geogr': 'TextEdit', });
lyr_dbk_kadastral_bpn_muaralaung_16.set('fieldImages', {'LAYER': 'TextEdit', 'Block_Name': 'TextEdit', 'Status_Lah': 'TextEdit', 'Peruntukan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_LAHAN_BEBAS_DBK_20260826_17.set('fieldImages', {'FID': '', });
lyr_KORIDORIJINKDP_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_KoridordanMainroadOperasionalKDP_19.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'TimeSpan': 'Range', 'TimeStamp': 'Range', 'BeginTime': 'TextEdit', 'EndTime': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Id': 'Range', 'Shape_Le_1': 'TextEdit', 'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'Visible': 'TextEdit', 'Points': 'TextEdit', 'StartTime': 'TextEdit', 'ElapsedTim': 'TextEdit', 'Length': 'TextEdit', 'AvgSpeed': 'TextEdit', 'Link': 'TextEdit', 'TrackName': 'TextEdit', 'Position': 'TextEdit', 'Time': 'TextEdit', 'Altitude': 'TextEdit', 'LegLength': 'TextEdit', 'LegTime': 'TextEdit', 'LegSpeed': 'TextEdit', 'LegCourse': 'TextEdit', });
lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20.set('fieldImages', {'Nama': 'TextEdit', 'Deskripsi': 'TextEdit', 'PjgRuas': 'TextEdit', 'PjgTotal': 'TextEdit', });
lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21.set('fieldImages', {'Nama': 'TextEdit', 'Deskripsi': 'TextEdit', 'PjgRuas': 'TextEdit', 'PjgTotal': 'TextEdit', });
lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22.set('fieldImages', {'Nama': 'TextEdit', 'Deskripsi': 'TextEdit', 'PjgRuas': 'TextEdit', 'PjgTotal': 'TextEdit', });
lyr_CENTERLINE_DESIGN_ALL_SEGMENT_23.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24.set('fieldImages', {'TEXT_STA': 'TextEdit', });
lyr_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25.set('fieldImages', {'Nama': 'TextEdit', 'Deskripsi': 'TextEdit', 'PjgRuas': 'TextEdit', 'PjgTotal': 'TextEdit', 'Status': 'TextEdit', });
lyr_lom_pit_2604_26.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_DUMP_LOM_48M_27.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Nama': 'TextEdit', 'Area': 'TextEdit', 'FKH': 'TextEdit', 'Segment': 'TextEdit', 'Lokasi': 'TextEdit', 'Tahun': 'TextEdit', 'Bulan': 'TextEdit', 'Triwulan': 'TextEdit', 'Luas': 'TextEdit', 'Luas_All': 'TextEdit', 'in_ppkh': 'TextEdit', 'in_koridor': 'TextEdit', 'out_ppkhko': 'TextEdit', 'Shape_Leng': 'TextEdit', 'no_urut': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_datahotspot28082026_045154_29.set('fieldImages', {'Provinsi': 'TextEdit', 'Kab Kota': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'Tanggal': 'TextEdit', 'Waktu': 'TextEdit', 'Satelit': 'TextEdit', 'Confidence': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_koordinat_kebakaran_hutan_20260830.set('fieldImages', {'Titik': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Lokasi': 'TextEdit', 'Luas Terda': 'TextEdit', 'Vegetasi': 'TextEdit', 'Status': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_FUNGSI_KAWASAN_HUTAN_SK6627_2021_4.set('fieldLabels', {'Kode_Prov': 'inline label - visible with data', 'FKH_2020': 'inline label - visible with data', 'FGSI': 'inline label - visible with data', });
lyr_HPH_AREA_DBKBI_CLUSTER_5.set('fieldLabels', {'NAME': 'inline label - visible with data', 'LAYER': 'inline label - visible with data', 'Perusahaan': 'inline label - visible with data', 'No': 'inline label - visible with data', 'Komoditas': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'SK': 'inline label - visible with data', 'Data_Modif': 'inline label - visible with data', 'Kabupaten': 'inline label - visible with data', });
lyr_WIUP_6.set('fieldLabels', {'objectid': 'inline label - visible with data', 'pulau': 'inline label - visible with data', 'pejabat': 'inline label - visible with data', 'id_prov': 'inline label - visible with data', 'nama_prov': 'inline label - visible with data', 'id_kab': 'inline label - visible with data', 'nama_kab': 'inline label - visible with data', 'jenis_izin': 'inline label - visible with data', 'badan_usah': 'inline label - visible with data', 'nama_usaha': 'inline label - visible with data', 'kode_wiup': 'inline label - visible with data', 'sk_iup': 'inline label - visible with data', 'tgl_berlak': 'inline label - visible with data', 'tgl_akhir': 'inline label - visible with data', 'kegiatan': 'inline label - visible with data', 'luas_sk': 'inline label - visible with data', 'komoditas': 'inline label - visible with data', 'kode_golon': 'inline label - visible with data', 'kode_jnsko': 'inline label - visible with data', 'cnc': 'inline label - visible with data', 'generasi': 'inline label - visible with data', 'kode_wil': 'inline label - visible with data', 'lokasi': 'inline label - visible with data', });
lyr_WIUPBatuanMuaraKaryaSejahtera_7.set('fieldLabels', {'Text': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'Luas': 'inline label - visible with data', });
lyr_IUP_OP_BI_8.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'Perusahaan': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'No_SK': 'inline label - visible with data', 'Status_Izi': 'inline label - visible with data', });
lyr_IUP_OP_DBK_9.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'Perusahaan': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'No_SK': 'inline label - visible with data', 'Status_Izi': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_PPKH_COKAL_AREA_10.set('fieldLabels', {'FID_': 'inline label - visible with data', 'Entity': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'Color': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'LineWt': 'inline label - visible with data', 'RefName': 'inline label - visible with data', });
lyr_PPKH_COKAL_POLYLINE_11.set('fieldLabels', {'FID_': 'inline label - visible with data', 'Entity': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'Color': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'LineWt': 'inline label - visible with data', 'RefName': 'inline label - visible with data', });
lyr_ArealKoridor_12.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'ELEVATION': 'inline label - visible with data', 'LOKASI_ARE': 'inline label - visible with data', 'LUAS_AREAL': 'inline label - visible with data', 'KAWASAN_HU': 'inline label - visible with data', 'PENGGUNAAN': 'inline label - visible with data', });
lyr_Penyesuaian_Ijin_Koridor_DBK_2025_Polygon__13.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Desc_': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Note': 'inline label - visible with data', 'Number': 'inline label - visible with data', 'Draft': 'inline label - visible with data', 'Area_m2': 'inline label - visible with data', 'Area_Ha': 'inline label - visible with data', });
lyr_Penyesuaian_Ijin_Koridor_DBK_2025_14.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Desc_': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Note': 'inline label - visible with data', 'Number': 'inline label - visible with data', 'Draft': 'inline label - visible with data', });
lyr_dbk_2014_15.set('fieldLabels', {'IPPKH': 'inline label - visible with data', 'luas': 'inline label - visible with data', 'luas_geogr': 'inline label - visible with data', });
lyr_dbk_kadastral_bpn_muaralaung_16.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'Block_Name': 'inline label - visible with data', 'Status_Lah': 'inline label - visible with data', 'Peruntukan': 'inline label - visible with data', 'Luas': 'inline label - visible with data', });
lyr_LAHAN_BEBAS_DBK_20260826_17.set('fieldLabels', {'FID': 'inline label - visible with data', });
lyr_KORIDORIJINKDP_18.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_KoridordanMainroadOperasionalKDP_19.set('fieldLabels', {'Name': 'inline label - visible with data', 'FolderPath': 'inline label - visible with data', 'SymbolID': 'inline label - visible with data', 'AltMode': 'inline label - visible with data', 'Base': 'inline label - visible with data', 'Clamped': 'inline label - visible with data', 'Extruded': 'inline label - visible with data', 'TimeSpan': 'inline label - visible with data', 'TimeStamp': 'inline label - visible with data', 'BeginTime': 'inline label - visible with data', 'EndTime': 'inline label - visible with data', 'Snippet': 'inline label - visible with data', 'PopupInfo': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Id': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', 'FID_': 'inline label - visible with data', 'Entity': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'Color': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'LineWt': 'inline label - visible with data', 'RefName': 'inline label - visible with data', 'Visible': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'StartTime': 'inline label - visible with data', 'ElapsedTim': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'AvgSpeed': 'inline label - visible with data', 'Link': 'inline label - visible with data', 'TrackName': 'inline label - visible with data', 'Position': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Altitude': 'inline label - visible with data', 'LegLength': 'inline label - visible with data', 'LegTime': 'inline label - visible with data', 'LegSpeed': 'inline label - visible with data', 'LegCourse': 'inline label - visible with data', });
lyr_TRACK_LOGGING_ROAD_DBK_BI_CLUSTER_20.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', 'PjgRuas': 'inline label - visible with data', 'PjgTotal': 'inline label - visible with data', });
lyr_TRACK_SURVEY_ROAD_DBK_BI_CLUSTER_21.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', 'PjgRuas': 'inline label - visible with data', 'PjgTotal': 'inline label - visible with data', });
lyr_TRACK_HAULING_ROAD_DBK_BI_CLUSTER_22.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', 'PjgRuas': 'inline label - visible with data', 'PjgTotal': 'inline label - visible with data', });
lyr_CENTERLINE_DESIGN_ALL_SEGMENT_23.set('fieldLabels', {'Layer': 'inline label - visible with data', 'PaperSpace': 'inline label - visible with data', 'SubClasses': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'EntityHand': 'inline label - visible with data', 'Text': 'inline label - visible with data', });
lyr_POINT_STA_TEXT_MERGE_ALL_SEGMENT_R1_24.set('fieldLabels', {'TEXT_STA': 'inline label - visible with data', });
lyr_Jalan_Hauling_DBK_Existing_dan_Konstruksi_r1_25.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', 'PjgRuas': 'inline label - visible with data', 'PjgTotal': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_lom_pit_2604_26.set('fieldLabels', {'Layer': 'inline label - visible with data', 'PaperSpace': 'inline label - visible with data', 'SubClasses': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'EntityHand': 'inline label - visible with data', 'Text': 'inline label - visible with data', });
lyr_DUMP_LOM_48M_27.set('fieldLabels', {'FID_': 'inline label - visible with data', 'Entity': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'Color': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'LineWt': 'inline label - visible with data', 'RefName': 'inline label - visible with data', });
lyr_Realisasi_Bukaan_Lahan_DBK_2024_TW42026_TW2_Updated_EOM_Juni2026_r2_28.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Id': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'FKH': 'inline label - visible with data', 'Segment': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Tahun': 'inline label - visible with data', 'Bulan': 'inline label - visible with data', 'Triwulan': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Luas_All': 'inline label - visible with data', 'in_ppkh': 'inline label - visible with data', 'in_koridor': 'inline label - visible with data', 'out_ppkhko': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'no_urut': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_datahotspot28082026_045154_29.set('fieldLabels', {'Provinsi': 'inline label - visible with data', 'Kab Kota': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Desa': 'inline label - visible with data', 'Tanggal': 'inline label - visible with data', 'Waktu': 'inline label - visible with data', 'Satelit': 'inline label - visible with data', 'Confidence': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_koordinat_kebakaran_hutan_20260830.set('fieldLabels', {'Titik': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Luas Terda': 'inline label - visible with data', 'Vegetasi': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_koordinat_kebakaran_hutan_20260830.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});