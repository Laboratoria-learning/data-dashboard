
/* Cantidad de Estudiantes activas por sede*/
function activeStudents(sede) {
  var contadorActivas = 0;
  var lasede = data[sede];
  var contadorDesercion = 0;
  for (var gene in lasede) {
    contadorActivas += estadoEstudiante(sede, gene)[0];
  }
  return contadorActivas;
}
  
/* funcion que retorna un array, con información sobre la cantidad de estudiantes activas y la cantidad de
  estudiantes que desertaron*/
function estadoEstudiante(sede, generacion) {
  var arrayStudentGene = data[sede][generacion]['students'];
  var presentes = 0;
  var desiertas = 0;
  var Array = [];
  for (i = 0; i < arrayStudentGene.length; i++) {
    if (arrayStudentGene[i].active === true) {
      presentes++;
    } else {
      desiertas++;
    }
  }
  Array.push(presentes);
  Array.push(desiertas);
  return Array;// [presentes,desiertas]
}
// console.log(studentsActivs('AQP','2016-2'));
// console.log(activeStudents('LIM'));

/* funcion que retorna el porcentaje de desiertos por sede y generación*/
function PorcentajeDesiertos(sede, generacion) {
  var studentsSede = data[sede][generacion]['students'];
  var NumeroDeserciones = estadoEstudiante(sede, generacion)[1];
  var porcentaje = (NumeroDeserciones / studentsSede.length) * 100;
  return porcentaje;
}
/* funcion que retorna el porcentaje de activas por sede y generación*/
function PorcentajePresentes(sede, generacion) {
  var studentsSede = data[sede][generacion]['students'];
  var NumeroPresentes = estadoEstudiante(sede, generacion)[0];
  var porcentaje = (NumeroPresentes / studentsSede.length) * 100;
  return porcentaje;
}
// console.log(PorcentajeDesiertos('AQP', '2016-2'));
// console.log(PorcentajePresentes('AQP', '2016-2'));

/* aaaa*/
function cantidadPromedioSuperado(sede, generacion) {
  var arrayStudentGene = data[sede][generacion]['students'];
  var longArrayStudentGene = data[sede][generacion]['students'].length;
  var promedioBase = (1200 + 1800);
  for (i = 0; i < longArrayStudentGene;i++) {
    var sprints = arrayStudentGene[i]['sprints'];
    for (j = 0 ; i < sprints.length; i++) {
      var score = arrayStudentGene[i]['sprints'][j]['score'];
      var notaObtenida = score.tech + score.hse;
    }
  }
}
// console.log(estadoEstudiante('AQP','2016-2')[0]);
// console.log(estadoEstudiante('AQP','2016-2')[1]);

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
    ['Activas', estadoEstudiante('SCL', '2016-2')[0]],
    ['Desertoras', estadoEstudiante('SCL', '2016-2')[1]],
  
  ]);

  // Establece opciones del gráfico
  var options = {'title': 'Inscritas',
    'width': 400,
    'height': 300};
                
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}