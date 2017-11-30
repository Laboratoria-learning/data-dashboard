//Variables
var sede = 'LIM';
var promo = '2016-2';

//Navbar
var navElem = document.getElementsByClassName('nav-li');
var mainSection = document.getElementsByClassName('main-section');

//variables
var options = document.getElementsByTagName('option');
var inputsSede = document.getElementsByClassName('sede');
var inputsPromo = document.getElementsByClassName('promo');

//Enrollment
var totalActStudents = document.getElementById('total-act');
var dropoutStudents = document.getElementById('dropout');

//Achievments
var studentsTar = document.getElementById('students-tar');
var studentsTarPer = document.getElementById('students-tar-per');
var studentsTotal = document.getElementById('total-tar');

//Promoter Score
var netScore = document.getElementById('net-score');
var promoters = document.getElementById('promoters');
var passive = document.getElementById('passive');
var detractors = document.getElementById('detractors');

//Tech Skills
var currentSprintTech = 1;
var selectTech = document.getElementById('tech-sprints');
var techSprintNote = document.getElementById('tech-skills');
var techSprintPer = document.getElementById('students-tar-tech');

//Life Skills
var currentSprintHse = 1;
var selectHse = document.getElementById('hse-sprints');
var hseSprintNote = document.getElementById('life-skills');
var hseSprintPer = document.getElementById('students-tar-hse');

//Student Satisfaction
var studentSatisfac = document.getElementById('student-satisfaction');

//Teacher Rating
var teacherRated = document.getElementById('teacher-rating');

//Jedi Rated
var jediRated = document.getElementById('JediMaster-rating');

//Eventos del nav
var navStudents = document.getElementById('estudiantes');
var containerStudents = document.getElementsByClassName('container-students')[0];

//Sedes

//AQP, CDMX, LIM, SCL
function selectSede () {
  var firstPromAqp = document.getElementById('form-aqp').children[0].firstChild;
  var firstPromCdmx = document.getElementById('form-cdmx').children[0].firstChild;
  var firstPromScl = document.getElementById('form-scl').children[0].firstChild;
  var firstPromLim = document.getElementById('form-lim').children[0].firstChild;
  for (var i = 0; i < inputsSede.length; i++) {
    inputsSede[i].addEventListener('click',function () {
      sede = this.value;
      if (sede === 'AQP') {
        firstPromAqp.checked = true;
        promo = firstPromAqp.value;
        firstPromLim.checked = false;
        firstPromScl.checked = false;
        firstPromCdmx.checked = false;
      } else if (sede === 'CDMX') {
        firstPromCdmx.checked = true;
        promo = firstPromCdmx.value;
        firstPromLim.checked = false;
        firstPromScl.checked = false;
        firstPromAqp.checked = false;
      } else if (sede === 'SCL') {
        firstPromScl.checked = true;
        promo = firstPromScl.value;
        firstPromLim.checked = false;
        firstPromCdmx.checked = false;
        firstPromAqp.checked = false;
      } else if (sede === 'LIM') {
        firstPromLim.checked = true;
        promo = firstPromLim.value;
        firstPromCdmx.checked = false;
        firstPromScl.checked = false;
        firstPromAqp.checked = false;
      }
      createSelect(selectTech);
      createSelect(selectHse);
      techSkills();
      softSkills();
      studentSatisfaction();
      teacherRating();
      jediMaster();
      createStudents();
      drawSeriesChart();
      drawLineColors();
      drawLineColorsPromoter();
      drawChartTech();
    })
  }
}
//Promos
//2016-2 2017-1 2017-2
function selectPromo() {
  for (var i = 0; i < inputsPromo.length; i++) {
    inputsPromo[i].addEventListener('click',function () {
      var current = this;
      promo = this.value;
      for (var i = 0; i < inputsPromo.length; i++) {
        if (current != inputsPromo[i]) {
          inputsPromo[i].checked = false;
        }
      }
      createSelect(selectTech);
      createSelect(selectHse);
      techSkills();
      softSkills();
      studentSatisfaction();
      teacherRating();
      jediMaster();
      createStudents();
      drawSeriesChart();
      drawLineColors();
      drawLineColorsPromoter();
      drawChartTech();
    })
  }
}
selectSede();
selectPromo();


