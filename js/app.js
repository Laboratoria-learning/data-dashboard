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
console.log(totalActive('AQP', '2016-2', 'active') + totalActive('AQP', '2016-2', 'notActive'));// PROMOCION 2016-2;
console.log(totalActive('AQP', '2017-1', 'active') + totalActive('AQP', '2017-1', 'notActive'));// PROMOCION 2017-1
console.log(totalActive('LIM', '2016-2', 'notActive') + totalActive('LIM', '2016-2', 'active'));
console.log(totalActive('LIM', '2017-1', 'notActive') + totalActive('LIM', '2017-1', 'active'));
console.log(totalActive('LIM', '2017-2', 'notActive') + totalActive('LIM', '2017-2', 'active'));
// En Mexico
console.log(totalActive('CDMX', '2017-1', 'notActive') + totalActive('CDMX', '2017-1', 'active'));
console.log(totalActive('CDMX', '2017-2', 'notActive') + totalActive('CDMX', '2017-2', 'active'));
// En Chile
console.log(totalActive('SCL', '2016-2', 'notActive') + totalActive('SCL', '2016-2', 'active'));
console.log(totalActive('SCL', '2017-1', 'notActive') + totalActive('SCL', '2017-1', 'active'));
console.log(totalActive('SCL', '2017-2', 'notActive') + totalActive('SCL', '2017-2', 'active'));
// totalActive('LIM', '', activeOrNotActive) +  totalActive('LIM', generacion, activeOrNotActive);
// debugger
function coursePercentage(place, generacion, course) {
  var points = [];
  var generaciones = data[place];
  var promocion = generaciones[generacion];
  var students = promocion.students;
  for (var i = 0 ; i < students.length; i++) {
    var sprints = students[i].sprints;
    for (var j = 0 ; j < sprints.length ; j++) {
      points.push(students[i].sprints[j].score[course]);
    }
  }
  var percentageOfStudent = [];
  for (var i = 0; i < points.length;i++) {
    if (course === 'tech') {
      percentageOfStudent.push((points[i] / 1800) * 100);
    } else if (course === 'hse') {
      percentageOfStudent.push((points[i] / 1200) * 100);
    }
  }
  var sum = 0;
  for (var i = 0 ; i < percentageOfStudent.length;i++) {
    sum += percentageOfStudent[i];
  }
  var result = sum / (percentageOfStudent.length);
  //  return  students
  return result;
}

// coursePercentage("SCL", '2016-2','hse')
function classAverage(course) {
  var students = coursePercentage('SCL', '2016-2', course);
  var percentageOfStudent = [];
  for (var i = 0; i < students.length;i++) {
    if (course === 'tech') {
      percentageOfStudent.push((students[i] / 1800) * 100);
    } else if (course === 'hse') {
      percentageOfStudent.push((students[i] / 1200) * 100);
    }
  }
  return percentageOfStudent;
}
// classAverage('tech');
coursePercentage('SCL', '2016-2', 'hse');
