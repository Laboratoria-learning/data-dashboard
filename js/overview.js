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

// obteniendo el total de estudiantes activas:
function getStudentsCurrentEnrolled(totalStudents, totalDropouts) {
  return totalStudents - totalDropouts;
}

// obteniendo el porcentaje de deserción :
function getStudentsDropout(totalStudents, totalDropouts) {
  return ((totalDropouts / totalStudents) * 100).toFixed(2);
}

// creando un objeto para la funcionalidad enrollment:
function newObjectEnrollment(data, campus = campusDefault, cohort = cohortDefault) {
  var objEnrollment = {};
  var students = getStudents(data, campus, cohort);

  // calculando el numero de estudiantes y el total de deserciones:
  var totalStudents = getTotalStudents(students);
  var totalDropouts = getTotalDropoutStudents(students);

  // agregando propiedades al objeto nuevo :
  // estudiantes que estan activas:
  objEnrollment.studentsCurrentEnrolled = getStudentsCurrentEnrolled(totalStudents, totalDropouts);
  // porcentaje de estudiantes que desertaron:
  objEnrollment.studentsDropout = getStudentsDropout(totalStudents, totalDropouts);
  return objEnrollment;
}
/* var temp = newObjectEnrollment(data);*/
console.log(newObjectEnrollment(data));
/* ----------------Fin enrollment---------------*/



