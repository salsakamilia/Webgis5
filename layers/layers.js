var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_highway_motorway_highway_motorway_link_1 = new ol.format.GeoJSON();
var features_highway_motorway_highway_motorway_link_1 = format_highway_motorway_highway_motorway_link_1.readFeatures(json_highway_motorway_highway_motorway_link_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_motorway_highway_motorway_link_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_motorway_highway_motorway_link_1.addFeatures(features_highway_motorway_highway_motorway_link_1);
var lyr_highway_motorway_highway_motorway_link_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_motorway_highway_motorway_link_1, 
                style: style_highway_motorway_highway_motorway_link_1,
                interactive: true,
                title: '<img src="styles/legend/highway_motorway_highway_motorway_link_1.png" /> highway_motorway_highway_motorway_link'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_office_3 = new ol.format.GeoJSON();
var features_office_3 = format_office_3.readFeatures(json_office_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_office_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_office_3.addFeatures(features_office_3);
var lyr_office_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_office_3, 
                style: style_office_3,
                interactive: true,
                title: '<img src="styles/legend/office_3.png" /> office'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_highway_motorway_highway_motorway_link_1.setVisible(true);lyr_building_2.setVisible(true);lyr_office_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_highway_motorway_highway_motorway_link_1,lyr_building_2,lyr_office_3];
lyr_highway_motorway_highway_motorway_link_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'layer': 'layer', 'bridge': 'bridge', 'motorcar': 'motorcar', 'ref': 'ref', 'maxspeed': 'maxspeed', 'foot': 'foot', 'width': 'width', 'surface': 'surface', 'smoothness': 'smoothness', 'oneway': 'oneway', 'name': 'name', 'motorcycle': 'motorcycle', 'lanes': 'lanes', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'shop': 'shop', 'office': 'office', 'admin_level': 'admin_level', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'religion': 'religion', 'evacuation_center': 'evacuation_center', 'amenity': 'amenity', 'sport': 'sport', 'name': 'name', 'leisure': 'leisure', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_office_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'evacuation_center': 'evacuation_center', 'description': 'description', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'building': 'building', 'backup_generator': 'backup_generator', 'admin_level': 'admin_level', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_highway_motorway_highway_motorway_link_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'layer': '', 'bridge': '', 'motorcar': '', 'ref': '', 'maxspeed': '', 'foot': '', 'width': '', 'surface': '', 'smoothness': '', 'oneway': '', 'name': '', 'motorcycle': '', 'lanes': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'shop': '', 'office': '', 'admin_level': '', 'school:type_idn': '', 'operator:type': '', 'religion': '', 'evacuation_center': '', 'amenity': '', 'sport': '', 'name': '', 'leisure': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_office_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'office': '', 'evacuation_center': '', 'description': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'building': '', 'backup_generator': '', 'admin_level': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_highway_motorway_highway_motorway_link_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'motorcar': 'no label', 'ref': 'no label', 'maxspeed': 'no label', 'foot': 'no label', 'width': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'oneway': 'no label', 'name': 'no label', 'motorcycle': 'no label', 'lanes': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'shop': 'no label', 'office': 'no label', 'admin_level': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'religion': 'no label', 'evacuation_center': 'no label', 'amenity': 'no label', 'sport': 'no label', 'name': 'no label', 'leisure': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_office_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'office': 'no label', 'evacuation_center': 'no label', 'description': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'building': 'no label', 'backup_generator': 'no label', 'admin_level': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_office_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});