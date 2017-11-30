console.log(data);

var menuPrincipal = document.getElementById('menu-principal');
var content = document.getElementById('content-menu');
var studentsCurrentlyEnrolled = document.getElementById('students-currently');
var studentSatisfaction = document.getElementById('student-satisfaction');
var teacherRating = document.getElementById('teacher-rating');
var jediRating = document.getElementById('jedi-rating');
var titleMenu = document.getElementById('title-menu');

function viewMenu() {
  content.classList.toggle('hidden');
};

menuPrincipal.addEventListener('click', viewMenu);

var options = document.getElementsByName('option');
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener('click', valueOption);
};

function valueOption(event) {
  var generation = event.target.value;
  var titleGeneration = event.target.getAttribute('data-name');
  var place = event.target.getAttribute('data-place');
  studentsCurrentlyEnrolled.textContent = totalStudents(place, generation);
  studentSatisfaction.textContent = studentSatisfactionTotal(place, generation);
  teacherRating.textContent = rating(place, generation, 'teacher');
  jediRating.textContent = rating(place, generation, 'jedi');
  titleMenu.textContent = titleGeneration + ' ' + generation;
};

function totalStudents(place, generation) {
  var totalInactive = 0;
  var totalActive = 0;
  var dataStudents = data[place][generation]['students'];
  for (var i = 0; i < dataStudents.length; i++) {
    if (dataStudents[i]['active'] === true) {
      totalActive++;
    } else if (dataStudents[i]['active'] === false) {
      totalInactive++;
    }
  }
  var totalStudents = totalActive + totalInactive;
  return totalStudents;
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


window.onload = function(event) {
  var generation = '2017-2';
  var place = 'LIM';
  studentsCurrentlyEnrolled.textContent = totalStudents(place, generation);
  studentSatisfaction.textContent = studentSatisfactionTotal(place, generation);
  teacherRating.textContent = rating(place, generation, 'teacher');
  jediRating.textContent = rating(place, generation, 'jedi');
}