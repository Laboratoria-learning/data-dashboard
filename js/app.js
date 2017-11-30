var ulRegion = document.getElementById('ul-region');
var ulLim = document.getElementById('ul-lim');
var divRegion = document.getElementById('divRegion');
var lima = document.getElementById('lim');
var ulLim = document.getElementById('ul-lim');
var lim172 = document.getElementById('lim172');
var lim171 = document.getElementById('lim171');
var lim162 = document.getElementById('lim162');
var arequipa = document.getElementById('aqp');
var ulAqp = document.getElementById('ul-aqp');
var aqp171 = document.getElementById('aqp171');
var aqp162 = document.getElementById('aqp162');
var chile = document.getElementById('scl');
var ulScl = document.getElementById('ul-scl');
var scl172 = document.getElementById('scl172');
var scl171 = document.getElementById('scl171');
var scl162 = document.getElementById('scl162');
var mexico = document.getElementById('cdmx');
var ulCdmx = document.getElementById('ul-cdmx');
var cdmx172 = document.getElementById('cdmx172');
var cdmx171 = document.getElementById('cdmx171');
var previous = divRegion;
var numberBoxStudents = document.getElementById('number-box-students');
var studentsDropout = document.getElementById('students-dropout');
var cumulativeNpsBox = document.getElementById('cumulative-nps-box');
var promotersBox = document.getElementById('promoters-box');
var passiveBox = document.getElementById('passive-box');
var detractorsBox = document.getElementById('detractors-box');
var satisfationBox = document.getElementById('satisfation-box');
var teacherRatingBox = document.getElementById('teacher-rating-box');
var jediRatingBox = document.getElementById('jedi-rating-box');
var region;
var promotion;
var POINTMAX = 2100;

window.addEventListener('load', function() {
  divRegion.addEventListener('click', showAllRegions);
  lima.addEventListener('click', optionsLima);
  lim172.addEventListener('click', optionslim172);
  lim171.addEventListener('click', optionslim171);
  lim162.addEventListener('click', optionslim162);
  arequipa.addEventListener('click', optionsArequipa);
  // aqp171.addEventListener('click', optionsaqp171);
  chile.addEventListener('click', optionsChile);
  mexico.addEventListener('click', optionsMexico);
  region = lim172.dataset.region;
  promotion = lim172.dataset.promotion;
  showMain(region, promotion);
  cumulativeNps(region,promotion);
  studentsSatisfation(region, promotion);
  jediRating(region, promotion);
  teacherRating(region, promotion);
});

function showAllRegions() {
  // ulRegion.classList.toggle('hidden');
  ulRegion.classList.toggle('hidden');
  paintOptions(lim172, previous);
  // paintOptions(divRegion, previous);
  ulAqp.classList.toggle('hidden');
  ulScl.classList.toggle('hidden');
  ulCdmx.classList.toggle('hidden');
};
function paintOptions(option, previous) {
  option.classList.add('yellow');
  if (option !== previous)
    previous.classList.remove('yellow');
}
function showMain(region, promotion) {
  showTotalStudents(region, promotion);
}
function optionsLima() {
  paintOptions(lima, previous);
  previous = lima;
  ulLim.classList.toggle('hidden');
}

function optionslim172() {
  region = lim172.dataset.region;
  promotion = lim172.dataset.promotion;
  paintOptions(lim172, previous);
  previous = lim172;
  showMain(region, promotion);
  showTotalStudents(region, promotion);
  cumulativeNps(region, promotion);
  studentsSatisfation(region, promotion);
  teacherRating(region, promotion);
  jediRating(region, promotion);
  // showOverGoal(region, promotion);
}

function optionslim171() {
  region = lim171.dataset.region;
  promotion = lim171.dataset.promotion;
  paintOptions(lim171, previous);
  previous = lim171;
  showMain(region, promotion);
  showTotalStudents(region, promotion);
  cumulativeNps(region, promotion);
  studentsSatisfation(region, promotion);
  teacherRating(region, promotion);
  jediRating(region, promotion);
  // showOverGoal(region, promotion);
}
function optionslim162() {
  region = lim162.dataset.region;
  promotion = lim162.dataset.promotion;
  paintOptions(lim162, previous);
  previous = lim162;
  showMain(region, promotion);
  showTotalStudents(region, promotion);
  cumulativeNps(region, promotion);
  studentsSatisfation(region, promotion);
  teacherRating(region, promotion);
  jediRating(region, promotion);
}
function optionsArequipa() {
  paintOptions(arequipa, previous);
  previous = arequipa;
  ulAqp.classList.toggle('hidden');
}
function optionsChile() {
  paintOptions(chile, previous);
  previous = chile;
  ulScl.classList.toggle('hidden');
}
function optionsMexico() {
  paintOptions(mexico, previous);
  previous = mexico;
  ulCdmx.classList.toggle('hidden');
}
/* Funnción para determinar estudiantes actuales y que desertaron*/
function showTotalStudents(region, promotion) {
  var current = 0;
  var deserted = 0;

  for (var students in data [region][promotion]) {
    if (students === 'students') {
      for (var eachStudent in data [region][promotion][students]) {
        var active = data[region][promotion][students][eachStudent]['active'];
        (active) ? current++ : deserted++;
      }
    }
  }
  drawTotalStudents(current, deserted);

  numberBoxStudents.textContent = current;
  numberBoxStudents.classList.toggle('number-box-int');
  studentsDropout.textContent = parseFloat(deserted / (current + deserted) * 100).toFixed(0) + '%';
}

