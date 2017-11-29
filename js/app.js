window.addEventListener('load', function() {
  var listMenu = document.querySelectorAll('.general-menu');
  var studentsContainer = document.getElementById('coders-container');
  var selectGenerationLima = document.getElementsByClassName('generacion')[0];
  var selectGenerationAqp = document.getElementsByClassName('generacion')[1];
  var selectGenerationSch = document.getElementsByClassName('generacion')[2];
  var selectGenerationDf = document.getElementsByClassName('generacion')[3];
  var selectGenerationG = document.getElementsByClassName('generacion')[4];
  var infoCoder = document.getElementsByClassName('student');
  var subInfoContainer = null;

  for (var i = 0; i < listMenu.length; i++) {
    listMenu[i].addEventListener('click', showMenu);
  }

  function showMenu(event) {
    console.log(event.target);
  }

  // constantes
  var FIRST15 = 'first-15';
  var SECOND15 = 'second-15';
  var FIRST16 = 'first-16';
  var SECOND16 = 'second-16';
  var FIRST17 = 'first-17';
  var SECOND17 = 'second-17';

  selectGenerationLima.addEventListener('change', selectionGeneration);
  selectGenerationAqp.addEventListener('change', selectionGeneration);
  selectGenerationSch.addEventListener('change', selectionGeneration);
  selectGenerationDf.addEventListener('change', selectionGeneration);
  selectGenerationG.addEventListener('change', selectionGeneration);

  showAll();

  function selectionGeneration(event) {
    for (var j = 0; j < data.LIM["2017-2"].students.length; j++) {
        var newCoder = document.createElement('div');
        newCoder.setAttribute('class', 'student');
        newCoder.textContent = data.LIM["2017-2"].students[j].name;
        infoCoder = studentsContainer.appendChild(newCoder);
      }
    switch (true) {
    case event.target.value === '':
      showAll();
      break;
    case event.target.value === 'first-15':
      showAll();
      break;
    case event.target.value === 'second-15':
      showAll();
      break;
    case event.target.value === 'first-16':
      showAll();
      break;
    case event.target.value === 'second-16':
      addImages(infoCoder, SECOND16);
      break;
    case event.target.value === 'first-17':
      addImages(infoCoder, FIRST15);
      break;
    case event.target.value === 'second-17':
      addImages(infoCoder, SECOND15);
      break;
    }
    console.log('hola');
  }
  function showAll() {
console.log('hola2');
  }


});
