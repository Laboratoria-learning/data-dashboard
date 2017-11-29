/*
 * Funcionalidad de tu producto
 */
 window.addEventListener('load', function() {

})

// Puedes hacer uso de la base de datos a través de la variable `data`
var localCdmx = data['CDMX'];
var localLim = data['LIM'];
var localSantiago = data['SCL'];
var localArequipa = data['AQP'];

var promAq62 = localArequipa['2016-2'];
var studentsAq62 = promAq62.students;
// estudiantes activas
var activeAq62 = 0;
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



// contando los que pasaron el 70%
// tecnico max = 1800
// hse max = 1200
// total max = 3000
// 70% = 2100

// ver el total que pasaron el 70% (del otal de puntos de hse y tecnico)
countPastTarget = 0
for (var i = 0; i < studentsAq62.length; i++) {
  for (var j = 0; j < studentsAq62[i]['sprints'].length; j++) {
    var notaSprint = (studentsAq62[i]['sprints'][j]['score']['tech']) + (studentsAq62[i]['sprints'][j]['score']['tech']);
    if (notaSprint >= 2100) {
      countPastTarget++;
    }
    // console.log(notaSprint);
  }
}
// pasaron el 70% en porcentaje
// this shit creo que no esta bien hecha x-x
var countPastTargetPorc = (countPastTarget * 100) / (studentsAq62.length * 4);

// nps
var promAq62ratng = promAq62.ratings;
npsPromoter = 0;
npsDetractors = 0;
npsPassive = 0;

for (var i = 0; i < promAq62ratng.length; i++) {
  // for (var j = 0; j < promAq61ratng[i]['nps'].length; j++)
  npsPromoter += promAq62ratng[i]['nps']['promoters'];
  npsPassive += promAq62ratng[i]['nps']['passive']
  npsDetractors += promAq62ratng[i]['nps']['detractors']
  npsCantTotal = npsPromoter + npsPassive + npsDetractors;

  npsTotal = (npsPromoter * 100) - (npsDetractors * 100) + '%';
  npsPromotersPerc = (npsPromoter * 100) / npsCantTotal + '%';
  npsPassivePerc = (npsPassive * 100) / npsCantTotal + '%';
  npsDetractorsPerc = (npsDetractors * 100) / npsCantTotal + '%';
}

console.log(npsPromotersPerc);
console.log(npsPassivePerc);
console.log(npsDetractorsPerc);

// console.log(npsDetractors);





//
//
// console.log(activeAq61);
// console.log(inactiveAq61);
// console.log('desercion: ' + desertion);
