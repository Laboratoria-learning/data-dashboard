// Puedes hacer uso de la base de datos a través de la variable `data`

// Almacenamos el nombre de las sedes dado en el archivo data.js; que nos da un array:
console.log(data);
// guardamos los nombres de las sedes
var dataNameSedes = Object.keys(data);
// console.log(dataNameSedes);

// guardamos los valores las sedes
var valuesofData = Object.values(data);
// console.log(valuesofData);
// console.log(valuesofData);

// Nos aseguramos que la página cargue correctamente:
window.addEventListener('load', function() {

  var nameshow = document.getElementById('nameshow');

  /* CÓDIGO PARA MOSTRAR SEDES Y PROMOCIONES */
  // Creamos una variable que va a guardar la lista desplegable
  var selectionSede = document.getElementById('select-sede');

  // Recorremos el array de nombre de las sedes que traemos del archivo data.js
  for (var i = 0; i < dataNameSedes.length; i++) {
    // Creamos una variable sedes que va almacenar la grupo de la sede
    var optgroupsedes = document.createElement('optgroup');
    // le asignamos el valor del labol del grupo, de acuerdo al nombre extraido de data.js de cada sede
    optgroupsedes.label = dataNameSedes[i];
    optgroupsedes.id = 'optgroupsede' + i;
    
    // le asignamos cada sede a la lista de sedes
    selectionSede.appendChild(optgroupsedes);
    // guardamos las promociones por sede
    var promsforSede = Object.keys(valuesofData[i]);
    // console.log(promsforSede);
    // guardamos los valores de los promociones
    var valuesofPromsforSede = Object.values(valuesofData[i]);
    // console.log(valuesofData[i]);
    // console.log(valuesofPromsforSede);
    

    // var nameSede = (searchInArray(dataNameSedes, dataNameSedes[i]));
    // console.log(nameSede);
    var nameSede = document.getElementById('optgroupsede' + i).label;
    
    
    var arrayNumberStudentsActiveforSede = [];
    // Recorremos las promociones  
    for (var j = 0; j < valuesofPromsforSede.length; j++) {
      
      // Creamos un elemento para mostrar las promociones
      var optionproms = document.createElement('option');
      // le asignamos el valor a mostrar
      optionproms.id = 'optionproms' + j;
      optionproms.label = promsforSede[j];
      optionproms.value = j;

      // le asignamos donde lo va a mostrar
      optgroupsedes.appendChild(optionproms); 
      // console.log(optionproms.id);
      // var nameProm = searchInArray(promsforSede, promsforSede[j]); 
      var nameProm = document.getElementById('optionproms' + j).label; 
      // console.log( optionproms.value);
          
      var numberOfStudentsforProm = valuesofPromsforSede[j].students.length;
      // console.log(numberOfStudentsforProm);
      var numberStudentsActiveforProm = parseInt(serchStudentsActive(valuesofPromsforSede[j].students));
      var numberStudentsInactiveforProm = numberOfStudentsforProm - numberStudentsActiveforProm;
      // console.log(numberStudentsActiveforProm);
     
      arrayNumberStudentsActiveforSede.push(numberStudentsActiveforProm);

      // Porcentaje de alumnas activas por promoción
      var percentSatudentsActiveforProm = Math.round((numberStudentsActiveforProm * 100) / numberOfStudentsforProm);
      // Porcentaje de alumnas inactivas por promoción
      var percentSatudentsIntiveforProm = Math.round((numberStudentsInactiveforProm * 100) / numberOfStudentsforProm);

      // console.log(numberOfStudentsforProm);
      
      selectionSede.addEventListener('change', function(event) {
        
        var nodosoptGroup = event.target.children;
        for (var h = 0; h < nodosoptGroup. length; h++) {
          var nodosOption = nodosoptGroup[h].children;
          for (var d =0 ; d < nodosOption.length; d++) {
            
            var nodo = nodosOption [d];
            console.log(nodo);
            if (nodo.value = ) {
              nameshow.textContent = nameSede + ' ' + nameProm;
            }

            // console.log(optionproms.id);
          }
        } 
      });

          
      /* ACCEDER A LAS NOTAS DE LAS ESTUDIANTES*/
      var dataStudent = valuesofPromsforSede[j].students;
      // recorremos las estudiantes
      var arrayPercentTotalProm = [];
      
      for (var f = 0; f < dataStudent.length; f++) {
        var arraysprints = dataStudent[f].sprints;
        // console.log(dataStudent[f]); 
        // console.log(arraysprints);

        var arrayPercentTotalStudent = [];
        // recorremos los sprints
        for (var g = 0; g < arraysprints.length; g++) {
          // console.log(arraysprints[g]);
          // notas por sprint 
          var notaTech = arraysprints[g]['score']['tech'];
          var notaHSE = arraysprints[g]['score']['hse'];
          var percenNotaTech = Math.round(notaTech / 18);
          var percenNotaHSE = Math.round(notaTech / 12);
          // porcentaje por sprint 
          var percenTotalforSprint = (percenNotaTech + percenNotaHSE) / 2;
          // console.log(percenTotalforSprint);
          arrayPercentTotalStudent.push(percenTotalforSprint);
        }
        
        var PercentTotalStudent = parseInt(sumElementArray(arrayPercentTotalStudent) / arraysprints.length); 
        // console.log(PercentTotalStudent); 
        arrayPercentTotalProm.push(PercentTotalStudent);

        var PercentTotalProm = parseInt(sumElementArray(arrayPercentTotalProm) / dataStudent.length);
        // console.log(PercentTotalProm);
      }
      // console.log(optgroupsedes.id);

      /* FIN ACCEDER*/
    }
    // total de studiantes por sede;
    var numberOfStudentsforSede = activeforSede(arrayNumberStudentsActiveforSede);
    // console.log(numberOfStudentsforSede);
  }
  /* FIN DE CÓDIGO MOSTRAR SEDES Y PROMOCIONES */

  /* CODIGO PESTAÑAS*/
  var show = function(e) {
    var tabSeleccionado = e.target.dataset.tabSeleccionado;
    console.log(tabSeleccionado);
    var overview = document.getElementById('overview');
    var students = document.getElementById('students');
    var teachers = document.getElementById('teachers');
    if (tabSeleccionado === 'tabOverview') {
      students.style.display = 'none';
      teachers.style.display = 'none';
      overview.style.display = 'block';
    } else if (tabSeleccionado === 'tabStudents') {
      overview.style.display = 'none';
      teachers.style.display = 'none';
      students.style.display = 'block';
      console.log('students');
    } else if (tabSeleccionado === 'tabTeachers') {
      overview.style.display = 'none';
      students.style.display = 'none';
      teachers.style.display = 'block';
      console.log('teachers');
    }
  };
  var chargePage = function() {
    var overview = document.getElementById('overview');
    var students = document.getElementById('students');
    var teachers = document.getElementById('teachers');
    students.style.display = 'none';
    teachers.style.display = 'none';
    overview.style.display = 'block';
    var elementsTab = document.getElementsByClassName('tab');
    for (var i = 0; i < elementsTab.length;i++) {
      elementsTab[i].addEventListener('click', show);
    }
  };
  chargePage();
/* FIN CODIGO PESTAÑAS*/
});


