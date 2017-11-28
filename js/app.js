/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data.LIM);
  
// agregar el evento load
window.addEventListener('load', function() {
  var lima = data.LIM;
  console.log(lima);
  var arequipa = data.AQP;
  console.log(arequipa);
  var santiagoChile = data.SCL;
  console.log(santiagoChile);
  var cMexico = data.CDMX;
  console.log(cMexico);

  var selection = document.getElementById('selection');
  console.log(selection);
  var contenidoSede = document.getElementById('contenido-sede');
  console.log(contenidoSede);
  // seleccionar los tabs
  var tabs = document.getElementsByClassName('tab');
  var contents = document.getElementsByClassName('content');


  // function mostrarInfo(sede) {
  //   contenidoSede.textContent = '';
  //   if (sede === 'lima') {
  //     lima.forEach(function() {
  //       var 
  //     });
  //   }
  // }

  // agregar el evento click a todos los tabs
  for (var i = 0; i < tabs.length; i++) {
    // y dentro del click para cada tab
    tabs[i].addEventListener('click', function(event) {
      for (var j = 0; j < tabs.length; j++) {
        // quitar la clase active a todos los tabs
        tabs[j].classList.remove('active');
      }

      for (var k = 0; k < contents.length; k++) {
        // quitar la clase active a todos los contents
        contents[k].classList.remove('active');
      }
      
      // agregar la clase active solo a este tab que se le dio click
      event.target.classList.add('active');
      // agregar la clase active solo al content correspondiente (data-content
      contents[event.target.dataset.content].classList.add('active');
    });
  }

});