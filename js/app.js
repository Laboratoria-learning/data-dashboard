
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
  select.addEventListener('change', function(event) {
    var city = select.value; // AQP SCL CDMX LIM
    var prom = select.options[select.selectedIndex].dataset.year; // 2016-2, 2017-1, etc.
    var totalStudents = data[city][prom].students.length; // Cantidad total de estudiantes por sede y promoción
    var dataRatings = data[city][prom]['ratings'];
    var arrayStudents = data[city][prom]['students'];
    // ------------> ENROLLMENT - arequipa 2016-II <-----------------
    // recorre la longitud de las estudiantes y muestra a las que dropout en porcentaje
    // var dropout = 0;
    // for (var i = 0; i < totalStudents; i++) {
    //   if (arrayStudents[i].active == false) {
    //     dropout++;
    //   }
    // }
    // var dropout = Math.round((dropout / totalStudents) * 100) + '%';

    // Total estudiantes
    // var enrollmentStudents = document.getElementById('box-enrollment');
    // var text = document.createElement('p');
    // text.textContent = totalStudents;
    // var leyendaTotalStudents = document.createElement('p'); // Ya está creado en html, verificar y borrar!
    // leyendaTotalStudents.textContent = '# students currently enrolled';
    // enrollmentStudents.appendChild(text);
    // enrollmentStudents.appendChild(leyendaTotalStudents);

    // porcentaje de alumnas que dropout
    // var dropoutPorcentaje = document.getElementById('dropout-porcentaje');
    // var textPorcentaje = document.createElement('p');
    // textPorcentaje.textContent = dropout;
    // var leyendadropoutPorcentaje = document.createElement('p');
    // leyendadropoutPorcentaje.textContent = '% DROPOUT';
    // dropoutPorcentaje.appendChild(textPorcentaje);
    // dropoutPorcentaje.appendChild(leyendadropoutPorcentaje);

    // ------------> ACHIEVEMENT <--------------------
    // var dataRatings = data[city][prom]['ratings'];
    // var meetsRange = 0;
    // var exceedsRange = 0;
    // var totalStudentsOther = (dataRatings.length) * 100;

    // for (var i = 0; i < dataRatings.length; i++) {
    //   meetsRange = meetsRange + dataRatings[i]['student']['cumple'];
    // }

    // for (var i = 0; i < dataRatings.length; i++) {
    //   exceedsRange = exceedsRange + dataRatings[i]['student']['supera'];
    // }

    // var percent = ((meetsRange + exceedsRange) / totalStudentsOther) * 100;

    // console.log(percent);

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

  // var studentsTab = document.getElementById('studentsTab');
  // studentsTab.addEventListener('click', showSectionStudents);

  // var sectionOverview = document.getElementById('section-overview');
  // var sectionStudents = document.getElementById('section-students');

  // function showSectionStudents(event) {
  //   console.log(event.target);
  //   sectionOverview.classList.add('hide');
  //   sectionStudents.classList.remove('hide');
  //   sectionStudents.style.cssText = 'display:inline-block; background:white;';
  // }

  // ruta para hallar el value del filtro
  // var promoFilter = document.getElementById('promo-filter');

  // if (promoFilter.children[1].children[0].value === 'aqp-16-2') {
  //   students = data.AQP['2016-2'].students;
  //   //console.log(students);
  //   showStudents();
  // } else if (promoFilter.children[1].children[1].value === 'aqp-17-1') {
  //   students = data.AQP['2017-1'].students;
  //   console.log(students);
  //   showStudents();
  // }

  // function showStudents() {
  //   var container = document.getElementById('students-hidden');
  //   for (var i = 0; i < students.length; i++) {
    // crear un div para una estudiante
  //  var profilestudent = document.createElement('div');
  //  container.appendChild(profilestudent);

    // crear la imagen para la foto de perfil
  //  var imgprofile= document.createElement('img');
  //  imgprofile.classList.add('img-student');
  //  imgprofile.setAttribute('src', students[i].photo);

  //  profilestudent.appendChild(imgprofile);

    // agregar nombre de estudiante
    //    var information  = document.createElement('p');
    //     information.classList.add('datos-studen');
    //    var otherName = document.createElement('h5');
    //    otherName.textContent=(students[i].name);

    //    information.appendChild(otherName);
    //    profilestudent.appendChild(information);
    //     }
    //   }
  });
});
