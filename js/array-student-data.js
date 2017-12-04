
var students = []; /* array de estudiantes */
var baseTech = 1800; /* parámetro de base skill tech */
var baseHse = 1200; /* parámetro de base skill hse */
var acumTech = 0; /* acumulador de skill tech por alumna total sprints */
var acumHse = 0; /* acumulador de skill hse por alumna total sprints */
var indSt = 0; /* indice correlativo de nro de estudiante */
var ind = 0; /* índice para aumentar la posición Y de array student en la asignación de valores segun if */
var bases = Object.values(data); /* bases de laboratoria */

for (var indB = 0 ; indB < bases.length ; indB ++) {
  var basesGenerations = Object.values(bases[indB]); /* generaciones por bases */
  for (var indG = 0 ; indG < basesGenerations.length ; indG++) { /* nro de generaciones por base */
    var arrayTemp1 = Object.values(basesGenerations[indG]); /* alumnas y ranting por generación */
    var arrayTemp2 = Object.values(arrayTemp1[0]); /* alumnas por generación */
    for (var i = 0 ; i < arrayTemp2.length ; i ++) { /* alumnas x generación */
      var aStudentBaseGeneration = Object.values(arrayTemp2[i]); /* una de alumna */
      students[[indSt, 0]] = aStudentBaseGeneration[0]; /* name */
      students[[indSt, 1]] = aStudentBaseGeneration[1]; /* photo */
      students[[indSt, 2]] = aStudentBaseGeneration[2]; /* active */
      students[[indSt, 3]] = aStudentBaseGeneration[3]; /* score */
      var countSprintsAlumna = aStudentBaseGeneration[3];
      ind = 0;
      if (countSprintsAlumna.length >= 1) {
        students[[indSt, 4]] = countSprintsAlumna.length; /* # sprints x alumna */
        for (var indSprint = 0 ; indSprint < countSprintsAlumna.length ; indSprint ++) { /* #  sprints x alumna */
          var arrayTemp3 = Object.values(countSprintsAlumna[indSprint]); /* contiene objeto  */
          var arrayTemp4 = Object.values(arrayTemp3[1]) ; /* posicion 1 - array con tech hse por sprint */
          for (var indSkill = 0 ; indSkill < arrayTemp4.length ; indSkill++) { /* recorre por skill: tech y hse */
            ind = ind + 1;
            if (indSkill === 0) {
              students[[indSt, 4 + ind]] = ((arrayTemp4[indSkill] / 1800) * 100).toFixed(1);
              acumTech = acumTech + parseInt(students[[indSt, 4 + ind]]) ;
            } else {
              students[[indSt, 4 + ind]] = ((arrayTemp4[indSkill] / 1200) * 100).toFixed(1);
              acumHse = acumHse + parseInt(students[[indSt, 4 + ind]]); /* hse */
            }
          }
        }
        students[[indSt, 13]] = (acumTech / countSprintsAlumna.length).toFixed(1) ;
        students[[indSt, 14]] = (acumHse / countSprintsAlumna.length).toFixed(1) ;
        acumTech = 0 ;
        acumHse = 0;
      } else {
        students[[indSt, 4]] = 0; /* cero sprints */
        students[[indSt, 5]] = 0; /* sin nota */
        students[[indSt, 6]] = 0; /* sin nota */
        students[[indSt, 7]] = 0; /* sin nota */
        students[[indSt, 8]] = 0; /* sin nota */
        students[[indSt, 9]] = 0; /* sin nota */
        students[[indSt, 10]] = 0; /* sin nota */
      }
      indSt = indSt + 1 ;
    }
  }
}
