$(document).ready(function() {
  // MOSTRANDO Y OCULTANDO MENU
  $('#button-menu').click(function() {
    if ($('#button-menu').attr('class') === 'fa fa-bars icons') {
      $('.navegacion').css({'width': '100%', 'background': 'rgba(0,0,0,.5)'}); // Mostramos al fondo transparente
      $('#button-menu').removeClass('fa fa-bars icons').addClass('fa fa-close icons'); // Agregamos el icono X
      $('.navegacion .menu').css({'left': '0px'}); // Mostramos el menu
    } else {
      $('.navegacion').css({'width': '0%', 'background': 'rgba(0,0,0,.0)'}); // Ocultamos el fonto transparente
      $('#button-menu').removeClass('fa fa-close icons').addClass('fa fa-bars icons'); // Agregamos el icono del Menu
      $('.navegacion .menu').css({'left': '-300px'}); // Ocultamos el Menu
    }
  });
});