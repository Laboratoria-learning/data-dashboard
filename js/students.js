var selectGraphics = document.getElementById('graphics');
var selectStudents = document.getElementById('students-option');
var bodyGraphics = document.getElementById('graphics-cuerpo');
var bodyStudents = document.getElementById('content-students');

console.log(selectGraphics);
console.log(selectStudents);
console.log(bodyGraphics);
console.log(bodyStudents);

/*selectStudents.addEventListener('click', function showStudents(event) {
    
    if(selectGraphics===true) {/*Oculto los graficos*
    
    bodyGraphics.classList.add('ocult');
  
    bodyStudents.classList.add('see') }
   
    else if (selectStudents===true){
    
    bodyStudents.classList.add('ocult');

    bodyGraphics.classList.add('see');
   }
});

selectGraphics.addEventListener('click', function showStudents(event) {
    /*Oculto los graficos 
  bodyStudents.classList.add('ocult');
    /*muestro a las estudiantes
  bodyGraphics.classList.add('see');
});

/*selectGraphics.addEventListener('click', function showStudents(event) {
  bodyStudents.classList.add('ocult');
  bodyGraphics.classList.add('see');
});


// Lima tiene un score antes data.LIM["2017-1"].students[12]["sprints"][3].score["tech"]
// data.AQP["2016-2"].students[]["sprints"]
// data.AQP["2016-2"].students[2]["sprints"][3]["score"].tech
// data.AQP["2016-2"].students[n]["sprints"][3]*/
