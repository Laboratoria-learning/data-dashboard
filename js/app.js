/*
 * Funcionalidad de tu producto
 */
// Declarando variables
optionSprint = document.getElementById('sprint');
optionSpecialization = document.getElementById('specialization');
divNps = document.getElementById('kpi-nps');
divPromoters = document.getElementById('promoters');
divPassive = document.getElementById('passive');
divDetractors = document.getElementById('detractors');
divAchievement = document.getElementById('kpi-achievement');
divPercentAchievement = document.getElementById('percent-achievement');
divStudentsAchievement = document.getElementById('students-achievement');
divKpiEnrollment = document.getElementById('kpi-enrollment');
divKpiDropout = document.getElementById('kpi-dropout');
divIstStudent = document.getElementById('ist-student');
divAverageTeacher = document.getElementById('average-teacher');
divAverageJedi = document.getElementById('average-jedi');
divTechSkillQuantity = document.getElementById('tech-skill-quantity');
divTechSkillPercent = document.getElementById('tech-skill-percent');
divLifeSkillQuantity = document.getElementById('life-skill-quantity');
divLifeSkillPercent = document.getElementById('life-skill-percent');

// Puedes hacer uso de la base de datos a través de la variable `data`


window.addEventListener('load', function(event) {
  // Ocultando especializacion de las estudiantes
  optionSpecialization.classList.add('hidden');
  
  var showHide = function(e) {
    var tabSelector = e.target.dataset.tabSelector;
    var overviews = document.getElementById('options');
    var students = document.getElementById('students');
    var teachers = document.getElementById('teachers');

    if (tabSelector === 'tabOverviews') {
      // ocultar students y teacher
      students.style.display = 'none';
      teachers.style.display = 'none';
      // mostrar overviews
      options.style.display = 'block';
    } else if (tabSelector === 'tabStudents') {
      // ocultar overviews y teacher
      options.style.display = 'none';
      teachers.style.display = 'none';
      // mostrar students
      students.style.display = 'block';
    } else if (tabSelector === 'tabTeachers') {
      // mostrar overviews y students
      students.style.display = 'none';
      options.style.display = 'none';
      // mostrar students
      teachers.style.display = 'block';
    }
  };

  var loadTabs = function() {
    var elementsTabs = document.getElementsByClassName('tab');
    for (var i = 0; i < elementsTabs.length; i++) {
      elementsTabs[i].addEventListener('click', showHide);
    }
  };

  loadTabs();

  // funcionalidades del menu desplegable de las sedes de laboratoria
  var city = Object.keys(data);
  for (var i = 0; i < city.length; i++) {
    newUl = document.createElement('ul');
    newUl.innerHTML = city[i];
    newUl.id = city[i];

    document.getElementById('menuBar').appendChild(newUl);
    var generationx = Object.keys(data[city[i]]);
    for (var j = 0; j < generationx.length; j++) {
      newli = document.createElement('li');
      newli.id = city[i] + ',' + generationx[j];
      newli.setAttribute('class', 'bootcamps');
      newli.innerHTML = generationx[j];
      newUl.appendChild(newli);
    }
  }

  var bootcamps = document.getElementsByClassName('bootcamps');
  for (var x = 0; x < bootcamps.length; x++) {
    bootcamps[x].addEventListener('click', showMenu);
  }

  function showMenu(event) {
    // Eliminar todos los elementos del select - sprint
    optionSprint.innerHTML = '';

    var str = event.target.id.split(',');
    str = data[str[0]][str[1]];
    
    // Cargando las opciones de sprint segun generation 
    for (i = 0; i < str['ratings'].length; i++) {
      var option = document.createElement('option');
      option.text = 'Sprint ' + str['ratings'][i]['sprint'];
      option.value = str['ratings'][i]['sprint'] - 1;
      option.id = str['ratings'][i]['sprint'] - 1;
      optionSprint.add(option);
    }

    
    // Evento para elegir el Sprint
    optionSprint.addEventListener('change', function(event) {
      // Mostramos especializaciones en el caso que el sprnt sea mayor o igual a 5
      if (optionSprint.value >= 5) {
        optionSpecialization.classList.add('show');
        optionSpecialization.classList.remove('hidden');
      } else {
        optionSpecialization.classList.add('hidden');
        optionSpecialization.classList.remove('show');
      }

      // Llenando datos del ACHIEVEMENT
      divAchievement.innerHTML = str['ratings'][event.target.value]['student']['cumple'] + str['ratings'][event.target.value]['student']['supera'];
      var totalStudentsAchievement = str['ratings'][event.target.value]['student']['cumple'] + str['ratings'][event.target.value]['student']['no-cumple'] + str['ratings'][event.target.value]['student']['supera'];
      divStudentsAchievement.innerHTML = '% OF TOTAL (' + totalStudentsAchievement + ')';
  
      divPercentAchievement.innerHTML = parseFloat((str['ratings'][event.target.value]['student']['cumple'] + str['ratings'][event.target.value]['student']['supera']) * 100 / totalStudentsAchievement).toFixed(0) + ' %';
      
   
      // Realizamos el gráfico de ACHIEVEMENT      
      google.charts.load('current', {'packages': ['corechart']});

      google.charts.setOnLoadCallback(drawChartEnrollment);

    
      function drawChartEnrollment() {
        // create the data table
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'S');
        data.addColumn('number', 'Q');
        for (i = 0;i < str['ratings'].length;i++) {
          data.addRows([
            ['S' + str['ratings'][i]['sprint'], str['ratings'][i]['student']['cumple'] + str['ratings'][i]['student']['supera']],
       
       
          ]);
        }
        
        
        var options = {'title': 'Current Achievement'};        
        var chart = new google.visualization.LineChart(document.getElementById('achievement-chart'));
        chart.draw(data, options);
      }
      
      // Llenando datos del NPS
      var promoters = str['ratings'][event.target.value]['nps']['promoters'];
      var passive = str['ratings'][event.target.value]['nps']['passive'];
      var detractors = str['ratings'][event.target.value]['nps']['detractors'];
      var nps = promoters - detractors;
      divNps.innerHTML = nps + '%';
      divPromoters.innerHTML = promoters + '% Promoters ';
      divPassive.innerHTML = passive + '% Passive';
      divDetractors.innerHTML = detractors + '% Detractores';

      // Insertamos la satisfacción de los estudiantes
      totPromoters = 0;
      for (i = 0;i < str['ratings'].length;i++) {
        totPromoters = totPromoters + str['ratings'][i]['nps']['promoters'];
      }
      divIstStudent.innerHTML = parseFloat(totPromoters / str['ratings'].length).toFixed(0);

      // Realizamos el gráfico de NPS      
      google.charts.load('current', {'packages': ['corechart']});
          
      google.charts.setOnLoadCallback(drawChartNPS);
          
              
      function drawChartNPS() {
        // create the data table
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'S');
        data.addColumn('number', 'NPS');
        for (i = 0;i < str['ratings'].length;i++) {
          data.addRows([
            ['S' + str['ratings'][i]['sprint'], str['ratings'][i]['nps']['promoters'] - str['ratings'][i]['nps']['detractors']],
                 
                 
          ]);
        }
                  
                  
        var options = {'title': 'Current NPS'};        
        var chart = new google.visualization.LineChart(document.getElementById('nps-chart'));
        chart.draw(data, options);
      }

      // Realizamos el gráfico de la satisfacción de los estudiantes     
      google.charts.load('current', {'packages': ['corechart']});
      
      google.charts.setOnLoadCallback(drawChartIstStudents);
      
          
      function drawChartIstStudents() {
        // create the data table
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'S');
        data.addColumn('number', 'IST');
        for (i = 0;i < str['ratings'].length;i++) {
          data.addRows([
            ['S' + str['ratings'][i]['sprint'], str['ratings'][i]['nps']['promoters']],
             
             
          ]);
        }
              
              
        var options = {'title': 'Current student satisfaction'};        
        var chart = new google.visualization.LineChart(document.getElementById('ist-chart'));
        chart.draw(data, options);
      }
      // Calculamos el teacher rating
      totTeacherRating = 0;
      for (i = 0;i < str['ratings'].length;i++) {
        totTeacherRating = totTeacherRating + str['ratings'][i]['teacher'];
      }
      divAverageTeacher.innerHTML = parseFloat(totTeacherRating / str['ratings'].length).toFixed(1);

      // Realizamos el gráfico del promedio de los teachers     
      google.charts.load('current', {'packages': ['corechart']});
   
      google.charts.setOnLoadCallback(drawChartAverageTeacher);
   
       
      function drawChartAverageTeacher() {
        // create the data table
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'S');
        data.addColumn('number', 'Average');
        for (i = 0;i < str['ratings'].length;i++) {
          data.addRows([
            ['S' + str['ratings'][i]['sprint'], str['ratings'][i]['teacher']],
          
          
          ]);
        }
           
           
        var options = {'title': 'Current rating teacher'};        
        var chart = new google.visualization.LineChart(document.getElementById('acum-average-teacher'));
        chart.draw(data, options);
      }
      // Calculamos el jedi master rating
      totJediRating = 0;
      for (i = 0;i < str['ratings'].length;i++) {
        totJediRating = totJediRating + str['ratings'][i]['jedi'];
      }
      divAverageJedi.innerHTML = parseFloat(totJediRating / str['ratings'].length).toFixed(1);

      // Realizamos el gráfico del promedio de los jedis    
      google.charts.load('current', {'packages': ['corechart']});

      google.charts.setOnLoadCallback(drawChartAverageJedi);

    
      function drawChartAverageJedi() {
        // create the data table
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'S');
        data.addColumn('number', 'Average');
        for (i = 0;i < str['ratings'].length;i++) {
          data.addRows([
            ['S' + str['ratings'][i]['sprint'], str['ratings'][i]['jedi']],
       
       
          ]);
        }
        
        
        var options = {'title': 'Current rating jedi'};        
        var chart = new google.visualization.LineChart(document.getElementById('acum-average-jedi'));
        chart.draw(data, options);
      }
      // Calculamos los tech skills por sprint 
      var totTechSkill = 0;
      var totSprints = 0;
      for (i = 0;i < str['students'].length;i++) {
        for (j = 0;j < str['students'][i]['sprints'].length;j++) {
          totSprints = totSprints + str['students'][i]['sprints'].length;
             
          // Obteniendo los que han superado la meta tech
          if (parseInt(str['students'][i]['sprints'][j]['score']['tech']) >= 1260) {
            totTechSkill = totTechSkill + 1;
          }
        }
      }

      divTechSkillQuantity.innerHTML = totTechSkill;
      divTechSkillPercent.innerHTML = parseFloat(totTechSkill / totSprints * 100).toFixed(0);

      // Realizamos el gráfico de la cantidad de alumnos que superaron x sprint   
      google.charts.load('current', {'packages': ['corechart']});
          
      google.charts.setOnLoadCallback(drawCharTechSkill);
          
              
      function drawCharTechSkill() {
        // create the data table
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'S');
        data.addColumn('number', 'Average Tech Skill');
                 
        for (i = 0;i < str['students'].length;i++) {
          for (j = 0;j < str['students'][i]['sprints'].length;j++) {
            totSprints = totSprints + str['students'][i]['sprints'].length;
                       
            // Obteniendo los que han superado la meta tech
            console.log('SPRINT' + parseInt(str['students'][i]['sprints'][j]['number'] - 1));
            if (parseInt(str['students'][i]['sprints'][j]['score']['tech']) >= 1260 && parseInt(str['students'][i]['sprints'][j]['number'] - 1) === optionSprint.value) {
              data.addRows([
                ['S' + str['students'][i]['sprint'], str['students'][i]['sprints'][j]['score']['tech']],
                     
                     
              ]);
            }
          }
        }
                  
                  
        var options = {'title': 'Current average tech skill'};        
        var chart = new google.visualization.LineChart(document.getElementById('tech-chart'));
        chart.draw(data, options);
      }

   // Calculamos los life skills por sprint 
   var totLifeSkill = 0;
   var totSprints = 0;
   for (i = 0;i < str['students'].length;i++) {
     for (j = 0;j < str['students'][i]['sprints'].length;j++) {
       totSprints = totSprints + str['students'][i]['sprints'].length;
          
       // Obteniendo los que han superado la meta tech
       if (parseInt(str['students'][i]['sprints'][j]['score']['hse']) >= 840) {
        totLifeSkill = totLifeSkill + 1;
       }
     }
   }

   divLifeSkillQuantity.innerHTML = totLifeSkill;
   divLifeSkillPercent.innerHTML = parseFloat(totLifeSkill / totSprints * 100).toFixed(0);

   // Realizamos el gráfico de la cantidad de alumnos que superaron x sprint   
   google.charts.load('current', {'packages': ['corechart']});
       
   google.charts.setOnLoadCallback(drawCharLifeSkill);
       
           
   function drawCharLifeSkill() {
     // create the data table
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'S');
     data.addColumn('number', 'Average HSE Skill');
              
     for (i = 0;i < str['students'].length;i++) {
       for (j = 0;j < str['students'][i]['sprints'].length;j++) {
         totSprints = totSprints + str['students'][i]['sprints'].length;
                    
         // Obteniendo los que han superado la meta hse
         
         if (parseInt(str['students'][i]['sprints'][j]['score']['hse']) >= 840 && parseInt(str['students'][i]['sprints'][j]['number'] - 1) === optionSprint.value) {
           data.addRows([
             ['S' + str['students'][i]['sprint'], str['students'][i]['sprints'][j]['score']['hse']],
                  
                  
           ]);
         }
       }
     }
               
               
     var options = {'title': 'Current average life skill'};        
     var chart = new google.visualization.LineChart(document.getElementById('life-chart'));
     chart.draw(data, options);
   }




      // Calculamos datos del ENROLLMENT
      var countEnrolled = 0;
      var countDropped = 0;

      // Calculamos a los estudiantes activos y desertores
      for (i = 0;i < str['students'].length;i++) {
        if (str['students'][i]['active'] === true) {
          countEnrolled = countEnrolled + 1;
        } else {
          countDropped = countDropped + 1;
        }
      }
      divKpiEnrollment.innerHTML = countEnrolled;
      divKpiDropout.innerHTML = parseFloat(countDropped / (countEnrolled + countDropped) * 100).toFixed(0) + ' %';
      

      // Realizamos el gráfico de deserción - enrollment
      google.charts.load('current', {'packages': ['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Active', 'Quantity'],
          ['Enrolled', countEnrolled],
          ['Dropout', countDropped],
         
        ]);

        var options = {
          title: 'Enrollment actual'
        };

        var chart = new google.visualization.PieChart(document.getElementById('enrollment-chart'));

        chart.draw(data, options);
      }
    });
  }

 
/*
 Aca el load*/
});

