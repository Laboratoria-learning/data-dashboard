/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

// window.addEventListener .....
var mostraOcultar = function(event) {
  // console.log(event.target.dataset.tabSelection);
  var tabSelection = event.target.dataset.tabSelection;
  var overview = document.getElementById('overview');
  var students = document.getElementById('students');
  /* ********************************************** */
  // var teachers = document.getElementById('teachers');
  // var allGenerations = document.getElementById('allGeneration');
  /* ********************************************** */
  if (tabSelection === 'tabOverview') {
    console.log('Dashboard-Overview');
    // ocultar students, teachers, AllGenerations
    students.style.display = none;
    teachers.style.display = none;
    allGenerations.style.display = none;
    // mostrarOverview
    overview.style.display = block;
  } else if (tabSelection === 'tabStudents') {
    console.log('Dashboard-Students');
    // ocultar overview, teachers, AllGenerations
    overview.style.display = none;
    teachers.style.display = none;
    allGenerations.style.display = none;
    // mostrarStudents
    students.style.display = block;
  } /* else if (tabSelection === 'tabTeachers') {
    console.log('Dashboard-Teachers');
    // ocultar overview, students, allGenerations
    overview.style.display = none;
    students.style.display = none;
    allGenerations.style.display = none;
    // mostrarTeachers
    teachers.style.display = block;
  } else if (tabSelection === 'tabAllGenerations') {
    console.log('Dashboard-AllGenerations');
    // ocultar overview, students, Teachers
    overview.style.display = none;
    students.style.display = none;
    teachers.style.display = none;
    // mostrar allGenerations
    allGenerations.style.display = block;
  }*/
};
var loadPage = function() {
  var overview = document.getElementById('overview');
  var students = document.getElementById('students');
  /* ************************************************* */
  // var teachers = document.getElementById('teachers');
  // var allGenerations = document.getElementById('allGeneration');
  overview.style.display = none;
  students.style.display = none;
  /* ************************************************ */
  // teachers.style.display = none;
  // allGenerations.style.display = none;
  var elementsTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementsTab.length;i++) {
    elementsTab[i].addEventListener('click', mostraOcultar);
  }
};

loadPage();

// Puedes hacer uso de la base de datos a través de la variable `data`
<<<<<<< HEAD
// console.log(data);
// var alert = ('Hola mundo');
// var prompt = ('Hola mundo');
=======
console.log(data);

winodws


>>>>>>> ccab019fddbcd3327abdf678fd4208e95a26c898
