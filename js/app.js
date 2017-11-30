/*
 * Funcionalidad de tu producto
 */
// para habilitar y desabilitar el boton
var boton = document.getElementById('btn');

function showMenu() {
  var menu = document.getElementById('menu-princ');

  if (menu.classList.contains('disabled-menu')) {
    menu.classList.remove('disabled-menu');
    menu.classList.add('menu');
  } else {
    menu.classList.remove('menu');
    menu.classList.add('disabled-menu');
  }
}
// Para que el boton menu se habilite cuando se haga click
boton.addEventListener('click', showMenu);

var mostrarOcultar = function(event) {
  var tabSeleccionado = event.target.dataset.tabSeleccionado;
  var OVERVIEW = document.getElementById('OVERVIEW');
  var STUDENTS = document.getElementById('STUDENTS');
  var TEACHERS = document.getElementById('TEACHERS');

  if (tabSeleccionado === 'OVERVIEW') {
    STUDENTS.style.display = 'none';
    TEACHERS.style.display = 'none';
    OVERVIEW.style.display = 'block';
  } else if (tabSeleccionado === 'STUDENTS') {
    OVERVIEW.style.display = 'none';
    STUDENTS.style.display = 'block';
    TEACHERS.style.display = 'none';
  } else if (tabSeleccionado === 'TEACHERS') {
    OVERVIEW.style.display = 'none';
    STUDENTS.style.display = 'none';
    TEACHERS.style.display = 'block';
  }
};
var cargarPagina = function() {
  var OVERVIEW = document.getElementById('OVERVIEW');
  var STUDENTS = document.getElementById('STUDENTS');
  var TEACHERS = document.getElementById('TEACHERS');

  STUDENTS.style.display = 'none';
  TEACHERS.style.display = 'none';
  OVERVIEW.style.display = 'block';

  var elementosTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementosTab.length;i++) {
    elementosTab[i].addEventListener('click', mostrarOcultar);
  }
};

cargarPagina();
//
// Haciendo uso de la variable data
/* var sitie = Object.keys(data);// [AQP,CDMX,LIM,SCL]
for (var i = 0; i < sitie.length; i++) {
  sitie[i];
}
sitie[0] = document.getElementById('aqp');
sitie[1] = document.getElementById('cdmx');
sitie[2] = document.getElementById('lim');
sitie[3] = document.getElementById('cl');
// var arrsitie = data[sitie[0]];
// console.log(arrsitie);
function showPromo(event) {
  switch (true) {
  case sitie[0]:
    var arrsitie = data[sitie[0]];
    var arrGeneration = Object.keys(data[sitie[0]]);
    for (var i = 0; i < arrGeneration.length; i++) {
    }
    arrGeneration[0] = document.getElementById('2016-II');
    arrGeneration[1] = document.getElementById('2017-I');
    break;
  case sitie[1]:
    break;
  case sitie[2]:
    break;
  case sitie[3]:
    break;
  default:
  }
}*/
// Para Arequipa generacion 2016-2
selectionLocated = document.getElementById('selection-located');
selectionLocated.addEventListener('change', showPromo);
var studentaqp = data.AQP['2016-2'].students.length;
contactivo = 0;
coninactivo = 0;
for (var i = 0; i < studentaqp; i++) {
  if ((data.AQP['2016-2'].students[i]['active']) === true) {
    contactivo ++;
  } else {
    coninactivo ++;
  }
}
// Para Arequipa generacion 2017-1
var studentaqp = data.AQP['2017-1'].students.length;
contactivo71 = 0;
coninactivo71 = 0;
for (var i = 0; i < studentaqp; i++) {
  if ((data.AQP['2017-1'].students[i]['active']) === true) {
    contactivo71 ++;
  } else {
    coninactivo71 ++;
  }
}
// desersion en porcentaje
var desertion = Math.floor((coninactivo * 100) / (coninactivo + contactivo)) + '%';
var desertion71 = Math.floor((coninactivo71 * 100) / (coninactivo71 + contactivo71)) + '%';

// ver el total que pasaron el 70% (del total de puntos de hse y tecnico)
var point = 0;
var tScore = 0;
for (var i = 0; i < data.AQP['2016-2'].students.length ; i++) {
  for (var j = 0; j < data.AQP['2016-2'].students[i].sprints.length ; j++) {
    var scoreHse = data.AQP['2016-2'].students[i].sprints[j].score.hse;
    // console.log(scoreHse);
    var scoreTech = data.AQP['2016-2'].students[i].sprints[j].score.tech;
    // console.log(scoreTech)
    var sumPointSprint = scoreHse + scoreTech;
    // console.log(sumPointSprint)
    tScore += sumPointSprint;
    if (tScore >= 8400) {
      point += 1;
    }
  }
  tScore = 0;
}

function showPromo(event) { //  si no se 'e' o 'event' como paramentro dentro de la funcion se debe usar this pero aún no se lo que es pe'
  switch (true) {
  case event.target.value === 'lim':
    break;
  case event.target.value === '2016-II':
    document.getElementById('container-enrolled').innerHTML = contactivo;
    document.getElementById('container-deserte').innerHTML = desertion;
    document.getElementById('point').innerHTML = point;
    break;
  case event.target.value === '2017-I':
    document.getElementById('container-enrolled').innerHTML = contactivo71;
    document.getElementById('container-deserte').innerHTML = desertion71;
    break;
  default:
  }
}
