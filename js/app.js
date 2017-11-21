console.log(data); // DATA

// Función para calcular la cantidad de inscritas
 function enrollment(generation){
	var total = generation.students.length;
	return total;
}

// Función para calcular activas en cantidad
function active(generation){
	var active = 0;
	for (var i = 0 ; i < generation.students.length ; i++){
		if (generation.students[i].active == true){
			active = active + 1;
		}
	}
	return active;
}

// Función para la deserción en cantidad
function drop(total, active){
	var result = total - active;
	return result;
}

// Deserción en porcentaje %
function dropPercentage(total, drop){
	var result = 100 * drop / total;
	return Math.round(result * 100)/100;
}

// Función de promedio de satisfacción:
function happy(generation){
	var ratings = generation.ratings.length;
	var average = 0;
	for (var i = 0 ; i < ratings ; i++){
		var beats = generation.ratings[i].student.supera;
		var cumple = generation.ratings[i].student.cumple;
		var total = beats + cumple;
		average = average + total;
	}
	average = average / generation.ratings.length;
	return Math.round(average * 100)/100;
}

// Función para el promedio de la calificación de los profes ALL SPRINTS
function teacherScore(generation){
	var score = 0;
	for(var i = 0 ; i < generation.ratings.length ; i++){
		score = score + generation.ratings[i].teacher;
	}
	score = score/generation.ratings.length;
	return Math.round(score * 100)/100;
}

// Función para el promedio de la calificación de jedis ALL SPRINTS
function jediScore(generation){
	var score = 0;
	for (var i = 0 ; i < generation.ratings.length ; i++){
		score = score + generation.ratings[i].jedi;
	}
	score = score/generation.ratings.length;
	return Math.round(score * 100)/100;
}

// Función promoters % global
function promotersGlobal(generation){
	var result = 0;
	for (var i = 0 ; i < generation.ratings.length ; i++){
		var promoters = generation.ratings[i].nps.promoters;
		result = result + promoters; 
	}
	return Math.round((result/generation.ratings.length)*100)/100;
}

// Función passive % global
function passiveGlobal(generation){
	var result = 0;
	for (var i = 0 ; i < generation.ratings.length ; i++){
		var passive = generation.ratings[i].nps.passive;
		result = result + passive; 
	}
	return Math.round((result/generation.ratings.length)*100)/100;
}

// Función detractors % global 
function detractorsGlobal(generation){
	var result = 0;
	for (var i = 0 ; i < generation.ratings.length ; i++){
		var detractors = generation.ratings[i].nps.detractors;
		result = result + detractors; 
	}
	return Math.round((result/generation.ratings.length)*100)/100;
}

// función de nps
function nps(generation){
	var result = 0;
	var totalPromoters = 0;
	var totalPassive = 0;
	var totalDetractors = 0;
	for (var i = 0 ; i < generation.ratings.length ; i++){
		var promoters = generation.ratings[i].nps.promoters;
		var detractors = generation.ratings[i].nps.detractors;
		var nps = promoters - detractors;
		result = result + nps;
	}
	return Math.round((result / generation.ratings.length)*100)/100;
}

// Función para filtrar a las alumnas activas
function activeArray(generation){
	var newArray = [];
	// Creando array para traspasar solo a las activas
	for (var i = 0 ; i < generation.students.length ; i++){
		if (generation.students[i].active == true){
			newArray.push(generation.students[i]); 
		}
	}
	var students = newArray.length;
	var sprints = newArray[0].sprints.length;

	return newArray;
}

// Función  para cuántas estudiantes cumplen la meta tech en determinado sprint
function beatsTechPerSprint(generation, sprint) {
    var total = 0;
    for (var i = 0 ; i < generation.students.length ; i++) { //recorriendo alumnas
    	if (generation.students[i].sprints[sprint-1] !== undefined){ //si el array sprint contiene algo
    		if (generation.students[i].sprints[sprint - 1].score.tech >= 1260) {
    		    total = total + 1;
    		}
    	}
    }
    return total;
}


/* Función que calcula el promedio de estudiantes que cumplieron la meta tech durante
todos los sprints */
function averageBeatsTech(generation, totalSprints) {
    var total = 0;
    for (var i = 1; i <= totalSprints; i++) { // recorre los sprints
        total = total + beatsTechPerSprint(generation, i);
        //console.log(i) // sprint
        //console.log(beatsTechPerSprint(generation, i)) // ¿cuántas superan la meta?
    }
    return Math.round((total / totalSprints)*10)/10;
}