// para buscar en un array
function searchInArray(array, string) {
  var result;
  for (var m = 0; m < array.length; m++) {
    if (string === array[m]) {
      result = string;
    }
  }
  return result;
}

// // para buscar una key en un objeto
// function searchInObject(obj, string) {
//   var result;
//   var keys = Object.keys(obj);
//   for (var s = 0; s < keys.length; s++) {
//     if (string === keys[s]) {
//       result = string;
//     }
//   }
//   return result;
// }

// // funcion para obtener el valor especifco de una key
// function getValueforkey(obj, key) {
//   var valueofkey,result;
//   var keysofObject = Object.keys(obj);
//   for (var i = 0; i < keysofObject.length; i++) {
//     keysearch = keysofObject[i];  
//     if (key === keysofObject[i]) {
//       valueofkey = obj[key];
//     }
//     result = valueofkey;
//   }  
//   return result;
// }

// para buscar estudiantes activas
function serchStudentsActive(studentsList) {
  var result = 0;
  for (var k = 0; k < studentsList.length; k++) {
    if (studentsList[k].active === true) {
      result++;
    }
  }
  // console.log(result);
  return result;
}


// para buscar el total de acttivas por prom
function activeforSede(array) {
  /* PARA RECORRER EL ARRAY DEL NUMERO DE ESTUDIANTES ACTIVAS*/
  var sum = 0;
  for (var s = 0; s < array.length; s++) {
    sum += array[s];
  }
  return sum;
}

// para sumar elementos de un array 
function sumElementArray(array) {
  var sumTotal = 0;
  for (var u = 0; u < array.length; u++) {
    sumTotal += array[u];
  }
  return sumTotal;
}