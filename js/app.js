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
        title: 'Situação das alunas',
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
      var dados = document.getElementById("dados");
      dados.innerHTML = "";
      dados.innerHTML += "<h2>Média teacher: " + parseInt(media(sumTeacher, complementoSprint)) + "</h2>";
      dados.innerHTML += "<h2>Média jedi:: " + parseInt(media(sumJedi, complementoSprint)) + "</h2>";

      //Media NPS
      var Promoters = [];
      var Passive = [];
      var Detractors = [];
      for (var i = 0; i < data[sede][turma].ratings.length; i++) {
        Promoters.push(data[sede][turma].ratings[i].nps.promoters);
        Detractors.push(data[sede][turma].ratings[i].nps.detractors);
      }
        var complementoPromoters = Promoters.length;
        var sumPromoters = Promoters.reduce(function(acum, num) {
          return acum + num;
        }, 0);
        var sumDetractors = Detractors.reduce(function(acum, num) {
          return acum + num;
        }, 0);
        var media = function media(valor, complemento) {
          return valor / complemento;
        }
        var mediaPromoters = media(sumPromoters, complementoPromoters);
        var mediaDetractors = media(sumDetractors, complementoPromoters);
        function subtraction(valor1, valor2) {
          return valor1 - valor2;
        };
        dados.innerHTML += "<h2>Net Promoter Score (NPS): " + parseInt(subtraction(mediaPromoters, mediaDetractors)) + "</h2>";

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
        //   var x = 0;
        //   var y = 0;
        //   var hse2 = "";
        //   const mediaTec = parseInt(media(sumTech, complementoSprint));
        //   for(var i = 0; i < (data[sede][turma]["students"]).length; i++){
        //    hse2 = mediaTec;
        //    console.log(hse2);
        //   if(hse2[i] >= 700){
        //     x =  x + 1;
        //     console.log("maior" + hse2[i]);
        //   }else{
        //     y = y + 1;
        //     console.log("menor" + hse2[i]);
        //   }
        // }
    });
  });
});
