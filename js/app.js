var link1 = document.getElementById("focus");
var link2 = document.getElementById("students");
var link3 = document.getElementById("teachers");
var contenedor1 = document.getElementById("firstSection");
var contenedor2 = document.getElementById("secondSection");
var contenedor3 = document.getElementById("thirstSection");
var fondoLista = document.getElementById("list1");
var fondoLista2 = document.getElementById("list2");
var fondoLista3 = document.getElementById("list3");
var selectorGeneracion = document.getElementById("lab")


function generation(sel){
		 var text= sel.options[sel.selectedIndex].text;
		 document.getElementById("title").innerHTML = text;
    }



link1.addEventListener("click", function(){

	contenedor1.classList.remove("esconder");
	contenedor2.classList.add("esconder");
	contenedor3.classList.add("esconder");
	fondoLista.classList.add("a:hover");
	selectorGeneracion.classList.remove("esconder");
})

link2.addEventListener("click", function(){

	contenedor1.classList.add("esconder");
	contenedor2.classList.remove("esconder");
	contenedor3.classList.add("esconder");
	selectorGeneracion.classList.add("esconder");
})
    
link3.addEventListener("click", function(){

	contenedor1.classList.add("esconder");
	contenedor2.classList.add("esconder");
	contenedor3.classList.remove("esconder");
	selectorGeneracion.classList.add("esconder");
})
 

//Variables para los button radio en estudiantes

var radio1 = document.getElementById('SCL2016-2');
var radio2 = document.getElementById('SCL2017-1');
var radio3 = document.getElementById('SCL2017-2');

if (radio1.checked == true){
	for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
	console.log(data.SCL['2016-2'].students[i].active);
	// container.innerHTML += '<p> data.SCL['2016-2'].students[i].name + </p>';
 }
} else if (radio2.checked == true){
for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
	console.log(data.SCL['2017-1'].students[i].active);
	// container.innerHTML += '<p> data.SCL['2016-2'].students[i].name + </p>';
 }
}else{
for (var i = 0; i < data.SCL['2017-2'].students.length; i++) {
	console.log(data.SCL['2017-2'].students[i].active);
	// container.innerHTML += '<p> data.SCL['2016-2'].students[i].name + </p>';
 }
}



/*function students(sel){
		 var text= sel.options[sel.selectedIndex].text;
		 document.getElementById("nombre").innerHTML = text;
    }*/

/*var container = document.getElementById('generacion');
console.log(container);*/



