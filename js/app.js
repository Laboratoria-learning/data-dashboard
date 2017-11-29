/*
 * Funcionalidad de tu producto
 */
// Declarando variables
optionSprint = document.getElementById('sprint');
optionSpecialization = document.getElementById('specialization');

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
window.addEventListener('load', function(event) {
  // Ocultando especializacion de las estudiantes
  optionSpecialization.classList.add('hidden');
  // Evento para elegir el Sprint
  optionSprint.addEventListener('change', function(event) {
    if (optionSprint.selectedIndex === 5 || optionSprint.selectedIndex === 6 || optionSprint.selectedIndex === 7 || optionSprint.selectedIndex === 8) {
      optionSpecialization.classList.add('show');
      optionSpecialization.classList.remove('hidden');
      console.log(optionSprint.selectedIndex);
      console.log(optionSpecialization);
    } else {
      optionSpecialization.classList.add('hidden');
      optionSpecialization.classList.remove('show');
    }
  });
  // obteniendo sedes

  var city = Object.keys(data);
  console.log(city);
  console.log(data[city[0]]);// arequipa

  var generations = Object.keys(data[city[0]]); 
  console.log(generations); // generaciones de arequipa
  console.log(data[city[0]][generations[0]]); // datos de la generacion 2016-2 de arequipa

  var students = Object.keys(data[city[0]][generations[0]]);
  console.log(data[city[0]][generations[0]][students[0]]);
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