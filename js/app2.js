var urlParams = new URLSearchParams(window.location.search);
var cityParam = urlParams.get('city');
var city;

function getCity() {
  switch (cityParam) {
    case '1':
      city = data.AQP;
      break;
    case '2':
      city = data.CDMX;
      break;
    case '3':
      city = data.LIM;
      break;
    case '4':
      city = data.SCL;
      break;
    default:
  }

  var students = city["2016-2"].students;
  var count = 0 ;

  for (var i = 0; i < students.length; i++){
    if (students[i].active) {
      count++;

    }
  }
  console.log(students);
  console.log(count);

}
window.onload = getCity;

/*
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
*/
