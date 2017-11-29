// Carga la visualización API y el paquete corechart.
google.charts.load('current', {'packages': ['corechart']});

// Establece una llamada que se ejecuta cuando la API es cargada.
google.charts.setOnLoadCallback(drawChart);

// Dibuja el gráfico
function drawChart() {
  // Crea los datos del gráfico.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Promoters', percentProm],
    ['Detractors', percentDetr],
    ['Passive', percentPass],
  ]);

  // Establece opciones del gráfico
  var options = {'title': 'NET PROMOTER SCORE (NPS)',
    'width': 400,
    'height': 300};
                
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

// REQUERIMIENTO #5 solo sede Arequipa, primera generación
var data = data.AQP['2016-2'].ratings;
// variables contadoras de promoters, detractors y passives
var sumProm = 0;
var sumDectr = 0;
var sumPass = 0;
for (var i = 0; i < data.length; i++) {
  var prom = data[i].nps['promoters'];
  sumProm += prom;
  var detr = data[i].nps['detractors'];
  sumDectr += detr;
  var pass = data[i].nps['passive'];
  sumPass += pass; 
};

var total = sumProm + sumDectr + sumPass;
var nps = sumProm - sumDectr;

var percentProm = Math.round(sumProm * 100 / total);
var percentDetr = Math.round(sumDectr * 100 / total);
var percentPass = Math.round(sumPass * 100 / total);
// Aquí considero que se usa 'sumDectr + sumProm' porque el NPS solo es en
// función de ambos.
var percentNps = Math.round(nps * 100 / (sumDectr + sumProm));


// nro total de prom, detrc y passives de los 4 sprints
console.log(sumProm);// 300
console.log(sumDectr);// 41
console.log(sumPass);// 59
// % de promoters, detractors, passives y % acumulativo NPS respectivamente.

console.log(percentProm);// 75%
console.log(percentDetr);// 10%
console.log(percentPass);// 15%
console.log(percentNps);// 76%
// Nota: Pienso que si la proporción de promoters es > a la de detractors, el NPS (puntaje neto promotor) es mayor
// Con este código se puede cambiar tanto de sede como de generación
// pero lo ideal es hacer una función.
