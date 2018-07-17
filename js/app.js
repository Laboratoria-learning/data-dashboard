///////////// Card 1: section qtdAlunas
// Função do grafico: alunas ativas por sede e geração
graficoAlunasAtivas();
function graficoAlunasAtivas(){
    let dados = alunasAtivasSedeGeracao();
    let ctx = document.getElementById("chart").getContext("2d");
    let labels = dados.map(item => item.sede + ' (' + item.geracao + ')' ); 
    let quantidade = dados.map(item => item.quantidade);
    let colors = [
        'rgb(59, 0, 48, 0.9)',
        'rgb(59, 0, 48, 0.9)',
        'rgb(245, 58, 51, 0.9)',
        'rgb(245, 58, 51, 0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(204, 108, 187, 0.9)',
        'rgb(204, 108, 187, 0.9)',
        'rgb(204, 108, 187, 0.9)'
    ]
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

// Função do grafico: % de desistentes
graficoAlunasInativas();
function graficoAlunasInativas(){
    let dados = alunasAtivasSedeGeracao();
    let ctx = document.getElementById("myDoughnutChart").getContext("2d");
    let inativas = dados.map(item => item.quantidadeInativas).reduce ( (prev, item)=> prev + item, 0);
    let ativas = dados.map(item => item.quantidade).reduce( (prev, item) => prev + item, 0 );
    let totalGeral =  inativas + ativas;
    let percentualAtivas = Math.round((ativas * 100) / totalGeral);
    let percentualInativas = Math.round((inativas  * 100) / totalGeral);
    document.querySelector(".totalDesistentes").innerHTML = percentualInativas + '%';
    let dataset = [percentualAtivas, percentualInativas];
    let labels = ["Ativas", "Inativas"];

     let myBarChart = new Chart(ctx, {
         type: 'doughnut',
         data: {
             labels: labels,
             datasets: [

                 {data: dataset, label: labels,  borderWidth: 1, backgroundColor: ['rgba(71, 182, 144, 0.9)', 'rgb(227, 57, 57, 0.9)']}

             ]
         }
     });
}

// Função que esta percorrendo o obj, e executando grafico 1 e 2 
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
            grafico1.push(item);
        }
    }
    return grafico1;
}

// Função que soma o total de todas as sedes e turmas ativas
document.querySelector(".totalAtivasTodasSedes").innerHTML = totalGeralAtivas() + " Alunas";
function totalGeralAtivas(){
    let alunas = alunasAtivasSedeGeracao();
    return alunas.reduce(function(prev,element){
        return prev + element.quantidade;        
    },0);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////// Card 2: section metaTotal
// Função do gráfico: do total de alunas que excederam ambas as metas em pelo menos 1 sprint
graficoAlunasExedemMetas();
function graficoAlunasExedemMetas(){
    let dados = alunasExedemMetas();
    let ctx = document.getElementById("charts").getContext("2d");
    let labels = dados.map(item => item.sede + ' (' + item.geracao + ')' );
    let quantidade = dados.map(item => item.quantidade);
    let colors = [
        'rgb(59, 0, 48, 0.9)',
        'rgb(59, 0, 48, 0.9)',
        'rgb(245, 58, 51, 0.9)',
        'rgb(245, 58, 51, 0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(204, 108, 187, 0.9)',
        'rgb(204, 108, 187, 0.9)',
        'rgb(204, 108, 187, 0.9)'
        ]
    let myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {data: quantidade, label: 'Quantidade exederam as metas por sede e geração',  borderWidth: 1, backgroundColor: colors}
            ]
        }
    });
}

// Função que retorna os dados para o gráfico do total de alunas que excederam ambas as metas em pelo menos 1 sprint
//Função que esta percorrendo o obj, e executando grafico 3 e 4
function alunasExedemMetas(){
    const grafico3 = [];
    var qAlunasExederam = metas();
    var contador = 0;
    for (sede in data){
        for (geracao in data[sede]){
            let item = {};
            item['sede'] = sede;
            item['geracao'] = geracao;
            item['quantidade'] = qAlunasExederam[contador];
            grafico3.push(item);
            contador++;
        }
    }
    return grafico3;
}

// Função que retorna o total de alunas que excederam ambas as metas em pelo menos 1 sprint
// Função que soma o total de todas as sedes e turmas
function metas(){
    var qAlunasExederamPontos = [];
    var exedeuPontos = false;
    var alunasExederam = [];
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
          alunasExederam.push(parseInt(qAlunasExederamPontos.length));
          qAlunasExederamPontos = [];
        }
    }
return alunasExederam;
}

