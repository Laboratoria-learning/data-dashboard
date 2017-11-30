/*
 * Funcionalidad de tu producto
 */

// ------*por sede lima y sus generaciones*------
/* console.log(data);
var siteGener = document.getElementById("select-lima");
// otra manera con clases 

var currentStudent = document.getElementById("current-student");
var percentDropoutStudent = document.getElementById("percentage-dropout-student");

//var arrSiteLim = siteGener.options[0].value;
siteGener.addEventListener('change', showStadistic);
function showStadistic(e){
for (var r = 0 ; r < siteGener.options.length ; r++ ) { 
// ul para mostrar container-student-dropout
var containerStudentDropout = document.getElementById('container-student-dropout');  
if (e.target.value === siteGener.options[r].value){  //sitesGener[0].options[r].value
   var arrdatak = Object.keys(data);
// arrdatak - ["AQP", "CDMX", "LIM", "SCL"]
for (var i = 0 ; i < arrdatak.length ; i++) {
  if (arrdatak[i] === 'LIM') {   //(arrdatak[i] === 'LIM')
    var seats = data[arrdatak[i]]; // sedes
    // console.log(seats);
    var arrdatakg = Object.keys(data[arrdatak[i]]);
    // console.log(arrdatakg + " tamaño " + arrdatakg.length);
    sumSede = 0;
    for (var j = 0 ; j < arrdatakg.length ; j++) {
    // console.log(arrdatakg[j]);
     if(arrdatakg[j] === siteGener.options[r].value){
     // console.log('Generación:' + arrdatakg[j]);
      var arrdatakgs = Object.keys(data[arrdatak[i]][arrdatakg[j]]);
       //console.log(arrdatakgs[0]);
      var sedegen = data[arrdatak[i]][arrdatakg[j]][arrdatakgs[0]].length;
      sumSede = sumSede + sedegen;
   // array de las estudiantes:
      var arrdatakgsi = data[arrdatak[i]][arrdatakg[j]][arrdatakgs[0]];
        count = 0 ;
      for(var k = 0 ; k < arrdatakgsi.length ; k++){
       //console.log(arrdatakgsi[k]);
       var arrdatakgsid = Object.keys(arrdatakgsi[k])
       // console.log(arrdatakgsid[2]);
        
         if (arrdatakgsi[k][arrdatakgsid[2]] === false){
          //console.log(arrdatakgsi[k][arrdatakgsid[2]]);
            count= count + 1;
         }
    
      } 
    
  alert('sede :' + arrdatak[i] + '\n' + 'total de estudiantes:' + sumSede + '\n' + 'desertoras: ' + count + '\n' +     'Generación:' + arrdatakg[j] + '\n' + 'Porcentaje de desertoras: ' + (count/sumSede)*100+'%' );
         // creando span de student dropout

      containerStudentDropout.firstElementChild.classList.add('student-dropout');
      containerStudentDropout.firstElementChild.textContent = count;
      containerStudentDropout.firstElementChild.nextElementSibling.textContent = "# DROPOUT STUDENTS";

      currentStudent.textContent = sumSede;
      percentDropoutStudent.textContent = ((count/sumSede)*100).toFixed(2)+'%'
   //  console.log('desertoras: ' + count);
    }

      }
//  console.log('sede :' + arrdatak[i] + '\n' + 'total de estudiantes:' + sumSede + '\n' + 'desertoras: ' + count + '\n' + 'Generación:' + arrdatakg[j] );
  }
}

}

   }
 
} */


