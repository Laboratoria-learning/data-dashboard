<<<<<<< HEAD
/*---- Función para seleccionar sede y promoción, y generar datos------*/
var select = document.getElementById("filtro-sedes");
select.addEventListener("change", seleccionarOpcion);
function seleccionarOpcion() {
  var sede = select.value;
  var generacion = select.options[select.selectedIndex].dataset.generacion;
  var generacionEstudiantes = data[sede][generacion]["students"].length;
  var arrayEstudiantes = data[sede][generacion]["students"];
  var calificacionesNps = data[sede][generacion]["ratings"]; //arrayRartings


  console.log(generacionEstudiantes);
  console.log(arrayEstudiantes);
  console.log(calificacionesNps);



/*----------------------- CODIGO PARA LA SECCION DEL OVERVIEW ------------------------*/


//Código para acceder a las alumnas activas por sede y generacióne specificas

var counterActivo = 0;
var counterInactivo = 0;

for (var i = 0; i< generacionEstudiantes; i++){
  console.log(generacionEstudiantes.length);
    console.log (data[sede][generacion].students[i].active);
    var activeStudents = data[sede][generacion].students[i].active;
    console.log(activeStudents);
    if(activeStudents === true){
      counterActivo ++; //contador Activo
    } else {
      counterInactivo ++; //contador Inactivo
    }
  }

  console.log("El valor es de activas: "+ counterActivo);
  console.log("El valor es de inactivas: "+ counterInactivo);
=======

window.addEventListener("load", session);

function session (event){
var newDivForm= document.createElement("div");
newDivForm.setAttribute("Id", "form");
newDivForm.classList.add("form");

var inputUser = document.createElement("input");
inputUser.setAttribute("type", "text");
inputUser.setAttribute("value", "");
inputUser.setAttribute("Id", "inputUser");
inputUser.setAttribute("placeholder", "User");
newDivForm.appendChild(inputUser);

var inputPswd = document.createElement("input");
inputPswd.setAttribute("type", "password");
inputPswd.setAttribute("value", "");
inputPswd.setAttribute("Id", "inputPassword");
inputPswd.setAttribute("placeholder", "Password");
inputPswd.setAttribute("maxlength", "11");
newDivForm.appendChild(inputPswd);

var sendButton = document.createElement ("button");
sendButton.setAttribute("value", "Send");
sendButton.setAttribute("Id","btnSnd");
sendButton.innerText = "Send";
newDivForm.appendChild(sendButton);
document.body.appendChild(newDivForm);

document.getElementById("btnSnd").addEventListener("click", createSession);

function createSession (event){
  var userValue = document.getElementById("inputUser").value;
  console.log(userValue);

  var pswdValue = document.getElementById("inputPassword").value;
  console.log(pswdValue);

  /* Usuarios registrados
  Usuario :Jonathan
  Password: Laboratoria */
  if(userValue === "Jonathan" || pswdValue === "Laboratoria"){
    alert("continua");
    inputUser.value = "";
    inputPswd.value = "";
  } else {
    alert("Falso");
    inputUser.value = "";
    inputPswd.value = "";
  }
 }
}
/*var sede= data[]

data.AQP["2016-2"].students[0].active

for(var i=1; i <= numsede.length; i++){
  for(var j=0; j<=data.AQP[i].students.length; j´++)
  {
    console.log(data.AQP[i].students[j].name)} }
*/
var arraySede = Object.keys(data);
// Obtiene la cantidad de sedes (4)
var numSede =arraySede.length;
var counter=0;
//var arrayGen = Object.keys(numSede[0]);

/*for( var i = 0; i<=numSede; i++){
  var cantGen = Object.keys(data[arraySede[i]]);
  console.log(cantGen);
  for (var j = 0; j<=cantGen.length; j++){
    var totalStudents = data[arraySede[i]][cantGen[j]].students.length;
    for(var k= 0; k<= totalStudents; k++){
      var activeStudents = data[arraySede[i]][cantGen[j]][students[0]];

    if(activeStudents === true){

      counter = counter ++;
    }
    console.log(counter);
    }
  }
}*/
var count =0;
var countTotal = 0;
//data[sede][generacion].students
for (var i in data.AQP["2016-2"].students){
  countTotal ++;
  console.log (data.AQP["2016-2"].students[i].active);
  var activeStudents = data.AQP["2016-2"].students[i].active;

  if(activeStudents === true){
    counter ++;
  } else {
    count ++;
  }

}
console.log("El valor es de: "+counter);
console.log("El valor es de inactivas: "+count);
console.log("Studiantes por generación"+ countTotal);

var countTotalStudents = 0;
var statusInd = 0;
var countTotalActive = 0;
var countTotalInact = 0;
for(var indexSede in data ){
  //console.log (data[indexSede]);
  for (var indexGen in data[indexSede]){
    //console.log( indexGen); //Obtiene el valor del número de la generación
    for (var indexPropGen in data[indexSede][indexGen]){
      //console.log(indexPropGen); //entra a estudiantes y ratings
      if (indexPropGen === "students"){
        //console.log (indexPropGen);
        for(var indexStudents  in data[indexSede][indexGen][indexPropGen]){
        //  console.log(indexStudents["students"]);
        //onsole.log(indexStudents);
        countTotalStudents++;
        statusInd = data[indexSede][indexGen][indexPropGen][indexStudents].active;
        if(statusInd === true){
          countTotalActive ++;
        } else {
          countTotalInact ++;
        }

      }
      }

        //countTotalStudents ++;
    //  }
    }
  }
}
console.log ("totales estudiantes "+ countTotalStudents);
console.log("activastotales " + countTotalActive);
console.log("inactivastotales "+ countTotalInact);


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
>>>>>>> 30ac44e7e3669bef3bc6204d01ada32a3f54848a

  /*---- Estudiantes que desertaron (Porcentaje)------*/

  var inactivoPorcentaje = ((counterInactivo / generacionEstudiantes) * 100).toFixed(1) + '%';
  console.log(inactivoPorcentaje);

  // Total de estudiantes en su contenedor
   var enrollmentStudents = document.getElementById("caja-enrollment");
   enrollmentStudents.textContent = generacionEstudiantes;

   console.log(enrollmentStudents);

   // Porcentaje de estudiantes que desertaron en su contenedor
     var dropoutPorcentaje = document.getElementById("dropout-porcentaje");
     dropoutPorcentaje.textContent = counterInactivo;


  /*------- ACHIEVEMENT (Meta de Estudiantes Tectico y HSE)----------------*/
    var  metaStudent= 0;
    var scoreTech = 0;
    var scoreHSE = 0;
    var totalActTech =0;
    var totalActHSE =0;

    for (var i = 0; i < generacionEstudiantes; i++) {
      console.log(activeStudents);

          if(activeStudents === true){
            for (var j = 0; j < arrayEstudiantes[i]["sprints"].length; j++) {
              scoreTech += arrayEstudiantes[i]["sprints"][j]["score"]["tech"];
              scoreHSE += arrayEstudiantes[i]["sprints"][j]["score"]["hse"];
              console.log(scoreHSE);
            }

            var promedioTech = scoreTech / arrayEstudiantes[i]["sprints"].length;
            var promedioHSE = scoreHSE / arrayEstudiantes[i]["sprints"].length;
             console.log(promedioTech);
             console.log(promedioHSE);

            totalActTech += promedioTech;
            totalActHSE += promedioHSE;

            console.log("El valor es de Tech: "+ promedioTech);
            console.log("El valor es de HSE: "+ promedioHSE);

          }
          var promTotalActTech = totalActTech/ counterActivo;
          var promTotalActTHSE = totalActHSE /counterActivo;

          if (promTotalActTech >= 1260 && promTotalActTHSE >= 840) {
            metaStudent++;
               }
               }
               console.log("El valor es de Tech: "+ totalActTech);
               console.log("El valor es de HSE: "+ totalActHSE);

             var cajaAchievement = document.getElementById("caja-achievement");
             cajaAchievement.textContent = metaStudent;

             var percentajeTotal = document.getElementById("achievement-porcentaje");
              percentajeTotal.textContent = ((metaStudent / generacionEstudiantes) * 100).toFixed(1);



            /*------- El Net Promoter Score (NPS) promedio de los sprints cursados----------------*/

               var promptersNps = document.getElementById("promoters");
               var passiveNps = document.getElementById("passive");
               var detractorNps = document.getElementById("detractor");
               var nps = document.getElementById("acumulativo-nps");
               console.log(nps);
               var promoters = 0 / generacionEstudiantes * 100;
                 var passives = 0 / generacionEstudiantes * 100;
                 var detractors = 0 / generacionEstudiantes * 100;
                 for (i = 0; i < calificacionesNps.length; i++) {
                   promoters += (calificacionesNps[i]["nps"]["promoters"]) / calificacionesNps.length;
                   passives += (calificacionesNps[i]["nps"]["passive"]) / calificacionesNps.length;
                   detractors += (calificacionesNps[i]["nps"]["detractors"]) / calificacionesNps.length;

                   promptersNps.textContent = promoters.toFixed(1) + "% Promoters";
                   passiveNps.textContent = passives.toFixed(1) + "% Passives";
                   detractorNps.textContent = detractors.toFixed(1) + "% Detractors";

                   nps.textContent = (promoters - detractors).toFixed(1);
                 }






             /*----------------------- CODIGO PARA LA SECCION DE ESTUDIANTES ------------------------*/
             /* Agregar funcion para que aparezcan lista de estudiantes*/
             /*Funcion para que aparezcan lista de estudiantes*/
             document.getElementById("studentsTab").innerHTML = "";
             var scoreTech = 0;
             var scoreHSE = 0;

             for (var l = 0; l <generacionEstudiantes; l++){
               var nombre = arrayEstudiantes[l].name;
               var foto = arrayEstudiantes[l].photo;

               for (var j = 0; j < arrayEstudiantes[l]["sprints"].length; j++) {
                 scoreTech += arrayEstudiantes[l]["sprints"][j]["score"]["tech"];
                 scoreHSE += arrayEstudiantes[l]["sprints"][j]["score"]["hse"];
               }

               var promedioTech = scoreTech / arrayEstudiantes[l]["sprints"].length;
               var promedioHSE = scoreHSE / arrayEstudiantes[l]["sprints"].length;
               pintarCoders (nombre, promedioTech, promedioHSE);
             }

             function pintarCoders (nombre, promedioTech, promedioHSE){
               var contCoders = document.getElementById("studentsTab");
               //CODERS
                var divContCoders= document.createElement("div");
                var pNombre = document.createElement("p");
                var pPromTech = document.createElement("p");
                var pPromHse = document. createElement("p");
                var imagen = document.createElement("img");
                var divCoders = document.createElement ("div");
                var divInfoCoders = document.createElement("div");



                divContCoders.classList.add("contenedor-coders");
                pNombre.classList.add("nombre");
                pPromTech.classList.add("tech");
                pPromHse.classList.add("hse");
                imagen.src = foto;
                imagen.classList.add("foto");
                divCoders.classList.add("coders");
                divInfoCoders.classList.add("info-coders");
                pNombre.innerText = nombre;
                pPromTech.innerText = "Promedio Técnico: " + promedioTech.toFixed(1);
                pPromHse.innerText = "Promedio HSE: " + promedioHSE.toFixed(1);
                divContCoders.appendChild(divCoders);
                divCoders.appendChild(imagen);
                divCoders.appendChild(divInfoCoders);
                divInfoCoders.appendChild(pNombre);
                divInfoCoders.appendChild(pPromTech);
                divInfoCoders.appendChild(pPromHse);
                studentsTab.appendChild(divContCoders);
              }


<<<<<<< HEAD


              /*----------------------- CODIGO PARA LA SECCION DE TEACHERS Y JEDIS ------------------------*/

              var califTotalTeacher = 0;

                  for (var i = 0; i < calificacionesNps.length; i++) {  //calificacionesNps = (arrayRartings)
                    califTotalTeacher += calificacionesNps[i]["teacher"];
                  }

                  var ratingsGeneralTeacher = califTotalTeacher / calificacionesNps.length; //calificacionesNps = (arrayRartings)
                  var teacherRating = document.getElementById("teacher-calificacion");
                  teacherRating.textContent = ratingsGeneralTeacher.toFixed(1);
                  //Calificacion Jedi

                  var jediCalif = document.getElementById("jedi-calificacion");
                      var jediMaster = 0;

                      for (i = 0; i < calificacionesNps.length; i++) {
                        jediMaster += (calificacionesNps[i]['jedi']) / calificacionesNps.length;
                        jediCalif.textContent = jediMaster.toFixed(1);
                        if (jediMaster > 5) {
                          jediCalif.style.color = 'green';
                        } else {
                          jediCalif.style.color = 'black';
                        }
                      }


                  /*----------------------- SECCION DE GRAFICAS (Google Charts) -----------------*/

                  function drawChart() {
                    /*---- Graficas de Overview ---*/

                    //DESERCION (Grafica)
                    var data1 = new google.visualization.DataTable();
                          data1.addColumn('string', 'name');
                          data1.addColumn('number', 'students');
                          data1.addRows([
                            ['Desertoras', counterInactivo],
                            ['Asisten a clases', generacionEstudiantes - counterInactivo],
                          ]);

                          var options1 = {'title': 'Alumnas (Activas) vs Alumnas que han desertado',
                            'width': 500,
                            'height': 300,
                            'colors':['#000000','#F7B617'],
                            'is3D': true};

                          var chart1 = new google.visualization.PieChart(document.getElementById("enrollment-draw"));
                          chart1.draw(data1, options1);


                    //CUMPLIO META (Grafica)
                    var data2 = new google.visualization.DataTable();
                          data2.addColumn('string', 'name');
                          data2.addColumn('number', 'students');
                          data2.addRows([
                            ['No Cumple meta', generacionEstudiantes - metaStudent],
                                   ['Cumple meta', metaStudent],
                                 ]);

                                 var options2 = {'title': 'Estudiantes la meta de puntaje establecido (Sprint)',
                                   'width': 500,
                                   'height': 300,
                                   'colors':['#000000','#F7B617'],
                                   'is3D': true};

                                 var chart2 = new google.visualization.PieChart(document.getElementById("achieven-draw"));
                                 chart2.draw(data2, options2);

                           //El Net Promoter Score (NPS)
                           var data3 = new google.visualization.DataTable();
                                data3.addColumn('string', 'logro');
                                data3.addColumn('number', 'puntaje');
                                data3.addRows([
                                  ['Detractors', detractors / 100 * generacionEstudiantes],
                                  ['Passives', passives / 100 * generacionEstudiantes],
                                  ['Promoters', promoters / 100 * generacionEstudiantes]
                                ]);

                                var options3 = {'title': '¿Recomendarías LABORATORIA a otras personas?',
                                  'width': 500,
                                  'height': 300,
                                  'colors':['#000000','#2B2B2B','#F7B617'],
                                  'is3D': true};

                                var chart3 = new google.visualization.PieChart(document.getElementById("nps-draw"));
                                chart3.draw(data3, options3);



                                /*--- Graficas de Teachers y Jedis ----*/
      var dataTeacher = new google.visualization.DataTable();
            dataTeacher.addColumn('string', 'logro');
            dataTeacher.addColumn('number', 'puntaje');
            dataTeacher.addRows([
              ['Puntaje No Otorgado', 5 - ratingsGeneralTeacher],
              ['Puntaje Otorgado (Promedio)', ratingsGeneralTeacher],
            ]);

            var optionsTeacher = {'title': 'Rating otorgado por las alumnas a sus junior y master teachers',
              'width': 500,
              'height': 300,
              'colors':['#83d202','#004411'],
              'is3D': true};

            var chartTeacher = new google.visualization.PieChart(document.getElementById("teacher-draw"));
            chartTeacher.draw(dataTeacher, optionsTeacher);


                                  //JEDI MASTER

                                  var dataJedi = new google.visualization.DataTable();
                                       dataJedi.addColumn('string', 'logro');
                                       dataJedi.addColumn('number', 'puntaje');
                                       dataJedi.addRows([
                                         ['Puntaje No Otorgado', 5 - jediMaster],
                                              ['Puntaje Otorgado Promedio', jediMaster],
                                            ]);

                                            var optionsJedi = {'title': 'Rating otorgado por las alumnas a sus Jedi Master',
                                              'width': 500,
                                              'height': 300,
                                              'colors':['#83d202','#004411'],
                                              'is3D': true};

                                            var chartJedi = new google.visualization.PieChart(document.getElementById("jedi-draw"));
                                            chartJedi.draw(dataJedi, optionsJedi);



                                        }
                                        google.charts.setOnLoadCallback(drawChart);
                                       }

                                       /* ------------------Funcion de Tabuladores-------------------*/
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
=======
>>>>>>> 30ac44e7e3669bef3bc6204d01ada32a3f54848a
