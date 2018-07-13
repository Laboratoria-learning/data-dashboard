// variáveis das gerações
var aqp16two = "2016-2";
var aqp17one = "2017-1";
var cdmx17one = "2017-1";
var cdmx17two = "2017-2";
var lim16two = "2016-2";
var lim17one = "2017-1";
var lim17two = "2017-2";
var scl16two = "2016-2";
var scl17one = "2017-1";
var scl17two = "2017-2";
// variáveis das sedes
var aqp = "AQP";
var cdmx = "CDMX";
var lim = "LIM";
var scl = "SCL";

//section qtdAlunas ;grafico, inscritas:begin
// função calcula o total de alunas ativas em cada geração por sede
function calculoStudents(sede, turma){
  var verifAtivas = data[sede][turma]["students"].filter(function(student) {
  return student.active;
});
  var estudantesAtivas = (verifAtivas.length);
  return estudantesAtivas;
}

// conjunto der var com número de alunas ativas de AQP por geração e total
var aqpAtivas16 = calculoStudents(aqp, aqp16two);
var aqpAtivas17one = calculoStudents(aqp, aqp17one);
var aqpAtivasTotal = parseInt(aqpAtivas16) + parseInt(aqpAtivas17one);
console.log(aqpAtivasTotal);

// conjunto der var com número de alunas ativas de CDMX por geração e total
var cdmxAtivas17one = calculoStudents(cdmx, cdmx17one);
var cdmxAtivas17two = calculoStudents(cdmx, cdmx17two);
var cdmxAtivasTotal = parseInt(cdmxAtivas17one) + parseInt(cdmxAtivas17two);
console.log(cdmxAtivasTotal);

// conjunto der var com número de alunas ativas de LIM por geração e total
var limAtivas16two = calculoStudents(lim, lim16two);
var limAtivas17one = calculoStudents(lim, lim17one);
var limAtivas17two = calculoStudents(lim, lim17two);
var limAtivasTotal = parseInt(limAtivas16two) + parseInt(limAtivas17one) + parseInt(limAtivas17two);
console.log(limAtivasTotal);

// conjunto der var com número de alunas ativas de SCL por geração e total
var sclAtivas16two = calculoStudents(scl, scl16two);
var sclAtivas17one = calculoStudents(scl, scl17one);
var sclAtivas17two = calculoStudents(scl, scl17two);
var sclAtivasTotal = parseInt(sclAtivas16two) + parseInt(sclAtivas17one) + parseInt(sclAtivas17two);
console.log(sclAtivasTotal);

var ativasTotal = aqpAtivasTotal + cdmxAtivasTotal + limAtivasTotal + sclAtivasTotal;
console.log(ativasTotal);
document.querySelector('.totalAtivas').innerHTML = ativasTotal;


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S1", "S2", "S3", "S4"],
        datasets: [{
            label: '# of Votes',
            data: [aqpAtivasTotal, cdmxAtivasTotal, limAtivasTotal, sclAtivasTotal],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
//section grafico, inscritas:end

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
