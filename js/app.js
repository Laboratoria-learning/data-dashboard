window.addEventListener('load', function() {
  // Container de resultados en HTML
  var boxResult = document.getElementById('result');
  // Arequipa
  var dataA2017I = document.getElementById('dataA_2017I');
  var dataA2016II = document.getElementById('dataA_2016II');
  // México
  var dataM2017I = document.getElementById('dataM_2017I');
  var dataM2017II = document.getElementById('dataM_2017II');
  // Lima
  var dataL2017I = document.getElementById('dataL_2017I');
  var dataL2017II = document.getElementById('dataL_2017II');
  var dataL2016II = document.getElementById('dataL_2016II');
  // Chile
  var dataC2017I = document.getElementById('dataC_2017I');
  var dataC2017II = document.getElementById('dataC_2017II');
  var dataC2016II = document.getElementById('dataC_2016II');
  
  // Cargando ultimos datos de la proción por defecto
  resultSede('LIM', '2017-2');

  dataA2017I.addEventListener('click', function() {
    clear();
    resultSede('AQP', '2017-1');
  });
  dataA2016II.addEventListener('click', function() {
    clear();
    resultSede('AQP', '2016-2');
  });
  dataM2017I.addEventListener('click', function() {
    clear();
    resultSede('CDMX', '2017-1');
  });
  dataM2017II.addEventListener('click', function() {
    clear();
    resultSede('CDMX', '2017-2');
  });
  dataL2017I.addEventListener('click', function() {
    clear();
    resultSede('LIM', '2017-1');
  });
  dataL2017II.addEventListener('click', function() {
    clear();
    resultSede('LIM', '2017-2');
  });
  dataL2016II.addEventListener('click', function() {
    clear();
    resultSede('LIM', '2016-2');
  });
  dataC2017I.addEventListener('click', function() {
    clear();
    resultSede('SCL', '2017-1');
  });
  dataC2017II.addEventListener('click', function() {
    clear();
    resultSede('SCL', '2017-2');
  });
  dataC2016II.addEventListener('click', function() {
    clear();
    resultSede('SCL', '2016-2');
  });
 
  
  // Consulta Sede
  function resultSede(sede, generation) {
    // creando contenedores de información General
    var titleSede = document.createElement('p');
    var consultSede = document.createElement('div');
    var boxInfoGeneral = document.createElement('div');
    var boxRating = document.createElement('div');
    var boxTech = document.createElement('div');
    var boxHse = document.createElement('div');
    var studentsInfo = document.createElement('div');

    // Contenedores de Enrollment
    var boxEnrollment = document.createElement('div');
    var titleEnrollment = document.createElement('p');
    var boxStudentTotal = document.createElement('div');
    var boxDropout = document.createElement('div');
    var boxCanvas = document.createElement('div');
    var canvasEnrollment = document.createElement('canvas');

    // Contenedores de Achievement
    var boxAchievement = document.createElement('div');
    var titleAchievement = document.createElement('p');
    var boxStudentUp = document.createElement('div');
    var boxPercentageStudentUp = document.createElement('div');
    var boxCanvas2 = document.createElement('div');
    var canvasArchievement2 = document.createElement('canvas');

    // Contenedores de Net Promoter Score
    var boxNps = document.createElement('div');
    var titleNps = document.createElement('p');
    var boxPercentageNps = document.createElement('div');
    var boxPercentageNpsTypes = document.createElement('div');
    var boxCanvas3 = document.createElement('div');
    var canvasNetPromoterScore3 = document.createElement('canvas');

    // Contenedores Student Satisfaction 
    var boxStudentSatisfaction = document.createElement('div');
    var titleStudentSatisfaction = document.createElement('p');
    var selectSatisfaction = document.createElement('select');
    var optionSatisfaction = document.createElement('option');
    var optionSatisfactionS1 = document.createElement('option');
    var optionSatisfactionS2 = document.createElement('option');
    var optionSatisfactionS3 = document.createElement('option');
    var optionSatisfactionS4 = document.createElement('option');
    var boxPercentageStudentSat = document.createElement('div');
    var boxCanvas6 = document.createElement('div');
    var canvasSatisf = document.createElement('canvas');

    // contenedores TECH
    var boxStudentTech = document.createElement('div');
    var titleStudentTech = document.createElement('p');
    var selectTech = document.createElement('select');
    var optionTech = document.createElement('option');
    var optionTechS1 = document.createElement('option');
    var optionTechS2 = document.createElement('option');
    var optionTechS3 = document.createElement('option');
    var optionTechS4 = document.createElement('option');
    var boxPercentageStudentTech = document.createElement('div');
    var boxNumberStudentTech = document.createElement('div');
    var boxCanvas4 = document.createElement('div');
    var canvasTech = document.createElement('canvas');


    // contenedores HSE
    var boxStudentHse = document.createElement('div');
    var titleStudentHse = document.createElement('p');
    var selectHse = document.createElement('select');
    var optionHse = document.createElement('option');
    var optionHseS1 = document.createElement('option');
    var optionHseS2 = document.createElement('option');
    var optionHseS3 = document.createElement('option');
    var optionHseS4 = document.createElement('option');
    var boxPercentageStudentHse = document.createElement('div');
    var boxNumberStudentHse = document.createElement('div');
    var boxCanvas5 = document.createElement('div');
    var canvasHSE = document.createElement('canvas');

    // Contenedores  Teacher
    var boxTeacher = document.createElement('div');
    var titleTeacher = document.createElement('p');
    var selectTeacher = document.createElement('select');
    var optionTeacher = document.createElement('option');
    var optionTeacherS1 = document.createElement('option');
    var optionTeacherS2 = document.createElement('option');
    var optionTeacherS3 = document.createElement('option');
    var optionTeacherS4 = document.createElement('option');
    var boxPercentageTeacher = document.createElement('div');
    var boxTeach7 = document.createElement('div');
    var canvasTeacher = document.createElement('canvas');

    // Contenedores Jedi
    var boxJedi = document.createElement('div');
    var titleJedi = document.createElement('p');
    var selectJedi = document.createElement('select');
    var optionJedi = document.createElement('option');
    var optionJediS1 = document.createElement('option');
    var optionJediS2 = document.createElement('option');
    var optionJediS3 = document.createElement('option');
    var optionJediS4 = document.createElement('option');
    var boxPercentageJedi = document.createElement('div');
    var boxJedi8 = document.createElement('div');
    var canvasJedi = document.createElement('canvas');


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
    var percentSatisfaction = document.createElement('p');
    var descriptionSatisfaction = document.createElement('p');

    // elementos que contiene información de Student Tech
    var numberTech = document.createElement('p');
    var descriptionNumberTech = document.createElement('p');
    var percentageTech = document.createElement('p');
    var descriptionTech = document.createElement('p');
    

    // elementos que contiene información de Student HSE
    var numberHse = document.createElement('p');
    var descriptionNumberHse = document.createElement('p');
    var percentageHse = document.createElement('p');
    var descriptionHse = document.createElement('p');


    // elementos que contienen información de Teacher
    var percentageTeacher = document.createElement('p');
    var descriptionTeacher = document.createElement('p');

    // elementos que contienen Información de Jedi
    var percentageJedi = document.createElement('p');
    var descriptionJedi = document.createElement('p');
    
    // insertando elementos a contenedor Enrollment
    boxEnrollment.appendChild(titleEnrollment);
    boxEnrollment.appendChild(boxStudentTotal);
    boxEnrollment.appendChild(boxDropout);
    boxEnrollment.appendChild(boxCanvas);
    boxCanvas.appendChild(canvasEnrollment);
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
    boxAchievement.appendChild(boxCanvas2);
    boxCanvas2.appendChild(canvasArchievement2);
   
    // insertando elementos a contenedor NPS
    boxNps.appendChild(titleNps);
    boxNps.appendChild(boxPercentageNps);
    boxNps.appendChild(boxPercentageNpsTypes);
    boxPercentageNps.appendChild(percentageNps);
    boxPercentageNps.appendChild(descriptionNps);
    boxPercentageNpsTypes.appendChild(percentageNpsPromoter);
    boxPercentageNpsTypes.appendChild(percentageNpsPassive);
    boxPercentageNpsTypes.appendChild(percentageNpsDetractors);
    boxNps.appendChild(boxCanvas3);
    boxCanvas3.appendChild(canvasNetPromoterScore3);

    // insertando elementos a contenedor TECH
    
    boxStudentTech.appendChild(titleStudentTech);
    boxStudentTech.appendChild(selectTech);
    boxStudentTech.appendChild(boxNumberStudentTech);
    boxStudentTech.appendChild(boxPercentageStudentTech);
    
    boxNumberStudentTech.appendChild(numberTech);
    boxNumberStudentTech.appendChild(descriptionNumberTech);
    boxPercentageStudentTech.appendChild(percentageTech);
    boxPercentageStudentTech.appendChild(descriptionTech);
    selectTech.appendChild(optionTech);
    selectTech.appendChild(optionTechS1);
    selectTech.appendChild(optionTechS2);
    selectTech.appendChild(optionTechS3);
    selectTech.appendChild(optionTechS4);
    boxStudentTech.appendChild(boxCanvas4);
    boxCanvas4.appendChild(canvasTech);

    // insertando elementos a contenedor HSE
    boxStudentHse.appendChild(titleStudentHse);
    boxStudentHse.appendChild(selectHse);
    boxStudentHse.appendChild(boxNumberStudentHse);
    boxStudentHse.appendChild(boxPercentageStudentHse);
    
    boxNumberStudentHse.appendChild(numberHse);
    boxNumberStudentHse.appendChild(descriptionNumberHse);
    boxPercentageStudentHse.appendChild(percentageHse);
    boxPercentageStudentHse.appendChild(descriptionHse);
    selectHse.appendChild(optionHse);
    selectHse.appendChild(optionHseS1);
    selectHse.appendChild(optionHseS2);
    selectHse.appendChild(optionHseS3);
    selectHse.appendChild(optionHseS4);
    boxStudentHse.appendChild(boxCanvas5);
    boxCanvas5.appendChild(canvasHSE);


    // insertando elementos a contenedor Student Satisfaction
    boxStudentSatisfaction.appendChild(titleStudentSatisfaction);
    boxStudentSatisfaction.appendChild(selectSatisfaction);
    boxStudentSatisfaction.appendChild(boxPercentageStudentSat);
    boxPercentageStudentSat.appendChild(percentSatisfaction);
    boxPercentageStudentSat.appendChild(descriptionSatisfaction);
    selectSatisfaction.appendChild(optionSatisfaction);
    selectSatisfaction.appendChild(optionSatisfactionS1);
    selectSatisfaction.appendChild(optionSatisfactionS2);
    selectSatisfaction.appendChild(optionSatisfactionS3);
    selectSatisfaction.appendChild(optionSatisfactionS4);
    boxStudentSatisfaction.appendChild(boxCanvas6);
    boxCanvas6.appendChild(canvasSatisf);

    // insertando elementos a contenedor Teacher
    boxTeacher.appendChild(titleTeacher);
    boxTeacher.appendChild(selectTeacher);
    boxTeacher.appendChild(boxPercentageTeacher);
    boxPercentageTeacher.appendChild(percentageTeacher);
    boxPercentageTeacher.appendChild(descriptionTeacher);
    selectTeacher.appendChild(optionTeacher);
    selectTeacher.appendChild(optionTeacherS1);
    selectTeacher.appendChild(optionTeacherS2);
    selectTeacher.appendChild(optionTeacherS3);
    selectTeacher.appendChild(optionTeacherS4);
    boxTeacher.appendChild(boxTeach7);
    boxTeach7.appendChild(canvasTeacher);

    // insertando elementos a contenedor Jedi
    boxJedi.appendChild(titleJedi);
    boxJedi.appendChild(selectJedi);
    boxJedi.appendChild(boxPercentageJedi);
    boxPercentageJedi.appendChild(percentageJedi);
    boxPercentageJedi.appendChild(descriptionJedi);
    selectJedi.appendChild(optionJedi);
    selectJedi.appendChild(optionJediS1);
    selectJedi.appendChild(optionJediS2);
    selectJedi.appendChild(optionJediS3);
    selectJedi.appendChild(optionJediS4);
    boxJedi.appendChild(boxJedi8);
    boxJedi8.appendChild(canvasJedi);


    // insertando elementos a contenedores Generales
    boxInfoGeneral.appendChild(boxEnrollment);
    boxInfoGeneral.appendChild(boxAchievement);
    boxInfoGeneral.appendChild(boxNps);
    boxTech.appendChild(boxStudentTech);
    boxHse.appendChild(boxStudentHse);
    boxRating.appendChild(boxStudentSatisfaction);
    boxRating.appendChild(boxTeacher);
    boxRating.appendChild(boxJedi);
    consultSede.appendChild(titleSede);
    consultSede.appendChild(boxInfoGeneral);
    consultSede.appendChild(boxTech);
    consultSede.appendChild(boxHse);
    consultSede.appendChild(boxRating);
    boxResult.appendChild(consultSede);
    
    // estilos 
    boxEnrollment.classList.add('box-info');
    boxAchievement.classList.add('box-info');
    boxNps.classList.add('box-info');
    boxTech.classList.add('box-courses');
    boxHse.classList.add('box-courses');
    boxTeacher.classList.add('box-rating');
    boxJedi.classList.add('box-rating');
    boxStudentSatisfaction.classList.add('box-rating');
    boxStudentTotal.classList.add('inline-block');
    boxDropout.classList.add('dropout');
    boxStudentUp.classList.add('inline-block');
    boxPercentageStudentUp.classList.add('inline-block');
    boxPercentageNps.classList.add('inline-block');
    boxPercentageNpsTypes.classList.add('inline-block');
    boxRating.classList.add('box-float');
    boxNumberStudentHse.classList.add('box-courser-percen');
    boxNumberStudentTech.classList.add('box-courser-percen');

    boxPercentageStudentHse.classList.add('box-courser-percen');
    boxPercentageStudentTech.classList.add('box-courser-percen');
    
    boxPercentageJedi.classList.add('boxrating');
    boxPercentageTeacher.classList.add('boxrating');
    boxPercentageStudentSat.classList.add('boxrating');
    numberStudentTotal.classList.add('style-number');
    percentageDropout.classList.add('style-number');
    numberStudentTotal.classList.add('style-number');
    numberStudentUp.classList.add('style-number');
    numberTech.classList.add('style-number');
    numberHse.classList.add('style-number');
    percentageHse.classList.add('style-number');
    percentageTech.classList.add('style-number');
    
    percentageJedi.classList.add('style-number');
    percentageNps.classList.add('style-number');
    percentageStudentUp.classList.add('style-number');
    percentageTeacher.classList.add('style-number');
    percentSatisfaction.classList.add('style-number');
    descriptionNumber.classList.add('style-description');
    descriptionDropout.classList.add('style-description');
    descriptionHse.classList.add('style-description');
    descriptionTech.classList.add('style-description');
    descriptionNumberHse.classList.add('style-description');
    descriptionNumberTech.classList.add('style-description');
    descriptionPercentageStudent.classList.add('style-description');
    descriptionStudentUp.classList.add('style-description');
    descriptionNps.classList.add('style-description');
    descriptionSatisfaction.classList.add('style-description');
    descriptionJedi.classList.add('style-description');
    descriptionTeacher.classList.add('style-description');
    boxPercentageNpsTypes.classList.add('percentage-nps');
    studentsInfo.classList.add('box-students');
    titleAchievement.classList.add('title');
    titleEnrollment.classList.add('title');
    titleNps.classList.add('title');
    titleStudentSatisfaction.classList.add('title');
    titleTeacher.classList.add('title');
    titleJedi.classList.add('title');
    titleStudentTech.classList.add('title');
    titleStudentHse.classList.add('title');

    // insertando título
    titleSede.textContent = 'Sede : ' + sede + ' - ' + 'Generación : ' + generation;
    titleSede.classList.add('title-principal');

   
    // insertando información en Enrollment
    titleEnrollment.textContent = 'Enrollment';
    boxCanvas.classList.add('box-canvas');
    boxCanvas.setAttribute('id', 'canvas-container');
    canvasEnrollment.setAttribute('id', 'chart');
    canvasEnrollment.classList.add('canvas');
    numberStudentTotal.textContent = totalStudentActive(sede, generation);
    percentageDropout.textContent = (dropout(sede, generation)).toFixed(1) + '%';
    descriptionNumber.textContent = '# Students Currently Enrolled';
    descriptionDropout.textContent = '% Dropout' ; 
    $(document).ready(function() {
      var datos = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              dropout(sede, generation),
              100 - dropout(sede, generation),
            ],
            backgroundColor: [
              '#FF0000',  
              '#58D68D',              
            ]
          }],
          labels: [
            'Dropout',
            'Active',
          ]
        },
        options: {
          reponsive: true,
        }
      };
      var canvas = document.getElementById('chart').getContext('2d');
      window.pie = new Chart(canvas, datos);
    });
    // insertando información en Achievement
    titleAchievement.textContent = 'Achievement';
    boxCanvas2.classList.add('box-canvas');
    boxCanvas2.setAttribute('id', 'canvas-container2');
    canvasArchievement2.setAttribute('id', 'chart2');
    canvasArchievement2.classList.add('canvas');
    numberStudentUp.textContent = studentAchievement(sede, generation);
    descriptionStudentUp.textContent = '# Students that meet the target';
    percentageStudentUp.textContent = ((studentAchievement(sede, generation) / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
    descriptionPercentageStudent.textContent = '% of Total'; 
    var percent = ((studentAchievement(sede, generation) / totalStudentActive(sede, generation)) * 100).toFixed(1);
    if (percent >= 80) {
      percentageStudentUp.classList.add('green');
    } else if (percent < 80 && percent >= 70) {
      percentageStudentUp.classList.add('orange');
    } else if (percent < 70) {
      percentageStudentUp.classList.add('red');
    }


    $(document).ready(function() {
      var datos2 = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              ((studentAchievement(sede, generation) / totalStudentActive(sede, generation)) * 100).toFixed(1),
              100 - ((studentAchievement(sede, generation) / totalStudentActive(sede, generation)) * 100).toFixed(1),
            ],
            backgroundColor: [
              '#58D68D',
              '#FF0000',              
            ]
          }],
          labels: [
            'Goal',
            'Goal no',
          ]
        },
        options: {
          reponsive: true,
        }
      };
      var canvas2 = document.getElementById('chart2').getContext('2d');
      window.pie = new Chart(canvas2, datos2);
    });

    // insertando información en NPS
    titleNps.textContent = 'Net Promoter Score';
    boxCanvas3.classList.add('box-canvas');
    boxCanvas3.setAttribute('id', 'canvas-container3');
    canvasNetPromoterScore3.setAttribute('id', 'chart3');
    canvasNetPromoterScore3.classList.add('canvas');
    percentageNps.textContent = (npsAverage(sede, generation)).toFixed(1) + '%';
    descriptionNps.textContent = '% Acumulative NPS';
    percentageNpsPromoter.textContent = (promoterNps(sede, generation)).toFixed(1) + '%' + ' Promoter';
    percentageNpsPassive.textContent = (passiveNps(sede, generation)).toFixed(1) + '%' + ' Passive';
    percentageNpsDetractors.textContent = (detractorNps(sede, generation)).toFixed(1) + '%' + ' Detractors';
    var percentNPS = (npsAverage(sede, generation)).toFixed(1);
    if (percentNPS >= 80) {
      percentageNps.classList.add('green');
    } else if (percentNPS < 80 && percentNPS >= 70) {
      percentageNps.classList.add('orange');
    } else if (percentNPS < 70) {
      percentageNps.classList.add('red');
    }
    
    $(document).ready(function() {
      var datos3 = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              (promoterNps(sede, generation)).toFixed(1),
              (passiveNps(sede, generation)).toFixed(1),
              (detractorNps(sede, generation)).toFixed(1),
            ],
            backgroundColor: [
              '#58D68D',
              '#F1C40F',
              '#FF0000',            
            ]
          }],
          labels: [
            'Promoter',
            'Passive',
            'Detractors',
          ]
        },
        options: {
          reponsive: true,
        }
      };
      var canvas3 = document.getElementById('chart3').getContext('2d');
      window.pie = new Chart(canvas3, datos3);
    });

    // insertando información en TECH
    titleStudentTech.textContent = 'Tech Skills';
    optionTech.textContent = 'Seleccione Sprint';
    boxCanvas4.setAttribute('id', 'canvas-container4');
    canvasTech.setAttribute('id', 'chart4');
    canvasTech.classList.add('canvas');
    optionTech.textContent = 'Seleccione Sprint';
    optionTechS1.textContent = 'Sprint 1';
    optionTechS2.textContent = 'Sprint 2';
    optionTechS3.textContent = 'Sprint 3';
    optionTechS4.textContent = 'Sprint 4';
    $(document).ready(function() {
      var datos4 = {
        type: 'bar',
        data: {
          datasets: [{
            data: [
              ((studentsTech(sede, generation)[0] / totalStudentActive(sede, generation)) * 100).toFixed(1),
              ((studentsTech(sede, generation)[1] / totalStudentActive(sede, generation)) * 100).toFixed(1),
              ((studentsTech(sede, generation)[2] / totalStudentActive(sede, generation)) * 100).toFixed(1),
              ((studentsTech(sede, generation)[3] / totalStudentActive(sede, generation)) * 100).toFixed(1),
            ],
            backgroundColor: [
              '#E16946 ',
              '#E0AE5E',
              '#A33464 ', 
              '#1B548E ',             
            ]
          }],
          labels: [
            'Sprint1',
            'Sprint2',
            'Sprint3',
            'Sprint4',
          ]
        },
        options: {
          reponsive: true,
        }
      };
      var canvas4 = document.getElementById('chart4').getContext('2d');
      window.pie = new Chart(canvas4, datos4);
    });

    // atributos atributos TECH
    optionTechS1.setAttribute('value', 'sprint1');
    optionTechS2.setAttribute('value', 'sprint2');
    optionTechS3.setAttribute('value', 'sprint3');
    optionTechS4.setAttribute('value', 'sprint4');
    // inicializamos con el último sprint
    var percentTech = ((studentsTech(sede, generation)[2] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
    numberTech.textContent = studentsTech(sede, generation)[2];
    descriptionNumberTech.textContent = '# student That meet the target ';
    percentageTech.textContent = ((studentsTech(sede, generation)[2] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
    descriptionTech.textContent = '% of total';
    
    if (percentTech >= 80) {
      percentageTech.classList.add('green');
    } else if (percentTech < 80 && percentTech >= 70) {
      percentageTech.classList.add('orange');
    } else if (percentTech < 70) {
      percentageTech.classList.add('red');
    }


    selectTech.addEventListener('change', function() {
      if (selectTech.value === 'sprint1') {
        percentageTech.classList.remove('red');
        percentageTech.classList.remove('green');
        percentageTech.classList.remove('orange');
        numberTech.textContent = studentsTech(sede, generation)[0];
        descriptionNumberTech.textContent = '# student That meet the target ';
        percentageTech.textContent = ((studentsTech(sede, generation)[0] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
        descriptionTech.textContent = '% of total';
        percentTech = ((studentsTech(sede, generation)[0] / totalStudentActive(sede, generation)) * 100).toFixed(1);
        if (percentTech >= 80) {
          percentageTech.classList.add('green');
        } else if (percentTech < 80 && percentTech >= 70) {
          percentageTech.classList.add('orange');
        } else if (percentTech < 70) {
          percentageTech.classList.add('red');
        }
      } else if (selectTech.value === 'sprint2') {
        percentageTech.classList.remove('red');
        percentageTech.classList.remove('green');
        percentageTech.classList.remove('orange');
        numberTech.textContent = studentsTech(sede, generation)[1];
        descriptionNumberTech.textContent = '# student That meet the target ';
        percentageTech.textContent = ((studentsTech(sede, generation)[1] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
        descriptionTech.textContent = '% of total';
        percentTech = ((studentsTech(sede, generation)[1] / totalStudentActive(sede, generation)) * 100).toFixed(1);
        if (percentTech >= 80) {
          percentageTech.classList.add('green');
        } else if (percentTech < 80 && percentTech >= 70) {
          percentageTech.classList.add('orange');
        } else if (percentTech < 70) {
          percentageTech.classList.add('red');
        }
      } else if (selectTech.value === 'sprint3') {
        percentageTech.classList.remove('red');
        percentageTech.classList.remove('green');
        percentageTech.classList.remove('orange');
        numberTech.textContent = studentsTech(sede, generation)[2];
        descriptionNumberTech.textContent = '# student That meet the target ';
        percentageTech.textContent = ((studentsTech(sede, generation)[2] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
        descriptionTech.textContent = '% of total';
        percentTech = ((studentsTech(sede, generation)[2] / totalStudentActive(sede, generation)) * 100).toFixed(1);
        if (percentTech >= 80) {
          percentageTech.classList.add('green');
        } else if (percentTech < 80 && percentTech >= 70) {
          percentageTech.classList.add('orange');
        } else if (percentTech < 70) {
          percentageTech.classList.add('red');
        }
      } else if (selectTech.value === 'sprint4') {
        percentageTech.classList.remove('red');
        percentageTech.classList.remove('green');
        percentageTech.classList.remove('orange');
        numberTech.textContent = studentsTech(sede, generation)[3];
        descriptionNumberTech.textContent = '# student That meet the target ';
        percentageTech.textContent = ((studentsTech(sede, generation)[3] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
        descriptionTech.textContent = '% of total';
        percentTech = ((studentsTech(sede, generation)[3] / totalStudentActive(sede, generation)) * 100).toFixed(1);
        if (percentTech >= 80) {
          percentageTech.classList.add('green');
        } else if (percentTech < 80 && percentTech >= 70) {
          percentageTech.classList.add('orange');
        } else if (percentTech < 70) {
          percentageTech.classList.add('red');
        }
      } 
    });


    // insertando información en HSE
    titleStudentHse.textContent = 'Life Skills';
    boxCanvas5.classList.add('box-canvas');
    boxCanvas5.setAttribute('id', 'canvas-container5');
    canvasHSE.setAttribute('id', 'chart5');
    canvasHSE.classList.add('canvas');
    optionHse.textContent = 'Seleccione Sprint';
    optionHseS1.textContent = 'Sprint 1';
    optionHseS2.textContent = 'Sprint 2';
    optionHseS3.textContent = 'Sprint 3';
    optionHseS4.textContent = 'Sprint 4';
    $(document).ready(function() {
      var datos5 = {
        type: 'bar',
        data: {
          datasets: [{
            data: [
              (studentsHse(sede, generation)[0] / totalStudentActive(sede, generation)) * 100,
              (studentsHse(sede, generation)[1] / totalStudentActive(sede, generation)) * 100,
              (studentsHse(sede, generation)[2] / totalStudentActive(sede, generation)) * 100,
              (studentsHse(sede, generation)[3] / totalStudentActive(sede, generation)) * 100,
            ],
            backgroundColor: [
              '#E16946 ',
              '#E0AE5E',
              '#A33464 ', 
              '#1B548E ',          
            ]
          }],
          labels: [
            'Sprint1',
            'Sprint2',
            'Sprint3',
            'Sprint4',
          ]
        },
        options: {
          reponsive: true,
        }
      };
      var canvas5 = document.getElementById('chart5').getContext('2d');
      window.pie = new Chart(canvas5, datos5);
    });

    // atributos atributos HSE
    optionHseS1.setAttribute('value', 'sprint1');
    optionHseS2.setAttribute('value', 'sprint2');
    optionHseS3.setAttribute('value', 'sprint3');
    optionHseS4.setAttribute('value', 'sprint4');
    // inicializamos con el último sprint
    var percentHse = ((studentsHse(sede, generation)[2] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
    numberHse.textContent = studentsHse(sede, generation)[2];
    descriptionNumberHse.textContent = '# student That meet the target ';
    percentageHse.textContent = ((studentsHse(sede, generation)[2] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
    descriptionHse.textContent = '% of total';
    if (percentHse >= 80) {
      percentageHse.classList.add('green');
    } else if (percentHse < 80 && percentHse >= 70) {
      percentageHse.classList.add('orange');
    } else if (percentHse < 70) {
      percentageHse.classList.add('red');
    }

    selectHse.addEventListener('change', function() {
      if (selectHse.value === 'sprint1') {
        numberHse.textContent = studentsHse(sede, generation)[0];
        descriptionNumberHse.textContent = '# student That meet the target ';
        percentageHse.textContent = ((studentsHse(sede, generation)[0] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
        descriptionHse.textContent = '% of total';
        percentHse = ((studentsHse(sede, generation)[0] / totalStudentActive(sede, generation)) * 100).toFixed(1);
        if (percentHse >= 80) {
          percentageHse.classList.add('green');
        } else if (percentHse < 80 && percentHse >= 70) {
          percentageHse.classList.add('orange');
        } else if (percentHse < 70) {
          percentageHse.classList.add('red');
        }
      } else if (selectHse.value === 'sprint2') {
        numberHse.textContent = studentsHse(sede, generation)[1];
        descriptionNumberHse.textContent = '# student That meet the target ';
        percentageHse.textContent = ((studentsHse(sede, generation)[1] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
        descriptionHse.textContent = '% of total';
        percentHse = ((studentsHse(sede, generation)[1] / totalStudentActive(sede, generation)) * 100).toFixed(1);
        if (percentHse >= 80) {
          percentageHse.classList.add('green');
        } else if (percentHse < 80 && percentHse >= 70) {
          percentageHse.classList.add('orange');
        } else if (percentHse < 70) {
          percentageHse.classList.add('red');
        }
      } else if (selectHse.value === 'sprint3') {
        numberHse.textContent = studentsHse(sede, generation)[2];
        descriptionNumberHse.textContent = '# student That meet the target ';
        percentageHse.textContent = ((studentsHse(sede, generation)[2] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
        descriptionHse.textContent = '% of total';
        percentHse = ((studentsHse(sede, generation)[2] / totalStudentActive(sede, generation)) * 100).toFixed(1);
        if (percentHse >= 80) {
          percentageHse.classList.add('green');
        } else if (percentHse < 80 && percentHse >= 70) {
          percentageHse.classList.add('orange');
        } else if (percentHse < 70) {
          percentageHse.classList.add('red');
        }
      } else if (selectHse.value === 'sprint4') {
        numberHse.textContent = studentsHse(sede, generation)[3];
        descriptionNumberHse.textContent = '# student That meet the target ';
        percentageHse.textContent = ((studentsHse(sede, generation)[3] / totalStudentActive(sede, generation)) * 100).toFixed(1) ;
        descriptionHse.textContent = '% of total';
        percentHse = ((studentsHse(sede, generation)[3] / totalStudentActive(sede, generation)) * 100).toFixed(1);
        if (percentHse >= 80) {
          percentageHse.classList.add('green');
        } else if (percentHse < 80 && percentHse >= 70) {
          percentageHse.classList.add('orange');
        } else if (percentHse < 70) {
          percentageHse.classList.add('red');
        }
      }
    });

    // insertando información en Student Satisfactioon
    titleStudentSatisfaction.textContent = 'Student Satisfaction';
    boxCanvas6.classList.add('box-canvas');
    boxCanvas6.setAttribute('id', 'canvas-container6');
    canvasSatisf.setAttribute('id', 'chart6');
    canvasSatisf.classList.add('canvas');
    optionSatisfaction.textContent = 'Seleccione Sprint';
    optionSatisfactionS1.textContent = 'Sprint 1';
    optionSatisfactionS2.textContent = 'Sprint 2';
    optionSatisfactionS3.textContent = 'Sprint 3';
    optionSatisfactionS4.textContent = 'Sprint 4';
    $(document).ready(function() {
      var datos6 = {
        type: 'line',
        data: {
          datasets: [{
            data: [
              studentSatisfaction(sede, generation)[0],
              studentSatisfaction(sede, generation)[1],
              studentSatisfaction(sede, generation)[2],
              studentSatisfaction(sede, generation)[3],
            ],
            backgroundColor: [
              '#f7464A ',
              '#46BFBD ',
              '#F8BFAD ', 
              '#46DOAE ',             
            ]
          }],
          labels: [
            'Sprint1',
            'Sprint2',
            'Sprint3',
            'Sprint4',
          ]
        },
        options: {
          reponsive: true,
        }
      };
      var canvas6 = document.getElementById('chart6').getContext('2d');
      window.pie = new Chart(canvas6, datos6);
    });


    // atributos Student Satisafaction
    optionSatisfactionS1.setAttribute('value', 'sprint1');
    optionSatisfactionS2.setAttribute('value', 'sprint2');
    optionSatisfactionS3.setAttribute('value', 'sprint3');
    optionSatisfactionS4.setAttribute('value', 'sprint4');

    // inicializamos con el último Sprint
    percentSatisfaction.textContent = studentSatisfaction(sede, generation)[2];
    descriptionSatisfaction.textContent = '% Meeting or exceeding ';

    selectSatisfaction.addEventListener('change', function() {
      if (selectSatisfaction.value === 'sprint1') {
        percentSatisfaction.textContent = studentSatisfaction(sede, generation)[0];
        descriptionSatisfaction.textContent = '% Meeting or exceeding ';
      }
      if (selectSatisfaction.value === 'sprint2') {
        percentSatisfaction.textContent = studentSatisfaction(sede, generation)[1];
        descriptionSatisfaction.textContent = '% Meeting or exceeding ';
      }
      if (selectSatisfaction.value === 'sprint3') {
        percentSatisfaction.textContent = studentSatisfaction(sede, generation)[2];
        descriptionSatisfaction.textContent = '% Meeting or exceeding ';
      }
      if (selectSatisfaction.value === 'sprint4') {
        percentSatisfaction.textContent = studentSatisfaction(sede, generation)[3];
        descriptionSatisfaction.textContent = '% Meeting or exceeding ';
      }
    });
    
    // insertando información en Teacher
    titleTeacher.textContent = 'Teacher Rating';
    boxTeach7.classList.add('box-canvas');
    boxTeach7.setAttribute('id', 'canvas-container7');
    canvasTeacher.setAttribute('id', 'chart7');
    canvasTeacher.classList.add('canvas');
    optionTeacher.textContent = 'Seleccione Sprint';
    optionTeacherS1.textContent = 'Sprint 1';
    optionTeacherS2.textContent = 'Sprint 2';
    optionTeacherS3.textContent = 'Sprint 3';
    optionTeacherS4.textContent = 'Sprint 4';
    $(document).ready(function() {
      var datos7 = {
        type: 'line',
        data: {
          datasets: [{
            data: [
              teacherRating(sede, generation)[0],
              teacherRating(sede, generation)[1],
              teacherRating(sede, generation)[2],
              teacherRating(sede, generation)[3],
            ],
            backgroundColor: [
              '#f7464A ',
              '#46BFBD ',              
            ]
          }],
          labels: [
            'Sprint1',
            'Sprint2',
            'Sprint3',
            'Sprint4',
          ]
        },
        options: {
          reponsive: true,
        }
      };
      var canvas7 = document.getElementById('chart7').getContext('2d');
      window.pie = new Chart(canvas7, datos7);
    });
    
    // atributos teacher
    optionTeacherS1.setAttribute('value', 'sprint1');
    optionTeacherS2.setAttribute('value', 'sprint2');
    optionTeacherS3.setAttribute('value', 'sprint3');
    optionTeacherS4.setAttribute('value', 'sprint4');

    // inicializamos con el último sprint
    percentageTeacher.textContent = teacherRating(sede, generation)[2];
    descriptionTeacher.textContent = 'Overall Teacher Rating (Cumulative)';

    selectTeacher.addEventListener('change', function() {
      if (selectTeacher.value === 'sprint1') {
        percentageTeacher.textContent = teacherRating(sede, generation)[0];
        descriptionTeacher.textContent = 'Overall Teacher Rating (Cumulative)';
      }
      if (selectTeacher.value === 'sprint2') {
        percentageTeacher.textContent = teacherRating(sede, generation)[1];
        descriptionTeacher.textContent = 'Overall Teacher Rating (Cumulative)';
      }
      if (selectTeacher.value === 'sprint3') {
        percentageTeacher.textContent = teacherRating(sede, generation)[2];
        descriptionTeacher.textContent = 'Overall Teacher Rating (Cumulative)';
      }
      if (selectTeacher.value === 'sprint4') {
        percentageTeacher.textContent = teacherRating(sede, generation)[3];
        descriptionTeacher.textContent = 'Overall Teacher Rating (Cumulative)';
      }
    });

    // insertando información en Jedi
    titleJedi.textContent = 'Jedi Master Rating';
    boxJedi8.classList.add('box-canvas');
    boxJedi8.setAttribute('id', 'canvas-container8');
    canvasJedi.setAttribute('id', 'chart8');
    canvasJedi.classList.add('canvas');
    optionJedi.textContent = 'Seleccione Sprint';
    optionJediS1.textContent = 'Sprint 1';
    optionJediS2.textContent = 'Sprint 2';
    optionJediS3.textContent = 'Sprint 3';
    optionJediS4.textContent = 'Sprint 4';
    $(document).ready(function() {
      var datos8 = {
        type: 'line',
        data: {
          datasets: [{
            data: [
              jediRating(sede, generation)[0],
              jediRating(sede, generation)[1],
              jediRating(sede, generation)[2],
              jediRating(sede, generation)[3],
            ],
            backgroundColor: [
              '#f7464A ',
              '#46BFBD ',  
              '#GF35F4 ',
              '#3DG4TD ',               
            ]
          }],
          labels: [
            'Sprint1',
            'Sprint2',
            'Sprint3',
            'Sprint4',
          ]
        },
        options: {
          reponsive: true,
        }
      };
      var canvas8 = document.getElementById('chart8').getContext('2d');
      window.pie = new Chart(canvas8, datos8);
    });
    
    // atributos Jedi
    optionJediS1.setAttribute('value', 'sprint1');
    optionJediS2.setAttribute('value', 'sprint2');
    optionJediS3.setAttribute('value', 'sprint3');
    optionJediS4.setAttribute('value', 'sprint4');

    // inicializamos con el útlimo sprint
    percentageJedi.textContent = jediRating(sede, generation)[2];
    descriptionJedi.textContent = 'Overall Jedi Rating (Cumulative)';

    selectJedi.addEventListener('change', function() {
      if (selectJedi.value === 'sprint1') {
        percentageJedi.textContent = jediRating(sede, generation)[0];
        descriptionJedi.textContent = 'Overall Jedi Rating (Cumulative)';
      }
      if (selectJedi.value === 'sprint2') {
        percentageJedi.textContent = jediRating(sede, generation)[1];
        descriptionJedi.textContent = 'Overall Jedi Rating (Cumulative)';
      }
      if (selectJedi.value === 'sprint3') {
        percentageJedi.textContent = jediRating(sede, generation)[2];
        descriptionJedi.textContent = 'Overall Jedi Rating (Cumulative)';
      }
      if (selectJedi.value === 'sprint4') {
        percentageJedi.textContent = jediRating(sede, generation)[3];
        descriptionJedi.textContent = 'Overall Jedi Rating (Cumulative)';
      }
    });
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
    var dataRating = dataGeneration.ratings;
    var arraySatisfaction = [];
    for (i = 0;i < dataRating.length;i++) {
      var datacumple = dataGeneration.ratings[i].student.cumple;
      var dataSupera = dataGeneration.ratings[i].student.supera;
      var totalSatisfaction = datacumple + dataSupera;
      arraySatisfaction.push(totalSatisfaction);
    }

    return arraySatisfaction;
  }

  function teacherRating(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var dataRating = dataGeneration.ratings;
    var arrayTeacher = [];
    for (i = 0; i < dataRating.length;i++) {
      var teacher = dataGeneration.ratings[i].teacher; 
      arrayTeacher.push(teacher);
    }
    return arrayTeacher;
  }

  function jediRating(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var dataRating = dataGeneration.ratings;
    var arrayJedi = [];
    for (i = 0; i < dataRating.length;i++) {
      var jedi = dataGeneration.ratings[i].jedi; 
      arrayJedi.push(jedi);
    }
    return arrayJedi;
  }

  function studentsTech(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var dataStudents = dataGeneration.students;
    var countTech1 = 0;
    var countTech2 = 0;
    var countTech3 = 0;
    var countTech4 = 0;

    for (i = 0;i < dataStudents.length;i++) {
      var numSprint = dataStudents[i].sprints.length;
      if (dataStudents[i].active === true) {
        for (k = 0 ; k < numSprint ;k++) {
          if (dataStudents[i].sprints[k].number === 1) {
            var ptsTech1 = dataStudents[i].sprints[k].score.tech;
            if (ptsTech1 >= 1260) {
              countTech1++;
            }
          } else if (dataStudents[i].sprints[k].number === 2) {
            var ptsTech2 = dataStudents[i].sprints[k].score.tech;
            if (ptsTech2 >= 1260) {
              countTech2++;
            }
          } else if (dataStudents[i].sprints[k].number === 3) {
            var ptsTech3 = dataStudents[i].sprints[k].score.tech;
            if (ptsTech3 >= 1260) {
              countTech3++;
            }
          } else if (dataStudents[i].sprints[k].number === 4) {
            var ptsTech4 = dataStudents[i].sprints[k].score.tech;
            if (ptsTech4 >= 1260) {
              countTech4++;
            }
          }
        }
      }
    }
    var arrayTechTotal = [];
    arrayTechTotal.push(countTech1, countTech2, countTech3, countTech4);
    return arrayTechTotal;
  }

  function studentsHse(sede, generation) {
    var dataSede = data[sede];
    var dataGeneration = dataSede[generation];
    var dataStudents = dataGeneration.students;
    var countHse1 = 0;
    var countHse2 = 0;
    var countHse3 = 0;
    var countHse4 = 0;

    for (i = 0;i < dataStudents.length;i++) {
      var numSprint = dataStudents[i].sprints.length;
      if (dataStudents[i].active === true) {
        for (k = 0 ; k < numSprint ;k++) {
          if (dataStudents[i].sprints[k].number === 1) {
            var ptsHse1 = dataStudents[i].sprints[k].score.hse;
            if (ptsHse1 >= 840) {
              countHse1++;
            }
          } else if (dataStudents[i].sprints[k].number === 2) {
            var ptsHse2 = dataStudents[i].sprints[k].score.hse;
            if (ptsHse2 >= 840) {
              countHse2++;
            }
          } else if (dataStudents[i].sprints[k].number === 3) {
            var ptsHse3 = dataStudents[i].sprints[k].score.hse;
            if (ptsHse3 >= 840) {
              countHse3++;
            }
          } else if (dataStudents[i].sprints[k].number === 4) {
            var ptsHse4 = dataStudents[i].sprints[k].score.hse;
            if (ptsHse4 >= 840) {
              countHse4++;
            }
          }
        }
      }
    }
    var arrayHseTotal = [];
    arrayHseTotal.push(countHse1, countHse2, countHse3, countHse4);
    return arrayHseTotal;
  }

  function clear() {
    boxResult.textContent = '';
  }

  // agregar info Students

    
  // ejecución de función
});
