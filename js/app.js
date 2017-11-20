// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// Menú por ciudad! 
function Mexico() {
	var menu = document.getElementsByClassName("Mexico")[0];
	menu.style.display = '';
}
function Arequipa() {
	var menu = document.getElementsByClassName("Arequipa")[0];
	menu.style.display = '';
}

function Lima() {
	var menu = document.getElementsByClassName("Lima")[0];
	menu.style.display = '';
}

function Santiago() {
	var menu = document.getElementsByClassName("Santiago")[0];
	menu.style.display = '';
}


// Datos CDMX 2017-1 
function generacionI() {
	var container= document.getElementById('container');
	var parrafo=document.createElement('p');
	var parrafo2=document.createElement('p');
	var parrafo3=document.createElement('p');
	var parrafo4=document.createElement('p');
	var parrafo5=document.createElement('p');
	var parrafo6=document.createElement('p');
	var contenedor= document.getElementsByClassName('imagenes')[0];
		contenedor.style.display = '';

	var contenedor2= document.getElementsByClassName('imagenes2')[0];
		contenedor2.style.display = '';

	var contenedor3= document.getElementsByClassName('imagenes3')[0];
		contenedor3.style.display = '';

	var activas= '';
	for (var i=0; i < data.CDMX['2017-1'].students.length; i++){
		if (data.CDMX['2017-1'].students[i].active ===true){
			activas++;
		}
	}	var totalEstudiantes= data.CDMX['2017-1'].students.length;
	var estudiantesActivas= document.createTextNode(totalEstudiantes);
	var totalStudents= document.createTextNode('Inscritas');
	var desert= document.createTextNode(totalEstudiantes-activas);
	var desertoras= document.createTextNode('Inactivas');
	var active= document.createTextNode(activas);
	var activadas= document.createTextNode('Activas');

	parrafo.appendChild(totalStudents);
	parrafo2.appendChild(estudiantesActivas);
	contenedor.appendChild(parrafo);
	contenedor.appendChild(parrafo2);
	parrafo3.appendChild(desertoras);
	parrafo4.appendChild(desert);
	contenedor2.appendChild(parrafo3);
	contenedor2.appendChild(parrafo4);
	parrafo5.appendChild(activadas);
	parrafo6.appendChild(active);
	contenedor3.appendChild(parrafo5);
	contenedor3.appendChild(parrafo6);

	
	

// Calculando las notas por sptrint
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

// Calculando el NPS

var promoters= [];
for (var i=0; i < data.CDMX['2017-1'].ratings.length; i++){
	promoters.push(data.CDMX['2017-1'].ratings[i].nps.promoters);
}

var promo1=parseInt(promoters[0]);
var promo2=parseInt(promoters[1]);
var promo3=parseInt(promoters[2]);

var passive= [];
for (var i=0; i < data.CDMX['2017-1'].ratings.length; i++){
	passive.push(data.CDMX['2017-1'].ratings[i].nps.passive);
}
var pass1=parseInt(passive[0]);
var pass2=parseInt(passive[1]);
var pass3=parseInt(passive[2]);

var detractors= [];
for (var i=0; i < data.CDMX['2017-1'].ratings.length; i++){
	detractors.push(data.CDMX['2017-1'].ratings[i].nps.detractors);
}
var detra1=parseInt(detractors[0]);
var detra2=parseInt(detractors[1]);
var detra3=parseInt(detractors[2]);


google.charts.load('current', {callback: drawCharts, packages: ['bar', 'corechart', 'table', 'line']
});

function drawCharts() {
	sprintChart();
	desertionChart();
	jedis();
	nps1();
	nps2();
	nps3();
	satisChart();
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
		height: 350,
		width: 350,
		colors: ['#1b9e77', '#d95f02', '#7570b3']
	};

	var chart1 = new google.charts.Bar(document.getElementById('chart_div'));

	chart1.draw(data1, google.charts.Bar.convertOptions(options));
}