// Función para pasar a porcentaje con respecto al total el dato anterior
function averageTechPercentage(active, averageTech){
		var result = (averageTech*100)/active;
		return Math.round(result*10)/10;
	var total = 0;
    for (var i = 1; i <= totalSprints; i++) { // recorre los sprints
        total = total + beatsTechPercentage(generation, i);
    }
    return Math.round((total / totalSprints)*10)/10;
}

// Función para guardar en un array los datos de "supera la meta" de cada sprint
function averageBeatsTechPerSprint(generation, totalSprints) {
	var newArray = [];
    for (var i = 1; i <= totalSprints; i++) { // recorre los sprints
        newArray.push(beatsTechPerSprint(generation, i));
    }
    return newArray; /*nuevo array con las alumnas que alcanzaron la meta por
    sprint, cada índice del array es un sprint*/
} 

// Función  para cuántas estudiantes cumplen la meta HSE en un sprint específico
function beatsHSEPerSprint(generation, sprint) {
    var total = 0;
    for (var i = 0 ; i < generation.students.length ; i++) { //recorriendo alumnas
    	if (generation.students[i].sprints[sprint-1] !== undefined){ //si el array sprint contiene algo
    		if (generation.students[i].sprints[sprint - 1].score.hse >= 840) {
    		    total = total + 1;
    		}
    	}
    }
    return total;
}

/* Función que calcula el promedio de estudiantes que cumplieron la meta HSE
todos los sprints */
function averageBeatsHSE(generation, totalSprints) {
    var total = 0;
    for (var i = 1; i <= totalSprints; i++) { // recorre los sprints
        total = total + beatsHSEPerSprint(generation, i);
    }
    return Math.round((total / totalSprints)*100)/100;
}

/* Funcióin pre porcentaje. Entrega el total de alumnas que participaron de un 
sprint determinado */
function studentsPerSprint(generation, sprint){
	var total = 0;
    for (var i = 0 ; i < generation.students.length ; i++) { //recorriendo alumnas
    	if (generation.students[i].sprints[sprint] !== undefined){ //si el array sprint contiene algo
    		total = total + 1;
    	}
    }
    return total;
}

function averagePercentage(averagePoints, generation, sprint){
	return Math.round(((averagePoints*100)/studentsPerSprint(generation, sprint))*10)/10;
}
// pasar a porcentaje
function averageHSEPercentage(active, averageHSE){
		var result = (averageHSE*100)/active;
		return Math.round(result*10)/10;
}

// Función para guardar en un array los datos de "supera la meta" de cada sprint
function averageBeatsHSEPerSprint(generation, totalSprints) {
	var newArray = [];
    for (var i = 1; i <= totalSprints; i++) { // recorre los sprints
        newArray.push(beatsHSEPerSprint(generation, i));
    }
    return newArray;
} 

/* Función  para cuántas estudiantes cumplen ambas metas en determinado
sprint EN CANTIDAD */
function beatsBoth(generation, sprint) {
    var total = 0;
    var totalStudents = 0;
    for (var i = 0 ; i < generation.students.length ; i++) { //recorriendo alumnas
    	if (generation.students[i].sprints[sprint-1] !== undefined){ //si el array sprint contiene algo
    		totalStudents = totalStudents + 1;
    		if (generation.students[i].sprints[sprint - 1].score.hse >= 840  && generation.students[i].sprints[sprint - 1].score.tech >= 1260) {
    		    total = total + 1;
    		}
    	}
    }
    return Math.round(total*100)/100; /* Entrega el promedio de estudiantes que en determinado
    sprint lograron ambas metas con respecto a todas las estudiantes activas
    en dicho sprint */
}

/* Función que calcula el promedio de global de cuántas superan la meta 
EN PORCENTAJE*/
function achievement(generation, totalSprints) {
    var total = 0;
    for (var i = 1; i <= totalSprints; i++) { // recorre los sprints
        total = total + beatsBoth(generation, i);
        //console.log(i) // sprint
        //console.log(beatsBoth(generation, i)) // ¿cuántas superan la meta?
    }
    return Math.round((total / totalSprints)*100)/100;
}

