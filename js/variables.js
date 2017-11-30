/*
 * Funcionalidad de tu producto
 */
console.log(data);

/*
*EMPEZAMOS A REALIZAR POR CADA SEDE LAS PREGUNTAS QUE NOS PLANTEAN EN EL LMS*

/**************************************************/

/* ****SEDE AREQUIPA**** */

console.log('AREQUIPA');

/* El total de estudiantes presentes por sede y generación. */

/* -------Por generacion:--------------- */

var numEstudentsAQP20162 = data.AQP['2016-2'].students.length;
console.log('numero estudiantes AQP (2016-2) : ' + numEstudentsAQP20162);
var numEstudentsAQP20171 = data.AQP['2017-1'].students.length;
console.log('numero estudiantes AQP (2017-1) : ' + numEstudentsAQP20171);

/* -------Por sede:---------------------- */

var studentsSeatAQP = [numEstudentsAQP20162, numEstudentsAQP20171];
sumEstudentsAQP = 0;
for (var i = 0; i < studentsSeatAQP.length; i++) {
 sumEstudentsAQP = sumEstudentsAQP + studentsSeatAQP[i];
};
console.log('total estududiantes AQP : ' + sumEstudentsAQP);

/* ****SEDE CIUDAD DE MEXICO**** */

/* El porcentaje de deserción de estudiantes. */

// estudiantes AQP
var studentsAQP20162 = data.AQP['2016-2'].students;// Array
var studentsAQP20171 = data.AQP['2017-1'].students;

// estudiantes desertaron AQP 2016-2
desertedAQP20162 = [];
for (var i = 0; i < studentsAQP20162.length; i++) {
 if (!studentsAQP20162[i].active) { // active = false
   desertedAQP20162.push(studentsAQP20162[i]);
 }
}
var numdesertedAQP20162 = desertedAQP20162.length;
console.log('numero de estudiantes Desertaron AQP20162 : ' + numdesertedAQP20162);

// estudiantes desertaron AQP 2017-1
desertedAQP20171 = [];
for (var i = 0; i < studentsAQP20171.length; i++) {
 if (!studentsAQP20171[i].active) { // active = false
   desertedAQP20171.push(studentsAQP20171[i]);
 }
}
var numdesertedAQP20171 = desertedAQP20171.length;
console.log('numero de estudiantes Desertaron AQP20171 : ' + numdesertedAQP20171);

/* Porcentaje estudiantes desertaron AQP------------------------------------*/

// % estudiantes desertaron AQP 2016-2
var percDesertedAQP20162 = (numdesertedAQP20162 / numEstudentsAQP20162) * 100;
console.log('% estudiantes Desertaron AQP20162 : ' + percDesertedAQP20162);
// % estudiantes desertaron AQP 2017-1
var percDesertedAQP20171 = (numdesertedAQP20171 / numEstudentsAQP20171) * 100;
console.log('% estudiantes Desertaron AQP20171 : ' + percDesertedAQP20171);

//* Puntución promedio de los profesores *//

// Suma de las puntuaciones por sprint de los profesores 2016-2 *//
var pointsPerSprintTeachersAQP20162 = data.AQP['2016-2'].ratings[0].teacher + data.AQP['2016-2'].ratings[1].teacher + data.AQP['2016-2'].ratings[2].teacher + data.AQP['2016-2'].ratings[3].teacher;
console.log('suma de puntos de profesores total sprints 20162: ' + pointsPerSprintTeachersAQP20162);

// Promedio de las puntuaciones de los profesores 2016-2 //
var averagePointsTeachersAQP20162 = pointsPerSprintTeachersAQP20162 / 4;
console.log('promedio de puntos de profesores en todos los sprints 20162: ' + averagePointsTeachersAQP20162);

// Suma de las puntuaciones por sprint de los profesores 2017-1 *//
var pointsPerSprintTeachersAQP20171 = data.AQP['2017-1'].ratings[0].teacher + data.AQP['2017-1'].ratings[1].teacher + data.AQP['2017-1'].ratings[2].teacher;
console.log('suma de puntos de profesores total sprints 20171: ' + pointsPerSprintTeachersAQP20171);

// Promedio de las puntuaciones de los profesores 2017-1 //
var averagePointsTeachersAQP20171 = pointsPerSprintTeachersAQP20171 / 3;
console.log('promedio de puntos de profesores en todos los sprints 20171: ' + averagePointsTeachersAQP20171);

//* Puntución promedio de los jedis *//

