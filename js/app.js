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
    console.log(optionSprint.options);
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
      
      console.log(str['ratings'].length);
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
        
        
        var options = {'title': 'Achievement actual'};        
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
                  
                  
                  var options = {'title': 'NPS actual'};        
                  var chart = new google.visualization.LineChart(document.getElementById('nps-chart'));
                  chart.draw(data, options);
                }
      // Llenando datos del ENROLLMENT
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
      console.log(data['LIM']['2016-2']['students']);
      console.log(countEnrolled);
      console.log(countDropped);

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
 console.log(data['LIM']['2016-2']['ratings'][0]); // sprint 1 
  console.log(data['LIM']['2016-2']['ratings'][1]); // sprint 2 
  
console.log(data['LIM']['2016-2']['students']);
console.log(data['LIM']['2016-2']['students'][0])
console.log(data['LIM']['2016-2']['students'][0]['name']);
console.log(data['LIM']['2016-2']['students'][0]['sprints']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['number']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']['tech']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']['hse']);
 
  /*
  console.log(data['AQP']);
  console.log(data['AQP']['2016-2'])
  console.log(data['AQP']['2016-2']['ratings'])
  console.log(data['AQP']['2016-2']['ratings'][0]) //sprint
  console.log(data['AQP']['2016-2']['ratings'][0]['jedi']) //puntaje dl jedi
  console.log(data['AQP']['2016-2']['ratings'][0]['nps']) //nps
  console.log(data['AQP']['2016-2']['ratings'][0]['nps']['promoters'])
  console.log(data);*/
});
// // Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
