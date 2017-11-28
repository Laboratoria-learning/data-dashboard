
window.addEventListener('load', function() {
  var openAnimatedMenu = document.getElementById('open-animated-menu');
  var closeAnimatedMenu = document.getElementById('close-animated-menu');
    
  openAnimatedMenu.addEventListener('click', function() {
    document.getElementById('animated-menu').style.width = '250px';
  });

  closeAnimatedMenu.addEventListener('click', function() {
    document.getElementById('animated-menu').style.width = '0';
  });

});

// ------------> ENROLLMENT - arequipa 2016-II <-----------------

var totalStudentArequipa = data.AQP['2016-2'].students.length;
var studentsArequipa = data.AQP['2016-2'].students;
// recorre la longitud de las estudiantes y muestra a las que desertaron en porcentaje
var desertaron = 0;
for ( var i = 0; i < studentsArequipa.length; i++) {
  if(studentsArequipa[i].active == false) {
    desertaron++;
  }
}
var desertaron = Math.round((desertaron/totalStudentArequipa)*100) + '%';

// Total estudiantes
var totalStudents = document.getElementById('total-student');
var text = document.createElement('p');
text.textContent = totalStudentArequipa;
var leyendaTotalStudents = document.createElement('p');
leyendaTotalStudents.textContent = '# students currently enrolled';
totalStudents.appendChild(text);
totalStudents.appendChild(leyendaTotalStudents);

// porcentaje de alumnas que desertaron
var desertaronPorcentaje = document.getElementById('desertaron-porcentaje');
var textPorcentaje = document.createElement('p');
textPorcentaje.textContent = desertaron;
var leyendaDesertaronPorcentaje = document.createElement('p');
leyendaDesertaronPorcentaje.textContent = '% DROPOUT';
desertaronPorcentaje.appendChild(textPorcentaje);
desertaronPorcentaje.appendChild(leyendaDesertaronPorcentaje);

// ------------> NPS - arequipa 2016-II <-----------------
var box2 = document.getElementById('aqp-nps-sprint1');
var promoS120162 = data.AQP['2016-2'].ratings[0].nps.promoters;
var detracS120162 = data.AQP['2016-2'].ratings[0].nps.detractors;

var parag = document.createElement("p");
var text = document.createTextNode(promoS120162);
parag.appendChild(text);
box2.appendChild(parag);

var parag2 = document.createElement("p");
var text2 = document.createTextNode(detracS120162);
parag2.appendChild(text2);
box2.appendChild(parag2);


// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);