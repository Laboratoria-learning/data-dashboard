/*Data, mostrado en la consola*/
console.log(data);
/*Recargar la pagina*/
window.onload = function(){
/*Evento de click que permite desplegar el menu, bajo el cargo
del usuario*/
var job = document.getElementsByClassName("job");
	for(var i=0; i < job.length; i++){
		job[i].addEventListener("click", showMenu);
	}

	function showMenu(){
		var listMenu = this.getElementsByClassName("itemList")[0];
		console.log(listMenu);
		/*Al clickear muestra el menú*/
		if (listMenu.classList.contains("hide")){
			listMenu.classList.remove("hide");
			listMenu.classList.add("show");
		/*Al clickear esconde el mené*/	
		} else {
			listMenu.classList.remove("show");
			listMenu.classList.add("hide");

		}
	}

    var menu = document.getElementsByClassName("fa-bars");
	function showSeatsMenu() {
		console.log("function");
        menu.addEventListener("click", showSeatsMenu);
    }

}

/*funcion con parametros para que se reemplace en cada for*/