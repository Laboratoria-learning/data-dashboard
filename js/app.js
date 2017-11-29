
window.addEventListener('load', function() {
  // Lima
  var lim20162 = document.getElementById('lim-2016-2');
  var lim20171 = document.getElementById('lim-2017-1');
  var lim20172 = document.getElementById('lim-2017-2');
  // Arequipa
  var aqp20162 = document.getElementById('aqp-2016-2');
  var aqp20171 = document.getElementById('aqp-2017-1');
  // Santiago
  var scl20162 = document.getElementById('scl-2016-2');
  var scl20171 = document.getElementById('scl-2017-1');
  var scl20172 = document.getElementById('scl-2017-2');
  // Mexico df
  var cdmx20162 = document.getElementById('cdmx-2017-1');
  var cdmx20171 = document.getElementById('cdmx-2017-2');
  var cdmx20171 = document.getElementById('cdmx-2017-2');

  var lima = document.getElementById('lima'); 
  var Arequipa = document.getElementById('Arequipa');  
  var Santiago = document.getElementById('Santiago');  
  var MexicoDf = document.getElementById('MexicoDf');   
  // Menu despleglable para las sedes
  var lima = document.getElementById('countries').children[0];
  lima.addEventListener('click', function(event) {
    event.preventDefault();
    var city = document.getElementById('countries').children[0].children[1];
    city.classList.toggle('hide');
  });
  
  var arequipa = document.getElementById('countries').children[1];
  arequipa.addEventListener('click', function(event) {
    event.preventDefault();
    var city = document.getElementById('countries').children[1].children[1];
    city.classList.toggle('hide');
  });
  
  var santiago = document.getElementById('countries').children[2];
  santiago.addEventListener('click', function(event) {
    event.preventDefault();
    var city = document.getElementById('countries').children[2].children[1];
    city.classList.toggle('hide');
  });
  
  var mexicoDf = document.getElementById('countries').children[3];
  mexicoDf.addEventListener('click', function(event) {
    event.preventDefault();
    var city = document.getElementById('countries').children[3].children[1];
    city.classList.toggle('hide');
  });

  // Mostrando información de cede Lima - lim20162
  
  lim20162.addEventListener('click', function callSede() {
    var numEnrollment = document.getElementById('numEnro');
    var arrayAlumn = data.LIM['2016-2']['students'];
    var totalAlumn = data.LIM['2016-2']['students'].length;
    var desert = document.getElementById('desert');
    var active = document.getElementById('active');

    numEnrollment.textContent = 'Total :' + totalAlumn;
    var activeStudents = 0;
    var desertStudents = 0;

    for (i = 0; i < arrayAlumn.length; i++) {     
      if (arrayAlumn[i]['active'] === true) {
        activeStudents++;
      } if (arrayAlumn[i]['active'] === false) {
        desertStudents++;
      }  
    }
    active.textContent = 'Activas :' + activeStudents ;
    desert.textContent = 'Desertoras :' + desertStudents ;
    

    // UTILIZAMOS GOOGLE CHARTS PARA GENERAR GRAFICO INTERACTIVO
    google.charts.load('current', {'packages': ['corechart']});    
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {      
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Activas', activeStudents],
        ['Desertoras', desertStudents],                 
      ]);
      var options = {'title': 'Total de Alumnas :' + totalAlumn,
        'width': 400,
        'height': 300};  
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
  });

  lim20171.addEventListener('click', function callSede() {
    var numEnrollment = document.getElementById('numEnro');
    var arrayAlumn = data.LIM['2017-1']['students'];
    var totalAlumn = data.LIM['2017-1']['students'].length;
    var desert = document.getElementById('desert');
    var active = document.getElementById('active');

    numEnrollment.textContent = 'Total :' + totalAlumn;
    var activeStudents = 0;
    var desertStudents = 0;

    for (i = 0; i < arrayAlumn.length; i++) {     
      if (arrayAlumn[i]['active'] === true) {
        activeStudents++;
      } if (arrayAlumn[i]['active'] === false) {
        desertStudents++;
      }  
    }
    active.textContent = 'Activas :' + activeStudents ;
    desert.textContent = 'Desertoras :' + desertStudents ;
    

    // UTILIZAMOS GOOGLE CHARTS PARA GENERAR GRAFICO INTERACTIVO
    google.charts.load('current', {'packages': ['corechart']});    
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {      
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Activas', activeStudents],
        ['Desertoras', desertStudents],                 
      ]);
      var options = {'title': 'Total de Alumnas :' + totalAlumn,
        'width': 400,
        'height': 300};  
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
  });



  
});


