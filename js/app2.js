// Realizando variables globales para un uso más práctico
var locationContainer = document.body.children[0].children[1];

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

locationContainer.addEventListener("click", printData)
var students = city["2016-2"].students;

var totalStudents = city["2016-2"].students.length;
var count = 0 ;
  for (var i = 0; i < students.length; i++){
    if (students[i].active == false) {
    count++;
    }
}

function printData() {
  var printCount = document.createElement("p")
      printCount.innerText=(count)
      locationContainer.appendChild(printCount)
  var printTotal = document.createElement("p")
      printCount.innerText=(totalStudents)
      locationContainer.appendChild(printCount)

}



for (var i = 0; i < students.length; i++){
  var sprints = city["2016-2"].students[i].sprints;
  console.log(sprints);
}

for (var i = 0; i < students.length; i++){
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
