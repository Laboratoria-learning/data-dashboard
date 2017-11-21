/*Variables Globales*/
var city = data.AQP;
var route = '2016-2';
var counterAll = 0;
var percentCounter = 0;
var studentsPass = 0;
var title = document.getElementsByClassName('title')[0];
var genTitle = document.getElementsByClassName('subtitle')[0];
var enrollmentContainerInfo = document.getElementsByClassName('enrollment-info izq')[0];
var enrollmentContainerDropout = document.getElementsByClassName('enrollment-info der')[0];
var textEnrollment = document.getElementsByClassName('text-enrollment');

/*Recargar la página*/
window.onload = function(){
/*Evento de click que permite desplegar el menú, bajo el cargo
del usuario*/
var job = document.getElementsByClassName("job");
	for(var i=0; i < job.length; i++){
		job[i].addEventListener("click", showMenu);
	}

	function showMenu(){
		var listMenu = this.getElementsByClassName("itemList")[0];
		/*Al clickear muestra el menú (bajo el cargo del 
		usuario)*/
		if (listMenu.classList.contains("hide")){
			listMenu.classList.remove("hide");
			listMenu.classList.add("show");
		/*Al clickear esconde el menú (bajo el cargo del 
		usuario)*/
		} else {
			listMenu.classList.remove("show");
			listMenu.classList.add("hide");

		}
	}

}

stadistics(city, route);

//Asignando valores a las variables según la generación elegida
//Arequipa
var arequipa20162 = document.getElementById('aqp2016-2');
arequipa20162.addEventListener('click', function(){
	city = data.AQP;
	route = '2016-2';
	title.innerHTML = 'Arequipa';
	genTitle.innerHTML = '2016-2';
	stadistics(city, route);
});

var arequipa20171 = document.getElementById('aqp2017-1');
arequipa20171.addEventListener('click', function(){
	city = data.AQP;
	route = '2017-1';
	title.innerHTML = 'Arequipa';
	genTitle.innerHTML = '2017-1';
	stadistics(city, route);
});

//México
var mexico20171 = document.getElementById('mexico2017-1');
mexico20171.addEventListener('click', function(){
	city = data.CDMX;
	route = '2017-1';
	title.innerHTML = 'Ciudad de Mexico';
	genTitle.innerHTML = '2017-1';
	stadistics(city, route);
});

var mexico20172 = document.getElementById('mexico2017-2');
mexico20172.addEventListener('click', function(){
	city = data.CDMX;
	route = '2017-2';
	title.innerHTML = 'Ciudad de Mexico';
	genTitle.innerHTML = '2017-2';
	stadistics(city, route);
});

//Lima
var lima20162 = document.getElementById('lima2016-2');
lima20162.addEventListener('click', function(){
	city = data.LIM;
	route = '2016-2';
	title.innerHTML = 'Lima';
	genTitle.innerHTML = '2016-2';
	stadistics(city, route);
});

var lima20171 = document.getElementById('lima2017-1');
lima20171.addEventListener('click', function(){
	city = data.LIM;
	route = '2017-1';
	title.innerHTML = 'Lima';
	genTitle.innerHTML = '2017-1';
	stadistics(city, route);
});

var lima20172 = document.getElementById('lima2017-2');
lima20172.addEventListener('click', function(){
	city = data.LIM;
	route = '2017-2';
	title.innerHTML = 'Lima';
	genTitle.innerHTML = '2017-2';
	stadistics(city, route);
});

//Santiago de Chile
var santiago20162 = document.getElementById('santiago2016-2');
santiago20162.addEventListener('click', function(){
	city = data.SCL;
	route = '2016-2';
	title.innerHTML = 'Santiago de Chile';
	genTitle.innerHTML = '2016-2';
	stadistics(city, route);
});

var santiago20171 = document.getElementById('santiago2017-1');
santiago20171.addEventListener('click', function(){
	city = data.SCL;
	route = '2017-1';
	title.innerHTML = 'Santiago de Chile';
	genTitle.innerHTML = '2017-1';
	stadistics(city, route);
});

var santiago20172 = document.getElementById('santiago2017-2');
santiago20172.addEventListener('click', function(){
	city = data.SCL;
	route = '2017-2';
	title.innerHTML = 'Santiago de Chile';
	genTitle.innerHTML = '2017-2';
	stadistics(city, route);
});

/*Suma todas las estudiantes*/
function sumAllStudents(city, route) {
	counterAll = 0;
	for (var i = 0; i < city[route].students.length; i++) {
		counterAll++;
	}
}

/*Suma total de las Estudiantes Activas*/
function sumActiveStudents(city, route) {
	var counter = 0;
	for (var i = 0; i < city[route].students.length; i++) {
		if (city[route].students[i].active == true) {
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

/*Porcentaje total de Deserción*/
function percentDropout(city, route) {
	var inactiveCounter = 0;
	for (var i = 0; i < city[route].students.length; i++) {
		if (city[route].students[i].active == false) {
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
function studentsMeetTarget(city, route){
	for (var i = 0; i < city[route].students.length; i++) {
		for (var j = 0; j < city[route].ratings.length; j++) {
			if (city[route].students[i].active == true) {
				var tech = [];
				tech.push(city[route].students[i].sprints[j].score.tech);
				//csole.log(tech);
			} 
		}
	}
}

//var totalSprints = city[route].ratings.length;

/*NPS Promoter*/
function npsPromoter(city, route) {
	for (var i = 0; i < city[route].ratings.length; i++) {
		var promoter = [];
		promoter.push(city[route].ratings[i].nps.promoters);
		//console.log(promoter);
	}
}


function stadistics(city, route) {
	sumAllStudents(city, route);
	sumActiveStudents(city, route);
	percentDropout(city, route);
	studentsMeetTarget(city, route); 
	npsPromoter(city, route);
}

//console.log(data);