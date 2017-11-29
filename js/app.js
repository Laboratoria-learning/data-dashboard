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
function countActive(sede, generacion, estudiantes) {
  var countActive = 0;
  var countInActive = 0;
  var sedeLab = data[sede][generacion][estudiantes];
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

countActive('AQP', '2016-2', 'students');









