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
          var students = data[sede][generation]['students']; // array de toda la data de students
          var totalstudents = data[sede][generation].students.length ; // numero de estudiantes de la sede y generación escogida
          // console.log(data[sede][generation].ratings.length);
          console.log('la cantidad de estudiantes en esta sede y generación es: ' + totalstudents);

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

          // cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos 70% en promedio por todos los sprints sprint
          /*var studentsSuperan = 0;
            for (j = 0; j < data[sede][generation]['students'][i]['sprints'].length; j++) {
              if (data[sede][generation]['students'][i]['sprints'][j]['score']['tech'] > 1260) {
                studentsSuperan ++;
              } else {
                studentsSuperan = studentsSuperan;
              }
            };// for que recorre cada srpint de todas las esrudianyes de la sede y generacion escogida
          console.log('cantidad de estudiantes que superan la meta puntos tecnicos de todos los sprint: ' + studentsSuperan);*/


          // creando for que recorra los datos de las estudiantes
          for (m = 0; m < totalstudents; m++) {
            var arrStudents = students[m] ;
            activeStudents = 0 ;
            // condicion que solo recorre estuidnates activas
            if (arrStudents.active === true) {
              var activeStudents = (activeStudents + 1);

              console.log('las estudiantes activas son: ' + activeStudents);

              // cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos 70% en promedio por todos los sprints sprint
              var superantech = 0;
              for (k = 0; k < students[m]['sprints'].length; k++) {
                var score = students[m]['sprints'][k]['score'] ;
                if (score['tech'] > 1260) {
                  superantech ++;
                } else {
                  superantech = superantech;
                }
              };// for que recorre cada srpint de todas las esrudianyes de la sede y generacion escogida
              console.log('cantidad de estudiantes que superan la meta puntos tecnicos de todos los sprint: ' + superantech);
            //}// condicion que solo recorre estudiantes activas
            /*
            for (var j = 0; j < data[sede][generation]['students'][i]['sprints'].length; j++) {

              var score = data[sede][generation]['students'][i]['sprints'][j]['score'] ;
              // console.log(data[sede][generation]['students'][i]['sprints'][j]['score']);
              // console.log(data[sede][generation]['students'][i]['sprints'][j]['score']['tech']);
              if (score['tech'] > 1260) {
                var HighScoreTech = score['tech'];
                console.log(HighScoreTech);
              };
            }

            // # de estudiantes que pasaron el 70% en Tech y Hse0
            /* var scoreHse = '';
            for (var i2 = 0; i2 < data[sede][generation]['students'][i]['sprints'].length; i2++) {
              if (score[i2].hse > 840 && score[i2].tech > 1260) {
                var studentsHighScore = score[i2].hse.length;
                console.log(studentsHighScore);
              };
            }; */
            } ;// condicion que toma en cuenta solo etudinates activas
          }; // for que recorre la data de todad las estudinates de la sede y genración escogida


          // espacio puesto a proposito para separar.
        }); // evento que sucede al dar click en cualquier generación;
      };// for que recorre las generaciones para hacer eventos click en cualquier generacipon
    });// función o evento general click en cualquier  sede  multiples eventos
  };// for que recorre sedes para hacer ventos click en cualquier sede
});// general


          //  ingresando a cada sprint
           /*var score = students[i1].sprints;
           // # de estudiantes que pasaron el 70% en Tech y Hse0
           var scoreHse = '';
           for (var i2 = 0; i2 < score.length; i1++) {
             if (score[i2].hse > 840 && score[i2].tech > 1260) {
               var studentsHighScore = score[i2].hse.length;
               console.log(studentsHighScore);
             };
           };
         };*/

          /*var studentsSuperanTech = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            console.log(data[sede][generation]['students'][i]['sprints']);
            for (j = 0; j < data[sede][generation]['students'][i]['sprints'].length; j++){
              if(data[sede][generation]['students'][i]['sprints'][j]['score']['tech'].length !== 0 && data[sede][generation]['students'][i]['sprints'][j]['score']['tech'].length > 1260) {
               studentsSuperanTech ++;
               }
              }
          };*/

          // cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos en promedio y por sprint de tech

           //if (data[sede][generation]['students'][i]['sprints'][0]['score']['tech'] > 1260 &&  ) {
            //  studentsSuperanTech ++;
          //} else {
            //  studentsSuperanTech = studentsSuperanTech;
            //}

          //console.log('cantidad de estudiantes que superan la meta de puntos tecnicos en promedio y en el primer sprint : ' + studentsSuperanTech);



          /*console.log('cantidad de  estudiantes que superan la meta de puntos tecnicos en promedio y e el segundo sprint: ' + studentsSuperanTech);

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
          */

          // cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos en promedio y por sprint de hse
          /*var studentsSuperanHse = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][0]['score']['hse'] > 840) {
              studentsSuperanHse ++;
            } else {
              studentsSuperanHse = studentsSuperanHse;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos HSE en promedio y en el primer sprint: ' + studentsSuperanHse);


          // hallando la cantidad todal de estudiantes ACTIVAS por generación
          console.log(students[0]['active']);
        /*  console.log(totalstudents[1]);*/
        /*
          var activeStudents = 0;
          for (var i1 = 0; i1 < students.length; i1++) {
            if (students[i1]['active']) {
               activeStudents++;
             };*/
             //console.log(activeStudents);

            // hallando la cantidad todal de estudiantes INACTIVAS por generacion
           /*var inactiveStudents = totalstudents - activeStudents;
           console.log('activas: ' + activeStudents);
            console.log('inactivas: ' + inactiveStudents);
            //var scoreHse = students[i1].sprints;
          };*/






          // creando div que almacenará el # de estudiates
          /*var studentsDiv = document.createElement('div');
          studentsDiv.textContent = totalstudents;
          console.log(studentsDiv);

          // creando div que almacenará el # de estudiates INACTIVAS
          var inactiveStudentsDiv = document.createElement('div');
          inactiveStudents.textContent = inactiveStudents;
          console.log(inactiveStudentsDiv);
          */


/*
var students = data[sede][generation].students ;
          var studentAcount = students.length;

          // hallando la cantidad todal de estudiantes ACTIVAS por generación
          var activeStudents = 0;
          for (var i1 = 0; i1 < totalstudents; i1++) {
            if (students[i1].active === true) {
              var activeStudents = (activeStudents + 1);
            };
            // hallando la cantidad todal de estudiantes INACTIVAS por generacion
            var inactiveStudents = totalstudents - activeStudents;
            console.log(inactiveStudents);
            var scoreHse = students[i1].sprints;

          };
          // creando div que almacenará el # de estudiates
          var studentsDiv = document.createElement('div');
          studentsDiv.textContent = totalstudents;
          console.log(studentsDiv);
          // creando div que almacenará el # de estudiates INACTIVAS
          var inactiveStudentsDiv = document.createElement('div');
          inactiveStudents.textContent = inactiveStudents;
          console.log(inactiveStudentsDiv);
*/
