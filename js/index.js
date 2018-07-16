google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var actives = [];
for(var i = 0; i < data.AQP["2016-2"].students.length; i++){
  actives.push(data.AQP["2016-2"].students[i].active);
}
console.log(actives);
var countedActives = actives.reduce(function (allActives, active) {
  if (active in allActives) {
    allActives[active]++;
  }
  else {
    allActives[active] = 1;
  }
  return allActives;
  }, {});

  function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Presentes',   countedActives.true],
    ['Desistentes',  countedActives.false]
   ]);
  var options = {
    title: 'Situação das alunas',
    titleTextStyle: {color: 'red', fontSize: 27, bold: true, italic: true },
    colors:['#ffff33','#999966']
  };
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

//Pontuação media das professoras
var teacher = [];
var jedi = [];
for(var i = 0; i < data.AQP["2016-2"].ratings.length; i++){
  teacher.push(data.AQP["2016-2"].ratings[i].teacher);
  jedi.push(data.AQP["2016-2"].ratings[i].jedi);
  var complementoSprint = teacher.length;
}

var sumTeacher = teacher.reduce( function( acum, num ) {
  return acum + num;
}, 0 );
var sumJedi = jedi.reduce( function( acum, num ) {
  return acum + num;
}, 0 );
var media = function media(valor, complemento){
  return valor / complemento;
}
var listaRatings = document.getElementById("ratings");
listaRatings.innerHTML = "";
listaRatings.innerHTML += "<p><b>Média dos professoras: </b></p>" + media(sumTeacher, complementoSprint) + "</p>";
listaRatings.innerHTML += "<p><b>Média dos mestres Jedi: </b></p>" + media(sumJedi, complementoSprint) + "</p>";

var arraySatisfeita = [];
for(var i = 0; i < data.AQP["2016-2"].ratings.length; i++){
  arraySatisfeita.push(data.AQP["2016-2"].ratings[i].student);
  const naoSatisfeita = arraySatisfeita.map(naoSat => (naoSat['no-cumple']));
  const satisfeita = arraySatisfeita.map(sat => (sat['cumple']));
  const superSatisfeita = arraySatisfeita.map(superSat => (superSat['supera']));

  google.charts.load('current', {'packages':['bar']});
  google.charts.setOnLoadCallback(drawChart2);
  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
     ['Turma: 2016-2', 'Não satisfeita', 'Satisfeita', 'Super satisfeita'],
     ['Sprint 1', naoSatisfeita[0], satisfeita[0], superSatisfeita[0]],
     ['Sprint 2', naoSatisfeita[1], satisfeita[1], superSatisfeita[1]],
     ['Sprint 3', naoSatisfeita[2], satisfeita[2], superSatisfeita[2]],
     ['Sprint 4', naoSatisfeita[3], satisfeita[3], superSatisfeita[3]]
    ]);
    var options = {
      title: 'satisfação das aluna <Laboratoria>',
      titleTextStyle: {color: 'red', fontSize: 27, bold: true, italic: true },
    };
    var chart = new google.charts.Bar(document.getElementById('satisfacao'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
 }
