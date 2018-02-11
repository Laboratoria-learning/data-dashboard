/* Puedes hacer uso de la base de datos a través de la variable `data`*/
console.log(data);

var centers = [
  {name: 'arequipa',
    key: 'AQP'},
  {name: 'ciudad de mexico',
    key: 'CDMX'},
  {name: 'lima',
    key: 'LIM'},
  {name: 'santiago de chile',
    key: 'SCL'}
];

// se crean las cantidad de cohortes por sede y la lista de sus cohortes:
// tendran la longitud de las promociones(cohortLength) y un listado de las promociones(cohortList):
function getCohorts() {
  for (var i = 0; i < centers.length; i++) {
    // cohortes por sede
    keys = Object.keys(data[centers[i].key]);
    // numero de cohortes
    centers[i].cohortLength = keys.length;
    // cohortes
    centers[i].cohortList = keys;
  }
}

getCohorts();
// variable que inicializará el indice del recorrido por la data('AQP'):
var ZERO = 0;
var campusDefault = centers[ZERO].key;
var cohortDefault = centers[ZERO].cohortList[ZERO];

// funcion que retorna todas las estudiantes :

function getStudents(data, campus = campusDefault, cohort = cohortDefault) {
  return data[campus][cohort].students;
}

console.log(getStudents(data));