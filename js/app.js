/* Dropdwon de menu*/
var submenu = document.getElementsByClassName('country');
for (var i = 0; i < submenu.length; i++) {
  submenu[i].addEventListener('click', showMenu);
}

function showMenu() {
  var listMenu = this.getElementsByClassName('item-list')[0];
  if (listMenu.classList.contains('hide')) {
    listMenu.classList.remove('hide');
    listMenu.classList.add('show');
  } else {
    listMenu.classList.remove('show');
    listMenu.classList.add('hide');
  }
}


// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
