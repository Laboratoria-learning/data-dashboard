// Grafico alunas ativas e invativas
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var actives = [];
for(var i = 0; i < data.AQP["2016-2"].students.length; i++){
  actives.push(data.AQP["2016-2"].students[i].active);
}

var countedActives = actives.reduce(function (allActives, active) {
  if (active in allActives) {
    allActives[active]++;
  }
  else {
    allActives[active] = 1;
  }
  return allActives;
}, {});
console.log(countedActives);

function drawChart() {
var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Ativas',   countedActives.true],
    ['Invativas',  countedActives.false]
   ]);
  var options = {
    title: 'Alunas ativas e inativas',
    titleTextStyle: {color: 'red', fontSize: 27},
    colors:['#ffff33','#999966']
  };
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

//exibir Estudantes
var dropMenu = document.getElementById("drop-menu");
dropMenu.addEventListener("change", carregaEstudantes); //change é um evento

window.onload = carregaMenu();

function carregaMenu(){
  var nome = document.createElement("option");
  nome.innerHTML = "selecione sede";
  nome.value = "none";
  dropMenu.appendChild(nome);
  for(sede in data){
    var itemMenu = document.createElement("option");
    itemMenu.value = sede;
    itemMenu.innerHTML = sede;
    dropMenu.appendChild(itemMenu);
  }
};

function carregaEstudantes() {
  var sede = dropMenu.value;
  var listaEstudantes = document.getElementById("foto-Estudantes");
  listaEstudantes.innerHTML = "";
  for(turma in data[sede]){
    for(i in data[sede][turma]["students"]){
      var img = document.createElement("img");
      img.src = data[sede]['2017-1']["students"][i]["photo"];
      var name = data[sede]['2017-1']["students"][i]["name"];
      listaEstudantes.appendChild(img);
      listaEstudantes.innerHTML += "<p><b>Nome: </b>" + name + "</p>";
      var hse = [];
      var tech = [];
      for(var y = 0; y < (data[sede]['2017-1']["students"][i]["sprints"]).length; y++){
        hse.push(data[sede]['2017-1']["students"][i]["sprints"][y]["score"]["hse"]);
        tech.push(data[sede]['2017-1']["students"][i]["sprints"][y]["score"]["tech"]);
        var complementoSprint = tech.length;
      }
      var sumTech = tech.reduce( function( acum, num ) {
        return acum + num;
      }, 0 );
      var sumHse = hse.reduce( function( acum, num ) {
        return acum + num;
      }, 0 );

      var media = function media(valor, complementoSprint){
        return valor / complementoSprint;
      }
      listaEstudantes.innerHTML += "<p><b>Média Hab. Tech: </b>" + parseInt(media(sumTech, complementoSprint)) + "</p>";
      listaEstudantes.innerHTML += "<p><b>Média Hab. HSE: </b>" + parseInt(media(sumHse, complementoSprint)) + "</p>";
    }
  }
};
