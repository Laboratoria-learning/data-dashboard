/*
 * Funcionalidad de tu producto
 */
 // Puedes hacer uso de la base de datos a través de la variable `data`
 //console.log(data);



var button = document.getElementById('button');
var filter = document.getElementById('filter');
var sectionGrafics = document.getElementById('filter');
var select = document.getElementById('select');
var containerStudents = document.getElementById('container-students');
var containerForm = document.getElementById('container-form');



button.addEventListener("click", function(){
  containerForm.style.display = "none";
  sectionGrafics.style.display = "block";

});


select.addEventListener("change", optionSelect);

 function optionSelect() {
    var sede = select.value;
    var sedeName = select.options[select.selectedIndex].dataset.sede;
      console.log(sedeName);
    var generation = select.options[select.selectedIndex].dataset.generation;
      console.log(generation);
    var students = data[sede][generation]["students"];
      console.log(students);
    var totalStudents = data[sede][generation]["students"].length;
      console.log(totalStudents);


    /*    var ratings = data[sede][generation]["ratings"];
    console.log(ratings);*/

    /*var containerTotalStudents = document.createElement("div");
    containerTotalStudents.setAttribute("id", "container-Total")
    containerStudents.appendChild(containerTotalStudents);

    containerTotalStudents.innerHTML = sedeName +  " El total de estudiantes es de: " + totalStudents;*/





};
