/*
 * Funcionalidad de tu producto
 */

window.addEventListener("load", function(){
    var openAnimatedMenu = document.getElementById("open-animated-menu");
    var closeAnimatedMenu = document.getElementById("close-animated-menu");
    
     openAnimatedMenu.addEventListener("click", function(){
        document.getElementById("animated-menu").style.width = "250px";
     })

     closeAnimatedMenu.addEventListener("click", function(){
        document.getElementById("animated-menu").style.width = "0";
     })
})

 


// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
