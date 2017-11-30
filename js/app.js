window.addEventListener('load', function() {
  /* funcion para mostrar las alumas por sede-generacion*/
  var selection = document.getElementById('selection');
  var containerStudents = document.getElementById('total-students');
  selection.addEventListener('change', showGenerations);
  function showGenerations() {
    /* seleccionando cada option de lista despegable*/
    var options = selection.value;
    /* se convierte a un array para obtener la data de sede y generaciones*/
    var array = options.split('-');/* [lima,2017,2]*/
    console.log(array);
    /* obteniendo la generacion*/
    var array1 = array.splice(1, 2);
    console.log(array1);
    /* uniendo los dos elementos de la generacion*/
    var generation = array1[0] + '-' + array1[1];
    /* obteniendo la sede*/
    var site = array.splice(0, 1);
    console.log(site);
    /* obteniendo datos por sede-generacion*/
    var siteGeneration = data[site][generation];
    console.log(siteGeneration);
    /* creando un texto*/
    var totalStudents = siteGeneration.students.length;
    containerStudents.innerHTML = '# de studiantes inscritos' + '</br>' + totalStudents;

  }








  /*menu derecho*/
var bars = document.getElementById('bars');
bars.addEventListener('click', showMenu);
function showMenu() {
var options = document.getElementById('options-menu');
if(options.classList.contains('disabled-menu')){
  options.classList.remove('disabled-menu');
  options.classList.add('enabled-menu');
}
else{
  options.classList.remove('enabled-menu');
  options.classList.add('disabled-menu');
}
}
bars.addEventListener('click', showMenu);
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
});
