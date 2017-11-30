/* DROPDOWN DE MENU */
window.addEventListener('load', function(event) {
  var menu = document.querySelector('.menu');
  var country = document.querySelectorAll('.country');
  var countryChile = document.querySelector('#chile');
  var countryPeru = document.querySelector('#peru');
  var countryMexico = document.querySelector('#mexico');

  function showMenu(event) {
    for (var i = 0; i < country.length; i++) {
      country[i].classList.toggle('display-none');
    }
  }
  function showCountry(event) {
  // console.log(event.target.nextElementSibling);
    event.target.nextElementSibling.classList.toggle('display-none');
  }
  menu.addEventListener('click', showMenu);
  countryChile.addEventListener('click', showCountry);
  countryPeru.addEventListener('click', showCountry);
  countryMexico.addEventListener('click', showCountry);
});

/* TABS */

var tabs = document.querySelectorAll('.tab');
var overviewSection = document.querySelector('#overview');
var studentsSection = document.querySelector('#students');
var teachersSection = document.querySelector('#teachers');

function showTab(event) {
  var tab = event.target.textContent;
  switch (true) {
  case (tab === 'Overview'):
    overviewSection.classList.remove('display-none');
    studentsSection.classList.add('display-none');
    teachersSection.classList.add('display-none');
    break;
  case (tab === 'Students'):
    overviewSection.classList.add('display-none');
    studentsSection.classList.remove('display-none');
    teachersSection.classList.add('display-none');
    break;
  case (tab === 'Teachers'):
    overviewSection.classList.add('display-none');
    studentsSection.classList.add('display-none');
    teachersSection.classList.remove('display-none');
    break;
  default:
    overviewSection.classList.add('display-none');
    studentsSection.classList.add('display-none');
    teachersSection.classList.add('display-none');
    break;
  }
}

for (var i = 0;i < tabs.length;i++) {
  tabs[i].addEventListener('click', showTab);
}

/*variables de data*/
// var branches = data[branch];
// var generations = data[branch][generation];
// var students = data[branch][generation][students];

/* Muestra de información de cada estudiante en tab de estudiantes */
var studentsInfoMainBox = document.querySelector('.students-info');

function createImage(name, photo) {
  var pictureFigEle = document.createElement('figure');
  var pictureImgEle = document.createElement('img');
  pictureImgEle.setAttribute('src', data[branch][generation]['students'][i]['photo']); // foto de generation
  pictureImgEle.setAttribute('alt', data[branch][generation]['students'][i]['name']);
  studentsInfoMainBox.appendChild(pictureImgEle);
}

function addAllImages(generation, branch) {
  for (var i = 0; i < data[branch].length; i++) {
    createImage(data[branch][i], branch);
  }
}

function addImages() {

}

function showAll() {

}

// for (var i = 0; i < data[branch][generation]['students'].length; i++) {
//   var pictureFigEle = document.createElement('figure');
//   studentsInfoMainBox.appendChild(pictureFigEle);
//   var pictureImgEle = document.createElement('img');
//   pictureImgEle.setAttribute('src', data[branch][generation]['students'][i]['photo']); // foto de generation
//   pictureImgEle.setAttribute('alt', data[branch][generation]['students'][i]['name']);
//   studentsInfoMainBox.appendChild(pictureImgEle);
//   console.log(pictureImgEle.getAttribute());

// function addFiguresBox {
//
// }

