window.addEventListener('load', function(event) {
  var selectGeneration = document.getElementById('mySelect');
  var section = document.getElementById('section-display-none');
  /* Accediendo a los divs vacios dodne agregaremos los valores de los indicadores*/
  var enrolled = document.getElementById('enrolled');
  var dropout = document.getElementById('dropout');
  var achievement = document.getElementById('achievement');
  var achievementPercent = document.getElementById('achievement-percent');
  var cumulativeNps = document.getElementById('cumulative-nps');
  var techSkills = document.getElementById('tech-skills');
  var techSkillsPercent = document.getElementById('tech-skills-percent');
  var lifeSkills = document.getElementById('life-skills');
  var lifeSkillsPercent = document.getElementById('life-skills-percent');
  var studentSatisfaction = document.getElementById('student-satisfaction');
  var teacherRating = document.getElementById('teacher-rating');
  var jediMasterRating = document.getElementById('jedi-master-rating');
  /* Accediendo a los filtros por sprint*/
  var selectSprintTech = document.getElementById('select-sprint-tech');
  var selectSprintLife = document.getElementById('select-sprint-life');
  /* EVENTO CHANGE PARA EL FILTRO POR GENERACIONES*/
  selectGeneration.addEventListener('change', showGeneration);
  // Funcion para llenar la cantidad de alumnos desertores
  function showGeneration(event) {
    function countOff(obj) {
      var counter = 0;
      for (var i = 0; i < arrStudent.length; i++) {
        if (arrStudent[i]['active'] === false) {
          counter++;
        }
      }
      return Math.round(100 * counter / arrStudent.length) + '%';
    }
    function countProm(obj) {
      var promedioMinimo = 2100;
      var counter = 0;
      var arrPromStudent = [];
      var arrProm = [];
      for (var i = 0; i < arrStudent.length; i++) {
        if (arrStudent[i]['active'] === true) {
          for (var x = 0; x < arrStudent[0]['sprints'].length; x++) {
            var arr = Object.values(arrStudent[i]['sprints'][x]['score']);
            var sum = (arr[0] + arr[1]);
            arrProm.push(sum);
          }
        }
      }
      for (var z = 0; z < arrProm.length; z += 4) {
        var studentSprint = (arrProm[z] + (arrProm[z + 1]) + (arrProm[z + 2]) + (arrProm[z + 3])) / 4;
        arrPromStudent.push(studentSprint);
      }
      for (var y = 0; y < arrPromStudent.length; y++) {
        if (arrPromStudent[y] > promedioMinimo) {
          counter++;
        }
      }
      return counter;
    }
    // Funcion para obtener el porcentaje de satisfacción por generación
    function studentsSatisfaction (obj){
      var arrSatisfaction = [];
      var prome = 0;
      for (var i=0; i<rating.length; i++){
        var sum = rating[i]['student']['cumple'] + rating[i]['student']['supera'];
        arrSatisfaction.push(sum);
      }
      for (var m = 0; m<arrSatisfaction.length; m++){
        prome += arrSatisfaction[m];
      }
      return prome/rating.length + '%';
    }
    // Función para promediar puntaje de profesores
    function teacherProm (obj){
      var arr = [];
      var prome = 0;
      for (var i = 0; i<rating.length; i++){
        arr.push(rating[i]['teacher']);
      }
      for (var x= 0; x<arr.length; x++){
        prome += arr[x];
      }
      return Math.round(prome/rating.length);
    }
    //Función para promediar puntaje de Jedis Masters
    function jdProm (obj){
      var arr = [];
      var prome = 0;
      for (var i = 0; i<rating.length; i++){
        arr.push(rating[i]['jedi']);
      }
      for (var x= 0; x<arr.length; x++){
        prome += arr[x];
      }
      return Math.round(prome/rating.length);
    }
    // Función para promediar nps
    function nps (obj) {
      var arr = [];
      var prome = 0;
      for (var i = 0; i<rating.length; i++) {
        arr.push(rating[i]['nps']['promoters'] - rating[i]['nps']['detractors']);
      }
      for (var x = 0; x < arr.length; x++) {
        prome += arr[x];
      }
      return Math.round(prome/rating.length);
    }
    switch (true) {
    case event.target.value === 'lima2016II':
    // Llenar la cantidad de alumnos por generación y sede
      section.classList.remove('display-none');
      /* Llamando a la funcion de la GRAFICO ENROLLMENT (ver graphics.js, line:3)"aqp2016II"*/
      //FALTA CAMBIAR LOS PARAMETROS
      enrollmentGraphic(10, 124);
      /* Llamando a la funcion de la GRAFICO ACHIEVEMENT (ver graphics.js, line:4)"aqp2016II"*/
      achievementGraphic(15, 50);
      /* Llamando a la funcion de la GRAFICO NET PROMOTER SCORE(ver graphics.js, line:37)"aqp2016II"*/
      netPromoterScoreGraphic(20, 50, 17);
      /* Llamando a la funcion de la GRAFICO TECH SKILLS (ver graphics.js, line:56)"aqp2016II"*/
      techSkillsGraphic(18, 30);
      /* Llamando a la funcion de la GRAFICO TECH SKILLS por sprints(ver graphics.js, line:73)"aqp2016II"*/
      techSkillsSprintsGraphic(15, 5, 6, 10);
      /* Llamando a la funcion de la GRAFICO LIFE SKILLS (ver graphics.js, line:110)"aqp2016II"*/
      lifesSkillsGraphic(14, 18);
      /* Llamando a la funcion de la GRAFICO TECH SKILLS por sprints(ver graphics.js, line:127)"aqp2016II"*/
      lifeSkillsSprintsGraphic(5, 6, 7, 8);
      /* Llamando a la funcion de la GRAFICO STUDENTS SATISFACTION (ver graphics.js, line:163)"aqp2016II"*/
      studentSatisfactionGraphic(3, 5, 7, 10);
      /* Llamando a la funcion de la GRAFICO TEACHER RATING(ver graphics.js, line:182, line:201)"aqp2016II"*/
      teacherRatingGraphic(35, 54, 23, 22);
      /* Llamando a la funcion de la GRAFICO JEDI MASTER RATING (ver graphics.js)"aqp2016II"*/
      jediMasterRatingGraphic(34, 12, 23, 34);
      // variables a usar par alas funciones generales
      var student = data.LIM['2016-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar de resultados según las funciones
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      cumulativeNps.textContent = nps(rating);
      //Faltan editar los parámetros para los gráficos y que se actualice con las datos obtenidos de las funciones
      enrollmentGraphic(10, 39);
      achievementGraphic(15, 56);
      netPromoterScoreGraphic(20, 45, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 34);
      lifesSkillsGraphic(14, 23);
      lifeSkillsSprintsGraphic(6, 6);
      studentSatisfactionGraphic(3, 34);
      teacherRatingGraphic(35, 34);
      jediMasterRatingGraphic(34, 23);
      /* Evento para tech y life por sprint*/
      selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint4':
        techSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint4':
        lifeSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      break;
    case event.target.value === 'lima2017I':
      section.classList.remove('display-none');
      var student = data.LIM['2017-1'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = Math.round((countProm(student) * 100) / arrStudent.length) + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      cumulativeNps.textContent = nps(rating);
      //Faltan editar los parámetros para los gráficos y que se actualice con las datos obtenidos de las funciones
      enrollmentGraphic(10, 39);
      achievementGraphic(15, 56);
      netPromoterScoreGraphic(20, 45, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 34);
      lifesSkillsGraphic(14, 23);
      lifeSkillsSprintsGraphic(6, 6);
      studentSatisfactionGraphic(3, 34);
      teacherRatingGraphic(35, 34);
      jediMasterRatingGraphic(34, 23);
      /* Evento para tech y life por sprint*/
      selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        techSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        lifeSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      break;
    case event.target.value === 'lima2017II':
      section.classList.remove('display-none');
      var student = data.LIM['2017-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      cumulativeNps.textContent = nps(rating);
      //Faltan editar los parámetros para los gráficos y que se actualice con las datos obtenidos de las funciones
      enrollmentGraphic(10, 39);
      achievementGraphic(15, 56);
      netPromoterScoreGraphic(20, 45, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 34);
      lifesSkillsGraphic(14, 23);
      lifeSkillsSprintsGraphic(6, 6);
      studentSatisfactionGraphic(3, 34);
      teacherRatingGraphic(35, 34);
      jediMasterRatingGraphic(34, 23);
      /* Evento para tech y life por sprint*/
      selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        techSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        lifeSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      break;
    case event.target.value === 'aqp2016II':
      section.classList.remove('display-none');
      var student = data.AQP['2016-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = Math.round((countProm(student) * 100) / arrStudent.length) + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      cumulativeNps.textContent = nps(rating);
      //Faltan editar los parámetros para los gráficos y que se actualice con las datos obtenidos de las funciones
      enrollmentGraphic(10, 39);
      achievementGraphic(15, 56);
      netPromoterScoreGraphic(20, 45, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 34);
      lifesSkillsGraphic(14, 23);
      lifeSkillsSprintsGraphic(6, 6);
      studentSatisfactionGraphic(3, 34);
      teacherRatingGraphic(35, 34);
      jediMasterRatingGraphic(34, 23);
      /* Evento para tech y life por sprint*/
      selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        techSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        lifeSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      break;
    case event.target.value === 'aqp2017I':
      section.classList.remove('display-none');
      var student = data.AQP['2017-1'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      cumulativeNps.textContent = nps(rating);
      //Faltan editar los parámetros para los gráficos y que se actualice con las datos obtenidos de las funciones
      enrollmentGraphic(10, 39);
      achievementGraphic(15, 56);
      netPromoterScoreGraphic(20, 45, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 34);
      lifesSkillsGraphic(14, 23);
      lifeSkillsSprintsGraphic(6, 6);
      studentSatisfactionGraphic(3, 34);
      teacherRatingGraphic(35, 34);
      jediMasterRatingGraphic(34, 23);
      /* Evento para tech y life por sprint*/
      selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        techSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        lifeSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      break;
    case event.target.value === 'scl2016II':
      section.classList.remove('display-none');
      var student = data.SCL['2016-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      cumulativeNps.textContent = nps(rating);
      //Faltan editar los parámetros para los gráficos y que se actualice con las datos obtenidos de las funciones
      enrollmentGraphic(10, 39);
      achievementGraphic(15, 56);
      netPromoterScoreGraphic(20, 45, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 34);
      lifesSkillsGraphic(14, 23);
      lifeSkillsSprintsGraphic(6, 6);
      studentSatisfactionGraphic(3, 34);
      teacherRatingGraphic(35, 34);
      jediMasterRatingGraphic(34, 23);
      /* Evento para tech y life por sprint*/
      selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint4':
        techSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint4':
        lifeSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      break;
    case event.target.value === 'scl2017I':
      section.classList.remove('display-none');
      var student = data.SCL['2017-1'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      cumulativeNps.textContent = nps(rating);
      //Faltan editar los parámetros para los gráficos y que se actualice con las datos obtenidos de las funciones
      enrollmentGraphic(10, 39);
      achievementGraphic(15, 56);
      netPromoterScoreGraphic(20, 45, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 34);
      lifesSkillsGraphic(14, 23);
      lifeSkillsSprintsGraphic(6, 6);
      studentSatisfactionGraphic(3, 34);
      teacherRatingGraphic(35, 34);
      jediMasterRatingGraphic(34, 23);
      /* Evento para tech y life por sprint*/
      selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        techSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        lifeSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      break;
    case event.target.value === 'scl2017II':
      section.classList.remove('display-none');
      var student = data.SCL['2017-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = Math.round((countProm(student) * 100) / arrStudent.length) + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      cumulativeNps.textContent = nps(rating);
      //Faltan editar los parámetros para los gráficos y que se actualice con las datos obtenidos de las funciones
      enrollmentGraphic(10, 39);
      achievementGraphic(15, 56);
      netPromoterScoreGraphic(20, 45, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 34);
      lifesSkillsGraphic(14, 23);
      lifeSkillsSprintsGraphic(6, 6);
      studentSatisfactionGraphic(3, 34);
      teacherRatingGraphic(35, 34);
      jediMasterRatingGraphic(34, 23);
      /* Evento para tech y life por sprint*/
      selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint4':
        techSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint4':
        lifeSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      break;
    case event.target.value === 'cdm2017I':
      section.classList.remove('display-none');
      var student = data.CDMX['2017-1'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = Math.round((countProm(student) * 100) / arrStudent.length) + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      cumulativeNps.textContent = nps(rating);
      //Faltan editar los parámetros para los gráficos y que se actualice con las datos obtenidos de las funciones
      enrollmentGraphic(10, 39);
      achievementGraphic(15, 56);
      netPromoterScoreGraphic(20, 45, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 34);
      lifesSkillsGraphic(14, 23);
      lifeSkillsSprintsGraphic(6, 6);
      studentSatisfactionGraphic(3, 34);
      teacherRatingGraphic(35, 34);
      jediMasterRatingGraphic(34, 23);
      /* Evento para tech y life por sprint*/
      selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        techSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
        lifeSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint3':
        lifeSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      break;
    case event.target.value === 'cdm2017II':
      section.classList.remove('display-none');
      // Llenar la cantidad de alumnos totales
      var student = data.CDMX['2017-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      cumulativeNps.textContent = nps(rating);
      //Faltan editar los parámetros para los gráficos y que se actualice con las datos obtenidos de las funciones
      enrollmentGraphic(10, 39);
      achievementGraphic(15, 56);
      netPromoterScoreGraphic(20, 45, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 34);
      lifesSkillsGraphic(14, 23);
      lifeSkillsSprintsGraphic(6, 6);
      studentSatisfactionGraphic(3, 34);
      teacherRatingGraphic(35, 34);
      jediMasterRatingGraphic(34, 23);
      /* Evento para tech y life por sprint*/
      selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
          case event.target.value === 'sprint1':
            techSkillsSprintGraphic(7, 8);
            break;
          case event.target.value === 'sprint2':
            techSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
          case event.target.value === 'sprint1':
            lifeSkillsSprintGraphic(7, 8);
            break;
          case event.target.value === 'sprint2':
            lifeSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      break;
    default:
    section.classList.add('display-none');
    }
  }
});
