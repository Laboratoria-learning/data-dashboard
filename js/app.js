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
		/*Al clickear muestra el menú (bajo el cargo del 
		usuario)*/
		if (listMenu.classList.contains("hide")){
			listMenu.classList.remove("hide");
			listMenu.classList.add("show");
		/*Al clickear esconde el menú (bajo el cargo del 
		usuario)*/
		} else {
			listMenu.classList.remove("show");
			listMenu.classList.add("hide");

		}
	}

}




/*funcion con parametros para que se reemplace en cada for*/