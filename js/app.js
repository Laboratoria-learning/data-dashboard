console.log(data);
var dataNameSedes = Object.keys(data);
var valuesofData = Object.values(data);
window.addEventListener('load', function() {
  var selectSede = document.getElementById('sedes');
  // -------------------------------------------------------------------------------------------------------------------------------------
  // Para Jalr data automaticamente
  for (var i = 0; i < dataNameSedes.length; i++) {
    // Creamos una variable sedes que va almacenar la grupo de la sede
    var optgroupsedes = document.createElement('optgroup');
    // le asignamos el valor del labol del grupo, de acuerdo al nombre extraido de data.js de cada sede
    optgroupsedes.label = dataNameSedes[i];
    optgroupsedes.id = 'optgroupsede' + i;
    // le asignamos cada sede a la lista de sedes
    selectSede.appendChild(optgroupsedes);
    // guardamos las promociones por sede
    var promsforSede = Object.keys(valuesofData[i]);
    // guardamos los valores de los promociones
    var valuesofPromsforSede = Object.values(valuesofData[i]);
    var arrayNumberStudentsActiveforSede = [];
    // Recorremos las promociones
    for (var j = 0; j < valuesofPromsforSede.length; j++) {
    // Creamos un elemento para mostrar las promociones
      var optionproms = document.createElement('option');
      // le asignamos el valor a mostrar
      optionproms.id = 'optionproms' + i + '' + j ;
      optionproms.label = promsforSede[j];
      optionproms.value = dataNameSedes[i] + '_' + promsforSede[j];
      // le asignamos donde lo va a mostrar
      optgroupsedes.appendChild(optionproms);
    }
  }

  selectSede.addEventListener('change', function(event) {
    var selectedValue = this.value;
    var nameSede = selectedValue.split('_')[0];
    // var nameProm = selectedValue.split('_')[1];
    document.getElementById('nameshow').innerText = nameSede;
  });
});

// -------------------------------------------------------------------------------------------------------------------------------------
// Eventos para tab
var studentsPage = document.getElementById('students');
studentsPage.addEventListener('click', function(event) {
  document.getElementById('content').setAttribute('class', 'disappear');
  document.getElementById('content-two').setAttribute('class', 'appear');
  document.getElementById('white').setAttribute('class', 'disappear');
  document.getElementById('orangeline').setAttribute('class', 'margin-left');
  document.getElementById('students').setAttribute('class', 'cursor-change');
});
studentsPage.addEventListener('mouseover', function(event) {
  document.getElementById('students').setAttribute('class', 'cursor-hand');
});

var overview = document.getElementById('overview');
overview.addEventListener('click', function(event) {
  document.getElementById('content').setAttribute('class', 'appear');
  document.getElementById('content-two').setAttribute('class', 'disappear');
  document.getElementById('white').setAttribute('class', 'disappear');
  document.getElementById('orangeline').setAttribute('class', 'margin-none');
});

overview.addEventListener('mouseover', function(event) {
  document.getElementById('overview').setAttribute('class', 'cursor-hand');
});
// --------------------------------------------------------------------------------------------------------------------------------------
// Eventos para el menú hamburguesa
var menuhamburger = document.getElementById('button');
menuhamburger.addEventListener('click', function(event) {
  document.getElementById('all-content').setAttribute('class', 'disappear');
  document.getElementById('white').setAttribute('class', 'appear');
});
white.addEventListener('click', function(event) {
  document.getElementById('all-content').setAttribute('class', 'appear');
  document.getElementById('white').setAttribute('class', 'disappear');
});

// -------------------------------------------------------------------------------------------------------------------------------------
// Función Mostar Data
function ShowData(nameSede, nameProm) {
  // estudiantes por promoción
  var studentsList = data[nameSede][nameProm].students;
  // número de estudiantes por promoción
  var numberStudentsforProm = data[nameSede][nameProm].students.length;
  // número de estudiantes activas por promoción
  var numberStudentsActiveforProm = parseInt(serchStudentsActive(studentsList));
  // número de estudantes inactivas por promoción
  var numberStudentsInactiveforProm = numberStudentsforProm - numberStudentsActiveforProm;
  // Porcentaje de alumnas activas por promoción
  var percentStudentsActiveforProm = (Math.round((numberStudentsActiveforProm * 100) / numberStudentsforProm)) + '' + '%';
  // Porcentaje de alumnas inactivas por promoción
  var percentStudentsInactiveforProm = (Math.round((numberStudentsInactiveforProm * 100) / numberStudentsforProm)) + '' + '%';
  document.getElementById('enrolled').innerHTML = numberStudentsforProm;
  document.getElementById('dropout').innerHTML = percentStudentsInactiveforProm;
  // drawCurrently(percentStudentsActiveforProm, percentStudentsInactiveforProm);
  // FALTA NÚMERO DE SPRINT!!! 
}

