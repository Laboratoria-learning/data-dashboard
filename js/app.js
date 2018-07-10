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

/*---- Estudiantes que desertaron (Porcentaje)------*/

var inactivoPorcentaje = ((counterInactivo / generacionEstudiantes) * 100).toFixed(1) + '%';
console.log(inactivoPorcentaje);

// Total de estudiantes en su contenedor
 var enrollmentStudents = document.getElementById("caja-enrollment");
 enrollmentStudents.textContent = generacionEstudiantes;

 console.log(enrollmentStudents);

 // Porcentaje de estudiantes que desertaron en su contenedor
   var dropoutPorcentaje = document.getElementById("dropout-porcentaje");
   dropoutPorcentaje.textContent = inactivoPorcentaje;


/*------- ACHIEVEMENT (Meta de Estudiantes Tectico y HSE)----------------*/
var  metaStudent= 0;

var totalActTech =0;
var totalActHSE =0;

for (var i = 0; i < generacionEstudiantes; i++) {
 var scoreTech = 0;
 var scoreHSE = 0;
 var activeStudents = data[sede][generacion].students[i].active;
   if(activeStudents === true){
 console.log(activeStudents);

   for (var j = 0; j < arrayEstudiantes[i]["sprints"].length; j++) {
     scoreTech += arrayEstudiantes[i]["sprints"][j]["score"]["tech"];
     scoreHSE += arrayEstudiantes[i]["sprints"][j]["score"]["hse"];
     console.log("puntaje HSE " + scoreHSE);
     console.log("puntaje TE " + scoreTech);
   }

   var promedioTech = scoreTech / arrayEstudiantes[i]["sprints"].length;
 var promedioHSE = scoreHSE / arrayEstudiantes[i]["sprints"].length;
 console.log("promT " + promedioTech);
 console.log("promHSE "+ promedioHSE);

 if (promedioTech >= 1260 && promedioHSE >= 840) {
   metaStudent++;
 }
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
  var infActiva = arrayEstudiantes[l].active;

  for (var j = 0; j < arrayEstudiantes[l]["sprints"].length; j++) {
    scoreTech += arrayEstudiantes[l]["sprints"][j]["score"]["tech"];
    scoreHSE += arrayEstudiantes[l]["sprints"][j]["score"]["hse"];
  }

  var promedioTech = (scoreTech / arrayEstudiantes[l]["sprints"].length) * 100 / 1800;
  var promedioHSE = (scoreHSE / arrayEstudiantes[l]["sprints"].length)* 100 / 1800;


((metaStudent / generacionEstudiantes) * 100).toFixed(1);

  pintarCoders (nombre, promedioTech, promedioHSE, infActiva);
}

function pintarCoders (nombre, promedioTech, promedioHSE, infActiva){
  var contCoders = document.getElementById("studentsTab");


  //CODERS
  var divContCoders= document.createElement("div");
  var pNombre = document.createElement("p");
  var pPromTech = document.createElement("p");
  var pPromHse = document. createElement("p");
  var imagen = document.createElement("img");
  var divCoders = document.createElement ("div");
  var divInfoCoders = document.createElement("div");
  var pActiva = document.createElement("p");



  divContCoders.classList.add("contenedor-coders");
  pNombre.classList.add("nombre");
  pPromTech.classList.add("tech");
  pPromHse.classList.add("hse");
  pActiva.classList.add("active");
  imagen.src = foto;
  imagen.classList.add("foto");
  divCoders.classList.add("coders");
  divInfoCoders.classList.add("info-coders");
  pNombre.innerText = nombre;
  pPromTech.innerText = "Porcentaje Técnico:  " + promedioTech.toFixed(1) + "%";
  pPromHse.innerText = "Porcentaje HSE:  " + promedioHSE.toFixed(1)+ "%";
  pActiva.innerText = "Alumna(Activa):  " + infActiva;


  divContCoders.appendChild(divCoders);
  divCoders.appendChild(imagen);
  divCoders.appendChild(divInfoCoders);
  divInfoCoders.appendChild(pNombre);
  divInfoCoders.appendChild(pPromTech);
  divInfoCoders.appendChild(pPromHse);
  divInfoCoders.appendChild(pActiva);
  studentsTab.appendChild(divContCoders);
}



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
      jediMaster += (calificacionesNps[i]["jedi"]) / calificacionesNps.length;
      jediCalif.textContent = jediMaster.toFixed(1);

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

      var options1 = {'title': 'Alumnas (Activas) vs Alumnas (Inactivas)',
        'width': 600,
        'height': 300,
        'fontSize': 16,
        'colors':['#409D86','#084953'],
        'backgroundColor':'#3D4D59',
        'is3D': true,
        'titleTextStyle':{
        'color':'#ecde4e',
      }
    };

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

      var options2 = {'title': 'Estudiantes Activas que cumplen con la Meta (Sprint)',
        'width': 600,
        'height': 300,
        'fontSize': 16,
        'colors':['#C8544A','#610e16'],
        'backgroundColor':'#3D4D59',
        'is3D': true,
        'titleTextStyle':{
        'color':'#ecde4e',
      }
    };

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

     var options3 = {'title': '¿Recomendaría Laboratoria a otras personas?',
       'width': 600,
       'height': 300,
       'fontSize': 16,
       'colors':['#571744','#BA1B39','#E7B730'],
       'backgroundColor':'#3D4D59',
       'is3D': true,
       'titleTextStyle':{
       'color':'#ecde4e',

     }
   };

     var chart3 = new google.visualization.PieChart(document.getElementById("nps-draw"));
     chart3.draw(data3, options3);



/*--- Graficas de Teachers y Jedis ----*/
var dataTeacher = new google.visualization.DataTable();
      dataTeacher.addColumn('string', 'logro');
      dataTeacher.addColumn('number', 'puntaje');
      dataTeacher.addRows([
        ['Puntaje No Otorgado', 5 - ratingsGeneralTeacher],
        ['Puntaje Otorgado', ratingsGeneralTeacher],
      ]);

      var optionsTeacher = {'title': 'Rating otorgado a los Teachers (por Alumnas)',
        'width': 600,
        'height': 300,
        'fontSize': 14,
        'colors':['#3B875C','#094453'],
        'backgroundColor':'#3D4D59',
        'is3D': true,
        'titleTextStyle':{
        'color':'#ecde4e',
      }
    };

      var chartTeacher = new google.visualization.PieChart(document.getElementById("teacher-draw"));
      chartTeacher.draw(dataTeacher, optionsTeacher);

//JEDI MASTER

var dataJedi = new google.visualization.DataTable();
     dataJedi.addColumn('string', 'logro');
     dataJedi.addColumn('number', 'puntaje');
     dataJedi.addRows([
       ['Puntaje No Otorgado', 5 - jediMaster],
       ['Puntaje Otorgado', jediMaster],
     ]);

     var optionsJedi = {'title': 'Rating otorgado a los Jedi Master (por Alumnas)',
       'width': 600,
       'height': 300,
       'fontSize': 14,
       'colors':['#B7303F','#6F2E44'],
       'backgroundColor':'#3D4D59',
       'is3D': true,
       'titleTextStyle':{
       'color':'#ecde4e',
     }
   };


     var chartJedi = new google.visualization.PieChart(document.getElementById("jedi-draw"));
     chartJedi.draw(dataJedi, optionsJedi);



 }
 google.charts.setOnLoadCallback(drawChart);
}






/* ------------------Funcion de Menu-------------------*/
var buttonMenu = document.getElementById('boton-menu');

var showMenu = function () {
  var menu = document.getElementById('menu-opcion');

  if(menu.classList.contains('ocultar-menu')){

    menu.classList.remove('ocultar-menu');
    menu.classList.add('mostrar-menu');

  }else {
    menu.classList.remove('mostrar-menu');
    menu.classList.add('ocultar-menu');
  }

}

buttonMenu.addEventListener('click', showMenu);




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
