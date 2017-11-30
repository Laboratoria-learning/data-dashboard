/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
/*var selectData = document.getElementById('select-data');
var content = document.getElementById('number').innher*/



/*Opcion que accede a el numero de alumnas de AQP*/
var objetoAQP = data.AQP
var ageGeneracion = objetoAQP['2016-2'];
var student = ageGeneracion.students
console.log(student.length);
