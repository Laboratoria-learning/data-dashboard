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
    titleData.textContent = 'Teacher Rating';
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
  // var arequipa = data.AQP;
    var containerAverage = document.createElement('div');
    var average2016 = (data.AQP['2016-2']['ratings'][0]['teacher'] + data.AQP['2016-2']['ratings'][1]['teacher'] + data.AQP['2016-2']['ratings'][2]['teacher'] + data.AQP['2016-2']['ratings'][3]['teacher']) / 4;
    console.log(average2016); // 3.5999999999999996    
    var average2017 = (data.AQP['2017-1']['ratings'][0]['teacher'] + data.AQP['2017-1']['ratings'][1]['teacher'] + data.AQP['2017-1']['ratings'][2]['teacher']) / 3;
    console.log(average2017); // 4.166666666666667
    var averageTotal = (average2016 + average2017) / 2;
    var averageText = document.createElement('h4');
    averageText.innerHTML = averageTotal;
    containerAverage.appendChild(averageText);
    var container = document.getElementById('teacher-data');
    container.appendChild(containerAverage);
    /*
    for (var i in average) {
      
    } */  
  });

});











/*function averageTeachers(data) {
    var average = '';
    var arequipa = data.AQP;
    var primer = data.AQP['2016-2'];
    for (var i in data) {
		for(var j in arequipa) {
        }
          for (var k in primer) {
    }
    return console.log(primer);
 }
} */
