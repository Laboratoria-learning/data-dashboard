/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
var boton = document.getElementById("btn");
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

 boton.addEventListener("click", showMenu);
