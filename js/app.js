console.log(data); // DATA


var container = document.getElementById('container');
console.log(container);


// Función para calcular la cantidad de inscritas
 function enrollment(generation){
	var total = generation.students.length;
	return total;
}
// ejemplo
var enrollmentSCL20162 = data.SCL["2016-2"];
enrollmentSCL20162 = enrollment(enrollmentSCL20162);
console.log("la cantidad de inscritas es " + enrollmentSCL20162);


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
// ejemplo 
var activeSCL20162 = data.SCL["2016-2"];
activeSCL20162 = active(activeSCL20162);
console.log("la cantidad de activas es " + activeSCL20162);


// Función para la deserción en cantidad
function drop(total, active){
	var result = total - active;
	return result;
}
// ejemplo
var dropSCL20162 = drop(enrollmentSCL20162, activeSCL20162);
console.log("la cantida de deserción es " + dropSCL20162);


// Deserción en porcentaje %
function dropPercentage(total, drop){
	var result = 100 * drop / total;
	return Math.round(result * 100)/100;
}
// ejemplo
var dropPercentage20162 = dropPercentage(enrollmentSCL20162, dropSCL20162);
console.log("la deserción en porcentaje es " + dropPercentage20162);

// Función de promedio de satisfacción:
function happy(generation){
	var ratings = generation.ratings.length;
	var average = 0;
	for (var i = 0 ; i < ratings ; i++){
		var beats = generation.ratings[i].student.supera;
		var cumple = generation.ratings[i].student.cumple;
		var total = beats + cumple;
		average = average + total;
		console.log(total);
	}
	average = average / generation.ratings.length;
	return Math.round(average * 100)/100;
}
//ejemplo
var happySCL20162 = data.SCL["2016-2"];
happySCL20162 = happy(happySCL20162);
console.log("el porcentaje de satisfacción es " + happySCL20162);
 

// Función para el promedio de la calificación de los profes ALL SPRINTS
function teacherScore(generation){
	var score = 0;
	for(var i = 0 ; i < generation.ratings.length ; i++){
		score = score + generation.ratings[i].teacher;
		console.log(generation.ratings[i].teacher)
	}
	score = score/generation.ratings.length;
	return Math.round(score * 100)/100;
}
//ejemplo
var teacherScoreSCL20162 = data.SCL['2016-2'];
teacherScoreSCL20162 = teacherScore(teacherScoreSCL20162);
console.log("el promedio de la calificación de profes es " + teacherScoreSCL20162);

// Función para el promedio de la calificación de jedis ALL SPRINTS
function jediScore(generation){
	var score = 0;
	for (var i = 0 ; i < generation.ratings.length ; i++){
		score = score + generation.ratings[i].jedi;
		console.log(generation.ratings[i].jedi);
	}
	score = score/generation.ratings.length;
	return Math.round(score * 100)/100;
}
//ejemplo 
var jediScoreSCL20162 = data.SCL['2016-2'];
jediScoreSCL20162 = jediScore(jediScoreSCL20162);
console.log("el promedio de la calificación de jedis es " + jediScoreSCL20162);

// Función promoters % global
function promotersGlobal(generation){
	var result = 0;
	for (var i = 0 ; i < generation.ratings.length ; i++){
		var promoters = generation.ratings[i].nps.promoters;
		result = result + promoters; 
	}
	return Math.round((result/generation.ratings.length)*100)/100;
}
//ejemplo 
var promotersGlobalSCL2016 = data.SCL["2016-2"];
promotersGlobalSCL2016 = promotersGlobal(promotersGlobalSCL2016);
console.log("el porcentaje promedio de promoters es " + promotersGlobalSCL2016);

// Función passive % global
function passiveGlobal(generation){
	var result = 0;
	for (var i = 0 ; i < generation.ratings.length ; i++){
		var passive = generation.ratings[i].nps.passive;
		result = result + passive; 
	}
	return Math.round((result/generation.ratings.length)*100)/100;
}
//ejemplo 
var passiveGlobalSCL2016 = data.SCL["2016-2"];
passiveGlobalSCL2016 = passiveGlobal(passiveGlobalSCL2016);
console.log("el porcentaje promedio de passive es " + passiveGlobalSCL2016);

