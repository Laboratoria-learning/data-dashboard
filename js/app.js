console.log(data);

var menuPrincipal = document.getElementById('menu-principal');
var content = document.getElementById('content-menu');
var studentsCurrentlyEnrolled = document.getElementById('students-currently');

function viewMenu() {
  content.classList.toggle('hidden');
};

menuPrincipal.addEventListener('click', viewMenu);