// -----------------------------------------* extracto a usar pra lima 2017 i---------------
var arrdatak = Object.keys(data);
// arrdatak - ["AQP", "CDMX", "LIM", "SCL"]
for (var i = 0 ; i < arrdatak.length ; i++) {
  if (arrdatak[i] === 'LIM') {
    var seats = data[arrdatak[i]]; // sedes
    // console.log(seats);
    var arrdatakg = Object.keys(data[arrdatak[i]]);
    // console.log(arrdatakg + " tamaño " + arrdatakg.length);
    sumSede = 0;
    for (var j = 0 ; j < arrdatakg.length ; j++) {
    // console.log(arrdatakg[j]);
      if (arrdatakg[j] === '2017-1') {
        // console.log('Generación:' + arrdatakg[j]);
        var arrdatakgs = Object.keys(data[arrdatak[i]][arrdatakg[j]]);
        // console.log(arrdatakgs[0]);
        var sedegen = data[arrdatak[i]][arrdatakg[j]][arrdatakgs[0]].length;
        sumSede = sumSede + sedegen;
        // array de las estudiantes:
        var arrdatakgsi = data[arrdatak[i]][arrdatakg[j]][arrdatakgs[0]];
        count = 0 ;
        for (var k = 0 ; k < arrdatakgsi.length ; k++) {
          // console.log(arrdatakgsi[k]);
          var arrdatakgsid = Object.keys(arrdatakgsi[k]);
          // console.log(arrdatakgsid[2]);
        
          if (arrdatakgsi[k][arrdatakgsid[2]] === false) {
          // console.log(arrdatakgsi[k][arrdatakgsid[2]]);
            count = count + 1;
          }
        } 
        console.log('sede :' + arrdatak[i] + '\n' + 'total de estudiantes:' + sumSede + '\n' + 'desertoras: ' + count + '\n' + 'Generación:' + arrdatakg[j] + '\n' + 'Porcentaje de desertoras: ' + (count / sumSede) * 100 + '%');
   
        //  console.log('desertoras: ' + count);
      }
    }
    //  console.log('sede :' + arrdatak[i] + '\n' + 'total de estudiantes:' + sumSede + '\n' + 'desertoras: ' + count + '\n' + 'Generación:' + arrdatakg[j] );
  }
}


// -----------------------------* seleccion de total de alumnas y deserción por sede   -----------------------------------
// El total de estudiantes presentes por sede

var siteCheck = document.getElementsByClassName('sede');
for (var r = 0; r < siteCheck.length; r++) {
  siteCheck[r].addEventListener('click', showSedes);
 
  /*
siteCheck[0].addEventListener('click', checkAddress);
function checkAddress(e)
    { if (e.target.checked == true)
        {alert("a");
        }
    }*/
  function showSedes(e) {
  // alert( e.target.value);
    if (e.target.checked === true) {
      var arrdatak = Object.keys(data);
      // arrdatak - ["AQP", "CDMX", "LIM", "SCL"]
      for (var i = 0 ; i < arrdatak.length ; i++) {
        if (arrdatak[i] === e.target.value) {
          var seats = data[arrdatak[i]]; // sedes
          // console.log(seats); - generaciones 2017-1
          var arrdatakg = Object.keys(data[arrdatak[i]]);
          // console.log(arrdatakg + " tamaño " + arrdatakg.length);
          sumSede = 0; sumCount = 0 ;
          for (var j = 0 ; j < arrdatakg.length ; j++) {
            var arrdatakgs = Object.keys(data[arrdatak[i]][arrdatakg[j]]);
            // console.log(arrdatakgs[0]);
            var sedegen = data[arrdatak[i]][arrdatakg[j]][arrdatakgs[0]].length;
            sumSede = sumSede + sedegen;
            var arrdatakgsi = data[arrdatak[i]][arrdatakg[j]][arrdatakgs[0]];
               
            count = 0 ;
            for (var k = 0 ; k < arrdatakgsi.length ; k++) {
              // console.log(arrdatakgsi[k]);
              var arrdatakgsid = Object.keys(arrdatakgsi[k]);
              // console.log(arrdatakgsid[2]);
                
              if (arrdatakgsi[k][arrdatakgsid[2]] === false) {
                // console.log(arrdatakgsi[k][arrdatakgsid[2]]);
                count = count + 1;
              }
            }
            sumCount = sumCount + count;
            // console.log("desertados : " + count);
          }

          var containerTotalStudent = document.getElementById('container-total-student');
          containerTotalStudent.children[0].textContent = 'Sede : '; 
          containerTotalStudent.children[1].textContent = arrdatak[i];
          containerTotalStudent.children[4].textContent = ' | Total Enroll: ';
          containerTotalStudent.children[5].textContent = sumSede;
          containerTotalStudent.children[6].textContent = '  | Dropout Total: ';
          containerTotalStudent.children[7].textContent = sumCount;
          //   containerTotalStudent.children[2].textContent =  'DROPOUT TOTAL: ' + sumCount;
          // console.log('sede :' + arrdatak[i] + 'total de estudiantes:' +  + 'desertores : ' + sumCount);
        } 
      }
    }
  }
}


