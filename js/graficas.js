window.addEventListener('load', function() {
// cambiar el nombre de sede, seleccionando la generacion
  var selectSprint = document.getElementById('select-sprint');
  selectSprint.addEventListener('change', function() {
    var site = selectSprint.options[selectSprint.selectedIndex].getAttribute('data-site');
    var sede = selectSprint.options[selectSprint.selectedIndex].getAttribute('data-sede');
    var generation = selectSprint.value;  
    document.getElementById('site').textContent = site;

    var inscritas = document.querySelector('.total-enrollment');


    // GOOGLE-CHARTS
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChartEnrollment);
    google.charts.setOnLoadCallback(drawChartAchievement);
    google.charts.setOnLoadCallback(drawNetPromoterScore);
    google.charts.setOnLoadCallback(drawChartNotaHse);
    // 1era gráfica de alumnas inscritas
    function drawChartEnrollment() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['active', studentSedes(sede, generation)[0]],
        ['inactive', studentSedes(sede, generation)[1]],
      ]);
      var options = {'title': 'Students',
        'width': 250,
        'height': 150,
        'is3D': false
      };
      var chart = new google.visualization.PieChart(document.getElementById('enrollment-graph'));
      chart.draw(data, options);
    }

    function drawChartAchievement() {
      var data = google.visualization.arrayToDataTable([
        ['sprints', 'rendimiento %'],
        ['S1', achievement(sede, generation)[0]],
        ['S2', achievement(sede, generation)[1]],
        ['S3', achievement(sede, generation)[2]],
        ['S4', achievement(sede, generation)[3]]
      ]);
      var options = {
        title: 'Achievement',
        seriesType: 'bars',
        series: {5: {type: 'line'}}
      };

      var chart = new google.visualization.ComboChart(document.getElementById('achievement-graph'));
      chart.draw(data, options);
    }
    
    
    function drawNetPromoterScore() {
      var data = google.visualization.arrayToDataTable([
        ['sprints', 'nps %'],
        ['S1', netPromoterScore(sede, generation)[0]],
        ['S2', netPromoterScore(sede, generation)[1]],
        ['S3', netPromoterScore(sede, generation)[2]],
        ['S4', netPromoterScore(sede, generation)[3]]
      ]);
    
      var options = {
        title: 'Net Promoter Score',
        seriesType: 'bars',
        series: {5: {type: 'line'}}
      };
    
      var chart = new google.visualization.ComboChart(document.getElementById('promote-graph'));
      chart.draw(data, options);
    }


    function drawChartNotaHse() {
      var data = google.visualization.arrayToDataTable([
        ['cantidad', 'alumnas'],
        ['2013', notaHse(sede, generation)[0]],
        ['2014', notaHse(sede, generation)[1]],
        ['2015', notaHse(sede, generation)[2]],
        ['2016', notaHse(sede, generation)[3]]
      ]);

      var options = {
        title: 'HSE',
        hAxis: {title: 'sprints'},
        vAxis: {minValue: 0}
      };

      var chart = new google.visualization.AreaChart(document.getElementById('tech-graph'));
      chart.draw(data, options);
    }
  });
});
 
  