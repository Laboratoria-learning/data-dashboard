/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
window.addEventListener("load", function(){

/*--Pregunta1: El total de estudiantes presentes por sede y generación. */

function totalStudentActive (sede, generation){
var arrayStudents = data[sede][generation]['students'];
var countActive = 0;  
for(i = 0; i < arrayStudents.length; i++){
  if(arrayStudents[i]['active'] == true){
    countActive += 1;
  } 
}
return countActive;
}
totalStudentActive('AQP','2016-2')

/*--Pregunta2: El porcentaje de deserción de estudiantes.*/ 

//var total = data.AQP['2016-2']['students'].length  //calcula el total de estudiantes por sede y promoción

function totalStudentInactive (sede, generation){
var arrayStudents = data[sede][generation]['students'];
var numberOfStudents =arrayStudents.length;
var countInactive = 0;  
//var porcentual = countInactive*100/total;
for(i = 0; i < arrayStudents.length; i++){
  if(arrayStudents[i]['active'] == false){
    countInactive += 1;
  } 
}
return  countInactive*100/numberOfStudents;
}
totalStudentInactive ('AQP','2016-2')

/*--Pregunta 3: La cantidad de estudiantes que superan la meta de puntos en promedio de todos 
los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech. */

// data.AQP['2016-2']['students'][0]['sprints']
function studentsExceedGoal (){
    var arrayStudents = data[sede][generation]['students'];
    for(i = 0; arrayStudents.length; i++){
      if(arrayStudents[i]['sprints'])
    }
 
}

/*Pregunta 10: La puntuación promedio de l@s jedi masters. */
//data.AQP["2016-2"]['ratings'][0]['jedi']
function averageJediMasters (sede,generation){
  var averageScoreJedi = data[sede][generation]['ratings'];
  var ScoreJedi = 0;  
  for (i = 0; i < averageScoreJedi.length; i++) {
    if (averageScoreJedi[i]['jedi']) {
      ScoreJedi += 1;
    }
  }
  return ScoreJedi;
}
averageJediMasters('AQP','2016-2')


})