// Calculando el Net Promoter Score (NPS) promedio de los sprints cursados
function cumulativeNps(region, promotion) {
  var promoters = 0;
  var detractors = 0;
  var arrayNps = [];
  var arrayPromoters = [];
  var arrayDetractors = [];
  var arrayPassive = [];
  var totalNps = 0;
  var totalPromoters = 0;
  var totalDetractors = 0;
  var totalPassive = 0;
  var s1 = 0;
  var s2 = 0;
  var s3 = 0;
  var s4 = 0;
  var ratings = data[region][promotion]['ratings'];
  for (var i = 0; i < ratings.length; i++) {
    arrayPromoters[i] = ratings[i]['nps']['promoters'];
    arrayDetractors[i] = ratings[i]['nps']['detractors'];
    arrayPassive[i] = ratings[i]['nps']['passive'];
    arrayNps[i] = ratings[i]['nps']['promoters'] + ratings[i]['nps']['detractors'];
  }
  for (var i = 0; i < arrayNps.length; i++) {
    totalPromoters = totalPromoters + arrayPromoters[i];
    totalDetractors = totalPromoters + arrayDetractors[i];
    totalPassive = totalPromoters + arrayPassive[i];
    totalNps = totalNps + arrayNps[i];
  }
  
  totalNps = parseInt(totalNps / arrayNps.length) + '%';
  totalPromoters = parseInt(totalPromoters / arrayPromoters.length) + '%';
  totalDetractors = parseInt(totalDetractors / arrayDetractors.length) + '%';
  totalPassive = parseInt(totalPassive / arrayPassive.length) + '%';

  cumulativeNpsBox.textContent = totalNps;
  cumulativeNpsBox.classList.add('number-box-int');
  promotersBox.textContent = totalPromoters;
  detractorsBox.textContent = totalDetractors;
  passiveBox.textContent = totalPassive;
  
  
  if (arrayNps.length === 2) {
    s1 = arrayNps[0];
    s2 = arrayNps[1];
  } else if (arrayNps.length === 4) {
    s1 = arrayNps[0];
    s2 = arrayNps[1];
    s3 = arrayNps[2];
    s4 = arrayNps[3];
  }
  
  drawNetPromoter(s1, s2, s3, s4);
}

function showOverGoal(region, promotion) {
  var students = data[region][promotion]['students'];
  var nsprint;
  var hse;
  var tech;
  var scoresTotal;
  var countS1 = 0;
  var countS2 = 0;
  var countS3 = 0;
  var countS4 = 0;

  for (var i = 0; i < students.length; i++) {
    if (students[i]['active']) {
      var sprint = students[i]['sprints'];
      for (var j = 0; j < sprint.length;j++) {
        nsprint = sprint[j]['number'];
         
        hse = sprint[j]['score']['hse'];
        tech = sprint[j]['score']['tech'];
        scoresTotal = hse + tech;
        if (scoresTotal >= 2100) {        
          console.log('nsprint' + nsprint);
          console.log(scoresTotal);  
        }      
      }
    }
  }
  console.log(count);
}

/* Función para el porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.*/
function studentsSatisfation(region, promotion) {
  var ratings = data[region][promotion]['ratings'];
  var cumple = [];
  var total = 0;
  var s1 = 0;
  var s2 = 0;
  var s3 = 0;
  var s4 = 0;
  for (var i = 0; i < ratings.length; i++) {
    cumple[i] = ratings[i]['student']['cumple'];
  }
  for (var i = 0; i < cumple.length; i++) {
    total = total + cumple[i];
  }
  total = parseInt(total / cumple.length);
  satisfationBox.textContent = total;
  
  if (cumple.length === 2) {
    s1 = cumple[0];
    s2 = cumple[1];
  } else if (cumple.length === 4) {
    s1 = cumple[0];
    s2 = cumple[1];
    s3 = cumple[2];
    s4 = cumple[3];
  }
  drawStudentSatisfation(s1, s2, s3, s4);
}

