/*
 * Funcionalidad de tu producto
 */
// selector de sedes

 //tabs overview, students y teacher
var showHide = function(e) {
    var tabs = e.target.dataset.selecttab;
    var overContent = document.getElementById('overview-tab');
    if(tabs === 'overview'){
      var changeOne = overContent.style.display = 'block';
      //mostrar info de overview
      changeOne.toggle('overview-tab');
      //ocultar students y teachers
      changeOne.remove('changeTwo');
    } else if (tabs === 'students'){
      var studentsTab = document.getElementById('students-tab');
      var changeTwo = studentsTab.style.display = 'block';
      //mostrar students
      changeTwo.toggle('students-tab');
      //ocultar overview y teachers
      changeTwo.remove('overview-tab');
    }
  };

  var chargePage = function() {
    var tabElements = document.getElementsByClassName('tabBtn');
    for(var i = 0; i < tabElements.length; i++) {
      tabElements[i].addEventListener('click', showHide);
    }
  };
  chargePage();

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


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
  var studentsCurrent = studentsActive.length + '\n' + '# STUDENTS CURRENTLY ENROLLMENT' ;
  console.log('STUDENTS DROPOUT' + '\t' + studentsDeserte.length);
  var desercion = Math.round(porcentajeDesercion) + '%' + '\t' + 'PERCENTAGE OF DESERTION' ;

  var studentsCurrentEnrollment = document.getElementById('studentsCurrent');
  studentsCurrentEnrollment.textContent = studentsCurrent;

  var dropout = document.getElementById('dropout');
  dropout.textContent = desercion;
}

console.log(desercion('LIM', '2017-2'));

/* DATOS ACHIEVEMENT*/ 

function logroMetas(sede, generacion, sprint) {
  var students = data[sede][generacion]['students'];
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
  console.log('porcentaje que logro la meta:' + '\t' + porcentajeLogroMetas + '%');
  console.log('% del total' + (studentsOverTarget.length + studentsDownTarget.length));
}

console.log(logroMetas('LIM', '2017-1', 1));

/* NET PROMOTER SCORE */ 

function puntajePromotor(sede, generacion) {
  var rating = data[sede][generacion]['ratings'];
  var promoters = [];
  var passive = [];
  var detractors = [];
  var totalNps = [];
  var acumulativeNps = 0;
  var porcentajeAcumulativeNps;
  var porcentajePromotors = 0;
  var porcentajePassive = 0;
  var porcentajeDetractors = 0;
  var totalPromoters = 0;
  var totalPassive = 0;
  var totalDetractors = 0;

  for (var i = 0; i < rating.length; i++) {
    var nps = rating[i].nps.promoters - rating[i].nps.detractors;
    totalNps.push(nps);

    promoters.push(rating[i].nps.promoters);
    passive.push(rating[i].nps.passive);
    detractors.push(rating[i].nps.detractors);

    totalPromoters = totalPromoters + promoters[i];
    totalPassive = totalPassive + passive[i];
    totalDetractors = totalDetractors + detractors[i];
  }
 
  porcentajePromotors = totalPromoters * 100 / (totalPromoters + totalDetractors + totalPassive);
  porcentajeDetractors = totalDetractors * 100 / (totalPromoters + totalDetractors + totalPassive);
  porcentajePassive = totalPassive * 100 / (totalPromoters + totalDetractors + totalPassive);

  console.log('porcentaje de promoters:' + '\t' + porcentajePromotors + '%');
  console.log('porcentaje de detractors:' + '\t' + porcentajeDetractors + '%');
  console.log('porcentaje de passive:' + '\t' + porcentajePassive + '%');

 
  console.log(totalNps.length);

  for (var i = 0; i < totalNps.length; i++) {
    acumulativeNps = acumulativeNps + totalNps[i];
  }
  porcentajeAcumulativeNps = acumulativeNps / totalNps.length;
  console.log('porcentaje acumulado NPS' + '\t' + porcentajeAcumulativeNps + '%');
}

console.log(puntajePromotor('LIM', '2016-2'));

/* TECH SKILLS */ 

function logroMetasTech(sede, generacion, sprint) {
  var students = data[sede][generacion]['students'];
  var studentsOverTarget = [];
  var studentsDownTarget = [];
  var puntajesTech = [];
  var totalPuntajeTech = 0;
  var promedioNotaTech = 0;

  for (var i = 0; i < students.length; i++) {
    if (students[i].sprints[sprint].score['tech'] >= 1260) {
      studentsOverTarget.push(students[i].sprints[sprint].score['tech']);
    } else {
      studentsDownTarget.push(students[i].sprints[sprint].score['tech']);
    }
  }

  for (var i = 0; i < students.length; i++) {
    puntajesTech.push(students[i].sprints[sprint].score['tech']);
    totalPuntajeTech = totalPuntajeTech + puntajesTech[i];
  }
  
  promedioNotaTech = totalPuntajeTech / students.length;
  
  console.log(promedioNotaTech);

  var porcentajeLogroMetasTech = (studentsOverTarget.length * 100) / (studentsOverTarget.length + studentsDownTarget.length);
  console.log('pasaron la meta Tech: ' + '\t' + studentsOverTarget.length);
  console.log('no llegaron a la meta Tech: ' + '\t' + studentsDownTarget.length);
  console.log('porcentaje que logro la meta Tech:' + '\t' + porcentajeLogroMetasTech + '%');
  console.log('% del total' + '\t' + (studentsOverTarget.length + studentsDownTarget.length));
}

console.log(logroMetasTech('AQP', '2016-2', '1'));

/* LIFE  SKILLS */ 

function logroMetasLife(sede, generacion, sprint) {
  var students = data[sede][generacion]['students'];
  var studentsOverTarget = [];
  var studentsDownTarget = [];
  var puntajesHse = [];
  var totalPuntajeHse = 0;
  var promedioNotaHse = 0;

  for (var i = 0; i < students.length; i++) {
    if (students[i].sprints[sprint].score['hse'] >= 840) {
      studentsOverTarget.push(students[i].sprints[sprint].score['hse']);
    } else {
      studentsDownTarget.push(students[i].sprints[sprint].score['hse']);
    }
  }

  for (var i = 0; i < students.length; i++) {
    puntajesHse.push(students[i].sprints[sprint].score['hse']);
    totalPuntajeHse = totalPuntajeHse + puntajesHse[i];
  }
  
  promedioNotaHse = totalPuntajeHse / students.length;
  
  console.log(promedioNotaHse);

  var porcentajeLogroMetasLife = (studentsOverTarget.length * 100) / (studentsOverTarget.length + studentsDownTarget.length);
  console.log('pasaron la meta hse: ' + '\t' + studentsOverTarget.length);
  console.log('no llegaron a la meta hse: ' + '\t' + studentsDownTarget.length);
  console.log('porcentaje que logro la meta hse:' + '\t' + porcentajeLogroMetasLife + '%');
  console.log('% del total' + '\t' + (studentsOverTarget.length + studentsDownTarget.length));
}

console.log(logroMetasLife('AQP', '2016-2', '1'));

/* STUDENT SATISFACTION */ 
function satisfaccionEstudiantes(sede, generacion) {
  var rating = data[sede][generacion]['ratings'];
  var supera = [];
  var cumple = [];
  var noCumple = [];

  for (var i = 0; i < rating.length; i++) {
    
  }
}
