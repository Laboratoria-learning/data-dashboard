// Acordion Sede Lima - 2016-II primera opcion //
// Requerimientos Sede Lima

var studentsNum = data.LIM['2016-2'].students.length;
// numero de estudiantes activas
var studentsLim = data.LIM['2016-2'].students;
deserted = [];
for (var i = 0; i < studentsLim.length; i++) {
  if (!studentsLim[i].active) {
    deserted.push(studentsLim[i]);
  }
}
var numDeserted = deserted.length;
// Porcentaje estudiantes desertaron LIM
var percDeserted = (parseInt((numDeserted / studentsNum) * 100)) ;
// Puntución promedio de los profesores //
// Suma de las puntuaciones por sprint de los profesores 2016-2 //
var pointsPorSprintTeachers = data.LIM['2016-2'].ratings[0].teacher + data.LIM['2016-2'].ratings[1].teacher;
// Promedio de las puntuaciones de los profesores 2016-2 //
var averagePointsTeachers = parseInt(pointsPorSprintTeachers / 2);
// Suma de las puntuaciones por sprint de los jedis 2016-2 //
var pointsPorSprintJedis = data.LIM['2016-2'].ratings[0].jedi + data.LIM['2016-2'].ratings[1].jedi;
// Promedio de las puntuaciones de los jedis 2016-2 //
var averagePointsJedis = parseInt(pointsPorSprintJedis / 2);

// Sede Lima 2017-I "segunda opcion"
var studentsNumOp2 = data.LIM['2017-1'].students.length;
// numero de estudiantes activas
var studentsLimOp2 = data.LIM['2017-1'].students.length;
desertedOp2 = [];
for (var i = 0; i < studentsLim.length; i++) {
  if (!studentsLimOp2[i].active) {
    desertedOp2.push(studentsLimOp2[i]);
  }
}
var numdesertedOp2 = desertedOp2.length;
// % estudiantes desertaron LIM 2017-1
var percDesertedOp2 = (parseInt((numdesertedOp2 / numEstudents) * 100)) + '%';
//* Puntución promedio de los profesores *//
// Suma de las puntuaciones por sprint de los profesores 2017-1 *//
var pointsPerSprintTeachersOp2 = data.LIM['2017-1'].ratings[0].teacher + data.LIM['2017-1'].ratings[1].teacher + data.LIM['2017-1'].ratings[2].teacher + data.LIM['2017-1'].ratings[3].teacher;
// Promedio de las puntuaciones de los profesores 2017-1 //
var averagePointsTeachersOp2 = parseInt(pointsPerSprintTeachersOp2 / 4);
//* Puntución promedio de los jedis *//
// Suma de las puntuaciones por sprint de los jedis 2017-1 *//
var pointsPerSprintJedisOp2 = data.LIM['2017-1'].ratings[0].jedi + data.LIM['2017-1'].ratings[1].jedi + data.LIM['2017-1'].ratings[2].jedi + data.LIM['2017-1'].ratings[3].jedi;
// Promedio de las puntuaciones de los jedis 2017-1 //
var averagePointsJedisOp2 = parseInt(pointsPerSprintJedisOp2 / 4);








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