// Suma de las puntuaciones por sprint de los jedis 2016-2 *//
var pointsPerSprintJediAQP20162 = data.AQP['2016-2'].ratings[0].jedi + data.AQP['2016-2'].ratings[1].jedi + data.AQP['2016-2'].ratings[2].jedi + data.AQP['2016-2'].ratings[3].jedi;
console.log('suma de puntos de jedi total sprints 20162: ' + pointsPerSprintJediAQP20162);

// Promedio de las puntuaciones de los jedis 2016-2 //
var averagePointsJediAQP20162 = pointsPerSprintJediAQP20162 / 4;
console.log('promedio de puntos de jedi en todos los sprints 20162: ' + averagePointsJediAQP20162);

// Suma de las puntuaciones por sprint de los jedis 2017-1 *//
var pointsPerSprintJediAQP20171 = data.AQP['2017-1'].ratings[0].jedi + data.AQP['2017-1'].ratings[1].jedi + data.AQP['2017-1'].ratings[2].jedi;
console.log('suma de puntos de jedi total sprints 20171: ' + pointsPerSprintJediAQP20171);

// Promedio de las puntuaciones de los jedis 2017-1 //
var averagePointsJediAQP20171 = pointsPerSprintJediAQP20171 / 3;
console.log('promedio de puntos de jedi en todos los sprints 20171: ' + averagePointsJediAQP20171);

/* ****SEDE CIUDAD DE MEXICO**** */
console.log('MEXICO');

/* El total de estudiantes presentes por sede y generación. */

/* -------Por generacion:--------------- */

var numEstudentsCDMX20171 = data.CDMX['2017-1'].students.length;
console.log('numero estudiantes CDMX (2017-1) : ' + numEstudentsCDMX20171);
var numEstudentsCDMX20172 = data.CDMX['2017-2'].students.length;
console.log('numero estudiantes CDMX (2017-2) : ' + numEstudentsCDMX20172);

/* -------Por sede:---------------------- */

var studentsSeatCDMX = [numEstudentsCDMX20171, numEstudentsCDMX20172];
sumEstudentsCDMX = 0;
for (var i = 0; i < studentsSeatCDMX.length; i++) {
 sumEstudentsCDMX = sumEstudentsCDMX + studentsSeatCDMX[i];
};
console.log('total estududiantes CDMX : ' + sumEstudentsCDMX);

/* ****SEDE LIMA**** */

/* El porcentaje de deserción de estudiantes. */

// estudiantes CDMX
var studentsCDMX20171 = data.CDMX['2017-1'].students;// Array
var studentsCDMX20172 = data.CDMX['2017-2'].students;

// estudiantes desertaron CDMX 2017-1
desertedCDMX20171 = [];
for (var i = 0; i < studentsCDMX20171.length; i++) {
 if (!studentsCDMX20171[i].active) { // active = false
   desertedCDMX20171.push(studentsCDMX20171[i]);
 }
}
var numdesertedCDMX20171 = desertedCDMX20171.length;
console.log('numero de estudiantes Desertaron CDMX20171 : ' + numdesertedCDMX20171);

// estudiantes desertaron CDMX 2017-2
desertedCDMX20172 = [];
for (var i = 0; i < studentsCDMX20172.length; i++) {
 if (!studentsCDMX20172[i].active) { // active = false
   desertedCDMX20172.push(studentsCDMX20172[i]);
 }
}
var numdesertedCDMX20172 = desertedCDMX20172.length;
console.log('numero de estudiantes Desertaron CDMX20172 : ' + numdesertedCDMX20172);

/* Porcentaje estudiantes desertaron CDMX------------------------------------*/

// % estudiantes desertaron CDMX 2017-1
var percDesertedCDMX20171 = (numdesertedCDMX20171 / numEstudentsCDMX20171) * 100;
console.log('% estudiantes Desertaron CDMX20171 : ' + percDesertedCDMX20171);
// % estudiantes desertaron CDMX 2017-2
var percDesertedCDMX20172 = (numdesertedCDMX20172 / numEstudentsCDMX20172) * 100;
console.log('% estudiantes Desertaron CDMX20172 : ' + percDesertedCDMX20172);

//* Puntución promedio de los profesores *//

// Suma de las puntuaciones por sprint de los profesores 2017-1 *//
var pointsPerSprintTeachersCDMX20171 = data.CDMX['2017-1'].ratings[0].teacher + data.CDMX['2017-1'].ratings[1].teacher + data.CDMX['2017-1'].ratings[2].teacher;
console.log('suma de puntos de profesores total sprints 20171: ' + pointsPerSprintTeachersCDMX20171);

