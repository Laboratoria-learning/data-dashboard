// solo para estudiantes AQP 2016-2

var students = data.AQP['2016-2'].students;

// calculando el total de estudiantes ACTIVAS AQP
var activeAqp = 0;
for (i = 0; i < students.length; i++) {
  if (students[i].active === true) {
    var activeAqp = (activeAqp + 1);
  }
};
// calculando el total de estudiantes INACTIVAS AQP
var inactiveAqp = students.length - activeAqp;

// calculado la suma de scores(HSE Y TECH) por sprints de cada estudiante

//  suma score hse

for (i = 0; i < students.length; i++) {
  var studentsSprints = students[i].sprints;
  console.log(studentsSprints);
};
