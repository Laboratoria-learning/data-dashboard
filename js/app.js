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
  contentStudents.style.display = 'none';
  
};

function create() {       
  var sede = document.getElementById('sede').value;   
  document.getElementById('text').innerHTML = sede ;   
    var datos = (data["AQP"]["2016-2"]["students"]);
    
    if (datos == true ) {
     document.getElementById('one').innerHTML = datos;
      }
 

}

function select() {
  sede.addEventListener('change', create);
  students.addEventListener('click', estudentcont);
  overview.addEventListener('click', overcont);
  

};

