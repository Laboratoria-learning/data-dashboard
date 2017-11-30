
window.onload = load;


function load() {
  // CREANDO VARIABLES GLOBALES, INCLUYEN LOS ARRAYS POR SEDE
  // Lima
  var lim20162 = document.getElementById('lim-2016-2');
  var lim20171 = document.getElementById('lim-2017-1');
  var lim20172 = document.getElementById('lim-2017-2');
  var arrayAlumn20162L = data.LIM['2016-2']['students'];
  var arrayAlumn20171L = data.LIM['2017-1']['students'];
  var arrayAlumn20172L = data.LIM['2017-2']['students'];
 

  var alumn20171L = data.LIM['2017-1']['ratings'];
  var alumn20162L = data.LIM['2016-2']['ratings'];
  var alumn20171L = data.LIM['2017-1']['ratings'];
  var alumn20172L = data.LIM['2017-2']['ratings'];
  var alumn20162A = data.LIM['2016-2']['ratings'];
  var alumn20171A = data.LIM['2017-1']['ratings'];
  var alumn20162S = data.LIM['2016-2']['ratings'];
  var alumn20171S = data.LIM['2017-1']['ratings'];
  var alumn20172S = data.LIM['2017-2']['ratings'];
  var alumn20171M = data.LIM['2017-1']['ratings'];
  var alumn20172M = data.LIM['2017-2']['ratings'];

  // Arequipa
  var aqp20162 = document.getElementById('aqp-2016-2');
  var aqp20171 = document.getElementById('aqp-2017-1');
  var arrayAlumn20162A = data.AQP['2016-2']['students'];
  var arrayAlumn20171A = data.AQP['2017-1']['students'];
  // Santiago
  var scl20162 = document.getElementById('scl-2016-2');
  var scl20171 = document.getElementById('scl-2017-1');
  var scl20172 = document.getElementById('scl-2017-2');
  var arrayAlumn20162S = data.SCL['2016-2']['students'];
  var arrayAlumn20171S = data.SCL['2017-1']['students'];
  var arrayAlumn20172S = data.SCL['2017-2']['students'];
  // Mexico df
  var cdmx20162 = document.getElementById('cdmx-2017-1');
  var cdmx20171 = document.getElementById('cdmx-2017-2');
  var arrayAlumn20171M = data.CDMX['2017-1']['students'];
  var arrayAlumn20172M = data.CDMX['2017-2']['students'];

  // VARIABLES USADAS PARA EL TOTAL
  var lima = document.getElementById('lima');
  var Arequipa = document.getElementById('Arequipa');
  var Santiago = document.getElementById('Santiago');
  var MexicoDf = document.getElementById('MexicoDf');

  var selectSede = document.getElementById('select-sede');

  // MOSTRANDO EL TOTAL DE ALUMNAS INSCRITAS Y DESERTADAS
  // UTILIZAMOS GOOGLE CHARTS PARA GENERAR GRAFICO INTERACTIVO
  google.charts.load('current', { 'packages': ['corechart'] });
  selectSede.addEventListener('change', selectionSede);

  function selectionSede(event) {
    switch (true) {
    case event.target.value === '':
      event.innerHTML = '';
      break;
    case event.target.value === 'lim-2016-2':
    event.innerHTML = '';
      google.charts.setOnLoadCallback(drawChartTotalAlu);
      google.charts.setOnLoadCallback(drawChartSkill);
      drawChartPromeTeacher(alumn20162L);
      drawChartPromeJedi(alumn20162L);  
      break;
    case event.target.value === 'lim-2017-1':
    event.innerHTML = '';
      drawChartPromeJedi(alumn20171L);
      drawChartPromeTeacher(alumn20171L);
      break;
    case event.target.value === 'lim-2017-2':
    event.innerHTML = '';
      drawChartPromeJedi(alumn20172L);
      drawChartPromeTeacher(alumn20172L);
      break;
    case event.target.value === 'aqp-2016-2':
    event.innerHTML = '';
      drawChartPromeJedi(alumn20162LA);
      drawChartPromeTeacher(alumn20162A);
      break;
    case event.target.value === 'aqp-2017-1':
    event.innerHTML = '';
      drawChartPromeJedi(alumn20171A);
      drawChartPromeTeacher(alumn20171A);
      break;
    case event.target.value === 'scl-2016-2':
    event.innerHTML = '';
      drawChartPromeJedi(alumn20162S);
      drawChartPromeTeacher(alumn20162S);
      break;
    case event.target.value === 'scl-2017-1':
    event.innerHTML = '';
      drawChartPromeJedi(alumn20171S);
      drawChartPromeTeacher(alumn20171S);
      break;
    case event.target.value === 'scl-2017-2':
    event.innerHTML = '';
      drawChartPromeJedi(alumn20172S);
      drawChartPromeTeacher(alumn20172S);
      break;
    case event.target.value === 'cdmx-2017-1':
    event.innerHTML = '';
      drawChartPromeJedi(alumn20171M);
      drawChartPromeTeacher(alumn20171M);
      break;
    case event.target.value === 'cdmx-2017-2':
    event.innerHTML = '';
      drawChartPromeJedi(alumn20172M);
      drawChartPromeTeacher(alumn20172M);
      break;
    }
  }


  drawChartPromeTeacher;
  function drawChartTotalAlu() {
    var totalAlumn = 0;
    var activeStudents = 0;
    var desertStudents = 0;
    for (i = 0; i < arrayAlumn20162L.length; i++) {
      if (arrayAlumn20162L[i]['active'] === true) {
        activeStudents++;
      } if (arrayAlumn20162L[i]['active'] === false) {
        desertStudents++;
      } totalAlumn = activeStudents + desertStudents;
    }
    // Grafico de google
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Activas', activeStudents],
      ['Desertoras', desertStudents],
    ]);
    var options = {
      'title': 'Total de Alumnas :' + totalAlumn,
      'width': 400,
      'height': 300
    };
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
  // FUNCION HSE Y TECH
  function drawChartSkill() {
    for (i = 0; i < arrayAlumn20162L.length; i++) {
      if (arrayAlumn20162L[i]['sprint']) {
        Console.log(arrayAlumn20162L[i]['sprint']);
      }
    }


    arrayAlumn20162L.length;
    var sprint = arrayAlumn20162L;
    var sprint = arrayAlumn20162L;
    var techSkill = document.createElement('p');

    // grafico de google
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Activas', 1],
      ['Desertoras', 0],
    ]);
    var options = {
      'title': 'Meta + 70% de  HSE y tech. :' + 2,
      'width': 400,
      'height': 300
    };
    var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
  }


  function drawChartPromeTeacher(sede) {
    var teach = document.getElementById('teach');
    var teacher = 0;
    for (i = 0; i < sede.length; i++) {
      
      if (sedeL[i]['teacher']) {
        teacher += (sede[i]['teacher']) / 2;
      }
    }
    teach.innerHTML = teacher + '<br>' + 'OVERAL TEACHER RATING';
  }

  function drawChartPromeJedi(sede) {
    var jedi = document.getElementById('jedi');
    var jedis = 0;
    for (i = 0; i < sede.length; i++) {
      if (sede[i]['jedi']) {
        jedis += parseInt((sede[i]['jedi']) / 2);
      }
    }
    jedi.innerHTML = jedis + '<br>' + 'OVERAL JEDI RATING';
  }
}