function desertionChart(){
	var datas = google.visualization.arrayToDataTable([
		['Alumnas', 'Estudian'],
		['Activas', activas],
		['Inactivas', (totalEstudiantes - activas)],
		]);


	var options = {
		title: 'Estudiantes activas e inactivas',
		height: 350,
		width: 350,
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart'));

	chart.draw(datas, options);

}

//Notas de Jedi y de Profes
var jediScore= [];
var profScore=[];
for (var i=0; i < data.CDMX['2017-1'].ratings.length; i++){
	jediScore.push(data.CDMX['2017-1'].ratings[i].jedi);
	profScore.push(data.CDMX['2017-1'].ratings[i].teacher);
}

var jediUno=jediScore[0];
var jediDos=jediScore[1];
var jediTres=jediScore[2];
var profUno=profScore[0];
var profDos=profScore[1];
var profTres=profScore[2];

function jedis(){
	var data = google.visualization.arrayToDataTable([
		['Sprint', 'JediMaster', 'Profes'],
		['1',  jediUno, profUno],
		['2',  jediDos, profDos],
		['3',  jediTres, profTres],
		]);

	var options = {
		title: 'Performance de Profesores y Jedis',
		curveType: 'function',
		height: 350,
		width: 350,
		legend: { position: 'bottom' }
	};

	var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

	chart.draw(data, options);
}
//Notas de HSE y Tech
var hseScore=[];
for (i=0; i<data.CDMX['2017-1'].students.length; i++){ 
	for (h=0; h<data.CDMX['2017-1'].students[i].sprints.length;h++){  
		hseScore.push(data.CDMX['2017-1'].students[i].sprints[h].score.tech);
	}}


	function jedis(){
		var data = google.visualization.arrayToDataTable([
			['Sprint', 'JediMaster', 'Profes'],
			['1',  jediUno, profUno],
			['2',  jediDos, profDos],
			['3',  jediTres, profTres],
			]);

		var options = {
			title: 'Performance de Profesores y Jedis',
			curveType: 'function',
			height: 350,
		width: 350,
			legend: { position: 'bottom' }
		};

		var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

		chart.draw(data, options);
	}

// Satisfaccion Laboratoria
var satis1= parseInt(unos+unoc);
var satis2= parseInt(doss+dosc);
var satis3= parseInt(tress+tresc);

function satisChart() {
	var data = google.visualization.arrayToDataTable([
		['Sprint', 'Satisfacciíon de Estudiantes'],
		['1',  satis1],
		['2',  satis2],
		['3',  satis3],
		]);

	var options = {
		title: 'Satisfacción de estudiantes por Sprint',
		curveType: 'function',
		legend: { position: 'bottom' },
		pointsVisible: true,
	};

	var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));

	chart.draw(data, options);
}

// Supera meta Tech por sprint

function techChart() {
	var data = google.visualization.arrayToDataTable([
		['Sprint', 'Promedio de Notas Técnicas'],
		['1',  satis1],
		['2',  satis2],
		['3',  satis3],
		]);

	var options = {
		title: 'Satisfacción de estudiantes por Sprint',
		curveType: 'function',
		height: 350,
		width: 350,
		legend: { position: 'bottom' },
		pointsVisible: true,
	};

	var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));

	chart.draw(data, options);
}


// Nps
function nps1(){
	var datas = google.visualization.arrayToDataTable([
		['NPS', 'Estudiantes'],
		['Promotoras', promo1],
		['Pasivas', pass1],
		['Detractoras', detra1],
		]);


	var options = {
		height: 350,
		width: 350,
		title: 'Estudiantes activas e inactivas'
	};

	var chart = new google.visualization.PieChart(document.getElementById('nps'));

	chart.draw(datas, options);

}
function nps2(){
	var datas = google.visualization.arrayToDataTable([
		['NPS', 'Estudiantes'],
		['Promotoras', promo2],
		['Pasivas', pass2],
		['Detractoras', detra2],
		]);


	var options = {
		title: 'Estudiantes activas e inactivas',
		height: 350,
		width: 350,
	};

	var chart = new google.visualization.PieChart(document.getElementById('nps2'));

	chart.draw(datas, options);

}

function nps3(){
	var datas = google.visualization.arrayToDataTable([
		['NPS', 'Estudiantes'],
		['Promotoras', promo3],
		['Pasivas', pass3],
		['Detractoras', detra3],
		]);


	var options = {
		title: 'Estudiantes activas e inactivas',
		height: 350,
		width: 350,
	};

	var chart = new google.visualization.PieChart(document.getElementById('nps3'));

	chart.draw(datas, options);

}

var menu = document.getElementsByClassName("Mexico")[0];
	menu.style.display = 'none';

};


