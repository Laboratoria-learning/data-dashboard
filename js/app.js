/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

window.addEventListener('load', function() {  
  arrow.addEventListener('click', function showSedes(event) {
    var arrow = document.getElementById('arrow');  
    var sedes = document.getElementById('sedes-container');
    sedes.classList.toggle('hidden');
    sedes.style.marginTop = '170px';
    sedes.style.marginLeft = '170px';
    // ventana.style.left = ((document.body.clientWidth - 350) / 2) + 'px';
  });
});
