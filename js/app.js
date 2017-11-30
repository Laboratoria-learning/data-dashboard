window.addEventListener('load', begin);
/*  Funciones*/
/*  Total de estudiantes por sede y generacion*/
function totalStudents(place, generation) {
  var totalStudents = data[place][generation].students.length;
  return totalStudents;
};

/*  Porcentaje de Deserción*/
function numDesert(place, generation, totalAlumns) {
  var desertion = 0;
  for (var i = 0; i < totalAlumns; i++) {
    if (data[place][generation].students[i].active === false) {
      desertion ++;
    }
  }
  return desertion;
};

/*  Función para obtener el total de puntos Tech por Sprint de cada alumna*/
function totalPointsPerStudent(place, generation, curse, numberStudent) {
  var totalPoints = 0;
  for (var i = 0; i < data[place][generation].students[numberStudent].sprints.length; i++) {
    totalPoints += data[place][generation].students[numberStudent].sprints[i].score[curse];
  }
  return totalPoints;
};

/*  Función para convertir a porcentaje por Todos los Sprints*/
function convertApercentagePerAllSprints(points, maxScore) {
  var percentage = Math.round(((points / 4) * 100) / maxScore);
  return percentage;
};

/*  Función para convertir a porcentaje normal*/
function convertApercentage(points, maxScore) {
  var percentage = Math.round((points * 100) / maxScore);
  return percentage;
};

/*  Cantidad de estudiantes que superan y que están debajo de la meta de puntos en promedio de todos los sprints cursados en HSE y en tech.*/
function numberStudentsExceededAndBelowGoalPercentage(sede, generation) {
  var exceededGoal = 0;
  var belowGoal = 0;
  for (var i = 0; i < data[sede][generation].students.length; i++) {
    if ((convertApercentagePerAllSprints(totalPointsPerStudent(sede, generation, 'tech', i), 1800) + convertApercentagePerAllSprints(totalPointsPerStudent(sede, generation, 'hse', i), 1200)) / 2 >= 70) {
      exceededGoal ++ ;
    } else {
      belowGoal ++;
    }
  }
  return exceededGoal;
};

/*  Promedio de NPS de todos los Sprints por generacion y sede*/

function npsAllSprints(place, generation) {
  var detractors = 0 ;
  var passive = 0;
  var promoters = 0;
  for (var i = 0; i < data[place][generation].ratings.length; i++) {
    promoters += data[place][generation].ratings[i].nps['promoters'];
    passive += data[place][generation].ratings[i].nps['passive'];
    detractors += data[place][generation].ratings[i].nps['detractors'];
  }
  var npsAllSprints = promoters - detractors;
  return npsAllSprints;
};

/*  Porcentaje de estudiantes satisfechas con la experiencia de Laboratoria*/

function satisfiedLaboratoria(place, generation) {
  var satisfied = 0;
  var noCumple = 0;
  var cumple = 0;
  var supera = 0;
  for (var i = 0; i < data[place][generation].ratings.length; i++) {
    noCumple += data[place][generation].ratings[i].student['no-cumple'];
    cumple += data[place][generation].ratings[i].student['cumple'];
    supera += data[place][generation].ratings[i].student['supera'];
    var totalAlumns = noCumple + cumple + supera;
  }
  satisfied = cumple + supera;
  return convertApercentage(satisfied, totalAlumns);
};

/*  Puntuación promedio de los profesores*/

function averageTeachersOrJedis(place, generation, teacherOrJedi) {
  var average = 0;
  var long = data[place][generation].ratings.length;
  for (var i = 0; i < long ; i++) {
    average += data[place][generation].ratings[i][teacherOrJedi];
  }
  return Math.round(average / long);
};

/*  Crearemos una función que nos permita obtener las generaciones por sede*/
var sedes = document.querySelector('.sedes');
var sedesOptions = sedes.getElementsByTagName('option');
var generations = document.querySelector('.generations');
var sprints = document.getElementById('sprints');

