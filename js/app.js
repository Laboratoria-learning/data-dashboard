
// Funcionalidad de tu producto
var localArequipa = data['AQP'];
var localCdmx = data['CDMX'];
var localLim = data['LIM'];
var localSantiago = data['SCL'];


// aqp62 ---> arequipa 2016-2
var promAq62 = localArequipa['2016-2'];
var studentsAq62 = promAq62.students;
// -------------------------------------------------------------------------
var nameListstudentsAq62 = '';
for (var i = 0; i < studentsAq62.length; i++) {
  nameAq62 = studentsAq62[i]['name'] + '/n';
  nameListstudentsAq62 += nameAq62;
}
console.log(nameListstudentsAq62);
// -------------------------------------------------------------------------

// estudiantes activas
var activeAq62 = 0;
// estudiantes inactivas
var inactiveAq62 = 0;

for (var i = 0; i < studentsAq62.length; i++) {
  if ((studentsAq62[i]['active']) === true) {
    activeAq62 ++;
  } else {
    inactiveAq62 ++;
  }
}

// desersion en porcentaje
var desertion = Math.floor((inactiveAq62 * 100) / (inactiveAq62 + activeAq62)) + '%';
// students currenly enrolled
var enrolled = inactiveAq62 + activeAq62;

// ver el total que pasaron el 70% (del total de puntos de hse y tecnico)
countPastTarget = 0;
aqp62notasArr = [];
var contador = 0;
for (var i = 0; i < studentsAq62.length; i++) {
  if (contador !== 0) {
    aqp62notasArr.push(contador);
  } else {
  }
  contador = 0;
  for (var j = 0; j < studentsAq62[i]['sprints'].length; j++) {
    var notaSprint = (studentsAq62[i]['sprints'][j]['score']['tech']) + (studentsAq62[i]['sprints'][j]['score']['hse']);
    contador += notaSprint;
  }
}

for (var notas = 0; notas < aqp62notasArr.length; notas++) {
  promedio = (aqp62notasArr[notas]) / 4;
  // console.log(promedio);
  if (promedio > 2100)
    countPastTarget++;
}
// lsta con todas las notas promedio de las 15 alumnas
// console.log(aqp62notasArr);
// alumnas que pasaron el 70% en porcenraje (falta obtener countPastTarget)
var countPastTargetPorc = Math.round((countPastTarget * 100) / (studentsAq62.length)) + '%';

// nps
var promAq62ratng = promAq62.ratings;
npsPromoter = 0;
npsDetractors = 0;
npsPassive = 0;

for (var i = 0; i < promAq62ratng.length; i++) {
  // for (var j = 0; j < promAq61ratng[i]['nps'].length; j++)
  npsPromoter += promAq62ratng[i]['nps']['promoters'];
  npsPassive += promAq62ratng[i]['nps']['passive'];
  npsDetractors += promAq62ratng[i]['nps']['detractors'];
  npsCantTotal = (npsPromoter + npsPassive + npsDetractors);

  npsPromotersPerc = Math.round((npsPromoter * 100) / npsCantTotal) ;
  npsPassivePerc = Math.round((npsPassive * 100) / npsCantTotal);
  npsDetractorsPerc = Math.round((npsDetractors * 100) / npsCantTotal);

  npsTotal = Math.round(npsPromotersPerc - npsDetractorsPerc) + '%';
}

// satisfacion de estudiantes con la experiencia laboratoria
noCumpleExp = 0;
cumpleExp = 0;
superaExp = 0;
for (var i = 0; i < promAq62ratng.length; i++) {
  noCumpleExp += promAq62ratng[i]['student']['no-cumple'];
  cumpleExp += promAq62ratng[i]['student']['cumple'];
  superaExp += promAq62ratng[i]['student']['supera'];
}

// puntuación promedio de los profesores
var scoreTeachers = 0;
for (i = 0; i < promAq62ratng.length; i++) {
  scoreTeachers += promAq62ratng[i]['teacher'];
}
// toFixed --> función para limitar el número de decimales con su parametro
var scoreTeachersTotal = (scoreTeachers / 4).toFixed(1);
// alert(scoreTeachersTotal);

