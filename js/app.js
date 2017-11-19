/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// Menú por ciudad! 
function Mexico() {
	var menu = document.getElementsByClassName("Mexico")[0];
	menu.style.display = '';
}
function Arequipa() {
	var menu = document.getElementsByClassName("Mexico")[0];
	menu.style.display = '';
}

// Datos CDMX 2017-1 
function generacionI() {
	var container= document.getElementById('container');
	var parrafo=document.createElement('p');
	var activas= '';
		for (var i=0; i < data.CDMX['2017-1'].students.length; i++){
		if (data.CDMX['2017-1'].students[i].active ===true){
			activas++;
		}
}	var totalEstudiantes= data.CDMX['2017-1'].students.length;

	var supera= [];
	for (var i=0; i < data.CDMX['2017-1'].ratings.length; i++){
		supera.push(data.CDMX['2017-1'].ratings[i].student.supera);
		}

		var unos=parseInt((((supera[0])*24/100).toFixed()));
		var doss=parseInt((((supera[1])*24/100).toFixed()));
		var tress=parseInt((((supera[2])*24/100).toFixed()));

	var cumple= [];
	for (var i=0; i < data.CDMX['2017-1'].ratings.length; i++){
		cumple.push(data.CDMX['2017-1'].ratings[i].student.cumple);
		}
		var unoc=parseInt((((cumple[0])*24/100).toFixed()));
		var dosc=parseInt((((cumple[1])*24/100).toFixed()));
		var tresc=parseInt((((cumple[2])*24/100).toFixed()));

	var nocumple= [];
	for (var i=0; i < data.CDMX['2017-1'].ratings.length; i++){
		nocumple.push(data.CDMX['2017-1'].ratings[i].student['no-cumple']);
		}
		var unon=parseInt((((nocumple[0])*24/100).toFixed()));
		var dosn=parseInt((((nocumple[1])*24/100).toFixed()));
		var tresn=parseInt((((nocumple[2])*24/100).toFixed()));

 	google.charts.load('current', {callback: drawCharts, packages: ['bar', 'corechart', 'table', 'line']
});

function drawCharts() {
  sprintChart();
  desertionChart();

}

       function sprintChart(){
        var data1 = google.visualization.arrayToDataTable([
          ['Sprint', 'No Cumple', 'Cumple', 'Supera'],
          ['1', unon, unoc, unos],
          ['2', dosn, dosc, doss],
          ['3', tresn, tresc, tress],
          ]);

        var options = {
          chart: {
            title: 'Promedio',
            subtitle: 'Promedio de notas por Sprint',
          },
          bars: 'vertical',
          vAxis: {format: 'decimal'},
          height: 400,
          colors: ['#1b9e77', '#d95f02', '#7570b3']
        };

        var chart1 = new google.charts.Bar(document.getElementById('chart_div'));

        chart1.draw(data1, google.charts.Bar.convertOptions(options));
}

	function desertionChart(){
		var datas = google.visualization.arrayToDataTable([
          ['Alumnas', 'Estudian'],
          ['Activas', 9],
          ['Inactivas', 15],
        ]);


        var options = {
          title: 'Estudiantes activas e inactivas'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(datas, options);

	}
	function jedis(){
	
		var jediScore= [];
			for (var i = 0; i < data.CDMX['2017-1'].ratings.length; i++) {
				jediScore.push(parseInt(data.CDMX['2017-1'].ratings[i].jedi))
			}
		var jediUno=parseInt(jediScore[0]);
		var jediDos=parseInt(jediScore[1]);
		var jediTres=parseInt(jediScore[2]);

	var profScore=[];
	
	       var data = google.visualization.arrayToDataTable([
          ['Sprint', 'JediMaster', 'Profes'],
          ['1',  jediUno,      400],
          ['2',  jediDos,      460],
          ['3',  jediTres,       1120],
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
}

	var estudiantesActivas= document.createTextNode('Alumnas presentes en CDMX generación 2017-1: ' + activas);
	var totalEstudiantes= data.CDMX['2017-1'].students.length;
	var decersion= document.createTextNode('Desertoras ' + (totalEstudiantes - activas));
	parrafo.appendChild(decersion);
	parrafo.appendChild(estudiantesActivas);
	container.appendChild(parrafo);




};


