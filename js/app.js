
/*Recargar la pagina*/
window.onload = function(){
/*Evento de click que permite desplegar el menu, bajo el cargo
del usuario*/
var job = document.getElementsByClassName("job");
	for(var i=0; i < job.length; i++){
		job[i].addEventListener("click", showMenu);
	}

	function showMenu(){
		var listMenu = this.getElementsByClassName("itemList")[0];
		console.log(listMenu);
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

/*Variables Globales*/
var city = data.AQP;
var route = '2016-2';
var counter = 0;
var inactiveCounter = 0;
var percentCounter = 0;
var enrollmentContainerInfo = document.getElementsByClassName('enrollment-info izq')[0];
var enrollmentContainerDropout = document.getElementsByClassName('enrollment-info der')[0];
var textEnrollment = document.getElementsByClassName('text-enrollment');




/*Suma total de las Estudiantes*/
function sumAllStudents() {
	for (var i = 0; i < city[route].students.length; i++) {
		counter ++;
	}
	var paragraphNode = document.createTextNode(counter);
	var paragraph = document.createElement('p');	
		paragraph.appendChild(paragraphNode);
		paragraph.classList.add('total-enrollment');
		enrollmentContainerInfo.insertBefore(paragraph , textEnrollment[0]);
}

/*Porcentaje total de Deserción*/
function percentDropout() {
	for (var i = 0; i < city[route].students.length; i++) {
		if (city[route].students[i].active == false) {
		inactiveCounter++;
		} else {
			continue;
		}
	var percentCounter = counter*inactiveCounter/100;	
	}
	var paragraphNode = document.createTextNode(percentCounter + '%');
	var paragraph = document.createElement('p');	
		paragraph.appendChild(paragraphNode);
		paragraph.classList.add('total-enrollment', 'red');
		enrollmentContainerDropout.insertBefore(paragraph , textEnrollment[1]);
}


sumAllStudents(city, route);
percentDropout(city, route);


console.log(data);