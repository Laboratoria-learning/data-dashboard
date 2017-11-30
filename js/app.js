/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
window.addEventListener('load', function() {
  var sede = '';
  var generacion = '';
  var places = document.getElementById('place');
  var generations = document.getElementById('generation');
  places.addEventListener('change', function(event) {
    var listGenerations = {AQP: ['2016-2', '2017-1'],
      CDMX: ['2017-1', ' 2017-2 '],
      LIM: ['2016-2', '2017-1', '2017-2'],
      SCL: ['2016-2', '2017-1', '2017-2']};
    
    var placeSelect = places.value;
    sede = placeSelect;
    // Limpiamos el select generation
    generations.innerHTML = '<option value="">Seleccione Generación</option>';
    if (placeSelect !== '') {
      // Seleccionamos Sede y se ordena
      placeSelect = listGenerations[placeSelect];
      placeSelect.sort();
      placeSelect.forEach(function(generation) {
        var opt = document.createElement('option');
        opt.value = generation;
        opt.text = generation;
        generations.add(opt);
      });
    }
    // fin de 1er lista
    generations.addEventListener('change', function() {
      generacion = generations.value;
    });
  });
  /* Fin de los Selects */
  /* Carga de datos predeterminados */
  enveroment('LIM', '2017-2');
  ratingTeachers('LIM', '2017-2');
  ratingJedi('LIM', '2017-2');
  studentSatisfation('LIM', '2017-2');

  var btndash = document.getElementById('btndash');
  /* Evento al hacer click al boton */
  btndash.addEventListener('click', function() {
    /* Enveroment Static*/
    enveroment(sede, generacion);
    /* Promedio de puntuacion Teacher */
    ratingTeachers(sede, generacion);
    ratingJedi(sede, generacion);
    studentSatisfation(sede,generacion);
  });
});
/* Funciones */
function enveroment(sede, generacion) {
  var cantidad = data[sede][generacion].students.length;
  var acum = 0;
  var acumtrue = 0;
  for (var i = 0; i < cantidad;i++) {
    if (data[sede][generacion].students[i].active == false) {
      acum++;
    } else {
      acumtrue++;
    }
  }
  var dropout = (acum / cantidad) * 100;
  var dropoutPercentaje = (Math.round(dropout) + '%');
  // inserta data de cantidad a los elementos
  var spanCount = document.getElementById('count-overview');
  var textCount = document.createTextNode(cantidad);
  spanCount.appendChild(textCount);
  // inserta data de desercion a los elementos
  var spanPercentaje = document.getElementById('percentaje-overview');
  var textPercentaje = document.createTextNode(dropoutPercentaje);
  spanPercentaje.appendChild(textPercentaje);
}
// Funcion que obtiene el promedio de la puntuacion de los teachers
function ratingTeachers(sede, generacion) {
  var ratingTeacher = 0;
  var countRatingT = data[sede][generacion].ratings.length;
  for (var i = 0;i < data[sede][generacion].ratings.length;i++) { 
    ratingTeacher += data[sede][generacion].ratings[i].teacher;
  }
  var averageTeacher = (ratingTeacher / countRatingT).toFixed(1);
  // inserta data a los elementos
  var spanRatingT = document.getElementById('t-rating-overview');
  var textRatingT = document.createTextNode(averageTeacher);
  spanRatingT.appendChild(textRatingT);
}
// Funcion que obtiene el promedio de la puntuacion de los jedis
function ratingJedi(sede, generacion) {
  var ratingJedi = 0;
  var countRatingJ = data[sede][generacion].ratings.length;
  // Recorremos el array ratings 
  for (var j = 0;j < data[sede][generacion].ratings.length;j++) { 
    // Acumula los puntajes de los jedis
    ratingJedi += data[sede][generacion].ratings[j].jedi;
  }
  // Declaro variable que almacene el promedio y con  función toFixed() poder limitar el número de decimales a través de su parámetr
  var averageJedi = (ratingJedi / countRatingJ).toFixed(1);
  // inserta data a los elementos
  var spanRatingJ = document.getElementById('j-rating-overview');
  var textRatingJ = document.createTextNode(averageJedi);
  spanRatingJ.appendChild(textRatingJ);
}
function studentSatisfation(sede,generacion) {
  var count = data[sede][generacion].ratings.length - 1;
  var sum = 0;
  for (var i = 0;i < data[sede][generacion].ratings.length;i++) { 
    // Acumula los puntajes de los jedis
    sum+=data[sede][generacion].ratings[i].nps.promoters;
    
  }
  console.log(sum);
}


