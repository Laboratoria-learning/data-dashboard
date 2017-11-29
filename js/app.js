/* Funcionalidad de tu producto */
// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

window.addEventListener('load', select);

var overview = document.getElementById('tab-overview');// lo que quiero hacer click
var contentOverview = document.getElementById('contentOverview');// lo que quiero que aparezca
var students = document.getElementById('tab-students');// lo que quiero hacer click
var contentStudents = document.getElementById('contentStudents');// lo que quiero que aparezca

function estudentcont () {
  contentOverview.style.display = 'none';
  contentStudents.style.display = 'block';
}
 function overcont () {
  contentOverview.style.display = 'block';

};

function create() {
  var sede = document.getElementById('sede').value;
  document.getElementById('text').innerHTML = sede ;
    var datos = (data["AQP"]["2016-2"]["students"]);

    if (datos == true ) {
     document.getElementById('one').innerHTML = datos;
      }


switch(sede) {
  case 'LIMA2016-II':
  var estudiantelim1 = (data["LIM"]["2016-2"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim1);  
      break;
  case 'LIMA2017-I':
  var  estudiantelim2 = (data["LIM"]["2017-1"]["students"].length);
  console.log( document.getElementById('one').innerHTML = estudiantelim2);
      break;
  default:
      alert('f');
} 

  //  var estudiantelim1 = (data["LIM"]["2016-2"]["students"].length)
  //     // document.getElementById('one').innerHTML = estudiantelim1;
  //  var  estudiantelim2 = (data["LIM"]["2017-1"]["students"].length)
  //     document.getElementById('one').innerHTML = estudiantelim2;
  // var estudiantelim3 = (data["LIM"]["2017-2"]["students"].length)
  //     document.getElementById('one').innerHTML = estudiantelim3;
  // var estudianteareq1 = (data["AQP"]["2016-2"]["students"].length);
  //     document.getElementById('one').innerHTML =  estudianteareq1;
  // var estudianteareq2 = (data["AQP"]["2017-1"]["students"].length);
  //     document.getElementById('one').innerHTML =  estudianteareq2;

}

function select() {
  sede.addEventListener('change', create);
  students.addEventListener('click', estudentcont);
  overview.addEventListener('click', overcont);


};
