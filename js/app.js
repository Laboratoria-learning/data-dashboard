window.addEventListener('load', function(event) {
  var country = document.querySelectorAll('.country');
  var countryChile = document.querySelector('#chile');
  var countryPeru = document.querySelector('#peru');
  var countryMexico = document.querySelector('#mexico');

  function showCountry(event) {
    event.target.nextElementSibling.classList.toggle('display-none');
  }
  countryChile.addEventListener('click', showCountry);
  countryPeru.addEventListener('click', showCountry);
  countryMexico.addEventListener('click', showCountry);

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

  var radioButtonChile = document.querySelectorAll('.cbox-ch');
  var radioButtonMexico = document.querySelectorAll('.cbox-me');
  var radioButtonArequipa = document.querySelectorAll('.cbox-ar');
  var radioButtonLima = document.querySelectorAll('.cbox-lm');
  var country;
  function dataGeneration(event) {
    console.log(event.target.value);

    console.log(country);
  }

  function valueRadioButton() {
    if (radioButtonChile.length !== 0) {
      for (var j = 0; j < radioButtonChile.length; j++) {
        radioButtonChile[j].addEventListener('click', dataGeneration);
      }
      country = 'SCL';
  }
  if (radioButtonMexico.length !== 0){
    for (var i = 0; i < radioButtonMexico.length; i++) {
     radioButtonMexico[i].addEventListener('click', dataGeneration);
    }
    country='CDMX';
  }
  if (radioButtonArequipa.length !== 0){
    for (var j = 0; j < radioButtonArequipa.length; j++) {
     radioButtonArequipa[j].addEventListener('click', dataGeneration);

    }
    country='AQP';
  }
  if (radioButtonLima.length !== 0){
    for (var j = 0; j < radioButtonLima.length; j++) {
     radioButtonLima[j].addEventListener('click', dataGeneration);
    }
    country='LIM';
  }
}

// DATOS DE LAS ALUMNAS
valueRadioButton();

//Funcion para determinar la cantidad de estudiantes que continuaron.
var enrollment = function(branch, generation,status){
var numberStudent = 0;
  for(var i = 0; i < data[branch][generation]['students'].length; i++){
  	if (data[branch][generation]['students'][i]['active'] === status){
  	 numberStudent++;
    }
  }
  return numberStudent;
}

var percentageStudentDropout = 0;

percentageStudentDropout = enrollment('AQP','2017-1',false)/(enrollment('AQP','2017-1',true) + enrollment('AQP','2017-1',false))*100;

console.log('Cantidad de estudiantes que continuan ' + enrollment('AQP','2017-1',true));
console.log('porcentaje que disertaron ' + Math.round(percentageStudentDropout) +'%');


//	La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados

var  achievement = function(branch, generation){
  var percentageScoreStudent = 0;
  //porcentaje de los puntos de la meta 79%
  var percentageGoalScore = 70;
  var maxScoreTech =1800;
  var maxScoreHSE =1200;
  var scoreGoalTech = (percentageGoalScore * maxScoreTech)/100;
  var scoreGoalHSE = (percentageGoalScore * maxScoreHSE)/100;
  var puntajeMeta = 0;
  console.log(scoreGoalTech);
  console.log(scoreGoalHSE);
  var cantStudent=0;
  var promedio=0;

  puntajeMeta=(scoreGoalTech+scoreGoalHSE)/2;
//Buscar a las estudiantes que continuan
//  var cont= enrollment(branch,generation,true);
for(var i = 0; i < data[branch][generation]['students'].length  ; i++){

  if(data[branch][generation]['students'][i]['active']===true)
  {
    var sumaTech=0;
    var sumaHse=0;
    promedio=0;
    //console.log(data['AQP']["2017-1"]['students'][i]['sprints']);
    for (var j = 0; j < data['AQP']["2017-1"]['students'][i]['sprints'].length; j++) {
      // console.log(' st'+ (j+1)+' '  + data['AQP']["2017-1"]['students'][i]['sprints'][j]['score']['tech']);
      sumaTech += data['AQP']["2017-1"]['students'][i]['sprints'][j]['score']['tech'];
      sumaHse +=data['AQP']["2017-1"]['students'][i]['sprints'][j]['score']['hse'];
    }
    promedio=(sumaTech+sumaHse)/6;


    if(puntajeMeta<=promedio){
       cantStudent++;
    }
  }
}
console.log('cantidad '+cantStudent);
return cantStudent;
}

achievement('AQP', '2017-1');








/**********************************************/

/************tech skills*****************/
var techSkills = function(branch, generation, sprint, course,scoreCourse) {
  var maxScoreTech =1800;
  var percentageGoalScore = 70;
  var scoreGoalTech = (percentageGoalScore * maxScoreTech)/100;
  var numberStudent = 0;
  var totalStudent=0;
  var percentageTotalStudent=0;
  //for(var i = 0; i < )
  //console.log(data['AQP']['2016-2']['students']);
  for(var i=0;i<data['AQP']['2016-2']['students'].length;i++){
    if(data['AQP']['2016-2']['students'][i]['active']){
      totalStudent++;
      var arr = data['AQP']['2016-2']['students'][i]['sprints'];
      //console.log(arr);
      for(var j=0;j<arr.length;j++){
        var num = arr[j]['number'];
        if(num==sprint && arr[j]['score'][course]>scoreCourse){
          numberStudent++;
        }
      }
    }
  }
  console.log(totalStudent);
  percentageTotalStudent = (numberStudent/totalStudent)*100;
  //return  numberStudent; AYUDA RETORNO
  console.log(percentageTotalStudent);
  console.log(numberStudent);
  var numf=numberStudent;
  // return numf;

}
techSkills('AQP', '2017-1','1','tech',1260);
techSkills('AQP', '2017-1','1','hse',840);
/**********************************************/
/**********************Student Stisfaccion**********************/

var studentSatisfaction = function(branch, generation, sprint){
  //var arr =data['AQP']['2017-1']['ratings'];
  //console.log();
  var arr = data['AQP']['2016-2']['ratings'];
  var percentageStudentSatisfation;

  for(var i=0;i<arr.length;i++){
    if(arr[i]['sprint'] == sprint){
      percentageStudentSatisfation= arr[i]['student']['cumple']+arr[i]['student']['no-cumple'];
    }
  }
  console.log(percentageStudentSatisfation);
}
studentSatisfaction('AQP', '2016-2','1');



/*****************Teacher Rating******************/
var teacherRating = function(branch, generation, sprint, jediTeacher){
    var arr = data['AQP']['2016-2']['ratings'];
    var teacherRating=0;

    for(var i=0;i<arr.length;i++){
      if(arr[i]['sprint'] == sprint){
        teacherRating = arr[i][jediTeacher];
      }
    }
    console.log(teacherRating);

}
teacherRating('AQP', '2016-2','1','teacher');
teacherRating('AQP', '2016-2','1','jedi');
// teacherRating('AQP', '2016-2','1','nps');



/******************************************/


/*********************NET PROMOTER SCORE*******************/


/**********************************************************/
/************NET PROMOTER SCORE*****************/


var netPromoterScore = function(branch, generation, sprint, npsIn){
    var arr = data['AQP']['2016-2']['ratings'];
    var nps=0;
    var detalle='';

    for(var i=0;i<arr.length;i++){
      if(arr[i]['sprint'] == sprint){
        //console.log(arr[i][npsIn]['promoters']);
        nps = arr[i][npsIn]['promoters'] - arr[i][npsIn]['detractors'];
        detalles = arr[i][npsIn]['promoters'] + ' % Promotores \n' +  arr[i][npsIn]['passive'] + ' % Passive \n' + arr[i][npsIn]['detractors'] + ' % detractors';
      }
    }
    console.log(detalles);
    console.log(nps);
//data['AQP']['2016-2']['ratings'][0]['nps']
}

netPromoterScore('AQP', '2016-2','1','nps');







});
