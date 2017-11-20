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
	var parrafo7=document.createElement('p');
	var parrafo8=document.createElement('p');
	var parrafo9=document.createElement('p');
	var parrafo10=document.createElement('p');

	var contenedor= document.getElementsByClassName('imagenes')[0];
	

	var contenedor2= document.getElementsByClassName('imagenes2')[0];


	var contenedor3= document.getElementsByClassName('imagenes3')[0];

	var contenedor4= document.getElementsByClassName('imagenes4')[0]

	var contenedor5=document.getElementsByClassName('imagenes5')[0]

	var superior= document.getElementsByClassName('superior')[0];
		superior.style.display = '';

	var todas= (data.CDMX['2017-1'].students.filter((student)=>{return ((student.sprints[0].score.hse) && (student.sprints[1].score.hse) && (student.sprints[2].score.hse) > 840) && ((student.sprints[0].score.tech) && (student.sprints[1].score.tech) && (student.sprints[2].score.tech) > 1260)})).length;

	var activas= '';
	for (var i=0; i < data.CDMX['2017-1'].students.length; i++){
		if (data.CDMX['2017-1'].students[i].active ===true){
			activas++;
		}
	}	var totalEstudiantes= data.CDMX['2017-1'].students.length;
	var estudiantesActivas= document.createTextNode(totalEstudiantes);
	var totalStudents= document.createTextNode('Inscritas');
	var desert= document.createTextNode(((((totalEstudiantes-activas)*100)/totalEstudiantes).toFixed()) +'%');
	var desertoras= document.createTextNode('Inactivas');
	var active= document.createTextNode((((activas*100)/totalEstudiantes).toFixed()) +'%');
	var activadas= document.createTextNode('Activas');
	var todass= document.createTextNode('Cumple: ' + todas );
	var todas= document.createTextNode((((todas*100)/totalEstudiantes).toFixed()) +'%');


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
	parrafo7.appendChild(todass);
	parrafo8.appendChild(todas);
	contenedor4.appendChild(parrafo7);
	contenedor4.appendChild(parrafo8);
	superior.appendChild(contenedor);
	superior.appendChild(contenedor2);
	superior.appendChild(contenedor3);
	superior.appendChild(contenedor4);



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

//NPS
var satis1= parseInt(promo1-detra1);
var satis2= parseInt(promo2-detra2);
var satis3= parseInt(promo2-detra3);
var satisAcumulada= (((satis1+satis2+satis3)/3).toFixed());

	var satis= document.createTextNode('NPS');
	var satiss= document.createTextNode(satisAcumulada + ' %');

	parrafo9.appendChild(satis);
	parrafo10.appendChild(satiss);
	contenedor5.appendChild(parrafo9);
	contenedor5.appendChild(parrafo10);
	superior.appendChild(contenedor5);

// Satisfaccion

var sati1= parseInt(unos+unoc);
var sati2= parseInt(doss+dosc);
var sati3= parseInt(tress+tresc);
var satiAcumulada= ((((sati1+sati2+sati3)/3)*100/totalEstudiantes).toFixed());
console.log(satiAcumulada);


google.charts.load('current', {callback: drawCharts, packages: ['bar', 'corechart', 'table', 'line']
});

function drawCharts() {
	sprintChart();
	jedis();
}

function sprintChart(){
	var data1 = google.visualization.arrayToDataTable([
		['Sprint', 'No Cumple', 'Cumple', 'Supera'],
		['S1', unon, unoc, unos],
		['S2', dosn, dosc, doss],
		['S3', tresn, tresc, tress],
		]);

	var options = {
		chart: {
			title: 'Promedio de Notas por Sprint',
				},
		bars: 'vertical',
		vAxis: {format: 'decimal'},
		height: 350,
		width: 380,
		colors: ['#1b9e77', '#d95f02', '#7570b3']
	};

	var chart1 = new google.charts.Bar(document.getElementById('chart_div'));

	chart1.draw(data1, google.charts.Bar.convertOptions(options));
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
		['S1',  jediUno, profUno],
		['S2',  jediDos, profDos],
		['S3',  jediTres, profTres],
		]);

	var options = {
		title: 'Puntaje Profesores y Jedis',
		curveType: 'function',
		height: 350,
		width: 380,
		legend: { position: 'bottom' }
	};

	var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

	chart.draw(data, options);
}

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
		width: 380,
		legend: { position: 'bottom' },
		pointsVisible: true,
	};

	var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));

	chart.draw(data, options);
}


var menu = document.getElementsByClassName("Mexico")[0];
	menu.style.display = 'none';

};


