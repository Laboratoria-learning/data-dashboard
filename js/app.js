window.addEventListener('load', function() {
// Container de resultados en HTML
  var boxResult = document.getElementById('result');
  var sede = 'LIM';
  var generation = '2016-2';
  // Consulta Sede
  function resultSede() {
    // creando contenedores de información General
    var consultLima = document.createElement('div');
    var boxInfoGeneral = document.createElement('div');
    // Contenedores de Enrollment
    var boxEnrollment = document.createElement('div');
    var titleEnrollment = document.createElement('p');
    var boxStudentTotal = document.createElement('div');
    var boxDropout = document.createElement('div');

    // Contenedores de Achievement
    var boxAchievement = document.createElement('div');
    var titleAchievement = document.createElement('p');
    var boxStudentUp = document.createElement('div');
    var boxPercentageStudentUp = document.createElement('div');

    // Contenedores de Net Promoter Score
    var boxNps = document.createElement('div');
    var titleNps = document.createElement('p');
    var boxPercentageNps = document.createElement('div');
    var boxPercentageNpsTypes = document.createElement('div');

    // Contenedores Student Satisfaction 
    var boxStudentSatisfaction = document.createElement('div');
    var titleStudentSatisfaction = document.createElement('p');
    var boxPercentageStudentSat = document.createElement('div');


    // elementos que contienen información de Enrollment
    var numberStudentTotal = document.createElement('p');
    var descriptionNumber = document.createElement('p');
    var percentageDropout = document.createElement('p');
    var descriptionDropout = document.createElement('p');
    
    // elementos que contienen información de Achievement
    var numberStudentUp = document.createElement('p');
    var descriptionStudentUp = document.createElement('p');
    var percentageStudentUp = document.createElement('p');
    var descriptionPercentageStudent = document.createElement('p');

    // elementos que contienes información de NPS
    var percentageNps = document.createElement('p');
    var descriptionNps = document.createElement('p');
    var percentageNpsPromoter = document.createElement('p');
    var percentageNpsPassive = document.createElement('p');
    var percentageNpsDetractors = document.createElement('p');

    // elementos que contiene información de Student Satisfaction

    
    // insertando elementos a contenedor Enrollment
    boxEnrollment.appendChild(titleEnrollment);
    boxEnrollment.appendChild(boxStudentTotal);
    boxEnrollment.appendChild(boxDropout);
    boxStudentTotal.appendChild(numberStudentTotal);
    boxStudentTotal.appendChild(descriptionNumber);
    boxDropout.appendChild(percentageDropout);
    boxDropout.appendChild(descriptionDropout);

    // insertando elementos a contenedor Achievement
    boxAchievement.appendChild(titleAchievement);
    boxAchievement.appendChild(boxStudentUp);
    boxAchievement.appendChild(boxPercentageStudentUp);
    boxStudentUp.appendChild(numberStudentUp);
    boxStudentUp.appendChild(descriptionStudentUp);
    boxPercentageStudentUp.appendChild(percentageStudentUp);
    boxPercentageStudentUp.appendChild(descriptionPercentageStudent);
   
    // insertando elementos a contenedor NPS
    boxNps.appendChild(titleNps);
    boxNps.appendChild(boxPercentageNps);
    boxNps.appendChild(boxPercentageNpsTypes);
    boxPercentageNps.appendChild(percentageNps);
    boxPercentageNps.appendChild(descriptionNps);
    boxPercentageNpsTypes.appendChild(percentageNpsPromoter);
    boxPercentageNpsTypes.appendChild(percentageNpsPassive);
    boxPercentageNpsTypes.appendChild(percentageNpsDetractors);

    // insertando elementos a contenedores Generales
    boxInfoGeneral.appendChild(boxEnrollment);
    boxInfoGeneral.appendChild(boxAchievement);
    boxInfoGeneral.appendChild(boxNps);
    consultLima.appendChild(boxInfoGeneral);
    boxResult.appendChild(consultLima);
    // estilos 
    boxEnrollment.classList.add('box-info');
    boxAchievement.classList.add('box-info');
    boxNps.classList.add('box-info');
    boxStudentTotal.classList.add('inline-block');
    boxDropout.classList.add('inline-block');
    boxStudentUp.classList.add('inline-block');
    boxPercentageStudentUp.classList.add('inline-block');
    boxPercentageNps.classList.add('inline-block');
    boxPercentageNpsTypes.classList.add('inline-block');
   
    // insertando información en Enrollment
    titleEnrollment.textContent = 'Enrollment';
    numberStudentTotal.textContent = totalStudentActive(sede, generation);
    percentageDropout.textContent = dropout(sede, generation) + '%';
    descriptionNumber.textContent = '# Students Currently Enrolled';
    descriptionDropout.textContent = '% Dropout' ; 
    // insertando información en Achievement
    titleAchievement.textContent = 'Achievement';
    numberStudentUp.textContent = studentAchievement(sede, generation);
    descriptionStudentUp.textContent = '# Students that meet the target';
    percentageStudentUp.textContent = (studentAchievement(sede, generation) / totalStudentActive(sede, generation)) * 100 + '%';
    descriptionPercentageStudent.textContent = '% of Total';
    // insertando información en NPS
    titleNps.textContent = 'Net Promoter Score';
    percentageNps.textContent = npsAverage(sede, generation) + '%';
    descriptionNps.textContent = '% Acumulative NPS';
    percentageNpsPromoter.textContent = promoterNps(sede, generation) + '%' + ' Promoter';
    percentageNpsPassive.textContent = passiveNps(sede, generation) + '%' + ' Passive';
    percentageNpsDetractors.textContent = detractorNps(sede, generation) + '%' + ' Detractors';
  }

  // Función que obtiene Estudiantes Activos por Sede y Generación
  function totalStudentActive(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var totalStudent = dataGeneration.students;
    var active = 0;
    for (i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        active++;
      }
    }
    return active;
  }
  // Función que obtiene porcentaje por Sede y Generación
  function dropout(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var totalStudent = dataGeneration.students;
    var dropout = 0;
    for (i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === false) {
        dropout++;
      }
    }
    var result = Math.round((dropout / (totalStudent.length)) * 100);
    return result ;
  }

  // funcion que obtiene la cantidad de estudiantes que pasan la meta
  function studentAchievement(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var totalStudents = dataGeneration.students;
    var averageArray = [];
    
    for (i = 0; i < totalStudents.length; i++) {
      var sumTech = 0;
      var sumHSE = 0;
      if (totalStudents[i].active === true) {
        var numSprint = totalStudents[i].sprints.length;
        for (j = 0; j < numSprint; j++) {
          var pointsTech = totalStudents[i].sprints[j].score.tech;
          var pointsHSE = totalStudents[i].sprints[j].score.hse;
          sumTech += pointsTech;
          sumHSE += pointsHSE;
        }
        var averageTech = sumTech / numSprint;
        var averageHSE = sumHSE / numSprint;
        averageArray.push([averageTech, averageHSE]);
      }
    }
    var studentsGoals = 0;
    for (k = 0 ; k < averageArray.length ;k++) {
      if (averageArray[k][0] >= 1260 && averageArray[k][1] >= 840) {
        studentsGoals ++;     
      }
    }
    return studentsGoals;
  }

  function npsAverage(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var dataRatings = dataGeneration.ratings;
    var numSprint = dataRatings.length;
    var npsArray = [];
    for (i = 0; i < numSprint;i++) {
      var nps = dataGeneration.ratings[i].nps.promoters - dataGeneration.ratings[i].nps.detractors;
      npsArray.push(nps);
    }
    var sumNps = 0;
    for (j = 0 ; j < npsArray.length ;j++) {
      sumNps += npsArray[j];
    }
    var averageNps = sumNps / numSprint;
    return averageNps;
  }

  function promoterNps(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var dataRatings = dataGeneration.ratings;
    var numSprint = dataRatings.length;
    var promotersArray = [];
         
    for (i = 0; i < numSprint;i++) {
      var totalAnswers = dataRatings[i].nps.promoters + dataRatings[i].nps.passive + dataRatings[i].nps.detractors ;
      var promoters = ((dataRatings[i].nps.promoters) / totalAnswers) * 100;
      promotersArray.push(promoters);
    }
    var sumPromoter = 0;
    for (j = 0 ; j < promotersArray.length ;j++) {
      sumPromoter += promotersArray[j];
    }
    var averagePromoter = sumPromoter / numSprint;
    return averagePromoter;
  }

  function passiveNps(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var dataRatings = dataGeneration.ratings;
    var numSprint = dataRatings.length;
    var passiveArray = [];
     
    
    for (i = 0; i < numSprint;i++) {
      var totalAnswers = dataRatings[i].nps.promoters + dataRatings[i].nps.passive + dataRatings[i].nps.detractors ;
      var passive = ((dataRatings[i].nps.passive) / totalAnswers) * 100;
      passiveArray.push(passive);
    }
    var sumPassive = 0;
    for (j = 0 ; j < passiveArray.length ;j++) {
      sumPassive += passiveArray[j];
    }
    var averagePassive = sumPassive / numSprint;
    return averagePassive;
  }

  function detractorNps(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var dataRatings = dataGeneration.ratings;
    var numSprint = dataRatings.length;
    var detractorArray = [];
     
    
    for (i = 0; i < numSprint;i++) {
      var totalAnswers = dataRatings[i].nps.promoters + dataRatings[i].nps.passive + dataRatings[i].nps.detractors ;
      var detractor = ((dataRatings[i].nps.detractors) / totalAnswers) * 100;
      detractorArray.push(detractor);
    }
    var sumDetractor = 0;
    for (j = 0 ; j < detractorArray.length ;j++) {
      sumDetractor += detractorArray[j];
    }
    var averageDetractor = sumDetractor / numSprint;
    return averageDetractor;
  }

  function studentSatisfaction(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var arraySatisfaction = [];
    for (i = 0;i < dataGeneration.ratings.length;i++) {
      var datacumple = dataGeneration.ratings[i].student.cumple;
      var dataSupera = dataGeneration.ratings[i].student.supera;
      var totalSatisfaction = datacumple + dataSupera;
      arraySatisfaction.push(totalSatisfaction);
    }

    return arraySatisfaction;
  }

    
  // ejecución de función
  resultSede();
});