/* Función  para cuántas estudiantes cumplen ambas metas en determinado
sprint EN PORCENTAJE */
function beatsBothPercentage(generation, sprint) {
    var total = 0;
    var totalStudents = 0;
    for (var i = 0 ; i < generation.students.length ; i++) { //recorriendo alumnas
    	if (generation.students[i].sprints[sprint-1] !== undefined){ //si el array sprint contiene algo
    		totalStudents = totalStudents + 1;
    		if (generation.students[i].sprints[sprint - 1].score.hse >= 840  && generation.students[i].sprints[sprint - 1].score.tech >= 1260) {
    		    total = total + 1;
    		}
    	}
    }
    total = (total*100) / totalStudents;
    return Math.round(total); /* Entrega el promedio de estudiantes que en determinado
    sprint lograron ambas metas con respecto a todas las estudiantes activas
    en dicho sprint */
}

/* Función que calcula el promedio de global de cuántas superan la meta 
EN PORCENTAJE*/
function achievementPercentage(generation, totalSprints) {
    var total = 0;
    for (var i = 1; i <= totalSprints; i++) { // recorre los sprints
        total = total + beatsBothPercentage(generation, i);
        //console.log(i) // sprint
        //console.log(beatsBothPercentage(generation, i)) // ¿cuántas superan la meta?
    }
    return Math.round((total / totalSprints)*100)/100;
}


/* ----------------------------------------------------------------
-------------------------------------------------------------------
Aquí empiezan las funciones de DOM */

function changeColor(id, num){
	if (num < 50){
		id.style.color = "red";
	}
	if (num > 50){
		id.style.color = "green";
	}
}


