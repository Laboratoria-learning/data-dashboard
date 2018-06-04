/*
 * Funcionalidad de tu producto
 */
 // Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);


//----SE MANDAR LLAMAR LOS ELEMENTOS QUE SE VAN A UTILIZAR-----//
var button = document.getElementById('button');
var filter = document.getElementById('filter');
var sectionGrafics = document.getElementById('filter');
var select = document.getElementById('select');
var containerStudents = document.getElementById('container-students');
var containerForm = document.getElementById('container-form');
var input = document.getElementById('formulario-input');
var passw = document.getElementById('formulario-password');
var containerActive = document.getElementById('container-actives');
var containerJedis = document.getElementById('promedio-jedis');
var containerTeachers = document.getElementById('promedio-teachers');
var containerActivas = document.getElementById('activas');
var containerInactivas = document.getElementById('inactivas');
var containerTotalStudents = document.getElementById('total-students');
var nameTotalInactivas = document.getElementById('name-inactivas');
var cumplenMeta = document.getElementById('cumplen-meta');
var superanMeta = document.getElementById('superan-meta');
var satisfechas = document.getElementById('satisfechas');


//----SE LE DA FUNCIONALIDAD AL INGRESAR----Y VALIDACION AL FORMULARIO------//

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
    //  console.log(students);



//----FOR QUE ITERA EN LAS ESTUDIANTES Y CUENTA LAS ACTIVAS Y NOS DA EL NOMBRE DE LAS INACTIVAS, SE UTILIZA CONTADOR---//
  contActivas = 0;
  contInactivas = 0;
  nameInactivas = [];
 for (var i = 0; i < students.length; i++) {

    if(students[i]["active"] == true){
      contActivas ++;
       var activas = contActivas;
      // console.log(activas);


//----- FOR PARA QUE NOS DE EL PUNTAJE DE CADA UNA DE LAS ESTUDIANTES TANTO EN TECH COMO EL HSE---//
  scoreHse=0;
  scoreTech = 0;



for (var j = 0; j < students[i]["sprints"].length; j++) {
  scoreTech += students[i]["sprints"][j]["score"]["tech"];
  scoreHse += students[i]["sprints"][j]["score"]["hse"];
   var hse= "puntaje HSE " + scoreHse;
   console.log(hse);
   var tech= "puntaje TECH " + scoreTech;
   console.log(tech);

  var totalScore = scoreHse +  scoreTech;
 console.log(totalScore);



   }


 }else{
    contInactivas ++;
    var inactivas = contInactivas;

    nameInactivas.push(students[i]["name"]);
    //console.log(nameInactivas);
  }

}

  var totalStudents = contInactivas + contActivas;

  var porcentajeActivas = contActivas *100/ totalStudents;
  var totalActivas = porcentajeActivas.toFixed() + "%" ;

  var porcentajeInactivas = contInactivas * 100/ totalStudents;
  var totalInactivas = porcentajeInactivas.toFixed() + "%";

  containerTotalStudents.textContent = sede + " " + generation + " " + " Total de estudiantes : " + totalStudents;



 containerActivas.textContent = "El porcentaje de estudiantes activas es del : " + totalActivas + " " +  " total : " + activas;
 containerInactivas.textContent = "El porcentaje de estudiantes inactivas es del : " + totalInactivas + " " + " total : " + inactivas;
 nameTotalInactivas.textContent = "Estudiantes que desertaron : " + nameInactivas;


//-----PROMEDIO JEDIS Y TEACHERS---->

var ratings = data[sede][generation]["ratings"];

promJedi = 0;
promTeacher = 0;
jedi=[];
teacher = [];

for (var i = 0; i < ratings.length; i++) {
   promJedi += (ratings[i]["jedi"])/ratings.length;
  var totalJedi = promJedi.toFixed(1);

  jedi.push(totalJedi);
  //console.log(jedi);

  promTeacher += (ratings[i]["teacher"])/ratings.length;
  var totalTeachers = promTeacher.toFixed(1);

  teacher.push(totalTeachers);
  //console.log(teacher);


containerJedis.textContent =  "El promedio de los Jedis es de : " + totalJedi;
containerTeachers.textContent = "El promedio de los teachers es de : " + totalTeachers;


}

//-------ESTUDIANTES QUE CUMPLEN Y SUPERAN LA META---->

cumpleTotal= 0;
superaTotal =0;


  for (var i = 0; i < ratings.length; i++){
    var student = ratings[i]["student"];
        //  console.log(student);
    var totalCumple = cumpleTotal/ratings.length;
     cumpleTotal += student["cumple"];
    var totalMeta= superaTotal/ratings.length;
     superaTotal += student["supera"];

    var satisfechasTotal = totalCumple + totalMeta ;

cumplenMeta.textContent = "El porcentaje de estudiantes que cumplen la meta es del: " + totalCumple.toFixed() + "%";
superanMeta.textContent = "El porcentaje de estudiantes que superan la meta es del: " + totalMeta.toFixed() + "%";
satisfechas.textContent = "El porcentaje de estudiantes satisfechas es del: " + satisfechasTotal.toFixed() + "%";

}

/*google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      // Create the data table.
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
      data.addColumn('string', 'promediotyj')//nombre d la tabla
      data.addColumn('number', 'promedio'),// el promedio d teachers y jedis
      data.addRows([
          ['jedis', promJedi],
          ['teacher', promTeacher]
      ]);



        var options = {
          chart: {
            title: 'Promedio t  y  jedis',
            subtitle: 'Teachers, Jedis, y Sede: 2014-2017',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('chart_div'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }*/
};
