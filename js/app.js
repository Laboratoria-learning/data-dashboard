// Puedes hacer uso de la base de datos a través de la variable `data`

// Almacenamos el nombre de las sedes dado en el archivo data.js; que nos da un array:
console.log(data);
// guardamos los nombres de las sedes
var dataNameSedes = Object.keys(data);

// guardamos los valores las sedes
var valuesofData = Object.values(data);
// console.log(valuesofData);

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
    // le asignamos cada sede a la lista de sedes
    selectionSede.appendChild(optgroupsedes);
    // guardamos las promociones por sede
    var promsforSede = Object.keys(valuesofData[i]);
    // console.log(promsforSede);
    // guardamos los valores de los promociones
    var valuesofPromsforSede = Object.values(valuesofData[i]);
    // console.log(valuesofPromsforSede);

    // Recorremos las promociones
    for (var j = 0; j < promsforSede.length; j++) {
      // Creamos un elemento para mostrar las promociones
      var optionproms = document.createElement('option');
      // le asignamos el valor a mostrar
      optionproms.label = promsforSede[j];
      // le asignamos donde lo va a mostrar
      optgroupsedes.appendChild(optionproms); 

      var nameSede = (searchInArray(dataNameSedes, dataNameSedes[i]));
      var nameProm = searchInArray(promsforSede, promsforSede[j]);
    
    }
  }
  /* FIN DE CÓDIGO MOSTRAR SEDES Y PROMOCIONES */

  /* CODIGO PESTAÑAS*/
  var show = function(e) {
    var tabSeleccionado = e.target.dataset.tabSeleccionado;
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

// para buscar una key en un objeto
function searchInObject(obj, string) {
  var result;
  var keys = Object.keys(obj);
  for (var s = 0; s < keys.length; s++) {
    if (string === keys[s]) {
      result = string;
    }
  }
  return result;
}