// Promedio de las puntuaciones de los profesores 2017-1 //
var averagePointsTeachersCDMX20171 = pointsPerSprintTeachersCDMX20171 / 3;
console.log('promedio de puntos de profesores en todos los sprints 20171: ' + averagePointsTeachersCDMX20171);

// Suma de las puntuaciones por sprint de los profesores 2017-2 *//
var pointsPerSprintTeachersCDMX20172 = data.CDMX['2017-2'].ratings[0].teacher + data.CDMX['2017-2'].ratings[1].teacher;
console.log('suma de puntos de profesores total sprints 20172: ' + pointsPerSprintTeachersCDMX20172);

// Promedio de las puntuaciones de los profesores 2017-2 //
var averagePointsTeachersCDMX20172 = pointsPerSprintTeachersCDMX20172 / 2;
console.log('promedio de puntos de profesores en todos los sprints 20172: ' + averagePointsTeachersCDMX20172);

//* Puntución promedio de los jedis *//

// Suma de las puntuaciones por sprint de los jedis 2017-1 *//
var pointsPerSprintJedisCDMX20171 = data.CDMX['2017-1'].ratings[0].jedi + data.CDMX['2017-1'].ratings[1].jedi + data.CDMX['2017-1'].ratings[2].jedi;
console.log('suma de puntos de jedis total sprints 20171: ' + pointsPerSprintJedisCDMX20171);

// Promedio de las puntuaciones de los jedis 2017-1 //
var averagePointsJedisCDMX20171 = pointsPerSprintJedisCDMX20171 / 3;
console.log('promedio de puntos de jedis en todos los sprints 20171: ' + averagePointsJedisCDMX20171);

// Suma de las puntuaciones por sprint de los jedis 2017-2 *//
var pointsPerSprintJedisCDMX20172 = data.CDMX['2017-2'].ratings[0].jedi + data.CDMX['2017-2'].ratings[1].jedi;
console.log('suma de puntos de jedis total sprints 20172: ' + pointsPerSprintJedisCDMX20172);

// Promedio de las puntuaciones de los jedis 2017-2 //
var averagePointsJedisCDMX20172 = pointsPerSprintJedisCDMX20172 / 2;
console.log('promedio de puntos de jedis en todos los sprints 20172: ' + averagePointsJedisCDMX20172);

/* ****SEDE LIMA**** */
console.log('LIMA');

/* El total de estudiantes presentes por sede y generación. */

/* -------Por generacion:--------------- */

var numEstudentsLIM20162 = data.LIM['2016-2'].students.length;
console.log('numero estudiantes LIM (2016-2) : ' + numEstudentsLIM20162);
var numEstudentsLIM20171 = data.LIM['2017-1'].students.length;
console.log('numero estudiantes LIM (2017-1) : ' + numEstudentsLIM20171);
var numEstudentsLIM20172 = data.LIM['2017-2'].students.length;
console.log('numero estudiantes LIM (2017-2) : ' + numEstudentsLIM20172);

/* -------Por sede:---------------------- */

var studentsSeatLIM = [numEstudentsLIM20162, numEstudentsLIM20171, numEstudentsLIM20172];
sumEstudentsLIM = 0;
for (var i = 0; i < studentsSeatLIM.length; i++) {
 sumEstudentsLIM = sumEstudentsLIM + studentsSeatLIM[i];
};
console.log('total estududiantes LIM : ' + sumEstudentsLIM);

/* ****SEDE SANTIAGO DE CHILE**** */

/* El porcentaje de deserción de estudiantes. */

// estudiantes LIM
var studentsLIM20162 = data.LIM['2016-2'].students;
var studentsLIM20171 = data.LIM['2017-1'].students;
var studentsLIM20172 = data.LIM['2017-2'].students;

// estudiantes desertaron LIM 2016-2
desertedLIM20162 = [];
for (var i = 0; i < studentsLIM20162.length; i++) {
 if (!studentsLIM20162[i].active) { // active = false
   desertedLIM20162.push(studentsLIM20162[i]);
 }
}
var numdesertedLIM20162 = desertedLIM20162.length;
console.log('numero de estudiantes Desertaron LIM20162 : ' + numdesertedLIM20162);

