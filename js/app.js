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
      showMetas(generation2016II);
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

function showGeneration(obj) { // nos va a mostrar la cantidad de estudiantes activas
  var divStudents = document.createElement('div'); // crea un div
  var pStudents = document.createElement('p'); // crea un p
  pStudents.textContent = 'ESTUDIANTES INSCRITAS: ' + obj['students'].length + ' inscritas'; // agrega contenido al p
  divStudents.appendChild(pStudents); // agrega el p dentro del div
  container.appendChild(divStudents); // agrega el div dentro del container
  var acumulStudentsActive = 0; // acumulara la cantidad de estudiantes activas
  for (var i = 0; i < obj['students'].length; i++) { // recorre el array con las estudiantes
    if (obj['students'][i]['active'] === true) { // verifica si es true
      acumulStudentsActive++; // aumenta la variable en 1 cada que es true
    }
  };
  var pStudentsAactive = document.createElement('p');
  pStudentsAactive.textContent = 'ESTUDIANTES ACTIVAS:' + acumulStudentsActive + ' activas'; // contenido del p que muestra las estudiantes activas
  divStudents.appendChild(pStudentsAactive); // agrega el p al div
  console.log(acumulStudentsActive);
  var pStudentsDeserter = document.createElement('p');
  pStudentsDeserter.textContent = 'ESTUDIANTES DESERTORAS:' + (obj['students'].length - acumulStudentsActive) + ' desertoras'; // mueustra las desertoras
  divStudents.appendChild(pStudentsDeserter);
}

function showMetas(obj) {
  var tech = (1800 * 70) / 100;// calcula el 70% (1800) 1260
  var hse = (1200 * 70) / 100;// clacula el 70% (1200) 840
  var divMetas = document.createElement('div');
  container.appendChild(divMetas);
  var acumSprint1Tech = 0;
  var acumSprint1Hse = 0;
  var acumSprint2Tech = 0;
  var acumSprint2Hse = 0;
  var acumSprint3Tech = 0;
  var acumSprint3Hse = 0;
  var acumSprint4Tech = 0;
  var acumSprint4Hse = 0;
  for (var j = 0; j < obj['students'].length; j++) {// recorre el array con las estudiantes
    var sprintByStudents = obj['students'][j]['sprints']; // contiene un array con los sprint de cada estidiante
    for (var k = 0; k < sprintByStudents.length; k++) {// recorre el array con los sprint
      // console.log(obj['students'][j]['sprints'][k]);
      var scoreStudents = obj['students'][j]['sprints'][k]['score'];
      switch (true) {
      case k === 0:
        if (scoreStudents['tech'] > tech) {
          acumSprint1Tech = acumSprint1Tech + 1;
        };
        if (scoreStudents['hse'] > hse) {
          acumSprint1Hse = acumSprint1Hse + 1;
        };
        console.log(acumSprint1Tech);
        console.log(acumSprint1Hse);
        break;
      case k === 1:
        if (scoreStudents['tech'] > tech) {
          acumSprint2Tech = acumSprint2Tech + 1;
        };
        if (scoreStudents['hse'] > hse) {
          acumSprint2Hse = acumSprint2Hse + 1;
        };
        console.log(acumSprint2Tech);
        console.log(acumSprint2Hse);
        break;
      case k === 2:
        if (scoreStudents['tech'] > tech) {
          acumSprint3Tech = acumSprint3Tech + 1;
        };
        if (scoreStudents['hse'] > hse) {
          acumSprint3Hse = acumSprint3Hse + 1;
        };
        console.log(acumSprint3Tech);
        console.log(acumSprint3Hse);
        break;
      case k === 3:
        if (scoreStudents['tech'] > tech) {
          acumSprint4Tech = acumSprint4Tech + 1;
        };
        if (scoreStudents['hse'] > hse) {
          acumSprint4Hse = acumSprint4Hse + 1;
        };
        console.log(acumSprint4Tech);
        console.log(acumSprint4Hse);
        break;
      }
    };
  };
};