
// funcionalidad menu desplegable
var submenu = document.getElementsByClassName('submenu');
for (var i = 0; i < submenu.length; i++) {
  submenu[i].addEventListener('click', showMenu);
}

function showMenu() {
  var choose = this.getElementsByClassName('choose')[0];


  if (choose.classList.contains('hide')) {
    choose.classList.remove('hide');
    choose.classList.add('showMenuShow');
  } else {
    choose.classList.remove('showMenuShow');
    choose.classList.add('hide');
  }
}
// div contenedor de resultados
var enrollmentDiv1 = document.getElementById('enrollmentDiv1');
var enrollmentDiv2 = document.getElementById('enrollmentDiv2');
var nps1 = document.getElementById('nps1');
var nps2 = document.getElementById('nps2');
var teacherRating = document.getElementById('teacherRating');
var jediMAster = document.getElementById('jediMAster');
// Generaciones en el menu desplegable
var aqp20162 = document.getElementById('AQP20162');
var aqp20171 = document.getElementById('AQP20171');
var cdmx20171 = document.getElementById('CDMX20171');
var cdmx20172 = document.getElementById('CDMX20172');
var lim20162 = document.getElementById('LIM20162');
var lim20171 = document.getElementById('LIM20171');
var lim20172 = document.getElementById('LIM20172');
var scl20162 = document.getElementById('SCL20162');
var scl20171 = document.getElementById('SCL20171');
var scl20172 = document.getElementById('SCL20172');
// funcionalidad Generaciones en el menu desplegable
var columnchart1Values = document.getElementById('columnchart1Values');
function faqp20162() {
  enrollmentDiv1.textContent = numEstudentsAQP20162;
  enrollmentDiv2.textContent = percDesertedAQP20162;
  nps1.textContent = npsAQP20162;
  nps2.textContent = npsPromotersAQP20162A + npsPassivesAQP20162B + npsDetractorsAQP20162C ;
  teacherRating.textContent = averagePointsTeachersAQP20162;
  jediMAster.textContent = averagePointsJediAQP20162;
  columnchart1Values.classList.add('show');
}
function faqp20171() {
  enrollmentDiv1.textContent = numEstudentsAQP20171;
  enrollmentDiv2.textContent = percDesertedAQP20171;
  nps1.textContent = npsAQP20171;
  nps2.textContent = npsPromotersAQP20171A + npsPassivesAQP20171B + npsDetractorsAQP20171C ;
  teacherRating.textContent = averagePointsTeachersAQP20171;
  jediMAster.textContent = averagePointsJediAQP20171;
  columnchart1Values.classList.add('show');
}
function fcdmx20171() {
  enrollmentDiv1.textContent = numEstudentsCDMX20171;
  enrollmentDiv2.textContent = percDesertedCDMX20171;
  nps1.textContent = npsCDMX20171;
  nps2.textContent = npsPromotersCDMX20171A + npsPassivesCDMX20171B + npsDetractorsCDMX20171C ;
  teacherRating.textContent = averagePointsTeachersCDMX20171;
  jediMAster.textContent = averagePointsJedisCDMX20171;
  columnchart2Values.classList.add('show');
}
function fcdmx20172() {
  enrollmentDiv1.textContent = numEstudentsCDMX20172;
  enrollmentDiv2.textContent = percDesertedCDMX20172;
  nps1.textContent = npsCDMX20172;
  nps2.textContent = npsPromotersCDMX20172A + npsPassivesCDMX20172B + npsDetractorsCDMX20172C ;
  teacherRating.textContent = averagePointsTeachersCDMX20172;
  jediMAster.textContent = averagePointsJedisCDMX20172;
  columnchart2Values.classList.add('show');
}
function flim20162() {
  enrollmentDiv1.textContent = numEstudentsLIM20162;
  enrollmentDiv2.textContent = percDesertedLIM20162;
  nps1.textContent = npsLIM20162;
  nps2.textContent = npsPromotersLIM20162A + npsPassivesLIM20162B + npsDetractorsLIM20162C ;
  teacherRating.textContent = averagePointsTeachersLIM20162;
  jediMAster.textContent = averagePointsJedisLIM20162;
  columnchart3Values.classList.add('show');
}
function flim20171() {
  enrollmentDiv1.textContent = numEstudentsLIM20171;
  enrollmentDiv2.textContent = percDesertedLIM20171;
  nps1.textContent = npsLIM20171;
  nps2.textContent = npsPromotersLIM20171A + npsPassivesLIM20171B + npsDetractorsLIM20171C ;
  teacherRating.textContent = averagePointsTeachersLIM20171;
  jediMAster.textContent = averagePointsJedisLIM20171;
  columnchart3Values.classList.add('show');
}
function flim20172() {
  enrollmentDiv1.textContent = numEstudentsLIM20172;
  enrollmentDiv2.textContent = percDesertedLIM20172;
  nps1.textContent = npsLIM20172;
  nps2.textContent = npsPromotersLIM20172A + npsPassivesLIM20172B + npsDetractorsLIM20172C ;
  teacherRating.textContent = averagePointsTeachersLIM20172;
  jediMAster.textContent = averagePointsJedisLIM20172;
  columnchart3Values.classList.add('show');
}
function fscl20162() {
  enrollmentDiv1.textContent = numEstudentsSCL20162;
  enrollmentDiv2.textContent = percDesertedSCL20162;
  nps1.textContent = npsSCL20162;
  nps2.textContent = npsPromotersSCL20162A + npsPassivesSCL20162B + npsDetractorsSCL20162C ;
  teacherRating.textContent = averagePointsTeachersSCL20162;
  jediMAster.textContent = averagePointsJedisSCL20162;
  columnchart4Values.classList.add('show');
}
function fscl20171() {
  enrollmentDiv1.textContent = numEstudentsSCL20171;
  enrollmentDiv2.textContent = percDesertedSCL20171;
  nps1.textContent = npsSCL20171;
  nps2.textContent = npsPromotersSCL20171A + npsPassivesSCL20171B + npsDetractorsSCL20171C ;
  teacherRating.textContent = averagePointsTeachersSCL20171;
  jediMAster.textContent = averagePointsJedisSCL20171;
  columnchart4Values.classList.add('show');
}
function fscl20172() {
  enrollmentDiv1.textContent = numEstudentsSCL20172;
  enrollmentDiv2.textContent = percDesertedSCL20172;
  nps1.textContent = npsSCL20172;
  nps2.textContent = npsPromotersSCL20172A + npsPassivesSCL20172B + npsDetractorsSCL20172C ;
  teacherRating.textContent = averagePointsTeachersSCL20172;
  jediMAster.textContent = averagePointsJedisSCL20172;
  columnchart4Values.classList.add('show');
}
// eventos Generaciones en el menu desplegable
aqp20162 .addEventListener('click', faqp20162);
aqp20171 .addEventListener('click', faqp20171);
cdmx20171 .addEventListener('click', fcdmx20171);
cdmx20172 .addEventListener('click', fcdmx20172);
lim20162 .addEventListener('click', flim20162);
lim20171 .addEventListener('click', flim20171);
lim20172 .addEventListener('click', flim20172);
scl20162 .addEventListener('click', fscl20162);
scl20171 .addEventListener('click', fscl20171);
scl20172 .addEventListener('click', fscl20172);