// -------------------------------------------------------------------------------------------------------------------------------------
// para calculateTeacherRating
function calculatePromoter(sede, numSprint, year) {
  var contPromoters = 0;
  var contDetractors = 0;
  var contPassive = 0;
  for (var i = 0;i < numSprint;i++) {
    contPromoters = data[sede][year]['ratings'][i]['nps']['promoters'] + contPromoters;
    contDetractors = data[sede][year]['ratings'][i]['nps']['detractors'] + contDetractors;
    contPassive = data[sede][year]['ratings'][i]['nps']['passive'] + contDetractors;
  }
  document.getElementById('nps').innerHTML = ((contPromoters / numSprint).toFixed(0) - (contDetractors / numSprint).toFixed(0)) + ' % ';
  document.getElementById('promoter').innerHTML = (contPromoters / numSprint).toFixed(0) + ' % Promoters ';
  document.getElementById('passive').innerHTML = (contPassive / numSprint).toFixed(0) + ' % Passive ';
  document.getElementById().innerHTML = (contDetractors / numSprint).toFixed(0) + ' % Detractors';
}

// -------------------------------------------------------------------------------------------------------------------------------------
// para calculateTeacherRating
function calculateTeacherRating(sede, numSprint, year) {
  var sumRating = 0;
  for (var i = 0; i < numSprint;i++) {
    sumRating = data[sede][year]['ratings'][i]['teacher'] + sumRating;
  }
  document.getElementById('scoret').innerHTML = (sumRating / numSprint).toFixed(2);
}

// -------------------------------------------------------------------------------------------------------------------------------------
// para calculateJediMasterRating
function calculateJediMasterRating(sede, numSprint, year) {
  var sumJedi = 0;
  for (var i = 0;i < numSprint;i++) {
    sumJedi = data[sede][year]['ratings'][i]['jedi'] + sumJedi;
  }
  document.getElementById('scorej').innerHTML = (sumJedi / numSprint).toFixed(2);
}

// -------------------------------------------------------------------------------------------------------------------------------------
// para calculateStudentSatisfaccion
function calculateStudentSatisfaccion(sede, numEndSprint, year, totalEstudent) {
  var meet = data[sede][year]['ratings'][numEndSprint]['student']['cumple'];
  var beats = data[sede][year]['ratings'][numEndSprint]['student']['supera'];
  var numStudentCumple = parseInt(((totalEstudent * meet) / 100).toFixed(0));
  var numStudentSupera = parseInt(((totalEstudent * beats) / 100).toFixed(0));
  var total = (((numStudentCumple + numStudentSupera) * 100) / totalEstudent).toFixed(2);
  // console.log(numStudentCumple);
  document.getElementById('satisfaction').innerHTML = total;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// para sumar elementos de un array
function sumElementArray(array) {
  var sumTotal = 0;
  for (var count = 0; count < array.length; count++) {
    sumTotal += array[count];
  }
  return sumTotal;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// Función para buscar estudiantes activas
function serchStudentsActive(studentsList) {
  var result = 0;
  for (var cont = 0; cont < studentsList.length; cont++) {
    if (studentsList[cont].active === true) {
      result++;
    }
  }
  // console.log(result);
  return result;
}

// -------------------------------------------------------------------------------------------------------------------------------------
// para graficar
function drawCurrently(attend, noAttend) {
  var data = google.visualization.arrayToDataTable([
    ['Currently', 'Number Student'],
    ['Asisten', attend],
    ['No Asisten', noAttend],
  ]);
  var options = {
    'width': 300,
    'height': 200};

  var chart = new google.visualization.PieChart(document.getElementById('grafy-enrollment'));
  chart.draw(data, options);
}

function drawPromoter() {
  var data = google.visualization.arrayToDataTable([
    ['Element', 'Density', { role: 'annotation' } ],
    ['Copper', 8.94, 'Cu' ],
    ['Silver', 10.49, 'Ag' ],
    ['Gold', 19.30, 'Au' ],
    ['Goldh', 0, 'Au' ],
  ]);

  var options = {
    'width': 300,
    'height': 200};
  var chart = new google.charts.Bar(document.getElementById('grafy-promoter'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
