//Barras
var sprints = dataStudents[sede][promo].ratings.length;
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

//Lineas Achievement
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineColors);

function drawLineColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Sprints');

      data.addRows(achievementArray());

      var options = {
        hAxis: {
          title: 'Sprints'
        },
        vAxis: {
          title: 'Achievement'
        },
        colors: ['#ffc107']
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div_achievement'));
      chart.draw(data, options);
    }


//Lineas Promoter
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineColorsPromoter);

function drawLineColorsPromoter() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Net Promoter Score');
  data.addColumn('number', 'Sprints');

  data.addRows(achievementArray());

  var options = {
    hAxis: {
      title: 'Sprints'
    },
    vAxis: {
      title: 'Net Promoter Score'
    },
    colors: ['#ffc107']
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div_promoter'));
  chart.draw(data, options);
}

//Pie Charts de Tech SKills

  google.charts.setOnLoadCallback(drawChartTech);

  function drawChartTech() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      colors : ['#ffc107','ff0000']
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div_tech'));

    chart.draw(data, options);
  }

//Pie Charts de Soft SKills

google.charts.setOnLoadCallback(drawChartSoft);

function drawChartSoft() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    title: 'My Daily Activities'
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart_div_soft'));

  chart.draw(data, options);
}

//Lineas Satisfaction
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineColorsSatisfaction);

function drawLineColorsSatisfaction() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Sprints');
   data.addColumn('number', 'Cats');

  data.addRows([
    [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
    [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
    [12, 30, 22]
  ]);

  var options = {
    hAxis: {
      title: 'Sprints'
    },
    vAxis: {
      title: 'Achievement'
    },
    colors: ['#a52714']
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div_satisfaction'));
  chart.draw(data, options);
}

//Lineas Teacher
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineColorsTeacher);

function drawLineColorsTeacher() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Sprints');
   data.addColumn('number', 'Cats');

  data.addRows([
    [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
    [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
    [12, 30, 22]
  ]);

  var options = {
    hAxis: {
      title: 'Sprints'
    },
    vAxis: {
      title: 'Achievement'
    },
    colors: ['#a52714']
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div_teacher'));
  chart.draw(data, options);
}

//Lineas Jedi
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineColorsJedi);

function drawLineColorsJedi() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Sprints');
   data.addColumn('number', 'Cats');

  data.addRows([
    [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
    [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
    [12, 30, 22]
  ]);

  var options = {
    hAxis: {
      title: 'Sprints'
    },
    vAxis: {
      title: 'Achievement'
    },
    colors: ['#a52714']
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div_jedi'));
  chart.draw(data, options);
}
