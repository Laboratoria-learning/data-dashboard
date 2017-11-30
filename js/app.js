/*
 * Funcionalidad de tu producto
 */
window.addEventListener('load', function() {  
  var studentsContainer = document.getElementById('coders-container');
  var selectGenerationLima = document.getElementsByClassName('generacion')[0];
  var selectGenerationAqp = document.getElementsByClassName('generacion')[1];
  var selectGenerationSch = document.getElementsByClassName('generacion')[2];
  var selectGenerationDf = document.getElementsByClassName('generacion')[3];
  var selectGenerationG = document.getElementsByClassName('generacion')[4];
  var subImagesContainer = null;
  var navMenu = document.querySelector('.navbar'); 
  var listMenu = document.querySelectorAll('.menu');
  var df;

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
  navMenu.addEventListener('click', showHiddenMenu);

  function showHiddenMenu(event) {
    for (var i = 0; i < listMenu.length; i++) {
    //   if (listMenu[i].style.display === 'none') {
    //     document.querySelectorAll('.menu').style.display = 'block';
    //   }
    //   document.querySelectorAll('.menu').style.display = 'none';
    }
  }

  showAll();
  function selectionGeneration(event) {
    switch (true) {
    case event.target.value === '':
      showAll();
      break;
    case event.target.value === 'first-15':
      addImages(datos, FIRST15);
      break;
    case event.target.value === 'second-15':
      addImages(datos, SECOND15);
      break;
    case event.target.value === 'first-16':
      addImages(datos, FIRST16);
      break;
    case event.target.value === 'second-16':
      addImages(datos, SECOND16);
      break;
    case event.target.value === 'first-17':
      addImages(datos, FIRST15);
      break;
    case event.target.value === 'second-17':
      addImages(datos, SECOND15);
      break;
    }
  }
  
  function addImages() {
    for (var key in data) {
      console.log(arrayProductoInd[key]); 
    }
  }
  
  function showAll() {
  
  }

  function headquarters(ciudad, periodo) {
    for (var i = 0 ; i < data[ciudad][periodo].students.length; i++) {
      
      var studentsTotal = data[ciudad][periodo].students[i].active;
      var totalActive =+ studentsTotal;

      var studentsHeadquarters = data[ciudad][periodo].students[i]
      var totalHeadquartersLim =+ studentsHeadquarters;
      var totalHeadquartersAqp =+ studentsHeadquarters;
      var totalHeadquartersCM =+ studentsHeadquarters;
      var totalHeadquartersSLC =+ studentsHeadquarters;
      graphicsData();
    }
  }
  function graphicsData() {
    var studentData = {
      type: 'bar',
      data: {
        datasets: [{
          data: [
            5,
            10,
            40,
            12,
          ],
          backgroundColor: [
            '#ffe0e6',
            '#ffecd9',
            '#fff5dd',
            '#dbf2f2', 
          ]
        }],
        labels: [
          'AQP',
          'CDMX',
          'LIM',
          'SLC',
        ]
      },
      options: {
        reponsive: true,
      }
    };
  };
  var canvas = document.getElementById('chart').getContext('2d');
  window.bar = new Chart(canvas, studentData);
});