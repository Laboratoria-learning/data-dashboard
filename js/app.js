window.addEventListener('load', begin );
/*Funciones*/
/*Total de estudiantes por sede y generacion*/
function totalStudents(place, generation) {
 var totalStudents = data[place][generation].students.length;
 return totalStudents;
};
/*Función para obtener el total de puntos Tech por Sprint de cada alumna*/
function totalPointsPerStudent(place, generation, curse, numberStudent) {
  var totalPoints = 0;
  for ( var i = 0; i < data[place][generation].students[numberStudent].sprints.length; i++) {
      totalPoints += data[place][generation].students[numberStudent].sprints[i].score[curse];
    }
  return totalPoints;
};

/*Función para convertir a porcentaje por Todos los Sprints*/
function convertApercentagePerAllSprints (points, maxScore) {
  var percentage = Math.round(((points / 4) * 100) / maxScore);
  return percentage;
};

/*Función para convertir a porcentaje normal*/
function convertApercentage (points, maxScore) {
  var percentage = Math.round((points * 100) / maxScore);
  return percentage;
};

/*Cantidad de estudiantes que superan y que están debajo de la meta de puntos en promedio de todos los sprints cursados en HSE y en tech.*/
function numberStudentsExceededAndBelowGoalPercentage () {
  var exceededGoal = 0;
  var belowGoal = 0;
  for ( var i = 0; i < data['AQP']['2016-2'].students.length; i++) {
    if ((convertApercentagePerAllSprints(totalPointsPerStudent('AQP', '2016-2', 'tech', i), 1800) + convertApercentagePerAllSprints(totalPointsPerStudent('AQP', '2016-2', 'hse', i), 1200)) / 2 >= 70) {
      exceededGoal ++ ;
    } else {
      belowGoal ++;
    }
  }
  return exceededGoal;
};

/*Promedio de NPS de todos los Sprints por generacion y sede*/

function npsAllSprints (place, generation) {
  var detractors = 0 ;
  var passive = 0;
  var promoters = 0;
  for ( var i = 0; i < data[place][generation].ratings.length; i++) {
    promoters += data[place][generation].ratings[i].nps['promoters'];
    passive += data[place][generation].ratings[i].nps['passive'];
    detractors += data[place][generation].ratings[i].nps['detractors'];
  }
  var npsAllSprints = promoters - detractors;
  return npsAllSprints;
};

/*Porcentaje de estudiantes satisfechas con la experiencia de Laboratoria*/

function satisfiedLaboratoria(place, generation) {
  var satisfied = 0;
  var noCumple = 0;
  var cumple = 0;
  var supera = 0;
  for ( var i = 0; i < data[place][generation].ratings.length; i++) {
    noCumple += data[place][generation].ratings[i].student['no-cumple'];
    cumple += data[place][generation].ratings[i].student['cumple'];
    supera += data[place][generation].ratings[i].student['supera'];
    var totalAlumns = noCumple + cumple + supera;
  }
  satisfied = cumple + supera;
  return convertApercentage(satisfied, totalAlumns);
};

/*Puntuación promedio de l@s profesores*/

function averageTeachersOrJedis(place, generation, teacherOrJedi) {
  var average = 0;
  var long = data[place][generation].ratings.length;
  for ( var i = 0; i < long ; i++) {
    average += data[place][generation].ratings[i][teacherOrJedi];
  }
  return Math.round(average / long);
};

/*Crearemos una función que nos permita obtener las generaciones por sede*/
var sedes = document.querySelector('.sedes');
var sedesOptions = sedes.getElementsByTagName('option');
var generations = document.querySelector('.generations');
var sprints = document.getElementById('sprints');


/*Ejecución del programa*/
function begin() {
  console.log(data);
  console.log(numberStudentsExceededAndBelowGoalPercentage());
  console.log(convertApercentage(numberStudentsExceededAndBelowGoalPercentage(), totalStudents('AQP', '2016-2')));
  console.log(npsAllSprints('AQP', '2016-2'));
  console.log(satisfiedLaboratoria('AQP', '2016-2'));
  console.log(averageTeachersOrJedis('AQP', '2016-2', 'teacher'));
  console.log(averageTeachersOrJedis('AQP', '2016-2', 'jedi'));

  /*mediante esta función cambiaremos el contenido segun boton*/
  var addAndHide = function (event) {
    var tabSeleccionado = event.target.dataset.tabSelect;
    var overview = document.getElementById("overview");
    var students = document.getElementById("students");
    var teachers = document.getElementById("teachers");

    if (tabSeleccionado === "tabOverview") {
      students.style.display = "none";
      teachers.style.display = "none";
      overview.style.display = "block";
    } else if (tabSeleccionado === "tabStudents") {
      students.style.display = "block";
      teachers.style.display = "none";
      overview.style.display = "none";
    } else if (tabSeleccionado === "tabTeachers") {
      students.style.display = "none";
      teachers.style.display = "block";
      overview.style.display = "none";
    }
  }
  /*En esta función obtenemos los botones y le agregamos un evento a cada uno mediante un for, el evento se desencadena mediante un click y permitira que aparezca el contenido solicitado*/
  var changeArticle = function () {
    var btns = document.getElementsByClassName("tab");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", addAndHide);
    }
  }
  changeArticle();



  /*el evento onchange ocurre cuando el valor de un elemento <select> ha sido cambiado*/
  sedes.onchange = function (event) {
    genSelect(event.target.value);/*event.target.value obtiene el valor de la sede*/
  };
  /*Funcion para que al seleccionar una sede cambie las generaciones en base a cada sede*/
  function genSelect(sede) {
    var datagene = Object.keys(data[sede]);
    generations.textContent = "";
    for (var i = 0; i < datagene.length; i++) {
      var option = document.createElement('option');
      option.textContent= datagene[i];
      generations.appendChild(option);
    }
  }
};
