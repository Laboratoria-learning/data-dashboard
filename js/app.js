/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

//función que cuenta alumnas en total, activas y retiradas.
// function countActive(sede, generacion, estudiantes) {
//   var countActive = 0;
//   var countInActive = 0;
//   var sedeLab = data[sede][generacion][estudiantes];
//   for (var i = 0; i < sedeLab.length; i++) {
//     if (sedeLab[i].active) {
//       countActive++
//     } else if (sedeLab[i].active === false) {
//       countInActive++
//     }

//     total = countActive + countInActive;
//   }
//   console.log('Son ' + total + '. Las alumnas activas son: ' + countActive + '. y las alumnas retiradas son: ' + countInActive);

// }

// countActive('AQP', '2016-2', 'students');

//función que cuenta alumnas en total, activas, retiradas y proporciona porcentaje de retiradas.

// var sede = document.getElementById('sede');

// sede.addEventListener('click', showGeneration);

// function showGeneration(){
//     console.log('dsds');
// }
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
  // return 'Son ' + total + '. Las alumnas activas son: ' + countActive + '. y las alumnas retiradas son: ' + countInActive + '\n Las alumnas retiratas representan el ' + porcentaje + '%';
  console.log('Son ' + total + '. Las alumnas activas son: ' + countActive + '. y las alumnas retiradas son: ' + countInActive + '\n Las alumnas retiratas representan el ' + porcentaje + '%');
}

countStudentActive('AQP', '2016-2', 'students');

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









