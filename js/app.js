/* -------Funciones Maribel-------
window.addEventListener('load', function () {
  var selection = document.getElementById('selection');
  var contenidoSede = document.getElementById('contenido-sede');
  var tabs = document.getElementsByClassName('tab');
  var contents = document.getElementsByClassName('content');

  function mostrarInfo() {
    //  console.log(e.target.value);
    var value = selection.value;
    var aux = value.split('-');
    var sedeName = aux.shift();
    var generation = aux.join('-');

    var generationData = data[sedeName][generation];
    var totalStudents = generationData.students.length;

    var counter = 0;

    generationData.students.forEach(function (student) {
      if (student.active === false) {
        counter++;
      }
    });

    selection.addEventListener('change', function (e) {
      var value = e.target.value;
      var aux = value.split('-');
      var sedeName = aux.shift();
      var generation = aux.join('-');

      var generationData = data[sedeName][generation];
      var totalStudents = generationData.students.length;
    });

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function (event) {
        for (var j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove('active');
        }

        for (var k = 0; k < contents.length; k++) {
          contents[k].classList.remove('active');
        }

        event.target.classList.add('active');
        contents[event.target.dataset.content].classList.add('active');
      });
    }
  }
});
*/

window.addEventListener ('load', function () {
  var studentButton = document.getElementById('studentButton');
  studentButton.addEventListener('click', function () {
    document.getElementById('studentsTab').style.display = 'block';
  });

  
});

/* Pruebas en consola
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

var lim20162students = Object.values(lim20162)[0];
var lim20171students = Object.values(lim20171)[0];
var lim20172students = Object.values(lim20172)[0];

console.log(lim20172students);
*/