// -------------------------------prueba de los generacion y sedes*------------------------------------------------
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


// var siteGener = document.getElementById("select-lima");
// otra manera con clases 
var sitesCheck = document.getElementsByClassName('sede');

// elementos donde mostrar
var currentStudent = document.getElementById('current-student');
var percentDropoutStudent = document.getElementById('percentage-dropout-student');


for (var r = 0; r < sitesCheck.length; r++) {
  sitesCheck[r].addEventListener('click', showSedesxgene);

  function showSedesxgene(event) {
    if (event.target.checked === true) {
      var sitesGener = document.getElementsByClassName('sede-lab');	
      for (var c = 0 ; c < sitesGener.length; c++) {
        sitesGener[c].addEventListener('change', showStadistic);
										
        // var arrSiteLim = siteGener.options[0].value; siteGener.addEventListener('change', showStadistic);
        // sitesGener[0].addEventListener('change', showStadistic);
        function showStadistic(e) {
          //	alert("estoy en :" + event.target.value);
          for (var r = 0 ; r < e.target.options.length ; r++) { 
            // ul para mostrar container-student-dropout
            var containerStudentDropout = document.getElementById('container-student-dropout');  
            if (e.target.value === e.target.options[r].value) { // sitesGener[0].options[r].value //siteGener.options[r].value
              var arrdatak = Object.keys(data);
              // arrdatak - ["AQP", "CDMX", "LIM", "SCL"]
              for (var i = 0 ; i < arrdatak.length ; i++) {
										 if (arrdatak[i] === event.target.value) { // ******(arrdatak[i] === 'LIM')
                  var seats = data[arrdatak[i]]; // sedes
											  // console.log(seats);
                  var arrdatakg = Object.keys(data[arrdatak[i]]);
																		    // console.log(arrdatakg + " tamaño " + arrdatakg.length);
											 sumSede = 0;
											 for (var j = 0 ; j < arrdatakg.length ; j++) {
																						    // console.log(arrdatakg[j]);
                    if (arrdatakg[j] === e.target.options[r].value) { // siteGener.options[r].value
                      // console.log('Generación:' + arrdatakg[j]);
                      var arrdatakgs = Object.keys(data[arrdatak[i]][arrdatakg[j]]);
                      // console.log(arrdatakgs[0]);
                      var sedegen = data[arrdatak[i]][arrdatakg[j]][arrdatakgs[0]].length;
													 sumSede = sumSede + sedegen;
													 // array de las estudiantes:
                      var arrdatakgsi = data[arrdatak[i]][arrdatakg[j]][arrdatakgs[0]];
													 count = 0 ;
													   for (var k = 0 ; k < arrdatakgsi.length ; k++) {
                        // console.log(arrdatakgsi[k]);
                        var arrdatakgsid = Object.keys(arrdatakgsi[k]);
                        // console.log(arrdatakgsid[2]);
															  if (arrdatakgsi[k][arrdatakgsid[2]] === false) {
																										          // console.log(arrdatakgsi[k][arrdatakgsid[2]]);
																  count = count + 1;
															 }
															 } 
																						    
                      //		 alert('sede :' + arrdatak[i] + '\n' + 'total de estudiantes:' + sumSede + '\n' + 'desertoras: ' + count + '\n' +     'Generación:' + arrdatakg[j] + '\n' + 'Porcentaje de desertoras: ' + (count/sumSede)*100+'%' );
																						         // creando span de student dropout
                      var containerTotalStudent = document.getElementById('container-total-student');                      
                      containerTotalStudent.children[2].textContent = ' | Generación: ' + '\t';
                      containerTotalStudent.children[3].textContent = arrdatakg[j];
                      //           
															 containerStudentDropout.firstElementChild.classList.add('student-dropout');
															 containerStudentDropout.firstElementChild.textContent = count ;
															 containerStudentDropout.firstElementChild.nextElementSibling.textContent = '# Dropout Students';
                              
                      currentStudent.textContent = sumSede;
															 percentDropoutStudent.textContent = ((count / sumSede) * 100).toFixed(2) + '%';
																						   //  console.log('desertoras: ' + count);
																			 }
																						   //	alert('sede :' + arrdatak[i] + '\n' + 'total de estudiantes:' + sumSede + '\n' + 'desertoras: ' + count + '\n' +     'Generación:' + arrdatakg[j] + '\n' + 'Porcentaje de desertoras: ' + (count/sumSede)*100+'%' );			 
                  }
                  //  console.log('sede :' + arrdatak[i] + '\n' + 'total de estudiantes:' + sumSede + '\n' + 'desertoras: ' + count + '\n' + 'Generación:' + arrdatakg[j] );
															  		}
              }
            }
																	 }
        }
      }			
     		}
  	 }
}


