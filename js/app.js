/*
 * Funcionalidad de tu producto
 */
// Declarando variables
optionSprint = document.getElementById('sprint');
optionSpecialization = document.getElementById('specialization');

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data['LIM']['2016-2']['students']);
console.log(data['LIM']['2016-2']['students'][0])
console.log(data['LIM']['2016-2']['students'][0]['name']);
console.log(data['LIM']['2016-2']['students'][0]['sprints']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['number']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']['tech']);
console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']['hse']);
window.addEventListener('load', function(event) {
  // Ocultando especializacion de las estudiantes
  optionSpecialization.classList.add('hidden');
  
  var generationx = data['LIM']['2016-2'];

  // Cargando las opciones segun generation 
  for (i = 0;i < generationx['ratings'].length;i++) {
    var option = document.createElement('option');
    option.text = 'Sprint ' + generationx['ratings'][i]['sprint'];
    option.value = generationx['ratings'][i]['sprint'];
    option.id = generationx['ratings'][i]['sprint'];
    optionSprint.add(option);
  }
  console.log(data);
  
  // Evento para elegir el Sprint
  optionSprint.addEventListener('change', function(event) {
    if (optionSprint.value >= 5) {
      optionSpecialization.classList.add('show');
      optionSpecialization.classList.remove('hidden');
    } else {
      optionSpecialization.classList.add('hidden');
      optionSpecialization.classList.remove('show');
    }
  });

 
/*

 console.log(data['LIM']['2016-2']['ratings'][0]); // sprint 1 
  console.log(data['LIM']['2016-2']['ratings'][1]); // sprint 2 
  

  console.log(data);


 
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