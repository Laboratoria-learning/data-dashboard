// /*
//  * Funcionalidad de tu producto
//  */

<<<<<<< HEAD
// // Puedes hacer uso de la base de datos a través de la variable `data`
// window.onload = function() {
// }
// var sede = getElementsByClassName('sede');

// var selectProm= document.getElementsByClassName('promocion')
// var selectSprint= document.getElementsByClassName('sprint')
// console.log(data['AQP']['2017-1']['students'].length);

// var sede1 = data['AQP']['2017-1']['students']['active'];
// var sede2 = data['AQP']['2016-2']['students'];
// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['Generacion','Porcentaje'],
//     ['2017', sede1],
//     ['2016', sede2]]);

//   var options = {
//     title: 'Alumnas'
//   };
//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));

//   chart.draw(data, options);
// }     
// var retiradas = data['AQP']['2017-1']['students'] 
// function begin () {
//   var selectSede= document.getElementsByClassName('sede');
//   var selectProm= document.getElementsByClassName('promocion')
//   var selectSprint= document.getElementsByClassName('sprint')
// }
=======
// Puedes hacer uso de la base de datos a través de la variable `data`
window.addEventListener('load', begin);

function begin() {
  debugger;
  var selectLocal = document.getElementById('local');
  var selectPromo = document.getElementById('promo');
  var selectSprint = document.getElementById('sprint');
  // var currentLocal = selectLocal.value;
  // var currentPromo = selectPromo.value;

  selectLocal.addEventListener('change', fillPromos);
  selectPromo.addEventListener('change', fillSprints);
  document.addEventListener('change', studentsOverview);

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
    debugger;
    // currentLocal = selectLocal.value;
    // currentPromo = selectPromo.value;
    var sprints = data[selectLocal.value][selectPromo.value].ratings.length;
    selectSprint.innerHTML = '';
    for (var i = sprints; 0 < i; i--) {
      var optionSprint = document.createElement('option');
      optionSprint.value = 'Sprint ' + (i);
      optionSprint.textContent = 'Sprint ' + (i);
      selectSprint.appendChild(optionSprint);
    }
  }

  function studentsOverview(event) {
    if (event.target === selectLocal || event.target === selectPromo || event.target === selectSprint) {
      var students = data[selectLocal.value][selectPromo.value].students;
      var sprints = data[selectLocal.value][selectPromo.value].ratings.length;
      var currentStudents = 0;
      var dropoutStudents = 0;
      var overcomeStudents = 0;

      // Meta de puntos Tech 1260
      // Meta de punstos HSE 840

      // Contar actuales y retiradas
      for (var i = 0; i < students.length; i++) {
        if (students[i]['active'] === true) {
          // Acumular estudiantes activas
          currentStudents++;
          // Para tener promedios
          var techSum = 0;
          var hseSum = 0;
          // Sacar promedio de tech y hse
          for (var j = 0; j < sprints; j++) {
            techSum += students[i].sprints[j].score.tech;
            hseSum += students[i].sprints[j].score.hse;
          }
          var techAvrg = Math.floor(techSum / sprints);
          console.log(techAvrg);
          var hseAvrg = Math.floor(hseSum / sprints);
          console.log(hseAvrg);
          if (techAvrg > 1260 && hseAvrg > 840) {
            overcomeStudents++;
          }
        } else {
          dropoutStudents++;
        }
      }

      // Mostrar los datos en documnto
      document.getElementById('current-students').textContent = currentStudents;
      document.getElementById('dropout').textContent = Math.round((dropoutStudents / students.length) * 100) * 10 / 10 + '%';
      document.getElementById('overcome-avrg').textContent = overcomeStudents;
      document.getElementById('overcome-percent').textContent = Math.round((overcomeStudents / currentStudents) * 100) * 10 / 10 + '%';
    }
  }

  // studentsCount('LIM', '2016-2');
  // studentsCount('CDMX', '2017-1');
};
>>>>>>> b0616beaf1c1594ef85219069b9828d5f5f565a5

// Superan expectativas exp Laboratoria
var ratings = data[selectLocal.value][selectPromo.value].ratings;
var overcome = 0;
// Promedio superan la meta de puntos
for (var i = 0; i < ratings.length; i++) {
  overcome += ratings[i].student.supera;
}


// Grafico
var sede1 = data['AQP']['2017-1']['students']['active'];
var sede2 = data['AQP']['2016-2']['students'];
// google.charts.load('current', { 'packages': ['corechart'] });
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//     ['Generacion', 'Porcentaje'],
//     ['2017', sede1],
//     ['2016', sede2]]);

<<<<<<< HEAD
// console.log(data.AQP['2016-2'].students[1].active);


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












=======
//   var options = { title: 'Alumnas' };

//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));

//   chart.draw(data, options);
// }
// fin grafico
>>>>>>> b0616beaf1c1594ef85219069b9828d5f5f565a5
