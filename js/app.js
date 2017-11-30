
window.addEventListener('load', function() {
  // ------------> Funcionalidad Menú <-------------------------
  var openAnimatedMenu = document.getElementById('open-animated-menu');
  var closeAnimatedMenu = document.getElementById('close-animated-menu');

  openAnimatedMenu.addEventListener('click', function() {
    document.getElementById('animated-menu').style.width = '250px';
  });

  closeAnimatedMenu.addEventListener('click', function() {
    document.getElementById('animated-menu').style.width = '0';
  });

  // ------------> Crea función para seleccionar sede y promoción, y generar datos <----------
  var select = document.getElementById('promo-filter');

  select.addEventListener('change', promFilter);
  
  function promFilter() {
    var city = select.value; // AQP SCL CDMX LIM
    var prom = select.options[select.selectedIndex].dataset.year; // 2016-2, 2017-1, etc.
    var totalStudents = data[city][prom]['students'].length; // Cantidad total de estudiantes por sede y promoción
    var dataRatings = data[city][prom]['ratings'];
    var arrayStudents = data[city][prom]['students'];
/*
    // ------------> ENROLLMENT - arequipa 2016-II <-----------------
    
    // recorre la longitud de las estudiantes y muestra a las que dropout en porcentaje
    var dropout = 0;
    for (var i = 0; i < totalStudents; i++) {
      if (arrayStudents[i].active == false) {
        dropout++;
      }
    }
    var dropout = Math.round((dropout / totalStudents) * 100) + '%';

    // Total estudiantes
    var enrollmentStudents = document.getElementById('box-enrollment');
    var text = document.createElement('p');
    text.textContent = totalStudents;
    var leyendaTotalStudents = document.createElement('p'); // Ya está creado en html, verificar y borrar!
    leyendaTotalStudents.textContent = '# students currently enrolled';
    enrollmentStudents.appendChild(text);
    enrollmentStudents.appendChild(leyendaTotalStudents);

    // porcentaje de alumnas que dropout
    var dropoutPorcentaje = document.getElementById('dropout-porcentaje');
    var textPorcentaje = document.createElement('p');
    textPorcentaje.textContent = dropout;
    var leyendadropoutPorcentaje = document.createElement('p');
    leyendadropoutPorcentaje.textContent = '% DROPOUT';
    dropoutPorcentaje.appendChild(textPorcentaje);
    dropoutPorcentaje.appendChild(leyendadropoutPorcentaje);
*/
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
/*
    var achievement = document.getElementById('box-achievement');
    achievement.textContent = sumAchievement;

    var percentOfTotal = document.getElementById('percent-achievement');
    percentOfTotal.textContent = percentAchievement.toFixed(2);

    var totalAchievement = document.getElementById('total-achievement');
    totalAchievement.textContent = '% OF TOTAL (' + totalStudentsOther + ')';
*/
/*
    // ------------> NPS - arequipa 2016-II <-----------------
    var box2 = document.getElementById('aqp-nps-sprint1');
    var promoS120162 = data.AQP['2016-2'].ratings[0].nps.promoters;
    var detracS120162 = data.AQP['2016-2'].ratings[0].nps.detractors;

    var parag = document.createElement('p');
    var text = document.createTextNode(promoS120162);
    parag.appendChild(text);
    box2.appendChild(parag);

    var parag2 = document.createElement('p');
    var text2 = document.createTextNode(detracS120162);
    parag2.appendChild(text2);
    box2.appendChild(parag2);
*/

    // -----------> TEACHER RATING <-----------
    var sumTeacherRating = 0;

    for (var i = 0; i < dataRatings.length; i++) {
      sumTeacherRating += dataRatings[i]['teacher'];          
    }   

    var overallTeacherRating = sumTeacherRating / dataRatings.length;
    var teacherRating = document.getElementById('teacher-rating');
    teacherRating.textContent = overallTeacherRating.toFixed(1);
  }
/*
    // ------------> Crea función para generar lista de estudiantes <-----------------
    var studentsTab = document.getElementById('studentsTab');
    studentsTab.addEventListener('click', showSectionStudents);

    var sectionOverview = document.getElementById('section-overview');
    var sectionStudents = document.getElementById('section-students');

    function showSectionStudents(event) {
      console.log(event.target);
      sectionOverview.classList.add('hide');
      sectionStudents.classList.remove('hide');
      sectionStudents.style.cssText = 'display:inline-block; background:white;';
    }

    // ruta para hallar el value del filtro
    var promoFilter = document.getElementById('promo-filter');

    if (promoFilter.children[1].children[0].value === 'aqp-16-2') {
      students = data.AQP['2016-2'].students;
      //console.log(students);
      showStudents();
    } else if (promoFilter.children[1].children[1].value === 'aqp-17-1') {
      students = data.AQP['2017-1'].students;
      console.log(students);
      showStudents();
    }
  
  function showStudents()
    var container = document.getElementById('students-hidden');
    for (var i = 0; i < students.length; i++) {
      //crear un div para una estudiante
    var profilestudent = document.createElement('div');
    container.appendChild(profilestudent);

    //crear la imagen para la foto de perfil
    var imgprofile= document.createElement('img');
    imgprofile.classList.add('img-student');
    imgprofile.setAttribute('src', students[i].photo);

    profilestudent.appendChild(imgprofile);

    //agregar nombre de estudiante
    var information  = document.createElement('p');
      information.classList.add('datos-studen');
    var otherName = document.createElement('h5');
    otherName.textContent=(students[i].name);

    information.appendChild(otherName);
    profilestudent.appendChild(information);
   }
*/
});