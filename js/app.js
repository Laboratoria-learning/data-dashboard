console.log(data);
// console.log(Object.keys(Object.getOwnPropertyNames(data)[1]));
// console.log(data.AQP['2016-2']['students'][0]['active']);

/* DATOS QUE MUESTRA EL ENROLLMENT */ 
function desercion(sede, generacion) {
  var students = data[sede][generacion]['students'];
  var studentsActive = [];
  var studentsDeserte = [];
  
  for (var i = 0; i <= students.length - 1; i++) {
    if (students[i].active === true) {
      studentsActive.push(students[i].active);
    } else {
      studentsDeserte.push(students[i].active);
    }
  }
 
  var porcentajeDesercion = ((studentsDeserte.length * 100 / students.length));
  console.log('STUDENTS CURRENTLY ENROLLMENT' + '\t' + studentsActive.length);
  console.log('STUDENTS DROPOUT' + '\t' + studentsDeserte.length);
  console.log('PERCENTAGE OF DESERTION' + '\t' + porcentajeDesercion + '%');
}

console.log(desercion('LIM', '2017-2'));

/* DATOS ACHIEVEMENT*/ 

function logroMetas(sede, generacion, sprint) {
  // debugger;
  var students = data[sede][generacion]['students'];
  // var sprint = data[sede][generacion]['students']['sprints']['number'];
  var studentsOverTarget = [];
  var studentsDownTarget = [];

  for (var i = 0; i < students.length; i++) {
    for (var j = 0; j < students[i].sprints.length; j++) {
      if (students[i].sprints[j].score['tech'] >= 1260 && students[i].sprints[j].score['hse'] >= 840) {
        studentsOverTarget.push(students[i].sprints[j]);
      } else {
        studentsDownTarget.push(students[i].sprints[j]);
      }
    }
  }
  
  var porcentajeLogroMetas = (studentsOverTarget.length * 100) / (studentsOverTarget.length + studentsDownTarget.length);
  console.log('pasaron la meta: ' + '\t' + studentsOverTarget.length);
  console.log('no llegaron a la meta: ' + '\t' + studentsDownTarget.length);
  console.log('porcentaje que logro la meta:' + '\t' + porcentajeLogroMetas);
}

console.log(logroMetas('LIM', '2017-1', 1));

/* */ 
