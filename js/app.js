/* Funcionalidad de tu producto*/
window.addEventListener('load', function() {
  var currentStudents = document.getElementById('currentStudents');
  var sede = document.getElementsByClassName('sede');
  var promocion = document.getElementsByClassName('promocion');

  var student = document.getElementById('student');// al quiero hacer click
  var container1 = document.getElementById('container1');// al que quiero que aparezca
  var overview = document.getElementById('overvi');// opcion overview
  var overcon = document.getElementById('overview');// contenido overview
  

  function studentsLaboratoria(sede, generacion) {
    
  }  
  studentsLaboratoria('Lima', '2017-II');


  student.addEventListener('click', elige);
  function elige() {
    container1.style.display = 'block';
    overcon.style.display = 'none';
  }
  overview.addEventListener('click', over);
  function over() {
    overcon.style.display = 'block';
    container1.style.display = 'none';
  }
  /* menu.addEventListener('click',icono);
  function icono() {
  opcionMenu.style.display = 'block';
  }*/


  

  
 /* btnmenu.addEventListener('click', showMenu);
  function showMenu() { 