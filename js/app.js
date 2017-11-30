window.addEventListener('load', function(event) {
  var checkedSite = document.getElementById('checkbox-site');
  var teacherRating = document.getElementById('numDataFourthRow');

  // solucionando primer ennunciado
  // declarando variables generales
  var siteLim = data['LIM'];
  var siteAqp = data['AQP'];
  var siteChile = data['SCL'];
  var siteCdmx = data['CDMX'];

  // CASO LIMA
  // obteniendo numero de poblacion estudiantil

  var limaProm2016ii = siteLim['2016-2'];
  var limaProm2017i = siteLim['2017-1'];
  var limaProm2017ii = siteLim['2017-2'];

  console.log(limaProm2016ii.students.length); // 35
  console.log(limaProm2017i.students.length); // 17
  console.log(limaProm2017ii.students.length); // 14

  var limaStudents2016ii = limaProm2016ii.students;
  var activeLimaStudents2016ii = 0;
  var inactiveLimaStudents2016ii = 0;
  var limaStudents2017i = limaProm2017i.students;
  var activeLimaStudents2017i = 0;
  var inactiveLimaStudents2017i = 0;
  var limaStudents2017ii = limaProm2017ii.students;
  var activeLimaStudents2017ii = 0;
  var inactiveLimaStudents2017ii = 0;

  // obteniendo procentaje de estudiantes de deserción de estudiantes por sede y generacion

  // Caso Lima2016-2

  for (var i = 0; i < limaStudents2016ii.length;i++) {
    if (limaStudents2016ii[i]['active'] === true) {
      activeLimaStudents2016ii ++;
    } else {
      inactiveLimaStudents2016ii ++;
    }
  }
  var enrolledLimaStudents2016ii = activeLimaStudents2016ii + inactiveLimaStudents2016ii;
  console.log(enrolledLimaStudents2016ii);
  var desertionLimaStudents2016ii = Math.floor((inactiveLimaStudents2016ii * 100) / (enrolledLimaStudents2016ii)) + '%';
  var pastScoreLimaStudents2016ii = 0;

  for (var i = 0; i < limaStudents2016ii.length;i++) {
    // ingresando a los sprints para obtener las notas tech y hse
    for (var j = 0; j < limaStudents2016ii[i]['sprints'].length; j++) {
      var sprintScoreLimaStudents2016ii = (limaStudents2016ii[i]['sprints'][j]['score']['tech'] + limaStudents2016ii[i]['sprints'][j]['score']['hse']);
      if (sprintScoreLimaStudents2016ii >= 2100) {
        pastScoreLimaStudents2016ii ++;
      }
    }
  }
  var percentPastScoreLimaStudents2016ii = Math.floor((pastScoreLimaStudents2016ii * 100) / (enrolledLimaStudents2016ii)) + '%';


  // caso Lima2017-1

  for (var i = 0; i < limaStudents2017i.length;i++) {
    if (limaStudents2017i[i]['active'] === true) {
      activeLimaStudents2017i ++;
    } else {
      inactiveLimaStudents2017i ++;
    }
  }
  var enrolledLimaStudents2017i = activeLimaStudents2017i + inactiveLimaStudents2017i;
  console.log(enrolledLimaStudents2017i);
  var desertionLimaStudents2017i = Math.floor((inactiveLimaStudents2017i * 100) / (enrolledLimaStudents2017i)) + '%';

  var pastScoreLimaStudents2017i = 0;

  for (var i = 0; i < limaStudents2017i.length;i++) {
    // ingresando a los sprints para obtener las notas tech y hse
    for (var j = 0; j < limaStudents2017i[i]['sprints'].length; j++) {
      var sprintScoreLimaStudents2017i = (limaStudents2017i[i]['sprints'][j]['score']['tech'] + limaStudents2017i[i]['sprints'][j]['score']['hse']);
      if (sprintScoreLimaStudents2017i >= 2100) {
        pastScoreLimaStudents2017i ++;
      }
    }
  }
  var percentPastScoreLimaStudents2017i = Math.floor((pastScoreLimaStudents2017i * 100) / (enrolledLimaStudents2017i)) + '%';

  // Caso Lima2017-2

  for (var i = 0; i < limaStudents2017ii.length;i++) {
    if (limaStudents2017ii[i]['active'] === true) {
      activeLimaStudents2017ii ++;
    } else {
      inactiveLimaStudents2017ii ++;
    }
  }
  var enrolledLimaStudents2017ii = activeLimaStudents2017ii + inactiveLimaStudents2017ii;
  console.log(enrolledLimaStudents2017ii);
  var desertionLimaStudents2017ii = Math.floor((inactiveLimaStudents2017ii * 100) / (enrolledLimaStudents2017ii)) + '%';
  // La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
  // Se declara una variable de un array vacio para que ahi se ingrese mediante push el numero total de alumnas que pasaron el 70% de todos los sprints
  // declaramos una varible de contador para que guarde el numero de estudiantes que pasaron
  var pastScoreLimaStudents2017ii = 0;

  for (var i = 0; i < limaStudents2017ii.length;i++) {
    // ingresando a los sprints para obtener las notas tech y hse
    for (var j = 0; j < limaStudents2017ii[i]['sprints'].length; j++) {
      var sprintScoreLimaStudents2017ii = (limaStudents2016ii[i]['sprints'][j]['score']['tech'] + limaStudents2017ii[i]['sprints'][j]['score']['hse']);
      if (sprintScoreLimaStudents2017ii >= 2100) {
        pastScoreLimaStudents2017ii ++;
      }
    }
  }
  // .onchange=changeEventHandler;},false);

  var percentPastScoreLimaStudents2017ii = Math.floor(pastScoreLimaStudents2017ii);

  checkedSite.addEventListener('change', function(event) {
    if (checkedSite === 'lim2016 - ii') {
      getElementById('numDataNumber').innerHtml = enrolledLimaStudents2016ii;
      getElementById('numDataDropout').innerHtml = desertionLimaStudents2016ii;
      getElementById('numDataAchievement').innerHtml = pastScoreLimaStudents2016ii;
      getElementById('numDataAchievementPercent').innerHtml = percentPastScoreLimaStudents2016ii;
    } else if (checkedSite === 'lima2017-i') {
      getElementById('numDataNumber').innerHtml = enrolledLimaStudents2017i;
      getElementById('numDataDropout').innerHtml = desertionLimaStudents2017i;
      getElementById('numDataAchievement').innerHtml = pastScoreLimaStudents2017i;
      getElementById('numDataAchievementPercent').innerHtml = percentPastScoreLimaStudents2017i;
    }
  });
});

