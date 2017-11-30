/* DROPDOWN DE MENU */
window.addEventListener('load', function(event) {
  var menu = document.querySelector('.menu');
  var country = document.querySelectorAll('.country');
  var countryChile = document.querySelector('#chile');
  var countryPeru = document.querySelector('#peru');
  var countryMexico = document.querySelector('#mexico');
  function showMenu(event) {
    for (var i = 0; i < country.length; i++) {
      country[i].classList.toggle('display-none');
    }
  }
  function showCountry(event) {
  // console.log(event.target.nextElementSibling);
    event.target.nextElementSibling.classList.toggle('display-none');
  }
  menu.addEventListener('click', showMenu);
  countryChile.addEventListener('click', showCountry);
  countryPeru.addEventListener('click', showCountry);
  countryMexico.addEventListener('click', showCountry);
});

/* TABS */
var tabOverview = document.querySelector('.tab-overview');
var tabStudents = document.querySelector('.tab-students');
var tabTeachers = document.querySelector('.tab-teachers');
var overviewSection = document.querySelector('#overview');
var studentsSection = document.querySelector('#students');
var teachersSection = document.querySelector('#teachers');

function showTab1(event) {
  overviewSection.classList.toggle('display-none');
  studentsSection.style.displayNone;
  teachersSection.style.displayNone;
}
function showTab2(event) {
  studentsSection.classList.toggle('display-none');
  overviewSection.style.displayNone;
  teachersSection.style.displayNone;
}
function showTab3(event) {
  teachersSection.classList.toggle('display-none');
  overviewSection.style.displayNone;
  studentsSection.style.displayNone;
}

tabOverview.addEventListener('click', showTab1);
tabStudents.addEventListener('click', showTab2);
tabTeachers.addEventListener('click', showTab3);
// var tab = document.querySelectorAll('.tab');
//
//
// function showTab(event) {
//   // console.log(event.target.dataset.selectedTab);
//   selectedTab = event.target.dataset.selectedTab;
//   var overView = document.querySelector('#over-view');
//   var students = document.querySelector('#students');
//   var teacher = document.querySelector('#teachers');
//
//   switch (selectedTab) {
//   case 'tabOverView':
//     students.style.displayNone;
//     // teacher.style.displayNone;
//     break;
//
//   case 'tabStudents':
//     // overView.style.displayNone;
//     // teacher.style.displayNone;
//     break;
//
//   case 'tabTeacher':
//     // overView.style.displayNone;
//     // students.style.displayNone;
//     break;
//   default:
//     // overView.style.displayNone;
//     // students.style.displayNone;
//     // teacher.style.displayNone;
//     break;
//   }
// }
// function loadPage() {
//   var tab = document.querySelectorAll('.tab');
//   for (var i = 0; i < tab.length; i++) {
//     tab[i].addEventListener('click', showTab);
//   }
// }
//
//
// loadPage();

// window.addEventListener('load', function(event) {
//
// });

// Agregar fotos de coders y nombres
// function addCoder() {
//   var coderPhoto;
//   var coderName;
//   var coderTechSkills;
//   var coderLifeSkills;
//   console.log(data[]);
// }
// addCoder();
// window.addEventListener('load', function(event) {
//
// });
