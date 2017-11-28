/*
 * Funcionalidad de tu producto
 */
/* ****************************************************************************************************************/
window.addEventListener('load', function() {
  var view = document.getElementById('overview'),
    students = document.getElementById('students'),
    paginaview = document.getElementById('paginaView'),
    paginaStudents = document.getElementById('paginaStudents');
  students.addEventListener('click', function() {
    paginaView.classList.toggle('enabled');
    paginaView.classList.toggle('disabled');
    paginaStudents.classList.toggle('disabled');
    paginaStudents.classList.toggle('enabled');
  });
  view.addEventListener('click', function() {
    paginaView.classList.remove('disabled');
    paginaView.classList.add('enabled');
    paginaStudents.classList.remove('enabled');
    paginaStudents.classList.add('disabled');
  });
});
/* ****************************************************************************************************************/
google.charts.load('current', {'packages': ['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ['sprint', 'Puntaje'],
    ['S1', 44],
    ['S2', 40],
    ['S3', 31],
    ['S4', 12],
  ]);

  var options = {
    width: 500,
    legend: { position: 'none' },
    axes: {
      x: {
        0: { side: 'botoom'} // Top x-axis.
      }
    },
    bar: { groupWidth: '60%'}
  };

  var chart = new google.charts.Bar(document.getElementById('top_x_div'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};
/* ****************************************************************************************************************/
// Puedes hacer uso de la base de datos a través de la variable `data`
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Mushrooms', 2],
    ['Onions', 3],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 1]
  ]);

  // Set chart options
  var options = {
    'title': 'How Much Pizza I Ate Last Night',
    'width': 500,
    'height': 400
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

console.log(data);
console.log(data['AQP']);
