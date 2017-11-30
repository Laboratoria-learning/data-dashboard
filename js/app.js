// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// función donde obtengo alumnas activas, inactivas, alumnas total por sedes (puntos 1 y 2)

function studentSedes(sede, generation) {
  var active = 0;
  var inactive = 0;
  var students = data[sede][generation]['students'];
  var numStudets = students.length;
  var array = [];
  for (var i = 0; i < numStudets; i++) {
    students[i].active ? active++ : inactive++;
  }
  array.push(active);
  array.push(inactive);
  var dropout = Math.round(inactive * 100 / numStudets);
  //var alumnasActives = (numStudets - inactive);
  document.getElementById('total-enrollment').textContent = numStudets;
  document.getElementById('total-enrollment red').textContent = dropout;
  return array;
}
//studentSedes('AQP', '2016-2');

var targetStudentsBySprint = [];
var targetStudents = 0;
for (var i = 0; i < ratings.length; i++) {
  targetStudentsBySprint[i] = 0;
}  



