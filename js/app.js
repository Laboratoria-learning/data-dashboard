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

    var students= [];
    var studentsData = [];
    var baseTech = 1800;
    var baseHse = 1200;
    
    /* Sedes - Array */
    var sedes = Object.keys(data);
    var sedesArray=[];
    var studentGeneratiosArray=[];
    for ( var i=0 ; i< 4 ; i++) {
          sedesArray[i] = sedes[i];
    }
          
    /*Generaciones- Array */
    var generations = Object.values(data);
    var generationsArray= Object.keys(generations[0]); /* AQP-GEN-POS 0 , hacer for para 2 */
        
    /*encuentro lista de alumnos*/
    var generationsValues = Object.values(generations[0]); 
    var generationsValuesStudents= generationsValues[0];
    var generationsValuesStudentsData = Object.values(generationsValuesStudents);
    var gen= generationsValuesStudentsData[0];
        
    studentsData = Object.values(gen[0]); /* hacer for para 15*/
     /* console.log('students data', studentsData); */
      
    /* Estudiantes- Array */
    /*estudiantes de arequipa-position 0***/
    students[[0,0]] = sedesArray[0];   
    students[[0,1]] = generationsArray[0];
    students[[0,2]] = studentsData[0];
    students[[0,3]] = studentsData[1];
    students[[0,4]] = studentsData[2];
    students[[0,5]] = studentsData[3];
        
    var tech =Object.values(studentsData[3]);
    var tec = Object.values(tech[0]);
    console.log('tech', tech);    /*hacer for para 4 */
    console.log('tech', tech[0]); /*primer sprint*/
    /*console.log('tec', tec);*/
    console.log('tec', tec[1]);
       
    var tePoint= Object.values(tec[1]);
    console.log('tepoint' , tePoint );
     
    /*sprint 1*/
    students[[0,6]] =(tePoint[0]/1800)*100 ;
    students[[0,7]] =(tePoint[1]/1200)*100 ;
    /*sprint 2*/
    students[[0,8]] =(tePoint[0]/1800)*100 ;
    students[[0,9]] =(tePoint[1]/1200)*100 ;
    /*sprint 3*/
    students[[0,10]]=(tePoint[0]/1800)*100 ;
    students[[0,11]]=(tePoint[1]/1200)*100 ;
    /*sprint 4*/
    students[[0,12]]=(tePoint[0]/1800)*100 ;
    students[[0,13]]=(tePoint[1]/1200)*100 ;
         
    console.log('students', students); 

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

    /* ubico área para crear elementos */
    var visualizationSection = document.getElementById('visualization');
    
          /* creaación de elementos y nodo */
          var divStudent = document.createElement('div');/* div con id-student */
          var imgPhoto = document.createElement('img');  /* img con propiedad src*/

         /* var text = document.createTextNode(textAreaText);*/
    
          /* asignación de hijos a padres */
          visualizationSection.appendChild(divStudent);
          divStudent.appendChild(imgPhoto);

          
          pVar.appendChild(text);
    
          /* inicializando cuenta de caracteres*/
          textarea.value = '' ;
          regressive = 140 ;
          label.textContent = regressive ;
    




  });
});
