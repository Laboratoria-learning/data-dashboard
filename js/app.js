$(document).ready(function() {

  //Mostrar e esconder as divs
  document.getElementById("MostrarEstudantes").addEventListener("click", function(){
    var estudante = document.getElementById("estudante");
    var geral = document.getElementById("geral");
    if(estudante.style.display == "none"){
        estudante.style.display = "block";
        geral.style.display = "none";
    }else{
      estudante.style.display = "none";
      geral.style.display = "block";
    }
  });

  //Pegar valor do menu
  var sede = "";
  var turma = "";
  $(".sede").mouseover(function() {
    sede = $(this).text();
    $(".turma").click(function() {
      turma = $(this).text();
      document.getElementById('titulo').innerHTML = "<h1> " + sede + " - " + turma + "</h1>";

      //Status das alunas
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
          title: 'Status das alunas',
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

      //Alunas satisfeita
      var naoSatisfeita = [];
      var satisfeita = [];
      var superSatisfeita = [];
      for (var i = 0; i < data[sede][turma].ratings.length; i++) {
        naoSatisfeita.push(data[sede][turma].ratings[i].student["no-cumple"]);
        satisfeita.push(data[sede][turma].ratings[i].student.cumple);
        superSatisfeita.push(data[sede][turma].ratings[i].student.supera);
      }
      var complementosatisfeita = satisfeita.length;
      var sumNaoSatisfeita = naoSatisfeita.reduce(function(acum, num) {
        return acum + num;
      }, 0);
      var sumSatisfeita = satisfeita.reduce(function(acum, num) {
        return acum + num;
      }, 0);
      var sumSuperSatisfeita = superSatisfeita.reduce(function(acum, num) {
        return acum + num;
      }, 0);
      var media = function media(valor, complemento) {
        return valor / complemento;
      }
      var mediaNaoSatisfeita = media(sumNaoSatisfeita, complementosatisfeita);
      var mediaSatisfeita = media(sumSatisfeita, complementosatisfeita);
      var mediaSuperSatisfeita = media(sumSuperSatisfeita, complementosatisfeita);

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);
      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Não satisfeita',   sumNaoSatisfeita],
          ['Satisfeita',  sumSatisfeita],
          ['Super satisfeita',  sumSuperSatisfeita]
        ]);
        var options = {
          title: 'Satisfação das alunas',
          titleTextStyle: {color: 'red', fontSize: 27, bold: true, italic: true },
          colors:['#999966', '#ffff33', '#80aaff']
        };
        var chart = new google.visualization.PieChart(document.getElementById('satisfacao'));
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
        var mediaTeacher = parseInt(media(sumTeacher, complementoSprint));
        var mediaJedi = parseInt(media(sumJedi, complementoSprint));

        //Media Teacher
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart4);
        function drawChart4() {
          var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Média Jedi', mediaTeacher],
            ['Falta  alcançar',   5 - mediaTeacher]
          ]);
          var options = {
            title: 'Média Teacher',
            titleTextStyle: {color: 'red', fontSize: 27, bold: true, italic: true },
            colors:['#ffff33', '#999966']
          };
          var chart = new google.visualization.PieChart(document.getElementById('teacher'));
          chart.draw(data, options);
        }

        //Media jedi
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart3);
        function drawChart3() {
          var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Média Jedi', mediaJedi],
            ['Falta  alcançar',   5 - mediaJedi]
          ]);
          var options = {
            title: 'Média Jedi',
            titleTextStyle: {color: 'red', fontSize: 27, bold: true, italic: true },
            colors:['#ffff33', '#999966']
          };

          var chart = new google.visualization.PieChart(document.getElementById('jedi'));
          chart.draw(data, options);
        }

        //Media NPS
        var Promoters = [];
        var Passive = [];
        var Detractors = [];
        for (var i = 0; i < data[sede][turma].ratings.length; i++) {
          Promoters.push(data[sede][turma].ratings[i].nps.promoters);
          Passive.push(data[sede][turma].ratings[i].nps.passive);
          Detractors.push(data[sede][turma].ratings[i].nps.detractors);
        }
        var complementoPromoters = Promoters.length;
        var sumPromoters = Promoters.reduce(function(acum, num) {
          return acum + num;
        }, 0);
        var sumPassive = Passive.reduce(function(acum, num) {
          return acum + num;
        }, 0);
        var sumDetractors = Detractors.reduce(function(acum, num) {
          return acum + num;
        }, 0);
        var media = function media(valor, complemento) {
          return valor / complemento;
        }
        var mediaPromoters = media(sumPromoters, complementoPromoters);
        var mediaPassive = media(sumPassive, complementoPromoters);
        var mediaDetractors = media(sumDetractors, complementoPromoters);

        function subtraction(valor1, valor2) {
          return valor1 - valor2;
        };

        document.querySelector(".graficoDados").style.backgroundColor = "#fff";
        var divNps = document.getElementById("dadosNps");
        divNps.innerHTML = "";
        divNps.innerHTML += "<h4>NPS: " + parseInt(subtraction(mediaPromoters, mediaDetractors)) + "</h4>";
        divNps.innerHTML += "<h4>Média promoters: " + parseInt(mediaPromoters) + "</h4>";
       divNps.innerHTML += "<h4>Média passive: " + parseInt(mediaPassive) + "</h4>";
       divNps.innerHTML += "<h4>Média detractors: " + parseInt(mediaDetractors) + "</h4>";
       google.charts.load('current', {'packages':['bar']});
       google.charts.setOnLoadCallback(drawChart2);
       function drawChart2() {
       var data = google.visualization.arrayToDataTable([
        ['Sede / Turma', 'Promoters', 'Passive', 'Detractors'],
        ['Sprint 1', Promoters[0], Passive[0], Detractors[0]],
        ['Sprint 2', Promoters[1], Passive[1], Detractors[1]],
        ['Sprint 3', Promoters[2], Passive[2], Detractors[2]],
        ['Sprint 4', Promoters[3], Passive[3], Detractors[3]]
       ]);
      var options = {
       title: 'Net Promoter Score (NPS)',
       titleTextStyle: {color: 'red', fontSize: 27, bold: true, italic: true },
      };
      var chart = new google.charts.Bar(document.getElementById('nps'));
      chart.draw(data, google.charts.Bar.convertOptions(options));
      }
      //Dados dos estudantes
      var listaEstudantes = document.getElementById("foto-Estudantes");
      listaEstudantes.innerHTML = "";
      listaEstudantes.innerHTML += "<h1>Estudantes</h1>";
      for(i in data[sede][turma]["students"]){
        var img = document.createElement("img");
        img.src = data[sede][turma]["students"][i]["photo"];
        var name = data[sede][turma]["students"][i]["name"];
        var active = data[sede][turma]["students"][i]["active"];
        listaEstudantes.appendChild(img);
        listaEstudantes.innerHTML += "<div><b>Nome: </b>" + name + "</div>";
        listaEstudantes.innerHTML += "<div><b>Status: </b>" + active + "</div>";
        var hse = [];
        var tech = [];
        for(var y = 0; y < (data[sede][turma]["students"][i]["sprints"]).length; y++){
          hse.push(data[sede][turma]["students"][i]["sprints"][y]["score"]["hse"]);
          tech.push(data[sede][turma]["students"][i]["sprints"][y]["score"]["tech"]);
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
        listaEstudantes.innerHTML += "<div><b>Média Hab. Tech: </b>" + parseInt(media(sumTech, complementoSprint)) + "</div>";
        listaEstudantes.innerHTML += "<div><b>Média Hab. HSE: </b>" + parseInt(media(sumHse, complementoSprint)) + "</div>";
      }
    });
  });
});
