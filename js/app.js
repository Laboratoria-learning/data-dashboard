/*
 * Funcionalidad de tu producto
 */
console.log(data);

// total de estudiantes presentes por sede y generacion

var studentsLIM20162 = data.LIM['2016-2'].students;
var studentsLIM20171 = data.LIM['2017-1'].students;
var studentsLIM20172 = data.LIM['2017-2'].students;

// por generacion:

var numEstudentsLIM20162 = data.LIM['2016-2'].students.length + 1;
console.log(numEstudentsLIM20162);
var numEstudentsLIM20171 = data.LIM['2017-1'].students.length + 1;
console.log(numEstudentsLIM20171);
var numEstudentsLIM20172 = data.LIM['2017-2'].students.length + 1;
console.log(numEstudentsLIM20172);
// por sede:

var numberEstudentsSeatLIM = [numEstudentsLIM20162, numEstudentsLIM20171, numEstudentsLIM20172];
sumEstudentsLIM = 0;
for (var i = 0; i < numberEstudentsSeatLIM.length; i++) {
  sumEstudentsLIM = sumEstudentsLIM + numberEstudentsSeatLIM[i];
};
console.log(sumEstudentsLIM);// total de alumnas sede LIM
