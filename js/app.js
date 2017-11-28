window.addEventListener('load', function(event) {
  console.log(event);
  console.log(event.target);
});
//  data.AQP["2016-2"].students.length
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

var students = data.AQP['2016-2'].students;

// calculando el total de estudiantes ACTIVAS AQP
var activeAqp = 0;
for (i = 0; i < students.length; i++) {
  if (students[i].active === false) {
    var activeAqp = (activeAqp + 1);
    console.log(activeAqp);
  }
};

// calculando el total de estudiantes INACTIVAS AQP
var inactiveAqp = students.length - activeAqp;
console.log(inactiveAqp);
