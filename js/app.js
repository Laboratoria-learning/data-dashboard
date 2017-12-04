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
  var sectionMain= document.getElementById('container-main');
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
  // obteniendo el elemento button por medio del metodo getElementId
  var btndash = document.getElementById('btndash');
  btndash.addEventListener('click', function() {
    // aplicando clase a la seccion principal
    sectionMain.classList.remove('display-none');
    sectionMain.classList.add('display-inline-block');
    /* Enrollment Static*/
    enrollment(sede, generacion);
    achievement(sede, generacion);
    /* Promedio de puntuacion Teacher */
    ratingTeachers(sede, generacion);
    ratingJedi(sede, generacion);
    studentSatisfation(sede, generacion);
    achievement(sede, generacion);
    nps(sede, generacion);
    techSkills(sede, generacion);
    hseSkills(sede, generacion);
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

  var satisfationPercentaje = (sum / count).toFixed(0);
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
        countAim++;
      }
    } 
  } 
  var averageAim = (countAim * 100) / quantityStudents;
  // inserta data a los elementos
  var spanAim = document.getElementById('achi-overview');
  spanAim.textContent = countAim;
  var spanPercAim = document.getElementById('achi-percentaje-overview');
  spanPercAim.textContent = averageAim.toFixed(0);
}
function nps(sede, generacion) {
  var countRatings = data[sede][generacion].ratings.length;
  var accumulatorNPS = 0;
  var accumulatorPro = 0;
  var accumulatorDet = 0;
  var accumulatorPas = 0;
  for (var i = 0; i < countRatings;i++) {
    accumulatorPro += data[sede][generacion].ratings[i].nps.promoters;
    accumulatorPas += data[sede][generacion].ratings[i].nps.passive;
    accumulatorDet += data[sede][generacion].ratings[i].nps.detractors;
    accumulatorNPS += data[sede][generacion].ratings[i].nps.promoters - data[sede][generacion].ratings[i].nps.detractors;
  }
  var averagePro = (accumulatorPro / countRatings).toFixed(0);
  var averagePas = (accumulatorPas / countRatings).toFixed(0);
  var averageDet = (accumulatorDet / countRatings).toFixed(0);
  var averageNPS = (accumulatorNPS / countRatings).toFixed(0) + '%';
  // inserta data a los elementos
  var spanNPS = document.getElementById('nps-overview');
  spanNPS.textContent = averageNPS; 
  var spanNPSPr = document.getElementById('npsp-overview');
  spanNPSPr.textContent = averagePro + '% Promoters'; 
  var spanNPSPa = document.getElementById('npspa-overview');
  spanNPSPa.textContent = averagePas + '% Passive'; 
  var spanNPSDe = document.getElementById('npsde-overview');
  spanNPSDe.textContent = accumulatorDet + '% Detractors'; 
}
function techSkills(sede, generacion) {
  var accumulatorTechS = 0;
  var quantityStu = data[sede][generacion].students.length;
 
  for (var i = 0; i < data[sede][generacion].students.length;i++) {
    var countSprints = data[sede][generacion].students[i].sprints.length;
    for (var j = 0; j < countSprints;j++) {
      if (data[sede][generacion].students[i].sprints[j].score.tech > 1260) {
        accumulatorTechS++;
      }
    }
  }
  var percentaje = ((accumulatorTechS * 100)/quantityStu).toFixed(0);
  // insertamos los datos a los elementos html
  var spanSkillT = document.getElementById('tskills-overview');
  spanSkillT.textContent = accumulatorTechS;
  var spanSkillTPer = document.getElementById('ts-percentaje-overview');
  spanSkillTPer.textContent = percentaje;
  var spanDescSkill = document.getElementById('ts-overview');
  spanDescSkill.textContent = '% OF TOTAL (' + quantityStu + ')';
}
function hseSkills(sede, generacion) {
  var accumulatorHseS = 0;
  var quantityStu = data[sede][generacion].students.length;
 
  for (var i = 0; i < data[sede][generacion].students.length;i++) {
    var countSprints = data[sede][generacion].students[i].sprints.length;
    for (var j = 0; j < countSprints;j++) {
      if (data[sede][generacion].students[i].sprints[j].score.hse > 840) {
        accumulatorHseS++;
      }
    }
  }
  var percentaje = ((accumulatorHseS * 100) / quantityStu).toFixed(0);
  // insertamos los datos a los elementos html
  var spanSkillH = document.getElementById('hse-skills-overview');
  spanSkillH.textContent = accumulatorHseS;
  var spanSkillHPer = document.getElementById('hse-percentaje-overview');
  spanSkillHPer.textContent = percentaje;
  var spanDescSkill = document.getElementById('hse-overview');
  spanDescSkill.textContent = '% OF TOTAL (' + quantityStu + ')';
}
