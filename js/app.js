/* Dropdwon de menu*/
var menu = document.querySelector('.menu');
var subMenu = document.querySelectorAll('.country');
var lowerMenu = document.querySelectorAll('.city');
// console.log(subMenu);
// function showCountry(event) {
//   for (var i = 0; i < subMenu.length; i++) {
//     subMenu[i].classList.toggle('display-none');
//   }
// }
function showCity(event) {
  for (var i = 0; i < subMenu.length; i++) {
    subMenu[i].classList.toggle('display-none');
  }
}
// menu.addEventListener('click', showCountry);
subMenu.addEventListener('click', showCity);

/* Tabs */
var tab = document.querySelectorAll('.tab');


function showTab(event) {
  // console.log(event.target.dataset.selectedTab);
  selectedTab = event.target.dataset.selectedTab;
  var overView = document.querySelector('#over-view');
  var students = document.querySelector('#students');
  var teacher = document.querySelector('#teachers');

  switch (selectedTab) {
  case 'tabOverView':
    students.style.displayNone;
    // teacher.style.displayNone;
    break;

  case 'tabStudents':
    // overView.style.displayNone;
    // teacher.style.displayNone;
    break;

  case 'tabTeacher':
    // overView.style.displayNone;
    // students.style.displayNone;
    break;
  default:
    // overView.style.displayNone;
    // students.style.displayNone;
    // teacher.style.displayNone;
    break;
  }
}
function loadPage() {
  var tab = document.querySelectorAll('.tab');
  for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', showTab);
  }
}


loadPage();