//Enrollment
function enrollment(act,inac) {
  active = 0;
  inactive = 0;
  for (var i = 0; i < dataStudents[sede][promo].students.length; i++) {
    if (dataStudents[sede][promo].students[i].active === true) {
      active++;
    } else if (dataStudents[sede][promo].students[i].active === false) {
      inactive++;
    }
  }
  totalActStudents.textContent = active;
  dropoutStudents.textContent = Math.round(((inactive/(active+inactive))*100)*10)/10 + ' %';
  return enrollment[act] = {
    act: active,
    inac: inactive,
  }
}

//Function para saber el achievement
function achievement () {

  var studentsAchieve = 0;
  var studentsNoAchieve = 0;
  for (var i = 0; i < dataStudents[sede][promo].students.length; i++){
    var sprintsNumber = dataStudents[sede][promo].students[i].sprints.length;
    var totalTech = 0;
    var totalHse = 0;
    for (var j = 0; j < dataStudents[sede][promo].students[i].sprints.length; j++){
      var techNote = dataStudents[sede][promo].students[i].sprints[j].score.tech;
      var hseNote = dataStudents[sede][promo].students[i].sprints[j].score.hse;
      totalTech += techNote;
      totalHse += hseNote;
    }

    if(totalTech/sprintsNumber >= 1260 && totalHse/sprintsNumber >= 840) {
      studentsAchieve ++;
    } else {
      studentsNoAchieve ++;
    }
  }
  
  studentsTar.textContent = studentsAchieve;
  studentsTarPer.textContent = (studentsAchieve/(studentsAchieve+studentsNoAchieve))*100 + ' %';
  studentsTotal.textContent = studentsAchieve+studentsNoAchieve;
}
achievement();

//Funcion NPS

function nps () {
  var sprints = dataStudents[sede][promo].ratings.length;
  var promot = 0;
  var passiv = 0;
  var detract = 0;
  for (var i = 0; i < dataStudents[sede][promo].ratings.length; i++) {
    promot += dataStudents[sede][promo].ratings[i].nps.promoters;
    passiv += dataStudents[sede][promo].ratings[i].nps.passive;
    detract += dataStudents[sede][promo].ratings[i].nps.detractors;
  }
  netScore.textContent = promot/sprints - detract/sprints + ' %';
  promoters.textContent = promot/sprints + ' %';
  passive.textContent = passiv/sprints + ' %';
  detractors.textContent = detract/sprints + ' %';
}
nps();

//Select Sprint Tech
function createSelect (select) {
  var sprints = dataStudents[sede][promo].ratings.length;
  while (select.firstChild) {
    select.removeChild(select.firstChild);
  }
  for ( var i = 0; i < sprints; i++) {
    var optionTech = document.createElement('option');
    select.appendChild(optionTech);
    optionTech.value = i+1;
    optionTech.textContent = 'Sprint' + ' ' + (i+1);
  }
}
createSelect(selectTech);
createSelect(selectHse);

//Seleccionar sprint tech
function selectSprintTech () {
  selectTech.addEventListener('change', function () {
  currentSprintTech = this.value;
  techSkills();
  console.log (currentSprintTech);
  return currentSprintTech;
  })
  return currentSprintTech;
}


//Selecionar sprint soft

function selectSprintHse () {
  selectHse.addEventListener('change', function () {
  currentSprintHse = this.value;
  softSkills();
  console.log (currentSprintHse);
  return currentSprintHse;
  })
  return currentSprintHse;
}

selectSprintTech ();
selectSprintHse ();

//Tech skils
function techSkills () {
  var techBigger = 0;
  for (var i = 0; i < dataStudents[sede][promo].students.length; i++) {
    if (dataStudents[sede][promo].students[i].active === true) {
      var techNote = dataStudents[sede][promo].students[i].sprints[currentSprintTech-1].score.tech;
      if (techNote >= 1260){
        techBigger++;
      }
    }
  }
  techSprintNote.textContent = techBigger;
  number = techBigger/(enrollment().act+enrollment().inac)*100;
  techSprintPer.textContent = Math.round(number * 10 ) /10 + ' %';
  return Math.round(number * 10 ) /10 ;
}

