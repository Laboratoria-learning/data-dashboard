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
  showOverGoal(region, promotion)
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
  cumulativeNps(region,promotion);
  studentsSatisfation(region, promotion);
  jediRating(region, promotion);
  showOverGoal(region, promotion);
}

function optionslim171() {
  region = lim171.dataset.region;
  promotion = lim171.dataset.promotion;
  paintOptions(lim171, previous);
  previous = lim171;
  region = lim171.dataset.region;
  promotion = lim171.dataset.promotion;
  showMain(region, promotion);
  showTotalStudents(region, promotion);
  cumulativeNps(region,promotion);
  studentsSatisfation(region, promotion);
  jediRating(region, promotion)
  // showOverGoal(region, promotion);
}
function optionslim162() {
  paintOptions(lim162, previous);
  previous = lim162;
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
  studentsDropout.textContent = parseFloat(deserted/(current + deserted)*100).toFixed(0) + '%';
}

function cumulativeNps(region, promotion) {
var promoters = 0;
var detractors = 0;
var arrayNps=[];
var arrayPromoters=[];
var arrayDetractors=[];
var arrayPassive=[];
var totalNps = 0;
var totalPromoters = 0;
var totalDetractors = 0;
var totalPassive = 0;
var ratings = data[region][promotion]['ratings'];
for(var i = 0; i<ratings.length; i++) {
  arrayPromoters[i] = ratings[i]['nps']['promoters'];
  arrayDetractors[i] = ratings[i]['nps']['detractors'];
  arrayPassive[i] = ratings[i]['nps']['passive'];
  arrayNps[i] = ratings[i]['nps']['promoters']+ratings[i]['nps']['detractors'];
}
for(var i = 0; i<arrayNps.length; i++ ) {
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
drawNetPromoter();
}

function showOverGoal(region, promotion) {
  var students = data[region][promotion]['students'];
  var nsprint;
  var hse;
  var tech;
  var count = 0;
  var scoresTotal;
  var sprint1 = [];
  var sprint2 = [];
  var sprint3 = [];
  var sprint4 = [];
  var sprintTotal=[];
  for (var i = 0; i < students.length; i++) {
    if (students[i]['active']) {
      var sprint = students[i]['sprints'];
      /*sprint1.push(students[i]['sprints'][0]['score']['tech'] + students[i]['sprints'][0]['score']['hse']);
      sprint2.push(students[i]['sprints'][1]['score']['tech'] + students[i]['sprints'][1]['score']['hse']);
      sprint3.push(students[i]['sprints'][2]['score']['tech'] + students[i]['sprints'][2]['score']['hse']);
      sprint4.push(students[i]['sprints'][3]['score']['tech'] + students[i]['sprints'][3]['score']['hse']);*/
       }
       if(students[i]['sprints'][0]['score']['tech'] + students[i]['sprints'][0]['score']['hse'] >= 2100){
         count = count + 1;
         console.log(count);
       }
    }
  }

/* Función para */

function studentsSatisfation(region, promotion){
  var ratings = data[region][promotion]['ratings'];
  var cumple =[];
  var  total = 0;
  for(var i=0; i<ratings.length; i++){
    cumple[i] = ratings[i]['student']['cumple'];
  }
  for(var i=0; i<cumple.length; i++){
    total = total + cumple[i];
  }
  total = parseInt(total / cumple.length);
  satisfationBox.textContent = total;
}

function jediRating(region, promotion){
  var ratings = data[region][promotion]['ratings'];
  var array = [];
  var total = 0;
  for(var i=0; i<ratings.length; i++){
    array[i] = ratings[i]['jedi'];
  }
  for(var i=0; i<array.length; i++){
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
  function drawBasic() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'NPS');
    data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18]
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
