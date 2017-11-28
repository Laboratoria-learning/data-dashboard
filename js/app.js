/*
 * Funcionalidad de tu producto
 */

function enrollment(act,inac) {
  active = 0;
  inactive = 0;
  for (var i = 0; i < dataStudents.AQP["2016-2"].students.length; i++) {
    if (dataStudents.AQP["2016-2"].students[i].active === true) {
      active++;
    } else if (dataStudents.AQP["2016-2"].students[i].active === false) {
      inactive++;
    }
  }
  return enrollment[act] = {
    act: active,
    inac: inactive,
  }
}

/*function enrollment(act,inac) {
  active = 0;
  inactive = 0;
	for (var i = 0; i < dataStudents.AQP["2016-2"].students.length; i++) {
		if (dataStudents.AQP["2016-2"].students[i].active === true) {
      active++;
    } else if (dataStudents.AQP["2016-2"].students[i].active === false) {
      inactive++;
    }
	}
  return (active,inactive);
}*/

//Barras

google.charts.load('current', {
  callback: drawSeriesChart,
  packages: ['corechart']
});

function drawSeriesChart() {

  for (var i = 0; i < dataStudents.AQP["2016-2"].students.length; i++) {
    var active = 0;
    var inactive = 0;
    if (dataStudents.AQP["2016-2"].students[i].active === true) {
      active++;
    } else if (dataStudents.AQP["2016-2"].students[i].active === false) {
      inactive++;
    }
  }

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Month');
  data.addColumn('number', 'Category A');
  data.addColumn('number', 'Category B');
  data.addRows([
    ['Active', enrollment().act, 15],
    ['No Active', enrollment().inac, 15]
  ]);

  var formatPercent = new google.visualization.NumberFormat({
    pattern: '#,##0.0%'
  });
  
  var view = new google.visualization.DataView(data);
  view.setColumns([0,
    // series 0
    1, {
      calc: function (dt, row) {
        return dt.getValue(row, 1) + ' (' + formatPercent.formatValue(dt.getValue(row, 1) / (dt.getValue(row, 1) + dt.getValue(row, 2))) + ')';
      },
      type: "string",
      role: "annotation"
    },
    // series 1
    2, {
      calc: function (dt, row) {
        return dt.getValue(row, 2) + ' (' + formatPercent.formatValue(dt.getValue(row, 2) / (dt.getValue(row, 1) + dt.getValue(row, 2))) + ')';
      },
      type: "string",
      role: "annotation"
    }
  ]);

  //var ColumnChart para columnas y BarChart para filas
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(view, {
    isStacked: 'percent'
  });
}

//Aqui empieza el otro codigo
/*
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

  var data = new google.visualization.DataTable();
  data.addColumn('timeofday', 'Time of Day');
  data.addColumn('number', 'Motivation Level');

  data.addRows([
    [{v: [8, 0, 0], f: '8 am'}, 1],
    [{v: [9, 0, 0], f: '9 am'}, 2],
    [{v: [10, 0, 0], f:'10 am'}, 3],
    [{v: [11, 0, 0], f: '11 am'}, 4],
    [{v: [12, 0, 0], f: '12 pm'}, 5],
    [{v: [13, 0, 0], f: '1 pm'}, 6],
    [{v: [14, 0, 0], f: '2 pm'}, 7],
    [{v: [15, 0, 0], f: '3 pm'}, 8],
    [{v: [16, 0, 0], f: '4 pm'}, 9],
    [{v: [17, 0, 0], f: '5 pm'}, 10],
  ]);

  var options = {
    title: 'Enrollment',
    hAxis: {
      title: 'Estudiantes activas',
      format: 'h:mm a',
      viewWindow: {
        min: [7, 30, 0],
        max: [17, 30, 0]
      }
    },
    vAxis: {
      title: 'Porcentaje'
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart_div'));

  chart.draw(data, options);
}*/

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(dataStudents);
