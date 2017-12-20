/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);

/*var arraySede = Object.keys(data);
var numSede = arraySede.length;
var nombreSede = 0;


console.log(numSede);


for (var i = 0; i <= numSede; i++) {
  var numeroGeneraciones = Object.keys(data[arraySede[i]]);
  console.log(numeroGeneraciones);
  for (var j = 0; j <= numeroGeneraciones.length; j++) {
    var totalAlumnas = data[numSede[i]][numeroGeneraciones[j]]["students"].length;

    }
  }*/






/*--------------------------------------------------------
---------- Función para seleccionar sede y promoción, y generar datos------*/
//Código para acceder a las alumnas activas por sede y generacióne specificas

var count =0;
var counter =0;
var sede= data.set
//data[sede][generacion].students
for (var i in data.AQP["2016-2"].students){
  console.log (data.AQP["2016-2"].students[i].active);
  var activeStudents = data.AQP["2016-2"].students[i].active;
  if(activeStudents === true){
    counter ++;
  } else {
    count ++;
  }

}
console.log("El valor es de activas: "+counter);
console.log("El valor es de inactivas: "+count);



/* ---------------------------------------------------------------
-----Funcion de Tabuladores*/
   function mostrarOcultar(event) {
     var tabSeleccionado = event.target.dataset.tabSeleccionado;
     var overflow = document.getElementById("overviewTab");
     var students = document.getElementById("studentsTab");
     var teachers = document.getElementById("teachersTab");
     if(tabSeleccionado === "tabOverview"){
      console.log("overflow");
      students.style.display = "none";
      teachers.style.display = "none";
      //muestra el tab
      overflow.style.display = "block";

     }else if (tabSeleccionado === "tabStudents") {
    console.log("studen");
     teachers.style.display = "none";
     overflow.style.display = "none";
     //muestra la tab
     students.style.display = "block";

     }else if (tabSeleccionado === "tabTeachers") {
    console.log("tecaher");
     students.style.display = "none";
     overflow.style.display = "none";
     //muestra la tab
     teachers.style.display = "block";
     }

   }
     var cargarPagina = function() {
       var overflow = document.getElementById("overviewTab");
       var students = document.getElementById("studentsTab");
       var teachers = document.getElementById("teachersTab");
       overflow.style.display = "none";
       students.style.display = "none";
       teachers.style.display = "none";

       var elementosTab = document.getElementsByClassName("tab");
       for (var i = 0; i < elementosTab.length; i++) {
         elementosTab[i].addEventListener("click",mostrarOcultar);
       }
     }

   cargarPagina();