// ----------------------------------*Funcion para mostrar cantidad de tech skill-------------------------------------------

var techSkillSelect = document.getElementById('select-sprint');
  
techSkillSelect.addEventListener('change', showTechSkills);

function showTechSkills(e) {
  var textSedeSelected = document.getElementById('sedeSelect').textContent;
  var textGenerSelected = document.getElementById('generSelect').textContent;
  if (textSedeSelected && textGenerSelected) {
    for (var r = 0 ; r < e.target.options.length ; r++) {   
      if (e.target.value === e.target.options[r].value) {
        var s = data[textSedeSelected][textGenerSelected]['students'];
        var count = 0, activeStudents = 0 ;
        for (var i = 0 ; i < s.length; i++) {
          if (s[i]['active'] === true) {
            activeStudents++;
            var st = s[i];
            // validar si el sprint de la sede y generacion existe   
            // sprint existente
                            
            if (st['sprints'][parseInt(e.target.value)] === undefined) {
              count = -1;
            } else {
              if (parseInt(st['sprints'][parseInt(e.target.value)]['score']['tech']) > 1260) {
                count = count + 1 ;  
                console.log(parseInt(st['sprints'][parseInt(e.target.value)]['score']['tech']));
              }
            }  
          } 
        }
      }
    }
    // halla cantidad por sprint
    if (count == -1) {
      alert('este sprint no se realizó, por favor escoga otro');
    } else { 
      document.getElementById('count-student-target').textContent = count;
      document.getElementById('percentage-target-student').textContent = ((count / activeStudents) * 100).toFixed(2) + '%'; 
      document.getElementById('total-student-active').textContent = '% OF TOTAL(' + activeStudents + ')'; 
      document.getElementById('total-student-active').classList.add('total-student-active');  
      //  alert("activos" +activeStudents+ "cantidad" + count + "value del select: " + (parseInt(e.target.value)+1) + "value de la opcion select: ");   
    }
  } else {
    alert('Por favor seleccione una Sede y su generación');
  }
}
/*
    var sitesGener = document.getElementsByClassName("sede-lab"); // recorre todos los selects
      for(var c = 0 ; c < sitesGener.length; c++) {
          sitesGener[c].addEventListener('change', showStadistic);
                    
          //var arrSiteLim = siteGener.options[0].value; siteGener.addEventListener('change', showStadistic);
          // sitesGener[0].addEventListener('change', showStadistic);// select lima
            function showStadistic(e){
            //  alert("estoy en :" + event.target.value);
              for (var r = 0 ; r < e.target.options.length ; r++ ) { 
            // ul para mostrar container-student-dropout
              var containerStudentDropout = document.getElementById('container-student-dropout');  
                if (e.target.value === e.target.options[r].value){  //sitesGener[0].options[r].value //siteGener.options[r].value
                  var arrdatak = Object.keys(data);
                  */
// -----------------------------function para mostrar HSE Skills -----------------------------------------------

var hseSkillSelect = document.getElementById('select-sprint-hse');
  
hseSkillSelect.addEventListener('change', showHseSkills);

