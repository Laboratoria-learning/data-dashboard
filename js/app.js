var list = document.getElementsByTagName('ul')[0].children;
var elementTab = document.getElementsByClassName('tab');
var containerOverview = document.getElementById('container-overview');
var containesStudents = document.getElementById('container-students');
var comboBox = document.getElementById('combo-box');
var studentCurrently = document.getElementById('student-currently');
var dropout = document.getElementById('dropout');
var cumulativeNps = document.getElementById('cumulative-nps');
var percentage = document.getElementById('percentage');
var teacherRating = document.getElementById('teacher-rating');
var jediMasterRating = document.getElementById('jedi-master-rating');
var studentSatisfaction = document.getElementById('student-satisfaction');
var studentTarget = document.getElementById('student-target');
var total = document.getElementById('total');
var comboBoxTech = document.getElementById('combo-box-tech');
var studentCurrentlySkill = document.getElementById('student-currently-skill');
var totalSkill = document.getElementById('total-skill');
var comboBoxHse = document.getElementById('combo-box-hse');
var overallClass = document.getElementById('overall-class');
var studentTargetOverall = document.getElementById('student-target-overall');
function show(event) {
  var tabSelection = event.target.dataset.tabSelection;
  if (tabSelection === 'overview') {
    containesStudents.classList.remove('block');
    containesStudents.classList.add('none');
    containerOverview.classList.remove('none');
    containerOverview.classList.add('block');
    list[1].classList.remove('hover');
    list[0].classList.add('hover');
  } else {
    containerOverview.classList.remove('block');
    containerOverview.classList.add('none');
    containesStudents.classList.remove('none');
    containesStudents.classList.add('block');
    containesStudents.classList.add('block');
    list[0].classList.remove('hover');
    list[1].classList.add('hover');
  }
}

