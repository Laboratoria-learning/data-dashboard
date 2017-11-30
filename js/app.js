window.addEventListener('load', function() {
  var tabs = document.querySelectorAll('.tab');
  var contenidos = document.querySelectorAll('.inform');

  function toggleTab(elem) {
    for (var i = 0; i < elem.length; i++) {
      elem[i].addEventListener('click', showContainers);
    }
  }
  function showContainers() {
    for (var j = 0; j < contenidos.length; j++) {
      if (this.dataset.text === contenidos[j].dataset.text) {
        if (contenidos[j].classList.contains('hiden')) {
          contenidos[j].classList.remove('hiden');
        }
      } else {
        contenidos[j].classList.add('hiden');
      }
      /* this.classList.add('red');*/
    }
  }
  
  var sede = document.getElementById('sede');
  var generation = document.getElementById('generation');
  var sed = '';
  var gen = '';
  students = {};
  generation.addEventListener('change', selectSedeGen);
 
  function selectSedeGen(event) {
    var studentAct = 0;
    var studentInac = 0;
    var total = 0;

    sed = sede.value;
    gen = generation.value;
    students = data[sed][gen].students;
    // Iterando para almacenar los activos e inactivos
    for (var i = 0; i < students.length; i++) {
      if (students[i].active) {
        studentAct = studentAct + 1;
      } else if (students[i].active === false) {
        studentInac = studentInac + 1;
      }
      total = studentAct + studentInac;
    }
    // Obteniendo el porcentaje de desertoras
    var porcentaje = (Math.round((studentInac * 100) / total) + ' %');
    
    // navegando por el DOM
    var register = document.getElementById('TotStudents');
    var perStudentInac = document.getElementById('percentaje');
    register.textContent = students.length;
    perStudentInac.textContent = porcentaje;
    perStudentInac.style.color = 'red';
  }


  toggleTab(tabs);
});
