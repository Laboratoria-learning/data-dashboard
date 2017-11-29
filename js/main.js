$(document).ready(function() {
  // MOSTRANDO Y OCULTANDO MENU
  $('#button-menu').click(function() {
    if ($('#button-menu').attr('class') === 'fa fa-bars icons') {
      $('.navegacion').css({'width': '100%',
'background': 'rgba(0,0,0,.5)'}); // Mostramos al fondo transparente
      $('#button-menu').removeClass('fa fa-bars icons').addClass('fa fa-close icons'); // Agregamos el icono X
      $('.navegacion .menu').css({'left': '0px'}); // Mostramos el menu
    } else {
      $('.navegacion').css({'width': '0%',
'background': 'rgba(0,0,0,.0)'}); // Ocultamos el fonto transparente
      $('#button-menu').removeClass('fa fa-close icons').addClass('fa fa-bars icons'); // Agregamos el icono del Menu
      $('.navegacion .menu').css({'left': '-300px'}); // Ocultamos el Menu
    }
  });
});

/** ********************************************************/

var textFirst = document.querySelector('.first');
var textSecond = document.querySelector('.second');
var textThird = document.querySelector('.third');

function viewText(event) {
  var selection = event.target.dataset.selection;

  if (selection === 'one') {
    textThird.style.display = 'none';
    textSecond.style.display = 'none';
    textFirst.style.display = 'block';
  } else if (selection === 'two') {
    textThird.style.display = 'none';
    textSecond.style.display = 'block';
    textFirst.style.display = 'none';
  } else if (selection === 'tree') {
    textThird.style.display = 'block';
    textSecond.style.display = 'none';
    textFirst.style.display = 'none';
  }
}

function loadPage() {
  textFirst.style.display = 'none';
  textSecond.style.display = 'none';
  textThird.style.display = 'none';
  var tabs = document.getElementsByClassName('tab');
  for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', viewText);
  }
}