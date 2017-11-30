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
    comboBoxTech.addEventListener('change', TechSkill);
    var attend = parseInt(calculateCurrently('LIM', 35, '2016-2'));
    drawCurrently(attend, 35 - attend);
    drawPromoter();
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
    drawCurrently(attend, 15 - attend);
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
    drawCurrently(attend, 15 - attend);
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
    drawCurrently(attend, 11 - attend);
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
    drawCurrently(attend, 23 - attend);
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

function calculateStudentSatisfaccion(sede, numEndSprint, year, totalEstudent) {
  var meet = data[sede][year]['ratings'][numEndSprint]['student']['cumple'];
  var beats = data[sede][year]['ratings'][numEndSprint]['student']['supera'];
  var numStudentCumple = parseInt(((totalEstudent * meet) / 100).toFixed(0));
  var numStudentSupera = parseInt(((totalEstudent * beats) / 100).toFixed(0));
  var total = (((numStudentCumple + numStudentSupera) * 100) / totalEstudent).toFixed(2);
  // console.log(numStudentCumple);
  studentSatisfaction.innerHTML = '<b>' + total + '</b>' + '<br> % meeting or exceeding expectations';
}

function calculateAchievement(sede, year) {
  var sumTechStudent = 0;
  var percentageTotal;
  var scoreTotal;
  var scoreTotalHse;
  var sum;
  var sumHse;
  // var numSprint = data[sede][year]['students'][0]['sprints'].length;
  var numSprint;
  var cantEstudents = data[sede][year]['students'].length; 
  // console.log(data[sede][year]['students'][0]['sprints'].length);
  // console.log(cantEstudents);
  for (var i = 0; i < cantEstudents ; i++) {
    // console.log(i);
    if (data[sede][year]['students'][i]['sprints'].length !== 0) {
      sum = 0;
      sumHse = 0;
      numSprint = data[sede][year]['students'][i]['sprints'].length;
      // console.log(numSprint);
      for (var j = 0; j < numSprint;j++) {
        // console.log(data[sede][year]['students'][i]['active']);
        // console.log(data[sede][year]['students'][i]['sprints'][j]['score']['tech']);
        sum = data[sede][year]['students'][i]['sprints'][j]['score']['tech'] + sum;
        sumHse = data[sede][year]['students'][i]['sprints'][j]['score']['hse'] + sumHse;
      }
      scoreTotal = (((sum / numSprint) * 100) / 1800).toFixed(2);
      scoreTotalHse = (((sumHse / numSprint) * 100) / 1200).toFixed(2);
      // console.log(i);
      // console.log(scoreTotalHse);
      // console.log(scoreTotal);
      if (scoreTotal > 70 && scoreTotalHse > 70) {
        sumTechStudent++;
      }
    }
  }
  // console.log(sumTechStudent);
  percentageTotal = ((sumTechStudent * 100) / cantEstudents).toFixed(0);
  studentTarget.innerHTML = '<b>' + sumTechStudent + '</b>' + '<br># students that meet the target';
  total.innerHTML = '<b>' + percentageTotal + '</b>' + '<br>% of total (' + cantEstudents + ' )';
}

function TechSkill() {
  var valueSelector = comboBox.value;
  switch (valueSelector) {
  case 'lim2016II':
    calculateTech('LIM', '2016-2', 2);
    break;
  case 'lim2017I':
    calculateTech('LIM', '2017-1', 4);
    break;
  case 'lim2017II':
    calculateTech('LIM', '2017-2', 2); 
    break;
  case 'are2016II':
    calculateTech('AQP', '2016-2', 4);
    break;
  case 'are2017I':
    calculateHse('AQP', '2017-2', 3); 
    break;
  case 'chi2016II':
    calculateHse('SCL', '2016-2', 4);  
    break;
  case 'chi2017I':
    calculateHse('SCL', '2017-1', 3);  
    break;
  case 'chi2017II':
    calculateHse('SCL', '2017-2', 2);
    break;
  case 'mex2017I':
    calculateHse('CDMX', '2017-1', 3);
    break;
  case 'mex2017II':
    calculateHse('CDMX', '2017-2', 2);  
    break;
  }
}

function lifeSkill() {
  var valueSelector = comboBox.value;
  switch (valueSelector) {
  case 'lim2016II':
    calculateHse('LIM', '2016-2', 2);
    break;
  case 'lim2017I':
    calculateHse('LIM', '2017-1', 4);
    break;
  case 'lim2017II':
    calculateHse('LIM', '2017-2', 2);  
    break;
  case 'are2016II':
    calculateHse('AQP', '2016-2', 4);
    break;
  case 'are2017I':
    calculateHse('AQP', '2017-2', 3); 
    break;
  case 'chi2016II':
    calculateHse('SCL', '2016-2', 4);  
    break;
  case 'chi2017I':
    calculateHse('SCL', '2017-1', 3);  
    break;
  case 'chi2017II':
    calculateHse('SCL', '2017-2', 2);
    break;
  case 'mex2017I':
    calculateHse('CDMX', '2017-1', 3);
    break;
  case 'mex2017II':
    calculateHse('CDMX', '2017-2', 2);  
    break;
  }
}

