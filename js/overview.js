/* ----------------Enrollment:---------------*/
// obteniendo el total de estudiantes : 
function getTotalStudents(students) {
  return students.length;
};

// obteniendo el total de deserciones : 
function getTotalDropoutStudents(students) {
  var totalDropouts = 0 ; 
  var studentsLength = getTotalStudents(students);
  for (var i = 0; i < studentsLength; i++) {
    if (!students[i].active) {
      totalDropouts++;
    };
  };
  return totalDropouts;
};

// obteniendo el total de estudiantes que cursan el bootcamp:
function getStudentsCurrentEnrolled(totalStudents, totalDropouts) {
  return totalStudents - totalDropouts;
};

// obteniendo el porcentaje de deserción :
function getStudentsDropout(totalStudents, totalDropouts) {
  return ((totalDropouts / totalStudents) * 100).toFixed(2);
};

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
};
/* var temp = newObjectEnrollment(data);*/
console.log(newObjectEnrollment(data));
/* ----------------Fin enrollment---------------*/

/* ----------------Achievement---------------*/
var TECH = 1800;
var HSE = 1200;

// obteniendo el 70% de los puntos tech y de los puntos HSE :
function minTech() {
  return TECH * 0.7;
};

function minHse() {
  return HSE * 0.7;
};

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
    };
    // se recorren los sprints ,para sumar los puntos tech y hse : 
    for (var j = 0 ; j < totalSprints; j++) {
      var sprint = sprints[j];
      totalTech += sprint.score.tech;
      totalHse += sprint.score.hse;
    };
    hasMetTechTarget = (totalTech / totalSprints) > minTech;
    hasMetHseTarget = (totalHse / totalSprints) > minHse;

    if (hasMetTechTarget && hasMetHseTarget) {
      targetedStudents++;
    };
  };
  return targetedStudents;
};

// obteniendo el porcentaje de estudiantes que cumplen tech y hse
function getAchievementPercent(students, targetedStudents) {
  return (targetedStudents / students * 100).toFixed(2);
};

// obteniendo  el total de estudiantes activos
function getActiveStudents(students) {
  var totalActiveStudents = 0;
  var totalStudents = getTotalStudents(students);

  for (var i = 0; i < totalStudents; i++) {
    var student = students[i];

    if (student.active) {
      totalActiveStudents++;
    };
  };
  return totalActiveStudents;
};

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
};

console.log(achievement(data));
/* ---------------- Fin achievement---------------*/

/* ----------------Net Promoter Score---------------*/

// obteniendo un objeto con las propiedades: promoters , passive y detractors:

function getProPasDet(ratings) {
  var obj = {};
  var promoters = 0, passive = 0, detractors = 0;
  var totalSprints = ratings.length;

  for (var i = 0; i < totalSprints; i++) {
    var sprint = ratings[i];

    promoters += sprint.nps.promoters;
    passive += sprint.nps.passive;
    detractors += sprint.nps.detractors;
  };

  obj.promotersPercent = (promoters / totalSprints).toFixed(2);
  obj.passivePercent = (passive / totalSprints).toFixed(2);
  obj.detractorsPercent = (detractors / totalSprints).toFixed(2);

  return obj;
};

function getNps(data, campus = campusDefault, cohort = cohortDefault) {
  var objNetPromoterScore = null;
  var ratings = getRatings(data, campus, cohort);

  objNetPromoterScore = getProPasDet(ratings);

  return objNetPromoterScore;
};

// creando objeto para la funcionalidad Net Promoter Score:
// propiedades : promotersPercent, passivePercent, detractorsPercent y nps:
function calcNetPromoterScore(promotersPercent, detractorsPercent) {
  return promotersPercent - detractorsPercent;
};

function netPromoterScore(data, campus = campusDefault, cohort = cohortDefault) {
  var objNetPromoterScore = getNps(data, campus, cohort);

  objNetPromoterScore.nps = calcNetPromoterScore(objNetPromoterScore.promotersPercent, objNetPromoterScore.detractorsPercent);
  
  return objNetPromoterScore;
};

console.log(netPromoterScore(data));
/* ----------------Fin Net Promoter Score---------------*

/* ----------------Tech Skills---------------*/

// estudiantes que pasaron la meta en habilidades tecnicas:
function getTechTargetedStudents(students) {
  function minTech() { /* ver */
    return TECH * 0.7;
  };/* ver*/
  var targetedStudents = 0;
  var totalStudents = students.length;
  var metTech = minTech();
  // iterando por tods las estudiantes:
  for (var i = 0; i < totalStudents; i++) {
    var student = students[i];
    // si la estudiante se encuentra activa:
    if (student.active) {
      var techTotal = 0;
      var sprints = student.sprints;
      var totalSprints = sprints.length;
      var averageTech = 0;
      // se suman todas las notas de los sprints
      for (var j = 0; j < totalSprints; j++) {
        var sprint = sprints[j];

        techTotal += sprint.score.tech;
      }
      // luego se promedia con el total de sprints:
      averageTech = techTotal / totalSprints;
      // si supera el minimo puntaje el contador aumenta en 1:
      if (averageTech > metTech) {
        targetedStudents++;
      };
    };
  };
  return targetedStudents;
};

