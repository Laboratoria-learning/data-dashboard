/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
var boton = document.getElementById("btn");

boton.addEventListener("click", showMenu);

 function showMenu() {
   var menu = document.getElementById("opcs-menu");

   if(menu.classList.contains("disabled-menu")){
     menu.classList.remove("disabled-menu");
     menu.classList.add("enabled-menu");
   }
   else{
     menu.classList.remove("enabled-menu");
     menu.classList.add("disabled-menu");
   }
 }

var selectSedes = document.getElementById('sedes');
var selectGeneration = document.getElementById('generation');

selectSedes.addEventListener('change', getGeneration); //llamada al evento de select de Sedes para hacer dinámico el select de Generaciones
selectSedes.addEventListener('change', studentsEnrollment);
selectGeneration.addEventListener('change', studentsEnrollment);

function getGeneration() {
  if(selectSedes.value != 0){
    var generation = Object.keys(data[selectSedes.value]);
    var numGeneration = generation.length;
    selectGeneration.length = numGeneration;

    for(var i = 0; i < numGeneration; i++){
      selectGeneration.options[i].value = generation[i];
      selectGeneration.options[i].text = generation[i];
    }
  } else {
    selectGeneration.length = -1;
    selectGeneration.options[0].value ='---';
    selectGeneration.options[0].text = '---';
  }
    selectGeneration.options[0].selected = true;
}

var numTotalStudents = document.getElementsByClassName('numTotal')[0];

function studentsEnrollment(){
  var sedeAccessor = selectSedes.value.toUpperCase();
  var numberOfStudents = data[sedeAccessor][selectGeneration.value].students.length;
  numTotalStudents.innerText = numberOfStudents;
}
