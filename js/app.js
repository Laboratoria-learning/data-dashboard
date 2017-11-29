var objSedes = Object.keys(data);
console.log(objSedes);

var allSedes = document.querySelectorAll('.sede');
console.log(allSedes);

// sedes y prefijos
var arequipa = 'AQP';
var mexico = 'CDMX';
var lima = 'LIM';
var chile = 'SCL';

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

for (var i = 0; i < allSedes.length; i++) {
  allSedes[i].addEventListener('click', addVarSede);
  function addVarSede(event) {
  //  console.log(event.target.dataset.cod);
    var codeSede = event.target.dataset.sedecod;
    console.log(codeSede);
  };
  allSedes[i].addEventListener('click', showListGenerations);
  function showListGenerations(event) {

  }
}

console.log(data);
/* var promoters = 0;
var detractors = 0;

function nps(sede, generacion) {
  for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
    var promoters = promoters + data.AQP['2016-2'].ratings[i].nps.promoters;
  };
  var detractors = 0;
  for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
    var detractors = detractors + data.AQP['2016-2'].ratings[i].nps.detractors;
  };
  return promoters - detractors;
}

nps(sede, generation);*/

// puntuacion promedio de los profes
var promTeacher = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var promTeacher = promTeacher + data.AQP['2016-2'].ratings[i].teacher;
};
console.log(promTeacher);

// puntuacion promedio de los jedis
var promJedi = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var promJedi = promJedi + data.AQP['2016-2'].ratings[i].jedi;
};
console.log(promJedi);

// porcentaje de estudiantes satisfechas
var satisfiedStudents = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var satisfiedStudents = satisfiedStudents + data.AQP['2016-2'].ratings[i].student.cumple;
};
console.log(satisfiedStudents);

// cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos en promedio y por sprint
var studentsSuperan = 0;
for (i = 0; i < data.AQP['2016-2'].students.length; i++) {
  if (data.AQP['2016-2'].students[i].sprints.score.tech > ((70 / 100) * 1800)) {
    studentsSuperan ++;
  } else {
    studentsSuperan = studentsSuperan;
  }
};
console.log(studentsSuperan);
/* total promoters
var promoters = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var promoters = promoters + data.AQP['2016-2'].ratings[i].nps.promoters;
};
// total detractors
var detractors = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var detractors = detractors + data.AQP['2016-2'].ratings[i].nps.detractors;
};

// total nps
var nps = promoters - detractors;
console.log(nps);*/
