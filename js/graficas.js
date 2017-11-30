window.addEventListener('load', function() {
  var listado = document.getElementById('listbox');

  listado.addEventListener('change', function() {
    var sede = listado.options[listado.selectedIndex].getAttribute('data-sede');
    var generacion = listado.value;

    
    google.charts.load('current', {'packages': ['corechart']});
   
    // Establece una llamada que se ejecuta cuando la API es cargada.
    google.charts.setOnLoadCallback(drawChart1);
    google.charts.setOnLoadCallback(drawChart2);
    google.charts.setOnLoadCallback(drawChart3);
    google.charts.setOnLoadCallback(drawChart4);
    google.charts.setOnLoadCallback(drawChart5);
    google.charts.setOnLoadCallback(drawChart6);
    google.charts.setOnLoadCallback(drawChart7);
    google.charts.setOnLoadCallback(drawChart8);
    google.charts.setOnLoadCallback(drawChart9);
   
    
    function drawChart1() {
      // Crea los datos del gráfico.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Activo', estadoEstudiante(sede, generacion)[0]],
        ['desertores', estadoEstudiante(sede, generacion)[1]],
      ]);
      var options = {'title': 'NET PROMOTER SCORE (NPS)',
        'width': 400,
        'height': 300};
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
    function drawChart2() {
      // Crea los datos del gráfico.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['desiertos', PorcentajeDesiertos(sede, generacion)],
        ['presentes', PorcentajePresentes(sede, generacion)],]);
      var options = {'title': 'NET PROMOTER SCORE (NPS)',
        'width': 400,
        'height': 300};
       var chart = new google.visualization.PieChart(document.getElementById('draw-desercion'));
      chart.draw(data, options);
    }
    function drawChart3() {
      // Crea los datos del gráfico.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Activo', estadoEstudiante(sede, generacion)[0]],
        ['desertores', estadoEstudiante(sede, generacion)[1]],
      ]);
      var options = {'title': 'NET PROMOTER SCORE (NPS)',
        'width': 400,
        'height': 300};
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
  });
});