// obteniendo promedio de los teachers
// lima 2016-2
var teacherLim2016iiSprintOne = data['LIM']['2016-2']['ratings'][0]['teacher'];
var teacherLim2016iiSprintTwo = data['LIM']['2016-2']['ratings'][1]['teacher'];
var promTeacherLim2016ii = ((teacherLim2016iiSprintOne + teacherLim2016iiSprintTwo) / 2);
// lima 2017-1
var teacherLim2017iSprintOne = data['LIM']['2017-1']['ratings'][0]['teacher'];
var teacherLim2017iSprintTwo = data['LIM']['2017-1']['ratings'][1]['teacher'];
var teacherLim2017iSprintThree = data['LIM']['2017-1']['ratings'][2]['teacher'];
var teacherLim2017iSprintFourth = data['LIM']['2017-1']['ratings'][3]['teacher'];
var promTeacherLim2017i = ((teacherLim2017iSprintOne + teacherLim2017iSprintTwo + teacherLim2017iSprintThree + teacherLim2017iSprintFourth) / 4);
// lima 2017-2
var teacherLim2017iiSprintOne = data['LIM']['2017-2']['ratings'][0]['teacher'];
var teacherLim2017iiSprintTwo = data['LIM']['2017-2']['ratings'][1]['teacher'];
var promTeacherLim2017ii = ((teacherLim2017iiSprintOne + teacherLim2017iiSprintTwo) / 2);
// creando evento
  teacherRating.addEventListener('change', function(event) {
  console.log(event);
  if (teacherRating === 'lim2016 - ii') {
    getElementById('numDataFourthRow').innerHtml = promTeacherLim2016ii;
  } else if (teacherRating === 'lim2017 - i') {
    getElementById('numDataFourthRow').innerHtml = promTeacherLim2017i;
  } else if (teacherRating === 'lim2017 - ii') {
    getElementById('numDataFourthRow').innerHtml = promTeacherLim2017ii;
  }
});

// var shortCut = data['LIM']['2016-2']['students'];
// console.log(shortCut.length);
// Puedes hacer uso de la base de datos a través de la variable `data`



// console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']['tech']);
// console.log(data);
// var shortCut = data['LIM']['2016-2']['students'];
// console.log(shortCut.length);
// console.log(shortCut);