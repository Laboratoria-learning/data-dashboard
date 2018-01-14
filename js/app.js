window.addEventListener('load', function(event) {
  // var chooseGeneration = document.querySelector('.choose-sede-generation');
  var optgroupt = document.getElementById('optgroupt');
  // var enrollment = document.getElementById('enrollment');
  var generation = document.getElementById('generation');
  var title = document.getElementById('title');
  var titleGen = document.getElementById('title-gen');

  // Esta parte es para cuando se inicia la página. Carga como sede a Lima y también sus generaciones
  // Como ya estoy en la sede Lima, ya no necesito escoger la sede si quiero elegir otra generación; es por esta razón que se generó un nuevo evento  en "generation". OBSERVACIÓN: este evento también fue generado dentro del evento de elección de la sede
  var arrayLim = [];
  var lim = Object.keys(data['LIM']);// las generaciones de LIM
  
  for (var show in lim) {
    arrayLim.push(lim[show] + '|' + lim[show]);// me va a guardar un array asi : ['2016-2|2016-2','2017-1|2017-1','2017-2|2017-2']
  }
  // con c/iteración y valiéndome del método split (que elimina el separador ('|') ) obtengo un nuevo array. Ejem :["2016-2", "2016-2"]. Esto se repetirá 3 veces en el caso de Lima.
  for (var opLim in arrayLim) {
    var cutOpLim = arrayLim[opLim].split('|');
    var newOptionLim = document.createElement('option');
    newOptionLim.value = cutOpLim[0];
    if (newOptionLim.value === '2017-2') {
      newOptionLim.setAttribute('selected', 'selected');
    }
    newOptionLim.textContent = cutOpLim[1];
    generation.options.add(newOptionLim);
    titleGen.textContent = cutOpLim[1];
  }

  generation.addEventListener('change', function(event) {   
  // para cambiar el título de la generación
    for (var s = 0 ; s < lim.length;s++) {
      if (lim[s] === event.target.value) {
        titleGen.textContent = '';
        titleGen.textContent = lim[s];
      }
    }

    var dataAlumns = {};
    for (var p in data['LIM']) {
      if (p === event.target.value) {
        dataAlumns = data['LIM'][p].students;
      }
    }
    console.log(dataAlumns);// obtengo a todos los alumnos de la generación elegida

    var contGoal = 0;// que alcanzaron la meta
    var contTech = 0;
    var contHse = 0;
    var qTech;
    var uHse;
    var contInactive = 0;

    for (var k = 0; k < dataAlumns.length; k++) {
      if (dataAlumns[k].active === false) {
        contInactive++;
      }
      // empezando los calculos cuando el alumno está activo
      if (dataAlumns[k].active === true) {
        var sumTech = 0;
        var sumHse = 0;

        for (var y = 0; y < dataAlumns[k].sprints.length; y++) { // va a sumar el puntaje total de los sprints-alumna en tech y hse
          sumTech += dataAlumns[k].sprints[y].score.tech;
          // console.log(dataAlumns[k].sprints[y].score.tech);//ingresa a la nota por número de sprint del alumno
          sumHse += dataAlumns[k].sprints[y].score.hse; 
          // console.log(dataAlumns[k].sprints[y].score.hse);  
        }
        // console.log(sumTech);//suma total de notas en tech de cada alumno de la generación elegida
        // console.log(sumHse);//suma total de notas en tech de cada alumno de la generación elegida
        // console.log(dataAlumns[k].sprints)//me muestra los sprints del alumno

        // Cálculos para los promedios por generación escogida
        qTech = sumTech / dataAlumns[k].sprints.length;// me muestra el promedio de las notas tech (sumTech/#sprints llevados)
        uHse = sumHse / dataAlumns[k].sprints.length;// me muestra el promedio de las notas hse (sumHse/#sprints llevados)
        // console.log(qTech);//promedio de tech(de c/alumno)
        // console.log(dataAlumns[k].sprints);//número de sprints(de c/alumno)

        if (uHse >= 840 && qTech >= 1240) {
          contGoal++; 
        }
        if (qTech >= 1240) {
          contTech++;              
        }
        if (uHse >= 840) {
          contHse++;
        }
      }
    }
    console.log(contTech);// número de estudiantes que pasaron el mínimo requerido en tech
    console.log(contHse);// número de estudiantes que pasaron el mínimo requerido en hse
    console.log(contGoal);// número de estudiantes que pasaron el mínimo requerido en ambos skills
    var retired = ((contInactive * 100) / dataAlumns.length).toFixed(1);
    var studentAchievement = ((contGoal * 100) / dataAlumns.length).toFixed(1);
    var neoTech = ((contTech / (dataAlumns.length - contInactive)) * 100).toFixed(1);
    var neoSkills = ((contHse / (dataAlumns.length - contInactive)) * 100).toFixed(1);

    // para net promoter 
    var dataRatings = {};
    for (var p in data['LIM']) {
      if (p === event.target.value) {
        dataRatings = data['LIM'][p].ratings;
      }
    }
    console.log(dataRatings);// obtengo a todos los ratings de la generación elegida
    
    var detractors = 0;
    var promoters = 0;
    var pasive = 0;
    
    for (var z = 0; z < dataRatings.length; z++) {
      detractors += dataRatings[z].nps.detractors;
      promoters += dataRatings[z].nps.promoters;
      pasive += dataRatings[z].nps.passive;
    }
    var resultDetractors = (detractors / dataRatings.length).toFixed(1);
    var resultPromoters = (promoters / dataRatings.length).toFixed(1);
    var resultPasive = (pasive / dataRatings.length).toFixed(1);
    // ya no se multiplicó por 100, ya que el 100% es equivalente a la unidad 
    var resultNps = resultPromoters - resultDetractors; 

    // Parte Student satisfaction (para últimos gráficos)
        
    var excedExpectationStudents = 0;
    var averageTeacher = 0;
    var excedExpectationJedi = 0;
    for (var z = 0; z < dataRatings.length; z++) {
      excedExpectationStudents += dataRatings[z].student.supera;
      averageTeacher += dataRatings[z].teacher;
      excedExpectationJedi += dataRatings[z].jedi;
    }
    var averageTeacherResult = (averageTeacher / dataRatings.length).toFixed(1);
    var excedExpectationJediRating = (excedExpectationJedi / dataRatings.length).toFixed(1);

    var enrollment = document.getElementById('enrollment');
    enrollment.textContent = '';
    enrollment.textContent = dataAlumns.length;
    var retiredAlumn = document.getElementById('retiredAlumn');
    retiredAlumn.textContent = '';
    retiredAlumn.textContent = retired;
    var countAchievement = document.getElementById('countAchievement');
    countAchievement.textContent = '';
    countAchievement.textContent = contGoal;
    var percentageAchievement = document.getElementById('percentageAchievement');
    percentageAchievement.textContent = '';
    percentageAchievement.textContent = studentAchievement;
    var totalAlumns = document.getElementById('total-alumns');
    totalAlumns.textContent = '';
    totalAlumns.textContent = dataAlumns.length;
    var countSkills = document.getElementById('countSkills');
    countSkills.textContent = '';
    countSkills.textContent = contTech;
    var totalStudents = document.getElementById('totalStudentsTech');
    totalStudents.textContent = '';
    totalStudents.textContent = (dataAlumns.length - contInactive);
    var percentageStudentsPass = document.getElementById('percentageStudentsTech');
    percentageStudentsPass.textContent = '';
    percentageStudentsPass.textContent = neoTech;
    var countHse = document.getElementById('countHse');
    countHse.textContent = '';
    countHse.textContent = contHse;
    var totalStudentsHse = document.getElementById('totalStudentsHse');
    totalStudentsHse.textContent = '';
    totalStudentsHse.textContent = (dataAlumns.length - contInactive);
    var percentageStudentsHse = document.getElementById('percentageStudentsHse');
    percentageStudentsHse.textContent = '';
    percentageStudentsHse.textContent = neoSkills;
    var promoterScore = document.getElementById('promoter-score');
    promoterScore.textContent = '';
    promoterScore.textContent = resultPromoters;
    var passiveScore = document.getElementById('passive-score');
    passiveScore.textContent = '';
    passiveScore.textContent = resultPasive;
    var detractorScore = document.getElementById('detractor-score');
    detractorScore.textContent = '';
    detractorScore.textContent = resultDetractors; 
    var averageNps = document.getElementById('average-nps');
    averageNps.textContent = '';
    averageNps.textContent = resultNps;
    var jedi = document.getElementById('jedi')
    jedi.textContent = '';
    jedi.textContent = excedExpectationJediRating; 
    var teacher = document.getElementById('teacher'); 
    teacher.textContent = '';
    teacher.textContent = averageTeacherResult;   
    var expectationStudents = document.getElementById('expectationStudents');
    expectationStudents.textContent = '';
    expectationStudents.textContent = excedExpectationStudents;
  });

  // Esta parte es para cuando se quiere elegir otra sede y otra generación
  optgroupt.addEventListener('change', function(event) {

    var sede = event.target.value;// cada vez que escoja una opción, me arrojará su valor:AQP,LIM,CDMX,SLC.
    var genSede =Object.keys(data[sede]);// me muestra las generaciones de la sede elegida. Ejem: ["2016-2", "2017-1"]
  
    generation.innerHTML = '';
    var optionSede = [];
    if (sede === 'LIM') {
      title.textContent = '';
      title.textContent = 'LIMA';
      titleGen.textContent = '';
      for (var d in genSede) { 
        optionSede.push(genSede[d] + '|' + genSede[d]);
      }
    } else if (sede === 'AQP') {
      title.textContent = '';
      title.textContent = 'AREQUIPA';
      titleGen.textContent = '';
      for (var d in genSede) {
        optionSede.push(genSede[d] + '|' + genSede[d]);
      }
    } else if (sede === 'CDMX') {
      title.textContent = '';
      title.textContent = 'CIUDAD DE MEXICO';
      titleGen.textContent = '';
      for (var d in genSede) {
        optionSede.push(genSede[d] + '|' + genSede[d]);
      }
    } else if (sede === 'SCL') {
      title.textContent = '';
      title.textContent = 'SANTIAGO DE CHILE';
      titleGen.textContent = '';
      for (var d in genSede) {
        optionSede.push(genSede[d] + '|' + genSede[d]);
      }
    }
    for (var pick in optionSede) {
      var cutArray = optionSede[pick].split('|');
      var newOption = document.createElement('option');
      newOption.value = cutArray[0];
      if (newOption.value === '2017-2') {
        newOption.setAttribute('selected', 'selected');
      }
      newOption.textContent = cutArray[1];
      generation.options.add(newOption);
     
    }
 

    generation.addEventListener('change', function(event) { 
    // para cambiar el título de la generación
      for (var s = 0 ; s < genSede.length;s++) {
        if (genSede[s] === event.target.value) {
          titleGen.textContent = '';
          titleGen.textContent = genSede[s];
        }
      }

      for (var item in data) {
        if (item === sede) {
          var dataSede = {};
          dataSede = data[item];
        }
      }
      console.log(dataSede);// me devuelve el contenido de la sede elegida: {2016-2: {…}, 2017-1: {…}, 2017-2: {…}}

      for (var p in dataSede) {
        var datesGen = {};
        datesGen = dataSede[p];
      }
      console.log(datesGen);// me muestra en un objeto:{students: Array(61), ratings: Array(2)}

      for (var i in dataSede) {
        if (i === event.target.value) {
          var dataAlumns = {};
          dataAlumns = dataSede[i].students;
        }
      }
      console.log(dataAlumns);// tengo a todos los estudiantes de la sede y generación elegida en un array



      var contGoal = 0;// que alcanzaron la meta
      var contTech = 0;
      var contHse = 0;
      var qTech;
      var uHse;
      var contInactive = 0;

      for (var k = 0; k < dataAlumns.length; k++) {
        if (dataAlumns[k].active === false) {
          contInactive++;
        }
        // console.log(contInactive);//número de alumnos inactivos por sede elegida
        // console.log(dataAlumns[k]);//me muestra cada objeto alumno

        // empezando los calculos cuando el alumno está activo

        if (dataAlumns[k].active === true) {
          var sumTech = 0;
          var sumHse = 0;
    
          for (var y = 0; y < dataAlumns[k].sprints.length; y++) { // va a sumar el puntaje total de los sprints-alumna en tech y hse
            sumTech += dataAlumns[k].sprints[y].score.tech;
            // console.log(dataAlumns[k].sprints[y].score.tech);//ingresa a la nota por número de sprint del alumno
            sumHse += dataAlumns[k].sprints[y].score.hse; 
            // console.log(dataAlumns[k].sprints[y].score.hse);  
          }
          // console.log(sumTech);//suma total de notas en tech de cada alumno de la generación elegida
          // console.log(sumHse);//suma total de notas en tech de cada alumno de la generación elegida
          // console.log(dataAlumns[k].sprints)//me muestra los sprints del alumno
    
          // Cálculos para los promedios por generación escogida
          qTech = sumTech / dataAlumns[k].sprints.length;// me muestra el promedio de las notas tech (sumTech/#sprints llevados)
          uHse = sumHse / dataAlumns[k].sprints.length;// me muestra el promedio de las notas hse (sumHse/#sprints llevados)
          // console.log(qTech);//promedio de tech(de c/alumno)
          // console.log(dataAlumns[k].sprints);//número de sprints(de c/alumno)

          if (uHse >= 840 && qTech >= 1240) {
            contGoal++; 
          }
          if (qTech >= 1240) {
            contTech++;              
          }
          if (uHse >= 840) {
            contHse++;
          }
        }
      }
      console.log(contTech);// número de estudiantes que pasaron el mínimo requerido en tech
      console.log(contHse);// número de estudiantes que pasaron el mínimo requerido en hse
      console.log(contGoal);// número de estudiantes que pasaron el mínimo requerido en ambos skills
      var retired = ((contInactive * 100) / dataAlumns.length).toFixed(1);
      var studentAchievement = ((contGoal * 100) / dataAlumns.length).toFixed(1);
      var neoTech = ((contTech / (dataAlumns.length - contInactive)) * 100).toFixed(1);
      var neoSkills = ((contHse / (dataAlumns.length - contInactive)) * 100).toFixed(1);

      // para net promoter 
       
      for (var m in dataSede) {
        if (m === event.target.value) {
          var dataRatings = {};
          dataRatings = dataSede[m].ratings;
        }
      }
      console.log(dataRatings);// tengo el contenido de dataRatings por generación elegida. ejem: (3) [{…}, {…}, {…}]

      var detractors = 0;
      var promoters = 0;
      var pasive = 0;
      
      for (var z = 0; z < dataRatings.length; z++) {
        detractors += dataRatings[z].nps.detractors;
        promoters += dataRatings[z].nps.promoters;
        pasive += dataRatings[z].nps.passive;
      }
      var resultDetractors = (detractors / dataRatings.length).toFixed(1);
      var resultPromoters = (promoters / dataRatings.length).toFixed(1);
      var resultPasive = (pasive / dataRatings.length).toFixed(1);
      // ya no se multiplicó por 100, ya que el 100% es equivalente a la unidad 
      var resultNps = resultPromoters - resultDetractors; 

      // Parte Student satisfaction (para últimos gráficos)
        
      var excedExpectationStudents = 0;
      var averageTeacher = 0;
      var excedExpectationJedi = 0;
      for (var z = 0; z < dataRatings.length; z++) {
        excedExpectationStudents += dataRatings[z].student.supera;
        averageTeacher += dataRatings[z].teacher;
        excedExpectationJedi += dataRatings[z].jedi;
      }
      var averageTeacherResult = (averageTeacher / dataRatings.length).toFixed(1);
      var excedExpectationJediRating = (excedExpectationJedi / dataRatings.length).toFixed(1);
      // STUDENT SATISFACTION: excedExpectationStudents me va a dar el total acumulado de estudiantes que superaron la espectativas (que es lo que me piden)
      // TEACHER RATING: averageTeacherResult me da el promedio de los resultados para los profes(es lo que piden)
      // JEDI MASTER RATING: excedExpectationJedi me da el promedio de los resultados para los jedi master ( que es lo que piden)
                
      // añade función a html
      var enrollment = document.getElementById('enrollment');
      enrollment.textContent = '';
      enrollment.textContent = dataAlumns.length;
      var retiredAlumn = document.getElementById('retiredAlumn');
      retiredAlumn.textContent = '';
      retiredAlumn.textContent = retired;
      var countAchievement = document.getElementById('countAchievement');
      countAchievement.textContent = '';
      countAchievement.textContent = contGoal;
      var percentageAchievement = document.getElementById('percentageAchievement');
      percentageAchievement.textContent = '';
      percentageAchievement.textContent = studentAchievement;
      var totalAlumns = document.getElementById('total-alumns');
      totalAlumns.textContent = '';
      totalAlumns.textContent = dataAlumns.length;
      var countSkills = document.getElementById('countSkills');
      countSkills.textContent = '';
      countSkills.textContent = contTech;
      var totalStudents = document.getElementById('totalStudentsTech');
      totalStudents.textContent = '';
      totalStudents.textContent = (dataAlumns.length - contInactive);
      var percentageStudentsPass = document.getElementById('percentageStudentsTech');
      percentageStudentsPass.textContent = '';
      percentageStudentsPass.textContent = neoTech;
      var countHse = document.getElementById('countHse');
      countHse.textContent = '';
      countHse.textContent = contHse;
      var totalStudentsHse = document.getElementById('totalStudentsHse');
      totalStudentsHse.textContent = '';
      totalStudentsHse.textContent = (dataAlumns.length - contInactive);
      var percentageStudentsHse = document.getElementById('percentageStudentsHse');
      percentageStudentsHse.textContent = '';
      percentageStudentsHse.textContent = neoSkills;
      var promoterScore = document.getElementById('promoter-score');
      promoterScore.textContent = '';
      promoterScore.textContent = resultPromoters;
      var passiveScore = document.getElementById('passive-score');
      passiveScore.textContent = '';
      passiveScore.textContent = resultPasive;
      var detractorScore = document.getElementById('detractor-score');
      detractorScore.textContent = '';
      detractorScore.textContent = resultDetractors; 
      var averageNps = document.getElementById('average-nps');
      averageNps.textContent = '';
      averageNps.textContent = resultNps;
      var jedi = document.getElementById('jedi')
      jedi.textContent = '';
      jedi.textContent = excedExpectationJediRating; 
      var teacher = document.getElementById('teacher'); 
      teacher.textContent = '';
      teacher.textContent = averageTeacherResult;         
      var expectationStudents = document.getElementById('expectationStudents');
      expectationStudents.textContent = '';
      expectationStudents.textContent = excedExpectationStudents;
    });
  });
});


