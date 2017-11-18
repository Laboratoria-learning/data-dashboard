/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);

var link1 = document.getElementById("focus");
var link2 = document.getElementById("students");
var link3 = document.getElementById("teachers");
var contenedor1 = document.getElementById("firstSection");
var contenedor2 = document.getElementById("secondSection");
var contenedor3 = document.getElementById("thirstSection");
var fondoLista = document.getElementById("list1");
var fondoLista2 = document.getElementById("list2");
var fondoLista3 = document.getElementById("list3");


function generation(sel){
		 var text= sel.options[sel.selectedIndex].text;
		 document.getElementById("title").innerHTML = text;
    }

function students(sel){
		 var text= sel.options[sel.selectedIndex].text;
		 document.getElementById("title2").innerHTML = text;
    }

link1.addEventListener("click", function(){

	contenedor1.classList.remove("esconder");
	contenedor2.classList.add("esconder");
	contenedor3.classList.add("esconder");
	fondoLista.classList.add("a:hover");
})

link2.addEventListener("click", function(){

	contenedor1.classList.add("esconder");
	contenedor2.classList.remove("esconder");
	contenedor3.classList.add("esconder");
})
    
link3.addEventListener("click", function(){

	contenedor1.classList.add("esconder");
	contenedor2.classList.add("esconder");
	contenedor3.classList.remove("esconder");
})


