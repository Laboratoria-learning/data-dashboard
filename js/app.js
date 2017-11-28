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
});