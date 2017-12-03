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
  var btndash = document.getElementById('btndash');
  btndash.addEventListener('click', function() {
    /* Enveroment Static*/
    enrollment(sede, generacion);
    /* Promedio de puntuacion Teacher */
    ratingTeachers(sede, generacion);
    ratingJedi(sede, generacion);
    studentSatisfation(sede, generacion);
    achievement(sede, generacion);
    nps(sede, generacion);
  });
});
/* Funciones */
function enrollment(sede, generacion) {
  var quantity = data[sede][generacion].students.length;
  var acum = 0;
  var acumtrue = 0;
  for (var i = 0; i < quantity;i++) {
    if (data[sede][generacion].students[i].active == false) {
      acum++;
    } else {
      acumtrue++;
    }
  }
  var dropout = (acum / quantity) * 100;
  var dropoutPercentaje = (Math.round(dropout) + '%');
  // inserta data de cantidad a los elementos
  var spanCount = document.getElementById('count-overview');
  spanCount.textContent = quantity;
  // inserta data de desercion a los elementos
  var spanPercentaje = document.getElementById('percentaje-overview');
  spanPercentaje.textContent = dropoutPercentaje;
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
  spanRatingT.textContent = averageTeacher;
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
  spanRatingJ.textContent = averageJedi;
}
function studentSatisfation(sede, generacion) {
  var count = data[sede][generacion].ratings.length;
  var sum = 0;
  for (var i = 0;i < data[sede][generacion].ratings.length;i++) { 
    // Acumula los puntajes de los jedis
    sum += data[sede][generacion].ratings[i].nps.promoters;
  }

  var satisfationPercentaje = sum / count;
  // inserta data a los elementos
  var spanNpsS = document.getElementById('s-nps-overview');
  spanNpsS.textContent = satisfationPercentaje ;
}
function achievement(sede, generacion) {
  var quantityStudents = data[sede][generacion].students.length;
  var countAim = 0;
  for (var i = 0; i < quantityStudents;i++) {
    var quantitySprints = data[sede][generacion].students[i].sprints.length;
    for (var j = 0; j < quantitySprints; j++) {
      if ((data[sede][generacion].students[i].sprints[j].score.tech > 1260) && (data[sede][generacion].students[i].sprints[j].score.hse > 840)) {
        if((data[sede][generacion].students[i].sprints[j].number)){
        countAim++;
        data[sede][generacion].students[i].sprints[j].number=data[sede][generacion].students[i].sprints[j].number+1;
      console.log(data[sede][generacion].students[i].sprints[j].number)}
      else{
        data[sede][generacion].students[i].sprints[j].number=1;
      }
      }
    } 
  } 
  console.log(countAim);
}
function nps(sede,generacion) {
  var countRatings = data[sede][generacion].ratings.length;
  var accumulatorNPS=0;
  
  for(var i=0; i<countRatings;i++){
    accumulatorNPS+=data[sede][generacion].ratings[i].nps.promoters-data[sede][generacion].ratings[i].nps.detractors;
  }
  var averageNPS=accumulatorNPS/countRatings;
  //inserta data a los elementos
  
}