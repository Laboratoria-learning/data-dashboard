// Lugares seleccionados de la data
var Arequipa = data.AQP;
// Dentro de AQP seleccionamos promocion 16-2
var prom1AQP = Arequipa['2016-2'];
// var studentsPromOne = prom1AQP['students'];
var prom2AQP = Arequipa['2017-1'];
// var studentsPromTwo = prom2AQP['students'];
var Mexico = data.CDMX;
var prom1MX = Mexico['2017-1'];
var prom2MX = Mexico['2017-2'];

var Lima = data.LIM;
var prom1LM = Lima['2016-2'];
var prom2LM = Lima['2017-1'];
var prom3LM = Lima['2017-2'];

var Chile = data.SCL;
var prom1CHL = Chile['2016-2'];
var prom2CHL = Chile['2017-1'];
var prom3CHL = Chile['2017-2'];


// dentro del enrollment
var enrollment = document.getElementById('enrollment');
// titulo 
var titleEn = document.createElement('h1');
titleEn.innerText = 'ENROLLMENT';
titleEn.classList.add('titleStyle');
enrollment.appendChild(titleEn);
// cantidad y deserciones
var currentStudents = document.createElement('h2');
var description = document.createElement('span');
function StudentsAll(currentStudents) {
  
};
description.innerText = '# STUDENTS CURRENTLY ENROLLED';
enrollment.appendChild(currentStudents);
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);