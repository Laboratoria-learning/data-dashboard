/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
// Seleccion de pais
var peru = document.getElementById('countries').children[0];
peru.addEventListener('click', function(event) {
  event.preventDefault();
  var city = document.getElementById('countries').children[0].children[1];
  city.classList.toggle('hide');
});

var chile = document.getElementById('countries').children[1];
chile.addEventListener('click', function(event) {
  event.preventDefault();
  var city = document.getElementById('countries').children[1].children[1];
  city.classList.toggle('hide');
});

var mexico = document.getElementById('countries').children[2];
mexico.addEventListener('click', function(event) {
  event.preventDefault();
  var city = document.getElementById('countries').children[2].children[1];
  city.classList.toggle('hide');
});


/* var select = document.getElementById('select');
var alumn = document.getElementById('alumn');

select.addEventListener('click', function() {
var image = document.createElement('img');
alumn.appendChild(image);
image.src = data.LIM['2016-2']['students'][0]['photo'];*/