techSkills();

function softSkills () {
  var hseBigger = 0;
  for (var i = 0; i < dataStudents[sede][promo].students.length; i++) {
    if (dataStudents[sede][promo].students[i].active === true) {
      var hseNote = dataStudents[sede][promo].students[i].sprints[currentSprintHse-1].score.hse;
      if (hseNote >= 840){
        hseBigger++;
      }
    }
  }
  hseSprintNote.textContent = hseBigger;
  number = hseBigger/(enrollment().act+enrollment().inac)*100
  hseSprintPer.textContent = Math.round(number *10) /10 + ' %';

}

softSkills();

//Student Satisfaction

function studentSatisfaction () {
  var sprintSatis = 0;
  for (var i = 0; i < dataStudents[sede][promo].ratings.length; i++) {
    var satisSup = dataStudents[sede][promo].ratings[i].student.supera;
    var satisCumple = dataStudents[sede][promo].ratings[i].student.cumple;
    sprintSatis += (satisSup + satisCumple);
  }
  number = sprintSatis/(dataStudents[sede][promo].ratings.length*100)*100
  studentSatisfac.textContent = Math.round( number *10 )/10 + ' %';
}

studentSatisfaction();

//Teacher Rating

function teacherRating () {
  var teacherRat = 0;
  for (var i = 0; i < dataStudents[sede][promo].ratings.length; i++) {
    var teacherScore = dataStudents[sede][promo].ratings[i].teacher;
    teacherRat += teacherScore;
  } 
  number = (teacherRat/dataStudents[sede][promo].ratings.length)*10/10;
  teacherRated.textContent = Math.round(number * 10 )/10;
}

teacherRating();

function jediMaster () {
  var jedi = 0;
  for (var i = 0; i < dataStudents[sede][promo].ratings.length; i++) {
    var jediScore = dataStudents[sede][promo].ratings[i].jedi;
    jedi += jediScore;
  }
  number = (jedi/dataStudents[sede][promo].ratings.length)*10/10;
  jediRated.textContent = Math.round( number * 10 ) / 10;
}

jediMaster();

function sprintsNoteTech(sp1b, sp1l, sp2b, sp2l, sp3b, sp3l, sp4b, sp4l) {

  var sprint1big = 0;
  var sprint1low = 0;
  var sprint2big = 0;
  var sprint2low = 0;
  var sprint3big = 0;
  var sprint3low = 0;
  var sprint4big = 0;
  var sprint4low = 0;
  for (var i = 0; i< dataStudents[sede][promo].students.length; i++){
    for (var j = 0; j<dataStudents[sede][promo].students[i].sprints.length; j++){
      var techNote = dataStudents[sede][promo].students[i].sprints[j].score.tech;
      if (j === 0) {
        if (techNote >= 840) {
          sprint1big ++;
        } else {
          sprint1low ++
        }
      } else if (j === 1) {
        if (techNote >= 840) {
          sprint2big ++;
        } else {
          sprint2low ++;
        }
      } else if (j === 2) {
        if (techNote >= 840) {
          sprint3big ++;
        } else {
          sprint3low ++;
        }
      } else if (j === 3) {
        if (techNote >= 840) {
          sprint4big ++;
        } else {
          sprint4low ++;
        }
      }
    }
  }
  return sprintsNoteTech[sp1b] = {
    sp1b: sprint1big,
    sp1l: sprint1low,
    sp2b: sprint2big,
    sp2l: sprint2low,
    sp3b: sprint3big,
    sp3l: sprint3low,
    sp4b: sprint4big,
    sp4l: sprint4low,
  }
}


