/*
 * Funcionalidad de tu producto
 */
 // Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);



//----SE MANDAR LLAMAR LOS ELEMENTOS QUE SE VAN A UTILIZAR----//
var button = document.getElementById('button');
var filter = document.getElementById('filter');
var sectionGrafics = document.getElementById('filter');
var select = document.getElementById('select');
var containerStudents = document.getElementById('container-students');
var containerForm = document.getElementById('container-form');
var input = document.getElementById('formulario-input');
var passw = document.getElementById('formulario-password');

var containerActive = document.getElementById('container-actives');

//----SE LE DA FUNFIONALIDA AL INGRESAR----Y VALIDACION AL FORMULARIO------//

button.addEventListener("click", function(){

      if (passw.value =='LABORATORIA' && input.value =='estudiante'){
            containerForm.style.display = "none";
            sectionGrafics.style.display = "block";
     }else if (passw.value =='LABORATORIA' && input.value =='coach'){
            containerForm.style.display = "none";
            sectionGrafics.style.display = "block";
     }else if (passw.value =='LABORATORIA' && input.value =='personal developer coordinator'){
            containerForm.style.display = "none";
            sectionGrafics.style.display = "block";
     }else if (passw.value =='LABORATORIA' && input.value =='training manager'){
            containerForm.style.display = "none";
            sectionGrafics.style.display = "block";
     }else{
            alert("Introduce tu usuario y contraseña correctos");
    }
});

//---SE AGREGA FUNCION AL SELECT PARA QUE AL SELECCIONAR TE TRAIGA LA INFORMACION DEL DATA---//

select.addEventListener("change", optionSelect);

    function optionSelect() {
            var sede = select.value;
            var sedeName = select.options[select.selectedIndex].dataset.sede;
               //console.log(sedeName);
            var generation = select.options[select.selectedIndex].dataset.generation;
               //console.log(generation);
            var students = data[sede][generation]["students"];
              //console.log(students);

        contActivas = 0;
        contInactivas = 0;

     for (var i = 0; i < students.length; i++) {
           if(students[i]["active"] == true){
              contActivas ++;
              var activas= students[i];
              console.log(activas);
           }else{
              contInactivas ++;
              //console.log(inactivas);
      }
}

//---SE CREA DIV DONDE SE ALMACENARAN LOS DATOS DE LAS ESTUDIANTES ACTIVAS E INACTIVAS---//
      var containerTotalStudents = document.createElement("div");
          containerTotalStudents.setAttribute("id", "container-Total")
          containerStudents.appendChild(containerTotalStudents);

          containerTotalStudents.innerHTML = " El total de estudiantes activas es de: " + contActivas  + " El total de estudiantes inactivas es de: " + contInactivas;



      //  for (var i = 0; i < students.length; i++) {
      //  console.log (students[i]["sprints"]);

          //  for (var i = 0; i < sprints.length; i++) {
          //  console.log (sprints[i]["score"]);
          //  }


      //   }











};
