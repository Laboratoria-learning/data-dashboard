// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// función donde obtengo alumnas activas, inactivas, alumnas total por sedes (puntos 1 y 2)

function studentSedes(sede, generation) {
  var active = 0;
  var inactive = 0;
  var students = data[sede][generation]['students'];
  var numStudets = students.length;
  var array = [];
  for (var i = 0; i < numStudets; i++) {
    students[i].active ? active++ : inactive++;
  }
  array.push(active);
  array.push(inactive);
  var dropout = Math.round(inactive * 100 / numStudets);
  // var alumnasActives = (numStudets - inactive);
  document.getElementById('total-enrollment').textContent = numStudets;
  document.getElementById('total-enrollment red').textContent = dropout;
  return array;
}
// studentSedes('AQP', '2016-2');

/** *****************************************************************************/

// funcion que me dice las metas 'achievement'

function achievement(sede, generation) {
  var array = [];
  var goals = 0;
  var students = data[sede][generation]['students'];
  var numStudets = students.length;
  for (var i = 0; i < numStudets; i++) {
    if (students[i].active) {
      var pointTech = 0;
      var pointHse = 0;
      var studentsSprints = students[i]['sprints'].length;
      for (var j = 0; j < studentsSprints ; j++) {
        pointTech += students[i].sprints[j].score.tech;
        pointHse += students[i].sprints[j].score.hse;
      }
      var promedioTech = pointTech / studentsSprints;
      var promedioHse = pointHse / studentsSprints;
      var promedioTotal = promedioTech + promedioHse;
      array.push([promedioTotal]);
    }
  }

  for (var k = 0; k < array.length; k++) {
    if (array[k] >= 2100) {
      goals++;
    }
  }
  document.getElementById('meta').textContent = goals;
  var poc = Math.round(promedioTotal / 100);
  document.getElementById('porcentaje-metas').textContent = poc;
  return goals;
}
// achievement('AQP', '2016-2')

/** *****************************************************************************/
// El Net Promoter Score (NPS) promedio de los sprints cursados
function netPromoterScore(sede, generation) {
  var ratings = data[sede][generation]['ratings'];
  var array = [];
  for (var i = 0 ; i < ratings.length;i++) {
    var promoters = ratings[i]['nps']['promoters'];
    var detractors = ratings[i]['nps']['detractors'];
    var passive = ratings[i]['nps']['passive'];
    array[i] = promoters - detractors;
    var nps = (promoters - detractors);
  }
  document.getElementById('nps').innerHTML = nps;
  document.getElementById('promoters').innerHTML = promoters + '% promoters';
  document.getElementById('passive').innerHTML = passive + '% passive';
  document.getElementById('detractors').innerHTML = detractors + '% detractors';
  return array;
}

/** *****************************************************************************/

// La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos de HSE en promedio y por sprint.
function notaHse(sede, generation, sprints) {

  var studentsGoalTechBySprint = [];
  var studentsGoalTech = 0;
  for (var i = 0; i < ratings.length; i++) {
    studentsGoalTechBySprint[i] = 0;
  }
  for (var i = 0; i < enrolled;) {
    if (choiceProm['students'][i]['active'] === true) {
      var sprints = choiceProm['students'][i]['sprints'];
      var goalTechBySprint = 0;        
      for (var j = 0; j < sprints.length; j++) {
        var scoreTech = sprints[j]['score']['tech'];
        goalTechBySprint += scoreTech; 
        if (scoreTech >= 1260) {
          studentsGoalTechBySprint[j]++;
        }
        if (goalTechBySprint >= 1260 * sprints.length) {
          studentsGoalTech++;
        }      
      }
    }
    i++;
  }
  var targetTechPercentage = Math.round((studentsGoalTech * 100) / (studentsActive));
}