function calculateTech(sede, year, numSprint) {
  var cantEstudents = data[sede][year]['students'].length;
  var valueComboTech = comboBoxTech.value;
  var meetTarget, sprint, percentSprint;
  switch (valueComboTech) {
  case 'sprint1':
    var sumSprintOne = 0;
    for (var i = 0;i < cantEstudents;i++) {
      if (data[sede][year]['students'][i]['sprints'].length !== 0) {
        sprint = data[sede][year]['students'][i]['sprints'][0]['score']['tech'];
        meetTarget = ((sprint * 100) / 1800).toFixed(2);
        if (meetTarget >= 70) {
          sumSprintOne++;
        }
      }
    }
    percentSprint = ((sumSprintOne * 100) / cantEstudents).toFixed(0);
    studentCurrentlySkill.innerHTML = '<b>' + sumSprintOne + '</b>' + '<br> # students that meet the target';
    totalSkill.innerHTML = '<b>' + percentSprint + '</b>' + '<br> % of total (' + cantEstudents + ')';
    break;
  case 'sprint2':
    var sumSprintTwo = 0;
    for (var i = 0;i < cantEstudents;i++) {
      if (data[sede][year]['students'][i]['sprints'].length !== 0) {
        sprint = data[sede][year]['students'][i]['sprints'][1]['score']['tech'];
        meetTarget = ((sprint * 100) / 1800).toFixed(2);
        if (meetTarget >= 70) {
          sumSprintTwo++;
        }
      }
    }
    percentSprint = ((sumSprintTwo * 100) / cantEstudents).toFixed(0);
    studentCurrentlySkill.innerHTML = '<b>' + sumSprintTwo + '</b>' + '<br> # students that meet the target';
    totalSkill.innerHTML = '<b>' + percentSprint + '</b>' + '<br> % of total (' + cantEstudents + ')';
    break;  
  case 'sprint3':
    if (numSprint > 2) {
      var sumSprintThree = 0;
      for (var i = 0;i < cantEstudents;i++) {
        if (data[sede][year]['students'][i]['sprints'].length !== 0) {
          sprint = data[sede][year]['students'][i]['sprints'][2]['score']['tech'];
          meetTarget = ((sprint * 100) / 1800).toFixed(2);
          if (meetTarget >= 70) {
            sumSprintThree++;
          }
        }
      }
      percentSprint = ((sumSprintThree * 100) / cantEstudents).toFixed(0);
      studentCurrentlySkill.innerHTML = '<b>' + sumSprintThree + '</b>' + '<br> # students that meet the target';
      totalSkill.innerHTML = '<b>' + percentSprint + '</b>' + '<br> % of total (' + cantEstudents + ')';
    } else {
      totalSkill.innerHTML = '';
      studentCurrentlySkill.innerHTML = '';
      alert('No hay Sprint 3');
    } 
    break;
  case 'sprint4':
    if (numSprint > 3) {
      var sumSprintFour = 0;
      for (var i = 0;i < cantEstudents;i++) {
        if (data[sede][year]['students'][i]['sprints'].length !== 0) {
          sprint = data[sede][year]['students'][i]['sprints'][3]['score']['tech'];
          meetTarget = ((sprint * 100) / 1800).toFixed(2);
          if (meetTarget >= 70) {
            sumSprintFour++;
          }
        }
      }
      percentSprint = ((sumSprintFour * 100) / cantEstudents).toFixed(0);
      studentCurrentlySkill.innerHTML = '<b>' + sumSprintFour + '</b>' + '<br> # students that meet the target';
      totalSkill.innerHTML = '<b>' + percentSprint + '</b>' + '<br> % of total (' + cantEstudents + ')';
    } else {
      totalSkill.innerHTML = '';
      studentCurrentlySkill.innerHTML = '';
      alert('No hay Sprint 4');
    } 
    break;    
  }
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
    'height': 200};

  var chart = new google.visualization.PieChart(document.getElementById('grafy-enrollment'));
  chart.draw(data, options);
}

function drawPromoter() {
  var data = google.visualization.arrayToDataTable([
    ['Element', 'Density', { role: 'annotation' } ],
    ['Copper', 8.94, 'Cu' ],
    ['Silver', 10.49, 'Ag' ],
    ['Gold', 19.30, 'Au' ],
    ['Goldh', 0, 'Au' ],
  ]);

  var options = {
    'width': 300,
    'height': 200};
  var chart = new google.charts.Bar(document.getElementById('grafy-promoter'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

window.onload = function() {
  elementTab[0].addEventListener('click', show);
  elementTab[1].addEventListener('click', show);
  containesStudents.classList.add('none');
  comboBox.addEventListener('change', changeTitle);
  comboBoxTech.addEventListener('change', TechSkill);
  comboBoxHse.addEventListener('change', lifeSkill);
};

