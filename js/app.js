/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`

var boton = document.getElementById('btn');

function showMenu() {
  var menu = document.getElementById('menu-princ');

  if (menu.classList.contains('disabled-menu')) {
    menu.classList.remove('disabled-menu');
    menu.classList.add('menu');
  } else {
    menu.classList.remove('menu');
    menu.classList.add('disabled-menu');
  }
}

boton.addEventListener('click', showMenu);

var mostrarOcultar = function(event) {
  var tabSeleccionado = event.target.dataset.tabSeleccionado;
  var OVERVIEW = document.getElementById('OVERVIEW');
  var STUDENTS = document.getElementById('STUDENTS');
  var TEACHERS = document.getElementById('TEACHERS');

  if (tabSeleccionado === 'OVERVIEW') {
    STUDENTS.style.display = 'none';
    TEACHERS.style.display = 'none';
    OVERVIEW.style.display = 'block';
  } else if (tabSeleccionado === 'STUDENTS') {
    OVERVIEW.style.display = 'none';
    STUDENTS.style.display = 'block';
    TEACHERS.style.display = 'none';
  } else if (tabSeleccionado === 'TEACHERS') {
    OVERVIEW.style.display = 'none';
    STUDENTS.style.display = 'none';
    TEACHERS.style.display = 'block';
  }
};
var cargarPagina = function() {
  var OVERVIEW = document.getElementById('OVERVIEW');
  var STUDENTS = document.getElementById('STUDENTS');
  var TEACHERS = document.getElementById('TEACHERS');

  STUDENTS.style.display = 'none';
  TEACHERS.style.display = 'none';
  OVERVIEW.style.display = 'block';

  var elementosTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementosTab.length;i++) {
    elementosTab[i].addEventListener('click', mostrarOcultar);
  }
};

cargarPagina();
//
// Puedes hacer uso de la base de datos a través de la variable `data`
var sitie = Object.keys(data);
for (var i = 0; i < sitie.length; i++) {
  sitie[i];
}

selectionLocated = document.getElementById('selection-located');
selectionLocated.addEventListener('change', showPromo);
var studentaqp = data.AQP['2016-2'].students.length;
contactivo = 0;
coninactivo = 0;
for (var i = 0; i < studentaqp; i++) {
  if ((data.AQP['2016-2'].students[i]['active']) === true) {
    contactivo ++;
  } else {
    coninactivo ++;
  }
}
// desersion en porcentaje
var desertion = Math.floor((coninactivo * 100) / (coninactivo + contactivo)) + '%';
function showPromo(event) { // si no se 'e' o 'event' como paramentro dentro de la funcion se debe usar this pero aún no se lo que es pe'
//  console.log(event.target.value); //target es el que ejecutra el evento o el que dispara el evento-- esto con console.log sirve para comprobar que esta ocurriendo lo que queremos en la consola
  switch (true) {
  case event.target.value === 'lim':


    break;
  case event.target.value === 'aqp':
    document.getElementById('container-enrolled').innerHTML = contactivo;
    document.getElementById('container-deserte').innerHTML = desertion;
    break;
  case event.target.value === 'cl':

    break;
  default:
  }
} 