function event(id, generation, totalSprints, evento){
	id.addEventListener(evento, function(){
		document.getElementById("enrollment-num").innerHTML = enrollment(generation);
		var total = enrollment(generation);
		var actives = [];
		for(var k = 0 ; k < generation.students.length ; k++){
			if(generation.students[k].sprints.length !== 0){
				actives.push(generation.students[k]);
			}
		}
		actives = actives.length;
		var notDrop = active(generation);
		var drops = drop(total, notDrop);
		//var newStudents = activeArray(generation);
		document.getElementById("drop-per").innerHTML = dropPercentage(total, drops) + " %";
		document.getElementById("achievement-num").innerHTML = achievement(generation, totalSprints);
		document.getElementById("achievement-per").innerHTML = achievementPercentage(generation, totalSprints) + " %";
		changeColor(document.getElementById("achievement-per"), achievementPercentage(generation, totalSprints));
		document.getElementById("nps-per").innerHTML = nps(generation) + "%";
		changeColor(document.getElementById("nps-per"), nps(generation));
		document.getElementById("promoters").innerHTML = promotersGlobal(generation) + " %";
		document.getElementById("passive").innerHTML = passiveGlobal(generation) + " %";
		document.getElementById("detractors").innertHTML = detractorsGlobal(generation) + " %";
		document.getElementById("satisfaction-per").innerHTML = happy(generation) + " %";
		changeColor(document.getElementById("satisfaction-per"), happy(generation));
		document.getElementById("teacher-rating").innerHTML = teacherScore(generation);
		document.getElementById("jedi-rating").innerHTML = jediScore(generation);

		var techSelect = document.getElementById("tech-sprint");
		var hseSelect = document.getElementById("hse-sprint");
		//var sprint = activeArray[0].sprints.length

		var optionOverall = document.getElementById("tech-overall");
		var option1 = document.getElementById("tech-option-one");
		var option2 = document.getElementById("tech-option-two");
		var option3 = document.getElementById("tech-option-three");
		var option4 = document.getElementById("tech-option-four");

		var optionOverallHSE = document.getElementById("overall");;
		var option1HSE = document.getElementById("option-one");
		var option2HSE = document.getElementById("option-two");
		var option3HSE = document.getElementById("option-three");
		var option4HSE = document.getElementById("option-four");



		// Para mostrar el overall si este ya viene selecto TECH
		if (techSelect.value == optionOverall.value){
			document.getElementById("tech-num").innerHTML = averageBeatsTech(generation, totalSprints);
			document.getElementById("tech-per").innerHTML = averageTechPercentage(actives, averageBeatsTech(generation, totalSprints)) + " %";
			changeColor(document.getElementById("tech-per"), averageTechPercentage(actives, averageBeatsTech(generation, totalSprints)));
		}

		techSelect.addEventListener("change",function(){
			if(techSelect.value == optionOverall.value){ // Si se selecciona overall
				document.getElementById("tech-num").innerHTML = averageBeatsTech(generation, totalSprints);
				document.getElementById("tech-per").innerHTML = averageTechPercentage(actives, averageBeatsTech(generation, totalSprints)) + " %";
				changeColor(document.getElementById("tech-per"), averageTechPercentage(actives, averageBeatsTech(generation, totalSprints)));
			} 
			if(techSelect.value == option1.value){ // Si se selecciona Sprint 1
				var newArray = averageBeatsTechPerSprint(generation, totalSprints);
				document.getElementById("tech-num").innerHTML = newArray[0];
				document.getElementById("tech-per").innerHTML = averageTechPercentage(actives, newArray[0]) + " %";
				changeColor(document.getElementById("tech-per"), averageTechPercentage(actives, newArray[0]));
			}
			if(techSelect.value == option2.value){ // Si se seleccion Sprint 2
				var newArray = averageBeatsTechPerSprint(generation, totalSprints);
				document.getElementById("tech-num").innerHTML = newArray[1];
								document.getElementById("tech-per").innerHTML = averageTechPercentage(actives, newArray[1]) + " %";
				changeColor(document.getElementById("tech-per"), averageTechPercentage(actives, newArray[1]));
			}
			if(techSelect.value == option3.value){ // Si se selecciona Sprint 3
				var newArray = averageBeatsTechPerSprint(generation, totalSprints);
				document.getElementById("tech-num").innerHTML = newArray[2]; 
				document.getElementById("tech-per").innerHTML = averageTechPercentage(actives, newArray[2]) + " %";
				changeColor(document.getElementById("tech-per"), averageTechPercentage(actives, newArray[2]));
			}
			if(techSelect.value == option4.value){ // Si se selecciona Sprint 4
				var newArray = averageBeatsTechPerSprint(generation, totalSprints);
				document.getElementById("tech-num").innerHTML = newArray[3];
				document.getElementById("tech-per").innerHTML = averageTechPercentage(actives, newArray[3]) + " %";
				changeColor(document.getElementById("tech-per"), averageTechPercentage(actives, newArray[3]));
			}
		})

		// Para mostrar el overall si este ya viene selecto HSE
		if (hseSelect.value == optionOverallHSE.value){
			document.getElementById("hse-num").innerHTML = averageBeatsHSE(generation, totalSprints);
			document.getElementById("hse-per").innerHTML = averageHSEPercentage(actives, averageBeatsHSE(generation, totalSprints)) + " %";
			changeColor(document.getElementById("hse-per"), averageHSEPercentage(actives, averageBeatsHSE(generation, totalSprints)));
		}

		hseSelect.addEventListener("change",function(){
			if(hseSelect.value == optionOverallHSE.value){
				document.getElementById("hse-num").innerHTML = averageBeatsHSE(generation, totalSprints);
				document.getElementById("hse-per").innerHTML = averageHSEPercentage(actives, averageBeatsHSE(generation, totalSprints)) + " %";
				changeColor(document.getElementById("hse-per"), averageHSEPercentage(actives, averageBeatsHSE(generation, totalSprints)));
			}


			if(hseSelect.value == option1HSE.value){
				var newArray = averageBeatsHSEPerSprint(generation, totalSprints);
				document.getElementById("hse-num").innerHTML = newArray[0];
				document.getElementById("hse-per").innerHTML = averageHSEPercentage(actives, newArray[0]) + " %";
				changeColor(document.getElementById("hse-per"), averageHSEPercentage(actives, newArray[0]));
			}
			if(hseSelect.value == option2HSE.value){
				var newArray = averageBeatsHSEPerSprint(generation, totalSprints);
				document.getElementById("hse-num").innerHTML = newArray[1];
				document.getElementById("hse-per").innerHTML = averageHSEPercentage(actives, newArray[1]) + " %";
				changeColor(document.getElementById("hse-per"), averageHSEPercentage(actives, newArray[1]));
			}
			if(hseSelect.value == option3HSE.value){
				var newArray = averageBeatsHSEPerSprint(generation, totalSprints);
				document.getElementById("hse-num").innerHTML = newArray[2];
				document.getElementById("hse-per").innerHTML = averageHSEPercentage(actives, newArray[2])+ " %";
				changeColor(document.getElementById("hse-per"), averageHSEPercentage(actives, newArray[2]));
			}
			if(hseSelect.value == option4HSE.value){
				var newArray = averageBeatsHSEPerSprint(generation, totalSprints);
				document.getElementById("hse-num").innerHTML = newArray[3];
				document.getElementById("hse-per").innerHTML = averageHSEPercentage(actives, newArray[3])+ " %";
				changeColor(document.getElementById("hse-per"), averageHSEPercentage(actives, newArray[3]));
			}
		});
		// Para ver los resultados de Tech Skills por sprint y no por overall
		// globalId es el select
		// sprint es la cantidad de sprints
		function deleteTechOptions(globalId, sprint){
			if(sprint == 4){
				option4.classList.remove("invisible");
				option3.classList.remove("invisible");
			}
			if(sprint == 3){
				option4.classList.add("invisible");
				option3.classList.remove("invisible");
			}
			if(sprint == 2){
				option4.classList.add("invisible");
				option3.classList.add("invisible");
			}
		}
		deleteTechOptions(techSelect, totalSprints);

		function deleteHSEOptions(globalId, sprint){
			if(sprint == 4){
				option4HSE.classList.remove("invisible");
				option3.classList.remove("invisible");
			}
			if(sprint == 3){
				option4HSE.classList.add("invisible");
				option3HSE.classList.remove("invisible");
			}
			if(sprint == 2){
				option4HSE.classList.add("invisible");
				option3HSE.classList.add("invisible");
			}
		}
		deleteHSEOptions(hseSelect, totalSprints);
	});
}


