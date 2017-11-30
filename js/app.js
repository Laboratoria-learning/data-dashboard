console.log(data);

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

  function percentDeserted() {
    for (var i = 0; i < students.length; i++) {
      if (students[i].active === false) {
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
  function satisfied() {
    ratings = data[sede][gen].ratings;
    for (var i = 0; i < ratings.length; i++) {
      sumPercent = sumPercent + ratings[i]['nps']['promoters'];
    }

    var averageSatisfied = sumPercent/ratings.length
    return averageSatisfied + '%';
  }

  var alumSatisfied = document.getElementById('alum-satifaction');
  alumSatisfied.textContent = satisfied();
  alumSatisfied.setAttribute('class', 'number');
  var sumEvaTeacher = 0;
  var sumEvaJedi = 0;
  var sumSub = 0;

  // función que devuelve el promedio de la evaluación de los maestros

  function averageTeacher() {
    ratings = data[sede][gen].ratings;
    for (var i = 0; i < ratings.length; i++) {
      sumEvaTeacher = sumEvaTeacher + ratings[i]['teacher'];
    }

    var averageEvaluation = sumEvaTeacher/ratings.length;
    return averageEvaluation.toFixed(1);
  }

  var evaluationTeacher = document.getElementById('eva-teacher');
  evaluationTeacher.textContent = averageTeacher();
  evaluationTeacher.setAttribute('class', 'number');

  // función que devuelve el promedio de la evaluación de los jedi master

  function averageJedi() {
    ratings = data[sede][gen].ratings;
    for (var i = 0; i < ratings.length; i++) {
      sumEvaJedi = sumEvaJedi + ratings[i]['jedi'];
    }

    var averageEvaluation = sumEvaJedi / ratings.length;
    return averageEvaluation.toFixed(1);
  }

  var evaluationJedi = document.getElementById('eva-jedi');
  evaluationJedi.textContent = averageJedi();
  evaluationJedi.setAttribute('class', 'number');

  // función que devuelve promedio NPS

  function nps() {
    ratings = data[sede][gen].ratings;
    for (var i = 0; i < ratings.length; i++) {
      var subtraction = ratings[i]['nps']['promoters'] - ratings[i]['nps']['detractors'];
      sumSub = sumSub + subtraction;
    }
    var result = sumSub/ratings.length;
    return result;
  }
  var npsElement = document.getElementById('nps');
  npsElement.textContent =  nps();
  npsElement.setAttribute('class', 'number');

    // función que devuelve la cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints

    var studentsActive = 0;
    var count = 0;
    function achievement(){
      students = data[sede][gen].students;
      for(var i = 0; i < students.length; i++){
        if(students[i].active){
          studentsActive++;
          for (var j = 0; j < students[i]['sprints'].length; j++){
            var sum = students[i]['sprints'][j]['score']['tech'] + students[i]['sprints'][j]['score']['hse'];
            // console.log(students[i]['sprints'][j]['score']['tech']);
            // console.log(students[i]['sprints'][j]['score']['hse']);
            if(sum > 2100 ){
              count++;
            }
          }
        }
      }
      console.log(count);
    }

    achievement();
  };
