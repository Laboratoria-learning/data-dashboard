
/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
/*var selectData = document.getElementById('select-data');
var content = document.getElementById('number').innher*/

var ARRSEDE = Object.keys(data);
var SEDE;
for (var i=0;i<ARRSEDE.length;i++)
{
  SEDE=ARRSEDE[i];
}
console.log(SEDE);
console.log(ARRSEDE);

for (var j=0; j<ARRSEDE.length; j++)
{
  
}
/*Opcion que accede a el numero de alumnas de AQP*/
var objetoAQP = data.AQP;
var ageGeneracion = objetoAQP['2016-2'];
var student = ageGeneracion.students
console.log(arrSede);//15
console.log(data);

/*creando menu acordion de año y generacion*/
var arrSede = data.LIM;
var sedeLima = Object.keys(arrSede);
console.log(sedeLima);

var sedes = {};
sedes['slm'] = sedeLima
sedes['saqp'] = []
sedes['ssdl'] = []
sedes['scmx'] = []

var dataSelect = document.getElementById('select-data');
dataSelect.addEventListener('change', dataBase);

function dataBase(event) {

}






/*var baseGeneration = {};
baseGeneration['slm'] =['2016-2', '2017-1', '2017-2'];
baseGeneration['saqp'] =['2016-2', '2017-1'];
baseGeneration['slm'] =['2016-2', '2017-1', '2017-2'];*/
