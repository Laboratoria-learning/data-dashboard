
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Sedes', 'Total de alumnas'],
      ['Arequipa',     30],
      ['Santiago de Chile',      95],
      ['Ciudad de México',  70],
      ['Lima', 66],
    ]);

    var options = {
      title: 'Total de alumnas por sedes'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Desercion', 'Total y porcentaje'],
        ['Arequipa',     51],
        ['Santiago de Chile',      27],
        ['Ciudad de México',  18],
        ['Lima', 59],
      ]);

      var options = {
        title: 'Total de alumnas que desertaron por sede',
        pieHole: 0.4,
      };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    };
  };