// puntuacion promedio de jedis
var scoreJedis = 0;
for (i = 0; i < promAq62ratng.length; i++) {
  scoreJedis += promAq62ratng[i]['jedi'];
}
var scoreJedisTotal = (scoreJedis / 4).toFixed(1);
// ----------------------------------------------------------------------------------------------------------------------------------------
// Aq71 ----> arequipa 2017-1
var promAq71 = localArequipa['2017-1'];
var studentsAq71 = promAq71.students;
// estudiantes activas
var activeAq71 = 0;
// estudiantes inactivas
var inactiveAq71 = 0;

for (var i = 0; i < studentsAq71.length; i++) {
  if ((studentsAq71[i]['active']) === true) {
    activeAq71 ++;
  } else {
    inactiveAq71 ++;
  }
}

// desersion en porcentaje
var desertionAq71 = Math.floor((inactiveAq71 * 100) / (inactiveAq71 + activeAq71)) + '%';
// students currenly enrolled
var enrolledAq71 = inactiveAq71 + activeAq71;

// ver el total que pasaron el 70% (del total de puntos de hse y tecnico)
countPastTargetAqp71 = 0;
aqp71notasArr = [];
var contadorAqp71 = 0;
for (var i = 0; i < studentsAq71.length; i++) {
  if (contadorAqp71 !== 0) {
    aqp71notasArr.push(contadorAqp71);
  } else {
  }
  contadorAqp71 = 0;
  for (var j = 0; j < studentsAq71[i]['sprints'].length; j++) {
    var notaSprintAqp71 = (studentsAq71[i]['sprints'][j]['score']['tech']) + (studentsAq71[i]['sprints'][j]['score']['hse']);
    contadorAqp71 += notaSprintAqp71;
  }
}
for (var notasAqp71 = 0; notasAqp71 < aqp71notasArr.length; notasAqp71++) {
  promedioAqp71 = (aqp71notasArr[notasAqp71]) / 3;
  console.log(promedioAqp71);
  if (promedioAqp71 > 2100)
    countPastTargetAqp71++;
}
// lsta con todas las notas de las 15 alumnas y sus 3 sprints
console.log(aqp71notasArr);
// alumnas que pasaron el 70% en porcenraje (falta obtener countPastTargetAqp71)
var countPastTargetPorcAqp71 = Math.round((countPastTargetAqp71 * 100) / (studentsAq71.length)) + '%';

// nps
var promAq71ratng = promAq71.ratings;
npsPromoterAqp71 = 0;
npsDetractorsAqp71 = 0;
npsPassiveAqp71 = 0;

for (var i = 0; i < promAq71ratng.length; i++) {
  // for (var j = 0; j < promAq61ratng[i]['nps'].length; j++)
  npsPromoterAqp71 += promAq71ratng[i]['nps']['promoters'];
  npsPassiveAqp71 += promAq71ratng[i]['nps']['passive'];
  npsDetractorsAqp71 += promAq71ratng[i]['nps']['detractors'];
  npsCantTotalAqp71 = (npsPromoterAqp71 + npsPassiveAqp71 + npsDetractorsAqp71);

  npsPromotersPercAqp71 = Math.round((npsPromoterAqp71 * 100) / npsCantTotalAqp71) ;
  npsPassivePercAqp71 = Math.round((npsPassiveAqp71 * 100) / npsCantTotalAqp71);
  npsDetractorsPercAqp71 = Math.round((npsDetractorsAqp71 * 100) / npsCantTotalAqp71);

  npsTotalAqp71 = Math.round(npsPromotersPercAqp71 - npsDetractorsPercAqp71) + '%';
}
// satisfacion de estudiantes con la experiencia laboratoria
noCumpleExpAqp71 = 0;
cumpleExpAqp71 = 0;
superaExpAqp71 = 0;
for (var i = 0; i < promAq71ratng.length; i++) {
  noCumpleExpAqp71 += promAq71ratng[i]['student']['no-cumple'];
  cumpleExpAqp71 += promAq71ratng[i]['student']['cumple'];
  superaExpAqp71 += promAq71ratng[i]['student']['supera'];
}
// puntuación promedio de los profesores
var scoreTeachersAqp71 = 0;
for (i = 0; i < promAq71ratng.length; i++) {
  scoreTeachersAqp71 += promAq71ratng[i]['teacher'];
  console.log(promAq71ratng[i]['teacher']);
}
// toFixed --> función para limitar el número de decimales con su parametro
var scoreTeachersTotalAqp71 = (scoreTeachersAqp71 / 3).toFixed(1);
// alert(scoreTeachersTotal);

