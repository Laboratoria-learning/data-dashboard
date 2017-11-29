/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
window.addEventListener('load', begin);

function begin() {
  debugger;
  var selectLocal = document.getElementById('local');
  var selectPromo = document.getElementById('promo');
  var selectSprint = document.getElementById('sprint');
  var currentLocal = selectLocal.value;
  var currentPromo = selectPromo.value;

  selectLocal.addEventListener('change', fillPromos);
  selectPromo.addEventListener('change', fillSprints);
  
  // Para llenar el combo de promos
  function fillPromos(event) {
    for (var i = 0; i < Object.keys(data).length; i++) {
      if (event.target.value === Object.keys(data)[i]) {
        selectPromo.innerHTML = '';
        currentLocal = selectLocal.value;
        var promList = Object.keys(data[currentLocal]).reverse();
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

  function fillSprints(event) {
    debugger;
    currentLocal = selectLocal.value;
    currentPromo = selectPromo.value;
    // var promos = Object.keys(data[currentLocal]);  
    // for (var i = 0; i < promos.length; i++) {          
    //   if (event.target.value === promos[i]) {
        var sprints = data[currentLocal][currentPromo].ratings.length;
        selectSprint.innerHTML = '';
        for (var i = sprints; 0 < i; i--) {
          var optionSprint = document.createElement('option');
          optionSprint.value = 'Sprint ' + (i);
          optionSprint.textContent = 'Sprint ' + (i);
          selectSprint.appendChild(optionSprint);
        }
      // }
    // }
  }

  // Para contar actuales y retiradas  :(
  function studentsCount(local, promo) {
    var currentStudents = 0;
    var dropoutStudents = 0;

    for (var i = 0; i < data[currentLocal][promo]['students'].length; i++) {
      if (data[currentLocal][promo]['students'][i]['active'] === true) {
        currentStudents++;
      } else {
        dropoutStudents++;
      }
    }
    return console.log(currentStudents + ' ' + dropoutStudents);
  }

  studentsCount('LIM', '2016-2');
  studentsCount('CDMX', '2017-1');
};

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

//   var options = { title: 'Alumnas' };

//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));

//   chart.draw(data, options);
// }
// fin grafico