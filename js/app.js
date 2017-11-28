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


var otro = data[sede[2]]['2016-2'];
// console.log(otro);

window.addEventListener('load', function() {
  var selectSede = document.getElementById('sede');
  var selectGeneration = document.getElementById('generation');
  selectSede.addEventListener('change', function() {
    switch (true) {
    case event.target.value === 'lima':
      console.log(data[sede[2]]);
      // deberia tener aca alguna funcion que imprima todos los datos de lima
      break;
    case event.target.value === 'arequipa':
      console.log(data[sede[0]]);
      break;
    case event.target.value === 'chile':
      console.log(data[sede[3]]);
      break;
    case event.target.value === 'mexico':
      console.log(data[sede[1]]);
      break;
    };
  });
});

function showGeneration(sede, generacion) {

}

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);