/* Funcion de la puntuación promedio de l@s profesores. */
function teacherRating(region, promotion) {
  var s1 = 0;
  var s2 = 0;
  var s3 = 0;
  var s4 = 0;
  var arrayteacherRating = [];
  var ratings = data[region][promotion]['ratings'];
  var totalTeacherRating = 0;

  for (var i = 0; i < ratings.length; i++) {
    arrayteacherRating[i] = ratings[i]['teacher'];    
  }
  for (var i = 0; i < arrayteacherRating.length; i++) {
    totalTeacherRating = totalTeacherRating + arrayteacherRating[i];
  }
  totalTeacherRating = totalTeacherRating / arrayteacherRating.length;
  teacherRatingBox.textContent = totalTeacherRating;

  if (arrayteacherRating.length === 2) {
    s1 = arrayteacherRating[0];
    s2 = arrayteacherRating[1];
  } else if (arrayteacherRating.length === 4) {
    s1 = arrayteacherRating[0];
    s2 = arrayteacherRating[1];
    s3 = arrayteacherRating[2];
    s4 = arrayteacherRating[3];
  }

  drawTeacherRating(s1, s2, s3, s4);
}
/* Funcion de la puntuación promedio de l@s jedi masters. */
function jediRating(region, promotion) {
  var s1 = 0;
  var s2 = 0;
  var s3 = 0;
  var s4 = 0;
  var ratings = data[region][promotion]['ratings'];
  var arrayJedi = [];
  var total = 0;
  for (var i = 0; i < ratings.length; i++) {
    arrayJedi[i] = ratings[i]['jedi'];
  }
  for (var i = 0; i < arrayJedi.length; i++) {
    total = total + arrayJedi[i];
  }
  total = (total / arrayJedi.length);
  total = total.toFixed(1);
  jediRatingBox.textContent = total;

  if (arrayJedi.length === 2) {
    s1 = arrayJedi[0];
    s2 = arrayJedi[1];
  } else if (arrayJedi.length === 4) {
    s1 = arrayJedi[0];
    s2 = arrayJedi[1];
    s3 = arrayJedi[2];
    s4 = arrayJedi[3];
  }
  drawJediRatings(s1, s2, s3, s4);
}

/* Funcion de la puntuación promedio de l@s jedi masters. */
function jediRating(region, promotion) {
  var ratings = data[region][promotion]['ratings'];
  var array = [];
  var total = 0;
  for (var i = 0; i < ratings.length; i++) {
    array[i] = ratings[i]['jedi'];
  }
  for (var i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  total = (total / array.length);
  total = total.toFixed(1);
  jediRatingBox.textContent = total;
}
/*************************GRAFICOS************/
function drawTotalStudents(current, deserted) {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var dataTest = new google.visualization.DataTable();
    dataTest.addColumn('string', 'Topping');
    dataTest.addColumn('number', 'Slices');
    dataTest.addRows([
      ['Inscritas', current],
      ['Desertaron', deserted],
    ]);
    var options = {
      'colors': ['#109618', '#dc3912'],
      'width': 320,
      'height': 150 };
    var chart = new google.visualization.PieChart(document.getElementById('chart_div_enrollment'));
    chart.draw(dataTest, options);
  }
}


function drawNetPromoter(s1, s2, s3, s4) {
  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.setOnLoadCallback(drawBasic);
  console.log(s1);
  console.log(s2);
  function drawBasic() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'NPS');
    data.addRows([
      [0, 0], [1, s1], [2, s2], [3, s3], [4, s4]
    ]);
    var options = {
      hAxis: {
        title: 'SPRINT' 
      },
    };
    var chart = new google.visualization.LineChart(document.getElementById('chart_div_nps'));
    chart.draw(data, options);
  }
}

function drawStudentSatisfation(s1, s2, s3, s4) { 
  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Sprint', 'Porcentaje', { role: 'style' } ],
      ['S1', s1, '#b87333'],
      ['S2', s2, 'silver'],
      ['S3', s3, 'gold'],
      ['S4', s4, 'color: #e5e4e2']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      { calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation' },
      2]);

    var options = {
      width: 300,
      height: 200,
      bar: {groupWidth: '75%'},
      legend: { position: 'none' },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_student_satisfation'));
    chart.draw(view, options);
  }
}

function drawTeacherRating(s1, s2, s3, s4) { 
  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Sprint', 'Porcentaje', { role: 'style' } ],
      ['S1', s1, '#b87333'],
      ['S2', s2, 'silver'],
      ['S3', s3, 'gold'],
      ['S4', s4, 'color: #e5e4e2']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      { calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation' },
      2]);

    var options = {
      width: 300,
      height: 200,
      bar: {groupWidth: '75%'},
      legend: { position: 'none' },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_teacher_rating'));
    chart.draw(view, options);
  }
}

function drawJediRatings(s1, s2, s3, s4) { 
  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Sprint', 'Porcentaje', { role: 'style' } ],
      ['S1', s1, '#b87333'],
      ['S2', s2, 'silver'],
      ['S3', s3, 'gold'],
      ['S4', s4, 'color: #e5e4e2']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      { calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation' },
      2]);

    var options = {
      width: 300,
      height: 200,
      bar: {groupWidth: '75%'},
      legend: { position: 'none' },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_jedi_rating'));
    chart.draw(view, options);
  }
}