var studentsContainer = document.getElementById('coders-container');
var selectGenerationLima = document.getElementsByClassName('generacion')[0];
var selectGenerationAqp = document.getElementsByClassName('generacion')[1];
var selectGenerationSch = document.getElementsByClassName('generacion')[2];
var selectGenerationDf = document.getElementsByClassName('generacion')[3];
var selectGenerationG = document.getElementsByClassName('generacion')[4];
var subImagesContainer = null;

selectGenerationLima.addEventListener('change', selectionGeneration);
selectGenerationAqp.addEventListener('change', selectionGeneration);
selectGenerationSch.addEventListener('change', selectionGeneration);
selectGenerationDf.addEventListener('change', selectionGeneration);
selectGenerationG.addEventListener('change', selectionGeneration);

function selectionGeneration(event) {
  var filtro = event.target.value;
  cargarCoders(filtro.substr(0, 3), filtro.substr(3, 6));
}

function cargarCoders(ciudad, periodo) {
  for (var i = 0 ; i < data[ciudad][periodo].students.length; i++) {
    var estudiante = document.createElement('div');
    var infStuden = document.createElement('p');
    var photoStudent = document.createElement('img');

    photoStudent.classList.add('student-img');
    estudiante.setAttribute('class', 'student-inf');

    photoStudent.src = data[ciudad][periodo].students[i].photo;
    infStuden.textContent = data[ciudad][periodo].students[i].name;
    photoStudent.textContent = data[ciudad][periodo].students[i].photo;

    estudiante.appendChild(infStuden);
    estudiante.appendChild(photoStudent);
    studentsContainer.appendChild(estudiante);
  }
}

function techSkills() {
  var techPoints;
}

function lifeSkills() {

}
