// guarda en un array las sedes
var sede = Object.keys(data); // ["AQP", "CDMX", "LIM", "SCL"]
console.log(sede);
// guarda en un array los objetos de cada sede es decir las generaciones
var generation = Object.values(data); // [{…}, {…}, {…}, {…}] tiene el valor de AQP, CDMX, LIM, SCL
console.log(generation);
// guarda las generaciones en un array
var generationAarequipa = Object.keys(generation[0]); // ["2016-2", "2017-1"]
console.log(generationAarequipa);
// guarda en un array los objetos de las generaciones que guardan students y ratings
var genArequipaObject = Object.values(generation[0]); // [{…}, {…}] tiene el valor 2016-2, 2017-1
console.log(genArequipaObject);


var container = document.getElementById('container');
var container2 = document.getElementById('container2');

window.addEventListener('load', function() {
  var selectSede = document.getElementById('sede');
  var selectGeneration = document.getElementById('generation');
  var chooseSede = ''; // va a indicar cual es la sede para tomarlas en cuenta con el siguiente filtro

  selectSede.addEventListener('change', function() {
    switch (true) {
    case event.target.value === 'lima':
      container.textContent = '';
      console.log(data[sede[2]]);
      chooseSede = 2; // chooseSede cambia a 2 porque es la posicion en el array sede que tiene lima
      break;
    case event.target.value === 'arequipa':
      container.textContent = '';
      console.log(data[sede[0]]); 
      chooseSede = 0; // choose cambia a 0 por su posicion en el array sede
      break;
    case event.target.value === 'chile':
      container.textContent = '';
      console.log(data[sede[3]]);
      chooseSede = 3; // choose cambia a 3 por su posicion en el array sede
      break;
    case event.target.value === 'mexico':
      container.textContent = '';
      console.log(data[sede[1]]); // choose cambia a 1 por su posicion en el array sede
      chooseSede = 1;
      break;
    };
  });

  selectGeneration.addEventListener('change', function() {
    switch (true) {
    case event.target.value === '2016-2':
      var generation2016II = data[sede[chooseSede]]['2016-2']; // esta seleccionando el objeto que esta dentro de 2016II el cual incluye students y ratings como keys
      container.textContent = ''; // limpia 
      showGeneration(generation2016II);
      showMetas(generation2016II);
      showRatings(generation2016II);
      break;
    case event.target.value === '2017-1':
      var generation2017I = data[sede[chooseSede]]['2017-1'];
      container.textContent = '';
      showGeneration(generation2017I);
      showMetas(generation2017I);
      showRatings(generation2017I);
      break;
    case event.target.value === '2017-2':
      var generation2017II = data[sede[chooseSede]]['2017-2'];
      container.textContent = '';
      showGeneration(generation2017II);
      showMetas(generation2017II);
      showRatings(generation2017II);
      break;
    }
  });
});

