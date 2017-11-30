// Acordion Sede Lima - 2016-II primera opcion //

console.log('Sede Lima 2016 II');

var studentsNum = data.LIM['2016-2'].students.length;
console.log(studentsNum + ' estudiantes activas');
// numero de estudiantes activas
var studentsLim = data.LIM['2016-2'].students;
desertedLIM20162 = [];
for (var i = 0; i < studentsLim.length; i++) {
  if (!studentsLim[i].active) {
    desertedLIM20162.push(studentsLim[i]);
  }
}
var numdesertedLIM20162 = desertedLIM20162.length;
console.log(numdesertedLIM20162 + ' desercion');
// Porcentaje estudiantes desertaron LIM
var percDesertedLIM20162 = (parseInt((numdesertedLIM20162 / studentsNum) * 100)) ;
console.log(percDesertedLIM20162 + ' %desercion');
// Puntución promedio de los profesores //
// Suma de las puntuaciones por sprint de los profesores 2016-2 //
var pointsPerSprintTeachersLIM20162 = data.LIM['2016-2'].ratings[0].teacher + data.LIM['2016-2'].ratings[1].teacher;
console.log(pointsPerSprintTeachersLIM20162 + ' suma de puntos de profesores total sprints');
// Promedio de las puntuaciones de los profesores 2016-2 //
var averagePointsTeachersLIM20162 = parseInt(pointsPerSprintTeachersLIM20162 / 2);
console.log(averagePointsTeachersLIM20162 + ' promedio de puntos de profesores en todos los sprints');
// Suma de las puntuaciones por sprint de los jedis 2016-2 //
var pointsPorSprintJedis = data.LIM['2016-2'].ratings[0].jedi + data.LIM['2016-2'].ratings[1].jedi;
console.log(pointsPorSprintJedis + ' suma de puntos de jedis total sprints');
// Promedio de las puntuaciones de los jedis 2016-2 //
var averagePointsJedis = parseInt(pointsPorSprintJedis / 2);
console.log(averagePointsJedis + ' promedio de puntos de jedis en todos los sprints');












// Puedes hacer uso de la base de datos a través de la variable `data`
//"pruebas eventos"
/*var selectData = document.getElementById('select-data');
var content = document.getElementById('number').innher*/

/*var ARRSEDE = Object.keys(data);
var SEDE;
for (var i=0;i<ARRSEDE.length;i++)
{
  SEDE=ARRSEDE[i];
}
console.log(SEDE);
console.log(ARRSEDE);

/*Opcion que accede a el numero de alumnas de AQP*/
/*var objetoAQP = data.AQP;
var ageGeneracion = objetoAQP['2016-2'];
var student = ageGeneracion.students
console.log(arrSede);//15
console.log(data);

/*creando menu acordion de año y generacion*/
/*var arrSede = data.LIM;
var sedeLima = Object.keys(arrSede);
console.log(sedeLima);

var sedes = {};
sedes['slm'] = sedeLima
sedes['saqp'] = []
sedes['ssdl'] = []
sedes['scmx'] = []

var dataSelect = document.getElementById('lim2016II');
  dataSelect.addEventListener('click',function() {
    var lima2016 = document.getElementById(lim2016II);
    lima2016 = student.length;
  document.getElementById('aactiv').appendChild(lima2016);
});

*/
/*var baseGeneration = {};
baseGeneration['slm'] =['2016-2', '2017-1', '2017-2'];
baseGeneration['saqp'] =['2016-2', '2017-1'];
baseGeneration['slm'] =['2016-2', '2017-1', '2017-2'];*/
