console.log(data);
//console.log(Object.keys(Object.getOwnPropertyNames(data)[1]));
// console.log(data.AQP['2016-2']['students'][0]['active']);

/* DATOS QUE MUESTRA EL ENROLLMENT */ 
function desercion(sede, generacion){
  var students = data[sede][generacion]['students'];
  var studentsActive = [];
  var studentsDeserte = [];
  
  for (var i = 0; i <= students.length-1; i++) {
   
    if (students[i].active === true) {
      studentsActive.push(students[i].active);
    } else {
      studentsDeserte.push(students[i].active);
    }
  }
 
  var porcentajeDesercion = ((studentsDeserte.length * 100/ students.length));
  console.log('STUDENTS CURRENTLY ENROLLMENT'+ '\t'+  studentsActive.length);
  console.log('STUDENTS DROPOUT'+ '\t'+ studentsDeserte.length);
  console.log('PERCENTAGE OF DESERTION'+ '\t' + porcentajeDesercion+'%');
}

console.log(desercion('LIM', '2017-2'));


