window.addEventListener('load', function() {
  var sedes = document.querySelectorAll('.sede');
  for (var i = 0; i < sedes.length; i++) {
    sedes[i].addEventListener('click', function(event){
      var sede =  event.target.dataset.sede;
      console.log(event.target.dataset.sede); //AQP
      var ulParent = document.querySelector('.generations_hiden');
      ulParent.classList.toggle('generations_show');
     var generations = ulParent.children;
     console.log(generations);
     for(var j in generations) {
         generations[j].addEventListener('click',function(event){
           var gen = event.target.dataset.generation;
           console.log(gen);
           console.log(data[sede][gen].students.length)
         })
       }
     })
 }
});

/*
var objSedes = Object.keys(data);
console.log(objSedes);

var allSedes = document.querySelectorAll('.sede');
console.log(allSedes);

// variables que guarda elemtnos que tiene en comun que son generaciones de la misma sede
var allGenerationAQP = document.querySelectorAll('.generationAQP');
var allGenerationCDMX = document.querySelectorAll('.generationCDMX');
var allGenerationLIM = document.querySelectorAll('.generationLIM');
var allGenerationSCL = document.querySelectorAll('.generationSCL');

// creando funcion que cree un query selector all de las genereaciones de cualquier sede


// sedes y prefijos
var arequipa = 'AQP' ;
var mexico = 'CDMX' ;
var lima = 'LIM' ;
var chile = 'SCL' ;

// variable que almacena  el texto junto de sede y generacion
var sedeGeneration = document.getElementById('sede_generation');
// variable que almacena la lista de sedes
var listSedes = document.getElementById('list_sedes');

// variables que almacenan la lista de las  generaciones del la sede escogida
var arequipaGenerations = document.getElementById('arequipa_generations');
var mexicoGenerations = document.getElementById('mexico_generations');
var limaGenerations = document.getElementById('lima_generations');
var chileGenerations = document.getElementById('chile_generations');

// variables que alamcenan cada sede del html en el dom
var sede0 = document.getElementById('sede_0');
var sede1 = document.getElementById('sede_1');
var sede2 = document.getElementById('sede_2');
var sede3 = document.getElementById('sede_3');

// variables que almacenan cada generacion del html en el dom
var codeGenerationAQP0 = document.getElementById('code_generation_aqp_0');
var codeGenerationAQP1 = document.getElementById('code_generation_aqp_1');
var codeGenerationCDMX0 = document.getElementById('code_generation_cdmx_0');
var codeGenerationCDMX1 = document.getElementById('code_generation_cdmx_1');
var codeGenerationLIM0 = document.getElementById('code_generation_lim_0');
var codeGenerationLIM1 = document.getElementById('code_generation_lim_1');
var codeGenerationLIM2 = document.getElementById('code_generation_lim_2');
var codeGenerationSCL0 = document.getElementById('code_generation_scl_0');
var codeGenerationSCL1 = document.getElementById('code_generation_scl_1');
var codeGenerationSCL2 = document.getElementById('code_generation_scl_2');


/*
var addVarSedesYshowListGenerations = function (){
  addVarSede();
  showListSedes();
}
*/
/*
sedeGeneration.addEventListener('click', showListSedes);
function showListSedes(event) {
  listSedes.classList.toggle('list_active');
  for (var i = 0; i < allSedes.length; i++) {
    allSedes[i].addEventListener('click', addVarSede);
    function addVarSede(event) {
      var codeSede = event.target.dataset.sedecod;
      console.log(codeSede);
      var sede = Object.keys(data)[codeSede];
      console.log(sede) ;
    };
  }
};


/*
for (var i = 0; i < allSedes.length; i++) {
allSedes[i].addEventListener('click', showListGenerations);
function showListGenerations(event) {
  // console.log(typeof event.target.dataset.sedecod)=string;
  switch (event.target.dataset.sedecod) {
  case '0' :
    // activar display block de la lista de generaciones y que se vea desplegable
    arequipaGenerations.classList.toggle('list_active') ;

    // crear evento o funcion que al dar click me almacene la variable codeGeneration
    for (var i = 0; i < allGenerationAQP.length; i++) {
      allGenerationAQP[i].addEventListener('click', addVarGeneration);
      function addVarGeneration(event) {
        var codeGeneration = event.target.dataset.codeaqpgeneration;
        console.log(codeGeneration);
      }
    }
    break;
  case '1' :
    mexicoGenerations.classList.toggle('list_active') ;
    for (var i = 0; i < allGenerationCDMX.length; i++) {
      allGenerationCDMX[i].addEventListener('click', addVarGeneration);
      function addVarGeneration(event) {
        var codeGeneration = event.target.dataset.codecdmxgeneration;
        console.log(codeGeneration);
      }
    }
    break;
  case '2' :
    limaGenerations.classList.toggle('list_active') ;
    for (var i = 0; i < allGenerationLIM.length; i++) {
      allGenerationLIM[i].addEventListener('click', addVarGeneration);
      function addVarGeneration(event) {
        var codeGeneration = event.target.dataset.codelimgeneration;
        console.log(codeGeneration);
      }
    }
    break;
  case '3' :
    chileGenerations.classList.toggle('list_active') ;
    for (var i = 0; i < allGenerationSCL.length; i++) {
      allGenerationSCL[i].addEventListener('click', addVarGeneration);
      function addVarGeneration(event) {
        var codeGeneration = event.target.dataset.codesclgeneration;
        console.log(codeGeneration);
      }
    }
    break;
  }

}

// var generation = Object.keys(Object.values(data)[])

/* var codeSede = '' ;
switch (true) {
case event.target.dataset.cod = 0:
  codeSede = 0 ;
  break;
case event.target.dataset.cod = 1:
  codeSede = 1 ;
  break;
case event.target.dataset.cod = 2:
  codeSede = 2 ;
  break;
case event.target.dataset.cod = 3:
  codeSede = 3 ;
  break;
}
*/
//  console.log(codeSede) ;

/*
sede1.addEventListener('click', addVarSede);
function addVarSede(event) {
  var codeSede = 1 ;
  console.log(codeSede) ;
}

sede2.addEventListener('click', addVarSede);
function addVarSede(event) {
  var codeSede = 2 ;
  console.log(codeSede) ;
}

sede3.addEventListener('click', addVarSede);
function addVarSede(event) {
  var codeSede = 3 ;
  console.log(codeSede) ;
}

/*
codeSede0.addEventListener('click', addvarcodesede);
function addvarcodesede(event) {
  codeSede0.textContent = objSedes.indexOf(event.target.textContent);

  listSedes.classList.toggle('list_active');
  console.log(event.target);
};
*/

// data.AQP["2016-2"].students.length --> me da el total de estudiantes de arequipa 2016-2
// console.log(data);

// var students = data.AQP['2016-2'].students.length ;
// console.log(students);