function changeTitle() {
  var titleSelector = document.getElementById('title-selector');
  var valueSelector = comboBox.value;
  // var returnCurrently;
  switch (valueSelector) {
  case 'lim2016II':
    titleSelector.textContent = 'Lima 2016-II';
    calculateCurrently('LIM', 35, '2016-2');
    calculatePromoter('LIM', 2, '2016-2');
    calculateTeacherRating('LIM', 2, '2016-2');
    calculateJediMasterRating('LIM', 2, '2016-2');
    calculateStudentSatisfaccion('LIM', 1, '2016-2', 35);
    calculateAchievement('LIM', '2016-2');
    var attend = parseInt(calculateCurrently('LIM', 35, '2016-2'));
    drawCurrently(attend, 35 - attend);
    var sprint1 = data['LIM']['2016-2']['ratings'][0]['nps']['promoters'];
    var sprint2 = data['LIM']['2016-2']['ratings'][1]['nps']['promoters'];
    drawPromoter(sprint1, sprint2, 0, 0);
    break;
  case 'lim2017I':
    titleSelector.textContent = 'Lima 2017-I';
    calculateCurrently('LIM', 17, '2017-1');
    calculatePromoter('LIM', 4, '2017-1');
    calculateTeacherRating('LIM', 4, '2017-1');
    calculateJediMasterRating('LIM', 4, '2017-1');
    calculateStudentSatisfaccion('LIM', 3, '2017-1', 17);
    calculateAchievement('LIM', '2017-1');
    var attend = parseInt(calculateCurrently('LIM', 17, '2017-1'));
    drawCurrently(attend, 17 - attend);
    var sprint1 = data['LIM']['2017-1']['ratings'][0]['nps']['promoters'];
    var sprint2 = data['LIM']['2017-1']['ratings'][1]['nps']['promoters'];
    var sprint3 = data['LIM']['2017-1']['ratings'][2]['nps']['promoters'];
    var sprint4 = data['LIM']['2017-1']['ratings'][3]['nps']['promoters'];
    drawPromoter(sprint1, sprint2, sprint3, sprint4);
    break;
  case 'lim2017II':
    titleSelector.textContent = 'Lima 2017-II';
    calculateCurrently('LIM', 14, '2017-2');
    calculatePromoter('LIM', 2, '2017-2');
    calculateTeacherRating('LIM', 2, '2017-2');
    calculateJediMasterRating('LIM', 2, '2017-2');
    calculateStudentSatisfaccion('LIM', 1, '2017-2', 14);
    calculateAchievement('LIM', '2017-2');
    var attend = parseInt(calculateCurrently('LIM', 14, '2017-2'));
    var sprint1 = data['LIM']['2017-2']['ratings'][0]['nps']['promoters'];
    var sprint2 = data['LIM']['2017-2']['ratings'][1]['nps']['promoters'];
    drawPromoter(sprint1, sprint2, 0, 0);
    drawCurrently(attend, 14 - attend);
    break;
  case 'are2016II':
    titleSelector.textContent = 'Arequipa 2016-II';
    calculateCurrently('AQP', 15, '2016-2');
    calculatePromoter('AQP', 4, '2016-2');
    calculateTeacherRating('AQP', 4, '2016-2');
    calculateJediMasterRating('AQP', 4, '2016-2');
    calculateStudentSatisfaccion('AQP', 3, '2016-2', 15);
    calculateAchievement('AQP', '2016-2');
    var attend = parseInt(calculateCurrently('AQP', 15, '2016-2'));
    var sprint1 = data['AQP']['2016-2']['ratings'][0]['nps']['promoters'];
    var sprint2 = data['AQP']['2016-2']['ratings'][1]['nps']['promoters'];
    var sprint3 = data['AQP']['2016-2']['ratings'][2]['nps']['promoters'];
    var sprint4 = data['AQP']['2016-2']['ratings'][3]['nps']['promoters'];
    drawCurrently(attend, 15 - attend);
    drawPromoter(sprint1, sprint2, sprint3, sprint4);
    break;
  case 'are2017I':
    titleSelector.textContent = 'Arequipa 2017-I';
    calculateCurrently('AQP', 15, '2017-1');
    calculatePromoter('AQP', 3, '2017-1');
    calculateTeacherRating('AQP', 3, '2017-1');
    calculateJediMasterRating('AQP', 3, '2017-1');
    calculateStudentSatisfaccion('AQP', 2, '2017-1', 15);
    calculateAchievement('AQP', '2017-1');
    var attend = parseInt(calculateCurrently('AQP', 15, '2017-1'));
    var sprint1 = data['AQP']['2017-1']['ratings'][0]['nps']['promoters'];
    var sprint2 = data['AQP']['2017-1']['ratings'][1]['nps']['promoters'];
    var sprint3 = data['AQP']['2017-1']['ratings'][2]['nps']['promoters'];
    drawCurrently(attend, 15 - attend);
    drawPromoter(sprint1, sprint2, sprint3, 0);
    break;
  case 'chi2016II':
    titleSelector.textContent = 'Chile 2016-II';
    calculateCurrently('SCL', 11, '2016-2');
    calculatePromoter('SCL', 4, '2016-2');
    calculateTeacherRating('SCL', 4, '2016-2');
    calculateJediMasterRating('SCL', 4, '2016-2');
    calculateStudentSatisfaccion('SCL', 3, '2016-2', 11);
    calculateAchievement('SCL', '2016-2');
    var attend = parseInt(calculateCurrently('SCL', 11, '2016-2'));
    var sprint1 = data['SCL']['2016-2']['ratings'][0]['nps']['promoters'];
    var sprint2 = data['SCL']['2016-2']['ratings'][1]['nps']['promoters'];
    var sprint3 = data['SCL']['2016-2']['ratings'][2]['nps']['promoters'];
    var sprint4 = data['SCL']['2016-2']['ratings'][3]['nps']['promoters'];
    drawCurrently(attend, 11 - attend);
    drawPromoter(sprint1, sprint2, sprint3, sprint4);
    break;
  case 'chi2017I':
    titleSelector.textContent = 'Chile 2017-I';
    calculateCurrently('SCL', 23, '2017-1');
    calculatePromoter('SCL', 3, '2017-1');
    calculateTeacherRating('SCL', 3, '2017-1');
    calculateJediMasterRating('SCL', 3, '2017-1');
    calculateStudentSatisfaccion('SCL', 2, '2017-1', 23);
    calculateAchievement('SCL', '2017-1');
    var attend = parseInt(calculateCurrently('SCL', 23, '2017-1'));
    var sprint1 = data['SCL']['2017-1']['ratings'][0]['nps']['promoters'];
    var sprint2 = data['SCL']['2017-1']['ratings'][1]['nps']['promoters'];
    var sprint3 = data['SCL']['2017-1']['ratings'][2]['nps']['promoters'];
    drawCurrently(attend, 23 - attend);
    drawPromoter(sprint1, sprint2, sprint3, 0);
    break;
  case 'chi2017II':
    titleSelector.textContent = 'Chile 2017-II';
    calculateCurrently('SCL', 59, '2017-2');
    calculatePromoter('SCL', 2, '2017-2');
    calculateTeacherRating('SCL', 2, '2017-2');
    calculateJediMasterRating('SCL', 2, '2017-2');
    calculateStudentSatisfaccion('SCL', 1, '2017-2', 59);
    calculateAchievement('SCL', '2017-2');
    var attend = parseInt(calculateCurrently('SCL', 59, '2017-2'));
    var sprint1 = data['SCL']['2017-2']['ratings'][0]['nps']['promoters'];
    var sprint2 = data['SCL']['2017-2']['ratings'][1]['nps']['promoters'];
    drawPromoter(sprint1, sprint2, 0, 0);
    drawCurrently(attend, 59 - attend);
    break;
  case 'mex2017I':
    titleSelector.textContent = 'Mexico 2017-I';
    calculateCurrently('CDMX', 24, '2017-1');
    calculatePromoter('CDMX', 3, '2017-1');
    calculateTeacherRating('CDMX', 3, '2017-1');
    calculateJediMasterRating('CDMX', 3, '2017-1');
    calculateStudentSatisfaccion('CDMX', 2, '2017-1', 24);
    calculateAchievement('CDMX', '2017-1');
    var attend = parseInt(calculateCurrently('CDMX', 24, '2017-1'));
    var sprint1 = data['CDMX']['2017-1']['ratings'][0]['nps']['promoters'];
    var sprint2 = data['CDMX']['2017-1']['ratings'][1]['nps']['promoters'];
    var sprint3 = data['CDMX']['2017-1']['ratings'][2]['nps']['promoters'];
    drawPromoter(sprint1, sprint2, sprint3, 0);
    drawCurrently(attend, 24 - attend);
    break;
  case 'mex2017II':
    titleSelector.textContent = 'Mexico 2017-II';
    calculateCurrently('CDMX', 46, '2017-2');
    calculatePromoter('CDMX', 2, '2017-2');
    calculateTeacherRating('CDMX', 2, '2017-2');
    calculateJediMasterRating('CDMX', 2, '2017-2');
    calculateStudentSatisfaccion('CDMX', 1, '2017-2', 46);
    calculateAchievement('CDMX', '2017-2');
    var attend = parseInt(calculateCurrently('CDMX', 46, '2017-2'));
    var sprint1 = data['CDMX']['2017-2']['ratings'][0]['nps']['promoters'];
    var sprint2 = data['CDMX']['2017-2']['ratings'][1]['nps']['promoters'];
    drawPromoter(sprint1, sprint2, 0, 0);
    drawCurrently(attend, 46 - attend);
    break;
  }
}

