
// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);


//Función para gráficas de datos

google.charts.load('current', {'packages':['annotationchart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart (){
  var data = new google.visualization.DataTable();
  data.addColumn ('number','total de estudiantes')
  data.addColumn ('number','desercion')
  data.addRows(
            [
            ['Activas',80],
            ['Bajas',20]
            ]
            );
  var options = {'tittle':'Total de alumnas',
                  'width': 500,
                  'heigth':300};
  var chart = new google.visualization.AreaChart(document.getElementById('chartTotal'));
  chart.draw(data,options);
}
