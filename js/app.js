/* guarda en un array las sedes */
var sede = Object.keys(data);
console.log(sede);
/* guarda en un array los valores de cada sede es decir las generaciones */
var generation = Object.values(data);
console.log(generation);

var lima = sede[2];
var otro = data[lima]['2016-2'];

window.addEventListener('load', function() {
  var selectSede = document.getElementById('sede');
  var selectGeneration = document.getElementById('generation');
  selectSede.addEventListener('change', function() {
    switch (true) {
    case event.target.value === 'lima':
      
    };
  });
});

function showGeneration(sede, generacion) {

}

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);