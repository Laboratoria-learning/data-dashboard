
 // Funcionalidad de tu producto
var localCdmx = data['CDMX'];
var localLim = data['LIM'];
var localSantiago = data['SCL'];
var localArequipa = data['AQP'];


var promAq62 = localArequipa['2016-2'];
var studentsAq62 = promAq62.students;
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

// ver el total que pasaron el 70% (del otal de puntos de hse y tecnico)
countPastTarget = 0
aqp62notasArr = [];
for (var i = 0; i < studentsAq62.length; i++) {
  for (var j = 0; j < studentsAq62[i]['sprints'].length; j++) {
    var notaSprint = (studentsAq62[i]['sprints'][j]['score']['tech']) + (studentsAq62[i]['sprints'][j]['score']['hse']);
    aqp62notasArr.push(notaSprint);
  }
}
// lsta con todas las notas de las 15 alumnas y sus 4 sprints
console.log(aqp62notasArr);

// obteniendo nota promedio de una alumna en sus cuatro sprint (optimisarx1000000)
aqp62notasPromArr = [];
var alumn1 = aqp62notasArr.slice(0, 4);
var nota1 = 0;
for (var i = 0 ; i < alumn1.length; i++) {
  nota1 += alumn1[i];
}
nota1prom = nota1 / 4;
aqp62notasPromArr.push(nota1prom);

// alumnas que pasaron el 70% en porcenraje (falta obtener countPastTarget)
var countPastTargetPorc = Math.round((countPastTarget * 100) / (studentsAq62.length * 4));

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

  npsPromotersPerc = (npsPromoter * 100) / npsCantTotal ;
  npsPassivePerc = (npsPassive * 100) / npsCantTotal;
  npsDetractorsPerc = (npsDetractors * 100) / npsCantTotal;

  npsTotal = Math.round(npsPromotersPerc - npsDetractorsPerc) + '%';
}







var selectSede = document.getElementById('sedes');
selectSede.addEventListener('change', function(event) {
  if (event.target.value === 'aqp62')
    document.getElementById('enrolled').innerHTML = enrolled;
  document.getElementById('dropout').innerHTML = desertion;
  document.getElementById('target').innerHTML = countPastTarget;
  document.getElementById('target-percent').innerHTML = countPastTargetPorc;
  document.getElementById('nps').innerHTML = npsTotal;
  document.getElementById('promoter').innerHTML = npsPromotersPerc + '% Promoters';
  document.getElementById('passive').innerHTML = npsPassivePerc + '% Passive';
  document.getElementById('detractor').innerHTML = npsDetractorsPerc + '% Detractors';
});
