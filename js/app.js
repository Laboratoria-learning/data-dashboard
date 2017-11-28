/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`

var boton = document.getElementById("btn");

function showMenu() {
    var menu = document.getElementById("menu-princ");

    if(menu.classList.contains("disabled-menu")){
        menu.classList.remove("disabled-menu");
        menu.classList.add("menu");
    }
    else{
        menu.classList.remove("menu");
        menu.classList.add("disabled-menu");

    }
}

boton.addEventListener("click", showMenu);