/* Funcionalidad de tu producto */
// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

window.addEventListener('load', select);

var overview = document.getElementById('tab-overview');// lo que quiero hacer click
var contentOverview = document.getElementById('contentOverview');// lo que quiero que aparezca
var students = document.getElementById('tab-students');// lo que quiero hacer click
var contentStudents = document.getElementById('contentStudents');// lo que quiero que aparezca

function estudentcont() {
  contentOverview.style.display = 'none';
  contentStudents.style.display = 'block';
}
function overcont() {
  contentOverview.style.display = 'block';
};

function create() {
  var sede = document.getElementById('sede').value;
  document.getElementById('text').innerHTML = sede ;

  switch (sede) {
  case 'LIMA2016-II':
    var estudiantelim1 = (data['LIM']['2016-2']['students'].length);
    console.log(document.getElementById('one').innerHTML = estudiantelim1 + ' # estudents currentl enrrolled');

    // creando desercion
    var totalStudent = data['LIM']['2016-2']['students'];
    var activeStudent = [];
    var inactiveStudent = [];
    for (var i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        activeStudent.push(i);
      } else {
        inactiveStudent.push(i);
      }
    }
    document.getElementById('two').innerHTML = (inactiveStudent.length / estudiantelim1) * 100 + '%';
    // añadiendo NPS:
    var ratings = data['LIM']['2016-2']['ratings'][0];
    var promoters = ratings['nps']['promoters'];
    var passive = ratings['nps']['passive'];
    var detractors = ratings['nps']['detractors'];
    var npsTotal = promoters - detractors;

    console.log(document.getElementById('five').innerHTML = (npsTotal) + ' %');
    console.log(document.getElementById('six-1').innerHTML = (promoters) + '%' + 'promoters');
    console.log(document.getElementById('six-2').innerHTML = (passive) + '%' + 'passives');
    console.log(document.getElementById('six-3').innerHTML = (detractors) + '%' + 'detractors');

    // creando promedio de los profesores
    var teacheone = data['LIM']['2016-2']['ratings'][0]['teacher'];
    var teachetwo = data['LIM']['2016-2']['ratings'][1]['teacher'];
    var total = teacheone + teachetwo ;
    var promedio = total / 2;

    document.getElementById('teacher').innerHTML = promedio;

    // creando promedio de los JEDIMASTER
    var teacheone = data['LIM']['2016-2']['ratings'][0]['jedi'];
    var teachetwo = data['LIM']['2016-2']['ratings'][1]['jedi'];
    var total = teacheone + teachetwo;
    var promedio = total / 2;
    document.getElementById('jedi').innerHTML = promedio;

    // creando funcion de satisfaccion
    var cumple1 = data['LIM']['2016-2']['ratings'][0]['student']['cumple'];
    var cumple2 = data['LIM']['2016-2']['ratings'][1]['student']['cumple'];
    var cumple = cumple1 + cumple2 ;
    var supera1 = data['LIM']['2016-2']['ratings'][0]['student']['supera'];
    var supera2 = data['LIM']['2016-2']['ratings'][1]['student']['supera'];
    var supera = supera1 + supera2;
    var satisfecho = (cumple + supera) / 2;
    document.getElementById('satisfecho').innerHTML = satisfecho;


    break;

  case 'LIMA2017-I':
    var estudiantelim2 = (data['LIM']['2017-1']['students'].length);
    console.log(document.getElementById('one').innerHTML = estudiantelim2);
    // creando desercion
    var totalStudent = data['LIM']['2017-1']['students'];
    var activeStudent = [];
    var inactiveStudent = [];
    for (var i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        activeStudent.push(i);
      } else {
        inactiveStudent.push(i);
      }
    }
    document.getElementById('two').innerHTML = (inactiveStudent.length / estudiantelim2) * 100 + '%';

    // creando NPS;
    var ratings = data['LIM']['2017-1']['ratings'][0];
    var promoters = ratings['nps']['promoters'];
    var passive = ratings['nps']['passive'];
    var detractors = ratings['nps']['detractors'];
    var npsTotal = promoters - detractors;

    console.log(document.getElementById('five').innerHTML = (npsTotal) + ' %');

    console.log(document.getElementById('six-1').innerHTML = (promoters) + '%' + 'promoters');
    console.log(document.getElementById('six-2').innerHTML = (passive) + '%' + 'passives');
    console.log(document.getElementById('six-3').innerHTML = (detractors) + '%' + 'detractors');

    // creando promedio de los profesores
    var teacheone = data['LIM']['2017-1']['ratings'][0]['teacher'];
    var teachetwo = data['LIM']['2017-1']['ratings'][1]['teacher'];
    var teachetree = data['LIM']['2017-1']['ratings'][2]['teacher'];
    var teachefour = data['LIM']['2017-1']['ratings'][3]['teacher'];
    var total = teacheone + teachetwo + teachetree + teachefour;
    var promedio = total / 4;
    document.getElementById('teacher').innerHTML = promedio;

    // creando promedio de jedis
    var teacheone = data['LIM']['2017-1']['ratings'][0]['jedi'];
    var teachetwo = data['LIM']['2017-1']['ratings'][1]['jedi'];
    var teachetree = data['LIM']['2017-1']['ratings'][2]['jedi'];
    var teachefour = data['LIM']['2017-1']['ratings'][3]['jedi'];
    var total = teacheone + teachetwo + teachetree + teachefour;
    var promedio = total / 4;
    document.getElementById('jedi').innerHTML = promedio;

    // creando funcion de satisfaccion
    var cumple1 = data['LIM']['2017-1']['ratings'][0]['student']['cumple'];
    var cumple2 = data['LIM']['2017-1']['ratings'][1]['student']['cumple'];
    var cumple3 = data['LIM']['2017-1']['ratings'][2]['student']['cumple'];
    var cumple4 = data['LIM']['2017-1']['ratings'][3]['student']['cumple'];
    var cumple = cumple1 + cumple2 + cumple3 + cumple4;
    var supera1 = data['LIM']['2017-1']['ratings'][0]['student']['supera'];
    var supera2 = data['LIM']['2017-1']['ratings'][1]['student']['supera'];
    var supera3 = data['LIM']['2017-1']['ratings'][2]['student']['supera'];
    var supera4 = data['LIM']['2017-1']['ratings'][3]['student']['supera'];
    var supera = supera1 + supera2 + supera3 + supera4;
    var satisfecho = (cumple + supera) / 2;
    document.getElementById('satisfecho').innerHTML = satisfecho;

    break;
  case 'LIMA2017-II':
    var estudiantelim3 = (data['LIM']['2017-2']['students'].length);
    console.log(document.getElementById('one').innerHTML = estudiantelim3);
    // creando desercion
    var totalStudent = data['LIM']['2017-2']['students'];
    var activeStudent = [];
    var inactiveStudent = [];
    for (var i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        activeStudent.push(i);
      } else {
        inactiveStudent.push(i);
      }
    }
    document.getElementById('two').innerHTML = (inactiveStudent.length / estudiantelim3) * 100 + '%';

    // creando NPS
    var ratings = data['LIM']['2017-2']['ratings'][0];
    var promoters = ratings['nps']['promoters'];
    var passive = ratings['nps']['passive'];
    var detractors = ratings['nps']['detractors'];
    var npsTotal = promoters - detractors;

    console.log(document.getElementById('five').innerHTML = (npsTotal) + ' %');

    console.log(document.getElementById('six-1').innerHTML = (promoters) + '%' + 'promoters');
    console.log(document.getElementById('six-2').innerHTML = (passive) + '%' + 'passives');
    console.log(document.getElementById('six-3').innerHTML = (detractors) + '%' + 'detractors');
    // creando promedio de los profesores
    var teacheone = data['LIM']['2017-2']['ratings'][0]['teacher'];
    var teachetwo = data['LIM']['2017-2']['ratings'][1]['teacher'];
    var total = teacheone + teachetwo;
    var promedio = total / 2;
    document.getElementById('teacher').innerHTML = promedio;
    // creando promedio para jedis
    var teacheone = data['LIM']['2017-2']['ratings'][0]['jedi'];
    var teachetwo = data['LIM']['2017-2']['ratings'][1]['jedi'];
    var total = teacheone + teachetwo;
    var promedio = total / 2;
    document.getElementById('jedi').innerHTML = promedio;

    // creando funcion de satisfaccion
    var cumple1 = data['LIM']['2017-2']['ratings'][0]['student']['cumple'];
    var cumple2 = data['LIM']['2017-2']['ratings'][1]['student']['cumple'];
    var cumple = cumple1 + cumple2;
    var supera1 = data['LIM']['2017-2']['ratings'][0]['student']['supera'];
    var supera2 = data['LIM']['2017-2']['ratings'][1]['student']['supera'];
    var supera = supera1 + supera2;
    var satisfecho = (cumple + supera) / 2;
    document.getElementById('satisfecho').innerHTML = satisfecho;

    break;
  case 'AREQUIPA2016-II':
    var estudiantelim4 = (data['AQP']['2016-2']['students'].length);
    console.log(document.getElementById('one').innerHTML = estudiantelim4);

    // creando desercion
    var totalStudent = data['AQP']['2016-2']['students'];
    var activeStudent = [];
    var inactiveStudent = [];
    for (var i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        activeStudent.push(i);
      } else {
        inactiveStudent.push(i);
      }
    }
    document.getElementById('two').innerHTML = (inactiveStudent.length / estudiantelim4) * 100 + '%';
    // creando NPS
    var ratings = data['AQP']['2016-2']['ratings'][0];
    var promoters = ratings['nps']['promoters'];
    var passive = ratings['nps']['passive'];
    var detractors = ratings['nps']['detractors'];
    var npsTotal = promoters - detractors;

    console.log(document.getElementById('five').innerHTML = (npsTotal) + ' %');

    console.log(document.getElementById('six-1').innerHTML = (promoters) + '%' + 'promoters');
    console.log(document.getElementById('six-2').innerHTML = (passive) + '%' + 'passives');
    console.log(document.getElementById('six-3').innerHTML = (detractors) + '%' + 'detractors');
    // creando promedio de los profesores
    var teacheone = data['AQP']['2016-2']['ratings'][0]['teacher'];
    var teachetwo = data['AQP']['2016-2']['ratings'][1]['teacher'];
    var teachetree = data['AQP']['2016-2']['ratings'][2]['teacher'];
    var teachefour = data['AQP']['2016-2']['ratings'][3]['teacher'];
    var total = teacheone + teachetwo + teachetree + teachefour;
    var promedio = total / 4;
    document.getElementById('teacher').innerHTML = promedio;
    // creando promedio de los jedis
    var teacheone = data['AQP']['2016-2']['ratings'][0]['jedi'];
    var teachetwo = data['AQP']['2016-2']['ratings'][1]['jedi'];
    var teachetree = data['AQP']['2016-2']['ratings'][2]['jedi'];
    var teachefour = data['AQP']['2016-2']['ratings'][3]['jedi'];
    var total = teacheone + teachetwo + teachetree + teachefour;
    var promedio = total / 4;
    document.getElementById('jedi').innerHTML = promedio;

    // creando funcion de satisfaccion
    var cumple1 = data['AQP']['2016-2']['ratings'][0]['student']['cumple'];
    var cumple2 = data['AQP']['2016-2']['ratings'][1]['student']['cumple'];
    var cumple3 = data['AQP']['2016-2']['ratings'][2]['student']['cumple'];
    var cumple4 = data['AQP']['2016-2']['ratings'][3]['student']['cumple'];
    var cumple = cumple1 + cumple2 + cumple3 + cumple4;
    var supera1 = data['AQP']['2016-2']['ratings'][0]['student']['supera'];
    var supera2 = data['AQP']['2016-2']['ratings'][1]['student']['supera'];
    var supera3 = data['AQP']['2016-2']['ratings'][2]['student']['supera'];
    var supera4 = data['AQP']['2016-2']['ratings'][3]['student']['supera'];
    var supera = supera1 + supera2 + supera3 + supera4;
    var satisfecho = (cumple + supera) / 2;
    document.getElementById('satisfecho').innerHTML = satisfecho;

    break;
  case 'AREQUIPA2017-I':
    var estudiantelim5 = (data['AQP']['2017-1']['students'].length);
    console.log(document.getElementById('one').innerHTML = estudiantelim5);
    // creando desercion
    var totalStudent = data['AQP']['2017-1']['students'];
    var activeStudent = [];
    var inactiveStudent = [];
    for (var i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        activeStudent.push(i);
      } else {
        inactiveStudent.push(i);
      }
    }
    document.getElementById('two').innerHTML = (inactiveStudent.length / estudiantelim5) * 100 + '%';
    // creando NPS
    var ratings = data['AQP']['2017-1']['ratings'][0];
    var promoters = ratings['nps']['promoters'];
    var passive = ratings['nps']['passive'];
    var detractors = ratings['nps']['detractors'];
    var npsTotal = promoters - detractors;

    console.log(document.getElementById('five').innerHTML = (npsTotal) + ' %');

    console.log(document.getElementById('six-1').innerHTML = (promoters) + '%' + 'promoters');
    console.log(document.getElementById('six-2').innerHTML = (passive) + '%' + 'passives');
    console.log(document.getElementById('six-3').innerHTML = (detractors) + '%' + 'detractors');
    // creando promedio de los profesores
    var teacheone = data['AQP']['2017-1']['ratings'][0]['teacher'];
    var teachetwo = data['AQP']['2017-1']['ratings'][1]['teacher'];
    var teachetree = data['AQP']['2017-1']['ratings'][2]['teacher'];
    var total = teacheone + teachetwo + teachetree ;
    var promedio = total / 3;
    document.getElementById('teacher').innerHTML = promedio;
    // creando promedio de los jedis
    var teacheone = data['AQP']['2017-1']['ratings'][0]['jedi'];
    var teachetwo = data['AQP']['2017-1']['ratings'][1]['jedi'];
    var teachetree = data['AQP']['2017-1']['ratings'][2]['jedi'];
    var total = teacheone + teachetwo + teachetree;
    var promedio = total / 3;
    document.getElementById('jedi').innerHTML = promedio;

    // creando funcion de satisfaccion
    var cumple1 = data['AQP']['2017-1']['ratings'][0]['student']['cumple'];
    var cumple2 = data['AQP']['2017-1']['ratings'][1]['student']['cumple'];
    var cumple3 = data['AQP']['2017-1']['ratings'][2]['student']['cumple'];
    var cumple = cumple1 + cumple2 + cumple3 ;
    var supera1 = data['AQP']['2017-1']['ratings'][0]['student']['supera'];
    var supera2 = data['AQP']['2017-1']['ratings'][1]['student']['supera'];
    var supera3 = data['AQP']['2017-1']['ratings'][2]['student']['supera'];
    var supera = supera1 + supera2 + supera3 ;
    var satisfecho = (cumple + supera) / 2;
    document.getElementById('satisfecho').innerHTML = satisfecho;

    break;
  case 'SantiagodeChile2016-II':
    var estudiantelim6 = (data['SCL']['2016-2']['students'].length);
    console.log(document.getElementById('one').innerHTML = estudiantelim6);
    // creando desercion
    var totalStudent = data['SCL']['2016-2']['students'];
    var activeStudent = [];
    var inactiveStudent = [];
    for (var i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        activeStudent.push(i);
      } else {
        inactiveStudent.push(i);
      }
    }

    document.getElementById('two').innerHTML = (inactiveStudent.length / estudiantelim6) * 100 + '%';

    // creando NPS
    var ratings = data['SCL']['2016-2']['ratings'][0];
    var promoters = ratings['nps']['promoters'];
    var passive = ratings['nps']['passive'];
    var detractors = ratings['nps']['detractors'];
    var npsTotal = promoters - detractors;

    console.log(document.getElementById('five').innerHTML = (npsTotal) + ' %');

    console.log(document.getElementById('six-1').innerHTML = (promoters) + '%' + 'promoters');
    console.log(document.getElementById('six-2').innerHTML = (passive) + '%' + 'passives');
    console.log(document.getElementById('six-3').innerHTML = (detractors) + '%' + 'detractors');

    // creando promedio de los profesores
    var teacheone = data['SCL']['2016-2']['ratings'][0]['teacher'];
    var teachetwo = data['SCL']['2016-2']['ratings'][1]['teacher'];
    var teachetree = data['SCL']['2016-2']['ratings'][2]['teacher'];
    var teachefour = data['SCL']['2016-2']['ratings'][3]['teacher'];
    var total = teacheone + teachetwo + teachetree + teachefour;
    var promedio = total / 4;
    document.getElementById('teacher').innerHTML = promedio;
    // creando promedio de los jedis
    var teacheone = data['SCL']['2016-2']['ratings'][0]['jedi'];
    var teachetwo = data['SCL']['2016-2']['ratings'][1]['jedi'];
    var teachetree = data['SCL']['2016-2']['ratings'][2]['jedi'];
    var teachefour = data['SCL']['2016-2']['ratings'][3]['jedi'];
    var total = teacheone + teachetwo + teachetree + teachefour;
    var promedio = total / 4;
    document.getElementById('jedi').innerHTML = promedio;

    // creando funcion de satisfaccion
    var cumple1 = data['SCL']['2016-2']['ratings'][0]['student']['cumple'];
    var cumple2 = data['SCL']['2016-2']['ratings'][1]['student']['cumple'];
    var cumple3 = data['SCL']['2016-2']['ratings'][2]['student']['cumple'];
    var cumple4 = data['SCL']['2016-2']['ratings'][3]['student']['cumple'];
    var cumple = cumple1 + cumple2 + cumple3 + cumple4;
    var supera1 = data['SCL']['2016-2']['ratings'][0]['student']['supera'];
    var supera2 = data['SCL']['2016-2']['ratings'][1]['student']['supera'];
    var supera3 = data['SCL']['2016-2']['ratings'][2]['student']['supera'];
    var supera4 = data['SCL']['2016-2']['ratings'][3]['student']['supera'];
    var supera = supera1 + supera2 + supera3 + supera4;
    var satisfecho = (cumple + supera) / 2;
    document.getElementById('satisfecho').innerHTML = satisfecho;

    break;
  case 'SantiagodeChile2017-I':
    var estudiantelim7 = (data['SCL']['2017-1']['students'].length);
    console.log(document.getElementById('one').innerHTML = estudiantelim7);
    // creando desercion
    var totalStudent = data['SCL']['2017-1']['students'];
    var activeStudent = [];
    var inactiveStudent = [];
    for (var i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        activeStudent.push(i);
      } else {
        inactiveStudent.push(i);
      }
    }
    document.getElementById('two').innerHTML = (inactiveStudent.length / estudiantelim7) * 100 + '%';

    // creando  NPS
    var ratings = data['SCL']['2017-1']['ratings'][0];
    var promoters = ratings['nps']['promoters'];
    var passive = ratings['nps']['passive'];
    var detractors = ratings['nps']['detractors'];
    var npsTotal = promoters - detractors;

    console.log(document.getElementById('five').innerHTML = (npsTotal) + ' %');

    console.log(document.getElementById('six-1').innerHTML = (promoters) + '%' + 'promoters');
    console.log(document.getElementById('six-2').innerHTML = (passive) + '%' + 'passives');
    console.log(document.getElementById('six-3').innerHTML = (detractors) + '%' + 'detractors');
    // creando promedio de los profesores
    var teacheone = data['SCL']['2017-1']['ratings'][0]['teacher'];
    var teachetwo = data['SCL']['2017-1']['ratings'][1]['teacher'];
    var teachetree = data['SCL']['2017-1']['ratings'][2]['teacher'];
    var total = teacheone + teachetwo + teachetree;
    var promedio = total / 3;
    document.getElementById('teacher').innerHTML = promedio;
    // creando promedio de los jedis
    var teacheone = data['SCL']['2017-1']['ratings'][0]['jedi'];
    var teachetwo = data['SCL']['2017-1']['ratings'][1]['jedi'];
    var teachetree = data['SCL']['2017-1']['ratings'][2]['jedi'];
    var total = teacheone + teachetwo + teachetree;
    var promedio = total / 3;
    document.getElementById('jedi').innerHTML = promedio;

    // creando funcion de satisfaccion
    var cumple1 = data['SCL']['2017-1']['ratings'][0]['student']['cumple'];
    var cumple2 = data['SCL']['2017-1']['ratings'][1]['student']['cumple'];
    var cumple3 = data['SCL']['2017-1']['ratings'][2]['student']['cumple'];
    var cumple = cumple1 + cumple2 + cumple3 ;
    var supera1 = data['SCL']['2017-1']['ratings'][0]['student']['supera'];
    var supera2 = data['SCL']['2017-1']['ratings'][1]['student']['supera'];
    var supera3 = data['SCL']['2017-1']['ratings'][2]['student']['supera'];
    var supera = supera1 + supera2 + supera3 ;
    var satisfecho = (cumple + supera) / 2;
    document.getElementById('satisfecho').innerHTML = satisfecho;


    break;
  case 'SantiagodeChile2017-II':
    var estudiantelim8 = (data['SCL']['2017-2']['students'].length);
    console.log(document.getElementById('one').innerHTML = estudiantelim8);
    // creando desercion
    var totalStudent = data['SCL']['2017-2']['students'];
    var activeStudent = [];
    var inactiveStudent = [];
    for (var i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        activeStudent.push(i);
      } else {
        inactiveStudent.push(i);
      }
    }
    document.getElementById('two').innerHTML = (inactiveStudent.length / estudiantelim8) * 100 + '%';
    // creando NPS
    var ratings = data['SCL']['2017-2']['ratings'][0];
    var promoters = ratings['nps']['promoters'];
    var passive = ratings['nps']['passive'];
    var detractors = ratings['nps']['detractors'];
    var npsTotal = promoters - detractors;

    console.log(document.getElementById('five').innerHTML = (npsTotal) + ' %');

    console.log(document.getElementById('six-1').innerHTML = (promoters) + '%' + 'promoters');
    console.log(document.getElementById('six-2').innerHTML = (passive) + '%' + 'passives');
    console.log(document.getElementById('six-3').innerHTML = (detractors) + '%' + 'detractors');

    // creando promedio de los profesores
    var teacheone = data['SCL']['2017-2']['ratings'][0]['teacher'];
    var teachetwo = data['SCL']['2017-2']['ratings'][1]['teacher'];
    var total = teacheone + teachetwo ;
    var promedio = total / 2;
    document.getElementById('teacher').innerHTML = promedio;

    // creando promedio de los jedis
    var teacheone = data['SCL']['2017-2']['ratings'][0]['jedi'];
    var teachetwo = data['SCL']['2017-2']['ratings'][1]['jedi'];
    var total = teacheone + teachetwo;
    var promedio = total / 2;
    document.getElementById('jedi').innerHTML = promedio;

    // creando funcion de satisfaccion
    var cumple1 = data['SCL']['2017-2']['ratings'][0]['student']['cumple'];
    var cumple2 = data['SCL']['2017-2']['ratings'][1]['student']['cumple'];
    var cumple = cumple1 + cumple2;
    var supera1 = data['SCL']['2017-2']['ratings'][0]['student']['supera'];
    var supera2 = data['SCL']['2017-2']['ratings'][1]['student']['supera'];
    var supera = supera1 + supera2;
    var satisfecho = (cumple + supera) / 2;
    document.getElementById('satisfecho').innerHTML = satisfecho;

    break;
  case 'CiudaddeMexico2017-I':
    var estudiantelim9 = (data['CDMX']['2017-1']['students'].length);
    console.log(document.getElementById('one').innerHTML = estudiantelim9);
    // creando desercion
    var totalStudent = data['CDMX']['2017-1']['students'];
    var activeStudent = [];
    var inactiveStudent = [];
    for (var i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        activeStudent.push(i);
      } else {
        inactiveStudent.push(i);
      }
    }
    document.getElementById('two').innerHTML = (inactiveStudent.length / estudiantelim9) * 100 + '%';

    // creando NPS
    var ratings = data['CDMX']['2017-1']['ratings'][0];
    var promoters = ratings['nps']['promoters'];
    var passive = ratings['nps']['passive'];
    var detractors = ratings['nps']['detractors'];
    var npsTotal = promoters - detractors;

    console.log(document.getElementById('five').innerHTML = (npsTotal) + ' %');

    console.log(document.getElementById('six-1').innerHTML = (promoters) + '%' + 'promoters');
    console.log(document.getElementById('six-2').innerHTML = (passive) + '%' + 'passives');
    console.log(document.getElementById('six-3').innerHTML = (detractors) + '%' + 'detractors');

    // creando promedio de los profesores
    var teacheone = data['CDMX']['2017-1']['ratings'][0]['teacher'];
    var teachetwo = data['CDMX']['2017-1']['ratings'][1]['teacher'];
    var teachetree = data['CDMX']['2017-1']['ratings'][2]['teacher'];

    var total = teacheone + teachetwo + teachetree;
    var promedio = total / 3;

    document.getElementById('teacher').innerHTML = promedio;
    // creando promedio de los jedis
    var teacheone = data['CDMX']['2017-1']['ratings'][0]['jedi'];
    var teachetwo = data['CDMX']['2017-1']['ratings'][1]['jedi'];
    var teachetree = data['CDMX']['2017-1']['ratings'][2]['jedi'];

    var total = teacheone + teachetwo + teachetree;
    var promedio = total / 3;

    document.getElementById('jedi').innerHTML = promedio;
    // creando funcion de satisfaccion
    var cumple1 = data['CDMX']['2017-1']['ratings'][0]['student']['cumple'];
    var cumple2 = data['CDMX']['2017-1']['ratings'][1]['student']['cumple'];
    var cumple3 = data['CDMX']['2017-1']['ratings'][2]['student']['cumple'];
    var cumple = cumple1 + cumple2 + cumple3 ;
    var supera1 = data['CDMX']['2017-1']['ratings'][0]['student']['supera'];
    var supera2 = data['CDMX']['2017-1']['ratings'][1]['student']['supera'];
    var supera3 = data['CDMX']['2017-1']['ratings'][2]['student']['supera'];
    var supera = supera1 + supera2 + supera3 ;
    var satisfecho = (cumple + supera) / 2;
    document.getElementById('satisfecho').innerHTML = satisfecho;
    break;
  case 'CiudaddeMexico2017-II':
    var estudiantelim10 = (data['CDMX']['2017-2']['students'].length);
    console.log(document.getElementById('one').innerHTML = estudiantelim10);// creando desercion
    var totalStudent = data['CDMX']['2017-2']['students'];
    var activeStudent = [];
    var inactiveStudent = [];
    for (var i = 0; i < totalStudent.length; i++) {
      if (totalStudent[i].active === true) {
        activeStudent.push(i);
      } else {
        inactiveStudent.push(i);
      }
    }
    document.getElementById('two').innerHTML = (inactiveStudent.length / estudiantelim10) * 100 + '%';
    // creando NPS
    var ratings = data['CDMX']['2017-2']['ratings'][0];
    var ratings = data['CDMX']['2017-2']['ratings'][0];
    var promoters = ratings['nps']['promoters'];
    var passive = ratings['nps']['passive'];
    var detractors = ratings['nps']['detractors'];
    var npsTotal = promoters - detractors;

    console.log(document.getElementById('five').innerHTML = (npsTotal) + ' %');

    console.log(document.getElementById('six-1').innerHTML = (promoters) + '%' + 'promoters');
    console.log(document.getElementById('six-2').innerHTML = (passive) + '%' + 'passives');
    console.log(document.getElementById('six-3').innerHTML = (detractors) + '%' + 'detractors');
    // creando promedio de los profesores
    var teacheone = data['CDMX']['2017-2']['ratings'][0]['teacher'];
    var teachetwo = data['CDMX']['2017-2']['ratings'][1]['teacher'];
    var total = teacheone + teachetwo ;
    var promedio = total / 2;
    document.getElementById('teacher').innerHTML = promedio;
    // creando promedio de los jedis
    var teacheone = data['CDMX']['2017-2']['ratings'][0]['jedi'];
    var teachetwo = data['CDMX']['2017-2']['ratings'][1]['jedi'];
    var total = teacheone + teachetwo;
    var promedio = total / 2;
    document.getElementById('jedi').innerHTML = promedio;
    // creando funcion de satisfaccion
    var cumple1 = data['CDMX']['2017-2']['ratings'][0]['student']['cumple'];
    var cumple2 = data['CDMX']['2017-2']['ratings'][1]['student']['cumple'];
    var cumple = cumple1 + cumple2;
    var supera1 = data['CDMX']['2017-2']['ratings'][0]['student']['supera'];
    var supera2 = data['CDMX']['2017-2']['ratings'][1]['student']['supera'];
    var supera = supera1 + supera2;
    var satisfecho = (cumple + supera) / 2;
    document.getElementById('satisfecho').innerHTML = satisfecho;

    break;
  default:
    alert('seleccione una opcion');
  }
}

function select() {
  sede.addEventListener('change', create);
  students.addEventListener('click', estudentcont);
  overview.addEventListener('click', overcont);
};
