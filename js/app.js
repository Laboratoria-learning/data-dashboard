
window.addEventListener('load', function() {
  var selectSede = document.getElementById('sedes');
  var promoArequipa62 = data['AQP']['2016-2'];
  var promoArequipa71 = data['AQP']['2017-1'];
  var promoCdmx71 = data['CDMX']['2017-1'];
  var promoCdmx72 = data['CDMX']['2017-2'];
  var promoLim62 = data['LIM']['2016-2'];
  var promoLim71 = data['LIM']['2017-1'];
  var promoLim72 = data['LIM']['2017-2'];
  var promoSantiago62 = data['SCL']['2016-2'];
  var promoSantiago71 = data['SCL']['2017-1'];
  var promoSantiago72 = data['SCL']['2017-2'];

  selectSede.addEventListener('change', function(event) {
    // FUNCIONES
    // El total de estudiantes presentes por sede y generación.
    function dataStudents(promo) {
      // estudiantes activas y desercion
      var students = promo.students;
      // estudiantes activas
      var activeStudents = 0;
      // estudiantes inactivas
      var inactiveStudents = 0;

      for (var i = 0; i < students.length; i++) {
        if ((students[i]['active']) === true) {
          activeStudents ++;
        } else {
          inactiveStudents ++;
        }
      }
      // desersion en porcentaje
      var desertion = Math.floor((inactiveStudents * 100) / students.length) + '%';
      // students currenly enrolled
      var enrolled = activeStudents;

      document.getElementById('enrolled').innerHTML = activeStudents;
      document.getElementById('dropout').innerHTML = desertion;

      // -------------------------------------------------------------------------------------------------------------------------------
      // Alumnas que pasaron el 70%
      var countPastTarget = 0;
      var countPastTargetTech = 0;
      var countPastTargetHse = 0;
      // lista con notas de los 4 sprints de las alumnas
      var allStudentsNotasTotalArr = [];
      // variables para la sumatoria de las notas tech + hse
      var notaTotal = 0;
      var notaTechTotal = 0;
      var notaHseTotal = 0;
      for (var i = 0; i < students.length; i++) {
        if (notaTotal !== 0) {
          allStudentsNotasTotalArr.push(notaTotal);
        }
        notaTechTotal = 0;
        notaHseTotal = 0;
        for (var j = 0; j < students[i]['sprints'].length; j++) {
          var notaTech = students[i]['sprints'][j]['score']['tech'];
          var notaHse = students[i]['sprints'][j]['score']['hse'];
          // sumatoria de las notas tech de todos los sprints
          notaTechTotal += notaTech;
          // sumatoria de las notas hse de todos los sprints
          notaHseTotal += notaHse;
          // la meta es superar 70% en tech y en hse
          if ((notaTechTotal / students[i]['sprints'].length) > 1260 && (notaHseTotal / students[i]['sprints'].length) > 940) {
            countPastTarget++;
          }
          // META DEL 70% POR AREAS
          // la meta es superar 70% en tech
          if ((notaTechTotal / students[i]['sprints'].length) > 1260) {
            countPastTargetTech++;
          }
          // la meta es superar 70% en hse
          if ((notaHseTotal / students[i]['sprints'].length) > 940) {
            countPastTargetHse++;
          }
        }
      }
      var countPastTargetPorc = Math.round((countPastTarget * 100) / (students.length)) + '%';
      var countPastTargetTechPorc = Math.round((countPastTargetTech * 100) / (students.length)) + '%';
      var countPastTargetHsePorc = Math.round((countPastTargetHse * 100) / (students.length)) + '%';

      document.getElementById('target').innerHTML = countPastTarget;
      document.getElementById('target-percent').innerHTML = countPastTargetPorc;
      document.getElementById('tech').innerHTML = countPastTargetTech;
      document.getElementById('tech-percent').innerHTML = countPastTargetTechPorc;
      document.getElementById('hse').innerHTML = countPastTargetHse;
      document.getElementById('hse-percent').innerHTML = countPastTargetHsePorc;
      // ---------------------------------------------------------------------------------------------------------------------------------
      // nps
      var promoRating = promo.ratings;
      var npsPromoter = 0;
      var npsDetractors = 0;
      var npsPassive = 0;

      for (var i = 0; i < promoRating.length; i++) {
        npsPromoter += promoRating[i]['nps']['promoters'];
        npsPassive += promoRating[i]['nps']['passive'];
        npsDetractors += promoRating[i]['nps']['detractors'];
      }
      npsCantTotal = (npsPromoter + npsPassive + npsDetractors);

      npsPromotersPerc = Math.round((npsPromoter * 100) / npsCantTotal);
      npsPassivePerc = Math.round((npsPassive * 100) / npsCantTotal);
      npsDetractorsPerc = Math.round((npsDetractors * 100) / npsCantTotal);

      npsTotal = Math.round(npsPromotersPerc - npsDetractorsPerc) + '%';
      document.getElementById('nps').innerHTML = npsTotal;
      document.getElementById('promoter').innerHTML = npsPromotersPerc + '% Promoter';
      document.getElementById('passive').innerHTML = npsPassivePerc + '% Passive';
      document.getElementById('detractors').innerHTML = npsDetractorsPerc + '% Detractor';
      // --------------------------------------------------------------------------------------------------------------------------------
      // satisfacion de estudiantes con la experiencia laboratoria
      noCumpleExp = 0;
      cumpleExp = 0;
      superaExp = 0;
      for (var i = 0; i < promoRating.length; i++) {
        noCumpleExp += promoRating[i]['student']['no-cumple'];
        cumpleExp += promoRating[i]['student']['cumple'];
        superaExp += promoRating[i]['student']['supera'];
      }
      totalExp = noCumpleExp + cumpleExp + superaExp;
      var satisfaction = Math.round(((cumpleExp + superaExp) * 100) / totalExp);
      document.getElementById('satisfaction').innerHTML = satisfaction;

      // ----------------------------------------------------------------------------------------------------------------------------------
      // puntuación promedio de los profesores y jedis
      var scoreTeacher = 0;
      var scoreJedi = 0;
      for (i = 0; i < promoRating.length; i++) {
        scoreTeacher += promoRating[i]['teacher'];
        scoreJedi += promoRating[i]['jedi'];
      }
      // puntuacion promedio de teacher
      var scoreTeacherTotal = (scoreTeacher / promo['ratings'].length).toFixed(1);
      // puntuacion promedio de jedis
      var scoreJedisTotal = (scoreJedi / promo['ratings'].length).toFixed(1);
      // toFixed --> función para limitar el número de decimales con su parametro
      // alert(scoreTeachersTotal);
      document.getElementById('scoret').innerHTML = scoreTeacherTotal;
      document.getElementById('scorej').innerHTML = scoreJedisTotal;

      var techSprintSelect = document.getElementById('tech-skills');
      techSprintSelect.addEventListener('change', function(event) {
        var notasTechSprint1Arr = [];
        var notasTechSprint2Arr = [];
        var notasTechSprint3Arr = [];
        var notasTechSprint4Arr = [];

        for (var i = 0; i < students.length; i++) {
          for (var j = 0; j < students[i]['sprints'].length; j++) {
            var notaTechSprint = students[i]['sprints'][j]['score']['tech'];
            if (j === 0) {
              notasTechSprint1Arr.push(notaTechSprint);
            }
            if (j === 1) {
              notasTechSprint2Arr.push(notaTechSprint);
            }
            if (j === 2) {
              notasTechSprint3Arr.push(notaTechSprint);
            }
            if (j === 3) {
              notasTechSprint4Arr.push(notaTechSprint);
            }
          }
        }
        // console.log(notasTechSprint1Arr);
        // console.log(notasTechSprint2Arr);
        // console.log(notasTechSprint3Arr);
        // console.log(notasTechSprint4Arr);

        var pastTargetperSprint = 0;
        if (event.target.value === '1') {
          for (var i = 0 ;i < notasTechSprint1Arr.length ;i++) {
            if (notasTechSprint1Arr[i] > 1260) {
              pastTargetperSprint++;
            }
          }
        }
        if (event.target.value === '2') {
          for (var i = 0 ;i < notasTechSprint2Arr.length ;i++) {
            if (notasTechSprint2Arr[i] > 1260) {
              pastTargetperSprint++;
            }
          }
        }
        if (event.target.value === '3') {
          for (var i = 0 ;i < notasTechSprint3Arr.length ;i++) {
            if (notasTechSprint3Arr[i] > 1260) {
              pastTargetperSprint++;
            }
          }
        }
        if (event.target.value === '4') {
          for (var i = 0 ;i < notasTechSprint4Arr.length ;i++) {
            if (notasTechSprint4Arr[i] > 1260) {
              pastTargetperSprint++;
            }
          }
        }
        var pastTargetperSprintPorc = Math.round((pastTargetperSprint * 100) / (students.length)) + '%';
        document.getElementById('tech').innerHTML = pastTargetperSprint;
        document.getElementById('tech-percent').innerHTML = pastTargetperSprintPorc;
      });
      var hseSprintSelect = document.getElementById('hse-skills');
      hseSprintSelect.addEventListener('change', function(event) {
        var notasHseSprint1Arr = [];
        var notasHseSprint2Arr = [];
        var notasHseSprint3Arr = [];
        var notasHseSprint4Arr = [];

        for (var i = 0; i < students.length; i++) {
          for (var j = 0; j < students[i]['sprints'].length; j++) {
            var notaHseSprint = students[i]['sprints'][j]['score']['hse'];
            if (j === 0) {
              notasHseSprint1Arr.push(notaHseSprint);
            }
            if (j === 1) {
              notasHseSprint2Arr.push(notaHseSprint);
            }
            if (j === 2) {
              notasHseSprint3Arr.push(notaHseSprint);
            }
            if (j === 3) {
              notasHseSprint4Arr.push(notaHseSprint);
            }
          }
        }
        // console.log(notasHseSprint1Arr);
        // console.log(notasHseSprint2Arr);
        // console.log(notasHseSprint3Arr);
        // console.log(notasHseSprint4Arr);

        var pastTargetperSprintHse = 0;
        if (event.target.value === '1') {
          for (var i = 0 ;i < notasHseSprint1Arr.length ;i++) {
            if (notasHseSprint1Arr[i] > 940) {
              pastTargetperSprintHse++;
            }
          }
        }
        if (event.target.value === '2') {
          for (var i = 0 ;i < notasHseSprint2Arr.length ;i++) {
            if (notasHseSprint2Arr[i] > 940) {
              pastTargetperSprintHse++;
            }
          }
        }
        if (event.target.value === '3') {
          for (var i = 0 ;i < notasHseSprint3Arr.length ;i++) {
            if (notasHseSprint3Arr[i] > 940) {
              pastTargetperSprintHse++;
            }
          }
        }
        if (event.target.value === '4') {
          for (var i = 0 ;i < notasHseSprint4Arr.length ;i++) {
            if (notasHseSprint4Arr[i] > 940) {
              pastTargetperSprintHse++;
            }
          }
        }
        var pastTargetperSprintHsePorc = Math.round((pastTargetperSprintHse * 100) / (students.length)) + '%';
        document.getElementById('hse').innerHTML = pastTargetperSprintHse;
        document.getElementById('hse-percent').innerHTML = pastTargetperSprintHsePorc;
      });
    }

    if (event.target.value === 'aqp62') {
      dataStudents(promoArequipa62);
    }
    if (event.target.value === 'aqp71') {
      dataStudents(promoArequipa71);
    }
    if (event.target.value === 'cdmx71') {
      dataStudents(promoCdmx71);
    }
    if (event.target.value === 'cdmx72') {
      dataStudents(promoCdmx72);
    }
    if (event.target.value === 'lim62') {
      dataStudents(promoLim62);
    }
    if (event.target.value === 'lim71') {
      dataStudents(promoLim71);
    }
    if (event.target.value === 'lim72') {
      dataStudents(promoLim72);
    }
    if (event.target.value === 'sdc62') {
      dataStudents(promoSantiago62);
    }
    if (event.target.value === 'sdc71') {
      dataStudents(promoSantiago71);
    }
    if (event.target.value === 'sdc72') {
      dataStudents(promoSantiago72);
    }
    document.getElementById('total').innerHTML = students.length
  });
});
// -------------------------------------------------------------------------------------------------------------------------------------
// Eventos para tab
var studentsPage = document.getElementById('students');
studentsPage.addEventListener('click', function(event) {
  document.getElementById('content').setAttribute('class', 'disappear');
  document.getElementById('content-two').setAttribute('class', 'appear');
  document.getElementById('white').setAttribute('class', 'disappear');
  document.getElementById('orangeline').setAttribute('class', 'margin-left');
  document.getElementById('students').setAttribute('class', 'cursor-change');
});
studentsPage.addEventListener('mouseover', function(event) {
  document.getElementById('students').setAttribute('class', 'cursor-hand');
});

var overview = document.getElementById('overview');
overview.addEventListener('click', function(event) {
  document.getElementById('content').setAttribute('class', 'appear');
  document.getElementById('content-two').setAttribute('class', 'disappear');
  document.getElementById('white').setAttribute('class', 'disappear');
  document.getElementById('orangeline').setAttribute('class', 'margin-none');
});

overview.addEventListener('mouseover', function(event) {
  document.getElementById('overview').setAttribute('class', 'cursor-hand');
});
// --------------------------------------------------------------------------------------------------------------------------------------
// Eventos para el menú hamburguesa
var menuhamburger = document.getElementById('button');
menuhamburger.addEventListener('click', function(event) {
  document.getElementById('all-content').setAttribute('class', 'disappear');
  document.getElementById('white').setAttribute('class', 'appear');
});
white.addEventListener('click', function(event) {
  document.getElementById('all-content').setAttribute('class', 'appear');
  document.getElementById('white').setAttribute('class', 'disappear');
});
