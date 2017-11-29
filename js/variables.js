/*
 * Funcionalidad de tu producto
 */
console.log(data);
 
/*
*EMPEZAMOS A REALIZAR POR CADA SEDE LAS PREGUNTAS QUE NOS PLANTEAN EN EL LMS*

/**************************************************/

/* ****SEDE AREQUIPA**** */

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