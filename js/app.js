// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
// var dropout = Math.round(inactive * 100 / students.length);


function studentSedes(sede, generation) {
  var active = 0;
  var inactive = 0;
  var students = data[sede][generation]['students'];
  var array = [];
  for (var i = 0; i < students.length; i++) {
    students[i].active ? active++ : inactive++;
  }
  array.push(active);
  array.push(inactive);
  return array;
}
//studentSedes('AQP', '2016-2');