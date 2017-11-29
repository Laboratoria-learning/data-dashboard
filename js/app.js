/* Dropdwon de menu*/
var menu = document.querySelector('.menu');
var subMenu = document.querySelectorAll('.country');
// console.log(subMenu);
function showMenu(event) {
  for (var i = 0; i < subMenu.length; i++) {
    subMenu[i].classList.toggle('display-none');
  }
}
menu.addEventListener('click', showMenu);

/* Tabs */
var tab = document.querySelectorAll('.tab');
console.log(tab[0]);
/*
function showTab(event) {
  for (var i = 0; i < tab.length; i++) {
    console.log(event);
  }
}
*/
tab[0].addEventListener('click', showTab);
