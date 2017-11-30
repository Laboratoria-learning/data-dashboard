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

//   creando contenedor para informacion de las alumnas
});

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

/* event tab*/
var mostrarOcultar = function(e) {
  var tabSeleccionado = e.target.dataset.tabSeleccionado;
  var overview = document.getElementById('overview');
  var students = document.getElementById('students');
  var teachers = document.getElementById('teachers');
  if (tabSeleccionado === 'tabOverview') {
    console.log('mostrar overview');
    /* hide students y teachers*/
    students.style.display = 'none';
    teachers.style.display = 'none';
    /* show overview*/
    overview.style.display = 'block';
  } else if (tabSeleccionado === 'tabStudents') {
    console.log('mostrar students');
    /* hide overview y teachers*/
    overview.style.display = 'none';
    teachers.style.display = 'none';
    /* show overview*/
    students.style.display = 'block';
  } else if (tabSeleccionado === 'tabTeachers') {
    console.log('mostrar teachers');
    /* hide overview y students*/
    overview.style.display = 'none';
    students.style.display = 'none';
    /* show teachers*/
    teachers.style.display = 'block';
  }
};
var cargarPagina = function() {
  students.style.display = 'none';
  teachers.style.display = 'none';
  var elementosTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementosTab.length; i++) {
    elementosTab[i].addEventListener('click', mostrarOcultar);
  }
};    
cargarPagina();
// console.log(data['LIM']['2016-2']['students'][0]['sprints'][0]['score']['tech']);
// console.log(data);

//
var shortCut = data['LIM']['2016-2']['students'];
console.log(shortCut.length);
for (var i = 0; i < shortCut.length;i++) {
  if (i == 7) {
    console.log(shortCut[i]['name']);
  }
}
// console.log(shortCut);