// obteniendo el porcentje de alumnas que pasron la meta:
function getTechTargetedPercent(targetedStudents, totalStudents) {
  return (targetedStudents / totalStudents * 100).toFixed(2);
}

// creando objeto para la funcionalidad Tech Skills:
// propiedades :targetedStudents  , totalStudents y targetedStudentsPercent:
function techSkills(data, campus = campusDefault, cohort = cohortDefault) {
  var objTechSkills = {};
  var students = getStudents(data, campus, cohort);

  objTechSkills.targetedStudents = getTechTargetedStudents(students);
  objTechSkills.totalStudents = getActiveStudents(students);
  objTechSkills.targetedStudentsPercent = getTechTargetedPercent(objTechSkills.targetedStudents, objTechSkills.totalStudents);

  return objTechSkills;
};
console.log(techSkills(data));
/* ----------------Fin Tech Skills---------------*/

/* ----------------Life Skills---------------*/

// obteniendo el proedio del porcentaje en hse:
function getHseAverage(students) {
  var targetedStudents = 0, overallHse = 0;
  var totalStudents = students.length;

  for (var i = 0; i < totalStudents; i++) {
    var student = students[i];

    if (student.active) {
      var totalHse = 0;
      var sprints = student.sprints;
      var totalSprints = sprints.length;

      for (var j = 0; j < totalSprints; j++) {
        var sprint = sprints[j];

        totalHse += sprint.score.hse;
      };

      overallHse += Number((totalHse / totalSprints).toFixed(2));
      targetedStudents++;
    };
  };
  return (overallHse / targetedStudents).toFixed(2);
};
// obteniendo el nuero de estudiante que pasó el mínimo
function getHseTargetedStudents(students) {
  var targetedStudents = 0;

  for (var i = 0, l = students.length; i < l; i++) {
    var student = students[i];

    if (student.active) {
      var hseTotal = 0;
      var sprints = student.sprints;

      for (var j = 0, sl = sprints.length; j < sl; j++) {
        var sprint = sprints[j];

        hseTotal += sprint.score.hse;
      };

      var averageHse = hseTotal / sprints.length;

      if (averageHse > 840) {
        targetedStudents++;
      };
    };
  };
  return targetedStudents;
};


// creando objeto para la funcionalidad Tech Skills:
// propiedades :avgHse y targetedStudents:
function lifeSkills(data, campus = campusDefault, cohort = cohortDefault) {
  var objLifeSkills = {};
  var students = getStudents(data, campus, cohort);

  objLifeSkills.avgHse = getHseAverage(students);
  objLifeSkills.targetedStudents = getHseTargetedStudents(students);

  return objLifeSkills;
};

console.log(lifeSkills(data));
/* ----------------Fin Life Skills---------------*/

/* ----------------Student Satisfaction---------------*/

// funcion que retorna el nuero de stisfaccion :
function getStudentSatisfaction(ratings) {
  var studentSatisfaction = 0;
  // ultimo sprint
  var lastSprint = ratings.length - 1;

  var studentRating = ratings[lastSprint].student;
  studentSatisfaction = studentRating.cumple + studentRating.supera;

  return studentSatisfaction.toFixed(2);
};

// funcion que retorna la satisfaccion de las estudiantes de acuerdo a la sede
function studentSatisfaction(data, campus = campusDefault, cohort = cohortDefault) {
  var ratings = getRatings(data, campus, cohort);
  
  return getStudentSatisfaction(ratings);
};

console.log(studentSatisfaction(data));
/* ----------------Fin Student Satisfaction---------------*/

/* ----------------Teacher Rating---------------*/

// funcion que retorna el puntaje del profesor en el ultimo sprint
function getLastTeacherRating(ratings) {
  var teacherRating = 0;
  // ultimo sprint
  var lastSprint = ratings.length - 1;

  teacherRating = ratings[lastSprint].teacher;

  return teacherRating.toFixed(2);
};

// funcion que retorna el puntaje del profesor de acuerdo a la sede
function teacherRating(data, campus = campusDefault, cohort = cohortDefault) {
  var ratings = getRatings(data, campus, cohort);

  return getLastTeacherRating(ratings);
};
console.log(teacherRating(data));

/* ----------------Fin Teacher Rating---------------*/

/* ----------------Jedi Master Rating---------------*/

// funcion que retorna el puntaje del Jedi master en el ultimo sprint
function getLastJediMasterRating(ratings) {
  var jediMasterRating = 0;
  // ultimo sprint
  var lastSprint = ratings.length - 1;

  jediMasterRating = ratings[lastSprint].jedi;

  return jediMasterRating.toFixed(2);
};

// funcion que retorna el puntaje del jedi master de acuerdo a la sede
function jediMasterRating(data, campus = campusDefault, cohort = cohortDefault) {
  var ratings = getRatings(data, campus, cohort);
  
  return getLastJediMasterRating(ratings);
};
console.log(jediMasterRating(data));
/* ----------------Fin Jedi Master Rating---------------*/
