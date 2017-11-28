/*
 * Funcionalidad de tu producto
 */

// console.log(data.AQP['2016-2']['students'][0]['active']);
var studemts = data.AQP['2016-2']['students'];
var studemtsActive = [];
var studemtsDeserte = [];

for (var i = 0; i <= studemts.length; i++) {
  debugger;
  if (studemts[i].active === true) {
    studemtsActive.push(studemts[i].active);
    console.log('activos estudiamtes' + studemtsActive);
  } else {
    studemtsDeserte.push(studemts[i].active);
    console.log('desertores' + studemtsDeserte);
  }
}

console.log(studemtsDeserte.length);
// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

// console.log(Object.keys(data)[0]);


