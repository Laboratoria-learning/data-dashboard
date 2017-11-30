/* event tab*/
var mostrarOcultar = function(evento) {
    var tabSeleccionado = evento.target.dataset.tabSeleccionado;
    var overview = document.getElementById('overview');
    var students = document.getElementById('students');
    var teachers = document.getElementById('teachers');
    if (tabSeleccionado === 'tabOverview') {
      console.log('mostrar overview');
      /* hide students y teachers*/
      students.style.display = 'none';
      teachers.style.display = 'none';
      /* show overview*/
      overview.style.display = 'block';
    } else if (tabSeleccionado === 'tabStudents') {
      console.log('mostrar students');
      /* hide overview y teachers*/
      overview.style.display = 'none';
      teachers.style.display = 'none';
      /* show overview*/
      students.style.display = 'block';
    } else if (tabSeleccionado === 'tabTeachers') {
      console.log('mostrar teachers');
      /* hide overview y students*/
      overview.style.display = 'none';
      students.style.display = 'none';
      /* show teachers*/
      teachers.style.display = 'block';
    }
  };
  var cargarPagina = function() {
    students.style.display = 'none';
    teachers.style.display = 'none';
    var elementosTab = document.getElementsByClassName('tab');
    for (var i = 0; i < elementosTab.length; i++) {
      elementosTab[i].addEventListener('click', mostrarOcultar);
    }
  };
  cargarPagina();