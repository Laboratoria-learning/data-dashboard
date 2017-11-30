window.addEventListener('load', function() {
  // ------------> Funcionalidad Menú <-------------------------
  var openAnimatedMenu = document.getElementById('open-animated-menu');
  var closeAnimatedMenu = document.getElementById('close-animated-menu');

  openAnimatedMenu.addEventListener('click', openMenu);
  function openMenu() {
    document.getElementById('animated-menu').style.width = '250px';
  }

  closeAnimatedMenu.addEventListener('click', closeMenu);
  function closeMenu() {
    document.getElementById('animated-menu').style.width = '0';
  }

  // ------------> Crea función para seleccionar sede y promoción, y generar datos <----------
  var select = document.getElementById('promo-filter');
  select.addEventListener('change', promFilter);

  function promFilter() {
    var city = select.value; // AQP SCL CDMX LIM
    var prom = select.options[select.selectedIndex].dataset.year; // 2016-2, 2017-1, etc.
    var totalStudents = data[city][prom]['students'].length; // Cantidad total de estudiantes por sede y promoción
    var dataRatings = data[city][prom]['ratings'];
    var arrayStudents = data[city][prom]['students'];

    // ------------> ENROLLMENT<-----------------
    // recorre la longitud de las estudiantes y muestra a las que desertaron en porcentaje
    var dropout = 0;
    for (var i = 0; i < arrayStudents.length; i++) {
      if (arrayStudents[i].active == false) {
        dropout++;
      }
    }
    dropout = Math.round((dropout / totalStudents) * 100) + '%';

    // Total estudiantes
    var enrollmentStudents = document.getElementById('box-enrollment');
    enrollmentStudents.textContent = totalStudents;

    // porcentaje de alumnas que desertaron
    var dropoutPorcentaje = document.getElementById('dropout-percent');
    dropoutPorcentaje.textContent = dropout;

    // ------------> ACHIEVEMENT <--------------------

    // data['AQP']['2016-2']['students'][0]['sprints'][0]['score'] // {tech: 1213, hse: 854}
    // data['AQP']['2016-2']['students'][0]['sprints'][0]['score']['tech'] // 1213

    var scoreTech = 0;
    var scoreHSE = 0;

    for (var i = 0; i < totalStudents; i++) {
      for (var j = 0; j < arrayStudents[i]['sprints'].length; j++) {
        scoreTech += arrayStudents[i]['sprints'][j]['score']['tech'];
      }
    }
    console.log(scoreTech);

    // -----------> TEACHER RATING <-----------
    var sumTeacherRating = 0;

    for (var i = 0; i < dataRatings.length; i++) {
      sumTeacherRating += dataRatings[i]['teacher'];
    }

    var overallTeacherRating = sumTeacherRating / dataRatings.length;
    var teacherRating = document.getElementById('teacher-rating');
    teacherRating.textContent = overallTeacherRating.toFixed(1);

    // ------------> NPS <-----------------
    // CREANDO VARIABLES
    var npsProm = document.getElementById('promoters');
    var npsPass = document.getElementById('passive');
    var npsDetr = document.getElementById('detractor');
    var nps = document.getElementById('cumulative-nps');
    
    // Iterando para conseguir la suma
    var promoters = 0 / totalStudents * 100;
    var passives = 0 / totalStudents * 100;
    var detractors = 0 / totalStudents * 100;
    for (i = 0; i < dataRatings.length; i++) {
      promoters += (dataRatings[i]['nps']['promoters']) / dataRatings.length;
      passives += (dataRatings[i]['nps']['passive']) / dataRatings.length;
      detractors += (dataRatings[i]['nps']['detractors']) / dataRatings.length;

      npsProm.textContent = promoters.toFixed(2) + '% Promoters';
      npsPass.textContent = passives.toFixed(2) + '% Passives';
      npsDetr.textContent = detractors.toFixed(2) + '% Detractors';

      nps.textContent = (promoters - detractors).toFixed(2);
    }
    // ------------> JEDI MASTER RATING  <-----------------
    var jediRating = document.getElementById('jedi-rating');
    var jediMaster = 0;

    for (i = 0; i < dataRatings.length; i++) {
      jediMaster += (dataRatings[i]['jedi']) / dataRatings.length;
      jediRating.textContent = jediMaster.toFixed(2);
    }
    // ------------> STUDENT SATISFACTION  <-----------------
    var studentSatisf = document.getElementById('student-satisf');
    var cumple = 0;
    var supera = 0;

    for (i = 0; i < dataRatings.length;i++) {
      cumple += (dataRatings[i]['student']['cumple']) / dataRatings.length;
      supera += (dataRatings[i]['student']['supera']) / dataRatings.length;

      studentSatisf.textContent = (cumple + supera).toFixed(2);
    }
    // ------------> TECH SKILLS  <-----------------
    var studentsTech = document.getElementById('students-tech');
    var percentTech = document.getElementById('percent-tech');
    var tech = 0 / totalStudents * 100;
    // data.AQP["2016-2"].students[0].sprints[0].score.tech (ruta a buscar)
    // totalStudents
    for (i = 0; i < arrayStudents.length; i++) { // 15
      for (j = 0; j < arrayStudents[i]['sprints'].length; j++) { // 4
        if (arrayStudents[i]['sprints'][j]['score']['tech'] >= 1800) {
          tech += (arrayStudents[i]['sprints'][j]['score']['tech']) / arrayStudents[i]['sprints'].length;
        }
        // tech += arrayStudents[i]['sprints'][j]['score']['tech']; 
        percentTech.textContent = tech;
      }
    }

    // ------------> Crea función para generar lista de estudiantes <-----------------
    var studentsTab = document.getElementById('studentsTab');
    var container = document.getElementById('students-hidden');
    studentsTab.addEventListener('click', showSectionStudents);

    var sectionOverview = document.getElementById('section-overview');
    var sectionStudents = document.getElementById('section-students');

    function showSectionStudents(event) {
      console.log(select.value);
      container.innerHTML = "";
      sectionOverview.classList.add('hide');
      sectionStudents.classList.remove('hide');

      for (var i = 0; i < arrayStudents.length; i++) {
        // crear un div para almacenar el perfil de la estudiante
        var profilestudent = document.createElement('div');
        profilestudent.classList.add('profile-student');
        container.appendChild(profilestudent);

        // crear la imagen para la foto de perfil de la estudiante
        var imgprofile = document.createElement('img');
        imgprofile.setAttribute('src', arrayStudents[i].photo);
        imgprofile.classList.add('img-student');
        profilestudent.appendChild(imgprofile);

        // agregar nombre de la estudiante
        var studentName = document.createElement('p');
        studentName.textContent = arrayStudents[i].name;
        studentName.classList.add('name-student');
        profilestudent.appendChild(studentName);
        sectionStudents.appendChild(container);

        // agregar box-tech-skill student
        var boxTech = document.createElement('div');
        var percentTech = document.createElement('p');
        var techSkill = document.createElement('p');
        techSkill.textContent = 'TECH SKILLS';
        boxTech.classList.add('box-tech');
        boxTech.appendChild(percentTech);
        boxTech.appendChild(techSkill);
        profilestudent.appendChild(boxTech);

        // agregar box-life-skill student
        var boxLife = document.createElement('div');
        var percentLife = document.createElement('p');
        var lifeSkill = document.createElement('p');
        lifeSkill.textContent = 'LIFE SKILLS';
        boxLife.classList.add('box-tech');
        boxLife.appendChild(percentLife);
        boxLife.appendChild(lifeSkill);
        profilestudent.appendChild(boxLife);
      }
    }
    sectionStudents.classList.add('hide');
    sectionOverview.classList.remove('hide');
  }
});
