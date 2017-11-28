/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

window.addEventListener('load', function() {
    
  arrow.addEventListener('click', function showSedes(event) {
    var arrow = document.getElementById('arrow');  
    var ventana = document.getElementById('sedes-container');
    ventana.style.marginTop = '170px';
    ventana.style.marginLeft = '170px';
    // ventana.style.left = ((document.body.clientWidth - 350) / 2) + 'px';
    ventana.style.display = 'block';

  });


});

/* var ventana = document.getElementById(‘miVentana’);
    ventana.style.marginTop = “100px”;
    ventana.style.left = ((document.body.clientWidth-350) / 2) +  “px”;
    ventana.style.display = ‘block’; */