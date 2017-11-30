window.addEventListener('load', function() {
  // variable que almacena  el texto junto de sede y generacion, el cual se muestra en la pantalla
  var sedeGeneration = document.getElementById('sede_generation');
  // console.log(sedeGeneration); // <a href="#" id="sede_generation">NUESTRAS SEDES</a>

  // variable que almacena la lista de sedes
  var listSedes = document.getElementById('listSedes');
  // console.log(listSedes); // <div id="listSedes" class="sedes_hiden"></div>

  var listGenerations = document.querySelectorAll('.listGenerations');
  // console.log(listGenerations); // todos los div con las generaciones
  // console.log(listGenerations.children);

  var generations = document.querySelectorAll('.generation');
  // console.log(generations); // (10) [a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation]

  var sedes = document.querySelectorAll('.sede');
  // console.log(sedes); // [a.sede =arequipa, a.sede =mexico, a.sede = lima, a.sede = chile] // lista de nodos

  sedeGeneration.addEventListener('click', showListSedes);
  function showListSedes(event) {
    listSedes.classList.toggle('show');
  };

  for (var i = 0; i < sedes.length; i++) {
    sedes[i].addEventListener('click', function(event) {
      // console.log(event.target); //  <a href="#" class="sede" data-sede ="AQP">Arequipa</a>
      var sede = event.target.dataset.sede;
      console.log('la sede es : ' + sede); // AQP
      // console.log(typeof sede); // string

      for (var j = 0; j < listGenerations.length; j++) {
        listGenerations[j].addEventListener('click', function(event) {
          // sconsole.log(event.target);

          var generation = event.target.dataset.generation;
          console.log('la generación es: ' + generation);// 2016-2
          // console.log(typeof generation); //string
          var totalstudents = data[sede][generation].students.length ;
          // console.log(data[sede][generation].ratings.length);

          console.log('la cantidad de estudiantes en esta sede y generación es: ' + totalstudents);

          /*
          // creando div que almacenará el cuadro estradístico
          var chartDiv = document.createElement('div');
          chartDiv.textContent = students;
          console.log(chartDiv);
          */

          // puntuacion promedio de los profes
          var promTeacher = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var promTeacher = promTeacher + data[sede][generation]['ratings'][i].teacher;
          };
          console.log('promedio de teachers: ' + promTeacher);

          // puntuacion promedio de los jedis
          var promJedi = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var promJedi = promJedi + data[sede][generation]['ratings'][i].jedi;
          };
          console.log('promedios de jedis: ' + promJedi);

          // porcentaje de estudiantes satisfechas
          var satisfiedStudents = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var satisfiedStudents = satisfiedStudents + data[sede][generation]['ratings'][i].student.cumple;
          };
          console.log('estudiantes satisfechas : ' + satisfiedStudents);

          // total promoters
          var promoters = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var promoters = promoters + data[sede][generation]['ratings'][i]['nps']['promoters'];
          };

          // total detractors
          var detractors = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var detractors = detractors + data[sede][generation]['ratings'][i]['nps']['detractors'];
          };

          // total nps
          var nps = promoters - detractors;
          console.log('nps: ' + nps);

          // cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos en promedio por todos los sprints sprint
          var studentsSuperan = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            for (j = 0; j < data[sede][generation]['students'][i]['sprints'].length; j++) {
              if (data[sede][generation]['students'][i]['sprints'][j]['score']['tech'] > 1260) {
                studentsSuperan ++;
              } else {
                studentsSuperan = studentsSuperan;
              }
            };
          };
          console.log('cantidad de estudiantes que superan la meta puntos tecnicos de todos los sprint: ' + studentsSuperan);

          // cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos en promedio y por sprint de tech
          var studentsSuperanTech = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][0]['score']['tech'] > 1260) {
              studentsSuperanTech ++;
            } else {
              studentsSuperanTech = studentsSuperanTech;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos tecnicos en promedio y en el primer sprint : ' + studentsSuperanTech);

          var studentsSuperanTech = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][1]['score']['tech'] > 1260) {
              studentsSuperanTech ++;
            } else {
              studentsSuperanTech = studentsSuperanTech;
            }
          };
          console.log('cantidad de  estudiantes que superan la meta de puntos tecnicos en promedio y e el segundo sprint: ' + studentsSuperanTech);

          var studentsSuperanTech = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][2]['score']['tech'] > 1260) {
              studentsSuperanTech ++;
            } else {
              studentsSuperanTech = studentsSuperanTech;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos tecnicos en promedio y en el tercer sprint: ' + studentsSuperanTech);

          var studentsSuperanTech = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][3]['score']['tech'] > 1260) {
              studentsSuperanTech ++;
            } else {
              studentsSuperanTech = studentsSuperanTech;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos tecnicos en promedio y en el cuarto sprint: ' + studentsSuperanTech);

          // cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos en promedio y por sprint de hse
          var studentsSuperanHse = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][0]['score']['hse'] > 840) {
              studentsSuperanHse ++;
            } else {
              studentsSuperanHse = studentsSuperanHse;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos HSE en promedio y en el primer sprint: ' + studentsSuperanHse);

          var studentsSuperanHse = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][1]['score']['hse'] > 840) {
              studentsSuperanHse ++;
            } else {
              studentsSuperanHse = studentsSuperanHse;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos HSE en promedio y en el segundo sprint: ' + studentsSuperanHse);

          var studentsSuperanHse = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][2]['score']['hse'] > 840) {
              studentsSuperanHse ++;
            } else {
              studentsSuperanHse = studentsSuperanHse;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos HSE en promedio y en el tercer sprint: ' + studentsSuperanHse);

          var studentsSuperanHse = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][3]['score']['hse'] > 840) {
              studentsSuperanHse ++;
            } else {
              studentsSuperanHse = studentsSuperanHse;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos HSE en promedio y en el cuarto sprint: ' + studentsSuperanHse);
        });
      }
    });
  }
});
