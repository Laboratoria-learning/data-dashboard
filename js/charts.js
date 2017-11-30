//Barras

//Charts Enrollment
google.charts.load('current', {
  callback: drawSeriesChart,
  packages: ['corechart']
});

function drawSeriesChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Month');
  data.addColumn('number', 'Category A');
  data.addColumn('number', 'Category B');
  data.addRows([
    ['Activas', enrollment().act, enrollment().act+enrollment().inac],
    ['Deserción', enrollment().inac, enrollment().act+enrollment().inac]
  ]);

  var formatPercent = new google.visualization.NumberFormat({
    pattern: '#,##0.0%'
  });
  
  var view = new google.visualization.DataView(data);


  //var ColumnChart para columnas y BarChart para filas
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(view, {
    isStacked: 'percent'
  });
}
