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


// var selectSedes = document.getElementById('sedes');
// selectSedes.addEventListener('change',selectGeneration())
