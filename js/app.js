window.addEventListener('load', function() {
  // variable que almacena  el texto junto de sede y generacion, el cual se muestra en la pantalla
  var sedeGeneration = document.getElementById('sede_generation');
  // console.log(sedeGeneration); // <a href="#" id="sede_generation">LIMA 2017-2</a>

  // variable que almacena la lista de sedes
  var listSedes = document.getElementById('listSedes');
  // console.log(listSedes); // <div id="listSedes" class="sedes_hiden"></div>

  console.log(listSedes.children);

  var listGenerations = document.querySelectorAll('.listGenerations');
  // console.log(listGenerations); // todos los div con las generaciones
  // console.log(listGenerations.children);

  var generations = document.querySelectorAll('.generation');
  // console.log(generations); // (10) [a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation]

  var sedes = document.querySelectorAll('.sede');
  console.log(sedes); // [a.sede =arequipa, a.sede =mexico, a.sede = lima, a.sede = chile] // lista de nodos

  sedeGeneration.addEventListener('click', showListSedes);
  function showListSedes(event) {
    listSedes.classList.toggle('show');
  };


  for (var i = 0; i < sedes.length; i++) {
    sedes[i].addEventListener('click', function(event) {
      // console.log(event.target); //  <a href="#" class="sede" data-sede ="AQP">Arequipa</a>
      var sede = event.target.dataset.sede;
      console.log(sede); // AQP
      // console.log(typeof sede); // string

      /*
      switch ('sede') {
      case 'AQP':
        document.getElementById('generationsAQP').classList.toggle('show');
        break;
      case 'CDMX':
        document.getElementById('generationsAQP').classList.toggle('show');
        break;
      case 'LIM':
        document.getElementById('generationsAQP').classList.toggle('show');
        break;
      case 'SCL':
        document.getElementById('generationsAQP').classList.toggle('show');
        break;
      }
      */

      for (var j = 0; j < listGenerations.length; j++) {
        listGenerations[j].addEventListener('click', function(event) {
          console.log(event.target);
          var generation = event.target.dataset.generation;
          console.log(generation);// 2016-2
          var students = data[sede][generation].students.length ;
          console.log(students);// 15
          alert('el número de estudiantes de la sede ' + sede + ' y de la generación ' + generation + ' es: ' + students);
        });
      }
    });
  }
});
