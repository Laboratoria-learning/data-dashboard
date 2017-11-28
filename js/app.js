/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


window.onload('load', function() {
  var select = document.getElementById('select');
  var alumn = document.getElementById('alumn');
  
  select.addEventListener('click', function() {
    var image = document.createElement('img');
    alumn.appendChild(image);
    debugger;
    image.src = data.LIM['2016-2']['students'][0]['photo'];
  });


selec.addEventListener('click', function(){


 

});








});