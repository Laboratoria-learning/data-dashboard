google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var ativa = 0;
var inativa = 0;
for(var i = 0; i < 15; i++){
  if(data.AQP["2016-2"].students[i].active == true){
    ativa += 1;
  }else{
    inativa += 1;
  }
}

function drawChart() {
var data =  google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['ativas',   ativa],
    ['invativas',  inativa]
  ]);
  var options = {
    title: 'Turma 2016-2'
  };
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
