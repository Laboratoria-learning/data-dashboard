// Função do grafico alunas ativas por sede e geração
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
            item['cor'] = '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
            grafico1.push(item);
        }
    }
    return grafico1;
}


// section grafico, qtdAlunas:begin, desistentes
function totalStudents(sede, turma){
  var verifTotal = data[sede][turma]["students"].length;
  return verifTotal;
}

// conjunto de var com quantidade total de alunas de AQP por geração e total que resulta nas alunas desistentes
var aqpTotal16 = totalStudents(aqp, aqp16two);
var aqpTotal17one = totalStudents(aqp, aqp17one);
var aqpQTotal = parseInt(aqpTotal16) + parseInt(aqpTotal17one);
var aqpDesist = (aqpAtivasTotal*100)/aqpQTotal;
console.log(aqpDesist);

// conjunto de var com quantidade total de alunas de CDMX por geração e total que resulta nas alunas desistentes
var cdmxTotal17one = totalStudents(cdmx, cdmx17one);
var cdmxTotal17two = totalStudents(cdmx, cdmx17two);
var cdmxQTotal = parseInt(cdmxTotal17one) + parseInt(cdmxTotal17two);
var cdmxDesist = parseInt((cdmxAtivasTotal*100)/cdmxQTotal);
console.log(cdmxDesist);

// conjunto de var com quantidade total de alunas de LIM por geração e total que resulta nas alunas desistentes
var limTotal16two = totalStudents(lim, lim16two);
var limTotal17one = totalStudents(lim, lim17one);
var limTotal17two = totalStudents(lim, lim17two);
var limQTotal = parseInt(limTotal16two) + parseInt(limTotal17one) + parseInt(limTotal17two);
var limDesist = parseInt((limAtivasTotal*100)/limQTotal);
console.log(limDesist);

// conjunto de var com quantidade total de alunas de SCL por geração e total que resulta nas alunas desistentes
var sclTotal16two = totalStudents(scl, scl16two);
var sclTotal17one = totalStudents(scl, scl17one);
var sclTotal17two = totalStudents(scl, scl17two);
var sclQTotal = parseInt(sclTotal16two) + parseInt(sclTotal17one) + parseInt(sclTotal17two);
var sclDesist = parseInt((sclAtivasTotal*100)/sclQTotal);
console.log(sclDesist);
// document.querySelector('.totalDesistentes').innerHTML = aqpDesist16;

