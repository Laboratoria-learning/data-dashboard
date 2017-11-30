console.log(data);

var menuPrincipal = document.getElementById('menu-principal');
var content = document.getElementById('content-menu');
var studentsCurrentlyEnrolled = document.getElementById('students-currently');

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
  var place = event.target.getAttribute('data-place');
  studentsCurrentlyEnrolled.textContent = totalStudents(place, generation);
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

