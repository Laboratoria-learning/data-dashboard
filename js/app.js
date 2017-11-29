/* Funcionalidad de tu producto */
// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

window.addEventListener('load', function(event) {
  var overview = document.getElementById('tab-overview');// lo que quiero hacer click
  var contentOverview = document.getElementById('contentOverview');// lo que quiero que aparezca
  var students = document.getElementById('tab-students');// lo que quiero hacer click
  var contentStudents = document.getElementById('contentStudents');// lo que quiero que aparezca

  overview.addEventListener('click', function(event) {
    contentOverview.style.display = 'block';
    contentStudents.style.display = 'none';
  });
  students.addEventListener('click', function(event) {
    contentOverview.style.display = 'none';
    contentStudents.style.display = 'block';
  });

  var promocion = document.getElementById('')
});
