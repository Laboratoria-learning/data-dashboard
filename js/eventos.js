
// funcionalidad menu desplegable
var submenu = document.getElementsByClassName('submenu');
for (var i = 0; i < submenu.length; i++) {
  submenu[i].addEventListener('click', showMenu);
}

function showMenu() {
  var choose = this.getElementsByClassName('choose')[0];


  if (choose.classList.contains('hide')) {
    choose.classList.remove('hide');
    choose.classList.add('show');
  } else {
    choose.classList.remove('show');
    choose.classList.add('hide');
  }
}
// div contenedor de resultados
var enrollmentDiv1 = document.getElementById('enrollmentDiv1');
var enrollmentDiv2 = document.getElementById('enrollmentDiv2');
var nps1 = document.getElementById('nps1');
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
function faqp20162() {
  enrollmentDiv1.textContent = numEstudentsAQP20162;
  enrollmentDiv2.textContent = percDesertedAQP20162;
  nps1.textContent = npsAQP20162;
  teacherRating.textContent = averagePointsTeachersAQP20162;
  jediMAster.textContent = averagePointsJediAQP20162;
}
function faqp20171() {
  enrollmentDiv1.textContent = numEstudentsAQP20171;
  enrollmentDiv2.textContent = percDesertedAQP20171;
  nps1.textContent = npsAQP20171;
  teacherRating.textContent = averagePointsTeachersAQP20171;
  jediMAster.textContent = averagePointsJediAQP20171;
}
function fcdmx20171() {
  enrollmentDiv1.textContent = numEstudentsCDMX20171;
  enrollmentDiv2.textContent = percDesertedCDMX20171;
  nps1.textContent = npsCDMX20171;
  teacherRating.textContent = averagePointsTeachersCDMX20171;
  jediMAster.textContent = averagePointsJedisCDMX20171;
}
function fcdmx20172() {
  enrollmentDiv1.textContent = numEstudentsCDMX20172;
  enrollmentDiv2.textContent = percDesertedCDMX20172;
  nps1.textContent = npsCDMX20172;
  teacherRating.textContent = averagePointsTeachersCDMX20172;
  jediMAster.textContent = averagePointsJedisCDMX20172;
}
function flim20162() {
  enrollmentDiv1.textContent = numEstudentsLIM20162;
  enrollmentDiv2.textContent = percDesertedLIM20162;
  nps1.textContent = npsLIM20162;
  teacherRating.textContent = averagePointsTeachersLIM20162;
  jediMAster.textContent = averagePointsJedisLIM20162;
}
function flim20171() {
  enrollmentDiv1.textContent = numEstudentsLIM20171;
  enrollmentDiv2.textContent = percDesertedLIM20171;
  nps1.textContent = npsLIM20171;
  teacherRating.textContent = averagePointsTeachersLIM20171;
  jediMAster.textContent = averagePointsJedisLIM20171;
}
function flim20172() {
  enrollmentDiv1.textContent = numEstudentsLIM20172;
  enrollmentDiv2.textContent = percDesertedLIM20172;
  nps1.textContent = npsLIM20172;
  teacherRating.textContent = averagePointsTeachersLIM20172;
  jediMAster.textContent = averagePointsJedisLIM20172;
}
function fscl20162() {
  enrollmentDiv1.textContent = numEstudentsSCL20162;
  enrollmentDiv2.textContent = percDesertedSCL20162;
  nps1.textContent = npsSCL20162;
  teacherRating.textContent = averagePointsTeachersSCL20162;
  jediMAster.textContent = averagePointsJedisSCL20162;
}
function fscl20171() {
  enrollmentDiv1.textContent = numEstudentsSCL20171;
  enrollmentDiv2.textContent = percDesertedSCL20171;
  nps1.textContent = npsSCL20171;
  teacherRating.textContent = averagePointsTeachersSCL20171;
  jediMAster.textContent = averagePointsJedisSCL20171;
}
function fscl20172() {
  enrollmentDiv1.textContent = numEstudentsSCL20172;
  enrollmentDiv2.textContent = percDesertedSCL20172;
  nps1.textContent = npsSCL20172;
  teacherRating.textContent = averagePointsTeachersSCL20172;
  jediMAster.textContent = averagePointsJedisSCL20172;
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
