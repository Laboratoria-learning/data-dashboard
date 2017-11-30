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
  var SPRINT = '';
  var students = {};
  var placeFilter = document.querySelector('.place-filter');
  var codeFilter = document.querySelector('.code-filter');
  var sprintFilter = document.querySelector('.sprint-filter');

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

    var studentsPercentagePassed = document.querySelector('.percentage-passed');
    studentsPercentagePassed.textContent = studentPercentagePassed(PLACE, CODE) + '%';
    var studentsPassed = document.querySelector('.students-passed');
    // VERIFICAR
    studentsPassed.textContent = (studentPercentagePassed(PLACE, CODE) * totalActive(PLACE, CODE, 'active')) / 100;

    var sede = document.getElementById('sede');
    if (PLACE === 'LIM') {
      sede.textContent = 'SEDE LIMA';
    } else if (PLACE === 'AQP') {
      sede.textContent = 'SEDE AREQUIPA';
    } else if (PLACE === 'CDMX') {
      sede.textContent = 'SEDE MEXICO';
    } else if (PLACE === 'SCL') {
      sede.textContent = 'SEDE CHILE';
    }
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

// para calcular el porcentaje de las que superan la nota en hse y tech :

function studentPercentagePassed(place, code) {
  var array = [];
  var sum = 0;
  var ratings = data[place][code].ratings;
  for (var i = 0 ; i < ratings.length; i++) {
    array.push(ratings[i].student.supera);
  }

  for (var j = 0 ; j < array.length;j++) {
    sum += array[j];
  }
  return (sum / array.length);
}
// funcion que calcula el numero de personas que representa  el porcentaje de las que superan la meta en ambos cursos:
function studentPassed(place, code) {
  var result = (studentPercentagePassed(PLACE, CODE) * totalActive(PLACE, CODE, 'active')) / 100;
  return result;

}
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  // Create the data table.
  var passed = document.getElementById("passed").textContent;
  var noPassed = document.getElementById("noPassed").textContent;
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'passed');
  data.addColumn('number', 'resultado');
  data.addRows([
    ['Passed', parseInt(passed)],
    ['No Passed', parseInt(noPassed)],
  ]);
  // Set chart options
  var options = {'width':450,
                'height':150};
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart);

// funcion que saca el promedio de los puntajes de los jedi-master   (todos los sprints)

function jediMasterPoints(place, code) {
  var listOfCodes = data[place];
  var sum = 0;
  var promocion = listOfCodes[code];
  var students = promocion.students;
  var ratings = promocion.ratings;
  for (var i = 0 ; i < ratings.length ; i++) {
    sum += ratings[i].jedi;
  }
  var average = sum / ratings.length;
  return average;
}
/*

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
