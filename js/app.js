/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

window.addEventListener('load', function() {  
  arrow.addEventListener('click', function showSedes(event) {
    var arrow = document.getElementById('arrow');  
    var sedes = document.getElementById('sedes-container');
    sedes.classList.toggle('hidden');
    sedes.style.marginTop = '170px';
    sedes.style.marginLeft = '170px';
    // ventana.style.left = ((document.body.clientWidth - 350) / 2) + 'px';
  });

  teachers.addEventListener('click', function showData(event) {
    // Creando el contenedor del promedio de los Teachers.
    var section = document.getElementById('teachers-ratings');
    var teachersOption = document.getElementById('teachers');
    var containerData = document.createElement('div');
    var containerTeacher = document.createElement('div');
    var titleData = document.createElement('h1');
    titleData.textContent = 'Overall Teacher Rating';
    containerData.appendChild(containerTeacher);
    containerTeacher.appendChild(titleData);
    containerTeacher.setAttribute('id', 'teacher-data');
    section.appendChild(containerData);
    containerTeacher.classList.add('average-container');
    containerData.classList.add('teachers-data');
    titleData.classList.add('average-title');

    // Creando el contenedor del promedio de los Jedis-masters 
    var containerJedis = document.createElement('div');
    var titleJedi = document.createElement('h1');
    titleJedi.textContent = 'Jedi Master Rating';
    containerData.appendChild(containerJedis);
    containerJedis.appendChild(titleJedi);
    containerJedis.classList.add('average-container');
    titleJedi.classList.add('average-title');  
  });

  teachers.addEventListener('click', function averageTeachers(event) {
  // Promedio general Arequipa
  // var containerAverageAqp = document.createElement('div');
    var aqp = data.AQP;
    var average2016Aqp = function(data) {
      for (var i in aqp) {
        return console.log(aqp);
      }
    }
  });

});

