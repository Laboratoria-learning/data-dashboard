
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
