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

  if (passw.value =='LABORATORIA' && input.value =='student'){
     containerForm.style.display = "none";
     sectionGrafics.style.display = "block";
}else if (passw.value =='LABORATORIA' && input.value =='coach'){
      containerForm.style.display = "none";
      sectionGrafics.style.display = "block";
}else if (passw.value =='LABORATORIA' && input.value =='coordinator'){
      containerForm.style.display = "none";
      sectionGrafics.style.display = "block";
}else if (passw.value =='LABORATORIA' && input.value =='manager'){
      containerForm.style.display = "none";
      sectionGrafics.style.display = "block";
}else{
      alert("Introduce tu usuario y contraseña correctos");
    }
});

//---SE AGREGA FUNCION AL SELECT PARA QUE AL SELECCIONAR TE TRAIGA LA INFORMACION DEL DATA---//

select.addEventListener("change", optionSelect);

function optionSelect(e) {
  var select = e.target
  var sede = select.value;
  var sedeName = select.options[select.selectedIndex].dataset.sede;
         //console.log(sedeName);
  var generation = select.options[select.selectedIndex].dataset.generation;
         //console.log(generation);
  var students = data[sede][generation]["students"];
    //    console.log(students);

  contActivas = 0;
  contInactivas = 0;

 for (var i = 0; i < students.length; i++) {
     if(students[i]["active"] == true){
        contActivas ++;
       console.log(contActivas);
      //  console.log( students[i]["sprints"]);
      }else{
        contInactivas ++;
      var inactivas= students[i];
      console.log(inactivas["name"]);
    }
}

  var totalStudents = contInactivas + contActivas;
  containerStudents.innerHTML = "el total de alumnas de " + sede  +  generation + " es de: " + totalStudents;

  var porcentajeActivas = contActivas *100/ totalStudents;
  console.log(porcentajeActivas.toFixed() + "%" );

  var porcentajeInactivas = contInactivas * 100/ totalStudents;
  console.log(porcentajeInactivas.toFixed() + "%");
//   var containerTotalStudents = document.createElement("div");
//      containerTotalStudents.setAttribute("id", "container-Total")
//      containerStudents.appendChild(containerTotalStudents);
//      containerStudents.innerHTML = " El total de estudiantes activas es de: " + contActivas *100 / totalStudents;

};
