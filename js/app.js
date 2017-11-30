/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`

console.log(data);


// Función que devuelve alumans qye pasan promedio de puntajes y el porcentaje que representan.

function achievement(sede,generation){
  var count = 0;
  var numberRatings = data[sede][generation]['ratings'];
  for (var i = 0; i < numberRatings.length; i++) {
    var ratingStudent = numberRatings[i]['student']['supera'];
    count = count + ratingStudent;
}
  totalStudent = countActive;
  totalSupera = parseInt((countActive*count)/100);
// console.log('Las alumnas que superan el puntaje promedio son: ' + totalSupera + ' Y representan el: ' + count + '%');
}

// función para promedio NPS de todos los sprints

function nps(sede,generation){
  var count = 0;
  var numberRatings = data[sede][generation]['ratings'];
  for (var i = 0; i < numberRatings.length; i++) {
    var averageNps = numberRatings[i]['nps']['promoters'] - numberRatings[i]['nps']['detractors'];
    // console.log(averageNps);
  }
}


var sedeSelected = document.getElementById('select-sede');
var generationSelected = document.getElementById('select-generation');
var sede = '';
var gen = '';
var students = {};
var ratings = {};
var studenDesert = 0;

generationSelected.addEventListener('change', inscription);

function inscription(event) {
  sede = sedeSelected.value;
  gen = generationSelected.value;

  students = data[sede][gen].students;

  var numberRegistered = document.getElementById('numberRegistered');
  numberRegistered.textContent = students.length;
  numberRegistered.setAttribute('class', 'number');
  
  var percent = (studentsDeserted * 100)/students.length;
  
  var studentsDeserted = 0;

  // función que devuelve el porcentaje de alumnas desertadas

  function percentDeserted(){
    for(var i = 0; i<students.length;i++){
      if (students[i].active === false){
        studentsDeserted++;
      } 
    }  
    var percent = parseInt((studentsDeserted*100)/students.length);
    return percent;
  }
  var numberDesert = document.getElementById('numberDesert');
  numberDesert.textContent = percentDeserted();  
  numberDesert.setAttribute('class', 'number');

  // función que devuelve porcentaje de satisfacción de las alumnas

  var sumPercent = 0;
  function satisfied (){
    ratings = data[sede][gen].ratings;
    for(var i = 0;i < ratings.length; i++){
      sumPercent= sumPercent + ratings[i]['nps']['promoters'];
    }

    var averageSatisfied = sumPercent/ratings.length
    return averageSatisfied + '%';
  }

  var alumSatisfied = document.getElementById('alum-satifaction');
  alumSatisfied.textContent = satisfied();
  alumSatisfied.setAttribute('class', 'number');
  
  // función que devuelve el promedio de la evaluación de los maestros
  var sumEvaluation = 0;

  function averageTeacher(){
    ratings = data[sede][gen].ratings;
    for (var i = 0; i < ratings.length; i++) {
      console.log(ratings[i]['teacher']);
      sumEvaluation = sumEvaluation + ratings[i]['teacher'];
    }

    var averageEvaluation = sumEvaluation/ratings.length;
    return averageEvaluation.toFixed(1);
  }
  
  var evaluationTeacher = document.getElementById('eva-teacher');
  evaluationTeacher.textContent = averageTeacher();
  evaluationTeacher.setAttribute('class', 'number');
  
  // función que devuelve el promedio de la evaluación de los jedi master

  function averageJedi(){
    ratings = data[sede][gen].ratings;
    for (var i = 0; i < ratings.length; i++) {
      console.log(ratings[i]['jedi']);
      sumEvaluation = sumEvaluation + ratings[i]['jedi'];
    }

    var averageEvaluation = sumEvaluation / ratings.length;
    return averageEvaluation.toFixed(1);
    }

    var evaluationTeacher = document.getElementById('eva-teacher');
    evaluationTeacher.textContent = averageTeacher();
    evaluationTeacher.setAttribute('class', 'number');
  };


// función que devuelve puntuación promedio de las profesor@s


