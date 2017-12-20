//obteniendo el value asigno a una variable

var urlParams = new URLSearchParams(window.location.search);
var cityParam = urlParams.get('city');
var city;
//asignando datos dependiendo de la opción elegida antes
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



var totalStudents = city["2016-2"].students;
var count = 0 ;

  for (var i = 0; i < totalStudents.length; i++){
    if (totalStudents[i].active == false) {
      count++;

    }
  }  console.log(count);

  for (var i = 0; i < totalStudents.length; i++){
    var sprints = city["2016-2"].students[i].sprints;
    console.log(sprints);
  }

  for (var i = 0; i < totalStudents.length; i++){
    var tech = city["2016-2"].students[i].sprints[0];
    console.log(tech);
  }

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
