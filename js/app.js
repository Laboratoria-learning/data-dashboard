/* Funciones Maribel */
// agregar el evento load
window.addEventListener('load', function() {
  var selection = document.getElementById('selection');
  // console.log(selection);
  var contenidoSede = document.getElementById('contenido-sede');
  // console.log(contenidoSede);
  var tabs = document.getElementsByClassName('tab');
  var contents = document.getElementsByClassName('content');

  function mostrarInfo() {
  };

  selection.addEventListener('change', function(e) {
  // console.log(e.target.value);
    var value = e.target.value;
    var aux = value.split('-');
    var sedeName = aux.shift();
    var generation = aux.join('-');

    var generationData = data[sedeName][generation];
    var totalStudents = generationData.students.length;

    console.log(generationData);
    });
  });

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
  /* Fin */
});

// Pruebas en consola
var lim20162 = data.LIM['2016-2'];
var lim20171 = data.LIM['2017-1'];
var lim20172 = data.LIM['2017-2'];
var aqp20162 = data.AQP['2016-2'];
var aqp20171 = data.AQP['2017-1'];
var mex20171 = data.CDMX['2017-1'];
var mex20172 = data.CDMX['2017-2'];
var scl20162 = data.SCL['2016-2'];
var scl20171 = data.SCL['2017-1'];
var scl20172 = data.SCL['2017-2'];

/*
var lim20162students = Object.values(lim20162)[0];
var lim20171students = Object.values(lim20171)[0];
var lim20172students = Object.values(lim20172)[0];

console.log(lim20172students);
*/

function showProfiles () {

}

lim20162.students