// estudiantes desertaron LIM 2017-1
desertedLIM20171 = [];
for (var i = 0; i < studentsLIM20171.length; i++) {
 if (!studentsLIM20171[i].active) { // active = false
   desertedLIM20171.push(studentsLIM20171[i]);
 }
}
var numdesertedLIM20171 = desertedLIM20171.length;
console.log('numero de estudiantes Desertaron LIM20171 : ' + numdesertedLIM20171);

// estudiantes desertaron LIM 2017-2
desertedLIM20172 = [];
for (var i = 0; i < studentsLIM20172.length; i++) {
 if (!studentsLIM20172[i].active) { // active = false
   desertedLIM20172.push(studentsLIM20172[i]);
 }
}
var numdesertedLIM20172 = desertedLIM20172.length;
console.log('numero de estudiantes Desertaron LIM20172 : ' + numdesertedLIM20172);

/* Porcentaje estudiantes desertaron LIM;-------------------------------------*/

// % estudiantes desertaron LIM 2016-2
var percDesertedLIM20162 = (numdesertedLIM20162 / numEstudentsLIM20162) * 100;
console.log('% estudiantes Desertaron LIM20162 : ' + percDesertedLIM20162);
// % estudiantes desertaron LIM 2017-1
var percDesertedLIM20171 = (numdesertedLIM20171 / numEstudentsLIM20171) * 100;
console.log('% estudiantes Desertaron LIM20171 : ' + percDesertedLIM20171);
// % estudiantes desertaron LIM 2017-2
var percDesertedLIM20172 = (numdesertedLIM20172 / numEstudentsLIM20172) * 100;
console.log('% estudiantes Desertaron LIM20172 : ' + percDesertedLIM20172);

//* Puntución promedio de los profesores *//

// Suma de las puntuaciones por sprint de los profesores 2016-2 *//
var pointsPerSprintTeachersLIM20162 = data.LIM['2016-2'].ratings[0].teacher + data.LIM['2016-2'].ratings[1].teacher;
console.log('suma de puntos de profesores total sprints 20162: ' + pointsPerSprintTeachersLIM20162);

// Promedio de las puntuaciones de los profesores 2016-2 //
var averagePointsTeachersLIM20162 = pointsPerSprintTeachersLIM20162 / 2;
console.log('promedio de puntos de profesores en todos los sprints 20162: ' + averagePointsTeachersLIM20162);

// Suma de las puntuaciones por sprint de los profesores 2017-1 *//
var pointsPerSprintTeachersLIM20171 = data.LIM['2017-1'].ratings[0].teacher + data.LIM['2017-1'].ratings[1].teacher + data.LIM['2017-1'].ratings[2].teacher + data.LIM['2017-1'].ratings[3].teacher;
console.log('suma de puntos de profesores total sprints 20171: ' + pointsPerSprintTeachersLIM20171);

// Promedio de las puntuaciones de los profesores 2017-1 //
var averagePointsTeachersLIM20171 = pointsPerSprintTeachersLIM20171 / 4;
console.log('promedio de puntos de profesores en todos los sprints 20171: ' + averagePointsTeachersLIM20171);

// Suma de las puntuaciones por sprint de los profesores 2017-2 *//
var pointsPerSprintTeachersLIM20172 = data.LIM['2017-2'].ratings[0].teacher + data.LIM['2017-2'].ratings[1].teacher;
console.log('suma de puntos de profesores total sprints 20172: ' + pointsPerSprintTeachersLIM20172);

// Promedio de las puntuaciones de los profesores 2017-2 //
var averagePointsTeachersLIM20172 = pointsPerSprintTeachersLIM20172 / 2;
console.log('promedio de puntos de profesores en todos los sprints 20172: ' + averagePointsTeachersLIM20172);

//* Puntución promedio de los jedis *//

// Suma de las puntuaciones por sprint de los jedis 2016-2 *//
var pointsPerSprintJedisLIM20162 = data.LIM['2016-2'].ratings[0].jedi + data.LIM['2016-2'].ratings[1].jedi;
console.log('suma de puntos de jedis total sprints 20162: ' + pointsPerSprintJedisLIM20162);

// Promedio de las puntuaciones de los jedis 2016-2 //
var averagePointsJedisLIM20162 = pointsPerSprintJedisLIM20162 / 2;
console.log('promedio de puntos de jedis en todos los sprints 20162: ' + averagePointsJedisLIM20162);

