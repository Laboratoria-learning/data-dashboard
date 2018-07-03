window.addEventListener('load', function() {
  // ----------------> Funcionalidad Menú <----------------
  var openAnimatedMenu = document.getElementById('open-animated-menu');
  var closeAnimatedMenu = document.getElementById('close-animated-menu');
  var img = document.getElementById('ale-pic');

  openAnimatedMenu.addEventListener('click', openMenu);
  function openMenu() {
    document.getElementById('animated-menu').style.width = '250px';
    img.style.display = 'none';
    var lastDay = document.getElementById('last-day');
    var lastHour = document.getElementById('last-hour');
    lastDay.textContent = moment().format('MMMM Do YYYY');
    lastHour.textContent = moment().format('h:mm:ss a');
  }

  closeAnimatedMenu.addEventListener('click', closeMenu);
  function closeMenu() {
    document.getElementById('animated-menu').style.width = '0';
    img.style.display = 'inline-block';
  }

  // ----------------> Crea función para seleccionar sede y promoción, y generar datos <----------------
  var select = document.getElementById('promo-filter');
  select.addEventListener('change', promFilter);

  function promFilter() {
    var city = select.value;
    var prom = select.options[select.selectedIndex].dataset.year;
    var totalStudents = data[city][prom]['students'].length;
    var dataRatings = data[city][prom]['ratings'];
    var arrayStudents = data[city][prom]['students'];

    // ----------------> ENROLLMENT<----------------
    // Recorre la longitud de las estudiantes y muestra a las que desertaron en porcentaje
    var dropout = 0;
    for (var i = 0; i < arrayStudents.length; i++) {
      if (arrayStudents[i].active == false) {
        dropout++;
      }
    }
    var dropoutPercent = ((dropout / totalStudents) * 100).toFixed(1) + '%';

    // Total estudiantes
    var enrollmentStudents = document.getElementById('box-enrollment');
    enrollmentStudents.textContent = totalStudents;

    // Porcentaje de alumnas que desertaron
    var dropoutPorcentaje = document.getElementById('dropout-percent');
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

    var boxAchievement = document.getElementById('box-achievement');
    boxAchievement.textContent = studentMeetTarget;
    var percentOfTotal = document.getElementById('percent-achievement');
    percentOfTotal.textContent = ((studentMeetTarget / totalStudents) * 100).toFixed(2);
    
    var changeInfoTotal = document.getElementById('total-achievement');
    changeInfoTotal.textContent = '% OF TOTAL (' + totalStudents + ')';

    // ----------------> TEACHER RATING <----------------
    var sumTeacherRating = 0;

    for (var i = 0; i < dataRatings.length; i++) {
      sumTeacherRating += dataRatings[i]['teacher'];
    }

    var overallTeacherRating = sumTeacherRating / dataRatings.length;
    var teacherRating = document.getElementById('teacher-rating');
    teacherRating.textContent = overallTeacherRating.toFixed(1);

    // ----------------> NPS <----------------
    // Creando variables
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

    // ----------------> JEDI MASTER RATING  <----------------
    var jediRating = document.getElementById('jedi-rating');
    var jediMaster = 0;

    for (i = 0; i < dataRatings.length; i++) {
      jediMaster += (dataRatings[i]['jedi']) / dataRatings.length;
      jediRating.textContent = jediMaster.toFixed(2);
    }

    // ----------------> STUDENT SATISFACTION <----------------
    var studentSatisf = document.getElementById('student-satisf');
    var cumple = 0;
    var supera = 0;

    for (i = 0; i < dataRatings.length;i++) {
      cumple += (dataRatings[i]['student']['cumple']) / dataRatings.length;
      supera += (dataRatings[i]['student']['supera']) / dataRatings.length;

      studentSatisf.textContent = (cumple + supera).toFixed(2);
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

    var studentsTech = document.getElementById('students-tech');
    studentsTech.textContent = studentTechSkills;

    var percentTech = document.getElementById('percent-tech');
    percentTech.textContent = ((studentTechSkills / totalStudents) * 100).toFixed(2);

    var changeInfoTech = document.getElementById('change-info-tech');
    changeInfoTech.textContent = '% OF TOTAL (' + totalStudents + ')';

    // ----------------> TECH SKILLS POR SPRINT <----------------
    var selectTech = document.getElementById('overall-tech');
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

    var studentsLife = document.getElementById('students-life');
    studentsLife.textContent = studentLifeSkills;

    var percentLife = document.getElementById('percent-life');
    percentLife.textContent = ((studentLifeSkills / totalStudents) * 100).toFixed(2);

    var changeInfoLife = document.getElementById('change-info-life');
    changeInfoLife.textContent = '% OF TOTAL (' + totalStudents + ')';

    // ----------------> LIFE SKILLS POR SPRINT <----------------
    var selectLife = document.getElementById('overall-life');
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
      changeInfoLife.textContent = '% OF TOTAL (' + totalStudents + ')';
    }
    selectLife.value = '';

    // ----------------> CHARTS <----------------
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
        'is3D': true};

      var chart = new google.visualization.PieChart(document.getElementById('jedi-chart'));
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
        'is3D': true};

      var chart2 = new google.visualization.PieChart(document.getElementById('teacher-chart'));
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
        'is3D': true};

      var chart3 = new google.visualization.PieChart(document.getElementById('satisfaction-chart'));
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

      var chart4 = new google.visualization.PieChart(document.getElementById('nps-chart'));
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

      var chart5 = new google.visualization.PieChart(document.getElementById('enrollment-chart'));
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

      var chart6 = new google.visualization.PieChart(document.getElementById('achiv-chart'));
      chart6.draw(data6, options6);
    }
    // Set a callback to run when the Google Visualization API is loaded
    google.charts.setOnLoadCallback(drawChart);

    // ----------------> Crea función para generar lista de estudiantes <----------------
    var studentsTab = document.getElementById('studentsTab');
    var container = document.getElementById('students-hidden');
    studentsTab.addEventListener('click', showSectionStudents);

    var sectionOverview = document.getElementById('section-overview');
    var sectionStudents = document.getElementById('section-students');

    function showSectionStudents(event) {
      container.innerHTML = '';
      sectionOverview.classList.add('hide');
      sectionStudents.classList.remove('hide');

      for (var i = 0; i < arrayStudents.length; i++) {
        // Creando un div para almacenar el perfil de la estudiante
        var profilestudent = document.createElement('div');
        profilestudent.classList.add('profile-student');
        container.appendChild(profilestudent);

        // Creando la imagen para la foto de perfil de la estudiante
        var imgprofile = document.createElement('img');
        imgprofile.setAttribute('src', arrayStudents[i].photo);
        imgprofile.classList.add('img-student');
        profilestudent.appendChild(imgprofile);

        // Agregando nombre de la estudiante
        var studentName = document.createElement('p');
        studentName.textContent = arrayStudents[i].name.toUpperCase();
        studentName.classList.add('name-student');
        profilestudent.appendChild(studentName);
        sectionStudents.appendChild(container);

        // Agregando box-tech-skill student
        var boxTech = document.createElement('div');
        var percentTech = document.createElement('p');
        var techSkill = document.createElement('p');
        percentTech.textContent = averageTech;
        techSkill.textContent = 'TECH SKILLS';
        boxTech.classList.add('box-tech');
        boxTech.appendChild(percentTech);
        boxTech.appendChild(techSkill);
        profilestudent.appendChild(boxTech);

        // Agregando box-life-skill student
        var boxLife = document.createElement('div');
        var percentLife = document.createElement('p');
        var lifeSkill = document.createElement('p');
        lifeSkill.textContent = 'LIFE SKILLS';
        boxLife.classList.add('box-life');
        boxLife.appendChild(percentLife);
        boxLife.appendChild(lifeSkill);
        profilestudent.appendChild(boxLife);
      }
    }
    sectionStudents.classList.add('hide');
    sectionOverview.classList.remove('hide');
  }
});