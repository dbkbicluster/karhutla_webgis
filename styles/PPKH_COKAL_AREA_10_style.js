var size = 0;
var placement = 'point';
function categories_PPKH_COKAL_AREA_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Disposal':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,92,92,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7.6}),fill: new ol.style.Fill({color: 'rgba(21,64,206,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Jetty':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7.6}),fill: new ol.style.Fill({color: 'rgba(224,119,95,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PIT':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,255,243,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7.6}),fill: new ol.style.Fill({color: 'rgba(223,93,228,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Sarana Infrastruktur':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(20,205,128,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7.6}),fill: new ol.style.Fill({color: 'rgba(20,205,128,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_PPKH_COKAL_AREA_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Layer");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_PPKH_COKAL_AREA_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