function showGeneration(obj) { // nos va a mostrar la cantidad de estudiantes activas
  var divStudents = document.createElement('div'); // crea un div
  var pStudents = document.createElement('p'); // crea un p
  pStudents.textContent = 'ESTUDIANTES INSCRITAS: ' + obj['students'].length + ' inscritas'; // agrega contenido al p
  divStudents.appendChild(pStudents); // agrega el p dentro del div
  container.appendChild(divStudents); // agrega el div dentro del container
  var acumulStudentsActive = 0; // acumulara la cantidad de estudiantes activas
  for (var i = 0; i < obj['students'].length; i++) { // recorre el array con las estudiantes
    if (obj['students'][i]['active'] === true) { // verifica si es true
      acumulStudentsActive++; // aumenta la variable en 1 cada que es true
    }
  };
  var pStudentsAactive = document.createElement('p');
  pStudentsAactive.textContent = 'ESTUDIANTES ACTIVAS:' + acumulStudentsActive + ' activas'; // contenido del p que muestra las estudiantes activas
  divStudents.appendChild(pStudentsAactive); // agrega el p al div
  console.log(acumulStudentsActive);
  var pStudentsDeserter = document.createElement('p');
  pStudentsDeserter.textContent = 'ESTUDIANTES DESERTORAS:' + (obj['students'].length - acumulStudentsActive) + ' desertoras'; // mueustra las desertoras
  divStudents.appendChild(pStudentsDeserter);

  google.charts.load('current', {'packages': ['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Estudiantes');
    data.addColumn('number', 'cantidad');
    data.addRows([
      ['Activas', acumulStudentsActive],
      ['Desertoras', obj['students'].length - acumulStudentsActive],
    ]);

    var options = {
      title: 'CANTIDAD DE ESTUDIANTES',
      'width': 700,
      'height': 500
    };

    var chart = new google.visualization.PieChart(document.getElementById('charts-pie'));

    chart.draw(data, options);
  }
};

function showMetas(obj) {
  var tech = (1800 * 70) / 100;// calcula el 70% (1800) 1260
  var hse = (1200 * 70) / 100;// clacula el 70% (1200) 840
  var divMetas = document.createElement('div');
  container2.appendChild(divMetas);
  var acumSprint1Tech = 0; // variables para guardar las alumnas que superan el 70%
  var acumSprint1Hse = 0;
  var acumSprint2Tech = 0;
  var acumSprint2Hse = 0;
  var acumSprint3Tech = 0;
  var acumSprint3Hse = 0;
  var acumSprint4Tech = 0;
  var acumSprint4Hse = 0;
  var studentsCant = obj['students'].length;
  for (var j = 0; j < obj['students'].length; j++) {// recorre el array con las estudiantes
    var sprintByStudents = obj['students'][j]['sprints']; // contiene un array con los sprint de cada estidiante
    for (var k = 0; k < sprintByStudents.length; k++) {// recorre el array con los sprint
      console.log(obj['students'][j]['sprints'][k]);
      var scoreStudents = obj['students'][j]['sprints'][k]['score']; // ingresa al score para poder tomar los puntos
      switch (true) {
      case k === 0: // verifica que sea verdad (cuando k es cero se trata del primer sprint)
        if (scoreStudents['tech'] > tech) { // compara el score tech de la alumna con el 70% deseado
          acumSprint1Tech = acumSprint1Tech + 1; // acumula en la variable para contarlas
        };
        if (scoreStudents['hse'] > hse) { // compara el score hse de la alumna con el 70% deseado
          acumSprint1Hse = acumSprint1Hse + 1; // las cuenta
        };
        break;
      case k === 1:
        if (scoreStudents['tech'] > tech) {
          acumSprint2Tech = acumSprint2Tech + 1;
        };
        if (scoreStudents['hse'] > hse) {
          acumSprint2Hse = acumSprint2Hse + 1;
        };
        break;
      case k === 2:
        if (scoreStudents['tech'] > tech) {
          acumSprint3Tech = acumSprint3Tech + 1;
        };
        if (scoreStudents['hse'] > hse) {
          acumSprint3Hse = acumSprint3Hse + 1;
        };
        break;
      case k === 3:
        if (scoreStudents['tech'] > tech) {
          acumSprint4Tech = acumSprint4Tech + 1;
        };
        if (scoreStudents['hse'] > hse) {
          acumSprint4Hse = acumSprint4Hse + 1;
        };
        break;
      };
    };
  };
  var sprintsCant = obj['ratings'].length;
  var sumTech = (acumSprint1Tech + acumSprint2Tech + acumSprint3Tech + acumSprint4Tech) / sprintsCant; // promedia la cantidad de estudiantes que superan el 70% en tech
  var sumHse = (acumSprint1Hse + acumSprint2Hse + acumSprint3Hse + acumSprint4Hse) / sprintsCant; // promedia la cantidad de estudiantes que superan el 70% en hse
  var promGeneral = parseInt((sumTech + sumHse) / 2); // promedia tech y hase
  var pPromGeneral = document.createElement('p'); // crea el p que almacenara el promedio general
  pPromGeneral.textContent = 'PROMEDIO DE ESTUDIANTES QUE SUPERARON LA META: ' + promGeneral + ' Estudiantes (' + parseInt((promGeneral * 100) / studentsCant) + ' %)';
  divMetas.appendChild(pPromGeneral);
  // console.log(sumTech);
  // console.log(sumHse);
  if (acumSprint1Tech !== 0 || acumSprint1Hse !== 0) { // comprueba que tenga ese sprint
    var ulSprint1Prom = document.createElement('ul');
    var liTech1 = document.createElement('li');
    var liHse1 = document.createElement('li');
    ulSprint1Prom.textContent = 'SPRINT 1:';
    liTech1.textContent = 'Superan el 70% en Técnico: ' + acumSprint1Tech + ' Estudiantes (' + parseInt((acumSprint1Tech * 100) / studentsCant) + ' %)';
    liHse1.textContent = 'Superan el 70% en Hse: ' + acumSprint1Hse + ' Estudiantes (' + parseInt((acumSprint1Hse * 100) / studentsCant) + ' %)';
    divMetas.appendChild(ulSprint1Prom);
    ulSprint1Prom.appendChild(liTech1);
    ulSprint1Prom.appendChild(liHse1);
  };
  if (acumSprint2Tech !== 0 || acumSprint2Hse !== 0) {
    var ulSprint2Prom = document.createElement('ul');
    var liTech2 = document.createElement('li');
    var liHse2 = document.createElement('li');
    ulSprint2Prom.textContent = 'SPRINT 2:';
    liTech2.textContent = 'Superan el 70% en Técnico: ' + acumSprint2Tech + ' Estudiantes (' + parseInt((acumSprint2Tech * 100) / studentsCant) + ' %)';
    liHse2.textContent = 'Superan el 70% en Hse: ' + acumSprint2Hse + ' Estudiantes (' + parseInt((acumSprint2Hse * 100) / studentsCant) + ' %)';
    divMetas.appendChild(ulSprint2Prom);
    ulSprint2Prom.appendChild(liTech2);
    ulSprint2Prom.appendChild(liHse2);
  };
  if (acumSprint3Tech !== 0 || acumSprint3Hse !== 0) {
    var ulSprint3Prom = document.createElement('ul');
    var liTech3 = document.createElement('li');
    var liHse3 = document.createElement('li');
    ulSprint3Prom.textContent = 'SPRINT 3:';
    liTech3.textContent = 'Superan el 70% en Técnico: ' + acumSprint3Tech + ' Estudiantes (' + parseInt((acumSprint3Tech * 100) / studentsCant) + ' %)';
    liHse3.textContent = 'Superan el 70% en Hse: ' + acumSprint3Hse + ' Estudiantes (' + parseInt((acumSprint3Hse * 100) / studentsCant) + ' %)';
    divMetas.appendChild(ulSprint3Prom);
    divMetas.appendChild(liTech3);
    divMetas.appendChild(liHse3);
  };
  if (acumSprint4Tech !== 0 || acumSprint4Hse !== 0) {
    var ulSprint4Prom = document.createElement('ul');
    var liTech4 = document.createElement('li');
    var liHse4 = document.createElement('li');
    ulSprint4Prom.textContent = 'SPRINT 4:';
    liTech4.textContent = 'Superan el 70% en Técnico: ' + acumSprint4Tech + ' Estudiantes (' + parseInt((acumSprint4Tech * 100) / studentsCant) + ' %)';
    liHse4.textContent = 'Superan el 70% en Hse: ' + acumSprint4Hse + ' Estudiantes (' + parseInt((acumSprint4Hse * 100) / studentsCant) + ' %)';
    divMetas.appendChild(ulSprint4Prom);
    divMetas.appendChild(liTech4);
    divMetas.appendChild(liHse4);
  };

  google.charts.load('current', {'packages': ['bar']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['SPRINT', 'Tech', 'Hse'],
      ['1', acumSprint1Tech, acumSprint1Hse],
      ['2', acumSprint2Tech, acumSprint2Hse],
      ['3', acumSprint3Tech, acumSprint3Hse],
      ['4', acumSprint4Tech, acumSprint4Hse]
    ]);

    var options = {
      width: 1200,
      chart: {
        title: 'ESTUDIANTES QUE SUPERAN EL 70%',
        subtitle: 'Cantidad de estudiantes con mas de 70% en Tech y Hse',
      },
      bars: 'horizontal' // Required for Material Bar Charts.
    };

    var chart = new google.charts.Bar(document.getElementById('charts-bar'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  };
};

function showRatings(obj) {
  var divRatings = document.createElement('div'); // creamos un div que contenga kos datos
  container3.appendChild(divRatings);
  var sumNps = 0;
  for (var j = 0; j < obj['ratings'].length; j++) { // recorre el array ratings
    // console.log(obj['ratings'][j]['student']); // me da un objeto que contiene los keys de cumple o no
    var ulStudentsPoints = document.createElement('ul');
    var liStudentsSup = document.createElement('li');
    ulStudentsPoints.textContent = 'SPRINT ' + (j + 1) + ':';
    liStudentsSup.textContent = 'Estudiantes satisfechas con la experiencia de Laboratoria : ' + (obj['ratings'][j]['student']['supera'] + obj['ratings'][j]['student']['cumple']) + '%';
    ulStudentsPoints.appendChild(liStudentsSup);
    divRatings.appendChild(ulStudentsPoints);  
    // Creamos un li para almacenar el promedio de la puntuacion de los profesores
    var liTeacherPoints = document.createElement('li');
    liTeacherPoints.textContent = 'Puntuación promedio de l@s profesores : ' + obj['ratings'][j]['teacher'];
    ulStudentsPoints.appendChild(liTeacherPoints);
    var liJediPoints = document.createElement('li');
    liJediPoints.textContent = 'Puntuación promedio de l@s jedis : ' + obj['ratings'][j]['jedi'];
    ulStudentsPoints.appendChild(liJediPoints);
    var nps = obj['ratings'][j]['nps'];
    var npsPromedioBySprint = nps['promoters'] - nps['detractors'];
    sumNps = sumNps + npsPromedioBySprint;
  };
  var promFinalNps = parseInt(sumNps / obj['ratings'].length);
  var pNpsFinal = document.createElement('p');
  pNpsFinal.textContent = 'NPS promedio: ' + promFinalNps + '%';
  container3.insertBefore(pNpsFinal, divRatings);

  
  var jediPoints1 = obj['ratings'][0]['jedi'];
  var teacherPoints1 = obj['ratings'][0]['teacher'];
  var jediPoints2 = obj['ratings'][1]['jedi'];
  var teacherPoints2 = obj['ratings'][1]['teacher'];
  var jediPoints3 = obj['ratings'][2]['jedi'];
  var teacherPoints3 = obj['ratings'][2]['teacher'];
  var jediPoints4 = obj['ratings'][3]['jedi'];
  var teacherPoints4 = obj['ratings'][3]['teacher'];
  google.charts.load('current', {'packages': ['bar']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Sprint', 'Puntuación Yedis', 'Puntuación Profesores'],
      [1, jediPoints1, teacherPoints1],
      [2, jediPoints2, teacherPoints2],
      [3, jediPoints3, teacherPoints3],
      [4, jediPoints4, teacherPoints4]
    ]);

    var options = {
      chart: {
        title: 'Puntuación Yedis y Profesores',
        subtitle: 'Puntuación 1 - 5',
      }
    };

    var chart = new google.charts.Bar(document.getElementById('charts-column'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
};