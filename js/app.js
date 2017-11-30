/*
 * Funcionalidad de tu producto
 */
// selector de sedes

// tabs overview, students y teacher
var showHide = function(e) {
  var tabs = e.target.dataset.selecttab;
  var overContent = document.getElementById('overview-tab');
  if (tabs === 'overview') {
    var changeOne = overContent.style.display = 'block';
    // mostrar info de overview
    changeOne.toggle('overview-tab');
    // ocultar students y teachers
    changeOne.remove('changeTwo');
  } else if (tabs === 'students') {
    var studentsTab = document.getElementById('students-tab');
    var changeTwo = studentsTab.style.display = 'block';
    // mostrar students
    changeTwo.toggle('students-tab');
    // ocultar overview y teachers
    changeTwo.remove('overview-tab');
  }
};

var chargePage = function() {
  var tabElements = document.getElementsByClassName('tabBtn');
  for (var i = 0; i < tabElements.length; i++) {
    tabElements[i].addEventListener('click', showHide);
  }
};
chargePage();

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


/** **************DATOS QUE MUESTRA EL ENROLLMENT ***********/ 
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
  var studentsCurrent = studentsActive.length;
  console.log('STUDENTS DROPOUT' + '\t' + studentsDeserte.length);
  var desercion = Math.round(porcentajeDesercion) + '%';

  var studentsCurrentEnrollment = document.getElementById('studentsCurrent');
  studentsCurrentEnrollment.innerHTML = studentsCurrent + '<br>' + ' # STUDENTS CURRENTLY ENROLLMENT' ;

  var dropout = document.getElementById('dropout');
  dropout.innerHTML = desercion + '<br>' + ' % DROPOUT';
}

console.log(desercion('LIM', '2016-2'));

/** ************* DATOS ACHIEVEMENT********************/ 

function logroMetas(sede, generacion, sprint) {
  var students = data[sede][generacion]['students'];
  var studentsOverTarget = [];
  var studentsDownTarget = [];

  /* alcanzaron la metaacumulado
  for (var i = 0; i < students.length; i++) {
    for (var j = 0; j < students[i].sprints.length; j++) {
      if (students[i].active === true) {
        if ((students[i].sprints[j].score.tech >= 1260) && (students[i].sprints[j].score.hse >= 840)) {
          studentsOverTarget.push(students[i].sprints[j]);
        } else {
          studentsDownTarget.push(students[i].sprints[j]);
        }
      }
    }
  }
  var porcentajeLogroMetas = (studentsOverTarget.length / students[0].sprints.length * 100) / (studentsOverTarget.length / students[0].sprints.length + studentsDownTarget.length / students[0].sprints.length);
  console.log('pasaron la meta: ' + '\t' + studentsOverTarget.length / students[0].sprints.length);
  console.log('no llegaron a la meta: ' + '\t' + studentsDownTarget.length / students[0].sprints.length);
  console.log('porcentaje que logro la meta:' + '\t' + porcentajeLogroMetas + '%');
  console.log('% del total' + (studentsOverTarget.length / students[0].sprints.length + studentsDownTarget.length / students[0].sprints.length));
} */
  for (var i = 0; i < students.length; i++) {
    if (students[i].active === true) {
      if ((students[i].sprints[sprint].score.tech >= 1260) && (students[i].sprints[sprint].score.hse >= 840)) {
        studentsOverTarget.push(students[i].sprints[sprint]);
      } else {
        studentsDownTarget.push(students[i].sprints[sprint]);
      }
    } else {

    }
  }
  
  var porcentajeLogroMetas = (studentsOverTarget.length * 100) / (studentsOverTarget.length + studentsDownTarget.length);
  
  var studentsTarget = studentsOverTarget.length;
  console.log('no llegaron a la meta: ' + '\t' + studentsDownTarget.length);
  var porcentajeAchievement = Math.round(porcentajeLogroMetas) + '%';
  var totalStudents = '% OF TOTAL THE (' + (studentsOverTarget.length + studentsDownTarget.length) + ')';

  var studentsMeetTarget = document.getElementById('studentTarget');
  studentsMeetTarget.innerHTML = studentsTarget + '<br>' + '# STUDENTS THE MEET THE TARGET';

  var porcentajeAchievementShow = document.getElementById('porcentajeAchievement');
  porcentajeAchievementShow.innerHTML = porcentajeAchievement + '<br>' + totalStudents;
}

