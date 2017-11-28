/* Puedes hacer uso de la base de datos a través de la variable `data`*/
console.log(data);

function totalActive(sede, generacion, activeOrNotActive) {
  var generaciones = data[sede];
  var promocion = generaciones[generacion];
  var students = promocion.students;
  var isActive = 0;
  var isNotActive = 0;
  // var result=0
  for (var i = 0 ; i < students.length; i++) {
    if (students[i].active === true && activeOrNotActive === 'active') {
      //  isActive++;
      isActive++;
    } else if (students[i].active === false && activeOrNotActive === 'notActive') {
      // isNotActive++;
      isNotActive++;
    }
  }
  // return  result
  if (activeOrNotActive === 'active') {
    return isActive;
  } else if (activeOrNotActive === 'notActive') {
    return isNotActive;
  }
}

totalActive('LIM', '2017-1', 'notActive') + totalActive('LIM', '2017-1', 'active');
