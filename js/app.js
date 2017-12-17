/*
 * Funcionalidad de tu producto
 */
 /*---- Función para seleccionar sede y promoción, y generar datos------*/
 var select = document.getElementById("filtro-sedes");
 select.addEventListener("change", seleccionarOpcion);
 function seleccionarOpcion() {
   var sede = select.value;
   var generacion = select.options[select.selectedIndex].dataset.generacion;
   var generacionEstudiantes = data[sede][generacion]["students"].length;

 //-----Código para acceder a las alumnas activas por sede y generacióne specificas
 var count =0;
 var counter =0;
 for (var i = 0; i< generacionEstudiantes; i++){
   console.log(generacionEstudiantes.length);
   console.log (data[sede][generacion].students[i].active);
   var activeStudents = data[sede][generacion].students[i].active;
   if(activeStudents === true){
     counter ++;
   } else {
     count ++;
   }

 }
 console.log("El valor es de activas: "+counter);
 console.log("El valor es de inactivas: "+count);

 }






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

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
