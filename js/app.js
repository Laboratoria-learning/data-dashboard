/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);


function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("content").style.marginLeft = "300px";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "inline";
  }
  
  function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
    document.getElementById("open").style.display = "inline";
    document.getElementById("close").style.display = "none";
  }
  