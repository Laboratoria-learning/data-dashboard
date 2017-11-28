/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`

// Almacenamos el nombre de las sedes dado en el archivo data.js; que nos da un array:
console.log(data);
// guardamos los nombres de las sedes
var nombreofSede = Object.keys(data);
// guardamos los valores las sedes
var valuesofData = Object.values(data);

// Nos aseguramos que la página cargue correctamente:
window.addEventListener('load', function() {
  // Creamos una variable que va a guardar la lista desplegable
  var selectionSede = document.getElementById('select-sede');

  // Recorremos el array de nombre de las sedes que traemos del archivo data.js
  for (var i = 0; i < nombreofSede.length; i++) {
    // Creamos una variable sedes que va almacenar la grupo de la sede
    var optgroupsedes = document.createElement('optgroup');
    // le asignamos el valor del labol del grupo, de acuerdo al nombre extraido de data.js de cada sede
    optgroupsedes.label = nombreofSede[i];
    // le asignamos cada sede a la lista de sedes
    selectionSede.appendChild(optgroupsedes);
    // guardamos las promociones por sede
    var promsforSede = Object.keys(valuesofData[i]);
    // guardamos los valores de los promociones
    var valuesofSedes = Object.values(valuesofData[i]);

    // Recorremos las promociones
    for (var j = 0; j < promsforSede.length; j++) {
      // Creamos un elemento para mostrar las promociones
      var optionproms = document.createElement('option');
      // le asignamos el valor a mostrar
      optionproms.label = promsforSede[j];
      // le asignamos donde lo va a mostrar
      optgroupsedes.appendChild(optionproms);
      // recorremos los valores de las sedes
      for (var l = 0; l < valuesofSedes.length; l++) {
        // obtenemos el valor de las sedes de la posicion l
        var valuesofProms = valuesofSedes[l];
        // obtenemos los keys de las estudiantes
        var keysforSttudents = Object.keys(valuesofProms);
        // obtenemos los valores de los keys de las estudiantes
        var valueskeysforStudents = Object.values(valuesofProms);
        console.log(valueskeysforStudents);

        // recorremos los keys de los estudiantes
        // for (var k = 0; k < keysforSttudents.length; k++){
        //   var valuesofStudents = valuesofProms[k];

        // }
      }
    }
  }
});
