 
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Sedes', 'Total de alumnas'],
      ['Arequipa',     11],
      ['Santiago de Chile',      2],
      ['Ciudad de México',  2],
      ['Lima', 2],
    ]);

    var options = {
      title: 'Total de alumnas por sedes'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }