/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

var menuPrincipal = document.getElementById('menu-principal');
var content = document.getElementById('content-menu');

function viewMenu() {
  content.classList.toggle('hidden');
}


menuPrincipal.addEventListener('click', viewMenu);