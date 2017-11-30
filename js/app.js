
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

   function promFilter(event) {
    console.log(event.target.value);
    var city = select.value; // AQP SCL CDMX LIM
    var prom = select.options[select.selectedIndex].dataset.year; // 2016-2, 2017-1, etc.
    var totalStudents = data[city][prom].students.length; // Cantidad total de estudiantes por sede y promoción

    // ------------> ENROLLMENT <-----------------
    var arrayStudents = data[city][prom].students;
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
    var dataRatings = data[city][prom]['ratings'];
    var meetsRange = 0;
    var exceedsRange = 0;
    var totalStudentsOther = (dataRatings.length) * 100;

    for (var i = 0; i < dataRatings.length; i++) {
      meetsRange = meetsRange + dataRatings[i]['student']['cumple'];
    }

    for (var i = 0; i < dataRatings.length; i++) {
      exceedsRange = exceedsRange + dataRatings[i]['student']['supera'];
    }

    var percent = ((meetsRange + exceedsRange) / totalStudentsOther) * 100;

    //console.log(percent);
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
      //crear un div para almacenar el perfil de la estudiante
     var profilestudent = document.createElement('div');
     profilestudent.classList.add('profile-student');
     container.appendChild(profilestudent);

     //crear la imagen para la foto de perfil de la estudiante
     var imgprofile= document.createElement('img');
     imgprofile.setAttribute('src', arrayStudents[i].photo);
     imgprofile.classList.add('img-student');
     profilestudent.appendChild(imgprofile);

     //agregar nombre de la estudiante
     var studentName = document.createElement('p');
     studentName.textContent = arrayStudents[i].name;
     studentName.classList.add('name-student');
     profilestudent.appendChild(studentName);
     sectionStudents.appendChild(container);

     //agregar box-tech-skill student
     var boxTech = document.createElement('div');
     var percentTech = document.createElement('p');
     var techSkill = document.createElement('p');
     techSkill.textContent = 'TECH SKILLS';
     boxTech.classList.add('box-tech');
     boxTech.appendChild(percentTech);
     boxTech.appendChild(techSkill);
     profilestudent.appendChild(boxTech);

     //agregar box-life-skill student
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
