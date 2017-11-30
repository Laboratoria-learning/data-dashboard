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
  data.addColumn('number', 'X');
  data.addColumn('number', 'Sprints');
   data.addColumn('number', 'Cats');

  data.addRows([
    [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
    [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
    [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
    [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
    [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
    [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
    [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
    [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
    [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
    [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
    [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
    [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
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
      title: 'My Daily Activities'
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
