/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);

function generation(sel){
		 var text= sel.options[sel.selectedIndex].text;
		 document.getElementById("title").innerHTML = text;
    }

