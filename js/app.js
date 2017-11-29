/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
/*
//console.log(data);
*/

/* evento check */
/*
var checkJavascript = document.getElementById('javascript');
  checkJavascript.addEventListener('CheckStateChanged', function(event) {
    alert('hola  mundo') ;
  });

  var checkLabel = document.getElementById('checkLabel-id');
  checkLabel.addEventListener('click', function(event) {
    alert('hola dos mundo') ;
  });
*/
console.log(data);

window.addEventListener('load', function(event) {
/* evento para botón de especialización javascript */
  var javascriptButton = document.getElementById('javascript-button');
  javascriptButton.addEventListener('click', function(event) {
    alert('es click');
    /* creando un arreglo con las sedes de laboratoria*/
    var sedes = Object.keys(data);
    console.log('sedes', sedes);
    alert(sedes);

    /* creando un arreglo con las generaciones */
    var generations = Object.values(data);
    console.log('generations', generations);

    var generationsSedes = Object.values(generations[0]);
    console.log('generaciones-sedes', generationsSedes[0]);
  });
  /* evento para botón de especialización uxdesing */
  var uxdesignButton = document.getElementById('uxdesign-button');
  uxdesignButton.addEventListener('click', function(event) {
    alert('es click en uxdesing');
  });
  /* evento para botón de especialización front end designer */
  var frontEndDesignerButton = document.getElementById('front-end-designer-button');
  frontEndDesignerButton.addEventListener('click', function(event) {
    alert('es click en front end desing');
  });
});
