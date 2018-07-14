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

// Total de alunas ativas
graficoAlunasAtivas();
function graficoAlunasAtivas(){
    let dados = alunasAtivasSedeGeracao();
    let ctx = document.getElementById("chart").getContext("2d");
    let labels = dados.map(item => item.sede + ' (' + item.geracao + ')' ); 
    let quantidade = dados.map(item => item.quantidade);
    let colors = dados.map(item => item.cor);
    debugger
    let myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {data: quantidade, label: 'Quantidade',  borderWidth: 1, backgroundColor: colors}
            ]
        }
    });
}


function alunasAtivasSedeGeracao(){
    const grafico1 = [
    ];
    for (sede in data){
        for (geracao in data[sede]){
            let item = {};
            item['sede'] = sede;
            item['geracao'] = geracao;
            item['quantidade'] = data[sede][geracao].students.filter(alunas=>alunas.active).length;
            item['cor'] = '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
            grafico1.push(item);
        }
    }
    return grafico1;
}
