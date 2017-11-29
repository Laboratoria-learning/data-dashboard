/*
 * Funcionalidad de tu producto
 */
// Declarando variables
optionSprint = document.getElementById('sprint');
optionSpecialization = document.getElementById('specialization');
divNps = document.getElementById('kpi-nps');
divPromoters = document.getElementById('promoters');
divPassive = document.getElementById('passive');
divDetractors = document.getElementById('detractors');
divAchievement = document.getElementById('kpi-achievement');
divPercentAchievement = document.getElementById('percent-achievement');
divStudentsAchievement = document.getElementById('students-achievement');
// Puedes hacer uso de la base de datos a través de la variable `data`

window.addEventListener('load', function(event) {
  // Ocultando especializacion de las estudiantes
  optionSpecialization.classList.add('hidden');
  
  var str = data['LIM']['2016-2'];

  // Cargando las opciones de sprint segun generation 
  for (i = 0;i < str['ratings'].length;i++) {
    var option = document.createElement('option');
    option.text = 'Sprint ' + str['ratings'][i]['sprint'];
    option.value = str['ratings'][i]['sprint'] - 1;
    option.id = str['ratings'][i]['sprint'] - 1;
    optionSprint.add(option);
  }

  console.log(optionSprint);
  // Evento para elegir el Sprint
  optionSprint.addEventListener('change', function(event) {
    // Mostramos especializaciones en el caso que el sprnt sea mayor o igual a 5
    if (optionSprint.value >= 5) {
      optionSpecialization.classList.add('show');
      optionSpecialization.classList.remove('hidden');
    } else {
      optionSpecialization.classList.add('hidden');
      optionSpecialization.classList.remove('show');
    }
    divAchievement.innerHTML = str['ratings'][event.target.value]['student']['cumple'] + str['ratings'][event.target.value]['student']['supera'];

    var totalStudentsAchievement = str['ratings'][event.target.value]['student']['cumple'] + str['ratings'][event.target.value]['student']['no-cumple'] + str['ratings'][event.target.value]['student']['supera'];
    divStudentsAchievement.innerHTML = '% OF TOTAL (' + totalStudentsAchievement + ')';

    divPercentAchievement.innerHTML = (str['ratings'][event.target.value]['student']['cumple'] + str['ratings'][event.target.value]['student']['supera']) * 100 / totalStudentsAchievement + ' %';
    var promoters = str['ratings'][event.target.value]['nps']['promoters'];
    var passive = str['ratings'][event.target.value]['nps']['passive'];
    var detractors = str['ratings'][event.target.value]['nps']['detractors'];
    
    var nps = promoters - detractors;
    console.log(nps);
    divNps.innerHTML = nps + '%';
    divPromoters.innerHTML = 'Promoters ' + promoters + '%';
    divPassive.innerHTML = 'Passive ' + passive + '%';
    divDetractors.innerHTML = 'Detractores ' + detractors + '%';
  });

 
/*

 console.log(data['LIM']['2016-2']['ratings'][0]); // sprint 1 
  console.log(data['LIM']['2016-2']['ratings'][1]); // sprint 2 
  
console.log(data['LIM']['2016-2']['students']);
console.log(data['LIM']['2016-2']['students'][0])
console.log(data['LIM']['2016-2']['students'][0]['name']);
console.log(data['LIM']['2016-2']['students'][0]['sprints']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['number']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']['tech']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']['hse']);

 
  /*
  console.log(data['AQP']);
  console.log(data['AQP']['2016-2'])
  console.log(data['AQP']['2016-2']['ratings'])
  console.log(data['AQP']['2016-2']['ratings'][0]) //sprint
  console.log(data['AQP']['2016-2']['ratings'][0]['jedi']) //puntaje dl jedi
  console.log(data['AQP']['2016-2']['ratings'][0]['nps']) //nps
  console.log(data['AQP']['2016-2']['ratings'][0]['nps']['promoters'])
  console.log(data);*/
});