/*
 * Funcionalidad de tu producto
 */
console.log(data);

// total de estudiantes presentes por sede y generacion
/* por generacion:--------------------------------------------------*/
// CDMX
var numEstudentsCDMX20171 = data.CDMX['2017-1'].students.length;
console.log('numero estudiantes CDMX (2017-1) : ' + numEstudentsCDMX20171);
var numEstudentsCDMX20172 = data.CDMX['2017-2'].students.length;
console.log('numero estudiantes CDMX (2017-2) : ' + numEstudentsCDMX20172);
// LIM
var numEstudentsLIM20162 = data.LIM['2016-2'].students.length;
console.log('numero estudiantes LIM (2016-2) : ' + numEstudentsLIM20162);
var numEstudentsLIM20171 = data.LIM['2017-1'].students.length;
console.log('numero estudiantes LIM (2017-1) : ' + numEstudentsLIM20171);
var numEstudentsLIM20172 = data.LIM['2017-2'].students.length;
console.log('numero estudiantes LIM (2017-2) : ' + numEstudentsLIM20172);

/* por sede:------------------------------------------------------*/
// sede CDMX
var studentsSeatCDMX = [numEstudentsCDMX20171, numEstudentsCDMX20172];
sumEstudentsCDMX = 0;
for (var i = 0; i < studentsSeatCDMX.length; i++) {
  sumEstudentsCDMX = sumEstudentsCDMX + studentsSeatCDMX[i];
};

console.log('total estududiantes CDMX : ' + sumEstudentsCDMX);


// sede LIM
var studentsSeatLIM = [numEstudentsLIM20162, numEstudentsLIM20171, numEstudentsLIM20172];
sumEstudentsLIM = 0;
for (var i = 0; i < studentsSeatLIM.length; i++) {
  sumEstudentsLIM = sumEstudentsLIM + studentsSeatLIM[i];
};
console.log('total estududiantes LIM : ' + sumEstudentsLIM);

/* Deserción de estudiantes---------------------------------------------*/

// estudiantes CDMX
var studentsCDMX20171 = data.CDMX['2017-1'].students;// Array
var studentsCDMX20172 = data.CDMX['2017-2'].students;

// estudiantes LIM
var studentsLIM20162 = data.LIM['2016-2'].students;
var studentsLIM20171 = data.LIM['2017-1'].students;
var studentsLIM20172 = data.LIM['2017-2'].students;

/* numero estudiantes desertaron CDMX---------------------------------------*/

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

/* numero estudiantes desertaron LIM-----------------------------------------*/

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

/* Porcentaje estudiantes desertaron CDMX------------------------------------*/

// % estudiantes desertaron CDMX 2017-1
var percDesertedCDMX20171 = (numdesertedCDMX20171 / numEstudentsCDMX20171) * 100;// <-- variable de la linea 9
console.log('% estudiantes Desertaron CDMX20171 : ' + percDesertedCDMX20171);
// % estudiantes desertaron CDMX 2017-2
var percDesertedCDMX20172 = (numdesertedCDMX20172 / numEstudentsCDMX20172) * 100;
console.log('% estudiantes Desertaron CDMX20172 : ' + percDesertedCDMX20172);

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


/* Cantidad de estudiantes que superan la meta*/

/* ratings de estudiantes---------------------------------------------*/
// estudiantes CDMX
var ratingsCDMX20171 = data.CDMX['2017-1'].ratings;// Array
var ratingsCDMX20172 = data.CDMX['2017-2'].ratings;
// estudiantes LIM
var ratingsLIM20162 = data.LIM['2016-2'].ratings;
var ratingsLIM20171 = data.LIM['2017-1'].ratings;
var ratingsLIM20172 = data.LIM['2017-2'].ratings;


/* porcentajes de estudiantes superaron la meta CDMX 2017-1 por sprint--------------------------*/
percesExceedGoalCDMX20171 = [];
for (var i = 0; i < ratingsCDMX20171.length; i++) {
  percesExceedGoalCDMX20171.push(ratingsCDMX20171[i].student.supera);
}
console.log('% estudiantes exceden meta en CDMX20171 : ' + percesExceedGoalCDMX20171);

// numero estudiantes superaron la meta CDMX 2017-1 por sprint

var sprint1numExceedGoalCDMX20171 = percesExceedGoalCDMX20171[0] * numEstudentsCDMX20171 / 100; // <-- linea 9
console.log('numero alumnas exceden meta CDMX20171-sprint1 : ' + sprint1numExceedGoalCDMX20171);
var sprint2numExceedGoalCDMX20171 = percesExceedGoalCDMX20171[1] * numEstudentsCDMX20171 / 100;
console.log('numero alumnas exceden meta CDMX20171-sprint2 : ' + sprint2numExceedGoalCDMX20171);
var sprint3numExceedGoalCDMX20171 = percesExceedGoalCDMX20171[2] * numEstudentsCDMX20171 / 100;
console.log('numero alumnas exceden meta CDMX20171-sprint3 : ' + sprint3numExceedGoalCDMX20171);

/* porcentajes de estudiantes superaron la meta CDMX 2017-2 por sprint--------------------------*/
percesExceedGoalCDMX20172 = [];
for (var i = 0; i < ratingsCDMX20172.length; i++) {
  percesExceedGoalCDMX20172.push(ratingsCDMX20172[i].student.supera);
}
console.log('% estudiantes exceden meta en CDMX20172 : ' + percesExceedGoalCDMX20172);

// numero estudiantes superaron la meta CDMX 2017-1 por sprint

var sprint1numExceedGoalCDMX20172 = percesExceedGoalCDMX20172[0] * numEstudentsCDMX20172 / 100; // <-- linea 9
console.log('numero alumnas exceden meta CDMX20172-sprint1 : ' + sprint1numExceedGoalCDMX20172);
var sprint2numExceedGoalCDMX20172 = percesExceedGoalCDMX20172[1] * numEstudentsCDMX20172 / 100;
console.log('numero alumnas exceden meta CDMX20172-sprint2 : ' + sprint2numExceedGoalCDMX20172);
