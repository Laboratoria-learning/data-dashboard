/* Puedes hacer uso de la base de datos a través de la variable `data`*/

console.log(data);

window.addEventListener('load', function() {
  var containerOverview = document.querySelector('.container-overview');
  var containerTeachers = document.querySelector('.container-teachers');
  var hideForTeachers = document.querySelector('.hide-for-teachers');
  var navigator = document.querySelector('.navigator');
  var hrover=document.getElementsByTagName('hr')[0];
  var hrteacher=document.getElementsByTagName('hr')[1];
  // agregando evento click a la barra de navegacion principal
  navigator.addEventListener('click', showCharts);
  function showCharts(event) {
    console.log(event.target.getAttribute('value'));
    // console.log(event.target.firstChild);
    if (event.target.getAttribute('value') === 'teachers') {
      hideForTeachers.classList.remove('show');
      hideForTeachers.classList.add('hide');
      hrover.classList.remove('sub');
      hrover.classList.add('none');
      hrteacher.classList.remove('none');
      hrteacher.classList.add('sub');
    } else if (event.target.getAttribute('value') === 'overview')
    // containerOverview.classList.add('show')
      location.reload();
  }
  // evento select para filtros :
  var enrollmentStudents = document.querySelector('.enrollment-students'); // celda que recibira los numeros
  var codeFilter = document.querySelector('.code-filter');
  var sprintFilter = document.querySelector('sprint-filter');
  var placeFilter = document.querySelector('placeFilter');
  //  codeFilter.addEventListener('select', )

  // evento para los filtros:

  var PLACE = '';
  var CODE = '';
  var students = {};
  var placeFilter = document.querySelector('.place-filter');
  var codeFilter = document.querySelector('.code-filter');

  codeFilter.addEventListener('change', showNumber);
  function showNumber(event) {
    PLACE = placeFilter.value;
    CODE = this.value;
    students = data[PLACE][CODE]['students'];

    var enrollmentStudents = document.querySelector('.enrollment-students');
    enrollmentStudents.textContent = totalActive(PLACE, CODE, 'active');

    var teacherRatings = document.querySelector('.teacher-ratings');
    teacherRatings.textContent = TeachersPoints(PLACE, CODE);

    var jediMasterRatings = document.querySelector('.jedi-master-ratings');
    jediMasterRatings.textContent = jediMasterPoints(PLACE, CODE);
  }
});


function totalActive(place, code, activeOrNotActive) {
  var isActive = 0;
  var isNotActive = 0;
  for (var i = 0 ; i < data[place][code].students.length; i++) {
    if (data[place][code].students[i].active === true && activeOrNotActive === 'active') {
      isActive++;
    } else if (data[place][code].students[i].active === false && activeOrNotActive === 'notActive') {
      isNotActive++;
    }
  }
  if (activeOrNotActive === 'active') {
    return isActive;
  } else if (activeOrNotActive === 'notActive') {
    return isNotActive;
  }
}

// funcion que saca el promedio de los puntajes de los profesores   (todos los sprints)
function TeachersPoints(place, code) {
  var listOfCodes = data[place];
  // var arrayPrueba= []
  var sum = 0;
  var promocion = listOfCodes[code];
  var students = promocion.students;
  var ratings = promocion.ratings;
  for (var i = 0 ; i < ratings.length ; i++) {
  // arrayPrueba.push(ratings[i].teacher)  ;
    sum += ratings[i].teacher;
  }
  var average = sum / ratings.length;
  return average;
}

// funcion que saca el promedio de los puntajes de los jedi-master   (todos los sprints)

function jediMasterPoints(place, code) {
  var listOfCodes = data[place];
  var arrayPrueba = [];
  var sum = 0;
  var promocion = listOfCodes[code];
  var students = promocion.students;
  var ratings = promocion.ratings;
  for (var i = 0 ; i < ratings.length ; i++) {
    // arrayPrueba.push(ratings[i].jedi)  ;
    sum += ratings[i].jedi;
  }
  var average = sum / ratings.length;
  return average;
// return arrayPrueba
}
/*
// sacand el total de estudiantes activas y no activas
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
// FUNCION QUE CALCULA EL PORCENTAJE DESERCION:

// porcentaje de estudiantes en hse y tech :
// debugger
function coursePercentage(place, code, course) {
  var points = [];
  var listOfCodes = data[place];
  var promocion = listOfCodes[code];
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
// FUNCION QUE CALCULA EL PORCENTAJE DESERCION:
function desertionPercentage(place, code) {
  var totalStudents = totalActive(place, code, 'active') + totalActive(place, code, 'notActive');
  return parseFloat(((totalActive(place, code, 'notActive') / totalStudents) * 100).toFixed(1)) ;
}
desertionPercentage('LIM', '2016-2');
// funcion que calcula las alumnas que superan la meta por sprint
function sprintPassingScore(place, code, sprint) {
  var listOfCodes = data[place];
  var promocion = listOfCodes[code];
  var index = sprint - 1;
  var passed = promocion.ratings[index].student.supera;

  return passed;
}
sprintPassingScore('LIM', '2017-1', 4);
//  calculando el porcentaje de las alumnas que superan la meta por sprint:
var resultado = (sprintPassingScore('LIM', '2017-1', 3) / totalActive('LIM', '2017-1', 'active')) * 100;


// funcion que saca el promedio de los puntajes de los profesores   (todos los sprints)
function TeachersPoints(place, code) {
  var listOfCodes = data[place];
  // var arrayPrueba= []
  var sum = 0;
  var promocion = listOfCodes[code];
  var students = promocion.students;
  var ratings = promocion.ratings;
  for (var i = 0 ; i < ratings.length ; i++) {
  // arrayPrueba.push(ratings[i].teacher)  ;
    sum += ratings[i].teacher;
  }
  var average = sum / ratings.length;
  return average;
}

TeachersPoints('LIM', '2017-2');
// funcion que saca el promedio de los puntajes de los jedi-master   (todos los sprints)

function jediMasterPoints(place, code) {
  var listOfCodes = data[place];
  var arrayPrueba = [];
  var sum = 0;
  var promocion = listOfCodes[code];
  var students = promocion.students;
  var ratings = promocion.ratings;
  for (var i = 0 ; i < ratings.length ; i++) {
    // arrayPrueba.push(ratings[i].jedi)  ;
    sum += ratings[i].jedi;
  }
  var average = sum / ratings.length;
  return average;
// return arrayPrueba
}
jediMasterPoints('LIM', '2017-2');

// funcion que calcula el nps
function npsOfSprints(place, code) {
  var listOfCodes = data[place];
  var anwersContainer = [];
  var sum = 0;
  var totalAnswers = 0;
  var promocion = listOfCodes[code];
  var students = promocion.students;
  var ratings = promocion.ratings;
  for (var i = 0 ; i < ratings.length ; i++) {
    // para promoters
    anwersContainer.push(ratings[i].nps.promoters - ratings[i].nps.detractors);
  }
  for (var j = 0 ; j < anwersContainer.length;j++) {
    sum += anwersContainer[j];
  }
  return sum / anwersContainer.length;
}
*/
