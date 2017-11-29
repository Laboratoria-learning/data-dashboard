// agregar el evento load
window.addEventListener('load', function() {
  var selection = document.getElementById('selection');
  // console.log(selection);
  var contenidoSede = document.getElementById('contenido-sede');
  // console.log(contenidoSede);
  var tabs = document.getElementsByClassName('tab');
  var contents = document.getElementsByClassName('content');

  var studentsInscribed = document.getElementById('students-inscribed');
  var studentsDeserted = document.getElementById('students-deserted');

  var studentsApproved = document.getElementById('students-approved');
  var totalApproved = document.getElementById('total-approved');

  var averageNps = document.getElementById('average');

  var approvedTech = document.getElementById('approved-tech');
  var averageTech = document.getElementById('average-tech');

  var approvedHse = document.getElementById('approved-hse');
  var averageHse = document.getElementById('average-hse');

  var averageSatisfied = document.getElementById('average-satisfied');

  var scoresTeacher = document.getElementById('scores-teacher');

  var scoresJedi = document.getElementById('scores-jedi');

  function mostrarInfo() {
  };

  selection.addEventListener('change', function(e) {
  //  console.log(e.target.value);
    var value = e.target.value; 
    var aux = value.split('-');
    var sedeName = aux.shift();
    var generation = aux.join('-');

    var generationData = data[sedeName][generation];
    console.log(generationData);
    var totalStudents = generationData.students.length;
    // Datos de estudiantes inscritas
    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '# estudiantes inscritas';
    div.appendChild(parrafo);

    studentsInscribed.textContent = totalStudents;

    studentsInscribed.appendChild(div);

    var counter = 0;
    generationData.students.forEach(function(student) {
      // console.log(student);
      if (student.active === false) {
        counter ++;
      }
    });

    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '% estudiantes desertoras';
    div.appendChild(parrafo);
    // Datos de estudiantes que desartaron
    studentsDeserted.textContent = Math.floor((counter * 100) / totalStudents) + '%';
    studentsDeserted.appendChild(div);
    // [Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
    // [Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
    // [Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100
    
    // [NPS] = [Promoters] - [Detractors]
    var result = 0;
    for (var i = 0; i < generationData.ratings.length; i++) {
      var promoters = generationData.ratings[i].nps.promoters;
      var detractors = generationData.ratings[i].nps.detractors;
      var nps = promoters - detractors;
      result += nps;
    }
    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '% de nps';
    div.appendChild(parrafo);
    averageNps.textContent = Math.floor(((result / generationData.ratings.length) * 100) / 100) + '%';
    averageNps.appendChild(div);
  });
 
  // agregar el evento click a todos los tabs
  for (var i = 0; i < tabs.length; i++) {
    // y dentro del click para cada tab
    tabs[i].addEventListener('click', function(event) {
      for (var j = 0; j < tabs.length; j++) {
        // quitar la clase active a todos los tabs
        tabs[j].classList.remove('active');
      }

      for (var k = 0; k < contents.length; k++) {
        // quitar la clase active a todos los contents
        contents[k].classList.remove('active');
      }
      
      // agregar la clase active solo a este tab que se le dio click
      event.target.classList.add('active');
      // agregar la clase active solo al content correspondiente (data-content
      contents[event.target.dataset.content].classList.add('active');
    });
  }
});