var selectSede = document.getElementById('select-sede');
var selectGen = document.getElementById('select-generation');
var SEDE = '';
var GEN = '';
var students = {};
SEDE = selectSede.value;
GEN = selectGen.value;
selectGen.addEventListener('change', generation);

function generation(event) {
  SEDE = selectSede.value;
  GEN = selectGen.value;
  students = data[SEDE][GEN].students;
  var register = document.getElementById('register');
  register.textContent = students.length;
  var desertStudents = document.getElementById('desertStudents');
  desertStudents.textContent = desert();

  function desert() {
    var arrActive = [];
    for (i = 0; i < students.length; i++) {
      arrActive.push(students[i].active);
    }
    var countDesert = 0;
    for (j = 0; j < arrActive.length; j++) {
      if (arrActive[j] === false) {
        countDesert++;
      }
    }
    return parseInt(countDesert * 100 / students.length) + '%';
  }
      //Achievements
      var achieve = document.getElementById('achieve');
      achieve.textContent = achieveFunction();
      function achieveFunction() {
          arrAverage = [];
          for (i = 0; i < students.length; i++) {
              techAccum = 0;
              hseAccum = 0;
              count = 0;
              if (students[i].active === true) {
                  for (j = 0; j< students[i].sprints.length; j++) {
                      var tech = students[i].sprints[j].score.tech;
                      techAccum += tech;
                      var hse = students[i].sprints[j].score.hse;
                      hseAccum += hse;
                  }
                  var genTech = techAccum/students[i].sprints.length;
                  var genHse = hseAccum/students[i].sprints.length;
                  arrAverage.push([genTech, genHse]);
              }
              for (k = 0; k < arrAverage.length; k++){
                  if (arrAverage[k][0] >= 1260 && arrAverage[k][1] >= 840) {
                      count++;
              }
              }
            }
            return count
      }
  
      var achievePcent = document.getElementById('achievePcent');
      achievePcent.textContent = parseInt(achieveFunction()*100/(students.length+1)) + '%';
      
      
    // NPS
    var rating = data[SEDE][GEN].ratings;
    var npsPercent = document.getElementById('nps');
    npsPercent.innerHTML = npsfunction();
    function npsfunction() {
      var satisfaction = 0;
      for (i = 0; i < rating.length; i++) {
          var nps = rating[i].nps.promoters - rating[i].nps.detractors;
      
          satisfaction += nps;
      }
      return parseInt(satisfaction/rating.length) + '%'
    };
    
    var satPercent = document.getElementById('satPercent')
    satPercent.textContent = satPrcnt()
    function satPrcnt() {
      var promoters = 0;
      var passive = 0;
      var detractors = 0;
    for (i = 0; i < rating.length; i++) {
        promoters += rating[i].nps.promoters;
        passive += rating[i].nps.passive;
        detractors += rating[i].nps.detractors;
    
    }
    return parseInt(promoters/rating.length) + '% Promoters'+ '\n' + parseInt(passive/rating.length) + '% Passive' + '\n' + parseInt(detractors/rating.length) + '% Detractor';
  }

  //Jedi
  var totalPointsJedi = document.getElementById('totalPointsJedi');
  var totalPointsTeacher = document.getElementById('totalPointsTeacher');
  var percentSatisfaction = document.getElementById('percentSatisfaction');
  ratings = data[SEDE][GEN].ratings;
  var jediPoints = 0;
  var teacherPoints = 0;
  var indiceSatisfaction = 0;
  for (var h = 0; h < ratings.length; h++) {
    jediPoints += ratings[h].jedi;
    teacherPoints += ratings[h].teacher;
    var satisfaction = ratings[h].student;
    // var indiceSatisfaction = ratings[h].student
  }
  var totalJedi = (jediPoints / ratings.length).toFixed(1);
  var totalTeacher = (teacherPoints / ratings.length).toFixed(1);
  totalPointsJedi.textContent = totalJedi;
  totalPointsTeacher.textContent = totalTeacher;
  indiceSatisfaction += ((satisfaction.cumple + satisfaction.supera) / 2);
  percentSatisfaction.textContent = indiceSatisfaction + '%';
  // debugger
  students = data[SEDE][GEN].students;
  // var totalPointHse = 0;
  var totalPointHse = 0;
  for (var y = 0; y < students.length; y++) {
    var pointHse = students[y].sprints;
    for (var p = 0; p < pointHse.length; p++) {
      var Hse = pointHse[p].score;
      totalPointHse += pointHse[p].score;
      // totalPointHse = Hse
    }
  }
  console.log(pointHse);
  console.log(Hse);
};
//};
var submenu = document.getElementById('span');
submenu.addEventListener('click', showMenu);

function showMenu() {
  var listMenu = document.getElementsByClassName('item-list')[0];
  console.log('item-list');
  if (listMenu.classList.contains('hide')) {
    listMenu.classList.remove('hide');
    listMenu.classList.add('show');
  } else {
    listMenu.classList.remove('show');
    listMenu.classList.add('hide');
  }
}
