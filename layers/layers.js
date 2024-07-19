ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([79.861466, 6.911854, 79.880634, 6.927288]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_65_70_1 = new ol.format.GeoJSON();
var features_65_70_1 = format_65_70_1.readFeatures(json_65_70_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_65_70_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_65_70_1.addFeatures(features_65_70_1);
var lyr_65_70_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_65_70_1, 
                style: style_65_70_1,
                popuplayertitle: "65_70",
                interactive: true,
                title: '<img src="styles/legend/65_70_1.png" /> 65_70'
            });
var format_70_75_2 = new ol.format.GeoJSON();
var features_70_75_2 = format_70_75_2.readFeatures(json_70_75_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_70_75_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_75_2.addFeatures(features_70_75_2);
var lyr_70_75_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_75_2, 
                style: style_70_75_2,
                popuplayertitle: "70_75",
                interactive: true,
                title: '<img src="styles/legend/70_75_2.png" /> 70_75'
            });
var format_75_3 = new ol.format.GeoJSON();
var features_75_3 = format_75_3.readFeatures(json_75_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_75_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_3.addFeatures(features_75_3);
var lyr_75_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_3, 
                style: style_75_3,
                popuplayertitle: "75",
                interactive: true,
                title: '<img src="styles/legend/75_3.png" /> 75'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_65_70_1.setVisible(true);lyr_70_75_2.setVisible(true);lyr_75_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_65_70_1,lyr_70_75_2,lyr_75_3];
lyr_65_70_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_70_75_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_75_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_65_70_1.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_70_75_2.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_75_3.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_65_70_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_70_75_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_75_3.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_75_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});