function showHseSkills(e) {
  var textSedeSelected = document.getElementById('sedeSelect').textContent;
  var textGenerSelected = document.getElementById('generSelect').textContent;
  if (textSedeSelected && textGenerSelected) {
    for (var r = 0 ; r < e.target.options.length ; r++) {   
      if (e.target.value === e.target.options[r].value) {
        var s = data[textSedeSelected][textGenerSelected]['students'];
        var count = 0, activeStudents = 0 ;
        for (var i = 0 ; i < s.length; i++) {
          if (s[i]['active'] === true) {
            activeStudents++;
            var st = s[i];
            // validar si el sprint de la sede y generacion existe   
            // sprint existente
                            
            if (st['sprints'][parseInt(e.target.value)] === undefined) {
              count = -1;
            } else {
              if (parseInt(st['sprints'][parseInt(e.target.value)]['score']['hse']) > 840) {
                count = count + 1 ;  
                console.log(parseInt(st['sprints'][parseInt(e.target.value)]['score']['hse']));
              }
            }  
          } 
        }
      }
    }
    // halla cantidad por sprint
    if (count == -1) {
      alert('este sprint no se realizó, por favor escoga otro');
    } else { 
      document.getElementById('student-target-hse').textContent = count;
      document.getElementById('percentage-target-hse').textContent = ((count / activeStudents) * 100).toFixed(2) + '%'; 
      document.getElementById('total-hse-active').textContent = '% OF TOTAL(' + activeStudents + ')'; 
      document.getElementById('total-hse-active').classList.add('total-student-active');  
      //  alert("activos" +activeStudents+ "cantidad" + count + "value del select: " + (parseInt(e.target.value)+1) + "value de la opcion select: ");   
    }
  } else {
    alert('Por favor seleccione una Sede y su generación');
  }
}
// ---------------------------------------mostrar puntaje  estudiantes por sede y generación------------------------------------------------------
var studentsData = document.getElementById('students');
studentsData.addEventListener('click', showStudentData);
function showStudentData(e) {
  var textSedeSelected = document.getElementById('sedeSelect').textContent;
  var textGenerSelected = document.getElementById('generSelect').textContent;
  var sa = data[textSedeSelected][textGenerSelected]['students'];
  for (var j = 0;j < sa.length;j++) {
    if (sa[j]['active'] === true) {
      // var ss = data[textSedeSelected][textGenerSelected]["students"][j]["sprints"];
      var ss = sa[j]['sprints'];
      var sumSprintTotal = 0, sumSprintTotalH = 0;
      for (var i = 0 ; i < ss.length ;i++) {
        var scoreTech = ss[i]['score']['tech'];
        var scoreHse = ss[i]['score']['hse'];
        sumSprintTotal = sumSprintTotal + scoreTech;
        sumSprintTotalH = sumSprintTotalH + scoreHse;   
      }
      // console.log((((sumSprintTotal/4)/1800)*100).toFixed(2));
      porcentajeTech = (((sumSprintTotal / ss.length) / 1800) * 100).toFixed(2);
      porcentajeHse = (((sumSprintTotalH / ss.length) / 1800) * 100).toFixed(2);
    }
    var sectionStudents = document.getElementById('studentsData');
    var divStudent = document.createElement('div');
    // Student Name
    var name = document.createElement('h2');
    var textName = document.createTextNode(sa[j]['name']);
    name.appendChild(textName);
    divStudent.appendChild(name); 
    // porcentajeTech
    var sporcentajeTech = document.createElement('h4');
    var textTech = document.createTextNode('  Tech Skills' + porcentajeTech + '% ');
    sporcentajeTech.appendChild(textTech);
    sporcentajeTech.classList.add('square');
    divStudent.appendChild(sporcentajeTech); 
    // PorcentajeHSe
    var sporcentajeHse = document.createElement('h4');
    var textHse = document.createTextNode('| Life Skills: ' + porcentajeHse + '% | ');
    sporcentajeHse.appendChild(textHse);
    sporcentajeHse.classList.add('square');
    divStudent.appendChild(sporcentajeHse); 
    sectionStudents.appendChild(divStudent);
    console.log(sa[j]['name'] + 'porcentaje de sprint tech: ' + porcentajeTech + 'Porcentaje de sprint hse: ' + porcentajeHse);
  }
}


