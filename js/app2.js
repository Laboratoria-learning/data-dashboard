//Variaveis
var sedeFiltrada = {}
var selectSedeElement = document.getElementById("sede");
var selectTurmaElement = document.getElementById("turma");


 // seleciona a sede que irá apresentar os dados na tela
 function onSelectSede(){
     let sedeSelecionada  = selectSedeElement.value;
     turmas = data[sedeSelecionada];
     createSelectTurmaOptions(turmas);
 };
 
//seliociona a gerção qu irá apresentar os dados na tela 
 function createSelectTurmaOptions(turmas){
     let options = [];
     for (turma in turmas){
         options.push(`<option value= "${turma}">${turma}</option>`);
     }
     selectTurmaElement.innerHTML = options;
 }
