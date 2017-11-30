// /*
//  * Funcionalidad de tu producto
//  */
// // Puedes hacer uso de la base de datos a través de la variable `data

// Puedes hacer uso de la base de datos a través de la variable `data`
window.addEventListener('load', begin);

function begin() {
  // debugger;
  var selectLocal = document.getElementById('local');
  var selectPromo = document.getElementById('promo');
  var selectSprint = document.getElementById('sprint');
  // var currentLocal = selectLocal.value;
  // var currentPromo = selectPromo.value;

  selectLocal.addEventListener('change', fillPromos);
  selectPromo.addEventListener('change', fillSprints);
  document.addEventListener('change', infoOverview);
  document.addEventListener('change', infoSprint);

  // Para llenar el combo de promos
  function fillPromos(event) {
    for (var i = 0; i < Object.keys(data).length; i++) {
      if (event.target.value === Object.keys(data)[i]) {
        selectPromo.innerHTML = '';
        var promList = Object.keys(data[selectLocal.value]).reverse();
        console.log(promList);
        for (var j = 0; j < promList.length; j++) {
          var optionPromo = document.createElement('option');
          optionPromo.value = promList[j];
          optionPromo.textContent = promList[j];
          selectPromo.appendChild(optionPromo);
        }
      }
    }
  }

  // Llenar combo de sprints
  function fillSprints(event) {
    // debugger;
    // currentLocal = selectLocal.value;
    // currentPromo = selectPromo.value;
    var sprints = data[selectLocal.value][selectPromo.value].ratings.length;
    selectSprint.innerHTML = '';
    for (var i = sprints; 0 < i; i--) {
      var optionSprint = document.createElement('option');
      optionSprint.value = i;
      optionSprint.textContent = 'Sprint ' + (i);
      selectSprint.appendChild(optionSprint);
    }
  }

  function infoOverview(event) {
    if (event.target === selectLocal || event.target === selectPromo) {
      var students = data[selectLocal.value][selectPromo.value].students;
      var sprints = data[selectLocal.value][selectPromo.value].ratings.length;
      var currentStudents = 0;
      var dropoutStudents = 0;
      var overcomeStudents = 0;
      var techTarget = 0;
      var hseTarget = 0;
      // Meta de puntos Tech 1260    Meta de punstos HSE 840

      // Contar actuales y retiradas
      for (var i = 0; i < students.length; i++) {
        if (students[i]['active'] === true) {
          // Acumular estudiantes activas
          currentStudents++;
          // Para tener promedios
          var techSum = 0;
          var hseSum = 0;
          // Sacar promedio de tech y hse y las que alcanzaron meta de puntos por cada uno
          for (var j = 0; j < sprints; j++) {
            techSum += students[i].sprints[j].score.tech;
            if (students[i].sprints[j].score.tech > 1260) {
              techTarget++;
            }
            hseSum += students[i].sprints[j].score.hse;
            if (students[i].sprints[j].score.hse > 840) {
              hseTarget++;
            }
          }
          var techAvrg = Math.floor(techSum / sprints);
          console.log(techAvrg);
          var hseAvrg = Math.floor(hseSum / sprints);
          console.log(hseAvrg);
          // Alumnas que superan meta de puntos general
          if (techAvrg > 1260 && hseAvrg > 840) {
            overcomeStudents++;
          }
        } else {
          dropoutStudents++;
        }
      }
      var techTargetAvrg = techTarget / sprints;
      console.log(techTargetAvrg);
      var hseTargetAvrg = hseTarget / sprints;
      console.log(hseTargetAvrg);
      // Mostrar los datos en documento
      document.getElementById('current-students').textContent = currentStudents;
      document.getElementById('dropout').textContent = Math.round((dropoutStudents / students.length) * 100) * 10 / 10 + '%';
      document.getElementById('overcome-avrg').textContent = overcomeStudents;
      document.getElementById('overcome-percent').textContent = Math.round((overcomeStudents / currentStudents) * 100) * 10 / 10 + '%';
      document.getElementById('tech-target-avrg').textContent = Math.round(techTargetAvrg);
      document.getElementById('hse-target-avrg').textContent = Math.round(hseTargetAvrg);
    }
  }

  function infoSprint(event) {
    debugger;
    var students = data[selectLocal.value][selectPromo.value].students;
    // Estudiantes que superan el 70% por sprint
    var techTarget = 0;
    var hseTarget = 0;
    for (var i = 0; i < students.length; i++) {
      if (students[i].sprints[selectSprint.value - 1] !== undefined && students[i].sprints[selectSprint.value - 1].score.tech > 1260) {
        techTarget++;
      }
      if (students[i].sprints[selectSprint.value - 1] !== undefined && students[i].sprints[selectSprint.value - 1].score.hse > 840) {
        hseTarget++;
      }
    }
    document.getElementById('tech-target-sprint').textContent = techTarget;
    document.getElementById('hse-target-sprint').textContent = hseTarget;

    var ratings = data[selectLocal.value][selectPromo.value].ratings;
    document.getElementById('teachers-avrg').textContent = ratings[selectSprint.value - 1].teacher;
    document.getElementById('jedi-avrg').textContent = ratings[selectSprint.value - 1].jedi;
    var reachExp = ratings[selectSprint.value - 1].student.cumple + ratings[selectSprint.value - 1].student.supera;
    document.getElementById('satisfaction-percent').textContent = reachExp + '%';
  }

  // Grafico
  var sede1 = data['AQP']['2017-1']['students'].length;
  var sede2 = data['AQP']['2016-2']['students'].length;
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Generacion', 'Porcentaje'],
      ['2017', sede1],
      ['2016', sede2]]);

    var options = { title: 'Alumnas' };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }
};

function openPage(evnt, opt) {
  var i, tabContent, menus;
  tabContent = document.getElementsByClassName('tabContent');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  menus = document.getElementsByClassName('menus');
  for (i = 0; i < menus.length; i++) {
    menus[i].className = menus[i].className.replace('active', '');
  }
  document.getElementById(opt).style.display = 'block';
  evnt.currentTarget.className += 'active';
}
document.getElementById('default').click();