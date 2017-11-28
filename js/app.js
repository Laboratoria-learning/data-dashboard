/*
 * Funcionalidad de tu producto
 */
console.log(data);
//console.log(Object.keys(Object.getOwnPropertyNames(data)[1]));
// console.log(data.AQP['2016-2']['students'][0]['active']);
//function desercion(){
  var students = data.AQP['2016-2']['students'];
  var studentsActive = [];
  var studentsDeserte = [];
  
  for (var i = 0; i <= students.length-1; i++) {
   
    if (students[i].active === true) {
      studentsActive.push(students[i].active);
      console.log('activos estudiantes: ' + studentsActive);
    } else {
      studentsDeserte.push(students[i].active);
      console.log('desertores: ' + studentsDeserte);
    }
  }
  debugger;
  var porcentajeDesercion = ((studentsDeserte.length * 100/ students.length));
  console.log('STUDENTS CURRENTLY ENROLLMENT'+ '\t'+  studentsActive.length);
  console.log('STUDENTS DROPOUT'+ '\t'+ studentsDeserte.length);
  console.log('PERCENTAGE OF DESERTION'+ '\t' + porcentajeDesercion+'%');
//}

//console.log(desercion());

// Puedes hacer uso de la base de datos a través de la variable `data`
//

// console.log(Object.keys(data)[0]);