//Function para saber las notas Hse de cada sprint
function sprintsNoteHse(sp1b, sp1l, sp2b, sp2l, sp3b, sp3l, sp4b, sp4l) {
  var sprint1big = 0;
  var sprint1low = 0;
  var sprint2big = 0;
  var sprint2low = 0;
  var sprint3big = 0;
  var sprint3low = 0;
  var sprint4big = 0;
  var sprint4low = 0;
  for (var i = 0; i< dataStudents[sede][promo].students.length; i++){
    for (var j = 0; j<dataStudents[sede][promo].students[i].sprints.length; j++){
      var hseNote = dataStudents[sede][promo].students[i].sprints[j].score.hse;
      if (j === 0) {
        if (hseNote >= 840) {
          sprint1big ++;
        } else {
          sprint1low ++
        }
      } else if (j === 1) {
        if (hseNote >= 840) {
          sprint2big ++;
        } else {
          sprint2low ++;
        }
      } else if (j === 2) {
        if (hseNote >= 840) {
          sprint3big ++;
        } else {
          sprint3low ++;
        }
      } else if (j === 3) {
        if (hseNote >= 840) {
          sprint4big ++;
        } else {
          sprint4low ++;
        }
      }
    }
  }
  return sprintsNoteHse[sp1b] = {
    sp1b: sprint1big,
    sp1l: sprint1low,
    sp2b: sprint2big,
    sp2l: sprint2low,
    sp3b: sprint3big,
    sp3l: sprint3low,
    sp4b: sprint4big,
    sp4l: sprint4low,
  }
}

//Funcion navegar
function toggleSection (elem){
  for (var i=0; i<elem.length; i++) {
    elem[i].addEventListener('click', showSections);
  }
}
function showSections(){
  for(var i=0; i<mainSection.length; i++){
    if(this.dataset.target === mainSection[i].dataset.target){
      if(mainSection[i].classList.contains('ocultar')){
        mainSection[i].classList.remove('ocultar');
      }
    } else{
      mainSection[i].classList.add('ocultar');
    }
  }
}
toggleSection(navElem);

//Crear studiantes
function createStudents() {
  while (containerStudents.firstChild) {
    containerStudents.removeChild(containerStudents.firstChild);
  }
  for (var i = 0; i < dataStudents[sede][promo].students.length; i++) {
    if (dataStudents[sede][promo].students[i].active === true) {
      var singleStudent = document.createElement('div');
      var studentImage = document.createElement('img');
      var studentName = document.createElement('h2');
      var containerTechSkills = document.createElement('div');
      var containerSoftSkills = document.createElement('div');
      var teckSkillsSingle = document.createElement('span');
      var softSkillsSingle = document.createElement('span');
      containerStudents.appendChild(singleStudent);
      singleStudent.classList.add('single-student');
      studentImage.src = dataStudents[sede][promo].students[i].photo;
      studentName.textContent = dataStudents[sede][promo].students[i].name;
      var promedioTech = 0;
      var promedioHse = 0;
      var sprints = dataStudents[sede][promo].students[i].sprints.length
      for (var j = 0; j < dataStudents[sede][promo].students[i].sprints.length; j++) {
        var techNote = dataStudents[sede][promo].students[i].sprints[j].score.tech;
        promedioTech += techNote;
        var hseNote = dataStudents[sede][promo].students[i].sprints[j].score.hse;
        promedioHse += hseNote;
      }
      teckSkillsSingle.textContent = Math.round((((promedioTech/sprints)/1800)*100)*10/10) + ' %';
      softSkillsSingle.textContent = Math.round((((promedioHse/sprints)/1200)*100)*10/10) + ' %';
      singleStudent.appendChild(studentImage);
      singleStudent.appendChild(studentName);
      singleStudent.appendChild(containerTechSkills);
      singleStudent.appendChild(containerSoftSkills);
      containerTechSkills.appendChild(teckSkillsSingle);
      containerTechSkills.classList.add('container-tech');
      containerSoftSkills.appendChild(softSkillsSingle);
      containerSoftSkills.classList.add('container-soft');
    }

  }
}
createStudents();


//Funciones chart 

function achievementArray() {
  var array = [];
  for (var i = 0 ; i < dataStudents[sede][promo].ratings.length; i++) {
    array.push([i,dataStudents[sede][promo].ratings[i].nps.promoters])
  }
  return array;
}
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(dataStudents);
