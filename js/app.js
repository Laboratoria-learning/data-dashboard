window.addEventListener('load', function() {
  var selection = document.getElementById('selection');
  var contenidoSede = document.getElementById('contenido-sede');

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

  var profilePic = document.getElementById('profilePic');
  //console.log(profilePic);

  selection.addEventListener('change', mostrarInfo);

  function mostrarInfo() {
    //  console.log(e.target.value);
    var value = selection.value;
    var aux = value.split('-');
    var sedeName = aux.shift();
    // console.log(sedeName);
    var generation = aux.join('-');

    var generationData = data[sedeName][generation];

    var totalStudents = generationData.students.length;
    // Datos de estudiantes inscritas
    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '# estudiantes inscritas';
    div.appendChild(parrafo);
    div.classList.add('description');

    studentsInscribed.textContent = totalStudents;

    studentsInscribed.appendChild(div);

    var counter = 0;
    generationData.students.forEach(function(student) {
      // console.log(student);
      if (student.active === false) {
        counter++;
      }
    });

    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '% estudiantes desertoras';
    div.appendChild(parrafo);
    div.classList.add('description');
    // Datos de estudiantes que desartaron
    studentsDeserted.textContent = Math.floor((counter * 100) / totalStudents) + '%';
    studentsDeserted.appendChild(div);

    var studentsTarget = 0;
    var totalStudentsTech = 0;
    var totalStudentsHse = 0;
    generationData.students.forEach(function(student) {
      var cantidadDeSprints = student.sprints.length;
      var total = 0;
      var totalTech = 0;
      var totalHse = 0;
      student.sprints.forEach(function(sprint) {
        total += (sprint.score.tech + sprint.score.hse);
        var tech = sprint.score.tech;
        totalTech += tech;
        var hse = sprint.score.hse;
        totalHse += hse;
      });
      var promedio = total / cantidadDeSprints;
      if (promedio >= 2100) {
        studentsTarget++;
      }
      var promedioTech = totalTech / cantidadDeSprints;
      if (promedioTech >= 1260) {
        totalStudentsTech ++;
      }
      var promedioHse = totalHse / cantidadDeSprints;
      if (promedioHse >= 840) {
        totalStudentsHse ++;
      }
    });
    // Pasaron la meta tech
    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '# estudiantes que pasan la meta tech';
    div.appendChild(parrafo);
    div.classList.add('description');

    approvedTech.textContent = totalStudentsTech;
    approvedTech.appendChild(div);

    // Porcentaje que superan tech
    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '% estudiantes que superan la meta tech';
    div.appendChild(parrafo);
    div.classList.add('description');

    averageTech.textContent = Math.floor((totalStudentsTech * 100) / totalStudents) + '%';
    averageTech.appendChild(div);

    // Pasaron la meta hse
    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '# estudiantes que superan la meta hse';
    div.appendChild(parrafo);
    div.classList.add('description');

    approvedHse.textContent = totalStudentsHse;
    approvedHse.appendChild(div);

    // Porcentaje hse
    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '% estudiantes superan la meta hse';
    div.appendChild(parrafo);
    div.classList.add('description');
    averageHse.textContent = Math.floor((totalStudentsHse * 100) / totalStudents) + '%';

    averageHse.appendChild(div);


    // Pasaron la meta total
    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '# estudiantes que superan la meta';
    div.appendChild(parrafo);
    div.classList.add('description');

    studentsApproved.textContent = studentsTarget;
    studentsApproved.appendChild(div);

    // El porcentaje total
    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '% total';
    div.appendChild(parrafo);
    div.classList.add('description');

    var porcentajePasaron = Math.floor((studentsTarget * 100) / totalStudents);
    totalApproved.textContent = porcentajePasaron + '%';
    totalApproved.appendChild(div);

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
    div.classList.add('description');
    averageNps.textContent = Math.floor(((result / generationData.ratings.length) * 100) / 100) + '%';
    averageNps.appendChild(div);

    // El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
    var totalStudent = 0;
    for (var i = 0; i < generationData.ratings.length; i++) {
      var cumple = generationData.ratings[i].student.cumple;
      var supera = generationData.ratings[i].student.supera;
      var totalSatis = cumple + supera;
      totalStudent += totalSatis;
    }
    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = '% estudiantes satisfechas';
    div.appendChild(parrafo);
    div.classList.add('description');

    averageSatisfied.textContent = Math.floor(((totalStudent / generationData.ratings.length) * 100) / 100) + '%';
    averageSatisfied.appendChild(div);

    var totalRatingTeacher = 0;
    for (var i = 0; i < generationData.ratings.length; i++) {
      var teacher = generationData.ratings[i].teacher;
      totalRatingTeacher += teacher;
    }

    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = 'puntuación a l@s profesores';
    div.appendChild(parrafo);
    div.classList.add('description');

    scoresTeacher.textContent = (totalRatingTeacher / generationData.ratings.length).toFixed(2);
    scoresTeacher.appendChild(div);

    var totalRatingJedi = 0;
    generationData.ratings.forEach(function(rating) {
      var jedi = rating.jedi;
      totalRatingJedi += jedi;
    });
    var div = document.createElement('div');
    var parrafo = document.createElement('p');
    parrafo.textContent = 'puntuación a l@s jedi masters';
    div.appendChild(parrafo);
    div.classList.add('description');

    scoresJedi.textContent = (totalRatingJedi / generationData.ratings.length).toFixed(2);
    scoresJedi.appendChild(div);

    /*Funcionalidad para tab Students*/
    for (var i = 0; i < generationData.students.length; i++) {
      var photo = generationData.students[i].photo; //devuelve link de cada foto
      var fullName = generationData.students[i].name; // devuelve nombre
      var img = document.createElement('img');
      img.setAttribute('src', photo);
      //profilePic.appendChild(img);
      img.style.width = '100%';
      img.style.height = '100%';

      var imgContainer = document.createElement('div')
      imgContainer.appendChild(img);
      profilePic.appendChild(imgContainer);
      imgContainer.style.width = '205px';
      imgContainer.style.height = '205px';
      //imgContainer.appendChild(fullName);
    }

  };

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

  mostrarInfo();
  tabs[0].classList.add('active');
  contents[0].classList.add('active');
});
