console.log(data);

// Variables obtenidos del documento html
var titleMenu = document.getElementById('title-menu');
var menuPrincipal = document.getElementById('menu-principal');
var content = document.getElementById('content-menu');
var studentsCurrentlyEnrolled = document.getElementById('students-currently');
var studentSatisfaction = document.getElementById('student-satisfaction');
var teacherRating = document.getElementById('teacher-rating');
var jediRating = document.getElementById('jedi-rating');
var enrollmentDropout = document.getElementById('enrollment-dropout');

// Mostrar el menú para elegir la generación
menuPrincipal.addEventListener('click', function() {
  content.classList.toggle('hidden');
});

// Obtener el valor seleccionado
var options = document.getElementsByName('option');
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener('change', valueOption);
};

function valueOption(event) {
  // Obtiene el valor de las opciones al hacer click de generación y lugar
  var place = event.target.getAttribute('data-place');
  var generation = event.target.value;
  studentsCurrentlyEnrolled.textContent = totalAtive(place, generation, 'active');
  enrollmentDropout.textContent = enrollmentDropoutPercentaje(totalAtive(place, generation, 'active'), totalAtive(place, generation, 'inactive'));
  studentSatisfaction.textContent = studentSatisfactionTotal(place, generation);
  teacherRating.textContent = rating(place, generation, 'teacher');
  jediRating.textContent = rating(place, generation, 'jedi');
};

function totalAtive(place, generation, activeOrNotActive) {
  var totalInactive = 0;
  var totalActive = 0;
  var dataStudents = data[place][generation].students;
  for (var i = 0; i < dataStudents.length; i++) {
    if (dataStudents[i].active === true && activeOrNotActive === 'active') {
      totalActive++;
    } else if (dataStudents[i].active === false && activeOrNotActive === 'inactive') {
      totalInactive++;
    }
  }
    
  if (activeOrNotActive === 'active') {
    return totalActive;
  } else if (activeOrNotActive === 'inactive') {
    return totalInactive;
  }
}

function enrollmentDropoutPercentaje(totalActive, totalInactive, ) {
  var totalStudents = totalInactive + totalActive;
  var percentaje = (totalInactive / totalStudents) * 100;
  return (percentaje).toFixed(1);
}

function studentSatisfactionTotal(place, generation) {
  var totalPromoters = 0;
  var nps = data[place][generation]['ratings'];
  for (var i = 0; i < nps.length; i++) {
    var current = nps[i]['nps']['promoters']
    totalPromoters = totalPromoters + current;
  }
  var averagePromoters = (totalPromoters / nps.length).toFixed(1);
  return averagePromoters;
}

function rating(place, generation, nameRating) {
  var totalRating = 0;
  var nps = data[place][generation]['ratings'];
  for (var i = 0; i < nps.length; i++) {
    totalRating = totalRating + nps[i][nameRating];
  }
  var rating = (totalRating / nps.length).toFixed(1);
  return rating;
}