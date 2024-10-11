var map = L.map('map', {});

// PAINEIS
map.createPane('pane_0').style.zIndex = 499;
map.createPane('pane_1').style.zIndex = 498;
map.createPane('pane_2').style.zIndex = 497;

var baseMaps = {};
var overlayMaps = {};

// CAMADAS BASE
var googleStreet = L.tileLayer('http://{s}.google.com/vt/lyrs=m,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps["Google Street"] = googleStreet;

var googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
googleSatellite.addTo(map);
baseMaps['Google Satellite'] = googleSatellite;

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps["Google Hybrid"] = googleHybrid;

// CAMADAS VETORIAIS
var _Secoes_Eleitorais_de_Registro = L.geoJSON(_Secoes_Eleitorais_de_Registro_data, {
			pointToLayer: function(geoJsonPoint, latlng) {return L.circleMarker(latlng, {pane: 'pane_0'})},
			style: function (feature) {
				if ( feature.properties["Ganhador"] == '13.0') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 10.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(255, 77, 74, 1.00)'
					}
				} else if ( feature.properties["Ganhador"] == '22.0') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 10.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(58, 229, 20, 1.00)'
					}
				} else if ( feature.properties["Ganhador"] == '55.0') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 8.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(37, 84, 255, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Secoes Eleitorais de Registro</h4><br/>'  +
							'<b>BAIRRO:</b>&ensp;' + feature.properties['Bairro'] + '<br/>' +
							'<b>NAME:</b>&ensp;' + feature.properties['Name'] + '<br/>' +
							'<b>RENATO:</b>&ensp;' + feature.properties['Renato'] + '<br/>' +
							'<b>SAMUEL:</b>&ensp;' + feature.properties['Samuel'] + '<br/>' +
							'<b>SANDRA:</b>&ensp;' + feature.properties['Sandra'] + '<br/>' +
							'<b>VEREADOR 1:</b>&ensp;' + feature.properties['Vereador 1'] + '<br/>' +
							'<b>VEREADOR 2:</b>&ensp;' + feature.properties['Vereador 2'] + '<br/>' +
							'<b>VEREADOR 3:</b>&ensp;' + feature.properties['Vereador 3'] + '<br/>' +
							'<b>VOTOS:</b>&ensp;' + feature.properties['Votos'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Secoes_Eleitorais_de_Registro'] = _Secoes_Eleitorais_de_Registro;

var _Logradouros = L.geoJSON(_Logradouros_data, {
			pane: 'pane_1',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(190, 207, 80, 1.00)'
			}
}).addTo(map);
overlayMaps['Logradouros'] = _Logradouros;

var _Limites_Municipais = L.geoJSON(_Limites_Municipais_data, {
			pane: 'pane_2',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(195, 232, 193, 0.24)'
			}
}).addTo(map);
overlayMaps['Limites_Municipais'] = _Limites_Municipais;

//Função que dá zoom sobre a feição clicada
function clickedFeature(e) {
	var feature = e.target;
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}
}

// LEGENDA
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	div.innerHTML = '<dl>';
	div.innerHTML += 	'<dt class="_Secoes_Eleitorais_de_Registro_lgd">Secoes Eleitorais de Registro</dt>';
	div.innerHTML += 		'<dd class="_Secoes_Eleitorais_de_Registro_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(255, 77, 74, 1.00)"></svg>PT</dd>';
	div.innerHTML += 		'<dd class="_Secoes_Eleitorais_de_Registro_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(58, 229, 20, 1.00)"></svg>PL</dd>';
	div.innerHTML += 		'<dd class="_Secoes_Eleitorais_de_Registro_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(37, 84, 255, 1.00)"></svg>PSD</dd>';
	div.innerHTML += 	'<dt class="_Logradouros_lgd"><svg class="legendIcon"><line x1="0" y1="9" x2="18" y2="9" stroke="rgba(190, 207, 80, 1.00)" stroke-width="3"></svg>Logradouros</dt>';
	div.innerHTML += 	'<dt class="_Limites_Municipais_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(195, 232, 193, 0.24)"></svg>Limites Municipais</dt>';
	div.innerHTML += '</dl>';
	return div
}
legend.addTo(map);

//ESCALA
L.control.scale({
	maxWidth: 250,
	imperial: false
}).addTo(map);

// CONTROLE DE CAMADAS
L.control.layers(baseMaps, overlayMaps, {
	position: 'topright',
	collapsed: false,
	sortLayers: true
}).addTo(map);

function layerON (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'block';
	}
}

function layerOFF (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'none';
	}
}

map.on('overlayadd', layerON);
map.on('overlayremove', layerOFF);

// CALCULA A AREA QUE COBRE TODAS AS CAMADAS
var bounds = {xmin: 180, ymin: 90, xmax: -180, ymax: -90};
for (var layer in overlayMaps) {
	var layerBounds = overlayMaps[layer].getBounds();
	if (bounds.xmin > layerBounds.getSouthWest().lng) {bounds.xmin = layerBounds.getSouthWest().lng};
	if (bounds.ymin > layerBounds.getSouthWest().lat) {bounds.ymin = layerBounds.getSouthWest().lat};
	if (bounds.xmax < layerBounds.getNorthEast().lng) {bounds.xmax = layerBounds.getNorthEast().lng};
	if (bounds.ymax < layerBounds.getNorthEast().lat) {bounds.ymax = layerBounds.getNorthEast().lat};
}
map.fitBounds([
	[bounds.ymin, bounds.xmin],
	[bounds.ymax, bounds.xmax]
]);
