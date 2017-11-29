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
