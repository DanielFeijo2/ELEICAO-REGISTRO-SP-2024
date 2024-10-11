function filter(evt, column) {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = evt.target;
	filter = input.value.toUpperCase();
	table = evt.path[4];
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 2; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[column];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function goToMap(layer, featureID){
	var feature = layer._layers[featureID];
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}

	document.getElementById('mapBtn').click();
	feature.openPopup();

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	};
}

tableHTML__Secoes_Eleitorais_de_Registro = '<table id="_Secoes_Eleitorais_de_Registro_table">';
tableHTML__Secoes_Eleitorais_de_Registro += 	'<tr>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<th>Mapa</th>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<th>Bairro</th>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<th>Name</th>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<th>Renato</th>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<th>Samuel</th>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<th>Sandra</th>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<th>Vereador 1</th>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<th>Vereador 2</th>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<th>Vereador 3</th>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<th>Votos</th>';
tableHTML__Secoes_Eleitorais_de_Registro += 	'</tr>';
tableHTML__Secoes_Eleitorais_de_Registro += 	'<tr>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<td></td>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar Bairro"></td>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar Name"></td>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar Renato"></td>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar Samuel"></td>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar Sandra"></td>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar Vereador 1"></td>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar Vereador 2"></td>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar Vereador 3"></td>';
tableHTML__Secoes_Eleitorais_de_Registro += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar Votos"></td>';
tableHTML__Secoes_Eleitorais_de_Registro += 	'</tr>';

var _Secoes_Eleitorais_de_Registro_IDs = Object.keys(_Secoes_Eleitorais_de_Registro._layers);
for (var i=0; i < _Secoes_Eleitorais_de_Registro_IDs.length; i++){
	var feature = _Secoes_Eleitorais_de_Registro._layers[_Secoes_Eleitorais_de_Registro_IDs[i]].feature;
	tableHTML__Secoes_Eleitorais_de_Registro += '<tr>';
	tableHTML__Secoes_Eleitorais_de_Registro += 	'<td onclick="goToMap(_Secoes_Eleitorais_de_Registro, ' + _Secoes_Eleitorais_de_Registro_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Secoes_Eleitorais_de_Registro += 	'<td>' + feature.properties['Bairro'] + '</td>';
	tableHTML__Secoes_Eleitorais_de_Registro += 	'<td>' + feature.properties['Name'] + '</td>';
	tableHTML__Secoes_Eleitorais_de_Registro += 	'<td>' + feature.properties['Renato'] + '</td>';
	tableHTML__Secoes_Eleitorais_de_Registro += 	'<td>' + feature.properties['Samuel'] + '</td>';
	tableHTML__Secoes_Eleitorais_de_Registro += 	'<td>' + feature.properties['Sandra'] + '</td>';
	tableHTML__Secoes_Eleitorais_de_Registro += 	'<td>' + feature.properties['Vereador 1'] + '</td>';
	tableHTML__Secoes_Eleitorais_de_Registro += 	'<td>' + feature.properties['Vereador 2'] + '</td>';
	tableHTML__Secoes_Eleitorais_de_Registro += 	'<td>' + feature.properties['Vereador 3'] + '</td>';
	tableHTML__Secoes_Eleitorais_de_Registro += 	'<td>' + feature.properties['Votos'] + '</td>';
	tableHTML__Secoes_Eleitorais_de_Registro += '</tr>';
}

tableHTML__Secoes_Eleitorais_de_Registro += '</table>';
document.getElementById('_Secoes_Eleitorais_de_Registro_tab').innerHTML = tableHTML__Secoes_Eleitorais_de_Registro;