// Função que retorna o total de alunas;
function totalDeAlunas(){
  let dados = alunasAtivasSedeGeracao();
  let inativas = dados.map(item => item.quantidadeInativas).reduce ( (prev, item)=> prev + item, 0);
  let ativas = dados.map(item => item.quantidade).reduce( (prev, item) => prev + item, 0 );
  let totalGeral =  inativas + ativas;
  return totalGeral;
}


// Função que retorna o total de alunas por geração;
function totalAlunaGeracao(){
    var alunasPorGeracao = [];
    for (sede in data){
        for (geracao in data[sede]){
          var estudantes = data[sede][geracao].students;
          alunasPorGeracao.push(parseInt(estudantes.length));
        }
    }
    return alunasPorGeracao;
}

//outra coisa
var qAlunasExederam = metas(); // QUEM EXEDEU AMBAS AS METAS 
var alunasPorGeracao = totalAlunaGeracao(); // total de alunas por gerção
var alunasTotal = totalDeAlunas(); // total por sede e geração retorna 261
var exederamTech = metasTECH(); //quem exedeu a meta tech
var exederamHse = metasHSE(); // quem exedeu a meta  HSE


// Função do grafico % de alunas que exederam as metas do sprint
graficoPorcentoMetas();
function graficoPorcentoMetas(){
    let dados = alunasExedemMetas();
    let ctx = document.getElementById("myDoughnutCharts").getContext("2d");
    let totalGeral =  totalDeAlunas();
    let totalExederam = somaArrays(qAlunasExederam);
    let totalNaoExederam = totalGeral - totalExederam;
    let percentualExederam = Math.round((totalExederam * 100) / totalGeral);
    let percentualNaoExederam = Math.round((totalNaoExederam * 100) / totalGeral);
    document.querySelector(".totalExederam").innerHTML = percentualExederam + "%";
    let dataset = [percentualExederam, percentualNaoExederam];
    let labels = ["Exederam", "Não exederam"];

     let myBarChart = new Chart(ctx, {
         type: 'doughnut',
         data: {
             labels: labels,
             datasets: [
                 {data: dataset, label: labels,  borderWidth: 1, backgroundColor: ['rgba(71, 182, 144, 0.9)', 'rgb(227, 57, 57, 0.9)']}
             ]
         }
     });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////// Card 3: section metaTech
// Função do gráfico do total de alunas que excederam a meta TECH em pelo menos 1 sprint
graficoExedemTECH();
function graficoExedemTECH(){
    let dados = alunasExedemTECH();
    let ctx = document.getElementById("chartTech").getContext("2d");
    let labels = dados.map(item => item.sede + ' (' + item.geracao + ')' );
    let quantidade = dados.map(item => item.quantidade);
    let colors = [
        'rgb(59, 0, 48, 0.9)',
        'rgb(59, 0, 48, 0.9)',
        'rgb(245, 58, 51, 0.9)',
        'rgb(245, 58, 51, 0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(204, 108, 187, 0.9)',
        'rgb(204, 108, 187, 0.9)',
        'rgb(204, 108, 187, 0.9)'
        ]
    let myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {data: quantidade, label: 'Quantidade de alunas que exederam as meta tech por sede e geração',  borderWidth: 1, backgroundColor: colors}
            ]
        }
    });
}

// Função que retorna os dados para o gráfico do total de alunas que excederam ambas as metas em pelo menos 1 sprint
function alunasExedemTECH(){
    const grafico6 = [];
    var qExederamTECH = metasTECH();
    var contador = 0;
    for (sede in data){
        for (geracao in data[sede]){
            let item = {};
            item['sede'] = sede;
            item['geracao'] = geracao;
            item['quantidade'] = qExederamTECH[contador];
            grafico6.push(item);
            contador++;
        }
    }
    return grafico6;
}

// Função que retorna o total de alunas que excederam a meta de em TECH pelo menos 1 sprint
function metasTECH(){
    var alunasExederamPontos = [];
    var exedeuPontos = false;
    var qExederamTECH = [];
    for (sede in data){
        for (geracao in data[sede]){
          var estudantes = data[sede][geracao].students;
          for(estudante in estudantes){
            var sprints = estudantes[estudante].sprints;
            for (sprint in sprints){
              var tech = sprints[sprint].score.tech;
              if (tech > 1260){
                exedeuPontos = true;
              }
            }
            if (exedeuPontos){
                alunasExederamPontos.push(estudantes[estudante]);
            }
            exedeuPontos = false;
          }
          qExederamTECH.push(parseInt(alunasExederamPontos.length));
          alunasExederamPontos = [];
        }
    }
return qExederamTECH;
}

