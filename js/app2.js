//botões que filtra sede e gerações
/*
var sedeFiltrada = {}
var selectSedeElement = document.getElementById("sede");
var selectTurmaElement = document.getElementById("turma");
// seleciona a sede que irá apresentar os dados na tela
function onSelectSede(){
    let sedeSelecionada  = selectSedeElement.value;
    turmas = data[sedeSelecionada];
    createSelectTurmaOptions(turmas);
};

//seliociona a turma qu irá apresentar os dados na tela 
function createSelectTurmaOptions(turmas){
    let options = [];
    for (turma in turmas){
        options.push(`<option value= "${turma}">${turma}</option>`);
    }
    selectTurmaElement.innerHTML = options;
}
*/

// AAA função 
/*function alunasAtivasSedeGeracao(){
    const graficos = [
    ];
    for (sede in data){
        for (geracao in data[sede]){
            let item = {};
            item['sede'] = sede;
            item['geracao'] = geracao;
            item['quantidade'] = data[sede][geracao].students.filter(alunas=>alunas.active).length;
            item['quantidadeInativas']= data[sede][geracao].students.filter(alunas=> !alunas.tech).length;
            item['excedeTech']= data[sede][geracao].students.filter(alunas => {
                if (alunas.sprints)
                    return alunas.sprints.filter(media => media.score.tech > 1260);
            }).length;
            graficos.push(item);
        }
    }
    return graficos;
}
*/