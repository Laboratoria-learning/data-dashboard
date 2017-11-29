
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
// funcionalidad para NPS
function nps(sede, generacion) {
  var arrayRating = data[sede][generacion]['ratings'];
  var nps = [];
  for (var i = 0 ; i < arrayRating.length;i++) {
    nps[i] = arrayRating[i].nps.promoters - arrayRating[i].nps.detractors;
  }
  return nps;
}
console.log(nps('AQP', '2016-2')[0]);
console.log(nps('AQP', '2016-2')[1]);
console.log(nps('AQP', '2016-2')[2]);
console.log(nps('AQP', '2016-2')[3]);

// Porcentaje de estudiantes satisfechas con exp Lab
function stdGreatLab(sede, generacion) {
  var arrayRatings = data[sede][generacion]['ratings'];
  var stdStf = [];
  for (var i = 0 ; i < arrayRatings.length;i++) {
    stdStf[i] = arrayRatings[i].student.cumple + arrayRatings[i].student.supera;
  }
  return stdStf;
}
console.log(stdGreatLab('AQP', '2016-2')[0]);
console.log(stdGreatLab('AQP', '2016-2')[1]);
console.log(stdGreatLab('AQP', '2016-2')[2]);
console.log(stdGreatLab('AQP', '2016-2')[3]);

// Score teachers
function scoreTeachers(sede, generacion) {
  var arrayRatings = data[sede][generacion]['ratings'];
  var arrayScore = [];
  for (var i = 0 ; i < arrayRatings.length;i++) {
    arrayScore[i] = arrayRatings[i].teacher;
  }
  return arrayScore;
}
console.log(scoreTeachers('AQP', '2016-2')[0]);
console.log(scoreTeachers('AQP', '2016-2')[1]);
console.log(scoreTeachers('AQP', '2016-2')[2]);
console.log(scoreTeachers('AQP', '2016-2')[3]);

// La puntuación promedio de l@s jedis.
function scoreJedis(sede, generacion) {
  var arrayRatings = data[sede][generacion]['ratings'];
  var arrayScore = [];
  for (var i = 0 ; i < arrayRatings.length;i++) {
    arrayScore[i] = arrayRatings[i].jedi;
  }
  return arrayScore;
}
console.log(scoreJedis('AQP', '2016-2')[0]);
console.log(scoreJedis('AQP', '2016-2')[1]);
console.log(scoreJedis('AQP', '2016-2')[2]);
console.log(scoreJedis('AQP', '2016-2')[3]);

