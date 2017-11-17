/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

function myFunction() {
	var menu = document.getElementsByClassName("Mexico")[0];
	menu.style.display = '';
}

function generacionI() {
	var container= document.getElementById('container');
	var parrafo=document.createElement('p');
	var activas= '';
	for (var i=0; i < data.CDMX['2017-1'].students.length; i++){
		if (data.CDMX['2017-1'].students[i].active ===true){
			activas++;
		}
	}
	var estudiantesActivas= document.createTextNode('Alumnas presentes en CDMX generación 2017-1: ' + activas);
	var totalEstudiantes= data.CDMX['2017-1'].students.length;
	var decersion= document.createTextNode('Desertoras ' + (totalEstudiantes - activas));
	parrafo.appendChild(decersion);
	container.appendChild(parrafo);

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Alumnas', 'Estudian'],
          ['Activas', activas],
          ['Inactivas', (totalEstudiantes - activas)],

        ]);

        var options = {
          title: 'Estudiantes activas e inactivas'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


}

function generacionII() {
	var container= document.getElementById('container');
	var parrafo=document.createElement('p');
	var activas= '';
	for (var i=0; i < data.CDMX['2017-2'].students.length; i++){
		if (data.CDMX['2017-2'].students[i].active ===true){
			activas++;
		}
	}
	var estudiantesActivas= document.createTextNode('Alumnas presentes en CDMX generación 2017-2: ' + activas);
	var totalEstudiantes= data.CDMX['2017-2'].students.length;
	var decersion= document.createTextNode('Desertoras ' + (totalEstudiantes - activas));
	parrafo.appendChild(decersion);
	container.appendChild(parrafo);


	 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {

        var data = google.visualization.arrayToDataTable([
          ['Alumnas', 'Estudian'],
          ['Activas', activas],
          ['Inactivas', (totalEstudiantes - activas)],

        ]);

        var options = {
          title: 'Estudiantes activas e inactivas'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
}

