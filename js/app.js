/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
var countries = document.getElementById('countries').children[0];

countries.addEventListener('click', function(event) {
  var list = document.getElementById('countries').children[1];
  list.classList.toggle('hide');
});