// Suma de las puntuaciones por sprint de los jedis 2017-1 *//
var pointsPerSprintJedisLIM20171 = data.LIM['2017-1'].ratings[0].jedi + data.LIM['2017-1'].ratings[1].jedi + data.LIM['2017-1'].ratings[2].jedi + data.LIM['2017-1'].ratings[3].jedi;
console.log('suma de puntos de jedis total sprints 20171: ' + pointsPerSprintJedisLIM20171);

// Promedio de las puntuaciones de los jedis 2017-1 //
var averagePointsJedisLIM20171 = pointsPerSprintJedisLIM20171 / 4;
console.log('promedio de puntos de jedis en todos los sprints 20171: ' + averagePointsJedisLIM20171);

// Suma de las puntuaciones por sprint de los jedis 2017-2 *//
var pointsPerSprintJedisLIM20172 = data.LIM['2017-2'].ratings[0].jedi + data.LIM['2017-2'].ratings[1].jedi;
console.log('suma de puntos de jedis total sprints 20172: ' + pointsPerSprintJedisLIM20172);

// Promedio de las puntuaciones de los jedis 2017-2 //
var averagePointsJedisLIM20172 = pointsPerSprintJedisLIM20172 / 2;
console.log('promedio de puntos de jedis en todos los sprints 20172: ' + averagePointsJedisLIM20172);

/* ****SEDE SANTIAGO DE CHILE**** */
console.log('CHILE');

/* El total de estudiantes presentes por sede y generación. */

/* -------Por generacion:--------------- */

var numEstudentsSCL20162 = data.SCL['2016-2'].students.length;
console.log('numero estudiantes SCL (2016-2) : ' + numEstudentsSCL20162);
var numEstudentsSCL20171 = data.SCL['2017-1'].students.length;
console.log('numero estudiantes SCL (2017-1) : ' + numEstudentsSCL20171);
var numEstudentsSCL20172 = data.SCL['2017-2'].students.length;
console.log('numero estudiantes SCL (2017-2) : ' + numEstudentsSCL20172);

/* -------Por sede:---------------------- */

var studentsSeatSCL = [numEstudentsSCL20162, numEstudentsSCL20171, numEstudentsSCL20172];
sumEstudentsSCL = 0;
for (var i = 0; i < studentsSeatSCL.length; i++) {
 sumEstudentsSCL = sumEstudentsSCL + studentsSeatSCL[i];
};
console.log('total estududiantes SCL : ' + sumEstudentsSCL);

/* El porcentaje de deserción de estudiantes. */

// estudiantes SCL
var studentsSCL20162 = data.SCL['2016-2'].students;
var studentsSCL20171 = data.SCL['2017-1'].students;
var studentsSCL20172 = data.SCL['2017-2'].students;

// estudiantes desertaron SCL 2016-2
desertedSCL20162 = [];
for (var i = 0; i < studentsSCL20162.length; i++) {
 if (!studentsSCL20162[i].active) { // active = false
   desertedSCL20162.push(studentsSCL20162[i]);
 }
}
var numdesertedSCL20162 = desertedSCL20162.length;
console.log('numero de estudiantes Desertaron SCL20162 : ' + numdesertedSCL20162);

// estudiantes desertaron SCL 2017-1
desertedSCL20171 = [];
for (var i = 0; i < studentsSCL20171.length; i++) {
 if (!studentsSCL20171[i].active) { // active = false
   desertedSCL20171.push(studentsSCL20171[i]);
 }
}
var numdesertedSCL20171 = desertedSCL20171.length;
console.log('numero de estudiantes Desertaron SCL20171 : ' + numdesertedSCL20171);

// estudiantes desertaron SCL 2017-2
desertedSCL20172 = [];
for (var i = 0; i < studentsSCL20172.length; i++) {
 if (!studentsSCL20172[i].active) { // active = false
   desertedSCL20172.push(studentsSCL20172[i]);
 }
}
var numdesertedSCL20172 = desertedSCL20172.length;
console.log('numero de estudiantes Desertaron SCL20172 : ' + numdesertedSCL20172);

/* Porcentaje estudiantes desertaron SCL;-------------------------------------*/

// % estudiantes desertaron SCL 2016-2
var percDesertedSCL20162 = (numdesertedSCL20162 / numEstudentsSCL20162) * 100;
console.log('% estudiantes Desertaron SCL20162 : ' + percDesertedSCL20162);
// % estudiantes desertaron SCL 2017-1
var percDesertedSCL20171 = (numdesertedSCL20171 / numEstudentsSCL20171) * 100;
console.log('% estudiantes Desertaron SCL20171 : ' + percDesertedSCL20171);
// % estudiantes desertaron SCL 2017-2
var percDesertedSCL20172 = (numdesertedSCL20172 / numEstudentsSCL20172) * 100;
console.log('% estudiantes Desertaron SCL20172 : ' + percDesertedSCL20172);

