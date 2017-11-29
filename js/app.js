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
var menu = document.getElementById('menuBar');

var city = Object.keys(data);
    for (var i = 0; i<city.length; i++){
        newUl = document.createElement('ul');
        newUl.innerHTML = city[i];
        newUl.id = city[i];
        menu.appendChild(newUl);
        var generationx = Object.keys(data[city[i]]);
        for(var j = 0; j< generationx.length; j++){
            newli = document.createElement('li');
            newli.id = 'data[\'' + city[i] + '\'][\'' + generationx[j] + '\']';
            newli.setAttribute('class','bootcamps');
            newli.innerHTML = generationx[j];
            newUl.appendChild(newli);
        }
    }
    
    // Agregando funcionalidad a menuBar
    
    var bootcamps = document.getElementsByClassName('bootcamps');
    for(var x = 0; x < bootcamps.length; x++ ){
        bootcamps[x].addEventListener('click',showMenu);
    }

    function showMenu(){
        var str = event.target.id;
        console.log(str);
    }


 

    console.log(menu);
    console.log(city);
    console.log(data[city[0]]); //Arequipa

    var generations = Object.keys(data[city[0]]); //Datos de la generacion 2016-2 de Arequipa
    console.log(data[city[0]][generations[0]]); //Datos de la generacion Arequipa 2016-2

    var students = Object.keys(data[city[0]][generations[0]]);
    console.log(data[city[0]][generations[0]][students[0]]);
    console.log(data);


// // Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
