// guarda en un array las sedes
var sede = Object.keys(data); // ["AQP", "CDMX", "LIM", "SCL"]
console.log(sede);
// guarda en un array los objetos de cada sede es decir las generaciones
var generation = Object.values(data); // [{…}, {…}, {…}, {…}] tiene el valor de AQP, CDMX, LIM, SCL
console.log(generation);
// guarda las generaciones en un array
var generationAarequipa = Object.keys(generation[0]); // ["2016-2", "2017-1"]
console.log(generationAarequipa);
// guarda en un array los objetos de las generaciones que guardan students y ratings
var genArequipaObject = Object.values(generation[0]); // [{…}, {…}] tiene el valor 2016-2, 2017-1
console.log(genArequipaObject);


var container = document.getElementById('container');

window.addEventListener('load', function() {
  var selectSede = document.getElementById('sede');
  var selectGeneration = document.getElementById('generation');
  var chooseSede = ''; // va a indicar cual es la sede para tomarlas en cuenta con el siguiente filtro

  selectSede.addEventListener('change', function() {
    switch (true) {
    case event.target.value === 'lima':
      console.log(data[sede[2]]);
      chooseSede = 2; // chooseSede cambia a 2 porque es la posicion en el array sede que tiene lima
      break;
    case event.target.value === 'arequipa':
      console.log(data[sede[0]]); 
      chooseSede = 0; // choose cambia a 0 por su posicion en el array sede
      break;
    case event.target.value === 'chile':
      console.log(data[sede[3]]);
      chooseSede = 3; // choose cambia a 3 por su posicion en el array sede
      break;
    case event.target.value === 'mexico':
      console.log(data[sede[1]]); // choose cambia a 1 por su posicion en el array sede
      chooseSede = 1;
      break;
    };
  });

  selectGeneration.addEventListener('change', function() {
    switch (true) {
    case event.target.value === '2016-2':
      var generation2016II = data[sede[chooseSede]]['2016-2']; // esta seleccionando el objeto que esta dentro de 2016II el cual incluye students y ratings como keys
      showGeneration(generation2016II);
      break;
    case event.target.value === '2017-1':
      var generation2017I = data[sede[chooseSede]]['2017-1'];
      showGeneration(generation2017I);
      break;
    case event.target.value === '2017-2':
      var generation2017II = data[sede[chooseSede]]['2017-2'];
      showGeneration(generation2017II);
      break;
    }
  });
});

function showGeneration(obj) {
  var divStudents = document.createElement('div');
  var pStudents = document.createElement('p');
  pStudents.textContent = 'ESTUDIANTES INSCRITAS: ' + obj['students'].length + ' inscritas'; 
  divStudents.appendChild(pStudents);
  container.appendChild(divStudents);
  var acumulStudentsActive = 0;
  for (var i = 0; i < obj['students'].length; i++) {
    if (obj['students'][i]['active'] === true) {
      acumulStudentsActive++;
    }
  };
  var pStudentsAactive = document.createElement('p');
  pStudentsAactive.textContent = 'ESTUDIANTES ACTIVAS:' + acumulStudentsActive + ' activas';
  divStudents.appendChild(pStudentsAactive);
  console.log(acumulStudentsActive);
  var pStudentsDeserter = document.createElement('p');
  pStudentsDeserter.textContent = 'ESTUDIANTES DESERTORAS:' + (obj['students'].length-acumulStudentsActive) + ' desertoras';
  divStudents.appendChild(pStudentsDeserter);
}

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);