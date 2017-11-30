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
      console.log(document.getElementById('one').innerHTML =  estudiantelim1  + " # estudents currentl enrrolled" );
      var totalStudentlim1 = data['LIM']['2016-2']['students'];
      porcentaje();
      break;
  case 'LIMA2017-I':
  var estudiantelim2 = (data['LIM']['2017-1']['students'].length);
  var totalStudentlim2 = data['LIM']['2017-1']['students'];
  console.log( document.getElementById('one').innerHTML = estudiantelim2);
      break;
  case 'LIMA2017-II':
  var  estudiantelim3 = (data["LIM"]["2017-1"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim3);
      break;
  case 'AREQUIPA2016-II':
  var  estudiantelim4 = (data["AQP"]["2016-2"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim4);
  var totalStudentAQP1 = data["AQP"]["2016-2"]["students"];
  porcentaje();
       break;
  case 'AREQUIPA2017-I':
  var  estudiantelim5 = (data["AQP"]["2017-1"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim5);
      break;
  case 'SantiagodeChile2016-II':
  var  estudiantelim6 = (data["SCL"]["2017-1"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim6);
      break;
  case 'SantiagodeChile2017-I':
  var  estudiantelim7 = (data["SCL"]["2017-1"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim7);
      break;
  case 'SantiagodeChile2017-II':
  var  estudiantelim8 = (data["SCL"]["2017-2"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim8);
      break;
  case 'CiudaddeMexico2017-I':
  var  estudiantelim9 = (data["CDMX"]["2017-1"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim9);
     break;
  case 'CiudaddeMexico2017-II':
  var  estudiantelim10 = (data["CDMX"]["2017-2"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim10);
  porcentaje();
    break;
  default:
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


}

function select() {

  sede.addEventListener('change', create);

  students.addEventListener('click', estudentcont);
  overview.addEventListener('click', overcont);


};
