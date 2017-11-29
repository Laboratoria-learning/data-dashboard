window.addEventListener('load', function(event) {
  var country = document.querySelectorAll('.country');
  var countryChile = document.querySelector('#chile');
  var countryPeru = document.querySelector('#peru');
  var countryMexico = document.querySelector('#mexico');

  function showCountry(event){
    //console.log(event.target.nextElementSibling);
    event.target.nextElementSibling.classList.toggle('display-none');



  }


  countryChile.addEventListener('click',showCountry);
  countryPeru.addEventListener('click',showCountry);
  countryMexico.addEventListener('click',showCountry);


});


// window.addEventListener('load', function(event) {
//
// });
/* Dropdwon de menu */
  // var menu = document.querySelector('.menu');
  // var country = document.querySelectorAll('.country');
  // var city = document.querySelectorAll('.city');
  // function showCountry() {
  //   for (var i = 0; i < country.length; i++) {
  //     switch (true) {
  //       case 'Chile':
  //           country.classList.toggle('display-none');
  //         break;
  //
  //       default:
  //
  //     }
  //   }
  // }
  // function showCity() {
  //
  //
  // }


/* Tabs */
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

// Agregar fotos de coders y nombres
// function addCoder() {
//   var coderPhoto;
//   var coderName;
//   var coderTechSkills;
//   var coderLifeSkills;
//   console.log(data[]);
// }
// addCoder();