console.log(logroMetas('LIM', '2016-2', '0'));

/** ************** NET PROMOTER SCORE ****************/ 

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

  var promoters = (porcentajePromotors + '%' + '\t' + 'porcentaje de promoters');
  var detractors = (porcentajeDetractors + '%' + '\t' + 'porcentaje de detractors');
  var passive = (porcentajePassive + '%' + '\t' + 'porcentaje de passive');

  var porcentajeIndividual = document.getElementById('porcentajeVarios');
  porcentajeIndividual.innerHTML = promoters + '<br>' + passive + '<br>' + detractors;
  console.log(totalNps.length);

  for (var i = 0; i < totalNps.length; i++) {
    acumulativeNps = acumulativeNps + totalNps[i];
  }

  porcentajeAcumulativeNps = acumulativeNps / totalNps.length;

  var cumulativeNps = porcentajeAcumulativeNps + '%';

  var cumulativeNpsShow = document.getElementById('cumulativeNps');
  cumulativeNpsShow.innerHTML = cumulativeNps + '<br>' + '% CUMULATIVE NPS';
}

console.log(puntajePromotor('LIM', '2016-2'));

/** ********** TECH SKILLS *******************/ 

function logroMetasTech(sede, generacion, sprint) {
  var students = data[sede][generacion]['students'];
  var studentsOverTarget = [];
  var studentsDownTarget = [];
  var puntajesTech = [];
  var totalPuntajeTech = 0;
  var promedioNotaTech = 0;
  for (var i = 0; i < students.length; i++) {
    if (students[i].active === true) {
      if (students[i].sprints[sprint].score['tech'] >= 1260) {
        studentsOverTarget.push(students[i].sprints[sprint].score['tech']);
      } else {
        studentsDownTarget.push(students[i].sprints[sprint].score['tech']);
      }
    }
  }
  
  for (var i = 0; i < students.length; i++) {
    if (students[i].active === true) {
      puntajesTech.push(students[i].sprints[sprint].score['tech']);
    }
  }

  for (var i = 0; i < puntajesTech.length; i++) {
    totalPuntajeTech = totalPuntajeTech + puntajesTech[i];
  }
  
  promedioNotaTech = totalPuntajeTech / puntajesTech.length;

  var promedioTech = document.getElementById('promedioTech');
  promedioTech.innerHTML = Math.round(promedioNotaTech) + '<br>' + 'average score';
  
  var porcentajeLogroMetasTech = (studentsOverTarget.length * 100) / (studentsOverTarget.length + studentsDownTarget.length);
  
  var studentsTargetTech = studentsOverTarget.length;
  var studentsTargetTechShow = document.getElementById('targetTech');
  studentsTargetTechShow.innerHTML = studentsTargetTech + '<br>' + '# STUDENT THE MEET THE TARGET';

  console.log('no llegaron a la meta Tech: ' + '\t' + studentsDownTarget.length);

  var porcentajeTargetTech = porcentajeLogroMetasTech + '%';
  var totalTech = '% del total (' + (studentsOverTarget.length + studentsDownTarget.length) + ')';

  var porcentajeTargetTechShow = document.getElementById('porcentajeTargetTech');
  porcentajeTargetTechShow.innerHTML = porcentajeTargetTech + '<br>' + totalTech;  
}

console.log(logroMetasTech('LIM', '2016-2', '0'));

/** ****** LIFE  SKILLS *****************/ 

