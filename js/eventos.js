
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
var divEnrollment = document.getElementById('divEnrollment');

// Generaciones en el menu desplegable
var aqp20162 = document.getElementById('AQP20162');
var aqp20171 = document.getElementById('AQP20171');
var cdmx20171 = document.getElementById('CDMX20171');
// funcionalidad Generaciones en el menu desplegable
function faqp20162() {
  divEnrollment.textContent = numEstudentsAQP20162;
}
function faqp20171() {
  divEnrollment.textContent = numEstudentsAQP20171;
}
function fcdmx20171() {
  divEnrollment.textContent = numEstudentsCDMX20171;
}
// eventos Generaciones en el menu desplegable
aqp20162 .addEventListener('click', faqp20162);
aqp20171 .addEventListener('click', faqp20171);
cdmx20171 .addEventListener('click', fcdmx20171);
