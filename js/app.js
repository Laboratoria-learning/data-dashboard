/*
 * Funcionalidad de tu producto
 */
// Funcionalidad de los tabs Overviews, Students y Teachers

var showHide = function(e){ 
    var tabSelector = e.target.dataset.tabSelector;
    var overviews = document.getElementById('overviews');
    var students = document.getElementById('students');
    var teachers = document.getElementById('teachers');

    if (tabSelector === 'tabOverviews'){
        console.log('mostrar overviews');
        // ocultar students y teacher
        students.style.display='none';
        teachers.style.display='none';
        // mostrar overviews
        overviews.style.display='block';

    } else if (tabSelector === 'tabStudents'){
        console.log('Mostrar a los estudiantes');
        // ocultar overviews y teacher
        overviews.style.display = 'none';
        teachers.style.display = 'none';
        // mostrar students
        students.style.display = 'block';
    } else if (tabSelector === 'tabTeachers'){
        console.log('mostrar a los profesores');
        // mostrar overviews y students
        students.style.display = 'none';
        overviews.style.display = 'none';
        // mostrar students
        teachers.style.display = 'block';
    }
}

var loadTabs = function(){
    var elementsTabs = document.getElementsByClassName('tab');
    for(var i = 0; i < elementsTabs.length; i++){
        elementsTabs[i].addEventListener('click',showHide);
    }
}

loadTabs()

// funcionalidades del menu desplegable de las sedes de laboratoria

for(var sede in data){
    console.log(sede)
}

var city = Object.keys(data);
console.log(city[1])

// // Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
