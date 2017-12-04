// Puedes hacer uso de la base de datos a través de la variable `data`

// Almacenamos el nombre de las sedes dado en el archivo data.js; que nos da un array:
console.log(data);
// guardamos los nombres de las sedes
var dataNameSedes = Object.keys(data);
var valuesofData = Object.values(data);
// Nos aseguramos que la página cargue correctamente:
window.addEventListener('load', function() {
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

  /* FIN DE CÓDIGO MOSTRAR SEDES Y PROMOCIONES */

  /* CODIGO PESTAÑAS*/

  var overview = document.getElementById('overview');
  var students = document.getElementById('students');
  var teachers = document.getElementById('teachers');
  students.style.display = 'none';
  teachers.style.display = 'none';
  overview.style.display = 'block';
  var elementsTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementsTab.length;i++) {
    elementsTab[i].addEventListener('click', function(event) {
      var tabSeleccionado = event.target.dataset.tabSeleccionado;
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
    });
  }
  /* FIN CODIGO PESTAÑAS */

  /* CÓDIGO PARA MOSTRAR */
  selectionSede.addEventListener('change', function(event) { 
    var selectedValue = this.value;
    var nameSede = selectedValue.split('_')[0];
    var nameProm = selectedValue.split('_')[1];
    document.getElementById('nameshow').innerText = nameSede + ' ' + nameProm;
    ShowData(nameSede, nameProm);
  });
  /* FIN DE CÓDIGO MOSTRAR*/
});

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
  console.log(numberStudentsforProm);
  console.log(percentStudentsInactiveforProm);

  
}

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


// // para buscar el total de acttivas por prom
// function activeforSede(array) {
//   /* PARA RECORRER EL ARRAY DEL NUMERO DE ESTUDIANTES ACTIVAS*/
//   var sum = 0;
//   for (var s = 0; s < array.length; s++) {
//     sum += array[s];
//   }
//   return sum;
// }

// para sumar elementos de un array 
function sumElementArray(array) {
  var sumTotal = 0;
  for (var u = 0; u < array.length; u++) {
    sumTotal += array[u];
  }
  return sumTotal;
}