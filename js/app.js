window.addEventListener('load', function() {
// Container de resultados
  var boxResult = document.getElementById('result');

  // Consulta Lima
  function resultLima() {
    // creando contenedores de información General
    var consultLima = document.createElement('div');
    var boxInfoGeneral = document.createElement('div');
    // Contenedores de Enrollment
    var boxEnrollment = document.createElement('div');
    var titleEnrollment = document.createElement('p');
    var boxStudentTotal = document.createElement('div');
    var boxDropout = document.createElement('div');
    // elementos que contienen información de Enrollment
    var numberStudentTotal = document.createElement('p');
    var descriptionNumber = document.createElement('p');
    var percentageDropout = document.createElement('p');
    var descriptionDropout = document.createElement('p');
    
    // insertando elementos a contenedor Enrollment
    boxEnrollment.appendChild(titleEnrollment);
    boxEnrollment.appendChild(boxStudentTotal);
    boxEnrollment.appendChild(boxDropout);
    boxStudentTotal.appendChild(numberStudentTotal);
    boxStudentTotal.appendChild(descriptionNumber);
    boxDropout.appendChild(percentageDropout);
    boxDropout.appendChild(descriptionDropout);
    // insertando elementos a contenedores Generales
    boxInfoGeneral.appendChild(boxEnrollment);
    consultLima.appendChild(boxInfoGeneral);
    boxResult.appendChild(consultLima);
    // estilos 
    boxEnrollment.classList.add('box-info');
    boxStudentTotal.classList.add('inline-block');
    boxDropout.classList.add('inline-block');
   
    // insertando información en Enrollment
    titleEnrollment.textContent = 'Enrollment';
    numberStudentTotal.textContent = totalStudentActive('LIM', '2016-2');
    percentageDropout.textContent = dropout('LIM', '2016-2') + '%';
    descriptionNumber.textContent = '# Students Currently Enrolled';
    descriptionDropout.textContent = '% Dropout' ; 
  }

  // Función que obtiene Estudiantes Activos por Sede y Generación
  function totalStudentActive(sede, generation) {
    var datosSede = data[sede];
    var datosGeneration = datosSede[generation];
    var totalStudent = datosGeneration.students;
    var active = 0;
    for (i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        active++;
      }
    }
    return active;
  }
  // Función que obtiene porcentaje por Sede y Generación
  function dropout(sede, generation) {
    var datosSede = data[sede];
    var datosGeneration = datosSede[generation];
    var totalStudent = datosGeneration.students;
    var dropout = 0;
    for (i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === false) {
        dropout++;
      }
    }
    var result = Math.round((dropout / (totalStudent.length)) * 100);
    return result ;
  }

  // ejecución de función
  resultLima();
});