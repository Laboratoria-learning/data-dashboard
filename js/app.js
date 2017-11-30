
window.addEventListener('load', function() {
  // variable que almacena  el texto junto de sede y generacion, el cual se muestra en la pantalla
  var sedeGeneration = document.getElementById('sede_generation');
  // console.log(sedeGeneration); // <a href="#" id="sede_generation">NUESTRAS SEDES</a>

  // variable que almacena la lista de sedes
  var listSedes = document.getElementById('listSedes');
  // console.log(listSedes); // <div id="listSedes" class="sedes_hiden"></div>

  var listGenerations = document.querySelectorAll('.listGenerations');
  // console.log(listGenerations); // todos los div con las generaciones
  // console.log(listGenerations.children);

  var generations = document.querySelectorAll('.generation');
  // console.log(generations); // (10) [a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation]


  sedeGeneration.addEventListener('click', showListSedes);
  function showListSedes(event) {
    listSedes.classList.toggle('show');
  };

  var sedes = document.querySelectorAll('.sede');
  // console.log(sedes); // [a.sede =arequipa, a.sede =mexico, a.sede = lima, a.sede = chile] // lista de nodos
  for (var i = 0; i < sedes.length; i++) {
    sedes[i].addEventListener('click', function(event) {
      // console.log(event.target); //  <a href="#" class="sede" data-sede ="AQP">Arequipa</a>
      var sede = event.target.dataset.sede;


      for (var i = 0; i < listGenerations.length; i++) {
        listGenerations[i].addEventListener('click', function(event) {
          // sconsole.log(event.target);
          // creando div que almacenará el cuadro estradístico
          var chartDiv = document.createElement('div');
          chartDiv.textContent = ' VAR AGREGAR CUADRO AQUI ';
        


          var generation = event.target.textContent;
          // console.log(generation);// 2016-2
          var students = data[sede][generation].students.length ;
          console.log(students);// 15
          alert('el número de estudiantes de la sede ' + sede + ' y de la generación ' + generation + ' es: ' + students);
        });
      }
    });
  }
});