function logroMetasLife(sede, generacion, sprint) {
  var students = data[sede][generacion]['students'];
  var studentsOverTarget = [];
  var studentsDownTarget = [];
  var puntajesHse = [];
  var totalPuntajeHse = 0;
  var promedioNotaHse = 0;

  for (var i = 0; i < students.length; i++) {
    if (students[i].active === true) {
      if (students[i].sprints[sprint].score['hse'] >= 840) {
        studentsOverTarget.push(students[i].sprints[sprint].score['hse']);
      } else {
        studentsDownTarget.push(students[i].sprints[sprint].score['hse']);
      }
    }
  }

  for (var i = 0; i < students.length; i++) {
    if (students[i].active === true) {
      puntajesHse.push(students[i].sprints[sprint].score['hse']);
    }
  }
  
  for (var i = 0; i < puntajesHse.length; i++) {
    totalPuntajeHse = totalPuntajeHse + puntajesHse[i];
  }

  promedioNotaHse = totalPuntajeHse / puntajesHse.length;
  
  var promedioHse = document.getElementById('promedioHse');
  promedioHse.innerHTML = Math.round(promedioNotaHse) + '<br>' + 'average score';

  var porcentajeLogroMetasLife = (studentsOverTarget.length * 100) / (studentsOverTarget.length + studentsDownTarget.length);
  
  var targetHse = studentsOverTarget.length;
  var targetHseShow = document.getElementById('targetHse');
  targetHseShow.innerHTML = targetHse + '<br>' + 'STUDENT THE MEET THE TARGET';
  console.log('no llegaron a la meta hse: ' + '\t' + studentsDownTarget.length);
  
  var porcentajeTargetHse = Math.round(porcentajeLogroMetasLife) + '%';
  var totalHse = '% del total (' + (studentsOverTarget.length + studentsDownTarget.length) + ')';

  var porcentajeTargetHseShow = document.getElementById('porcentajeTargetHse');
  porcentajeTargetHseShow.innerHTML = porcentajeTargetHse + '<br>' + totalHse;
}

console.log(logroMetasLife('LIM', '2016-2', '0'));

/** ****************** STUDENT SATISFACTION ****************/ 
function satisfaccionEstudiantes(sede, generacion) {
  var rating = data[sede][generacion]['ratings'];
  var supera = [];
  var cumple = [];
  var noCumple = [];
  var totalExcede = 0;

  for (var i = 0; i < rating.length; i++) {
    if (rating[i].student.supera) {
      supera.push(rating[i].student.supera);
    } 
    if (rating[i].student.cumple) {
      cumple.push(rating[i].student.cumple);
    }
    if (rating[i].student['no-cumple']) {
      noCumple.push(rating[i].student.noCumple);
    }
  }

  for (var i = 0; i < supera.length; i++) {
    totalExcede = totalExcede + supera[i] + cumple[i];
  }

  var porcentajeSupera = totalExcede / supera.length;
  
  var studentSatisfaction = document.getElementById('studentSatisfaction');
  studentSatisfaction.innerHTML = Math.round(porcentajeSupera) + '<br>' + '% MEETING OR EXCEEDING EXPECTATIONS(CUMULATIVE)';
}

console.log(satisfaccionEstudiantes('LIM', '2016-2'));

/** ************* TEACHER RATING ************ */

function calificacionMaestros(sede, generacion) {
  var rating = data[sede][generacion]['ratings'];
  var calificacion = [];
  var sumCalificacion = 0;

  for (var i = 0; i < rating.length; i++) {
    calificacion.push(rating[i].teacher);
  }
  
  for (var i = 0; i < calificacion.length; i++) {
    sumCalificacion = sumCalificacion + calificacion[i];
  }

  var calificacionGeneralTeacher = sumCalificacion / calificacion.length;

  var overallTeacher = document.getElementById('calificactionGeneral');
  overallTeacher.innerHTML = Math.round(overallTeacher) + '<br>' + 'OVERALL TEACHER RATING(CUMULATIVE)';
}

console.log(calificacionMaestros('LIM', '2016-2'));