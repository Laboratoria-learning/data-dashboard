window.addEventListener('load', function(event) {
  var displayFilter = document.getElementById('fa-sort-desc');
  var displayFilterTwo = document.getElementById('fa-sort-desc2');
  var displayFilterThree = document.getElementById('fa-sort-desc3');

  displayFilter.addEventListener('click', function(event) {
    var checkBoxSite = document.getElementById('checkbox-site');
    var classCheckBoxSite = document.getElementsByClassName('checkbox-site')[0];
    if (classCheckBoxSite.style.display = 'none') {
      classCheckBoxSite.style.display = 'block';
      classCheckBoxSite.style.left = '100px';
      classCheckBoxSite.style.up = '80px';
    } else classCheckBoxSite.style.display = 'none';
  });

  displayFilterTwo.addEventListener('click', function(event) {
    var checkBoxCommonCore = document.getElementById('checkbox-commoncore');
    var classCheckBoxCommonCore = document.getElementsByClassName('checkbox-commoncore')[0];
    if (classCheckBoxCommonCore.style.display = 'none') {
      classCheckBoxCommonCore.style.display = 'block';
      classCheckBoxCommonCore.style.left = '180px';
      classCheckBoxCommonCore.style.up = '30px';
    } else classCheckBoxCommonCore.style.display = 'none';
  });

  displayFilterThree.addEventListener('click', function(event) {
    var checkBoxHse = document.getElementById('checkbox-HSE');
    var classCheckBoxHse = document.getElementsByClassName('checkbox-HSE')[0];
    if (classCheckBoxHse.style.display = 'none') {
      classCheckBoxHse.style.display = 'block';
      classCheckBoxHse.style.left = '80px';
      classCheckBoxHse.style.up = '30px';
    } else classCheckBoxHse.style.display = 'none';
  });

  // solucionando primer ennunciado
  // declarando variables generales
  var siteLim = data['LIM'];
  var siteAqp = data['AQP'];
  var siteChile = data['SCL'];
  var siteCdmx = data['CDMX'];

  // CASO LIMA
  // obteniendo numero de poblacion estudiantil

  var limaProm2016ii = siteLim['2016-2'];
  var limaProm2017i = siteLim['2017-1'];
  var limaProm2017ii = siteLim['2017-2'];

  console.log(limaProm2016ii.students.length); // 35
  console.log(limaProm2017i.students.length); // 17
  console.log(limaProm2017ii.students.length); // 14

  // obteniendo procentaje de estudiantes de deserción de estudiantes por sede y generacion

  var limaStudents2016ii = limaProm2016ii.students;
  var limaStudents2017i = limaProm2017i.students;
  var limaStudents2017ii = limaProm2017i.students;

  // Caso Lima2016-2

  for (var i = 0; i < shortCut.length;i++) {
    if (1) {
      console.log(shortCut[i]['active']);
    }
  }
});

// var shortCut = data['LIM']['2016-2']['students'];
// console.log(shortCut.length);
// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']['tech']);
// console.log(data);

//
var shortCut = data['LIM']['2016-2']['students'];
console.log(shortCut.length);
// console.log(shortCut);