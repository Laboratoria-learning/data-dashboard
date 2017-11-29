/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
window.addEventListener("load", function(){
  
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

var expanded = false;
function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
      }
}
/*--Pregunta1: El total de estudiantes presentes por sede y generación. */

/*
data.AQP['2016-2']['students'];
data.CDMX['2017-1']['students'];
data.LIM['2016-2']['students']; 
*/

function totalStudentActive (sede, generation){
var arrayStudents = data[sede][generation]['students'];
var countActive = 0;  
for(i = 0; i < arrayStudents.length; i++){
  if(arrayStudents[i]['active'] == true){
    countActive += 1;
  } 
}
return countActive;
}
totalStudentActive('AQP','2016-2')

/*--Pregunta2: El porcentaje de deserción de estudiantes.*/ 

//var total = data.AQP['2016-2']['students'].length  //calcula el total de estudiantes por sede y promoción

function totalStudentInactive (sede, generation){
var arrayStudents = data[sede][generation]['students'];
var total =arrayStudents.length;
var countInactive = 0;  
//var porcentual = countInactive*100/total;
for(i = 0; i < arrayStudents.length; i++){
  if(arrayStudents[i]['active'] == false){
    countInactive += 1;
  } 
}
return  countInactive*100/total;
}
totalStudentInactive ('AQP','2016-2')





})