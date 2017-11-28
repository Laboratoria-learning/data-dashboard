/* var Arequipa = data.AQP;
var prom1AQP = Arequipa['2016-2'];
var studentsPromOne = prom1AQP['students'];
var prom2AQP = Arequipa['2017-1'];
var studentsPromTwo = prom2AQP['students'];

var Mexico = data.CDMX;
var prom1MX = Mexico['2017-1'];
var prom2MX = Mexico['2017-2'];

var Lima = data.LIM;
var prom1LM = Lima['2016-2'];
var prom2LM = Lima['2017-1'];
var prom3LM = Lima['2017-2'];

var Chile = data.SCL;
var prom1CHL = Chile['2016-2'];
var prom2CHL = Chile['2017-1'];
var prom3CHL = Chile['2017-2'];
// dentro del enrollment

// titulo 
var titleEn = document.createElement('h1');
titleEn.innerText = 'ENROLLMENT';
titleEn.classList.add('titleStyle');
enrollment.appendChild(titleEn);
// cantidad Total de alumnas
var currentStudents = document.createElement('h2');
currentStudents.innerText = prom1AQP['students'].length;
var description = document.createElement('span');
description.innerText = '# STUDENTS CURRENTLY ENROLLED';
enrollment.appendChild(currentStudents);
 */
// creando ...
window.addEventListener('load', function() {
  var overview = document.getElementById('general');
  // enrollment 
  var enrollment = document.createElement('div');
  var enrollOne = document.createElement('div');
  var titleEnroll = document.createElement('h1');
  titleEnroll.innerText = 'ENROLLMENT';
  var allStudents = document.createElement('h2');
  // agrega la cantidad de estudiantes activos por sede y generacion
  // pero falta jalarlo de manera mas generica
  allStudents.innerText = currentStudents('LIM', '2016-2');
  var textAS = document.createElement('span');
  textAS.innerText = '# STUDENTS CURRENTLY ENROLLED';
  var enrollTwo = document.createElement('div');
  var dropout = document.createElement('h2');
  dropout.innerText = dropoutAll('LIM', '2016-2');
  var textDrop = document.createElement('span');
  textDrop.innerText = '% DROPOUT';
  // agregando al enrollment
  general.appendChild(enrollment);
  enrollment.appendChild(titleEnroll);
  enrollment.appendChild(enrollOne);
  enrollment.appendChild(enrollTwo);
  enrollOne.appendChild(allStudents);
  enrollOne.appendChild(textAS);
  enrollTwo.appendChild(dropout);
  enrollTwo.appendChild(textDrop);
  // estilos
  enrollment.setAttribute('class', 'enrollmentClass');
  enrollOne.setAttribute('class', 'enrollOne');
  enrollTwo.setAttribute('class', 'enrollTwo');
  // achievement 
  var achievement = document.createElement('div');
  var achiOne = document.createElement('div');
  var achiTwo = document.createElement('div');
  var titleAchi = document.createElement('h1');
  titleAchi.innerText = 'ACHIEVEMENT';
  var target = document.createElement('h1');
  target.innerText = promSprint('LIM', '2016-2');
  var texTarg = document.createElement('span');
  texTarg.innerText = '# STUDENTS THAT MEET THE TARGET';
  var percentTotal = document.createElement('h2');
  var textTotal = document.createElement('span');
  textTotal.innerText = '% OF TOTAL ()';
  // agregando al achievement 
  general.appendChild(achievement);
  achievement.appendChild(titleAchi);
  achievement.appendChild(achiOne);
  achievement.appendChild(achiTwo);
  achiOne.appendChild(target);
  achiOne.appendChild(texTarg);
  achiTwo.appendChild(percentTotal);
  achiTwo.appendChild(textTotal);
  // estilos de achievement
  achievement.setAttribute('class', 'achievementClass');
  achiOne.setAttribute('class', 'achiOne');
  achiTwo.setAttribute('class', 'achiTwo');
  // promoter score
  var promoterScore = document.createElement('div');
  var promoterOne = document.createElement('div');
  var promoterTwo = document.createElement('div');
  var titleProSco = document.createElement('h1');
  titleProSco.innerText = 'NET PROMOTER SCORE';
  var nps = document.createElement('h1');
  var textNps = document.createElement('span');
  textNps.innerText = '% CUMULATIVE NPS';
  // agregando promoter
  general.appendChild(promoterScore);
  promoterScore.appendChild(promoterOne);
  promoterScore.appendChild(promoterTwo);
  promoterScore.appendChild(titleProSco);
  promoterOne.appendChild(nps);
  promoterOne.appendChild(textNps);
  // funcion para sacar la cantidad actual activos de estudiantes por sede
  function currentStudents(sede, gene) {
    var count = 0;
    var sede = data[sede];
    var generation = sede[gene];
    var student = generation.students;
    for (var i = 0; i < student.length; i++) {
      if (student[i].active === true) {
        count++;
      }
    } return count;
  };
  // promedio de desertadas
  function dropoutAll(sede, gene) {
    var count = 0;
    var sede = data[sede];
    var generation = sede[gene];
    var student = generation.students;
    for (var i = 0; i < student.length; i++) {
      if (student[i].active === false) {
        count++;
      } var percent = Math.round((count / student.length) * 100);
    } return percent + ' %';
  };
  // promedio de sprint 
  function promSprint(sede, gene) {
    var sede = data[sede];
    var generation = sede[gene];
    var student = generation.students;
    var array = [];
    for (var i = 0; i < student.length; i++) {
      var techAll = 0;
      var hseAll = 0;
      if (student[i].active === true) {
        var sprint = student[i].sprints.length;
        for (var s = 0; s < sprint; s++) {
          var tech = student[i].sprints[s].score.tech;
          techAll += tech;
          var hse = student[i].sprints[s].score.hse;
          hseAll += hse;
        }
        var promhse = hseAll / sprint;
        var promtech = techAll / sprint;

        array.push([promtech, promhse]);
        var complete = 0;
        for (var p = 0; p < array.length; p++) {
          if (array[p][0] >= 1260 && array[p][1] >= 840) {
            complete++;
          }
        } 
      } 
    } return complete++;
  }
  function totalAchivement(sede, gene) {
    var sede = data[sede];
    var generation = sede[gene];
    var student = generation.students;
    var promSprintTotal = promSprint(sede, gene);
    // porcentaje segun la cantidad de estudiantes que pasan
    // si tenemos 7 es el total de 16 estudiantes
  };
});
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);