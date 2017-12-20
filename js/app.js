/*
 * Funcionalidad de tu producto
 */
//Login de Dashboard
function validate(){
  var email = document.getElementById("e_mail").value;
  var password = document.getElementById("password").value;

  if (email == "jonathan@laboratoria.la" && password == "Laboratoria"){
    window.location = "index.html";
  } else {
    alert("Ingresa e-mail y contraseña correctos")
  }
  return false;
}

window.addEventListener('load', function() {
  // ----------------------> Funcionalidad Menú <-----------------------
  var openAnimatedMenu = document.getElementById('open_animated_menu');
  var closeAnimatedMenu = document.getElementById('close_animated_menu');

  openAnimatedMenu.addEventListener('click', openMenu);
  function openMenu() {
    document.getElementById('animated_menu').style.width = '250px';
  }

  closeAnimatedMenu.addEventListener('click', closeMenu);
  function closeMenu() {
    document.getElementById('animated_menu').style.width = '0';
  }

  // ---------> Función para seleccionar sede y promoción, y generar datos <---------
  var select = document.getElementById('promo_filter');
  select.addEventListener('change', promFilter);

  function promFilter() {
    var city = select.value;
    var prom = select.options[select.selectedIndex].dataset.year;
    var totalStudents = data[city][prom]['students'].length;
    var dataRatings = data[city][prom]['ratings'];
    var arrayStudents = data[city][prom]['students'];

    // ----------------> ENROLLMENT<----------------
    // Recorremos el array de estudiantes y contamos a las que desertaron
    var dropout = 0;
    for (var i = 0; i < arrayStudents.length; i++) {
      if (arrayStudents[i].active === false) {
        dropout++;
      }
    }
    // Sacamos el porcentaje de estudiantes que desertaron
    var dropoutPercent = ((dropout / totalStudents) * 100).toFixed(1) + '%';

    // Total de estudiantes en su contenedor
    var enrollmentStudents = document.getElementById('box_enrollment');
    enrollmentStudents.textContent = totalStudents;

    // Porcentaje de estudiantes que desertaron en su contenedor
    var dropoutPorcentaje = document.getElementById('dropout_percent');
    dropoutPorcentaje.textContent = dropoutPercent;

    // ----------------> ACHIEVEMENT <----------------
    var studentMeetTarget = 0;

    for (var i = 0; i < totalStudents; i++) {
      var scoreTech = 0;
      var scoreHSE = 0;

      for (var j = 0; j < arrayStudents[i]['sprints'].length; j++) {
        scoreTech += arrayStudents[i]['sprints'][j]['score']['tech'];
        scoreHSE += arrayStudents[i]['sprints'][j]['score']['hse'];
      }

      var averageTech = scoreTech / arrayStudents[i]['sprints'].length;
      var averageHSE = scoreHSE / arrayStudents[i]['sprints'].length;

      if (averageTech >= 1260 && averageHSE >= 840) {
        studentMeetTarget++;
      }
    }

    var boxAchievement = document.getElementById('box_achievement');
    boxAchievement.textContent = studentMeetTarget;

    var percentOfTotal = document.getElementById('percent_achievement');
    percentOfTotal.textContent = ((studentMeetTarget / totalStudents) * 100).toFixed(1);
    // Semáforo de colores basado en el porcentaje de estudiantes que cumplen la meta
    if (((studentMeetTarget / totalStudents) * 100).toFixed(1) < 70) {
      percentOfTotal.style.color = 'red';
    } else if (((studentMeetTarget / totalStudents) * 100).toFixed(1) <= 80) {
      percentOfTotal.style.color = 'yellow';
    } else if (((studentMeetTarget / totalStudents) * 100).toFixed(1) > 80) {
      percentOfTotal.style.color = 'green';
    }

    var changeInfoTotal = document.getElementById('total_achievement');
    changeInfoTotal.textContent = '% OF TOTAL (' + totalStudents + ')';

    // ----------------> TEACHER RATING <----------------
    var sumTeacherRating = 0;

    for (var i = 0; i < dataRatings.length; i++) {
      sumTeacherRating += dataRatings[i]['teacher'];
    }

    var overallTeacherRating = sumTeacherRating / dataRatings.length;
    var teacherRating = document.getElementById('teacher_rating');
    teacherRating.textContent = overallTeacherRating.toFixed(1);

    // ----------------> NPS <----------------
    // Creando variables
    var npsProm = document.getElementById('promoters');
    var npsPass = document.getElementById('passive');
    var npsDetr = document.getElementById('detractor');
    var nps = document.getElementById('cumulative_nps');

    // Iterando para conseguir la suma
    var promoters = 0 / totalStudents * 100;
    var passives = 0 / totalStudents * 100;
    var detractors = 0 / totalStudents * 100;
    for (i = 0; i < dataRatings.length; i++) {
      promoters += (dataRatings[i]['nps']['promoters']) / dataRatings.length;
      passives += (dataRatings[i]['nps']['passive']) / dataRatings.length;
      detractors += (dataRatings[i]['nps']['detractors']) / dataRatings.length;

      npsProm.textContent = promoters.toFixed(1) + '% Promoters';
      npsPass.textContent = passives.toFixed(1) + '% Passives';
      npsDetr.textContent = detractors.toFixed(1) + '% Detractors';

      nps.textContent = (promoters - detractors).toFixed(1);
    }

    // ----------------> JEDI MASTER RATING  <----------------
    var jediRating = document.getElementById('jedi_rating');
    var jediMaster = 0;

    for (i = 0; i < dataRatings.length; i++) {
      jediMaster += (dataRatings[i]['jedi']) / dataRatings.length;
      jediRating.textContent = jediMaster.toFixed(1);
      if (jediMaster > 4.5) {
        jediRating.style.color = 'green';
      } else {
        jediRating.style.color = 'black';
      }
    }

    // ----------------> STUDENT SATISFACTION <----------------
    var studentSatisf = document.getElementById('student_satisf');
    var cumple = 0;
    var supera = 0;

    for (i = 0; i < dataRatings.length;i++) {
      cumple += (dataRatings[i]['student']['cumple']) / dataRatings.length;
      supera += (dataRatings[i]['student']['supera']) / dataRatings.length;

      studentSatisf.textContent = (cumple + supera).toFixed(1);
    }

    // ----------------> TECH SKILLS <----------------
    var studentTechSkills = 0;

    for (var i = 0; i < totalStudents; i++) {
      var scoreTech = 0;

      for (var j = 0; j < arrayStudents[i]['sprints'].length; j++) {
        scoreTech += arrayStudents[i]['sprints'][j]['score']['tech'];
      }

      var averageTech = scoreTech / arrayStudents[i]['sprints'].length;

      if (averageTech >= 1260) {
        studentTechSkills++;
      }
    }

    var studentsTech = document.getElementById('students_tech');
    studentsTech.textContent = studentTechSkills;

    var percentTech = document.getElementById('percent_tech');
    percentTech.textContent = ((studentTechSkills / totalStudents) * 100).toFixed(2);
    // Semáforo de colores basado en el porcentaje de estudiantes que cumplen la meta en Tech
    if (((studentTechSkills / totalStudents) * 100).toFixed(2) < 70) {
      percentTech.style.color = 'red';
    } else if (((studentTechSkills / totalStudents) * 100).toFixed(2) <= 80) {
      percentTech.style.color = 'yellow';
    } else if (((studentTechSkills / totalStudents) * 100).toFixed(2) > 80) {
      percentTech.style.color = 'green';
    }
    var changeInfoTech = document.getElementById('change_info_tech');
    changeInfoTech.textContent = '% OF TOTAL (' + totalStudents + ')';

    // ----------------> TECH SKILLS POR SPRINT <----------------
    var selectTech = document.getElementById('overall_tech');
    selectTech.addEventListener('change', techFilter);

    function techFilter() {
      var techSprintNumber = selectTech.value; // 0, 1, 2, 3

      var studentsTechSprint = 0;
      for (var i = 0; i < totalStudents; i++) {
        if (arrayStudents[i].sprints[techSprintNumber].score.tech >= 1260) {
          studentsTechSprint++;
        }
      }

      studentsTech.textContent = studentsTechSprint;
      percentTech.textContent = ((studentsTechSprint / totalStudents) * 100).toFixed(2);
      // Semáforo de colores basado en el porcentaje de estudiantes que cumplen la meta en Tech por Sprint
      if (((studentsTechSprint / totalStudents) * 100).toFixed(2) < 70) {
        percentTech.style.color = 'red';
      } else if (((studentsTechSprint / totalStudents) * 100).toFixed(2) <= 80) {
        percentTech.style.color = 'yellow';
      } else if (((studentsTechSprint / totalStudents) * 100).toFixed(2) > 80) {
        percentTech.style.color = 'green';
      }
      changeInfoTech.textContent = '% OF TOTAL (' + totalStudents + ')';
    }
    selectTech.value = '';

    // ----------------> LIFE SKILLS <----------------
    var studentLifeSkills = 0;

    for (var i = 0; i < totalStudents; i++) {
      var scoreLife = 0;

      for (var j = 0; j < arrayStudents[i]['sprints'].length; j++) {
        scoreLife += arrayStudents[i]['sprints'][j]['score']['hse'];
      }

      var averageLife = scoreLife / arrayStudents[i]['sprints'].length;

      if (averageLife >= 840) {
        studentLifeSkills++;
      }
    }

    var studentsLife = document.getElementById('students_life');
    studentsLife.textContent = studentLifeSkills;

    var percentLife = document.getElementById('percent_life');
    percentLife.textContent = ((studentLifeSkills / totalStudents) * 100).toFixed(2);
    // Semáforo de colores basado en el porcentaje de estudiantes que cumplen la meta en life Skills
    if (((studentLifeSkills / totalStudents) * 100).toFixed(2) < 70) {
      percentLife.style.color = 'red';
    } else if (((studentLifeSkills / totalStudents) * 100).toFixed(2) <= 80) {
      percentLife.style.color = 'yellow';
    } else if (((studentLifeSkills / totalStudents) * 100).toFixed(2) > 80) {
      percentLife.style.color = 'green';
    }

    var changeInfoLife = document.getElementById('change_info_life');
    changeInfoLife.textContent = '% OF TOTAL (' + totalStudents + ')';

    // ----------------> LIFE SKILLS POR SPRINT <----------------
    var selectLife = document.getElementById('overall_life');
    selectLife.addEventListener('change', lifeFilter);

    function lifeFilter() {
      var lifeSprintNumber = selectLife.value; // 0, 1, 2, 3

      var studentsLifeSprint = 0;
      for (var i = 0; i < totalStudents; i++) {
        if (arrayStudents[i].sprints[lifeSprintNumber].score.hse >= 840) {
          studentsLifeSprint++;
        }
      }

      studentsLife.textContent = studentsLifeSprint;
      percentLife.textContent = ((studentsLifeSprint / totalStudents) * 100).toFixed(2);
      // Semáforo de colores basado en el porcentaje de estudiantes que cumplen la meta en Life Skills por Sprint
      if (((studentsLifeSprint / totalStudents) * 100).toFixed(2) < 70) {
        percentLife.style.color = 'red';
      } else if (((studentsLifeSprint / totalStudents) * 100).toFixed(2) <= 80) {
        percentLife.style.color = 'yellow';
      } else if (((studentsLifeSprint / totalStudents) * 100).toFixed(2) > 80) {
        percentLife.style.color = 'green';
      }
      changeInfoLife.textContent = '% OF TOTAL (' + totalStudents + ')';
    }
    selectLife.value = '';

    // -----------------------------> CHARTS <--------------------------------
    // ----------------> Jedi Chart <----------------
    function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'logro');
      data.addColumn('number', 'puntaje');
      data.addRows([
        ['Puntaje No Otorgado', 5 - jediMaster],
        ['Puntaje Otorgado Promedio', jediMaster],
      ]);

      var options = {'title': 'Rating otorgado por las alumnas a sus Jedi Master',
        'width': 500,
        'height': 300,
        'is3D': true};

      var chart = new google.visualization.PieChart(document.getElementById('jedi_chart'));
      chart.draw(data, options);

      // ----------------> Teacher Chart <----------------
      var data2 = new google.visualization.DataTable();
      data2.addColumn('string', 'logro');
      data2.addColumn('number', 'puntaje');
      data2.addRows([
        ['Puntaje No Otorgado', 5 - overallTeacherRating],
        ['Puntaje Otorgado Promedio', overallTeacherRating],
      ]);

      var options2 = {'title': 'Rating otorgado por las alumnas a sus junior y master teachers',
        'width': 500,
        'height': 300,
        'is3D': true
      };

      var chart2 = new google.visualization.PieChart(document.getElementById('teacher_chart'));
      chart2.draw(data2, options2);

      // ----------------> Student Satisfaction Chart <----------------
      var data3 = new google.visualization.DataTable();
      data3.addColumn('string', 'logro');
      data3.addColumn('number', 'puntaje');
      data3.addRows([
        ['No cumple expectativa', 100 - (cumple + supera)],
        ['Supera y Cumple Expectativa', cumple + supera],
      ]);

      var options3 = {'title': 'Supera, Cumple o No Cumple LABORATORIA las expectativas de las alumnas',
        'width': 500,
        'height': 300,
        'is3D': true
      };

      var chart3 = new google.visualization.PieChart(document.getElementById('satisfaction_chart'));
      chart3.draw(data3, options3);

      // ----------------> NPS Chart <----------------
      var data4 = new google.visualization.DataTable();
      data4.addColumn('string', 'logro');
      data4.addColumn('number', 'puntaje');
      data4.addRows([
        ['Detractors', detractors / 100 * totalStudents],
        ['Passives', passives / 100 * totalStudents],
        ['Promoters', promoters / 100 * totalStudents]
      ]);

      var options4 = {'title': 'Recomendarias LABORATORIA a otras personas',
        'width': 500,
        'height': 300,
        'is3D': true};

      var chart4 = new google.visualization.PieChart(document.getElementById('nps_chart'));
      chart4.draw(data4, options4);

      // ----------------> Enrollment Chart <----------------
      var data5 = new google.visualization.DataTable();
      data5.addColumn('string', 'name');
      data5.addColumn('number', 'students');
      data5.addRows([
        ['Desertoras', dropout],
        ['Asistiendo a clases', totalStudents - dropout],
      ]);

      var options5 = {'title': 'Alumnas que asisten a clases vs alumnas que han desertado',
        'width': 500,
        'height': 300,
        'is3D': true};

      var chart5 = new google.visualization.PieChart(document.getElementById('enrollment_chart'));
      chart5.draw(data5, options5);

      // ----------------> Achievement Chart <----------------
      var data6 = new google.visualization.DataTable();
      data6.addColumn('string', 'name');
      data6.addColumn('number', 'students');
      data6.addRows([
        ['No pasa la meta', totalStudents - studentMeetTarget],
        ['Pasa la meta', studentMeetTarget],
      ]);

      var options6 = {'title': 'Estudiantes que pasan la meta de puntaje establecido por sprint',
        'width': 500,
        'height': 300,
        'is3D': true};

      var chart6 = new google.visualization.PieChart(document.getElementById('achiv_chart'));
      chart6.draw(data6, options6);
    }
    // Set a callback to run when the Google Visualization API is loaded
    google.charts.setOnLoadCallback(drawChart);
    /* Agregar funcion para que aparezcan lista de estudiantes*/

    var containerOfStudents = document.getElementById('listOfStudents');
    function studentsByGenerations() {
      containerOfStudents.innerHTML = '';
      for (var i = 0; i < arrayStudents.length; i++) {
        arrayStudents[i];
        // Creando un div para almacenar el perfil de la estudiante
        var profileStudent = document.createElement('div');
        profileStudent.classList.add('profile-student');
        containerOfStudents.appendChild(profileStudent);
        // Creando la imagen para la foto de perfil de la estudiante
        var imgProfile = document.createElement('img');
        imgProfile.setAttribute('src', arrayStudents[i].photo);
        imgProfile.classList.add('img-student');
        profileStudent.appendChild(imgProfile);
        // Creando contenedor y agregando nombre para estudiante
        var studentName = document.createElement('p');
        studentName.textContent = arrayStudents[i].name.toUpperCase();
        studentName.classList.add('name-student');
        profileStudent.appendChild(studentName);
        // Creando y agregando box-tech-skill student
        var boxTech = document.createElement('div');
        var percentTech = document.createElement('p');
        var techSkill = document.createElement('p');
        techSkill.textContent = 'TECH SKILLS';
        boxTech.classList.add('box-tech');
        boxTech.appendChild(percentTech);
        boxTech.appendChild(techSkill);
        profileStudent.appendChild(boxTech);
        // Creando Y agregando box-life-skill student
        var boxLife = document.createElement('div');
        var percentLife = document.createElement('p');
        var lifeSkill = document.createElement('p');
        lifeSkill.textContent = 'LIFE SKILLS';
        boxLife.classList.add('box-life');
        boxLife.appendChild(percentLife);
        boxLife.appendChild(lifeSkill);
        profileStudent.appendChild(boxLife);
        /* Creamos una condicional para obtener los scores de los sprints*/
        if (arrayStudents[i]['sprints'].length > 0) {
          var totalTech = 0;
          var totalHse = 0;
          for (var j = 0; j < arrayStudents[i]['sprints'].length; j++) {
            totalTech += arrayStudents[i]['sprints'][j]['score']['tech'];
            totalHse += arrayStudents[i]['sprints'][j]['score']['hse'];
          }
          percentTech.textContent = (totalTech / arrayStudents[i]['sprints'].length).toFixed(1);
          percentLife.textContent = (totalHse / arrayStudents[i]['sprints'].length).toFixed(1);
        } else {
          percentTech.textContent = 'No hay datos suficientes';
          percentLife.textContent = 'No hay datos suficientes';
        }
      }
    }
    studentsByGenerations();
  }

  /*  Mediante esta función se cambia el contenido segun sección elegida*/
  var addAndHide = function(event) {
    var tabSeleccionado = event.target.dataset.tabSelect;
    var overview = document.getElementById('section_overview');
    var students = document.getElementById('section_students');
    var teachers = document.getElementById('section_teachers');

    if (tabSeleccionado === 'tabOverview') {/* Desaparecen las secciones, excepto la de overview*/
      students.style.display = 'none';
      teachers.style.display = 'none';
      overview.style.display = 'block';
    } else if (tabSeleccionado === 'tabStudents') {/* Desaparecen las secciones, excepto la de students*/
      students.style.display = 'block';
      teachers.style.display = 'none';
      overview.style.display = 'none';
    } else if (tabSeleccionado === 'tabTeachers') {/* Desaparecenrece las secciones, excepto la de teachers*/
      students.style.display = 'none';
      teachers.style.display = 'block';
      overview.style.display = 'none';
    }
  };

  /*  En esta función obtenemos los botones y le agregamos un evento a cada uno mediante un for, el evento se desencadena mediante un click y permitira que aparezca el contenido solicitado*/
  var changeSection = function() {
    var lis = document.getElementsByClassName('tab');
    for (var i = 0; i < lis.length; i++) {
      lis[i].addEventListener('click', addAndHide);
    }
  };
  changeSection();
});