function calculateCurrently(sede, numEstudents, year) {
  var cont = 0;
  for (var i = 0 ; i < numEstudents;i++) {
    var asisten = data[sede][year]['students'][i]['active'];
    if (asisten === true) {
      cont++;
    }
  }
  studentCurrently.innerHTML = '<b>' + numEstudents + '</b>' + ' <br> students currently enrolled';
  dropout.textContent = ((100 * (numEstudents - cont)) / numEstudents).toFixed(0) + ' % dropout';
  return cont;
}

function calculatePromoter(sede, numSprint, year) {
  var contPromoters = 0;
  var contDetractors = 0;
  var contPassive = 0;
  for (var i = 0;i < numSprint;i++) {
    contPromoters = data[sede][year]['ratings'][i]['nps']['promoters'] + contPromoters;
    contDetractors = data[sede][year]['ratings'][i]['nps']['detractors'] + contDetractors;
    contPassive = data[sede][year]['ratings'][i]['nps']['passive'] + contDetractors;
  }
  cumulativeNps.innerHTML = ((contPromoters / numSprint).toFixed(0) - (contDetractors / numSprint).toFixed(0)) + ' % cumulative NPS';
  percentage.innerHTML = (contPromoters / numSprint).toFixed(0) + ' % Promoters <br>' + (contPassive / numSprint).toFixed(0) + ' % Passive </br>' + (contDetractors / numSprint).toFixed(0) + ' % Detractors';
}

function calculateTeacherRating(sede, numSprint, year) {
  var sumRating = 0;
  for (var i = 0; i < numSprint;i++) {
    sumRating = data[sede][year]['ratings'][i]['teacher'] + sumRating;
  }
  teacherRating.innerHTML = '<b>' + (sumRating / numSprint).toFixed(2) + '</b>' + '<br> overall teacher rating <br> (cumulative)';
}

function calculateJediMasterRating(sede, numSprint, year) {
  var sumJedi = 0;
  for (var i = 0;i < numSprint;i++) {
    sumJedi = data[sede][year]['ratings'][i]['jedi'] + sumJedi;
  }
  jediMasterRating.innerHTML = '<b>' + (sumJedi / numSprint).toFixed(2) + '</b>' + '<br> overall teacher rating <br> (cumulative)';
}