// Função do grafico % de alunas que exederam a meta TECH do sprint
graficoPorcentoMetaTech();
function graficoPorcentoMetaTech(){
    let dados = alunasExedemTECH();
    let ctx = document.getElementById("myDoughnutTech").getContext("2d");
    let totalGeral =  totalDeAlunas();
    let totalExederam = somaArrays(exederamTech);
    let totalNaoExederam = totalGeral - totalExederam;
    let percentualExederam = Math.round((totalExederam * 100) / totalGeral);
    let percentualNaoExederam = Math.round((totalNaoExederam * 100) / totalGeral);
    document.querySelector(".totalExederamTech").innerHTML = percentualExederam + "%";
    let dataset = [percentualExederam, percentualNaoExederam];
    let labels = ["Exederam", "Não exederam"];

     let myBarChart = new Chart(ctx, {
         type: 'doughnut',
         data: {
             labels: labels,
             datasets: [
                 {data: dataset, label: labels,  borderWidth: 1, backgroundColor: ['rgba(71, 182, 144, 0.9)', 'rgb(227, 57, 57, 0.9)']}
             ]
         }
     });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////// Card 4: section metaHse
// Função do gráfico do total de alunas que excederam a meta HSE em pelo menos 1 sprint
graficoExedemHSE();
function graficoExedemHSE(){
    let dados = alunasExedemHSE();
    let ctx = document.getElementById("chartHse").getContext("2d");
    let labels = dados.map(item => item.sede + ' (' + item.geracao + ')' );
    let quantidade = dados.map(item => item.quantidade);
    let colors =  [
        'rgb(59, 0, 48, 0.9)',
        'rgb(59, 0, 48, 0.9)',
        'rgb(245, 58, 51, 0.9)',
        'rgb(245, 58, 51, 0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(255, 145, 48,0.9)',
        'rgb(204, 108, 187, 0.9)',
        'rgb(204, 108, 187, 0.9)',
        'rgb(204, 108, 187, 0.9)'
        ]
    let myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {data: quantidade, label: 'Quantidade de alunas que exederam as meta H por sede e geração',  borderWidth: 1, backgroundColor: colors}
            ]
        }
    });
}

// Função que retorna os dados para o gráfico do total de alunas que excederam ambas as metas em pelo menos 1 sprint
function alunasExedemHSE(){
    const grafico7 = [];
    var qExederamHSE = metasHSE();
    var contador = 0;
    for (sede in data){
        for (geracao in data[sede]){
            let item = {};
            item['sede'] = sede;
            item['geracao'] = geracao;
            item['quantidade'] = qExederamHSE[contador];
            grafico7.push(item);
            contador++;
        }
    }
    return grafico7;
}

// Função que retorna o total de alunas que excederam a meta de HSE em pelo menos 1 sprint
function metasHSE(){
    var alunasExederamPontos = [];
    var exedeuPontos = false;
    var qExederamHSE = [];
    for (sede in data){
        for (geracao in data[sede]){
          var estudantes = data[sede][geracao].students;
          for(estudante in estudantes){
            var sprints = estudantes[estudante].sprints;
            for (sprint in sprints){
              var hse = sprints[sprint].score.hse;
              if (hse > 840){
                exedeuPontos = true;
              }
            }
            if (exedeuPontos){
                alunasExederamPontos.push(estudantes[estudante]);
            }
            exedeuPontos = false;
          }
          qExederamHSE.push(parseInt(alunasExederamPontos.length));
          alunasExederamPontos = [];
        }
    }
return qExederamHSE;
}

// Função do grafico % de alunas que exederam a meta HSE do sprint
graficoPorcentoMetaHse();
function graficoPorcentoMetaHse(){
    let dados = alunasExedemHSE();
    let ctx = document.getElementById("myDoughnutHse").getContext("2d");
    let totalGeral =  totalDeAlunas();
    let totalExederam = somaArrays(exederamHse);
    let totalNaoExederam = totalGeral - totalExederam;
    let percentualExederam = Math.round((totalExederam * 100) / totalGeral);
    let percentualNaoExederam = Math.round((totalNaoExederam * 100) / totalGeral);
    document.querySelector(".totalExederamHse").innerHTML = percentualExederam + "%";
    let dataset = [percentualExederam, percentualNaoExederam];
    let labels = ["Exederam", "Não exederam"];

     let myBarChart = new Chart(ctx, {
         type: 'doughnut',
         data: {
             labels: labels,
             datasets: [
                 {data: dataset, label: labels,  borderWidth: 1, backgroundColor: ['rgba(71, 182, 144, 0.9)', 'rgb(227, 57, 57, 0.9)']}
             ]
         }
     });
}
///////////////////////////////////////////////////////////////////////////////////////////////////

// AAA função 
function alunasAtivasSedeGeracao(){
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
















//soma array
function somaArrays(arr) {
    var sumArray = 0;
    for (i = 0; i < arr.length; i++){
        sumArray += arr[i];
    }
    return sumArray;
  }
  