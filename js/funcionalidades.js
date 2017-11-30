
/* Cantidad de Estudiantes activas por sede*/
function activeStudents(sede) {
  var contadorActivas = 0;
  var lasede = data[sede];
  var contadorDesercion = 0;
  var arrayActivaPorGen = [];
  for (var gene in lasede) {
    contadorActivas = estadoEstudiante(sede, gene)[0];
    arrayActivaPorGen.push(contadorActivas);
  }
  return arrayActivaPorGen;
}
  
/* funcion que retorna un array, con información sobre la cantidad de estudiantes activas y la cantidad de
  estudiantes que desertaron*/
function estadoEstudiante(sede, generacion) {
  var arrayStudentGene = data[sede][generacion]['students'];
  var presentes = 0;
  var desiertas = 0;
  var Array = [];
  for (i = 0; i < arrayStudentGene.length; i++) {
    if (arrayStudentGene[i].active === true) {
      presentes++;
    } else {
      desiertas++;
    }
  }
  Array.push(presentes);
  Array.push(desiertas);
  return Array;// [presentes,desiertas]
}
// console.log(estadoEstudiante('AQP','2016-2')[0]);
// console.log(estadoEstudiante('AQP','2016-2')[1]);


/* funcion que retorna el porcentaje de desiertos por sede y generación*/
function PorcentajeDesiertos(sede, generacion) {
  var studentsSede = data[sede][generacion]['students'];
  var NumeroDeserciones = estadoEstudiante(sede, generacion)[1];
  var porcentaje = (NumeroDeserciones / studentsSede.length) * 100;
  return porcentaje;
}
/* funcion que retorna el porcentaje de activas por sede y generación*/
function PorcentajePresentes(sede, generacion) {
  var studentsSede = data[sede][generacion]['students'];
  var NumeroPresentes = estadoEstudiante(sede, generacion)[0];
  var porcentaje = (NumeroPresentes / studentsSede.length) * 100;
  return porcentaje;
}
// console.log(PorcentajeDesiertos('AQP', '2016-2'));
// console.log(PorcentajePresentes('AQP', '2016-2'));

/* evalua la cantidad de alumnas que han superado  70% del puntaje esperado por sede/generacion/sprint*/
function estadoDeObjetivoAlcanzado(sede, generacion, sprint) {
  var arrayAlumnas = data[sede][generacion]['students'];
  var scoreAlumnas; 
  var notaAlumna = 0;
  // var notasAlumnasSprint = [];
  var cantidadObjetivoAlcanzado = 0 ;
  var cantidadObjetivoNoAlcanzado = 0;
  var objetivoMinimo = 2100;
  var arrayEstadoPuntajeSprint = [];
  for (i = 0 ; i < arrayAlumnas.length ; i++) {
    scoreAlumnas = arrayAlumnas[i]['sprints'][ sprint - 1]['score'];
    notaAlumna = scoreAlumnas.hse + scoreAlumnas.tech;
    // notasAlumnasSprint.push(notaAlumna);
    if (notaAlumna > objetivoMinimo) {
      cantidadObjetivoAlcanzado++;
    } else {
      cantidadObjetivoNoAlcanzado++;
    }
  }
  arrayEstadoPuntajeSprint.push(cantidadObjetivoAlcanzado);
  arrayEstadoPuntajeSprint.push(cantidadObjetivoNoAlcanzado);
  return arrayEstadoPuntajeSprint;
}

/* devuelve un array con todas las notas de los 4 sprint de todas las alumnas por sede/generacion*/
function notasTodosSprint(sede, generacion) {
  var alumnas = data[sede][generacion]['students'];
  var notasSprintArray0 = [];
  var notasSprintArray1 = [];
  var notasSprintArray2 = [];
  var notasSprintArray3 = [];
  var TotalArray = [];
  for (var i in alumnas) {
    notasSprintArray0.push(alumnas[i]['sprints'][0]['score'].tech + alumnas[i]['sprints'][0]['score'].hse);
    notasSprintArray1.push(alumnas[i]['sprints'][1]['score'].tech + alumnas[i]['sprints'][1]['score'].hse);
    notasSprintArray2.push(alumnas[i]['sprints'][2]['score'].tech + alumnas[i]['sprints'][2]['score'].hse);
    notasSprintArray3.push(alumnas[i]['sprints'][3]['score'].tech + alumnas[i]['sprints'][3]['score'].hse);
  }
  TotalArray = [notasSprintArray0, notasSprintArray1, notasSprintArray2, notasSprintArray3];
  return TotalArray;
}
 notasTodosSprint('AQP', '2016-2');
/* devuelve un array que contiene la cantidad de alumnas que superaron la meta por generación en todos los sprints*/
function contadorMetaPorSprint(sede, generacion) {
  var arrayNotasGen = notasTodosSprint(sede, generacion);
  var cantAlumnas = data[sede][generacion]['students'].length;
  var arrayMetaAlcanzadSprint = [];
  var baseMinima = 2100;

  for (i = 0; i < arrayNotasGen.length; i++) {
    var contador = 0;
    for (j = 0; j < cantAlumnas; j++) {
      if (arrayNotasGen[i][j] > baseMinima) {
        contador = contador + 1;
      }
    }
    arrayMetaAlcanzadSprint.push(contador); 
  }
  return arrayMetaAlcanzadSprint;
}
// console.log(contadorM)
// funcionalidad para NPS
function nps(sede, generacion) {
  var arrayRating = data[sede][generacion]['ratings'];
  var nps = [];
  for (var i = 0 ; i < arrayRating.length;i++) {
    nps[i] = arrayRating[i].nps.promoters - arrayRating[i].nps.detractors;
  }
  return nps;
}

// Porcentaje de estudiantes satisfechas con exp Lab
function stdGreatLab(sede, generacion) {
  var arrayRatings = data[sede][generacion]['ratings'];
  var stdStf = [];
  for (var i = 0 ; i < arrayRatings.length;i++) {
    stdStf[i] = arrayRatings[i].student.cumple + arrayRatings[i].student.supera;
  }
  return stdStf;
}


// Score teachers
function scoreTeachers(sede, generacion) {
  var arrayRatings = data[sede][generacion]['ratings'];
  var arrayScore = [];
  for (var i = 0 ; i < arrayRatings.length;i++) {
    arrayScore[i] = arrayRatings[i].teacher;
  }
  return arrayScore;
}
// La puntuación promedio de l@s jedis.
function scoreJedis(sede, generacion) {
  var arrayRatings = data[sede][generacion]['ratings'];
  var arrayScore = [];
  for (var i = 0 ; i < arrayRatings.length;i++) {
    arrayScore[i] = arrayRatings[i].jedi;
  }
  return arrayScore;
}
// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.
function overcomeGoal(sede, generacion, sprint) {
  var superanMeta = data[sede][generacion]['students'];
  var goal = [];
  var meta = 0;
  var porcentaje;
  for (var i = 0; i < superanMeta.length; i++) {
    goal[i] = superanMeta[i]['sprints'][sprint - 1].score.tech;
    // console.log(goal[i]);
    if (goal[i] >= '1260') {
      meta++;
    }
  }
  porcentaje = (meta / superanMeta.length) * 100;
  return porcentaje;
}

