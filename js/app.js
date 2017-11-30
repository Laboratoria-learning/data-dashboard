/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`

var sede = data.LIM;
var bootcamp = '2017-2'
var counterAll = 0;
var percentCounter = 0;
var studentsPass = 0;
var izq = document.getElementsByClassName('enrollment-info izq');
var der = document.getElementsByClassName('enrollment-info der');
var text = document.getElementsByClassName('text-enrollment');

window.onload = function () {
  //Arequipa
  var arequipa20162 = document.getElementById('areq20162');
  arequipa20162.addEventListener('click'), function () {
    sede = data.AQP;
    bootcamp = '2016-2';
    stadistics(sede, bootcamp);
  });

  var arequipa20171 = document.getElementById('areq20171');
  arequipa20171.addEventListener('click'), function () {
    sede = data.AQP;
    bootcamp = '2017-1';
    stadistics(sede, bootcamp);
  });

  //México
  var mexico20171 = document.getElementById('cdm20171');
  mexico20171.addEventListener('click'), function () {
    sede = data.CDMX;
    bootcamp = '2017-1';
    stadistics(sede, bootcamp);
  });

  var mexico20172 = document.getElementById('cdm20172');
  mexico20172.addEventListener('click'), function () {
    sede = data.CDMX;
    bootcamp = '2017-2';
    stadistics(sede, bootcamp);
  });

  //Lima

  var lima20172 = document.getElementById('lim20172');
  lima20172.addEventListener('click'), function () {
    sede = data.LIM;
    bootcamp = '2017-2';
    stadistics(sede, bootcamp);
  });

  var lima20171 = document.getElementById('lim20171');
  lima20171.addEventListener('click'), function () {
    sede = data.LIM;
    bootcamp = '2017-1';
    stadistics(sede, bootcamp);
  });

  var lima20162 = document.getElementById('lim20162');
  lima20162.addEventListener('click'), function () {
    sede = data.LIM;
    bootcamp = '2016-2';
    stadistics(sede, bootcamp);
  });

  //Chile
  var chile20172 = document.getElementById('sdc20172');
  chile20172.addEventListener('click'), function () {
    sede = data.SCL;
    bootcamp = '2017-2';
    stadistics(sede, bootcamp);
  });
  var chile20171 = document.getElementById('sdc20171');
  chile20171.addEventListener('click'), function () {
    sede = data.SCL;
    bootcamp = '2017-1';
    stadistics(sede, bootcamp);
  });
  var chile20162 = document.getElementById('sdc20162');
  chile20162.addEventListener('click'), function () {
    sede = data.SCL;
    bootcamp = '2016-2';
    stadistics(sede, bootcamp);
  });

  /*Total de las estudiantes*/
function allStudents(sede, bootcamp) {
  counterAll = 0;
  for (var i = 0; i < sede[bootcamp].students.length; i++) {
		counterAll++;
	}
}

/*Estudiantes Activas*/
function activeStudents(sede, bootcamp) {
	var counter = 0;
	for (var i = 0; i < sede[bootcamp].students.length; i++) {
		if (sede[bootcamp].students[i].active == true) {
		counter++;
		}
	}
	var paragraphReplace = document.getElementsByClassName('total-enrollment')[0];
	/*paragraph.innerHTML = counter;*/
	var paragraphNode = document.createTextNode(counter);
	var paragraph = document.createElement('p');	
		paragraph.appendChild(paragraphNode);
		paragraph.classList.add('total-enrollment');
		enrollmentContainerInfo.replaceChild(paragraph , paragraphReplace);
}

/*Deserción*/
function percentDropout(sede, bootcamp) {
	var inactiveCounter = 0;
	for (var i = 0; i < sede[bootcamp].students.length; i++) {
		if (sede[bootcamp].students[i].active == false) {
		inactiveCounter++;
		} else {
			continue;
		}
	var percentCounter = parseInt(inactiveCounter/counterAll*100);	
	}
	var paragraphReplace = document.getElementsByClassName('total-enrollment')[1];
	var paragraphNode = document.createTextNode(percentCounter + '%');
	var paragraph = document.createElement('p');	
		paragraph.appendChild(paragraphNode);
		paragraph.classList.add('total-enrollment', 'red');
		enrollmentContainerDropout.replaceChild(paragraph , paragraphReplace);
}

/*Cantidad de Alumnas que pasan el 70% de los sprint*/
function studentsMeetTarget(sede, bootcamp){
	for (var i = 0; i < sede[bootcamp].students.length; i++) {
		for (var j = 0; j < sede[bootcamp].ratings.length; j++) {
			if (sede[bootcamp].students[i].active == true) {
				var tech = [];
				tech.push(sede[boolean].students[i].sprints[j].score.tech);
				//csole.log(tech);
			} 
		}
	}
}


/*NPS*/
function npsPromoter(sede, bootcamp) {
	for (var i = 0; i < sede[bootcamp].ratings.length; i++) {
		var promoter = [];
		promoter.push(sede[bootcamp].ratings[i].nps.promoters);
		//console.log(promoter);
	}
}


function stadistics(sede, bootcamp) {
  allStudents(sede, bootcamp);
	activeStudents(sede, bootcamp);
	percentDropout(sede, bootcamp);
	studentsMeetTarget(sede, bootcamp);
	npsPromoter(sede, bootcamp);
}

//console.log(data);