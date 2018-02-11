/* ----------------Enrollment:---------------*/
// obteniendo el total de estudiantes : 
function getTotalStudents(students) {
  return students.length;
}

// obteniendo el total de deserciones : 
function getTotalDropoutStudents(students) {
  var totalDropouts = 0 ; 
  var studentsLength = getTotalStudents(students);
  for (var i = 0; i < studentsLength; i++) {
    if (!students[i].active) {
      totalDropouts++;
    }
  }
  return totalDropouts;
}

// obteniendo el total de estudiantes que cursan el bootcamp:
function getStudentsCurrentEnrolled(totalStudents, totalDropouts) {
  return totalStudents - totalDropouts;
}

// obteniendo el porcentaje de deserción :
function getStudentsDropout(totalStudents, totalDropouts) {
  return ((totalDropouts / totalStudents) * 100).toFixed(2);
}

// creando un objeto para la funcionalidad enrollment:
// propiedades: studentsCurrentEnrolled y studentsDropout
function newObjectEnrollment(data, campus = campusDefault, cohort = cohortDefault) {
  var objEnrollment = {};
  var students = getStudents(data, campus, cohort);

  // calculando el numero de estudiantes y el total de deserciones:
  var totalStudents = getTotalStudents(students);
  var totalDropouts = getTotalDropoutStudents(students);

  // agregando propiedades al objeto nuevo :
  // estudiantes que estan cursando el bootcamp:
  objEnrollment.studentsCurrentEnrolled = getStudentsCurrentEnrolled(totalStudents, totalDropouts);
  // porcentaje de estudiantes que desertaron:
  objEnrollment.studentsDropout = getStudentsDropout(totalStudents, totalDropouts);
  return objEnrollment;
}
/* var temp = newObjectEnrollment(data);*/
console.log(newObjectEnrollment(data));
/* ----------------Fin enrollment---------------*/

/* ----------------Achievement---------------*/
var TECH = 1800;
var HSE = 1200;

// obteniendo el 70% de los puntos tech y de los puntos HSE :
function minTech() {
  return TECH * 0.7;
}

function minHse() {
  return HSE * 0.7;
}

function getTargetedStudents(students) {
  // estudiantes que superan la meta:
  var targetedStudents = 0;
  var totalStudents = getTotalStudents(students);
  minTech = minTech();
  minHse = minHse();
  for (var i = 0 ; i < totalStudents;i++) {
    var student = students[i];

    // si la estudiante se encuentra activa:
    if (student.active) {
      var totalTech = 0, totalHse = 0 ;
      var sprints = student.sprints;
      var totalSprints = sprints.length;
      var hasMetTechTarget = false;
      var hasMetHseTarget = false;
    }
    // se recorren los sprints ,para sumar los puntos tech y hse : 
    for (var j = 0 ; j < totalSprints; j++) {
      var sprint = sprints[j];
      totalTech += sprint.score.tech;
      totalHse += sprint.score.hse;
    }
    hasMetTechTarget = (totalTech / totalSprints) > minTech;
    hasMetHseTarget = (totalHse / totalSprints) > minHse;

    if (hasMetTechTarget && hasMetHseTarget) {
      targetedStudents++;
    }
  }
  return targetedStudents;
}

// obteniendo el porcentaje de estudiantes que cumplen tech y hse
function getAchievementPercent(students, targetedStudents) {
  return (targetedStudents / students * 100).toFixed(2);
}

// obteniendo  el total de estudiantes activos
function getActiveStudents(students) {
  var totalActiveStudents = 0;
  var totalStudents = getTotalStudents(students);

  for (var i = 0; i < totalStudents; i++) {
    var student = students[i];

    if (student.active) {
      totalActiveStudents++;
    }
  }
  return totalActiveStudents;
}

// creando objeto para la funcionalidad achievement:
// propiedades : targetedStudents, totalStudents y targetedStudentsPercent:
function achievement(data, campus = campusDefault, cohort = cohortDefault) {
  var objAchievement = {};
  
  var students = getStudents(data, campus, cohort);
  
  var targetedStudents = getTargetedStudents(students);
  var totalStudents = getActiveStudents(students);
  var targetedStudentsPercent = getAchievementPercent(totalStudents, targetedStudents);

  objAchievement.targetedStudents = targetedStudents;
  objAchievement.totalStudents = getActiveStudents(students);
  objAchievement.targetedStudentsPercent = targetedStudentsPercent;
  return objAchievement;
} 

console.log(achievement(data));

