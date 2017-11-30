/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
/* console.log(data); */
console.log(data);

window.addEventListener('load', function(event) {

/* evento para botón de especialización javascript */
  var javascriptButton = document.getElementById('javascript-button');
  javascriptButton.addEventListener('click', function(event) {
  alert('es click');
  button.classList.add('desactive');
 })

  /* evento para botón de especialización uxdesing */
  var uxdesignButton = document.getElementById('uxdesign-button');
  uxdesignButton.addEventListener('click', function(event) {
    alert('es click en uxdesing');
  });


  /* evento para botón de especialización front end designer */
  var frontEndDesignerButton = document.getElementById('front-end-designer-button');
  frontEndDesignerButton.addEventListener('click', function(event) {
    alert('es click en front end desing');

  var students= [];
  var studentsData = [];
  var baseTech = 1800;
  var baseHse = 1200;
  var acumTech = 0;
  var acumHse = 0;
  var ind = 0;
   
  /* Sedes - Array */
  var sedes = Object.keys(data);
  var sedesArray=[];
  var studentGeneratiosArray=[];
    for ( var i=0 ; i< 4 ; i++) {
          sedesArray[i] = sedes[i];
    }

    /* Generaciones- Array */
    var generations = Object.values(data);

    /* sede */
    var generationsArray= Object.keys(generations[0]); /* AQP-GEN-POS 0 , hacer for para 2 */
  
    /*encuentro lista de alumnos*/
    var generationsValues = Object.values(generations[0]); 
    var generationsValuesStudents= generationsValues[0];
    var generationsValuesStudentsData = Object.values(generationsValuesStudents);
    var gen= generationsValuesStudentsData[0];
    
    /* extrayendo alumnas de sede arequipa */
   for( var a= 0; a<15 ; a++){
       studentsData = Object.values(gen[a]); /*extrae alumnos*/
       students[[a,0]] = sedesArray[0];   /*asigna sede arequipa */
       students[[a,1]] = generationsArray[0]; /*asigna generation 1 */
       students[[a,2]] = studentsData[0]; /*asigna nombre*/
       students[[a,3]] = studentsData[1]; /*asigna foto*/
       students[[a,4]] = studentsData[2]; /*asigna active*/
       students[[a,5]] = studentsData[3]; /*asigna score objeto*/
       ind = 0;

     /* extrayendo puntaje de sprints */     
     for (var b= 0; b <4 ; b++) {
        var tech =Object.values(studentsData[3]);
        var tec = Object.values(tech[b]);
        /*console.log('array tec' , tec); imprime notas alumnas sprint */
        var tePoint= Object.values(tec[1]);
         
        /* recorre las notas por print 4 por alumna */
        /*sprint 1*/
        ind = 0;
        for (var c=0; c<2 ;c++) {
          students[[a,6+b+ind]] =((tePoint[c]/1800)*100).toFixed(1) ; /*tech*/
          students[[a,7+b]] =((tePoint[c]/1200)*100).toFixed(1) ; /*hse*/   
          ind = ind+1;
        }
      }
    }
    
    var acumTech = 0;
    var acumHse = 0;

    /* para recorrer el array students */
    for (var z= 0 ; z<15 ; z++){
      /* ubico área para crear elementos */
      var visualizationSection = document.getElementById('visualization');
      
       /* creaación de elementos divs */

       /* photo del estudiante */
       var divStudent = document.createElement('div'); /* div con id-student */
       var imgPhoto = document.createElement('img');  /* img con propiedad src*/
       imgPhoto.setAttribute('src',students[[z,3]]);
       imgPhoto.classList.add('photo-standart');
       visualizationSection.appendChild(divStudent);
       divStudent.appendChild(imgPhoto);

       /*datos de estudiante */
       var divDate = document.createElement('div'); /* div con id-date */
       var divDateStudent = document.createElement('div'); /* div con id-name */ 
       var divName = document.createElement('div'); /* div con id-date */
       divName.classList.add('big-letter');
       var divEspecializationStudent = document.createElement('div'); /* div con id-name */ 
       divStudent.appendChild(divDate);
       divDate.appendChild(divName);
       divDate.textContent = students[[z,2]];
       divDate.appendChild(divEspecializationStudent);
     
    };
  });
});
