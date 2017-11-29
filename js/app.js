/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

window.addEventListener('load', select);
function create() {       
  var sede = document.getElementById('sede').value;   
  document.getElementById('text').innerHTML = sede ;   
    var datos = (data["AQP"]["2016-2"]["students"][0]["active"]);
    
    if (datos == true ) {
     document.getElementById('one').innerHTML = datos.length; 
 }
 

}


function select() {
  sede.addEventListener('change', create);
};

