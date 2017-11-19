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
	return Math.round(result);
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
	}
	average = average / generation.ratings.length;
	return Math.round(average);
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
	}
	score = score/generation.ratings.length;
	return score;
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
	}
	score = score/generation.ratings.length;
	return score;
}
//ejemplo 
var jediScoreSCL20162 = data.SCL['2016-2'];
jediScoreSCL20162 = jediScore(jediScoreSCL20162);
console.log("el promedio de la calificación de jedis es " + jediScoreSCL20162);

// función de nps
function nps(generation){
	var result = 0;
	for (var i = 0 ; i < generation.ratings.length ; i++){
		var promoters = generation.ratings[i].nps.promoters;
		var detractors = generation.ratings[i].nps.detractors;
		var nps = promoters - detractors;
		result = result + nps;
	}
	return result / generation.ratings.length;
}
// ejemplo

var npsSCL2016 = data.SCL["2016-2"];
npsSCL2016 = nps(npsSCL2016);
console.log("el nps promedio es " + npsSCL2016);

// Función para ver cuántas superan el 70% tech en el sprint 1

function beatsTech(generation){
	var newArray = [];
	// Creando array con las estudiantes activas
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
var beatsTechSCL20162 = data.SCL["2016-2"];
beatsTechSCL20162 = beatsTech(beatsTechSCL20162);
console.log(beatsTechSCL20162);





// ----------------------------------------------------------------
// ----------------------------------------------------------------


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
*/
