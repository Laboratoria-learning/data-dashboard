/*
 * Funcionalidad de tu producto
 */

/*selectSede[sede] = {
  sede: currentSede,
  }
*/
var inputs = document.getElementsByTagName('input');
//var currentSede = 'LIM';
 //Sedes 
 //AQP, CDMX, LIM, SCL
function selectSede() {
  var currentSede = 'LIM';
  for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('click',function() {
      currentSede = this.value;
      //console.log(currentSede);
      //return currentSede;
    })
    return currentSede;
  }
  //return currentSede;
}
var sede = selectSede();
function enrollment(act,inac) {
  active = 0;
  inactive = 0;
  for (var i = 0; i < dataStudents[sede]['2016-2'].students.length; i++) {
    if (dataStudents[sede]['2016-2'].students[i].active === true) {
      active++;
    } else if (dataStudents[sede]['2016-2'].students[i].active === false) {
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

console.log(selectSede());

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(dataStudents);
