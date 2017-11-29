var sedes = document.querySelector('.sedes');
var sedesOptions = document.getElementsByTagName('option');
var generations = document.querySelector('.generations')

/*Podemos desde Js agregar atributos a nuestras opciones mediante la siguiente función o tbm en nuestro HTML podemos colocar ese atributo*/
/* Recorremos las opciones con un for para agregarle un atributo
for (var i = 0; i < sedesOptions.length; i++) {
  sedesOptions[i].setAttribute('value', Object.keys(data)[i]);
  /* Recuerda que data es un objeto, y de esta manera a cada opcion se le agregara el atributo value con su valor correspondiente en la data (Arequipa = AQP, Ciudad de México = CDMX, Lima = LIM y Santiago de Chile = SCL)
}*/

/*Hacemos uso del evento onchange, que ocurre cuando el valor de un elemento(select) ha sido cambiado.*/
sedes.addEventListener("change", function(event){
  addGen(event.target.value);
});

/* Creamos la función que va a agregar las generaciones que le corresponden al momento de seleccionar una sede*/
function addGen(sede) {
  var genSede = Object.Keys(data[sede]); /*almacena las generaciones en un array debido al Object.Keys*/
  generations.textContent = '';
  for (var i = 0; i<genSede.length; i++){
    var option = document.createElement('option');
    option.textContent = genSede[i];
    generations.appendChild(option);
  }
}
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