// Función detractors % global 
function detractorsGlobal(generation){
	var result = 0;
	for (var i = 0 ; i < generation.ratings.length ; i++){
		var detractors = generation.ratings[i].nps.detractors;
		result = result + detractors; 
	}
	return Math.round((result/generation.ratings.length)*100)/100;
}
//ejemplo 
var detractorsGlobalSCL2016 = data.SCL["2016-2"];
detractorsGlobalSCL2016 = detractorsGlobal(detractorsGlobalSCL2016);
console.log("el porcentaje promedio de detractors es " + detractorsGlobalSCL2016);

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
// ejemplo
var npsSCL2016 = data.SCL["2016-2"];
npsSCL2016 = nps(npsSCL2016);
console.log("el nps promedio es " + npsSCL2016);

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
// ejemplo
var activeArraySCL20162 = data.SCL["2016-2"];
activeArraySCL20162 = activeArray(activeArraySCL20162);
console.log(activeArraySCL20162);



// Función  para cuántas estudiantes cumplen la meta tech en determinado sprint
function beatsTechPerSprint(generation, sprint) {
    var total = 0;
    for (var i = 0; i < activeArray(generation).length; i++) { //recorriendo alumnas
        if (activeArray(generation)[i].sprints[sprint - 1].score.tech >= 1260) {
            total = total + 1;
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
        console.log(i) // sprint
        console.log(beatsTechPerSprint(generation, i)) // ¿cuántas superan la meta?
    }
    return Math.round((total / totalSprints)*100)/100;
}
//ejemplo
var averageBeatsTechSCL20162 = data.SCL["2016-2"];
var sprints = activeArraySCL20162[0].sprints.length;
averageBeatsTechSCL20162 = averageBeatsTech(averageBeatsTechSCL20162, sprints);
console.log(averageBeatsTechSCL20162);

// Función para guardar los datos de "supera la meta" de cada sprint
function averageBeatsTechPerSprint(generation, totalSprints) {
	var newArray = [];
    for (var i = 1; i <= totalSprints; i++) { // recorre los sprints
        newArray.push(beatsTechPerSprint(generation, i));
    }
    return newArray;
} 

// ejemplo
var cosita = averageBeatsTechPerSprint(data.SCL["2016-2"], sprints);
console.log(cosita);


// ----------------------------------------------------------------
// ----------------------------------------------------------------
/* 
Funciones:
- enrollment
- active
- drop
- dropPercentage
- happy
- teacherScore
- jediScore
- nps

Generaciones: 
- data.AQP["2016-2"]
- data.AQP["2017-1"]

- data.CDMX["2017-1"]
- data.CDMX["2017-2"]

- data.LIM["2016-2"]
- data.LIM["2017-1"]
- data.LIM["2017-2"]

- data.SCL["2016-2"]
- data.SCL["2017-1"]
- data.SCL["2017-2"]
*/
console.log("AREQUIPA I");
var arequipaI = data.AQP["2016-2"];

var enrollmentAQP2016_2 = enrollment(arequipaI);
console.log("la cantidad de inscritas es " + enrollmentAQP2016_2);

var activeAQP2016_2 = active(arequipaI);
console.log("la cantidad de activas es " + activeAQP2016_2);

var dropAQP2016_2 = drop(enrollmentAQP2016_2, activeAQP2016_2);
console.log("la cantida de deserción es " + dropAQP2016_2);

var dropPercentageAQP2016_2 = dropPercentage(enrollmentAQP2016_2, dropAQP2016_2);
console.log("la deserción en porcentaje es " + dropPercentageAQP2016_2);

var happyAQP2016_2 = happy(arequipaI);
console.log("el porcentaje de satisfacción es " + happyAQP2016_2);

var teacherScoreAQP2016_2 = teacherScore(arequipaI);
console.log("el promedio de la calificación de profes es " + teacherScoreAQP2016_2);

var jediScoreAQP2016_2 = jediScore(arequipaI);
console.log("el promedio de la calificación de jedis es " + jediScoreAQP2016_2);

var npsAQP2016_2 = nps(arequipaI);
console.log("el nps promedio es " + npsAQP2016_2);

var promotersGlobalAQP2016_2 = promotersGlobal(arequipaI);
console.log("el porcentaje promedio de promoters es " + promotersGlobalAQP2016_2);

var passiveGlobalAQP2016_2 = passiveGlobal(arequipaI);
console.log("el porcentaje promedio de passives es " + passiveGlobalAQP2016_2);

var detractorsGlobalAQP2016_2 = detractorsGlobal(arequipaI);
console.log("el porcentaje promedio de detractors es " + detractorsGlobalAQP2016_2);



console.log("AREQUIPA II");
var arequipaII = data.AQP["2017-1"];

var enrollmentAQP2017_1 = enrollment(arequipaII);
console.log("la cantidad de inscritas es " + enrollmentAQP2017_1);

var activeAQP2017_1 = active(arequipaII);
console.log("la cantidad de activas es " + activeAQP2017_1);

var dropAQP2017_1 = drop(enrollmentAQP2017_1, activeAQP2017_1);
console.log("la cantida de deserción es " + dropAQP2017_1);

var dropPercentageAQP2017_1 = dropPercentage(enrollmentAQP2017_1, dropAQP2017_1);
console.log("la deserción en porcentaje es " + dropPercentageAQP2017_1);

var happyAQP2017_1 = happy(arequipaII);
console.log("el porcentaje de satisfacción es " + happyAQP2017_1);

var teacherScoreAQP2017_1 = teacherScore(arequipaII);
console.log("el promedio de la calificación de profes es " + teacherScoreAQP2017_1);

var jediScoreAQP2017_1 = jediScore(arequipaII);
console.log("el promedio de la calificación de jedis es " + jediScoreAQP2017_1);

var npsAQP2017_1 = nps(arequipaII);
console.log("el nps promedio es " + npsAQP2017_1);

var promotersGlobalAQP2017_1 = promotersGlobal(arequipaII);
console.log("el porcentaje promedio de promoters es " + promotersGlobalAQP2017_1);

var passiveGlobalAQP2017_1 = passiveGlobal(arequipaII);
console.log("el porcentaje promedio de passives es " + passiveGlobalAQP2017_1);

var detractorsGlobalAQP2017_1 = detractorsGlobal(arequipaII);
console.log("el porcentaje promedio de detractors es " + detractorsGlobalAQP2017_1);



console.log("MÉXICO I");
var mexicoI = data.CDMX["2017-1"];

var enrollmentCDMX2017_1 = enrollment(mexicoI);
console.log("la cantidad de inscritas es " + enrollmentCDMX2017_1);

var activeCDMX2017_1 = active(mexicoI);
console.log("la cantidad de activas es " + activeCDMX2017_1);

var dropCDMX2017_1 = drop(enrollmentCDMX2017_1, activeCDMX2017_1);
console.log("la cantida de deserción es " + dropCDMX2017_1);

var dropPercentageCDMX2017_1 = dropPercentage(enrollmentCDMX2017_1, dropCDMX2017_1);
console.log("la deserción en porcentaje es " + dropPercentageCDMX2017_1);

var happyCDMX2017_1 = happy(mexicoI);
console.log("el porcentaje de satisfacción es " + happyCDMX2017_1);

var teacherScoreCDMX2017_1 = teacherScore(mexicoI);
console.log("el promedio de la calificación de profes es " + teacherScoreCDMX2017_1);

var jediScoreCDMX2017_1 = jediScore(mexicoI);
console.log("el promedio de la calificación de jedis es " + jediScoreCDMX2017_1);

var npsCDMX2017_1 = nps(mexicoI);
console.log("el nps promedio es " + npsCDMX2017_1);

var promotersGlobalMX2017_1 = promotersGlobal(mexicoI);
console.log("el porcentaje promedio de promoters es " + promotersGlobalMX2017_1);

var passiveGlobalMX2017_1 = passiveGlobal(mexicoI);
console.log("el porcentaje promedio de passives es " + passiveGlobalMX2017_1);

var detractorsGlobalMX2017_1 = detractorsGlobal(mexicoI);
console.log("el porcentaje promedio de detractors es " + detractorsGlobalMX2017_1);


console.log("MÉXICO II");
var mexicoII = data.CDMX["2017-2"];

var enrollmentCDMX2017_2 = enrollment(mexicoII);
console.log("la cantidad de inscritas es " + enrollmentCDMX2017_2);

var activeCDMX2017_2 = active(mexicoII);
console.log("la cantidad de activas es " + activeCDMX2017_2);

var dropCDMX2017_2 = drop(enrollmentCDMX2017_2, activeCDMX2017_2);
console.log("la cantida de deserción es " + dropCDMX2017_2);

var dropPercentageCDMX2017_2 = dropPercentage(enrollmentCDMX2017_2, dropCDMX2017_2);
console.log("la deserción en porcentaje es " + dropPercentageCDMX2017_2);

var happyCDMX2017_2 = happy(mexicoII);
console.log("el porcentaje de satisfacción es " + happyCDMX2017_2);

var teacherScoreCDMX2017_2 = teacherScore(mexicoII);
console.log("el promedio de la calificación de profes es " + teacherScoreCDMX2017_2);

var jediScoreCDMX2017_2 = jediScore(mexicoII);
console.log("el promedio de la calificación de jedis es " + jediScoreCDMX2017_2);

var npsCDMX2017_2 = nps(mexicoII);
console.log("el nps promedio es " + npsCDMX2017_2);

var promotersGlobalMX2017_2 = promotersGlobal(mexicoII);
console.log("el porcentaje promedio de promoters es " + promotersGlobalMX2017_2);

var passiveGlobalMX2017_2 = passiveGlobal(mexicoII);
console.log("el porcentaje promedio de passives es " + passiveGlobalMX2017_2);

var detractorsGlobalMX2017_2 = detractorsGlobal(mexicoII);
console.log("el porcentaje promedio de detractors es " + detractorsGlobalMX2017_2);

console.log("LIMA I");
var limaI = data.LIM["2016-2"];

var enrollmentLIM2016_2 = enrollment(limaI);
console.log("la cantidad de inscritas es " + enrollmentLIM2016_2);

var activeLIM2016_2 = active(limaI);
console.log("la cantidad de activas es " + activeLIM2016_2);

var dropLIM2016_2 = drop(enrollmentLIM2016_2, activeLIM2016_2);
console.log("la cantida de deserción es " + dropLIM2016_2);

var dropPercentageLIM2016_2 = dropPercentage(enrollmentLIM2016_2, dropLIM2016_2);
console.log("la deserción en porcentaje es " + dropPercentageLIM2016_2);

var happyLIM2016_2 = happy(limaI);
console.log("el porcentaje de satisfacción es " + happyLIM2016_2);

var teacherScoreLIM2016_2 = teacherScore(limaI);
console.log("el promedio de la calificación de profes es " + teacherScoreLIM2016_2);

var jediScoreLIM2016_2 = jediScore(limaI);
console.log("el promedio de la calificación de jedis es " + jediScoreLIM2016_2);

var npsLIM2016_2 = nps(limaI);
console.log("el nps promedio es " + npsLIM2016_2);

var promotersGlobalLIM2016_2 = promotersGlobal(limaI);
console.log("el porcentaje promedio de promoters es " + promotersGlobalLIM2016_2);

var passiveGlobalLIM2016_2 = passiveGlobal(limaI);
console.log("el porcentaje promedio de passives es " + passiveGlobalLIM2016_2);

var detractorsGlobalLIM2016_2 = detractorsGlobal(limaI);
console.log("el porcentaje promedio de detractors es " + detractorsGlobalLIM2016_2);



console.log("LIMA II");
var limaII = data.LIM["2017-1"];

var enrollmentLIM2017_1 = enrollment(limaII);
console.log("la cantidad de inscritas es " + enrollmentLIM2017_1);

var activeLIM2017_1 = active(limaII);
console.log("la cantidad de activas es " + activeLIM2017_1);

var dropLIM2017_1 = drop(enrollmentLIM2017_1, activeLIM2017_1);
console.log("la cantida de deserción es " + dropLIM2017_1);

var dropPercentageLIM2017_1 = dropPercentage(enrollmentLIM2017_1, dropLIM2017_1);
console.log("la deserción en porcentaje es " + dropPercentageLIM2017_1);

var happyLIM2017_1 = happy(limaII);
console.log("el porcentaje de satisfacción es " + happyLIM2017_1);

var teacherScoreLIM2017_1 = teacherScore(limaII);
console.log("el promedio de la calificación de profes es " + teacherScoreLIM2017_1);

var jediScoreLIM2017_1 = jediScore(limaII);
console.log("el promedio de la calificación de jedis es " + jediScoreLIM2017_1);

var npsLIM2017_1 = nps(limaII);
console.log("el nps promedio es " + npsLIM2017_1);

var promotersGlobalLIM2017_1 = promotersGlobal(limaII);
console.log("el porcentaje promedio de promoters es " + promotersGlobalLIM2017_1);

var passiveGlobalLIM2017_1 = passiveGlobal(limaII);
console.log("el porcentaje promedio de passives es " + passiveGlobalLIM2017_1);

var detractorsGlobalLIM2017_1 = detractorsGlobal(limaII);
console.log("el porcentaje promedio de detractors es " + detractorsGlobalLIM2017_1);



console.log("LIMA III");
var limaIII = data.LIM["2017-2"];

var enrollmentLIM2017_2 = enrollment(limaIII);
console.log("la cantidad de inscritas es " + enrollmentLIM2017_2);

var activeLIM2017_2 = active(limaIII);
console.log("la cantidad de activas es " + activeLIM2017_2);

var dropLIM2017_2 = drop(enrollmentLIM2017_2, activeLIM2017_2);
console.log("la cantida de deserción es " + dropLIM2017_2);

var dropPercentageLIM2017_2 = dropPercentage(enrollmentLIM2017_2, dropLIM2017_2);
console.log("la deserción en porcentaje es " + dropPercentageLIM2017_2);

var happyLIM2017_2 = happy(limaIII);
console.log("el porcentaje de satisfacción es " + happyLIM2017_2);

var teacherScoreLIM2017_2 = teacherScore(limaIII);
console.log("el promedio de la calificación de profes es " + teacherScoreLIM2017_2);

var jediScoreLIM2017_2 = jediScore(limaIII);
console.log("el promedio de la calificación de jedis es " + jediScoreLIM2017_2);

var npsLIM2017_2 = nps(limaIII);
console.log("el nps promedio es " + npsLIM2017_2);

var promotersGlobalLIM2017_2 = promotersGlobal(limaIII);
console.log("el porcentaje promedio de promoters es " + promotersGlobalLIM2017_2);

var passiveGlobalLIM2017_2 = passiveGlobal(limaIII);
console.log("el porcentaje promedio de passives es " + passiveGlobalLIM2017_2);

var detractorsGlobalLIM2017_2 = detractorsGlobal(limaIII);
console.log("el porcentaje promedio de detractors es " + detractorsGlobalLIM2017_2);


console.log("SANTIAGO II");
var santiagoII = data.SCL["2017-1"];

var enrollmentSCL2017_1 = enrollment(santiagoII);
console.log("la cantidad de inscritas es " + enrollmentSCL2017_1);

var activeSCL2017_1 = active(santiagoII);
console.log("la cantidad de activas es " + activeSCL2017_1);

var dropSCL2017_1 = drop(enrollmentSCL2017_1, activeSCL2017_1);
console.log("la cantida de deserción es " + dropSCL2017_1);

var dropPercentageSCL2017_1 = dropPercentage(enrollmentSCL2017_1, dropSCL2017_1);
console.log("la deserción en porcentaje es " + dropPercentageSCL2017_1);

var happySCL2017_1 = happy(santiagoII);
console.log("el porcentaje de satisfacción es " + happySCL2017_1);

var teacherScoreSCL2017_1 = teacherScore(santiagoII);
console.log("el promedio de la calificación de profes es " + teacherScoreSCL2017_1);

var jediScoreSCL2017_1 = jediScore(santiagoII);
console.log("el promedio de la calificación de jedis es " + jediScoreSCL2017_1);

var npsSCL2017_1 = nps(santiagoII);
console.log("el nps promedio es " + npsSCL2017_1);

var promotersGlobalSCL2017_1 = promotersGlobal(santiagoII);
console.log("el porcentaje promedio de promoters es " + promotersGlobalSCL2017_1);

var passiveGlobalSCL2017_1 = passiveGlobal(santiagoII);
console.log("el porcentaje promedio de passives es " + passiveGlobalSCL2017_1);

var detractorsGlobalSCL2017_1 = detractorsGlobal(santiagoII);
console.log("el porcentaje promedio de detractors es " + detractorsGlobalSCL2017_1);


console.log("SANTIAGO III");
var santiagoIII = data.SCL["2017-2"];

var enrollmentSCL2017_2 = enrollment(santiagoIII);
console.log("la cantidad de inscritas es " + enrollmentSCL2017_2);

var activeSCL2017_2 = active(santiagoIII);
console.log("la cantidad de activas es " + activeSCL2017_2);

var dropSCL2017_2 = drop(enrollmentSCL2017_2, activeSCL2017_2);
console.log("la cantida de deserción es " + dropSCL2017_2);

var dropPercentageSCL2017_2 = dropPercentage(enrollmentSCL2017_2, dropSCL2017_2);
console.log("la deserción en porcentaje es " + dropPercentageSCL2017_2);

var happySCL2017_2 = happy(santiagoIII);
console.log("el porcentaje de satisfacción es " + happySCL2017_2);

var teacherScoreSCL2017_2 = teacherScore(santiagoIII);
console.log("el promedio de la calificación de profes es " + teacherScoreSCL2017_2);

var jediScoreSCL2017_2 = jediScore(santiagoIII);
console.log("el promedio de la calificación de jedis es " + jediScoreSCL2017_2);

var npsSCL2017_2 = nps(santiagoIII);
console.log("el nps promedio es " + npsSCL2017_2);

var promotersGlobalSCL2017_2 = promotersGlobal(santiagoIII);
console.log("el porcentaje promedio de promoters es " + promotersGlobalSCL2017_2);

var passiveGlobalSCL2017_2 = passiveGlobal(santiagoIII);
console.log("el porcentaje promedio de passives es " + passiveGlobalSCL2017_2);

var detractorsGlobalSCL2017_2 = detractorsGlobal(santiagoIII);
console.log("el porcentaje promedio de detractors es " + detractorsGlobalSCL2017_2);




/*
generation.students[0].sprints[0].score.tech 
generation.students[1].sprints[0].score.tech 
generation.students[2].sprints[0].score.tech

generation.students[0].sprints[1].score.tech
generation.students[1].sprints[1].score.tech 
generation.students[2].sprints[1].score.tech

generation.students[0].sprints[2].score.tech
generation.students[1].sprints[2].score.tech 
generation.students[2].sprints[2].score.tech

generation.students[0].sprints[3].score.tech
generation.students[1].sprints[3].score.tech 
generation.students[2].sprints[3].score.tech

Funciones:
- enrollment
- active
- drop
- dropPercentage
- happy
- teacherScore
- jediScore
- nps

*/

/* function changeColor(id, num){
	if (num < 50){
		id.style.color = "red";
	}
	if (num > 50){
		id.style.color = "green";
	}
}

function event(id, generation, totalSprints){
	id.addEventListener("click", function(){
		document.getElementById("enrollment-num").innerHTML = enrollment(generation);
		var total = enrollment(generation);
		var actives = active(generation);
		var drops = drop(total, actives);
		document.getElementById("drop-per").innerHTML = dropPercentage(total, drops) + "%";
		document.getElementById("achievement-num").innertHTML = "en proceso";
		document.getElementById("nps-per").innerHTML = nps(generation) + "%";
		changeColor(document.getElementById("nps-per"), nps(generation));
		document.getElementById("promoters").innerHTML = promotersGlobal(generation) + "%";
		document.getElementById("passive").innerHTML = passiveGlobal(generation) + "%";
		document.getElementById("detractors").innertHTML = detractorsGlobal(generation) + "%";
		document.getElementById("tech-num").innerHTML = averageBeatsTech(generation, totalSprints)
		document.getElementById("satisfaction-per").innerHTML = happy(generation) + "%";
		document.getElementById("teacher-rating").innerHTML = teacherScore(generation);
		document.getElementById("jedi-rating").innerHTML = jediScore(generation);
	});
}

var cosa = document.getElementById("cosa");
event(cosa, santiagoIII);

// Para ver los resultados de Tech Skills por sprint y no por overall
function eventTech(id, generation, sprint){
	id.addEventListener("click", function(){

	})
}*/