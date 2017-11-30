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
    var totalStudentlim1 = data['LIM']['2016-2']['students'];
      console.log(document.getElementById('one').innerHTML =  estudiantelim1  + " # estudents currentl enrrolled" );
      /* Añadiendo NPS */
      var ratings = data['LIM']['2016-2']['ratings'][0];
      var promoters = ratings['nps']['promoters'];
      var passive = ratings['nps']['passive'];
      var detractors = ratings['nps']['detractors'];
      var npsTotal = promoters - detractors;

      console.log(document.getElementById('five').innerHTML = (npsTotal) + " %");

      console.log(document.getElementById('six-1').innerHTML = (promoters) + "%" + "promoters");
      console.log(document.getElementById('six-2').innerHTML = (passive) + "%" + "passives");
      console.log(document.getElementById('six-3').innerHTML = (detractors) + "%" + "detractors");
      break;
  case 'LIMA2017-I':
  var estudiantelim2 = (data['LIM']['2017-1']['students'].length);
  var totalStudentlim2 = data['LIM']['2017-1']['students'];
  console.log( document.getElementById('one').innerHTML = estudiantelim2);
  /* Añadiendo NPS*/
  var ratings = data['LIM']['2017-1']['ratings'][0];
  var promoters = ratings['nps']['promoters'];
  var passive = ratings['nps']['passive'];
  var detractors = ratings['nps']['detractors'];
  var npsTotal = promoters - detractors;

  console.log(document.getElementById('five').innerHTML = (npsTotal) + " %");

  console.log(document.getElementById('six-1').innerHTML = (promoters) + "%" + "promoters");
  console.log(document.getElementById('six-2').innerHTML = (passive) + "%" + "passives");
  console.log(document.getElementById('six-3').innerHTML = (detractors) + "%" + "detractors");
      break;
  case 'LIMA2017-II':
  var  estudiantelim3 = (data["LIM"]["2017-1"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim3);
  /* Añadiendo NPS*/
  var ratings = data['LIM']['2017-2']['ratings'][0];
  var promoters = ratings['nps']['promoters'];
  var passive = ratings['nps']['passive'];
  var detractors = ratings['nps']['detractors'];
  var npsTotal = promoters - detractors;

  console.log(document.getElementById('five').innerHTML = (npsTotal) + " %");

  console.log(document.getElementById('six-1').innerHTML = (promoters) + "%" + "promoters");
  console.log(document.getElementById('six-2').innerHTML = (passive) + "%" + "passives");
  console.log(document.getElementById('six-3').innerHTML = (detractors) + "%" + "detractors");
      break;
  case 'AREQUIPA2016-II':
  var  estudiantelim4 = (data["AQP"]["2016-2"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim4);
  var totalStudentAQP1 = data["AQP"]["2016-2"]["students"];
  /* Añadiendo NPS */
  /* Añadiendo NPS*/
  var ratings = data['AQP']['2016-2']['ratings'][0];
  var promoters = ratings['nps']['promoters'];
  var passive = ratings['nps']['passive'];
  var detractors = ratings['nps']['detractors'];
  var npsTotal = promoters - detractors;

  console.log(document.getElementById('five').innerHTML = (npsTotal) + " %");

  console.log(document.getElementById('six-1').innerHTML = (promoters) + "%" + "promoters");
  console.log(document.getElementById('six-2').innerHTML = (passive) + "%" + "passives");
  console.log(document.getElementById('six-3').innerHTML = (detractors) + "%" + "detractors");
       break;
  case 'AREQUIPA2017-I':
  var  estudiantelim5 = (data["AQP"]["2017-1"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim5);
  /* Añadiendo NPS*/
  var ratings = data['AQP']['2017-1']['ratings'][0];
  var promoters = ratings['nps']['promoters'];
  var passive = ratings['nps']['passive'];
  var detractors = ratings['nps']['detractors'];
  var npsTotal = promoters - detractors;

  console.log(document.getElementById('five').innerHTML = (npsTotal) + " %");

  console.log(document.getElementById('six-1').innerHTML = (promoters) + "%" + "promoters");
  console.log(document.getElementById('six-2').innerHTML = (passive) + "%" + "passives");
  console.log(document.getElementById('six-3').innerHTML = (detractors) + "%" + "detractors");
      break;
  case 'SantiagodeChile2016-II':
<<<<<<< HEAD
  var  estudiantelim6 = (data["SCL"]["2016-2"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim6);
  /* Añadiendo NPS*/
  var ratings = data['SCL']['2016-2']['ratings'][0];
  var promoters = ratings['nps']['promoters'];
  var passive = ratings['nps']['passive'];
  var detractors = ratings['nps']['detractors'];
  var npsTotal = promoters - detractors;

  console.log(document.getElementById('five').innerHTML = (npsTotal) + " %");

  console.log(document.getElementById('six-1').innerHTML = (promoters) + "%" + "promoters");
  console.log(document.getElementById('six-2').innerHTML = (passive) + "%" + "passives");
  console.log(document.getElementById('six-3').innerHTML = (detractors) + "%" + "detractors");
      break;
=======
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
    

    break;
>>>>>>> abe8ed5fb9097c6aee96d616a0e3054a15fc6d04
  case 'SantiagodeChile2017-I':
  var  estudiantelim7 = (data["SCL"]["2017-1"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim7);
  /* Añadiendo NPS*/
  var ratings = data['SCL']['2017-1']['ratings'][0];
  var promoters = ratings['nps']['promoters'];
  var passive = ratings['nps']['passive'];
  var detractors = ratings['nps']['detractors'];
  var npsTotal = promoters - detractors;

  console.log(document.getElementById('five').innerHTML = (npsTotal) + " %");

  console.log(document.getElementById('six-1').innerHTML = (promoters) + "%" + "promoters");
  console.log(document.getElementById('six-2').innerHTML = (passive) + "%" + "passives");
  console.log(document.getElementById('six-3').innerHTML = (detractors) + "%" + "detractors");
      break;
  case 'SantiagodeChile2017-II':
  var  estudiantelim8 = (data["SCL"]["2017-2"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim8);
  /* Añadiendo NPS*/
  var ratings = data['SCL']['2017-2']['ratings'][0];
  var promoters = ratings['nps']['promoters'];
  var passive = ratings['nps']['passive'];
  var detractors = ratings['nps']['detractors'];
  var npsTotal = promoters - detractors;

  console.log(document.getElementById('five').innerHTML = (npsTotal) + " %");

  console.log(document.getElementById('six-1').innerHTML = (promoters) + "%" + "promoters");
  console.log(document.getElementById('six-2').innerHTML = (passive) + "%" + "passives");
  console.log(document.getElementById('six-3').innerHTML = (detractors) + "%" + "detractors");
      break;
  case 'CiudaddeMexico2017-I':
  var  estudiantelim9 = (data["CDMX"]["2017-1"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim9);
  /* Añadiendo NPS*/
  var ratings = data['CDMX']['2017-1']['ratings'][0];
  var promoters = ratings['nps']['promoters'];
  var passive = ratings['nps']['passive'];
  var detractors = ratings['nps']['detractors'];
  var npsTotal = promoters - detractors;

  console.log(document.getElementById('five').innerHTML = (npsTotal) + " %");

  console.log(document.getElementById('six-1').innerHTML = (promoters) + "%" + "promoters");
  console.log(document.getElementById('six-2').innerHTML = (passive) + "%" + "passives");
  console.log(document.getElementById('six-3').innerHTML = (detractors) + "%" + "detractors");
     break;
  case 'CiudaddeMexico2017-II':
  var  estudiantelim10 = (data["CDMX"]["2017-2"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim10);
  /* Añadiendo NPS*/
  var ratings = data['CDMX']['2017-2']['ratings'][0];
  var promoters = ratings['nps']['promoters'];
  var passive = ratings['nps']['passive'];
  var detractors = ratings['nps']['detractors'];
  var npsTotal = promoters - detractors;

  console.log(document.getElementById('five').innerHTML = (npsTotal) + " %");

  console.log(document.getElementById('six-1').innerHTML = (promoters) + "%" + "promoters");
  console.log(document.getElementById('six-2').innerHTML = (passive) + "%" + "passives");
  console.log(document.getElementById('six-3').innerHTML = (detractors) + "%" + "detractors");
    break;
  default:
<<<<<<< HEAD
      alert('seleccione una opcion');
}

  function porcentaje() {

var activeStudentAQP1 = [];
var inactiveStudentAQP1 = [];
for (var i = 0; i<totalStudentAQP1.length;i++){

      if(totalStudentAQP1[i].active === true){
        activeStudentAQP1.push(i);
      }else{
		inactiveStudentAQP1.push(i);}
    }
    console.log(document.getElementById('two').innerHTML = (inactiveStudentAQP1.length/estudiantelim4)*100 + "%" );
}

  function nps() {
    // var ratings = data['AQP']['2016-2']['ratings'][0];
    var promotersAQP = ratings['nps']['promoters'];
    var passiveAQP = ratings['nps']['passive'];
    var detractorsAQP = ratings['nps']['detractors'];
    var npsTotal = promotersAQP - detractorsAQP;

    console.log(document.getElementById('five').innerHTML = (npsTotal) + " %");

    console.log(document.getElementById('six-1').innerHTML = (promotersAQP) + "%" + "promoters");
    console.log(document.getElementById('six-2').innerHTML = (passiveAQP) + "%" + "passives");
    console.log(document.getElementById('six-3').innerHTML = (detractorsAQP) + "%" + "detractors");

}

=======
    alert('seleccione una opcion');
  }  
  function satisfaccion(){
      
  }
  
>>>>>>> abe8ed5fb9097c6aee96d616a0e3054a15fc6d04
}

function select() {

  sede.addEventListener('change', create);

  students.addEventListener('click', estudentcont);
  overview.addEventListener('click', overcont);


};
