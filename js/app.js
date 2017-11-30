/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// función que devuelve alumnas en total, alumnas activas, alumnas retiradas y porcentaje de retiradas.
var total;
var countActive = 0;
var countInActive = 0;
function countStudentActive(sede, generation, students) {
  var sedeLab = data[sede][generation][students];
  for (var i = 0; i < sedeLab.length; i++) {
    if (sedeLab[i].active) {
      countActive = countActive + 1;
    } else if (sedeLab[i].active === false) {
      countInActive = countInActive + 1;
    }

    total = countActive + countInActive;
    countActive = countActive;
    countInActive = countInActive;
  }

  var porcentaje = parseInt((countInActive * 100) / total);
  console.log('Son ' + total + '. Las alumnas activas son: ' + countActive + '. y las alumnas retiradas son: ' + countInActive + '\n Las alumnas retiratas representan el ' + porcentaje + '%');
}

countStudentActive('AQP', '2016-2', 'students');


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
console.log('Las alumnas que superan el puntaje promedio son: ' + totalSupera + ' Y representan el: ' + count + '%');
}

achievement('AQP','2016-2');
achievement('AQP', '2017-1');
achievement('CDMX', '2017-1');
achievement('CDMX', '2017-2');

// función para promedio NPS de todos los sprints

function nps(sede,generation){
  var count = 0;
  var numberRatings = data[sede][generation]['ratings'];
  for (var i = 0; i < numberRatings.length; i++) {
    var averageNps = numberRatings[i]['nps']['promoters'] - numberRatings[i]['nps']['detractors'];
    console.log(averageNps);
  }
}

nps('AQP', '2016-2');

// funciones 

var sedeSelected = document.getElementById('select-sede');
var generationSelected = document.getElementById('select-generation');
var sede = '';
var gen = '';
var students = {};
var studenDesert = 0;

generationSelected.addEventListener('change', inscription);

function inscription(event) {
  sede = sedeSelected.value;
  gen = generationSelected.value;

  students = data[sede][gen].students;

  var numberRegistered = document.getElementById('numberRegistered');
  numberRegistered.textContent = students.length;

  // for(var i = 0; i<students.length;i++){
  //   if(students[i].active === false){
  //     studenDesert++;
  //   }
  // }

  // var percentDesert = parseInt((studenDesert * 100)/students.length);

  // var numberDesert = document.getElementById('numberDesert');
  // numberDesert.textContent = percentDesert;
};