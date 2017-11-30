
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
console.log(estadoDeObjetivoAlcanzado('AQP', '2016-2', 1));


function estadoMetaAlcanzadPorSprints(sede, generacion) {
  var contadorMetaPorSprints = 0;
}

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
// console.log(notasSprint('AQP','2016-2'));

