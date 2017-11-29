/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

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
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title': 'How Much Pizza I Ate Last Night',
                       'width': 400,
                       'height': 300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

//el rating es por sprint del 1 al 4
/*
console.log(data.AQP["2016-2"].ratings[0].nps["promoters"]);
console.log(data.AQP["2016-2"].ratings[0].nps["passive"]);
console.log(data.AQP["2016-2"].ratings[0].nps["detractors"]);
*/


//REQUERIMIENTO #5 solo sede Arequipa, primera generación
var data = data.AQP["2016-2"].ratings;
//variables contadoras de promoters, detractors y passives
var sumProm = 0;
var sumDectr = 0;
var sumPass = 0;
for( var i = 0; i < data.length; i++){
  var prom = data[i].nps["promoters"];
    sumProm += prom;
  var detr = data[i].nps["detractors"];
    sumDectr += detr;
  var pass = data[i].nps["passive"];
    sumPass += pass; 
  };

var total = sumProm + sumDectr + sumPass;
var nps = sumProm - sumDectr;

var percentProm = Math.round(sumProm*100 / total);
var percentDetr = Math.round(sumDectr*100/ total);
var percentPass = Math.round(sumPass*100 / total);
//Aquí considero que se usa 'sumDectr + sumProm' porque el NPS solo es en
//función de ambos.
var percentNps = Math.round(nps*100 / (sumDectr+sumProm));


//nro total de prom, detrc y passives de los 4 sprints
console.log(sumProm);//300
console.log(sumDectr);//41
console.log(sumPass);//59
//% de promoters, detractors, passives y % acumulativo NPS respectivamente.

console.log(percentProm);//75%
console.log(percentDetr);//10%
console.log(percentPass);//15%
console.log(percentNps);//76%
//Nota: Pienso que si la proporción de promoters es > a la de detractors, el NPS (puntaje neto promotor) es mayor
