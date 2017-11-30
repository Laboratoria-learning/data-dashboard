
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
// Generaciones en el menu desplegable
var aqp20162 = document.getElementById('AQP20162');
var aqp20171 = document.getElementById('AQP20171');
var cdmx20171 = document.getElementById('CDMX20171');
// funcionalidad Generaciones en el menu desplegable
function faqp20162() {
  enrollmentDiv1.textContent = numEstudentsAQP20162;
  enrollmentDiv2.textContent = percDesertedAQP20162;
}
function faqp20171() {
  enrollmentDiv1.textContent = numEstudentsAQP20171;
  enrollmentDiv2.textContent = percDesertedAQP20171;
}
function fcdmx20171() {
  enrollmentDiv1.textContent = numEstudentsCDMX20171;
  enrollmentDiv2.textContent = percDesertedCDMX20171;
}
// eventos Generaciones en el menu desplegable
aqp20162 .addEventListener('click', faqp20162);
aqp20171 .addEventListener('click', faqp20171);
cdmx20171 .addEventListener('click', fcdmx20171);