// Función para determinar la cantidad de estudiantes que continuaron.

  var enrollment = function(branch, generation, status) {
    var numberStudent = 0;
    for (var i = 0; i < data[branch][generation]['students'].length; i++) {
    	if (data[branch][generation]['students'][i]['active'] === status) {
    	 numberStudent++;
      }
    }
    return numberStudent;
  };


  //	La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados

  var achievement = function(branch, generation) {

    var percentageScoreStudent = 0;
    var cantStudent = 0;
    // porcentaje de los puntos de la meta
    var percentageGoalScore = 70;
    var maxScoreTech = 1800;
    var maxScoreHSE = 1200;
    var scoreGoalTech = (percentageGoalScore * maxScoreTech) / 100;
    var scoreGoalHSE = (percentageGoalScore * maxScoreHSE) / 100;
    var puntajeMeta = 0;
    var promedio = 0;
    puntajeMeta = (scoreGoalTech + scoreGoalHSE) / 2;
    // Buscar a las estudiantes que continuan
    for (var i = 0; i < data[branch][generation]['students'].length; i++) {
      if (data[branch][generation]['students'][i]['active'] === true) {
        var sumaTech = 0;
        var sumaHse = 0;
        promedio = 0;
        for (var j = 0; j < data[branch][generation]['students'][i]['sprints'].length; j++) {
          sumaTech += data[branch][generation]['students'][i]['sprints'][j]['score']['tech'];
          sumaHse += data[branch][generation]['students'][i]['sprints'][j]['score']['hse'];
        }
        promedio = (sumaTech + sumaHse) / 6;
        if (puntajeMeta <= promedio) {
          cantStudent++;
        }
      }
    }
    return cantStudent;
  };

  /* ***********tech skills**************** */
  var techSkills = function(branch, generation, sprint, course, scoreCourse) {
    var maxScoreTech = 1800;
    var percentageGoalScore = 70;
    var scoreGoalTech = (percentageGoalScore * maxScoreTech) / 100;
    var numberStudent = 0;
    var totalStudent = 0;
    var percentageTotalStudent = 0;
    for (var i = 0;i < data['AQP']['2016-2']['students'].length;i++) {
      if (data['AQP']['2016-2']['students'][i]['active']) {
        totalStudent++;
        var arr = data['AQP']['2016-2']['students'][i]['sprints'];
        // console.log(arr);
        for (var j = 0; j < arr.length; j++) {
          var num = arr[j]['number'];
          if (num == sprint && arr[j]['score'][course] > scoreCourse) {
            numberStudent++;
          }
        }
      }
    }
    percentageTotalStudent = (numberStudent / totalStudent) * 100;
    return percentageTotalStudent;
  };


  /* *********************Student Stisfaccion********************* */

  var studentSatisfaction = function(branch, generation, sprint) {
    var arr = data[branch][generation]['ratings'];
    var percentageStudentSatisfation;

    for (var i = 0;i < arr.length; i++) {
      if (arr[i][ generation] == sprint) {
        percentageStudentSatisfation = arr[i]['student']['cumple'] + arr[i]['student']['no-cumple'];
      }
    }
    return percentageStudentSatisfation;
  };

  /* ****************Teacher Rating***************** */
  var teacherRating = function(branch, generation, sprint, jediTeacher) {
    var arr = data[branch][generation]['ratings'];
    var teacherRating = 0;
    for (var i = 0; i < arr.length;i++) {
      if (arr[i]['sprint'] == sprint) {
        teacherRating = arr[i][jediTeacher];
      }
    }
    return teacherRating;
  };

  /* ***********NET PROMOTER SCORE**************** */
  var netPromoterScore = function(branch, generation, sprint, npsIn) {
    var arr = data[branch][generation]['ratings'];
    var nps = 0;
    var detalle = '';
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]['sprint'] == sprint) {
        nps = arr[i][npsIn]['promoters'] - arr[i][npsIn]['detractors'];
      }
    }
    return nps;
  };

  var detalleNetPromoterScore = function(branch, generation, sprint, npsIn) {
    var arr = data[branch][generation]['ratings'];
    var nps = 0;
    var detalle = '';
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]['sprint'] == sprint) {
        detalles = arr[i][npsIn]['promoters'] + ' % Promotores \n ' + arr[i][npsIn]['passive'] + ' % Passive \n' + arr[i][npsIn]['detractors'] + ' % detractors';
      }
    }
    return detalles;

  };



  /***************OverView***************/


  var radioButton = document.querySelectorAll('.cbox');

  var country;
  var newarr;
  var value;
  function dataGeneration(event) {
    value = event.target.value;
    newarr = value.split(' ');

    var generationSelection = newarr[0];
    var branchSelection = newarr[1];
    var studentCurrently = document.querySelector('#student-currently');
   var numEnrollment = enrollment(branchSelection, generationSelection, true);
   studentCurrently.children[0].textContent= numEnrollment;
    //
    // var numEnrollment = enrollment(branchSelection, generationSelection, true);
    // var studentCurrently = document.querySelector('#student-currently');
    // var parragraf = document.createElement('p');
    // parragraf.textContent = numEnrollment;
    // studentCurrently.appendChild(parragraf);
    // studentCurrently.insertBefore(parragraf,studentCurrently.children[0]);

    var percentageStudentDropout = 0;
    var studentDropount = document.querySelector('#student-dropount');
    percentageStudentDropout = enrollment(branchSelection, generationSelection , false) / (enrollment(branchSelection, generationSelection, true) + enrollment(branchSelection, generationSelection , false)) * 100;
    studentDropount.children[0].textContent = Math.round(percentageStudentDropout);

    var achievementStudent = document.querySelector('#achievement-student');
    var numberAchievementStudent = achievement(branchSelection, generationSelection);
    achievementStudent.children[0].textContent = numberAchievementStudent ;

    var promoterScore = document.querySelector('#net-promoter-score');
    var porcentajeNetPromoter = netPromoterScore(branchSelection, generationSelection, '1', 'nps');
    promoterScore.children[0].textContent = porcentajeNetPromoter ;

    var detallepromoterScore = document.querySelector('#detalle-net-promoter-score');
    var detalleNetPromoter = detalleNetPromoterScore(branchSelection, generationSelection, '1', 'nps');
    detallepromoterScore.children[0].textContent = detalleNetPromoter ;

    var techSkillsTech = document.querySelector('#techSkillsTech');
    var numberTechSkills = techSkills(branchSelection, generationSelection, '1', 'tech', 1260);
    techSkillsTech.children[0].textContent = Math.round(numberTechSkills);

    var techSkillsHse = document.querySelector('#techSkillsLife');
    var numberHseSkills = techSkills(branchSelection, generationSelection, '1', 'hse', 840);
    techSkillsHse.children[0].textContent = Math.round(numberHseSkills);

    var studentSatisfastionMeet = document.querySelector('#satisfaction');
    var percentageStudent = studentSatisfaction(branchSelection, generationSelection, '1');
    studentSatisfastionMeet.children[0].textContent = percentageStudent;
  }

  function valueRadioButton() {
    for (var j = 0; j < radioButton.length; j++) {
      radioButton[j].addEventListener('click', dataGeneration);
    }
  }
  valueRadioButton();
