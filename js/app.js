/*
 * Funcionalidad de tu producto
 */
// Funcionalidad de los tabs Overviews, Students y Teachers

var showHide = function(e){
    var tabSelector = e.target.dataset.tabSelector;
    if (tabSelector=== 'tabOverviews'){
        console.log('mostrar overviews');
    } else if (tabSelector === 'tabStudents'){
        console.log('Mostrar a los estudiantes');
    } else if (tabSelector === 'tabTeachers'){
        console.log('mostrar a los profesores');
    }
}

var loadTabs = function(){
    var elementsTabs = document.getElementsByClassName('tab');
    for(var i = 0; i < elementsTabs.length; i++){
        elementsTabs[i].addEventListener('click',showHide);
    }
}

loadTabs();



// // Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
