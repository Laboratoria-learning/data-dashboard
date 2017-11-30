window.addEventListener('load', function() {
  var selectHeadquarters = document.getElementById('headquarters');
  var selectGeneration = document.getElementById('generation');
  // Cargando data al selector de Sedes
  var headquarters = Object.keys(data);
  for (var i = 0; i < headquarters.length ; i++) {
    var option = document.createElement('option');
    if (headquarters[i] === 'AQP') {
      option.textContent = 'Arequipa';
      option.setAttribute('value', 'arequipa');
    }
    if (headquarters[i] === 'CDMX') {
      option.textContent = 'México';
      option.setAttribute('value', 'mexico');
    }
    if (headquarters[i] === 'LIM') {
      option.textContent = 'Lima';
      option.setAttribute('value', 'lima');
    }
    if (headquarters[i] === 'SCL') {
      option.textContent = 'Chile';
      option.setAttribute('value', 'chile');
    }
    selectHeadquarters.appendChild(option);
  }
  // Función para agregar opciones
  function addOptions(headquarter) {
    var objHeadquarters = data[headquarter];
    var arrGeneration = Object.keys(objHeadquarters);
    for (var i = 0; i < arrGeneration.length; i++) {
      var option = document.createElement('option');
      var textOption = arrGeneration[i];
      option.textContent = textOption;
      selectGeneration.appendChild(option);
    }
  }
  // Evento para cargar selector de Generaciones
  selectHeadquarters.addEventListener('change', function() {
    switch (true) {
    case selectHeadquarters.value == 'arequipa':
      addOptions('AQP');
      break;
    case selectHeadquarters.value == 'mexico':
      addOptions('CDMX');
      break;
    case selectHeadquarters.value == 'lima':
      addOptions('LIM');
      break;
    case selectHeadquarters.value == 'chile':
      addOptions('SCL');
      break;
    }
  });
});
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