function calculateHse(sede, year, numSprint) {
  var cantEstudents = data[sede][year]['students'].length;
  var valueComboHse = comboBoxHse.value;
  var meetTarget, sprint, percentSprint;
  switch (valueComboHse) {
  case 'sprintHSE1':
    var sumSprintOne = 0;
    for (var i = 0;i < cantEstudents;i++) {
      if (data[sede][year]['students'][i]['sprints'].length !== 0) {
        sprint = data[sede][year]['students'][i]['sprints'][0]['score']['hse'];
        meetTarget = ((sprint * 100) / 1200).toFixed(2);
        if (meetTarget >= 70) {
          sumSprintOne++;
        }
      }
    }
    percentSprint = ((sumSprintOne * 100) / cantEstudents).toFixed(0);
    overallClass.innerHTML = '<b>' + sumSprintOne + '</b>' + '<br> # of students that meet the target';
    studentTargetOverall.innerHTML = '<b>' + percentSprint + '</b>' + '<br> % overall class average';
    break;
  case 'sprintHSE2':
    var sumSprintTwo = 0;
    for (var i = 0;i < cantEstudents;i++) {
      if (data[sede][year]['students'][i]['sprints'].length !== 0) {
        sprint = data[sede][year]['students'][i]['sprints'][1]['score']['hse'];
        meetTarget = ((sprint * 100) / 1200).toFixed(2);
        if (meetTarget >= 70) {
          sumSprintTwo++;
        }
      }
    }
    percentSprint = ((sumSprintTwo * 100) / cantEstudents).toFixed(0);
    overallClass.innerHTML = '<b>' + sumSprintTwo + '</b>' + '<br> # of students that meet the target';
    studentTargetOverall.innerHTML = '<b>' + percentSprint + '</b>' + '<br> % overall class average';
    break;
  case 'sprintHSE3':
    if (numSprint > 2) {
      var sumSprintThree = 0;
      for (var i = 0;i < cantEstudents;i++) {
        if (data[sede][year]['students'][i]['sprints'].length !== 0) {
          sprint = data[sede][year]['students'][i]['sprints'][2]['score']['hse'];
          meetTarget = ((sprint * 100) / 1200).toFixed(2);
          if (meetTarget >= 70) {
            sumSprintThree++;
          }
        }
      }
      percentSprint = ((sumSprintThree * 100) / cantEstudents).toFixed(0);
      overallClass.innerHTML = '<b>' + sumSprintThree + '</b>' + '<br> # of students that meet the target';
      studentTargetOverall.innerHTML = '<b>' + percentSprint + '</b>' + '<br> % overall class average';
    } else {
      studentTargetOverall.innerHTML = '';
      overallClass.innerHTML = '';
      alert('No hay Sprint 3');
    }
    break;
  case 'sprintHSE4':
    if (numSprint > 3) {
      var sumSprintFour = 0;
      for (var i = 0;i < cantEstudents;i++) {
        if (data[sede][year]['students'][i]['sprints'].length !== 0) {
          sprint = data[sede][year]['students'][i]['sprints'][3]['score']['hse'];
          meetTarget = ((sprint * 100) / 1200).toFixed(2);
          if (meetTarget >= 70) {
            sumSprintFour++;
          }
        }
      }
      percentSprint = ((sumSprintFour * 100) / cantEstudents).toFixed(0);
      overallClass.innerHTML = '<b>' + sumSprintFour + '</b>' + '<br> # of students that meet the target';
      studentTargetOverall.innerHTML = '<b>' + percentSprint + '</b>' + '<br> % overall class average';
    } else {
      studentTargetOverall.innerHTML = '';
      overallClass.innerHTML = '';
      alert('No hay Sprint 4');
    }
    break;
  }
}

function drawCurrently(attend, noAttend) {
  var data = google.visualization.arrayToDataTable([
    ['Currently', 'Number Student'],
    ['Asisten', attend],
    ['No Asisten', noAttend],
  ]);
  var options = {
    'width': 300,
    'height': 230};

  var chart = new google.visualization.PieChart(document.getElementById('grafy-enrollment'));
  chart.draw(data, options);
}

  var data = google.visualization.arrayToDataTable([
    ['Element', '#', { role: 'annotation' } ],
    ['Sprint1', num1, 'sprin1' ],
    ['Sprint2', num2, 'sprint2' ],
    ['Sprint3', num3, 'sprint3' ],
    ['Sprint4', num4, 'sprint4' ],
  ]);

  var options = {
    title: '# of promoters for sprint',
    'width': 300,
    'height': 230};
  var chart = new google.charts.Bar(document.getElementById('grafy-promoter'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

window.onload = function() {
  elementTab[0].addEventListener('click', show);
  elementTab[1].addEventListener('click', show);
  containesStudents.classList.add('none');
  comboBox.addEventListener('change', changeTitle);