//* Puntución promedio de los profesores *//

// Suma de las puntuaciones por sprint de los profesores 2016-2 *//
var pointsPerSprintTeachersSCL20162 = data.SCL['2016-2'].ratings[0].teacher + data.SCL['2016-2'].ratings[1].teacher + data.SCL['2016-2'].ratings[2].teacher + data.SCL['2016-2'].ratings[3].teacher;
console.log('suma de puntos de profesores total sprints 20162: ' + pointsPerSprintTeachersSCL20162);

// Promedio de las puntuaciones de los profesores 2016-2 //
var averagePointsTeachersSCL20162 = pointsPerSprintTeachersSCL20162 / 4;
console.log('promedio de puntos de profesores en todos los sprints 20162: ' + averagePointsTeachersSCL20162);

// Suma de las puntuaciones por sprint de los profesores 2017-1 *//
var pointsPerSprintTeachersSCL20171 = data.SCL['2017-1'].ratings[0].teacher + data.SCL['2017-1'].ratings[1].teacher + data.SCL['2017-1'].ratings[2].teacher;
console.log('suma de puntos de profesores total sprints 20171: ' + pointsPerSprintTeachersSCL20171);

// Promedio de las puntuaciones de los profesores 2017-1 //
var averagePointsTeachersSCL20171 = pointsPerSprintTeachersSCL20171 / 3;
console.log('promedio de puntos de profesores en todos los sprints 20171: ' + averagePointsTeachersSCL20171);

// Suma de las puntuaciones por sprint de los profesores 2017-2 *//
var pointsPerSprintTeachersSCL20172 = data.SCL['2017-2'].ratings[0].teacher + data.SCL['2017-2'].ratings[1].teacher;
console.log('suma de puntos de profesores total sprints 20172: ' + pointsPerSprintTeachersSCL20172);

// Promedio de las puntuaciones de los profesores 2017-2 //
var averagePointsTeachersSCL20172 = pointsPerSprintTeachersSCL20172 / 2;
console.log('promedio de puntos de profesores en todos los sprints 20172: ' + averagePointsTeachersSCL20172);

//* Puntución promedio de los jedis *//

// Suma de las puntuaciones por sprint de los jedis 2016-2 *//
var pointsPerSprintJedisSCL20162 = data.SCL['2016-2'].ratings[0].jedi + data.SCL['2016-2'].ratings[1].jedi + data.SCL['2016-2'].ratings[2].jedi + data.SCL['2016-2'].ratings[3].jedi;
console.log('suma de puntos de jedis total sprints 20162: ' + pointsPerSprintJedisSCL20162);

// Promedio de las puntuaciones de los jedis 2016-2 //
var averagePointsJedisSCL20162 = pointsPerSprintJedisSCL20162 / 4;
console.log('promedio de puntos de jedis en todos los sprints 20162: ' + averagePointsJedisSCL20162);

// Suma de las puntuaciones por sprint de los jedis 2017-1 *//
var pointsPerSprintJedisSCL20171 = data.SCL['2017-1'].ratings[0].jedi + data.SCL['2017-1'].ratings[1].jedi + data.SCL['2017-1'].ratings[2].jedi;
console.log('suma de puntos de jedis total sprints 20171: ' + pointsPerSprintJedisSCL20171);

// Promedio de las puntuaciones de los jedis 2017-1 //
var averagePointsJedisSCL20171 = pointsPerSprintJedisSCL20171 / 3;
console.log('promedio de puntos de jedis en todos los sprints 20171: ' + averagePointsJedisSCL20171);

// Suma de las puntuaciones por sprint de los jedis 2017-2 *//
var pointsPerSprintJedisSCL20172 = data.SCL['2017-2'].ratings[0].jedi + data.SCL['2017-2'].ratings[1].jedi;
console.log('suma de puntos de jedis total sprints 20172: ' + pointsPerSprintJedisSCL20172);

// Promedio de las puntuaciones de los jedis 2017-2 //
var averagePointsJedisSCL20172 = pointsPerSprintJedisSCL20172 / 2;
console.log('promedio de puntos de jedi en todos los sprints 20172: ' + averagePointsJedisSCL20172);
