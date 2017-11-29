var selectSede = document.getElementById('select-sede')
var selectGen = document.getElementById('select-generation');
var SEDE = '';
var GEN = '';
var students = {};

selectGen.addEventListener('change', generation);

function generation(event) {
    SEDE = selectSede.value;
    GEN = selectGen.value;
    
    students = data[SEDE][GEN].students;

    var register = document.getElementById('register');
    register.textContent = students.length;

    var desertStudents = document.getElementById('desertStudents');
    desertStudents.textContent = desert();
    function desert() {
      var arrActive = [];
    
      for (i = 0; i < students.length; i++) {
        arrActive.push(students[i].active);
      }
    
      var countDesert = 0;
      for (j = 0; j < arrActive.length; j++) {
        if (arrActive[j] === false) {
          countDesert++;
        }
      }
    
      return parseInt(countDesert * 100 / students.length) + '%'
    }
    
};


//return students = data[SEDE][GEN].students;


//Submenu

var submenu = document.getElementById('span');
submenu.addEventListener('click', showMenu);


function showMenu() {
var listMenu = document.getElementsByClassName('item-list')[0];
console.log('item-list');
if (listMenu.classList.contains('hide')) {
  listMenu.classList.remove('hide');
  listMenu.classList.add('show');

} else {
  listMenu.classList.remove('show');
  listMenu.classList.add('hide');
}
}