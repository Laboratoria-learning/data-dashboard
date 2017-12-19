/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
var boton = document.getElementById("btn");

boton.addEventListener("click", showMenu);

 function showMenu() {
   var menu = document.getElementById("opcs-menu");

   if(menu.classList.contains("disabled-menu")){
     menu.classList.remove("disabled-menu");
     menu.classList.add("enabled-menu");
   }
   else{
     menu.classList.remove("enabled-menu");
     menu.classList.add("disabled-menu");
   }
 }

var selectSedes = document.getElementById('sedes');
var selectGeneration = document.getElementById('generation');

selectSedes.addEventListener('change', getGeneration); //llamada al evento de select de Sedes para hacer dinámico el select de Generaciones
selectSedes.addEventListener('change', studentsEnrollment);
selectGeneration.addEventListener('change', studentsEnrollment);

function getGeneration() {
  if(selectSedes.value != 0){
    var generation = Object.keys(data[selectSedes.value]);
    var numGeneration = generation.length;
    selectGeneration.length = numGeneration;

    for(var i = 0; i < numGeneration; i++){
      selectGeneration.options[i].value = generation[i];
      selectGeneration.options[i].text = generation[i];
    }
  } else {
    selectGeneration.length = -1;
    selectGeneration.options[0].value ='---';
    selectGeneration.options[0].text = '---';
  }
    selectGeneration.options[0].selected = true;
}

var displayTotalStudents = document.getElementsByClassName('numTotal')[0];
var displayTotalStudentsEnrolled = document.getElementsByClassName('numTotal')[1];
var displayTotalStudentsEnrolledTech = document.getElementsByClassName('numTotal')[2];
var displayTotalStudentsEnrolledHse = document.getElementsByClassName('numTotal')[3];

function studentsReachedGoal(students, scoreType, goal) {

  var studentsScoresAverages = students.map(function (student) {

    var sumOfSprintsScores = student.sprints.reduce( function(sum, sprint) {

      return sum + sprint.score[scoreType];

    }, 0)

    return sumOfSprintsScores / student.sprints.length
  })

  return studentsScoresAverages.filter( function(average) {
    return average >= goal;
  }).length
}

function studentsReachedGeneralGoal(students, goal) {
  var studentsScoresAverages = students.map(function (student) {

    var sumOfSprintsScores = student.sprints.reduce( function(sum, sprint) {

      return sum + sprint.score.tech + sprint.score.hse;

    }, 0)

    return sumOfSprintsScores / student.sprints.length
  })

  return studentsScoresAverages.filter( function(average) {
    return average >= goal;
  }).length
}

function studentsEnrollment(){
  var sedeAccessor = selectSedes.value;
  var generationBySede = data[sedeAccessor][selectGeneration.value]
  var students = generationBySede.students;
  var numberOfStudents = students.length;

  displayTotalStudents.innerText = numberOfStudents;
  displayTotalStudentsEnrolled.innerText = studentsReachedGeneralGoal(students,2100);
  displayTotalStudentsEnrolledTech.innerText = studentsReachedGoal(students, 'tech', 1260);
  displayTotalStudentsEnrolledHse.innerText = studentsReachedGoal(students, 'hse', 840);
}



// Creando garficas

google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Sprint');
  data.addColumn('number', 'Total de Alumnas');
  addRows (
  [
  ["Sprint 1",] // aqui va la funcion o variable que contiene  la dta de nuemero de alumnas 
  ]
  )

}