/*  Ejecución del programa*/
function begin() {
  console.log(data);
  /* Crear la base de datos de estudiantes de acuerdo a la data*/
  /* Primero creamos los contenedores que almacenaran los datos de cada estudiante segun sea la cantidad por generación*/
  var studentInfo = document.createElement('div');/* contenedor de la información del estudiante*/
  studentInfo.className = 'studentInfo';
  var studentPhoto = document.createElement('figure');
  studentPhoto.className = 'studentPhoto';/* contenedor de la foto del estudiante*/
  studentPhoto.appendChild(document.createElement('img'));
  var studentName = document.createElement('p');/* contenedor del nombre del estudiante*/
  studentName.className = 'studentName';
  var studentScores = document.createElement('div');/* contenedor de los score del estudiante*/
  studentScores.className = 'studentScores';
  var techScore = document.createElement('div');/* contenedor del score tecnico del estudiante*/
  techScore.className = 'techScore';
  techScore.appendChild(document.createElement('p'));
  var lifeScore = document.createElement('div');/* contenedor del score HSE del estudiante*/
  lifeScore.className = 'lifeScore';
  lifeScore.appendChild(document.createElement('p'));
  /*  Se incorpora cada elemento creado dentro de su padre elemento*/
  studentScores.appendChild(techScore);
  studentScores.appendChild(lifeScore);
  studentInfo.appendChild(studentPhoto);
  studentInfo.appendChild(studentName);
  studentInfo.appendChild(studentScores);

  function studentsByGenerations() {
    var students = data[sedes.value][generations.value]['students'];/* te devuelve un array de alumnos segun sede y generación*/
    /* console.log(students);*/
    var containerOfStudents = document.getElementById('students');
    containerOfStudents.innerHTML = '';
    for (var i = 0; i < students.length; i++) {
      students[i];
      var copyStudentInfo = studentInfo.cloneNode(true);/* Este método devuelve un duplicado del nodo, true porque los hijos del nodo también deben ser clonados.*/
      copyStudentInfo.querySelector('.studentName').textContent = students[i]['name'];
      var containerOfScores = copyStudentInfo.querySelector('.studentScores');
      /* Creamos una condicional para obtener los scores de los sprints*/
      if (students[i]['sprints'].length > 0) { /* if..else ya que existen sprints que no tienen datos*/
        copyStudentInfo.querySelector('.studentPhoto').firstElementChild.setAttribute('src', 'assets/images/5.jpg');
        containerOfScores.querySelector('.techScore').firstElementChild.textContent = 'Tech Score: ' + students[i]['sprints'][0]['score']['tech'];
        containerOfScores.querySelector('.lifeScore').firstElementChild.textContent = 'Life Score: ' + students[i]['sprints'][0]['score']['hse'];
      } else {
        copyStudentInfo.querySelector('.studentPhoto').firstElementChild.setAttribute('src', 'assets/images/2.jpg');
        containerOfScores.querySelector('.techScore').firstElementChild.textContent = 'Tech Score: ' + 'No hay datos suficientes';
        containerOfScores.querySelector('.lifeScore').firstElementChild.textContent = 'Life Score: ' + 'No hay datos suficientes';
      }
      containerOfStudents.appendChild(copyStudentInfo);
    }
  }

  /*  mediante esta función cambiaremos el contenido segun boton*/
  var addAndHide = function(event) {
    var tabSeleccionado = event.target.dataset.tabSelect;
    var overview = document.getElementById('overview');
    var students = document.getElementById('students');
    var teachers = document.getElementById('teachers');

    if (tabSeleccionado === 'tabOverview') {
      students.style.display = 'none';
      teachers.style.display = 'none';
      overview.style.display = 'block';
    } else if (tabSeleccionado === 'tabStudents') {
      students.style.display = 'block';
      teachers.style.display = 'none';
      overview.style.display = 'none';
    } else if (tabSeleccionado === 'tabTeachers') {
      students.style.display = 'none';
      teachers.style.display = 'block';
      overview.style.display = 'none';
    }
  };
  /*  En esta función obtenemos los botones y le agregamos un evento a cada uno mediante un for, el evento se desencadena mediante un click y permitira que aparezca el contenido solicitado*/
  var changeArticle = function() {
    var btns = document.getElementsByClassName('tab');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', addAndHide);
    }
  };
  changeArticle();

  /*  El evento onchange ocurre cuando el valor de un elemento <select> ha sido cambiado*/
  sedes.onchange = function(event) {
    genSelect(event.target.value);/*  event.target.value obtiene el valor de la sede*/
  };
  /*  Funcion para que al seleccionar una sede cambie las generaciones en base a cada sede*/
  function genSelect(sede) {
    var textSelect = document.getElementById('text-select');
    var datagene = Object.keys(data[sede]);
    generations.textContent = '';
    generations.appendChild(textSelect);
    for (var i = 0; i < datagene.length; i++) {
      var option = document.createElement('option');
      option.textContent = datagene[i];
      generations.appendChild(option);
    }
    loadData(sede, datagene[i]);
  }

  /*  Funcion para agregar datos al HTML*/
  function loadData(sede, generation) {
    var optionGenerations = Object.keys(data[sede]);
    generations.onchange = function(event) {
      addDataForGeneration(event.target.value);
      studentsByGenerations();
    };

    function addDataForGeneration(generationOption) {
      /*  Número de estudiantes que lograron alcanzar la meta*/
      var numExceedeGoal = document.getElementById('num-exceede-goal');
      numExceedeGoal.textContent = numberStudentsExceededAndBelowGoalPercentage(sede, generationOption);
      /*  Número de estudiantes que lograron alcanzar la meta*/
      var percentageExceedeGoal = document.getElementById('percentage-exceede-goal');
      percentageExceedeGoal.textContent = convertApercentage(numberStudentsExceededAndBelowGoalPercentage(sede, generationOption), totalStudents(sede, generationOption)) + ' %';
      /*  Promedio NPS*/
      var nps = document.getElementById('nps');
      nps.textContent = npsAllSprints(sede, generationOption);
      /*  Estudiantes satisfechas con la experiencia*/
      var happy = document.getElementById('happy');
      happy.textContent = satisfiedLaboratoria(sede, generationOption);
      /*  Promedio de los jedis*/
      var jedi = document.getElementById('jedi');
      jedi.textContent = averageTeachersOrJedis(sede, generationOption, 'jedi');
      /*  Promedio de los profesores*/
      var teacher = document.getElementById('teacher');
      teacher.textContent = averageTeachersOrJedis(sede, generationOption, 'teacher');
      /*  Total de estudiantes*/
      var alumnsTotal = document.getElementById('alumns-total');
      alumnsTotal.textContent = totalStudents(sede, generationOption);
      /*  Porcentaje de desercion de estudiantes*/
      var desert = document.getElementById('desert-percentage');
      desert.textContent = convertApercentage(numDesert(sede, generationOption, totalStudents(sede, generationOption)), totalStudents(sede, generationOption));
    }
  };
};
