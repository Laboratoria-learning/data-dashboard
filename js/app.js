$(document).ready(function() {
  var sede = "";
  var turma = "";
  var valorSede = "LIM";
  $(".sede").mouseover(function() {
    sede = $(this).text();
    $(".turma").click(function() {
      turma = $(this).text();
      document.getElementById('sede').innerHTML = "<p> " + sede + "</p>";
      document.getElementById('turma').innerHTML = "<p> " + turma + "</p>";
      var actives = [];
      for (var i = 0; i < data[sede][turma].students.length; i++) {
        actives.push(data[sede][turma].students[i].active);
      }
      var countedActives = actives.reduce(function(allActives, active) {
        if (active in allActives) {
          allActives[active]++;
        } else {
          allActives[active] = 1;
        }
        return allActives;
      }, {});
      google.charts.load('current', {'packages': ['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Presentes', countedActives.true],
          ['Desistentes', countedActives.false]
        ]);
        var options = {
          title: 'Situação das alunas',
          titleTextStyle: {
            color: 'red',
            fontSize: 27,
            bold: true,
            italic: true
          },
          colors: ['#ffff33', '#999966']
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }

      //Pontuação media das professoras e Jedi
      var teacher = [];
      var jedi = [];
      for (var i = 0; i < data[sede][turma].ratings.length; i++) {
        teacher.push(data[sede][turma].ratings[i].teacher);
        jedi.push(data[sede][turma].ratings[i].jedi);
        var complementoSprint = teacher.length;
      }
      var sumTeacher = teacher.reduce(function(acum, num) {
        return acum + num;
      }, 0);
      var sumJedi = jedi.reduce(function(acum, num) {
        return acum + num;
      }, 0);
      var media = function media(valor, complemento) {
        return valor / complemento;
      }
      var listaRatings = document.getElementById("ratings");
      listaRatings.innerHTML = "";
      listaRatings.innerHTML += "<p><b>Média dos professoras: </b></p>" + media(sumTeacher, complementoSprint) + "</p>";
      listaRatings.innerHTML += "<p><b>Média dos mestres Jedi: </b></p>" + media(sumJedi, complementoSprint) + "</p>";

      var arraySatisfeita = [];
      for (var i = 0; i < data[sede][turma].ratings.length; i++) {
        arraySatisfeita.push(data[sede][turma].ratings[i].student);
        const naoSatisfeita = arraySatisfeita.map(naoSat => (naoSat['no-cumple']));
        const satisfeita = arraySatisfeita.map(sat => (sat['cumple']));
        const superSatisfeita = arraySatisfeita.map(superSat => (superSat['supera']));
        google.charts.load('current', {'packages': ['bar']});
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
            titleTextStyle: {
              color: 'red',
              fontSize: 27,
              bold: true,
              italic: true
            },
          };
          var chart = new google.charts.Bar(document.getElementById('satisfacao'));
          chart.draw(data, google.charts.Bar.convertOptions(options));
        }
      }

      // function carregaEstudantes() {
        var listaEstudantes = document.getElementById("foto-Estudantes");
        listaEstudantes.innerHTML = "";
          for(i in data[sede][turma]["students"]){
            var img = document.createElement("img");
            img.src = data[sede]['2017-1']["students"][i]["photo"];
            var name = data[sede]['2017-1']["students"][i]["name"];
            var active = data[sede]['2017-1']["students"][i]["active"];
            listaEstudantes.appendChild(img);
            listaEstudantes.innerHTML += "<p><b>Nome: </b>" + name + "</p>";
            listaEstudantes.innerHTML += "<p><b>Status: </b>" + active + "</p>";
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
            var media = function media(valor, complemento){
              return valor / complemento;
            }
            listaEstudantes.innerHTML += "<p><b>Média Hab. Tech: </b>" + parseInt(media(sumTech, complementoSprint)) + "</p>";
            listaEstudantes.innerHTML += "<p><b>Média Hab. HSE: </b>" + parseInt(media(sumHse, complementoSprint)) + "</p>";
      };
    });
  });
});
