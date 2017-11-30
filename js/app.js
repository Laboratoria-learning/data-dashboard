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
  

  // -creando funcion para el total de estudiantes activos y desactivos-porcentaje de total de desertores
  function students(sede, generation, students) {
    var studentAct = 0;
    var studentInac = 0;
    var total = 0;
    var Student = data[sede][generation][students];
    for (var i = 0; i < Student.length; i++) {
      if (Student[i].active) {
        studentAct = studentAct + 1;
      } else if (Student[i].active === false) {
        studentInac = studentInac + 1;
      }
      total = studentAct + studentInac;
    }

    var porcentaje = Math.round((studentInac * 100) / total);

    console.log('hay ' + total);
    console.log('Las alumnas activas son: ' + studentAct);
    console.log('las alumnas retiradas son: ' + studentInac);
    console.log('Las alumnas retiratas representan el ' + porcentaje + ' %');
  }
 
  // console.log(students('AQP', '2016-2', 'students'));


  var sede = document.getElementById('sede');
  var generation = document.getElementById('generation');
  var sed = '';
  var gen = '';
  students = {};
  generation.addEventListener('change', selectSedeGen);
 
  function selectSedeGen(event) {
    sed = sede.value;
    gen = generation.value;
    students = data[sed][gen].students;



    
    var register = document.getElementById('TotStudents');
    var perStudentInac = document.getElementById('percentaje');
    register.textContent = students.length;
  }

  toggleTab(tabs);
});
