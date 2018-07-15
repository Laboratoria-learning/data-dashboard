// Função do grafico alunas ativas por sede e geração
graficoAlunasAtivas();
function graficoAlunasAtivas(){
    let dados = alunasAtivasSedeGeracao();
    let ctx = document.getElementById("chart").getContext("2d");
    let labels = dados.map(item => item.sede + ' (' + item.geracao + ')' );
    let quantidade = dados.map(item => item.quantidade);
    let colors = dados.map(item => item.cor);
    let myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {data: quantidade, label: 'Alunas presentes pela sede e geração. ',  borderWidth: 1, backgroundColor: colors}
            ]
        }
    });
}

/// Função do grafico % de desistentes
graficoAlunasInativas();
function graficoAlunasInativas(){
    let dados = alunasAtivasSedeGeracao();
    let ctx = document.getElementById("myDoughnutChart").getContext("2d");

    let inativas = dados.map(item => item.quantidadeInativas).reduce ( (prev, item)=> prev + item, 0);
    let ativas = dados.map(item => item.quantidade).reduce( (prev, item) => prev + item, 0 );
    let totalGeral =  inativas + ativas;
    let percentualAtivas = Math.round((ativas * 100) / totalGeral);
    let percentualInativas = Math.round((inativas  * 100) / totalGeral);
    document.querySelector(".totalDesistentes").innerHTML = percentualInativas;
    let dataset = [percentualAtivas, percentualInativas];
    let labels = ["Ativas", "Inativas"];

     let myBarChart = new Chart(ctx, {
         type: 'doughnut',
         data: {
             labels: labels,
             datasets: [
                 {data: dataset, label: labels,  borderWidth: 1, backgroundColor: ['#5032CD32', '#FF0000']}
             ]
         }
     });
}


// Função que retorna total de alunas ativas por sede e geração
function alunasAtivasSedeGeracao(){
    const grafico1 = [
    ];
    for (sede in data){
        for (geracao in data[sede]){
            let item = {};
            item['sede'] = sede;
            item['geracao'] = geracao;
            item['quantidade'] = data[sede][geracao].students.filter(alunas=>alunas.active).length;
            item['quantidadeInativas']= data[sede][geracao].students.filter(alunas=> !alunas.active).length;
            item['cor'] = '#40' + (Math.random().toString(16) + '0000000').slice(2, 8);
            grafico1.push(item);
        }
    }
    return grafico1;
}

// Função que soma o total de todas as sedes e turmas
document.querySelector(".totalAtivas").innerHTML = totalGeralAtivas();
function totalGeralAtivas(){
    let alunas = alunasAtivasSedeGeracao();
    return alunas.reduce(function(prev,element){
        return prev + element.quantidade;
    },0);
}


// // Função do grafico alunas ativas por sede e geração
// graficoAlunasExedemMetas();
// function graficoAlunasExedemMetas(){
//     let dados = alunasExedemMetas();
//     let ctx = document.getElementsByClassName("charts").getContext("2d");
//     let labels = dados.map(item => item.sede + ' (' + item.geracao + ')' );
//     let quantidade = dados.map(item => item.quantidade);
//     let colors = dados.map(item => item.cor);
//     let myBarChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: labels,
//             datasets: [
//                 {data: quantidade, label: 'Quantidade de alunas que exederam as metas',  borderWidth: 1, backgroundColor: colors}
//             ]
//         }
//     });
// }
//
//
// // Função que retorna total de alunas ativas por sede e geração
// function alunasExedemMetas(){
//     const grafico3 = [];
//     for (sede in data){
//         for (geracao in data[sede]){
//             let item = {};
//             item['sede'] = sede;
//             item['geracao'] = geracao;
//             item['quantidade'] = data[sede][geracao].students.sprints.score.filter(alunas=> alunas.tech>1260 && alunas.hse>840).length;
//             item['cor'] = '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
//             grafico3.push(item);
//         }
//     }
//     return grafico3;
// }

// function metas(){
//     for (sede in data){
//         for (geracao in data[sede]){
//             for(students in data[sede][geracao]){
//
//               //var caminhoSprints = data[sede][geracao][students];
//               console.log(students);
//               //return caminhoSprints;
//
//             }
//         }
//     }
//
//
// }

function metas(){
    var qAlunasExederamPontos = [];
    var exedeuPontos = false;
    var teste = [];
    for (sede in data){
        for (geracao in data[sede]){
          var estudantes = data[sede][geracao].students;
          for(estudante in estudantes){
            var sprints = estudantes[estudante].sprints;
            for (sprint in sprints){
              var tech = sprints[sprint].score.tech;
              var hse = sprints[sprint].score.hse;
              if (tech > 1260 && hse > 840){
                exedeuPontos = true;
              }
            }
            if (exedeuPontos){
                qAlunasExederamPontos.push(estudantes[estudante]);
            }
            exedeuPontos = false;
          }
          teste.push(qAlunasExederamPontos);
          qAlunasExederamPontos = [];
        }
    }
console.log(teste);
}




metas();
// console.log();
