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
      console.log(sede); // AQP
      // console.log(typeof sede); // string

      for (var j = 0; j < listGenerations.length; j++) {
        listGenerations[j].addEventListener('click', function(event) {
          // sconsole.log(event.target);

          var generation = event.target.dataset.generation;
          console.log(generation);// 2016-2
          var students = data[sede][generation].students.length ;
          alert('el número de estudiantes de la sede ' + sede + ' y de la generación ' + generation + ' es: ' + students);
          /*
          // creando div que almacenará el cuadro estradístico
          var chartDiv = document.createElement('div');
          chartDiv.textContent = students;
          console.log(chartDiv);
          */
        });
      }
    });
  }
});

//console.log(data);
/* var promoters = 0;
var detractors = 0;

function nps(sede, generacion) {
  for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
    var promoters = promoters + data.AQP['2016-2'].ratings[i].nps.promoters;
  };
  var detractors = 0;
  for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
    var detractors = detractors + data.AQP['2016-2'].ratings[i].nps.detractors;
  };
  return promoters - detractors;
}

nps(sede, generation);*/

// puntuacion promedio de los profes
/*var promTeacher = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var promTeacher = promTeacher + data.AQP['2016-2'].ratings[i].teacher;
};
console.log(promTeacher);*/

// puntuacion promedio de los jedis
/*var promJedi = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var promJedi = promJedi + data.AQP['2016-2'].ratings[i].jedi;
};
console.log(promJedi);*/

// porcentaje de estudiantes satisfechas
/*var satisfiedStudents = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var satisfiedStudents = satisfiedStudents + data.AQP['2016-2'].ratings[i].student.cumple;
};
console.log(satisfiedStudents);*/

//total promoters
/*var promoters = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var promoters = promoters + data.AQP['2016-2'].ratings[i].nps.promoters;
};*/
// total detractors
/*var detractors = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var detractors = detractors + data.AQP['2016-2'].ratings[i].nps.detractors;
};

// total nps
var nps = promoters - detractors;
console.log(nps);*/

// cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos en promedio y por sprint
/*var studentsSuperan = 0;
for (i = 0; i < data.AQP['2016-2'].students.length; i++) {
    for (j = 0; j <data.AQP['2016-2'].students[i].sprints.length; j++) {
      if (data.AQP['2016-2'].students[i].sprints[j].score.tech > 1260) {
      studentsSuperan ++;
    } else {
    studentsSuperan = studentsSuperan;
    }
  };
};
console.log(studentsSuperan);*/

// cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos en promedio y por sprint de tech
/*var studentsSuperanTech = 0;
for (i = 0; i < data.AQP['2016-2'].students.length; i++) {
      if (data.AQP['2016-2'].students[i].sprints[0].score.tech > 1260) {
      studentsSuperanTech ++;
    } else {
    studentsSuperanTech = studentsSuperanTech;
    }
};
console.log(studentsSuperanTech);*/

// cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos en promedio y por sprint de hse
/*var studentsSuperanHse = 0;
for (i = 0; i < data.AQP['2016-2'].students.length; i++) {
      if (data.AQP['2016-2'].students[i].sprints[0].score.hse > 840) {
      studentsSuperanHse ++;
    } else {
    studentsSuperanHse = studentsSuperanHse;
    }
};
console.log(studentsSuperanHse);*/
