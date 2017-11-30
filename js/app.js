/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
// Total de estudiantes
// El total de estudiantes presentes por sede y generación.
// El porcentaje de deserción de estudiantes.
var studentsAqp20162UP = 0;
var studentsAqp20162Down = 0;
for (var i = 0; i < data.AQP['2016-2'].students.length ; i++ ) {
  var studentsTotal = data.AQP['2016-2'].students[i].active;
  if (studentsTotal === true) {
    studentsAqp20162UP += 1;
  } else if (studentsTotal === false) {
    studentsAqp20162Down += 1;
  }
}
studentsAqp20162UP;
studentsAqp20162Down;
var totalstudentsAqp20162 = studentsAqp20162UP + studentsAqp20162Down;
var detractorsAqp20162 = (studentsAqp20162Down / totalstudentsAqp20162) * 100;
detractorsAqp20162 = detractorsAqp20162.toFixed(2);
console.log(totalstudentsAqp20162);/* para la data */
console.log(detractorsAqp20162);/* para la data */

// obteniendo score mayor 70%
// La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
var SumScoreSprintHseAqp20162 = 0;
var SumScoreSprintTechAqp20162 = 0;
var stuContarAqp20162 = 0;
for (var i = 0; i < data.AQP['2016-2'].students.length ; i++) {
  for (var j = 0; j < data.AQP['2016-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.AQP['2016-2'].students[i].sprints[j].score.hse;
    var stuScoreTech = data.AQP['2016-2'].students[i].sprints[j].score.tech;
    SumScoreSprintHseAqp20162 += stuScoreHse;
    SumScoreSprintTechAqp20162 += stuScoreTech;
  } if (SumScoreSprintHseAqp20162 >= 3360 && SumScoreSprintTechAqp20162 >= 5040) {
    stuContarAqp20162 += 1;
  }
  SumScoreSprintHseAqp20162 = 0;
  SumScoreSprintTechAqp20162 = 0;
}
console.log(stuContarAqp20162);
var prctstuContarAqp20162 = ((stuContarAqp20162 / totalstudentsAqp20162) * 100).toFixed(2);
console.log(prctstuContarAqp20162);/* para la data */
// El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

var totalNpsSprintAqp20162 = 0;
for (var i = 0; i < data.AQP['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.AQP['2016-2'].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data.AQP['2016-2'].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprintAqp20162 += NpsSprint;
}
var npstotalAqp20162 = totalNpsSprintAqp20162 / 4;
console.log(npstotalAqp20162);/* para la data */
// para los porcentajes promoters - pasive y detractors
var totalPromotersAqp20162 = 0;
for (var i = 0; i < data.AQP['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.AQP['2016-2'].ratings[i].nps.promoters;
  totalPromotersAqp20162 += raitingspNpsromoters;
}
var npsTotalPromotersAqp20162 = (totalPromotersAqp20162 / 4);
console.log(npsTotalPromotersAqp20162);/* para la data */

var totalPasiveAqp20162 = 0;
for (var i = 0; i < data.AQP['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.AQP['2016-2'].ratings[i].nps.passive;
  totalPasiveAqp20162 += raitingspNpsromoters;
}
npsTotalPasiveAqp20162 = totalPasiveAqp20162 / 4;
console.log(npsTotalPasiveAqp20162);/* para la data */

var totalDetractorsAqp20162 = 0;
for (var i = 0; i < data.AQP['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.AQP['2016-2'].ratings[i].nps.detractors;
  totalDetractorsAqp20162 += raitingspNpsromoters;
}
var npsTotalDetractorsAqp20162 = totalDetractorsAqp20162 / 4;
console.log(npsTotalDetractorsAqp20162);/* para la data */

// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.

var sprintTech1Aqp20162 = 0;
var sprintTech2Aqp20162 = 0;
var sprintTech3Aqp20162 = 0;
var sprintTech4Aqp20162 = 0;
for (var i = 0; i < data.AQP['2016-2'].students.length ; i++) {
  for (var j = 0; j < data.AQP['2016-2'].students[i].sprints.length ; j++) {
    var stuScoreTech = data.AQP['2016-2'].students[i].sprints[j].score.tech;
    var sprintNumber = data.AQP['2016-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreTech >= 1260) {
      sprintTech1Aqp20162 += 1;
    } else if (sprintNumber == 2 && stuScoreTech >= 1260) {
      sprintTech2Aqp20162 += 1;
    } else if (sprintNumber == 3 && stuScoreTech >= 1260) {
      sprintTech3Aqp20162 += 1;
    } else if (sprintNumber == 4 && stuScoreTech >= 1260) {
      sprintTech4Aqp20162 += 1;
    }
  }
}
console.log(sprintTech1Aqp20162);/* para la data */
console.log(sprintTech2Aqp20162);/* para la data */
console.log(sprintTech3Aqp20162);/* para la data */
console.log(sprintTech4Aqp20162);/* para la data */

var sprintHse1Aqp20162 = 0;
var sprintHse2Aqp20162 = 0;
var sprintHse3Aqp20162 = 0;
var sprintHse4Aqp20162 = 0;
for (var i = 0; i < data.AQP['2016-2'].students.length ; i++) {
  for (var j = 0; j < data.AQP['2016-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.AQP['2016-2'].students[i].sprints[j].score.hse;
    var sprintNumber = data.AQP['2016-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreHse >= 840) {
      sprintHse1Aqp20162 += 1;
    } else if (sprintNumber == 2 && stuScoreHse >= 840) {
      sprintHse2Aqp20162 += 1;
    } else if (sprintNumber == 3 && stuScoreHse >= 840) {
      sprintHse3Aqp20162 +=1;
    } else if (sprintNumber == 4 && stuScoreHse >= 840) {
      sprintHse4Aqp20162 += 1;
    }
  }
}
console.log(sprintHse1Aqp20162);/* para la data */
console.log(sprintHse2Aqp20162);/* para la data */
console.log(sprintHse3Aqp20162);/* para la data */
console.log(sprintHse4Aqp20162);/* para la data */

// El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

var pctjStudentsSatAqp20162 = 0;
for (var i = 0; i < data.AQP['2016-2'].ratings.length ; i++) {
  var studentsCumple = data.AQP['2016-2'].ratings[i].student.cumple;
  var studentsSupera = data.AQP['2016-2'].ratings[i].student.supera;
  var studentSat = studentsCumple + studentsSupera;
  pctjStudentsSatAqp20162 += studentSat;
}
var totalSatisfationAqp20162 = pctjStudentsSatAqp20162 / 4;
console.log(totalSatisfationAqp20162);/* para la data */

// La puntuación promedio de l@s profesores.

var ptPromTeacherAqp20162 = 0;
for (var i = 0; i < data.AQP['2016-2'].ratings.length ; i++) {
  var ptTeacher = data.AQP['2016-2'].ratings[i].teacher;
  ptPromTeacherAqp20162 += ptTeacher;
}
ptPromTeacherAqp20162 = Number(ptPromTeacherAqp20162.toFixed(2));
var scoreTeacherAqp20162 = ptPromTeacherAqp20162 / 4;
console.log(scoreTeacherAqp20162);/* para la data */

// La puntuación promedio de l@s jedi masters.

var ptPromJedisAqp20162 = 0;
for (var i = 0; i < data.AQP['2016-2'].ratings.length ; i++) {
  var ptJedis = data.AQP['2016-2'].ratings[i].jedi;
  ptPromJedisAqp20162 += ptJedis;
}
var ptJedistotalAqp20162 = ptPromJedisAqp20162 / 4 ;
ptJedistotalAqp20162 = ptJedistotalAqp20162.toFixed(2);
var scoreJediAqp20162 = ptJedistotalAqp20162;
console.log(scoreJediAqp20162);/* para la data */

// Arequipa 2017-1

var studentsAqp20171UP = 0;
var studentsAqp20171Down = 0;
for (var i = 0; i < data.AQP['2017-1'].students.length ; i++) {
  var studentsTotal = data.AQP['2017-1'].students[i].active;
  if (studentsTotal === true) {
    studentsAqp20171UP += 1;
  } else if (studentsTotal === false) {
    studentsAqp20171Down += 1;
  }
}
studentsAqp20171UP;
studentsAqp20171Down;
var totalstudentsAqp20171 = studentsAqp20171UP + studentsAqp20171Down;
var detractorsAqp20171 = (studentsAqp20171Down / totalstudentsAqp20171) * 100;
detractorsAqp20171 = detractorsAqp20171.toFixed(2);
console.log(totalstudentsAqp20171);/* para la data */
console.log(detractorsAqp20171);/* para la data */

// obteniendo score mayor 70%
// La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
var SumScoreSprintHseAqp20171 = 0;
var SumScoreSprintTechAqp20171 = 0;
var stuContarAqp20171 = 0;
for (var i = 0; i < data.AQP['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.AQP['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.AQP['2017-1'].students[i].sprints[j].score.hse;
    var stuScoreTech = data.AQP['2017-1'].students[i].sprints[j].score.tech;
    SumScoreSprintHseAqp20171 += stuScoreHse;
    SumScoreSprintTechAqp20171 += stuScoreTech;
  } if (SumScoreSprintHseAqp20171 >= 2520 && SumScoreSprintTechAqp20171 >= 3780) {
    stuContarAqp20171 += 1;
  }
  SumScoreSprintHseAqp20171 = 0;
  SumScoreSprintTechAqp20171 = 0;
}
console.log(stuContarAqp20171);
var prctstuContarAqp20171 = ((stuContarAqp20171 / totalstudentsAqp20171) * 100).toFixed(2);
console.log(prctstuContarAqp20171);/* para la data */
// El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

var totalNpsSprintAqp20171 = 0;
for (var i = 0; i < data.AQP['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.AQP['2017-1'].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data.AQP['2017-1'].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprintAqp20171 += NpsSprint;
}
var npstotalAqp20171 = (totalNpsSprintAqp20171 / 3).toFixed(2);;
console.log(npstotalAqp20171);/* para la data */
// para los porcentajes promoters - pasive y detractors
var totalPromotersAqp20171 = 0;
for (var i = 0; i < data.AQP['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.AQP['2017-1'].ratings[i].nps.promoters;
  totalPromotersAqp20171 += raitingspNpsromoters;
}
var npsTotalPromotersAqp20171 = (totalPromotersAqp20171 / 3).toFixed(2);
console.log(npsTotalPromotersAqp20171);/* para la data */

var totalPasiveAqp20171 = 0;
for (var i = 0; i < data.AQP['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.AQP['2017-1'].ratings[i].nps.passive;
  totalPasiveAqp20171 += raitingspNpsromoters;
}
npsTotalPasiveAqp20171 = (totalPasiveAqp20171 / 3).toFixed(2);
console.log(npsTotalPasiveAqp20171);/* para la data */

var totalDetractorsAqp20171 = 0;
for (var i = 0; i < data.AQP['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.AQP['2017-1'].ratings[i].nps.detractors;
  totalDetractorsAqp20171 += raitingspNpsromoters;
}
var npsTotalDetractorsAqp20171 = (totalDetractorsAqp20171 / 3).toFixed(2);
console.log(npsTotalDetractorsAqp20171);/* para la data */

// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.

var sprintTech1Aqp20171 = 0;
var sprintTech2Aqp20171 = 0;
var sprintTech3Aqp20171 = 0;
var sprintTech4Aqp20171 = 0;
for (var i = 0; i < data.AQP['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.AQP['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreTech = data.AQP['2017-1'].students[i].sprints[j].score.tech;
    var sprintNumber = data.AQP['2017-1'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreTech >= 1260) {
      sprintTech1Aqp20171 += 1;
    } else if (sprintNumber == 2 && stuScoreTech >= 1260) {
      sprintTech2Aqp20171 += 1;
    } else if (sprintNumber == 3 && stuScoreTech >= 1260) {
      sprintTech3Aqp20171 += 1;
    } else if (sprintNumber == 4 && stuScoreTech >= 1260) {
      sprintTech4Aqp20171 += 1;
    }
  }
}
console.log(sprintTech1Aqp20171);/* para la data */
console.log(sprintTech2Aqp20171);/* para la data */
console.log(sprintTech3Aqp20171);/* para la data */
console.log(sprintTech4Aqp20171);/* para la data */

var sprintHse1Aqp20171 = 0;
var sprintHse2Aqp20171 = 0;
var sprintHse3Aqp20171 = 0;
var sprintHse4Aqp20171 = 0;
for (var i = 0; i < data.AQP['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.AQP['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.AQP['2017-1'].students[i].sprints[j].score.hse;
    var sprintNumber = data.AQP['2017-1'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreHse >= 840) {
      sprintHse1Aqp20171 += 1;
    } else if (sprintNumber == 2 && stuScoreHse >= 840) {
      sprintHse2Aqp20171 += 1;
    } else if (sprintNumber == 3 && stuScoreHse >= 840) {
      sprintHse3Aqp20171 +=1;
    } else if (sprintNumber == 4 && stuScoreHse >= 840) {
      sprintHse4Aqp20171 += 1;
    }
  }
}
console.log(sprintHse1Aqp20171);/* para la data */
console.log(sprintHse2Aqp20171);/* para la data */
console.log(sprintHse3Aqp20171);/* para la data */
console.log(sprintHse4Aqp20171);/* para la data */

// El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

var pctjStudentsSatAqp20171 = 0;
for (var i = 0; i < data.AQP['2017-1'].ratings.length ; i++) {
  var studentsCumple = data.AQP['2017-1'].ratings[i].student.cumple;
  var studentsSupera = data.AQP['2017-1'].ratings[i].student.supera;
  var studentSat = studentsCumple + studentsSupera;
  pctjStudentsSatAqp20171 += studentSat;
}
var totalSatisfationAqp20171 = (pctjStudentsSatAqp20171 / 3).toFixed(2);
console.log(totalSatisfationAqp20171);/* para la data */

// La puntuación promedio de l@s profesores.

var ptPromTeacherAqp20171 = 0;
for (var i = 0; i < data.AQP['2017-1'].ratings.length ; i++) {
  var ptTeacher = data.AQP['2017-1'].ratings[i].teacher;
  ptPromTeacherAqp20171 += ptTeacher;
}
ptPromTeacherAqp20171 = Number(ptPromTeacherAqp20171.toFixed(2));
var scoreTeacherAqp20171 = (ptPromTeacherAqp20171 / 3).toFixed(2);
console.log(scoreTeacherAqp20171);/* para la data */

// La puntuación promedio de l@s jedi masters.

var ptPromJedisAqp20171 = 0;
for (var i = 0; i < data.AQP['2017-1'].ratings.length ; i++) {
  var ptJedis = data.AQP['2017-1'].ratings[i].jedi;
  ptPromJedisAqp20171 += ptJedis;
}
var ptJedistotalAqp20171 = ptPromJedisAqp20171 / 3 ;
ptJedistotalAqp20171 = ptJedistotalAqp20171.toFixed(2);
var scoreJediAqp20171 = ptJedistotalAqp20171;
console.log(scoreJediAqp20171);/* para la data */

// Mexico 2017-1

var studentsCdmx20171UP = 0;
var studentsCdmx20171Down = 0;
for (var i = 0; i < data.CDMX['2017-1'].students.length ; i++) {
  var studentsTotal = data.CDMX['2017-1'].students[i].active;
  if (studentsTotal === true) {
    studentsCdmx20171UP += 1;
  } else if (studentsTotal === false) {
    studentsCdmx20171Down += 1;
  }
}
studentsCdmx20171UP;
studentsCdmx20171Down;
var totalstudentsCdmx20171 = studentsCdmx20171UP + studentsCdmx20171Down;
var detractorsCdmx20171 = (studentsCdmx20171Down / totalstudentsCdmx20171) * 100;
detractorsCdmx20171 = detractorsCdmx20171.toFixed(2);
console.log(totalstudentsCdmx20171);/* para la data */
console.log(detractorsCdmx20171);/* para la data */

// obteniendo score mayor 70%
// La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
var SumScoreSprintHseCdmx20171 = 0;
var SumScoreSprintTechCdmx20171 = 0;
var stuContarCdmx20171 = 0;
for (var i = 0; i < data.CDMX['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.CDMX['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.CDMX['2017-1'].students[i].sprints[j].score.hse;
    var stuScoreTech = data.CDMX['2017-1'].students[i].sprints[j].score.tech;
    SumScoreSprintHseCdmx20171 += stuScoreHse;
    SumScoreSprintTechCdmx20171 += stuScoreTech;
  } if (SumScoreSprintHseCdmx20171 >= 2520 && SumScoreSprintTechCdmx20171 >= 3780) {
    stuContarCdmx20171 += 1;
  }
  SumScoreSprintHseCdmx20171 = 0;
  SumScoreSprintTechCdmx20171 = 0;
}
console.log(stuContarCdmx20171);
var prctstuContarCdmx20171 = ((stuContarCdmx20171 / totalstudentsCdmx20171) * 100).toFixed(2);
console.log(prctstuContarCdmx20171); /* para la data */
// El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

var totalNpsSprintCdmx20171 = 0;
for (var i = 0; i < data.CDMX['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.CDMX['2017-1'].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data.CDMX['2017-1'].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprintCdmx20171 += NpsSprint;
}
var npstotalCdmx20171 = (totalNpsSprintCdmx20171 / 3).toFixed(2);;
console.log(npstotalCdmx20171);/* para la data */
// para los porcentajes promoters - pasive y detractors
var totalPromotersCdmx20171 = 0;
for (var i = 0; i < data.CDMX['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.CDMX['2017-1'].ratings[i].nps.promoters;
  totalPromotersCdmx20171 += raitingspNpsromoters;
}
var npsTotalPromotersCdmx20171 = (totalPromotersCdmx20171 / 3).toFixed(2);
console.log(npsTotalPromotersCdmx20171);/* para la data */

var totalPasiveCdmx20171 = 0;
for (var i = 0; i < data.CDMX['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.CDMX['2017-1'].ratings[i].nps.passive;
  totalPasiveCdmx20171 += raitingspNpsromoters;
}
npsTotalPasiveCdmx20171 = (totalPasiveCdmx20171 / 3).toFixed(2);
console.log(npsTotalPasiveCdmx20171);/* para la data */

var totalDetractorsCdmx20171 = 0;
for (var i = 0; i < data.CDMX['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.CDMX['2017-1'].ratings[i].nps.detractors;
  totalDetractorsCdmx20171 += raitingspNpsromoters;
}
var npsTotalDetractorsCdmx20171 = (totalDetractorsCdmx20171 / 3).toFixed(2);
console.log(npsTotalDetractorsCdmx20171);/* para la data */

// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.

var sprintTech1Cdmx20171 = 0;
var sprintTech2Cdmx20171 = 0;
var sprintTech3Cdmx20171 = 0;
var sprintTech4Cdmx20171 = 0;
for (var i = 0; i < data.CDMX['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.CDMX['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreTech = data.CDMX['2017-1'].students[i].sprints[j].score.tech;
    var sprintNumber = data.CDMX['2017-1'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreTech >= 1260) {
      sprintTech1Cdmx20171 += 1;
    } else if (sprintNumber == 2 && stuScoreTech >= 1260) {
      sprintTech2Cdmx20171 += 1;
    } else if (sprintNumber == 3 && stuScoreTech >= 1260) {
      sprintTech3Cdmx20171 += 1;
    } else if (sprintNumber == 4 && stuScoreTech >= 1260) {
      sprintTech4Cdmx20171 += 1;
    }
  }
}
console.log(sprintTech1Cdmx20171);/* para la data */
console.log(sprintTech2Cdmx20171);/* para la data */
console.log(sprintTech3Cdmx20171);/* para la data */
console.log(sprintTech4Cdmx20171);/* para la data */

var sprintHse1Cdmx20171 = 0;
var sprintHse2Cdmx20171 = 0;
var sprintHse3Cdmx20171 = 0;
var sprintHse4Cdmx20171 = 0;
for (var i = 0; i < data.CDMX['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.CDMX['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.CDMX['2017-1'].students[i].sprints[j].score.hse;
    var sprintNumber = data.CDMX['2017-1'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreHse >= 840) {
      sprintHse1Cdmx20171 += 1;
    } else if (sprintNumber == 2 && stuScoreHse >= 840) {
      sprintHse2Cdmx20171 += 1;
    } else if (sprintNumber == 3 && stuScoreHse >= 840) {
      sprintHse3Cdmx20171 +=1;
    } else if (sprintNumber == 4 && stuScoreHse >= 840) {
      sprintHse4Cdmx20171 += 1;
    }
  }
}
console.log(sprintHse1Cdmx20171);/* para la data */
console.log(sprintHse2Cdmx20171);/* para la data */
console.log(sprintHse3Cdmx20171);/* para la data */
console.log(sprintHse4Cdmx20171);/* para la data */

// El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

var pctjStudentsSatCdmx20171 = 0;
for (var i = 0; i < data.CDMX['2017-1'].ratings.length ; i++) {
  var studentsCumple = data.CDMX['2017-1'].ratings[i].student.cumple;
  var studentsSupera = data.CDMX['2017-1'].ratings[i].student.supera;
  var studentSat = studentsCumple + studentsSupera;
  pctjStudentsSatCdmx20171 += studentSat;
}
var totalSatisfationCdmx20171 = (pctjStudentsSatCdmx20171 / 3).toFixed(2);
console.log(totalSatisfationCdmx20171);/* para la data */

// La puntuación promedio de l@s profesores.

var ptPromTeacherCdmx20171 = 0;
for (var i = 0; i < data.CDMX['2017-1'].ratings.length ; i++) {
  var ptTeacher = data.CDMX['2017-1'].ratings[i].teacher;
  ptPromTeacherCdmx20171 += ptTeacher;
}
ptPromTeacherCdmx20171 = Number(ptPromTeacherCdmx20171.toFixed(2));
var scoreTeacherCdmx20171 = (ptPromTeacherCdmx20171 / 3).toFixed(2);
console.log(scoreTeacherCdmx20171);/* para la data */

// La puntuación promedio de l@s jedi masters.

var ptPromJedisCdmx20171 = 0;
for (var i = 0; i < data.CDMX['2017-1'].ratings.length ; i++) {
  var ptJedis = data.CDMX['2017-1'].ratings[i].jedi;
  ptPromJedisCdmx20171 += ptJedis;
}
var ptJedistotalCdmx20171 = ptPromJedisCdmx20171 / 3 ;
ptJedistotalCdmx20171 = ptJedistotalCdmx20171.toFixed(2);
var scoreJediCdmx20171 = ptJedistotalCdmx20171;
console.log(scoreJediCdmx20171);/* para la data */

// Mexico 2017-2

var studentsCdmx20172UP = 0;
var studentsCdmx20172Down = 0;
for (var i = 0; i < data.CDMX['2017-2'].students.length ; i++) {
  var studentsTotal = data.CDMX['2017-2'].students[i].active;
  if (studentsTotal === true) {
    studentsCdmx20172UP += 1;
  } else if (studentsTotal === false) {
    studentsCdmx20172Down += 1;
  }
}
studentsCdmx20172UP;
studentsCdmx20172Down;
var totalstudentsCdmx20172 = studentsCdmx20172UP + studentsCdmx20172Down;
var detractorsCdmx20172 = (studentsCdmx20172Down / totalstudentsCdmx20172) * 100;
detractorsCdmx20172 = detractorsCdmx20172.toFixed(2);
console.log(totalstudentsCdmx20172);/* para la data */
console.log(detractorsCdmx20172);/* para la data */

// obteniendo score mayor 70%
// La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
var SumScoreSprintHseCdmx20172 = 0;
var SumScoreSprintTechCdmx20172 = 0;
var stuContarCdmx20172 = 0;
for (var i = 0; i < data.CDMX['2017-2'].students.length ; i++) {
  for (var j = 0; j < data.CDMX['2017-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.CDMX['2017-2'].students[i].sprints[j].score.hse;
    var stuScoreTech = data.CDMX['2017-2'].students[i].sprints[j].score.tech;
    SumScoreSprintHseCdmx20172 += stuScoreHse;
    SumScoreSprintTechCdmx20172 += stuScoreTech;
  } if (SumScoreSprintHseCdmx20172 >= 1680 && SumScoreSprintTechCdmx20172 >= 2520) {
    stuContarCdmx20172 += 1;
  }
  SumScoreSprintHseCdmx20172 = 0;
  SumScoreSprintTechCdmx20172 = 0;
}
console.log(stuContarCdmx20172);
var prctstuContarCdmx20172 = ((stuContarCdmx20172 / totalstudentsCdmx20172) * 100).toFixed(2);
console.log(prctstuContarCdmx20172);/* para la data */
// El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

var totalNpsSprintCdmx20172 = 0;
for (var i = 0; i < data.CDMX['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.CDMX['2017-2'].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data.CDMX['2017-2'].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprintCdmx20172 += NpsSprint;
}
var npstotalCdmx20172 = (totalNpsSprintCdmx20172 / 3).toFixed(2);;
console.log(npstotalCdmx20172);/* para la data */
// para los porcentajes promoters - pasive y detractors
var totalPromotersCdmx20172 = 0;
for (var i = 0; i < data.CDMX['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.CDMX['2017-2'].ratings[i].nps.promoters;
  totalPromotersCdmx20172 += raitingspNpsromoters;
}
var npsTotalPromotersCdmx20172 = (totalPromotersCdmx20172 / 2).toFixed(2);
console.log(npsTotalPromotersCdmx20172);/* para la data */

var totalPasiveCdmx20172 = 0;
for (var i = 0; i < data.CDMX['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.CDMX['2017-2'].ratings[i].nps.passive;
  totalPasiveCdmx20172 += raitingspNpsromoters;
}
npsTotalPasiveCdmx20172 = (totalPasiveCdmx20172 / 2).toFixed(2);
console.log(npsTotalPasiveCdmx20172);/* para la data */

var totalDetractorsCdmx20172 = 0;
for (var i = 0; i < data.CDMX['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.CDMX['2017-2'].ratings[i].nps.detractors;
  totalDetractorsCdmx20172 += raitingspNpsromoters;
}
var npsTotalDetractorsCdmx20172 = (totalDetractorsCdmx20172 / 2).toFixed(2);
console.log(npsTotalDetractorsCdmx20172);/* para la data */

// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.

var sprintTech1Cdmx20172 = 0;
var sprintTech2Cdmx20172 = 0;
var sprintTech3Cdmx20172 = 0;
var sprintTech4Cdmx20172 = 0;
for (var i = 0; i < data.CDMX['2017-2'].students.length ; i++) {
  for (var j = 0; j < data.CDMX['2017-2'].students[i].sprints.length ; j++) {
    var stuScoreTech = data.CDMX['2017-2'].students[i].sprints[j].score.tech;
    var sprintNumber = data.CDMX['2017-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreTech >= 1260) {
      sprintTech1Cdmx20172 += 1;
    } else if (sprintNumber == 2 && stuScoreTech >= 1260) {
      sprintTech2Cdmx20172 += 1;
    } else if (sprintNumber == 3 && stuScoreTech >= 1260) {
      sprintTech3Cdmx20172 += 1;
    } else if (sprintNumber == 4 && stuScoreTech >= 1260) {
      sprintTech4Cdmx20172 += 1;
    }
  }
}
console.log(sprintTech1Cdmx20172);/* para la data */
console.log(sprintTech2Cdmx20172);/* para la data */
console.log(sprintTech3Cdmx20172);/* para la data */
console.log(sprintTech4Cdmx20172);/* para la data */

var sprintHse1Cdmx20172 = 0;
var sprintHse2Cdmx20172 = 0;
var sprintHse3Cdmx20172 = 0;
var sprintHse4Cdmx20172 = 0;
for (var i = 0; i < data.CDMX['2017-2'].students.length ; i++) {
  for (var j = 0; j < data.CDMX['2017-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.CDMX['2017-2'].students[i].sprints[j].score.hse;
    var sprintNumber = data.CDMX['2017-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreHse >= 840) {
      sprintHse1Cdmx20172 += 1;
    } else if (sprintNumber == 2 && stuScoreHse >= 840) {
      sprintHse2Cdmx20172 += 1;
    } else if (sprintNumber == 3 && stuScoreHse >= 840) {
      sprintHse3Cdmx20172 +=1;
    } else if (sprintNumber == 4 && stuScoreHse >= 840) {
      sprintHse4Cdmx20172 += 1;
    }
  }
}
console.log(sprintHse1Cdmx20172);/* para la data */
console.log(sprintHse2Cdmx20172);/* para la data */
console.log(sprintHse3Cdmx20172);/* para la data */
console.log(sprintHse4Cdmx20172);/* para la data */

// El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

var pctjStudentsSatCdmx20172 = 0;
for (var i = 0; i < data.CDMX['2017-2'].ratings.length ; i++) {
  var studentsCumple = data.CDMX['2017-2'].ratings[i].student.cumple;
  var studentsSupera = data.CDMX['2017-2'].ratings[i].student.supera;
  var studentSat = studentsCumple + studentsSupera;
  pctjStudentsSatCdmx20172 += studentSat;
}
var totalSatisfationCdmx20172 = (pctjStudentsSatCdmx20172 / 2).toFixed(2);
console.log(totalSatisfationCdmx20172);/* para la data */

// La puntuación promedio de l@s profesores.

var ptPromTeacherCdmx20172 = 0;
for (var i = 0; i < data.CDMX['2017-2'].ratings.length ; i++) {
  var ptTeacher = data.CDMX['2017-2'].ratings[i].teacher;
  ptPromTeacherCdmx20172 += ptTeacher;
}
ptPromTeacherCdmx20172 = Number(ptPromTeacherCdmx20172.toFixed(2));
var scoreTeacherCdmx20172 = (ptPromTeacherCdmx20172 / 2).toFixed(2);
console.log(scoreTeacherCdmx20172);/* para la data */

// La puntuación promedio de l@s jedi masters.

var ptPromJedisCdmx20172 = 0;
for (var i = 0; i < data.CDMX['2017-2'].ratings.length ; i++) {
  var ptJedis = data.CDMX['2017-2'].ratings[i].jedi;
  ptPromJedisCdmx20172 += ptJedis;
}
var ptJedistotalCdmx20172 = ptPromJedisCdmx20172 / 2 ;
ptJedistotalCdmx20172 = ptJedistotalCdmx20172.toFixed(2);
var scoreJediCdmx20172 = ptJedistotalCdmx20172;
console.log(scoreJediCdmx20172);/* para la data */

// Lima 2016-2

var studentsLim20162UP = 0;
var studentsLim20162Down = 0;
for (var i = 0; i < data.LIM['2016-2'].students.length ; i++) {
  var studentsTotal = data.LIM['2016-2'].students[i].active;
  if (studentsTotal === true) {
    studentsLim20162UP += 1;
  } else if (studentsTotal === false) {
    studentsLim20162Down += 1;
  }
}
studentsLim20162UP;
studentsLim20162Down;
var totalstudentsLim20162 = studentsLim20162UP + studentsLim20162Down;
var detractorsLim20162 = (studentsLim20162Down / totalstudentsLim20162) * 100;
detractorsLim20162 = detractorsLim20162.toFixed(2);
console.log(totalstudentsLim20162);/* para la data */
console.log(detractorsLim20162);/* para la data */

// obteniendo score mayor 70%
// La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
var SumScoreSprintHseLim20162 = 0;
var SumScoreSprintTechLim20162 = 0;
var stuContarLim20162 = 0;
for (var i = 0; i < data.LIM['2016-2'].students.length ; i++) {
  for (var j = 0; j < data.LIM['2016-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.LIM['2016-2'].students[i].sprints[j].score.hse;
    var stuScoreTech = data.LIM['2016-2'].students[i].sprints[j].score.tech;
    SumScoreSprintHseLim20162 += stuScoreHse;
    SumScoreSprintTechLim20162 += stuScoreTech;
  } if (SumScoreSprintHseLim20162 >= 1680 && SumScoreSprintTechLim20162 >= 2520) {
    stuContarLim20162 += 1;
  }
  SumScoreSprintHseLim20162 = 0;
  SumScoreSprintTechLim20162 = 0;
}
console.log(stuContarLim20162);/* para la data */
var prctstuContarLim20162 = ((stuContarLim20162 / totalstudentsLim20162) * 100).toFixed(2);
console.log(prctstuContarLim20162); /* para la data */
// El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

var totalNpsSprintLim20162 = 0;
for (var i = 0; i < data.LIM['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2016-2'].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data.LIM['2016-2'].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprintLim20162 += NpsSprint;
}
var npstotalLim20162 = (totalNpsSprintLim20162 / 2).toFixed(2);;
console.log(npstotalLim20162);/* para la data */
// para los porcentajes promoters - pasive y detractors
var totalPromotersLim20162 = 0;
for (var i = 0; i < data.LIM['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2016-2'].ratings[i].nps.promoters;
  totalPromotersLim20162 += raitingspNpsromoters;
}
var npsTotalPromotersLim20162 = (totalPromotersLim20162 / 2).toFixed(2);
console.log(npsTotalPromotersLim20162);/* para la data */

var totalPasiveLim20162 = 0;
for (var i = 0; i < data.LIM['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2016-2'].ratings[i].nps.passive;
  totalPasiveLim20162 += raitingspNpsromoters;
}
npsTotalPasiveLim20162 = (totalPasiveLim20162 / 2).toFixed(2);
console.log(npsTotalPasiveLim20162);/* para la data */

var totalDetractorsLim20162 = 0;
for (var i = 0; i < data.LIM['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2016-2'].ratings[i].nps.detractors;
  totalDetractorsLim20162 += raitingspNpsromoters;
}
var npsTotalDetractorsLim20162 = (totalDetractorsLim20162 / 2).toFixed(2);
console.log(npsTotalDetractorsLim20162);/* para la data */

// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.

var sprintTech1Lim20162 = 0;
var sprintTech2Lim20162 = 0;
var sprintTech3Lim20162 = 0;
var sprintTech4Lim20162 = 0;
for (var i = 0; i < data.LIM['2016-2'].students.length ; i++) {
  for (var j = 0; j < data.LIM['2016-2'].students[i].sprints.length ; j++) {
    var stuScoreTech = data.LIM['2016-2'].students[i].sprints[j].score.tech;
    var sprintNumber = data.LIM['2016-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreTech >= 1260) {
      sprintTech1Lim20162 += 1;
    } else if (sprintNumber == 2 && stuScoreTech >= 1260) {
      sprintTech2Lim20162 += 1;
    } else if (sprintNumber == 3 && stuScoreTech >= 1260) {
      sprintTech3Lim20162 += 1;
    } else if (sprintNumber == 4 && stuScoreTech >= 1260) {
      sprintTech4Lim20162 += 1;
    }
  }
}
console.log(sprintTech1Lim20162);/* para la data */
console.log(sprintTech2Lim20162);/* para la data */
console.log(sprintTech3Lim20162);/* para la data */
console.log(sprintTech4Lim20162);/* para la data */

var sprintHse1Lim20162 = 0;
var sprintHse2Lim20162 = 0;
var sprintHse3Lim20162 = 0;
var sprintHse4Lim20162 = 0;
for (var i = 0; i < data.LIM['2016-2'].students.length ; i++) {
  for (var j = 0; j < data.LIM['2016-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.LIM['2016-2'].students[i].sprints[j].score.hse;
    var sprintNumber = data.LIM['2016-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreHse >= 840) {
      sprintHse1Lim20162 += 1;
    } else if (sprintNumber == 2 && stuScoreHse >= 840) {
      sprintHse2Lim20162 += 1;
    } else if (sprintNumber == 3 && stuScoreHse >= 840) {
      sprintHse3Lim20162 +=1;
    } else if (sprintNumber == 4 && stuScoreHse >= 840) {
      sprintHse4Lim20162 += 1;
    }
  }
}
console.log(sprintHse1Lim20162);/* para la data */
console.log(sprintHse2Lim20162);/* para la data */
console.log(sprintHse3Lim20162);/* para la data */
console.log(sprintHse4Lim20162);/* para la data */

// El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

var pctjStudentsSatLim20162 = 0;
for (var i = 0; i < data.LIM['2016-2'].ratings.length ; i++) {
  var studentsCumple = data.LIM['2016-2'].ratings[i].student.cumple;
  var studentsSupera = data.LIM['2016-2'].ratings[i].student.supera;
  var studentSat = studentsCumple + studentsSupera;
  pctjStudentsSatLim20162 += studentSat;
}
var totalSatisfationLim20162 = (pctjStudentsSatLim20162 / 2).toFixed(2);
console.log(totalSatisfationLim20162);/* para la data */

// La puntuación promedio de l@s profesores.

var ptPromTeacherLim20162 = 0;
for (var i = 0; i < data.LIM['2016-2'].ratings.length ; i++) {
  var ptTeacher = data.LIM['2016-2'].ratings[i].teacher;
  ptPromTeacherLim20162 += ptTeacher;
}
ptPromTeacherLim20162 = Number(ptPromTeacherLim20162.toFixed(2));
var scoreTeacherLim20162 = (ptPromTeacherLim20162 / 2).toFixed(2);
console.log(scoreTeacherLim20162);/* para la data */

// La puntuación promedio de l@s jedi masters.

var ptPromJedisLim20162 = 0;
for (var i = 0; i < data.LIM['2016-2'].ratings.length ; i++) {
  var ptJedis = data.LIM['2016-2'].ratings[i].jedi;
  ptPromJedisLim20162 += ptJedis;
}
var ptJedistotalLim20162 = ptPromJedisLim20162 / 2 ;
ptJedistotalLim20162 = ptJedistotalLim20162.toFixed(2);
var scoreJediLim20162 = ptJedistotalLim20162;
console.log(scoreJediLim20162);/* para la data */

// Lima 2017-1

var studentsLim20171UP = 0;
var studentsLim20171Down = 0;
for (var i = 0; i < data.LIM['2017-1'].students.length ; i++ ) {
  var studentsTotal = data.LIM['2017-1'].students[i].active;
  if (studentsTotal === true) {
    studentsLim20171UP += 1;
  } else if (studentsTotal === false) {
    studentsLim20171Down += 1;
  }
}
studentsLim20171UP;
studentsLim20171Down;
var totalstudentsLim20171 = studentsLim20171UP + studentsLim20171Down;
var detractorsLim20171 = (studentsLim20171Down / totalstudentsLim20171) * 100;
detractorsLim20171 = detractorsLim20171.toFixed(2);
console.log(totalstudentsLim20171);/* para la data */
console.log(detractorsLim20171);/* para la data */

// obteniendo score mayor 70%
// La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
var SumScoreSprintHseLim20171 = 0;
var SumScoreSprintTechLim20171 = 0;
var stuContarLim20171 = 0;
for (var i = 0; i < data.LIM['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.LIM['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.LIM['2017-1'].students[i].sprints[j].score.hse;
    var stuScoreTech = data.LIM['2017-1'].students[i].sprints[j].score.tech;
    SumScoreSprintHseLim20171 += stuScoreHse;
    SumScoreSprintTechLim20171 += stuScoreTech;
  } if (SumScoreSprintHseLim20171 >= 3360 && SumScoreSprintTechLim20171 >= 5040) {
    stuContarLim20171 += 1;
  }
  SumScoreSprintHseLim20171 = 0;
  SumScoreSprintTechLim20171 = 0;
}
console.log(stuContarLim20171);
var prctstuContarLim20171 = ((stuContarLim20171 / totalstudentsLim20171) * 100).toFixed(2);
console.log(prctstuContarLim20171);/* para la data */
// El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

var totalNpsSprintLim20171 = 0;
for (var i = 0; i < data.LIM['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2017-1'].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data.LIM['2017-1'].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprintLim20171 += NpsSprint;
}
var npstotalLim20171 = totalNpsSprintLim20171 / 4;
console.log(npstotalLim20171);/* para la data */
// para los porcentajes promoters - pasive y detractors
var totalPromotersLim20171 = 0;
for (var i = 0; i < data.LIM['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2017-1'].ratings[i].nps.promoters;
  totalPromotersLim20171 += raitingspNpsromoters;
}
var npsTotalPromotersLim20171 = (totalPromotersLim20171 / 4);
console.log(npsTotalPromotersLim20171);/* para la data */

var totalPasiveLim20171 = 0;
for (var i = 0; i < data.LIM['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2017-1'].ratings[i].nps.passive;
  totalPasiveLim20171 += raitingspNpsromoters;
}
npsTotalPasiveLim20171 = totalPasiveLim20171 / 4;
console.log(npsTotalPasiveLim20171);/* para la data */

var totalDetractorsLim20171 = 0;
for (var i = 0; i < data.LIM['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2017-1'].ratings[i].nps.detractors;
  totalDetractorsLim20171 += raitingspNpsromoters;
}
var npsTotalDetractorsLim20171 = totalDetractorsLim20171 / 4;
console.log(npsTotalDetractorsLim20171);/* para la data */

// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.

var sprintTech1Lim20171 = 0;
var sprintTech2Lim20171 = 0;
var sprintTech3Lim20171 = 0;
var sprintTech4Lim20171 = 0;
for (var i = 0; i < data.LIM['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.LIM['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreTech = data.LIM['2017-1'].students[i].sprints[j].score.tech;
    var sprintNumber = data.LIM['2017-1'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreTech >= 1260) {
      sprintTech1Lim20171 += 1;
    } else if (sprintNumber == 2 && stuScoreTech >= 1260) {
      sprintTech2Lim20171 += 1;
    } else if (sprintNumber == 3 && stuScoreTech >= 1260) {
      sprintTech3Lim20171 += 1;
    } else if (sprintNumber == 4 && stuScoreTech >= 1260) {
      sprintTech4Lim20171 += 1;
    }
  }
}
console.log(sprintTech1Lim20171);/* para la data */
console.log(sprintTech2Lim20171);/* para la data */
console.log(sprintTech3Lim20171);/* para la data */
console.log(sprintTech4Lim20171);/* para la data */

var sprintHse1Lim20171 = 0;
var sprintHse2Lim20171 = 0;
var sprintHse3Lim20171 = 0;
var sprintHse4Lim20171 = 0;
for (var i = 0; i < data.LIM['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.LIM['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.LIM['2017-1'].students[i].sprints[j].score.hse;
    var sprintNumber = data.LIM['2017-1'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreHse >= 840) {
      sprintHse1Lim20171 += 1;
    } else if (sprintNumber == 2 && stuScoreHse >= 840) {
      sprintHse2Lim20171 += 1;
    } else if (sprintNumber == 3 && stuScoreHse >= 840) {
      sprintHse3Lim20171 +=1;
    } else if (sprintNumber == 4 && stuScoreHse >= 840) {
      sprintHse4Lim20171 += 1;
    }
  }
}
console.log(sprintHse1Lim20171);/* para la data */
console.log(sprintHse2Lim20171);/* para la data */
console.log(sprintHse3Lim20171);/* para la data */
console.log(sprintHse4Lim20171);/* para la data */

// El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

var pctjStudentsSatLim20171 = 0;
for (var i = 0; i < data.LIM['2017-1'].ratings.length ; i++) {
  var studentsCumple = data.LIM['2017-1'].ratings[i].student.cumple;
  var studentsSupera = data.LIM['2017-1'].ratings[i].student.supera;
  var studentSat = studentsCumple + studentsSupera;
  pctjStudentsSatLim20171 += studentSat;
}
var totalSatisfationLim20171 = pctjStudentsSatLim20171 / 4;
console.log(totalSatisfationLim20171);/* para la data */

// La puntuación promedio de l@s profesores.

var ptPromTeacherLim20171 = 0;
for (var i = 0; i < data.LIM['2017-1'].ratings.length ; i++) {
  var ptTeacher = data.LIM['2017-1'].ratings[i].teacher;
  ptPromTeacherLim20171 += ptTeacher;
}
ptPromTeacherLim20171 = Number(ptPromTeacherLim20171.toFixed(2));
var scoreTeacherLim20171 = ptPromTeacherLim20171 / 4;
console.log(scoreTeacherLim20171);/* para la data */

// La puntuación promedio de l@s jedi masters.

var ptPromJedisLim20171 = 0;
for (var i = 0; i < data.LIM['2017-1'].ratings.length ; i++) {
  var ptJedis = data.LIM['2017-1'].ratings[i].jedi;
  ptPromJedisLim20171 += ptJedis;
}
var ptJedistotalLim20171 = ptPromJedisLim20171 / 4 ;
ptJedistotalLim20171 = ptJedistotalLim20171.toFixed(2);
var scoreJediLim20171 = ptJedistotalLim20171;
console.log(scoreJediLim20171);/* para la data */

// Lima 2017-2

var studentsLim20172UP = 0;
var studentsLim20172Down = 0;
for (var i = 0; i < data.LIM['2017-2'].students.length ; i++) {
  var studentsTotal = data.LIM['2017-2'].students[i].active;
  if (studentsTotal === true) {
    studentsLim20172UP += 1;
  } else if (studentsTotal === false) {
    studentsLim20172Down += 1;
  }
}
studentsLim20172UP;
studentsLim20172Down;
var totalstudentsLim20172 = studentsLim20172UP + studentsLim20172Down;
var detractorsLim20172 = (studentsLim20172Down / totalstudentsLim20172) * 100;
detractorsLim20172 = detractorsLim20172.toFixed(2);
console.log(totalstudentsLim20172);/* para la data */
console.log(detractorsLim20172);/* para la data */

// obteniendo score mayor 70%
// La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
var SumScoreSprintHseLim20172 = 0;
var SumScoreSprintTechLim20172 = 0;
var stuContarLim20172 = 0;
for (var i = 0; i < data.LIM['2017-2'].students.length ; i++) {
  for (var j = 0; j < data.LIM['2017-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.LIM['2017-2'].students[i].sprints[j].score.hse;
    var stuScoreTech = data.LIM['2017-2'].students[i].sprints[j].score.tech;
    SumScoreSprintHseLim20172 += stuScoreHse;
    SumScoreSprintTechLim20172 += stuScoreTech;
  } if (SumScoreSprintHseLim20172 >= 1680 && SumScoreSprintTechLim20172 >= 2520) {
    stuContarLim20172 += 1;
  }
  SumScoreSprintHseLim20172 = 0;
  SumScoreSprintTechLim20172 = 0;
}
console.log(stuContarLim20172);
var prctstuContarLim20172 = ((stuContarLim20172 / totalstudentsLim20172) * 100).toFixed(2);
console.log(prctstuContarLim20172);/* para la data */
// El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

var totalNpsSprintLim20172 = 0;
for (var i = 0; i < data.LIM['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2017-2'].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data.LIM['2017-2'].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprintLim20172 += NpsSprint;
}
var npstotalLim20172 = (totalNpsSprintLim20172 / 2).toFixed(2);;
console.log(npstotalLim20172);/* para la data */
// para los porcentajes promoters - pasive y detractors
var totalPromotersLim20172 = 0;
for (var i = 0; i < data.LIM['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2017-2'].ratings[i].nps.promoters;
  totalPromotersLim20172 += raitingspNpsromoters;
}
var npsTotalPromotersLim20172 = (totalPromotersLim20172 / 2).toFixed(2);
console.log(npsTotalPromotersLim20172);/* para la data */

var totalPasiveLim20172 = 0;
for (var i = 0; i < data.LIM['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2017-2'].ratings[i].nps.passive;
  totalPasiveLim20172 += raitingspNpsromoters;
}
npsTotalPasiveLim20172 = (totalPasiveLim20172 / 2).toFixed(2);
console.log(npsTotalPasiveLim20172);/* para la data */

var totalDetractorsLim20172 = 0;
for (var i = 0; i < data.LIM['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.LIM['2017-2'].ratings[i].nps.detractors;
  totalDetractorsLim20172 += raitingspNpsromoters;
}
var npsTotalDetractorsLim20172 = (totalDetractorsLim20172 / 2).toFixed(2);
console.log(npsTotalDetractorsLim20172);/* para la data */

// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.

var sprintTech1Lim20172 = 0;
var sprintTech2Lim20172 = 0;
var sprintTech3Lim20172 = 0;
var sprintTech4Lim20172 = 0;
for (var i = 0; i < data.LIM['2017-2'].students.length ; i++) {
  for (var j = 0; j < data.LIM['2017-2'].students[i].sprints.length ; j++) {
    var stuScoreTech = data.LIM['2017-2'].students[i].sprints[j].score.tech;
    var sprintNumber = data.LIM['2017-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreTech >= 1260) {
      sprintTech1Lim20172 += 1;
    } else if (sprintNumber == 2 && stuScoreTech >= 1260) {
      sprintTech2Lim20172 += 1;
    } else if (sprintNumber == 3 && stuScoreTech >= 1260) {
      sprintTech3Lim20172 += 1;
    } else if (sprintNumber == 4 && stuScoreTech >= 1260) {
      sprintTech4Lim20172 += 1;
    }
  }
}
console.log(sprintTech1Lim20172);/* para la data */
console.log(sprintTech2Lim20172);/* para la data */
console.log(sprintTech3Lim20172);/* para la data */
console.log(sprintTech4Lim20172);/* para la data */

var sprintHse1Lim20172 = 0;
var sprintHse2Lim20172 = 0;
var sprintHse3Lim20172 = 0;
var sprintHse4Lim20172 = 0;
for (var i = 0; i < data.LIM['2017-2'].students.length ; i++) {
  for (var j = 0; j < data.LIM['2017-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.LIM['2017-2'].students[i].sprints[j].score.hse;
    var sprintNumber = data.LIM['2017-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreHse >= 840) {
      sprintHse1Lim20172 += 1;
    } else if (sprintNumber == 2 && stuScoreHse >= 840) {
      sprintHse2Lim20172 += 1;
    } else if (sprintNumber == 3 && stuScoreHse >= 840) {
      sprintHse3Lim20172 +=1;
    } else if (sprintNumber == 4 && stuScoreHse >= 840) {
      sprintHse4Lim20172 += 1;
    }
  }
}
console.log(sprintHse1Lim20172);/* para la data */
console.log(sprintHse2Lim20172);/* para la data */
console.log(sprintHse3Lim20172);/* para la data */
console.log(sprintHse4Lim20172);/* para la data */

// El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

var pctjStudentsSatLim20172 = 0;
for (var i = 0; i < data.LIM['2017-2'].ratings.length ; i++) {
  var studentsCumple = data.LIM['2017-2'].ratings[i].student.cumple;
  var studentsSupera = data.LIM['2017-2'].ratings[i].student.supera;
  var studentSat = studentsCumple + studentsSupera;
  pctjStudentsSatLim20172 += studentSat;
}
var totalSatisfationLim20172 = (pctjStudentsSatLim20172 / 2).toFixed(2);
console.log(totalSatisfationLim20172);/* para la data */

// La puntuación promedio de l@s profesores.

var ptPromTeacherLim20172 = 0;
for (var i = 0; i < data.LIM['2017-2'].ratings.length ; i++) {
  var ptTeacher = data.LIM['2017-2'].ratings[i].teacher;
  ptPromTeacherLim20172 += ptTeacher;
}
ptPromTeacherLim20172 = Number(ptPromTeacherLim20172.toFixed(2));
var scoreTeacherLim20172 = (ptPromTeacherLim20172 / 2).toFixed(2);
console.log(scoreTeacherLim20172);/* para la data */

// La puntuación promedio de l@s jedi masters.

var ptPromJedisLim20172 = 0;
for (var i = 0; i < data.LIM['2017-2'].ratings.length ; i++) {
  var ptJedis = data.LIM['2017-2'].ratings[i].jedi;
  ptPromJedisLim20172 += ptJedis;
}
var ptJedistotalLim20172 = ptPromJedisLim20172 / 2 ;
ptJedistotalLim20172 = ptJedistotalLim20172.toFixed(2);
var scoreJediLim20172 = ptJedistotalLim20172;
console.log(scoreJediLim20172);/* para la data */

// Santiago de Chile 2016-2

var studentsScl20162UP = 0;
var studentsScl20162Down = 0;
for (var i = 0; i < data.SCL['2016-2'].students.length ; i++ ) {
  var studentsTotal = data.SCL['2016-2'].students[i].active;
  if (studentsTotal === true) {
    studentsScl20162UP += 1;
  } else if (studentsTotal === false) {
    studentsScl20162Down += 1;
  }
}
studentsScl20162UP;
studentsScl20162Down;
var totalstudentsScl20162 = studentsScl20162UP + studentsScl20162Down;
var detractorsScl20162 = (studentsScl20162Down / totalstudentsScl20162) * 100;
detractorsScl20162 = detractorsScl20162.toFixed(2);
console.log(totalstudentsScl20162);/* para la data */
console.log(detractorsScl20162);/* para la data */

// obteniendo score mayor 70%
// La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
var SumScoreSprintHseScl20162 = 0;
var SumScoreSprintTechScl20162 = 0;
var stuContarScl20162 = 0;
for (var i = 0; i < data.SCL['2016-2'].students.length ; i++) {
  for (var j = 0; j < data.SCL['2016-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.SCL['2016-2'].students[i].sprints[j].score.hse;
    var stuScoreTech = data.SCL['2016-2'].students[i].sprints[j].score.tech;
    SumScoreSprintHseScl20162 += stuScoreHse;
    SumScoreSprintTechScl20162 += stuScoreTech;
  } if (SumScoreSprintHseScl20162 >= 3360 && SumScoreSprintTechScl20162 >= 5040) {
    stuContarScl20162 += 1;
  }
  SumScoreSprintHseScl20162 = 0;
  SumScoreSprintTechScl20162 = 0;
}
console.log(stuContarScl20162);
var prctstuContarScl20162 = ((stuContarScl20162 / totalstudentsScl20162) * 100).toFixed(2);
console.log(prctstuContarScl20162);/* para la data */
// El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

var totalNpsSprintScl20162 = 0;
for (var i = 0; i < data.SCL['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2016-2'].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data.SCL['2016-2'].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprintScl20162 += NpsSprint;
}
var npstotalScl20162 = totalNpsSprintScl20162 / 4;
console.log(npstotalScl20162);/* para la data */
// para los porcentajes promoters - pasive y detractors
var totalPromotersScl20162 = 0;
for (var i = 0; i < data.SCL['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2016-2'].ratings[i].nps.promoters;
  totalPromotersScl20162 += raitingspNpsromoters;
}
var npsTotalPromotersScl20162 = (totalPromotersScl20162 / 4);
console.log(npsTotalPromotersScl20162);/* para la data */

var totalPasiveScl20162 = 0;
for (var i = 0; i < data.SCL['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2016-2'].ratings[i].nps.passive;
  totalPasiveScl20162 += raitingspNpsromoters;
}
npsTotalPasiveScl20162 = totalPasiveScl20162 / 4;
console.log(npsTotalPasiveScl20162);/* para la data */

var totalDetractorsScl20162 = 0;
for (var i = 0; i < data.SCL['2016-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2016-2'].ratings[i].nps.detractors;
  totalDetractorsScl20162 += raitingspNpsromoters;
}
var npsTotalDetractorsScl20162 = totalDetractorsScl20162 / 4;
console.log(npsTotalDetractorsScl20162);/* para la data */

// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.

var sprintTech1Scl20162 = 0;
var sprintTech2Scl20162 = 0;
var sprintTech3Scl20162 = 0;
var sprintTech4Scl20162 = 0;
for (var i = 0; i < data.SCL['2016-2'].students.length ; i++) {
  for (var j = 0; j < data.SCL['2016-2'].students[i].sprints.length ; j++) {
    var stuScoreTech = data.SCL['2016-2'].students[i].sprints[j].score.tech;
    var sprintNumber = data.SCL['2016-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreTech >= 1260) {
      sprintTech1Scl20162 += 1;
    } else if (sprintNumber == 2 && stuScoreTech >= 1260) {
      sprintTech2Scl20162 += 1;
    } else if (sprintNumber == 3 && stuScoreTech >= 1260) {
      sprintTech3Scl20162 += 1;
    } else if (sprintNumber == 4 && stuScoreTech >= 1260) {
      sprintTech4Scl20162 += 1;
    }
  }
}
console.log(sprintTech1Scl20162);/* para la data */
console.log(sprintTech2Scl20162);/* para la data */
console.log(sprintTech3Scl20162);/* para la data */
console.log(sprintTech4Scl20162);/* para la data */

var sprintHse1Scl20162 = 0;
var sprintHse2Scl20162 = 0;
var sprintHse3Scl20162 = 0;
var sprintHse4Scl20162 = 0;
for (var i = 0; i < data.SCL['2016-2'].students.length ; i++) {
  for (var j = 0; j < data.SCL['2016-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.SCL['2016-2'].students[i].sprints[j].score.hse;
    var sprintNumber = data.SCL['2016-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreHse >= 840) {
      sprintHse1Scl20162 += 1;
    } else if (sprintNumber == 2 && stuScoreHse >= 840) {
      sprintHse2Scl20162 += 1;
    } else if (sprintNumber == 3 && stuScoreHse >= 840) {
      sprintHse3Scl20162 +=1;
    } else if (sprintNumber == 4 && stuScoreHse >= 840) {
      sprintHse4Scl20162 += 1;
    }
  }
}
console.log(sprintHse1Scl20162);/* para la data */
console.log(sprintHse2Scl20162);/* para la data */
console.log(sprintHse3Scl20162);/* para la data */
console.log(sprintHse4Scl20162);/* para la data */

// El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

var pctjStudentsSatScl20162 = 0;
for (var i = 0; i < data.SCL['2016-2'].ratings.length ; i++) {
  var studentsCumple = data.SCL['2016-2'].ratings[i].student.cumple;
  var studentsSupera = data.SCL['2016-2'].ratings[i].student.supera;
  var studentSat = studentsCumple + studentsSupera;
  pctjStudentsSatScl20162 += studentSat;
}
var totalSatisfationScl20162 = pctjStudentsSatScl20162 / 4;
console.log(totalSatisfationScl20162);/* para la data */

// La puntuación promedio de l@s profesores.

var ptPromTeacherScl20162 = 0;
for (var i = 0; i < data.SCL['2016-2'].ratings.length ; i++) {
  var ptTeacher = data.SCL['2016-2'].ratings[i].teacher;
  ptPromTeacherScl20162 += ptTeacher;
}
ptPromTeacherScl20162 = Number(ptPromTeacherScl20162.toFixed(2));
var scoreTeacherScl20162 = (ptPromTeacherScl20162 / 4).toFixed(2);
console.log(scoreTeacherScl20162);/* para la data */

// La puntuación promedio de l@s jedi masters.

var ptPromJedisScl20162 = 0;
for (var i = 0; i < data.SCL['2016-2'].ratings.length ; i++) {
  var ptJedis = data.SCL['2016-2'].ratings[i].jedi;
  ptPromJedisScl20162 += ptJedis;
}
var ptJedistotalScl20162 = ptPromJedisScl20162 / 4 ;
ptJedistotalScl20162 = ptJedistotalScl20162.toFixed(2);
var scoreJediScl20162 = ptJedistotalScl20162;
console.log(scoreJediScl20162);/* para la data */


// Santiago de Chile 2017-1

var studentsScl20171UP = 0;
var studentsScl20171Down = 0;
for (var i = 0; i < data.SCL['2017-1'].students.length ; i++) {
  var studentsTotal = data.SCL['2017-1'].students[i].active;
  if (studentsTotal === true) {
    studentsScl20171UP += 1;
  } else if (studentsTotal === false) {
    studentsScl20171Down += 1;
  }
}
studentsScl20171UP;
studentsScl20171Down;
var totalstudentsScl20171 = studentsScl20171UP + studentsScl20171Down;
var detractorsScl20171 = (studentsScl20171Down / totalstudentsScl20171) * 100;
detractorsScl20171 = detractorsScl20171.toFixed(2);
console.log(totalstudentsScl20171);/* para la data */
console.log(detractorsScl20171);/* para la data */

// obteniendo score mayor 70%
// La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
var SumScoreSprintHseScl20171 = 0;
var SumScoreSprintTechScl20171 = 0;
var stuContarScl20171 = 0;
for (var i = 0; i < data.SCL['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.SCL['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.SCL['2017-1'].students[i].sprints[j].score.hse;
    var stuScoreTech = data.SCL['2017-1'].students[i].sprints[j].score.tech;
    SumScoreSprintHseScl20171 += stuScoreHse;
    SumScoreSprintTechScl20171 += stuScoreTech;
  } if (SumScoreSprintHseScl20171 >= 2520 && SumScoreSprintTechScl20171 >= 3780) {
    stuContarScl20171 += 1;
  }
  SumScoreSprintHseScl20171 = 0;
  SumScoreSprintTechScl20171 = 0;
}
console.log(stuContarScl20171);
var prctstuContarScl20171 = ((stuContarScl20171 / totalstudentsScl20171) * 100).toFixed(2);
console.log(prctstuContarScl20171);/* para la data */
// El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

var totalNpsSprintScl20171 = 0;
for (var i = 0; i < data.SCL['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2017-1'].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data.SCL['2017-1'].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprintScl20171 += NpsSprint;
}
var npstotalScl20171 = (totalNpsSprintScl20171 / 3).toFixed(2);;
console.log(npstotalScl20171);/* para la data */
// para los porcentajes promoters - pasive y detractors
var totalPromotersScl20171 = 0;
for (var i = 0; i < data.SCL['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2017-1'].ratings[i].nps.promoters;
  totalPromotersScl20171 += raitingspNpsromoters;
}
var npsTotalPromotersScl20171 = (totalPromotersScl20171 / 3).toFixed(2);
console.log(npsTotalPromotersScl20171);/* para la data */

var totalPasiveScl20171 = 0;
for (var i = 0; i < data.SCL['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2017-1'].ratings[i].nps.passive;
  totalPasiveScl20171 += raitingspNpsromoters;
}
npsTotalPasiveScl20171 = (totalPasiveScl20171 / 3).toFixed(2);
console.log(npsTotalPasiveScl20171);/* para la data */

var totalDetractorsScl20171 = 0;
for (var i = 0; i < data.SCL['2017-1'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2017-1'].ratings[i].nps.detractors;
  totalDetractorsScl20171 += raitingspNpsromoters;
}
var npsTotalDetractorsScl20171 = (totalDetractorsScl20171 / 3).toFixed(2);
console.log(npsTotalDetractorsScl20171);/* para la data */

// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.

var sprintTech1Scl20171 = 0;
var sprintTech2Scl20171 = 0;
var sprintTech3Scl20171 = 0;
var sprintTech4Scl20171 = 0;
for (var i = 0; i < data.SCL['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.SCL['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreTech = data.SCL['2017-1'].students[i].sprints[j].score.tech;
    var sprintNumber = data.SCL['2017-1'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreTech >= 1260) {
      sprintTech1Scl20171 += 1;
    } else if (sprintNumber == 2 && stuScoreTech >= 1260) {
      sprintTech2Scl20171 += 1;
    } else if (sprintNumber == 3 && stuScoreTech >= 1260) {
      sprintTech3Scl20171 += 1;
    } else if (sprintNumber == 4 && stuScoreTech >= 1260) {
      sprintTech4Scl20171 += 1;
    }
  }
}
console.log(sprintTech1Scl20171);/* para la data */
console.log(sprintTech2Scl20171);/* para la data */
console.log(sprintTech3Scl20171);/* para la data */
console.log(sprintTech4Scl20171);/* para la data */

var sprintHse1Scl20171 = 0;
var sprintHse2Scl20171 = 0;
var sprintHse3Scl20171 = 0;
var sprintHse4Scl20171 = 0;
for (var i = 0; i < data.SCL['2017-1'].students.length ; i++) {
  for (var j = 0; j < data.SCL['2017-1'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.SCL['2017-1'].students[i].sprints[j].score.hse;
    var sprintNumber = data.SCL['2017-1'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreHse >= 840) {
      sprintHse1Scl20171 += 1;
    } else if (sprintNumber == 2 && stuScoreHse >= 840) {
      sprintHse2Scl20171 += 1;
    } else if (sprintNumber == 3 && stuScoreHse >= 840) {
      sprintHse3Scl20171 +=1;
    } else if (sprintNumber == 4 && stuScoreHse >= 840) {
      sprintHse4Scl20171 += 1;
    }
  }
}
console.log(sprintHse1Scl20171);/* para la data */
console.log(sprintHse2Scl20171);/* para la data */
console.log(sprintHse3Scl20171);/* para la data */
console.log(sprintHse4Scl20171);/* para la data */

// El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

var pctjStudentsSatScl20171 = 0;
for (var i = 0; i < data.SCL['2017-1'].ratings.length ; i++) {
  var studentsCumple = data.SCL['2017-1'].ratings[i].student.cumple;
  var studentsSupera = data.SCL['2017-1'].ratings[i].student.supera;
  var studentSat = studentsCumple + studentsSupera;
  pctjStudentsSatScl20171 += studentSat;
}
var totalSatisfationScl20171 = (pctjStudentsSatScl20171 / 3).toFixed(2);
console.log(totalSatisfationScl20171);/* para la data */

// La puntuación promedio de l@s profesores.

var ptPromTeacherScl20171 = 0;
for (var i = 0; i < data.SCL['2017-1'].ratings.length ; i++) {
  var ptTeacher = data.SCL['2017-1'].ratings[i].teacher;
  ptPromTeacherScl20171 += ptTeacher;
}
ptPromTeacherScl20171 = Number(ptPromTeacherScl20171.toFixed(2));
var scoreTeacherScl20171 = (ptPromTeacherScl20171 / 3).toFixed(2);
console.log(scoreTeacherScl20171);/* para la data */

// La puntuación promedio de l@s jedi masters.

var ptPromJedisScl20171 = 0;
for (var i = 0; i < data.SCL['2017-1'].ratings.length ; i++) {
  var ptJedis = data.SCL['2017-1'].ratings[i].jedi;
  ptPromJedisScl20171 += ptJedis;
}
var ptJedistotalScl20171 = ptPromJedisScl20171 / 3 ;
ptJedistotalScl20171 = ptJedistotalScl20171.toFixed(2);
var scoreJediScl20171 = ptJedistotalScl20171;
console.log(scoreJediScl20171);/* para la data */

// Santiago de Chile 2017-2

var studentsScl20172UP = 0;
var studentsScl20172Down = 0;
for (var i = 0; i < data.SCL['2017-2'].students.length ; i++) {
  var studentsTotal = data.SCL['2017-2'].students[i].active;
  if (studentsTotal === true) {
    studentsScl20172UP += 1;
  } else if (studentsTotal === false) {
    studentsScl20172Down += 1;
  }
}
studentsScl20172UP;
studentsScl20172Down;
var totalstudentsScl20172 = studentsScl20172UP + studentsScl20172Down;
var detractorsScl20172 = (studentsScl20172Down / totalstudentsScl20172) * 100;
detractorsScl20172 = detractorsScl20172.toFixed(2);
console.log(totalstudentsScl20172);/* para la data */
console.log(detractorsScl20172);/* para la data */

// obteniendo score mayor 70%
// La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
var SumScoreSprintHseScl20172 = 0;
var SumScoreSprintTechScl20172 = 0;
var stuContarScl20172 = 0;
console.log(data.SCL['2017-2'].students[0].sprints);

for (var i = 0; i < data.SCL['2017-2'].students.length ; i++) {
  for (var j = 0; j < data.SCL['2017-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.SCL['2017-2'].students[i].sprints[j].score.hse;
    var stuScoreTech = data.SCL['2017-2'].students[i].sprints[j].score.tech;
    SumScoreSprintHseScl20172 += stuScoreHse;
    SumScoreSprintTechScl20172 += stuScoreTech;
  } if (SumScoreSprintHseScl20172 >= 1680 && SumScoreSprintTechScl20172 >= 2520) {
    stuContarScl20172 += 1;
  }
  SumScoreSprintHseScl20172 = 0;
  SumScoreSprintTechScl20172 = 0;
}
console.log(stuContarScl20172);
var prctstuContarScl20172 = ((stuContarScl20172 / totalstudentsScl20172) * 100).toFixed(2);
console.log(prctstuContarScl20172);/* para la data */
// El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

var totalNpsSprintScl20172 = 0;
for (var i = 0; i < data.SCL['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2017-2'].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data.SCL['2017-2'].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprintScl20172 += NpsSprint;
}
var npstotalScl20172 = (totalNpsSprintScl20172 / 2).toFixed(2);;
console.log(npstotalScl20172);/* para la data */
// para los porcentajes promoters - pasive y detractors
var totalPromotersScl20172 = 0;
for (var i = 0; i < data.SCL['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2017-2'].ratings[i].nps.promoters;
  totalPromotersScl20172 += raitingspNpsromoters;
}
var npsTotalPromotersScl20172 = (totalPromotersScl20172 / 2).toFixed(2);
console.log(npsTotalPromotersScl20172);/* para la data */

var totalPasiveScl20172 = 0;
for (var i = 0; i < data.SCL['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2017-2'].ratings[i].nps.passive;
  totalPasiveScl20172 += raitingspNpsromoters;
}
npsTotalPasiveScl20172 = (totalPasiveScl20172 / 2).toFixed(2);
console.log(npsTotalPasiveScl20172);/* para la data */

var totalDetractorsScl20172 = 0;
for (var i = 0; i < data.SCL['2017-2'].ratings.length ; i++) {
  var raitingspNpsromoters = data.SCL['2017-2'].ratings[i].nps.detractors;
  totalDetractorsScl20172 += raitingspNpsromoters;
}
var npsTotalDetractorsScl20172 = (totalDetractorsScl20172 / 2).toFixed(2);
console.log(npsTotalDetractorsScl20172);/* para la data */

// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.

var sprintTech1Scl20172 = 0;
var sprintTech2Scl20172 = 0;
var sprintTech3Scl20172 = 0;
var sprintTech4Scl20172 = 0;
for (var i = 0; i < data.SCL['2017-2'].students.length ; i++) {
  for (var j = 0; j < data.SCL['2017-2'].students[i].sprints.length ; j++) {
    var stuScoreTech = data.SCL['2017-2'].students[i].sprints[j].score.tech;
    var sprintNumber = data.SCL['2017-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreTech >= 1260) {
      sprintTech1Scl20172 += 1;
    } else if (sprintNumber == 2 && stuScoreTech >= 1260) {
      sprintTech2Scl20172 += 1;
    } else if (sprintNumber == 3 && stuScoreTech >= 1260) {
      sprintTech3Scl20172 += 1;
    } else if (sprintNumber == 4 && stuScoreTech >= 1260) {
      sprintTech4Scl20172 += 1;
    }
  }
}
console.log(sprintTech1Scl20172);/* para la data */
console.log(sprintTech2Scl20172);/* para la data */
console.log(sprintTech3Scl20172);/* para la data */
console.log(sprintTech4Scl20172);/* para la data */

var sprintHse1Scl20172 = 0;
var sprintHse2Scl20172 = 0;
var sprintHse3Scl20172 = 0;
var sprintHse4Scl20172 = 0;
for (var i = 0; i < data.SCL['2017-2'].students.length ; i++) {
  for (var j = 0; j < data.SCL['2017-2'].students[i].sprints.length ; j++) {
    var stuScoreHse = data.SCL['2017-2'].students[i].sprints[j].score.hse;
    var sprintNumber = data.SCL['2017-2'].students[i].sprints[j].number;
    if (sprintNumber == 1 && stuScoreHse >= 840) {
      sprintHse1Scl20172 += 1;
    } else if (sprintNumber == 2 && stuScoreHse >= 840) {
      sprintHse2Scl20172 += 1;
    } else if (sprintNumber == 3 && stuScoreHse >= 840) {
      sprintHse3Scl20172 +=1;
    } else if (sprintNumber == 4 && stuScoreHse >= 840) {
      sprintHse4Scl20172 += 1;
    }
  }
}
console.log(sprintHse1Scl20172);/* para la data */
console.log(sprintHse2Scl20172);/* para la data */
console.log(sprintHse3Scl20172);/* para la data */
console.log(sprintHse4Scl20172);/* para la data */

// El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

var pctjStudentsSatScl20172 = 0;
for (var i = 0; i < data.SCL['2017-2'].ratings.length ; i++) {
  var studentsCumple = data.SCL['2017-2'].ratings[i].student.cumple;
  var studentsSupera = data.SCL['2017-2'].ratings[i].student.supera;
  var studentSat = studentsCumple + studentsSupera;
  pctjStudentsSatScl20172 += studentSat;
}
var totalSatisfationScl20172 = (pctjStudentsSatScl20172 / 2).toFixed(2);
console.log(totalSatisfationScl20172);/* para la data */

// La puntuación promedio de l@s profesores.

var ptPromTeacherScl20172 = 0;
for (var i = 0; i < data.SCL['2017-2'].ratings.length ; i++) {
  var ptTeacher = data.SCL['2017-2'].ratings[i].teacher;
  ptPromTeacherScl20172 += ptTeacher;
}
ptPromTeacherScl20172 = Number(ptPromTeacherScl20172.toFixed(2));
var scoreTeacherScl20172 = (ptPromTeacherScl20172 / 2).toFixed(2);
console.log(scoreTeacherScl20172);/* para la data */

// La puntuación promedio de l@s jedi masters.

var ptPromJedisScl20172 = 0;
for (var i = 0; i < data.SCL['2017-2'].ratings.length ; i++) {
  var ptJedis = data.SCL['2017-2'].ratings[i].jedi;
  ptPromJedisScl20172 += ptJedis;
}
var ptJedistotalScl20172 = ptPromJedisScl20172 / 2 ;
ptJedistotalScl20172 = ptJedistotalScl20172.toFixed(2);
var scoreJediScl20172 = ptJedistotalScl20172;
console.log(scoreJediScl20172);/* para la data */


// Eventos para manipular la data

var listCity = document.getElementById('listCity');
var title = document.getElementById('title');
var listSedes = document.getElementById('listSedes');
listSedes.addEventListener('click', function(event) {
  listCity.classList.add('listPosition');
  event.preventDefault();
  var lima20162 = document.getElementById('lima20162');
  lima20162.addEventListener('click', function(event) {
    title.innerHTML = 'LIMA 2016 II';
    listCity.classList.add('hide');
    var totalStudents = document.getElementById('totalStudents');
    totalStudents.textContent = totalstudentsLim20162;
    var detractors = document.getElementById('detractors');
    detractors.textContent = detractorsLim20162 + '%';
    detractors.classList.add('fontStrong');
    var stuContar = document.getElementById('stuContar');
    stuContar.textContent = stuContarLim20162;
    var prctstuContar = document.getElementById('prctstuContar');
    prctstuContar.textContent = prctstuContarLim20162 + '%';
    prctstuContar.classList.add('fontStrong');
    var totalStd = document.getElementById('totalStd');
    totalStd.textContent = totalstudentsLim20162;
    var npstotal = document.getElementById('npstotal');
    npstotal.textContent = npstotalLim20162 + '%';
    npstotal.classList.add('fontStrong');
    var npsTotalPromoters = document.getElementById('npsTotalPromoters');
    npsTotalPromoters.textContent = npsTotalPromotersLim20162 + ' % Promoters';
    var npsTotalPasive = document.getElementById('npsTotalPasive');
    npsTotalPasive.textContent = npsTotalPasiveLim20162 + ' % Pasive';
    var npsTotalDetractors = document.getElementById('npsTotalDetractors');
    npsTotalDetractors.textContent = npsTotalDetractorsLim20162 + ' % Detractors';
    var totalSatisfation = document.getElementById('totalSatisfation');
    totalSatisfation.textContent = totalSatisfationLim20162;
    var scoreTeacher = document.getElementById('scoreTeacher');
    scoreTeacher.textContent = scoreTeacherLim20162;
    var scoreJedi = document.getElementById('scoreJedi');
    scoreJedi.textContent = scoreJediLim20162;
    event.preventDefault();
  });
});
/* evento para la section students*/
window.addEventListener('load', function() {
  var anchorStudents = document.getElementById('anchor-students');
  var anchorOverview = document.getElementById('anchor-overview');
  var parentStudents = document.getElementById('parent-students');
  parentStudents.setAttribute('class', 'style-none');

  anchorOverview.addEventListener('click', function() {
    var overview = document.getElementById('overview');
    overview.removeAttribute('class', 'style-none');
  });
  console.log(data);
  anchorStudents.addEventListener('click', function(event) {
    parentStudents.removeAttribute('class', 'style-none');
    overview.setAttribute('class', 'style-none');
    // EVENTO PARA AREQUIPA 2016-2
    for (i = 0; i < data.AQP['2016-2'].students.length;i++) {
      var columRight = document.getElementById('colum-right');
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      // var imageContainer = document.createElement('div');
      // imageContainer.setAttribute('class', 'figure');
      /* var image = document.createTextNode('img');
      image.setAttribute('src', 'assets/img/peru.png');
      image.setAttribute('class', 'image');
      imageContainer.appendChild(image);*/
      // addStudent.appendChild('imageContainer');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.AQP['2016-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.AQP['2016-2'].students[i].sprints[0].score.tech + data.AQP['2016-2'].students[i].sprints[1].score.tech + data.AQP['2016-2'].students[i].sprints[2].score.tech + data.AQP['2016-2'].students[i].sprints[3].score.tech) / 4 / 72).toFixed(2) + '%';

      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.AQP['2016-2'].students[i].sprints[0].score.hse + data.AQP['2016-2'].students[i].sprints[1].score.hse + data.AQP['2016-2'].students[i].sprints[2].score.hse + data.AQP['2016-2'].students[i].sprints[3].score.hse) / 4 / 48).toFixed(2) + '%';;
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
    // EVENTO PARA AREQUIPA 2017-1
    for (i = 0; i < data.AQP['2017-1'].students.length; i++) {
      var columRight = document.getElementById('colum-right');

      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.AQP['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.AQP['2017-1'].students[i].sprints[0].score.tech + data.AQP['2017-1'].students[i].sprints[1].score.tech + data.AQP['2017-1'].students[i].sprints[2].score.tech) / 3 / 72).toFixed(2) + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.AQP['2017-1'].students[i].sprints[0].score.hse + data.AQP['2017-1'].students[i].sprints[1].score.hse + data.AQP['2017-1'].students[i].sprints[2].score.hse) / 3 / 48).toFixed(2) + '%';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
    // EVENTO PARA CIUDAD DE MEXICO 2017-1
    for (i = 0; i < data.CDMX['2017-1'].students.length; i++) {
      var columRight = document.getElementById('colum-right');
      /* var imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'figure');
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/img/laboratoria.jpg');
        img.setAttribute('class', 'image');
        imageContainer.appendChild(img);*/
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      // addStudent.appendChild('imageContainer');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.CDMX['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.CDMX['2017-1'].students[i].sprints[0].score.tech + data.CDMX['2017-1'].students[i].sprints[1].score.tech + data.CDMX['2017-1'].students[i].sprints[2].score.tech) / 3 / 72).toFixed(2) + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.CDMX['2017-1'].students[i].sprints[0].score.hse + data.CDMX['2017-1'].students[i].sprints[1].score.hse + data.CDMX['2017-1'].students[i].sprints[2].score.hse) / 3 / 48).toFixed(2) + '%';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
    // EVENTO PARA CIUDAD DE MEXICO 2017-2
    for (i = 0; i < data.CDMX['2017-2'].students.length; i++) {
      var columRight = document.getElementById('colum-right');
      /* var imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'figure');
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/img/laboratoria.jpg');
        img.setAttribute('class', 'image');
        imageContainer.appendChild(img);*/
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      // addStudent.appendChild('imageContainer');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.CDMX['2017-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.CDMX['2017-2'].students[i].sprints[0].score.tech + data.CDMX['2017-2'].students[i].sprints[1].score.tech) / 2 / 72).toFixed(2) + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.CDMX['2017-1'].students[i].sprints[0].score.hse + data.CDMX['2017-1'].students[i].sprints[1].score.hse) / 2 / 48).toFixed(2) + '%';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
    // EVENTO PARA LIMA 2016-2
    for (i = 0; i < data.LIM['2016-2'].students.length; i++) {
      var columRight = document.getElementById('colum-right');
      /* var imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'figure');
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/img/laboratoria.jpg');
        img.setAttribute('class', 'image');
        imageContainer.appendChild(img);*/
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      // addStudent.appendChild('imageContainer');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.LIM['2016-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.LIM['2016-2'].students[i].sprints[0].score.tech + data.LIM['2016-2'].students[i].sprints[1].score.tech) / 2 / 72).toFixed(2) + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.LIM['2016-2'].students[i].sprints[0].score.hse + data.LIM['2016-2'].students[i].sprints[1].score.hse) / 2 / 48).toFixed(2) + '%';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
    // EVENTO PARA LIMA 2017-1
    for (i = 0; i < data.LIM['2017-1'].students.length; i++) {
      var columRight = document.getElementById('colum-right');
      /* var imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'figure');
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/img/laboratoria.jpg');
        img.setAttribute('class', 'image');
        imageContainer.appendChild(img);*/
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      // addStudent.appendChild('imageContainer');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.LIM['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.LIM['2017-1'].students[i].sprints[0].score.tech + data.LIM['2017-1'].students[i].sprints[1].score.tech + data.LIM['2017-1'].students[i].sprints[2].score.tech + data.LIM['2017-1'].students[i].sprints[3].score.hse) / 4 / 72).toFixed(2) + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.LIM['2017-1'].students[i].sprints[0].score.hse + data.LIM['2017-1'].students[i].sprints[1].score.hse + data.LIM['2017-1'].students[i].sprints[2].score.hse + data.LIM['2017-1'].students[i].sprints[3].score.hse) / 4 / 48).toFixed(2) + '%';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
    // EVENTO PARA LIMA 2017-2
    for (i = 0; i < data.LIM['2017-2'].students.length; i++) {
      var columRight = document.getElementById('colum-right');
      /* var imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'figure');
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/img/laboratoria.jpg');
        img.setAttribute('class', 'image');
        imageContainer.appendChild(img);*/
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      // addStudent.appendChild('imageContainer');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.LIM['2017-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.LIM['2017-2'].students[i].sprints[0].score.tech + data.LIM['2017-2'].students[i].sprints[1].score.tech) / 2 / 72).toFixed(2) + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.LIM['2017-2'].students[i].sprints[0].score.hse + data.LIM['2017-2'].students[i].sprints[1].score.hse) / 2 / 48).toFixed(2) + '%';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
    // EVENTO PARA SANTIAGO DE CHILE 2016-2
    for (i = 0; i < data.SCL['2016-2'].students.length; i++) {
      var columRight = document.getElementById('colum-right');
      /* var imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'figure');
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/img/laboratoria.jpg');
        img.setAttribute('class', 'image');
        imageContainer.appendChild(img);*/
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      // addStudent.appendChild('imageContainer');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.SCL['2016-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.SCL['2016-2'].students[i].sprints[0].score.tech + data.SCL['2016-2'].students[i].sprints[1].score.tech + data.SCL['2016-2'].students[i].sprints[2].score.tech + data.SCL['2016-2'].students[i].sprints[3].score.tech) / 4 / 72).toFixed(2) + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.SCL['2016-2'].students[i].sprints[0].score.hse + data.SCL['2016-2'].students[i].sprints[1].score.hse + data.SCL['2016-2'].students[i].sprints[2].score.hse + data.SCL['2016-2'].students[i].sprints[3].score.hse) / 4 / 48).toFixed(2) + '%';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
    // EVENTO PARA SANTIAGO DE CHILE 2017-1
    for (i = 0; i < data.SCL['2017-1'].students.length; i++) {
      var columRight = document.getElementById('colum-right');
      /* var imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'figure');
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/img/laboratoria.jpg');
        img.setAttribute('class', 'image');
        imageContainer.appendChild(img);*/
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      // addStudent.appendChild('imageContainer');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.SCL['2017-1'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.SCL['2017-1'].students[i].sprints[0].score.tech + data.SCL['2017-1'].students[i].sprints[1].score.tech + data.SCL['2017-1'].students[i].sprints[2].score.tech) / 3 / 72).toFixed(2) + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.SCL['2017-1'].students[i].sprints[0].score.hse + data.SCL['2017-1'].students[i].sprints[1].score.hse + data.SCL['2017-1'].students[i].sprints[2].score.hse) / 3 / 48).toFixed(2) + '%';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
    // EVENTO PARA SANTIAGO DE CHILE 2017-2
    for (i = 0; i < data.SCL['2017-2'].students.length; i++) {
      var columRight = document.getElementById('colum-right');
      /* var imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'figure');
        var img = document.createElement('img');
        img.setAttribute('src', 'assets/img/laboratoria.jpg');
        img.setAttribute('class', 'image');
        imageContainer.appendChild(img);*/
      var addStudent = document.createElement('div');
      addStudent.setAttribute('class', 'students-skills');
      // addStudent.appendChild('imageContainer');
      var nameStudent = document.createElement('h1');
      nameStudent.innerHTML = data.SCL['2017-2'].students[i].name;
      var specialization = document.createElement('p');
      specialization.textContent = 'FRONTEND DEVELOPER';

      var ContainerSkills = document.createElement('div');
      ContainerSkills.setAttribute('class', 'container-skills');
      var javascriptSkills = document.createElement('p');
      javascriptSkills.textContent = 'JAVASCRIPT';
      var apisSkills = document.createElement('p');
      apisSkills.textContent = 'APIs';
      var jquerySkills = document.createElement('p');
      jquerySkills.textContent = 'JQUERY';
      ContainerSkills.appendChild(javascriptSkills);
      ContainerSkills.appendChild(apisSkills);
      ContainerSkills.appendChild(jquerySkills);

      var addNameStudent = document.createElement('div');
      addNameStudent.setAttribute('class', 'colum-1');
      addNameStudent.appendChild(nameStudent);
      addNameStudent.appendChild(specialization);
      addNameStudent.appendChild(ContainerSkills);
      console.log(nameStudent);
      addStudent.appendChild(addNameStudent);
      columRight.appendChild(addStudent);

      var addScore = document.createElement('div');
      addScore.setAttribute('class', 'colum-2');
      var boxScore1 = document.createElement('div');
      boxScore1.setAttribute('class', 'box');
      var addTech = document.createElement('h1');
      addTech.textContent = ((data.SCL['2017-2'].students[i].sprints[0].score.tech + data.SCL['2017-2'].students[i].sprints[1].score.tech) / 2 / 72).toFixed(2) + '%';
      var textScore1 = document.createElement('p');
      textScore1.textContent = 'TECH SKILLS';
      boxScore1.appendChild(addTech);
      boxScore1.appendChild(textScore1);
      addScore.appendChild(boxScore1);

      var boxScore2 = document.createElement('div');
      boxScore2.setAttribute('class', 'box');
      var addLife = document.createElement('h1');
      addLife.textContent = ((data.SCL['2017-2'].students[i].sprints[0].score.hse + data.SCL['2017-2'].students[i].sprints[1].score.hse) / 2 / 48).toFixed(2) + '%';
      var textScore2 = document.createElement('p');
      textScore2.textContent = 'LIFE SKILLS';
      boxScore2.appendChild(addLife);
      boxScore2.appendChild(textScore2);
      addScore.appendChild(boxScore2);

      var box3 = document.createElement('div');
      box3.setAttribute('class', 'box');
      var addInterm = document.createElement('h1');
      addInterm.textContent = 'INTERM';
      var text3 = document.createElement('p');
      text3.textContent = 'ENGLISH SKILLS';
      box3.appendChild(addInterm);
      box3.appendChild(text3);
      addScore.appendChild(box3);
      addStudent.appendChild(addScore);

      event.preventDefault();
    }
  });
});