// Título del menú desplegable
var pickCity = document.getElementById("title");
var invisible = document.getElementById("invisible");

// Evento para desplegar menú
pickCity.addEventListener("click", function(){
	invisible.classList.toggle("invisible");
});

// Generaciones en el HTML
var LIM2016_2 = document.getElementById("LIM-2016-2");
var LIM2017_1 = document.getElementById("LIM-2017-1");
var LIM2017_2 = document.getElementById("LIM-2017-2");

var AQP2016_2 = document.getElementById("AQP-2016-2");
var AQP2017_1 = document.getElementById("AQP-2017-1");

var CDMX2017_1 = document.getElementById("CDMX-2017-1");
var CDMX2017_2 = document.getElementById("CDMX-2017-2");

var SCL2016_2 = document.getElementById("SCL-2016-2");
var SCL2017_1 = document.getElementById("SCL-2017-1");
var SCL2017_2 = document.getElementById("SCL-2017-2");

// Generaciones en el objeto DATA (en JS)
var limaI = data.LIM["2016-2"];
var limaII = data.LIM["2017-1"];
var limaIII = data.LIM["2017-2"];

var arequipaI = data.AQP["2016-2"];
var arequipaII = data.AQP["2017-1"];

var mexicoI = data.CDMX["2017-1"];
var mexicoII = data.CDMX["2017-2"];

var santiagoI = data.SCL["2016-2"];
var santiagoII = data.SCL["2017-1"];
var santiagoIII = data.SCL["2017-2"];

// Que los datos cambien al dar click en una generación
event(LIM2016_2, limaI, limaI.ratings.length, "click");
event(LIM2017_1, limaII, limaII.ratings.length, "click");
event(LIM2017_2, limaIII, limaIII.ratings.length, "click");
event(AQP2016_2, arequipaI, arequipaI.ratings.length, "click");
event(AQP2017_1, arequipaII, arequipaII.ratings.length, "click");
event(CDMX2017_1, mexicoI, mexicoI.ratings.length, "click");
event(CDMX2017_2, mexicoII, mexicoII.ratings.length, "click");
event(SCL2016_2, santiagoI, santiagoI.ratings.length, "click");
event(SCL2017_1, santiagoII, santiagoII.ratings.length, "click");
event(SCL2017_2, santiagoIII, santiagoIII.ratings.length, "click");


function changeTitle(generation, title, newTitle){
	generation.addEventListener("click", function(){
		invisible.classList.toggle("invisible");
		var icon = "<i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>";
		title.innerHTML = newTitle + icon;
	});
}


// Que cambie el título del menú desplegable según qué sede se selecciona
changeTitle(LIM2016_2, pickCity, "Lima 2016 - II");
changeTitle(LIM2017_1, pickCity, "Lima 2017 - I");
changeTitle(LIM2017_2, pickCity, "Lima 2017 - II");

changeTitle(AQP2016_2, pickCity, "Arequipa 2016 - II");
changeTitle(AQP2017_1, pickCity, "Arequipa 2017 - I");

changeTitle(CDMX2017_1, pickCity, "Ciudad de México 2017 - I");
changeTitle(CDMX2017_2, pickCity, "Ciudad de México 2017 - II");

changeTitle(SCL2016_2, pickCity, "Santiago de Chile 2016 - II");
changeTitle(SCL2017_1, pickCity, "Santiago de Chile 2017 - I");
changeTitle(SCL2017_2, pickCity, "Santiago de Chile 2017 - II");


// Que Santiago de Chile 2017-II esté por default 
event(window, santiagoIII, santiagoIII.ratings.length, "load");