// puntuacion promedio de jedis
var scoreJedisAqp71 = 0;
for (i = 0; i < promAq71ratng.length; i++) {
  scoreJedisAqp71 += promAq71ratng[i]['jedi'];
}
var scoreJedisTotalAqp71 = (scoreJedisAqp71 / 3).toFixed(1);

// ----------------------------------------------------------------------------------------------------------------------------------------------
window.addEventListener('load',function(){
  document.getElementById('white').setAttribute('class','disappear');
})
var selectSede = document.getElementById('sedes');
selectSede.addEventListener('change', function(event) {
  if (event.target.value === 'aqp62') {
    document.getElementById('enrolled').innerHTML = enrolled;
    document.getElementById('dropout').innerHTML = desertion;
    document.getElementById('target').innerHTML = countPastTarget;
    document.getElementById('target-percent').innerHTML = countPastTargetPorc;
    document.getElementById('nps').innerHTML = npsTotal;
    document.getElementById('promoter').innerHTML = npsPromotersPerc + '% Promoters';
    document.getElementById('passive').innerHTML = npsPassivePerc + '% Passive';
    document.getElementById('detractors').innerHTML = npsDetractorsPerc + '% Detractors';
    document.getElementById('scoret').innerHTML = scoreTeachersTotal;
    document.getElementById('scorej').innerHTML = scoreJedisTotal;
  } else if (event.target.value === 'aqp71') {
    document.getElementById('enrolled').innerHTML = enrolledAq71;
    document.getElementById('dropout').innerHTML = desertionAq71;
    document.getElementById('target').innerHTML = countPastTargetAqp71;
    document.getElementById('target-percent').innerHTML = countPastTargetPorcAqp71;
    document.getElementById('nps').innerHTML = npsTotalAqp71;
    document.getElementById('promoter').innerHTML = npsPromotersPercAqp71 + '% Promoters';
    document.getElementById('passive').innerHTML = npsPassivePercAqp71 + '% Passive';
    document.getElementById('detractors').innerHTML = npsDetractorsPercAqp71 + '% Detractors';
    document.getElementById('scoret').innerHTML = scoreTeachersTotalAqp71;
    document.getElementById('scorej').innerHTML = scoreJedisTotalAqp71;
  }
});

var studentsPage = document.getElementById('students');
studentsPage.addEventListener('click', function(event) {
  document.getElementById('content').setAttribute('class','disappear');
  document.getElementById('content-two').setAttribute('class','appear');
  document.getElementById('white').setAttribute('class','disappear');
  document.getElementById('orangeline').setAttribute('class','margin-left');
  document.getElementById('students').setAttribute('class','cursor-change');
});
studentsPage.addEventListener('mouseover', function(event) {
  document.getElementById('students').setAttribute('class','cursor-hand');
});

var overview = document.getElementById('overview');
overview.addEventListener('click', function(event) {
  document.getElementById('content').setAttribute('class', 'appear');
  document.getElementById('content-two').setAttribute('class', 'disappear');
  document.getElementById('white').setAttribute('class','disappear');
  document.getElementById('orangeline').setAttribute('class','margin-none');
});

overview.addEventListener('mouseover', function(event) {
  document.getElementById('overview').setAttribute('class','cursor-hand');
});

var menuhamburger = document.getElementById("button");
menuhamburger.addEventListener('click', function(event) {
  document.getElementById('all-content').setAttribute('class','disappear');
  document.getElementById('white').setAttribute('class','appear');
});
white.addEventListener('click', function(event) {
  document.getElementById('all-content').setAttribute('class','appear');
  document.getElementById('white').setAttribute('class','disappear');
});

button.addEventListener('mouseover', function(event) {
  document.getElementById('button').setAttribute('class','cursor-hand');
});

white.addEventListener('mouseover', function(event) {
  document.getElementById('white').setAttribute('class','cursor-hand');
});
