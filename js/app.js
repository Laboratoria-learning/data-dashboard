// sedes y prefijos
var arequipa = 'AQP' ;
var mexico = 'CDMX' ;
var lima = 'LIM' ;
var chile = 'SCL' ;

// variable que almacena  el texto junto de sede y generacion
var sedeGeneration = document.getElementById('sede_generation');
// variable que almacena la lista de sedes
var listSedes = document.getElementById('list_sedes');

// variables que almacenan la lista de las  generaciones del la sede escogida
var arequipaGenerations = document.getElementById('arequipa_generations');
var mexicoGenerations = document.getElementById('mexico_generations');
var limaGenerations = document.getElementById('lima_generations');
var chileGenerations = document.getElementById('chile_generations');

// variables que alamcenan cada sede del html en el dom
var sede0 = document.getElementById('sede_0');
var sede1 = document.getElementById('sede_1');
var sede2 = document.getElementById('sede_2');
var sede3 = document.getElementById('sede_3');

sedeGeneration.addEventListener('click', showListSedes);
function showListSedes(event) {
  listSedes.classList.toggle('list_active');
  /* console.log(event.target);
   sedeGeneration.addEventListener('click', showListSedes);
  function showListSedes(event) {
    listSedes.classList.toggle('list_active');
    console.log(event.target);
    */
};


/*
codeSede0.addEventListener('click', addvarcodesede);
function addvarcodesede(event) {
  codeSede0.textContent = objSedes.indexOf(event.target.textContent);

  listSedes.classList.toggle('list_active');
  console.log(event.target);
};
*/

// data.AQP["2016-2"].students.length --> me da el total de estudiantes de arequipa 2016-2
console.log(data);

// var students = data.AQP['2016-2'].students.length ;
// console.log(students);
