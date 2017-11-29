/*
 * Funcionalidad de tu producto
 */
window.addEventListener('load', function() {  
  var listMenu = document.querySelectorAll('.general-menu');
  for (var i = 0; i < listMenu.length; i++) {
    listMenu[i].addEventListener('click', showMenu);
  }
  
  function showMenu(event) {
    console.log(event.target);
  }
});

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
