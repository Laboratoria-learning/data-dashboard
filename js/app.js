/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
var button=document.getElementById("button");
var options = document.getElementById("options");

button.addEventListener("click", function(event) {
	options.setAttribute("class", "show space");
	})
options.addEventListener("click", function(event){
	options.setAttribute("class", "hide space");
})
/*-----------------------------------------------------------------*/
var showHide = function(event) {
	var tabSelected = event.target.dataset.tabSelected;
	var overview = document.getElementById('overview');
	var students = document.getElementById('students');
	var teachers = document.getElementById('teachers');
	if(tabSelected === 'tabOverview'){
		
		students.setAttribute("class", "hide");
		teachers.setAttribute("class", "hide");
		overview.setAttribute("class", "show");
	} else if (tabSelected === 'tabStudents'){
		students.setAttribute("class", "show");
		teachers.setAttribute("class", "hide");
		overview.setAttribute("class", "hide");
	} else if (tabSelected === 'tabTeachers'){
		students.setAttribute("class", "hide");
		teachers.setAttribute("class", "show");
		overview.setAttribute("class", "hide");
	}
}

var loadWebPage = function(event){
	var elementsTab = document.getElementsByClassName("menuLabel");
	for( var i= 0; i < elementsTab.length;i ++){
		elementsTab[i].addEventListener("click", showHide);
	}
}

loadWebPage();

/*----------------------------------------------------------------*/

var newData = data.LIM["2016-2"].ratings["0"].student.cumple;
/*-----*/
var cumple2= data.LIM["2016-2"].ratings["1"].student.cumple;
/*=============================================================*/

var optionSelected= document.getElementById("option-lima");

optionSelected.addEventListener("click", function(event) {
	var text = document.getElementById("selected");
	text.textContent=optionSelected.textContent;
	var studentsNumber = document.getElementById("studentNumber");
})

var dateOne_lima=document.getElementById("dateOne-lima");

dateOne_lima.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Lima " + dateOne_lima.textContent;
})
var dateTwo_lima=document.getElementById("dateTwo-lima");

dateTwo_lima.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Lima " + dateTwo_lima.textContent;
})
var dateThree_lima=document.getElementById("dateThree-lima");

dateThree_lima.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Lima " + dateThree_lima.textContent;
})
var dateFour_lima=document.getElementById("dateFour-lima");

dateFour_lima.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Lima " + dateFour_lima.textContent;
})
var dateFive_lima=document.getElementById("dateFive-lima");

dateFive_lima.addEventListener("click", function(event){
	var average_tech = document.getElementById("average-tech");
	average_tech.textContent=newData+cumple2;
	var text = document.getElementById("selected");
	text.textContent="Lima " + dateFive_lima.textContent;
})

var dateSix_lima=document.getElementById("dateSix-lima");

dateSix_lima.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Lima " + dateSix_lima.textContent;
	
})
var dateSeven_lima=document.getElementById("dateSeven-lima");

dateSeven_lima.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Lima " + dateSeven_lima.textContent;
})
/*------------------------------------------------------*/

var optionSelected2= document.getElementById("option-chile");

optionSelected2.addEventListener("click", function(event) {
	var text = document.getElementById("selected");
	text.textContent=optionSelected2.textContent;
	var studentsNumber = document.getElementById("studentNumber");
})

var dateOne_chile=document.getElementById("dateOne-chile");

dateOne_chile.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Santiago de Chile " + dateOne_chile.textContent;
})
var dateTwo_chile=document.getElementById("dateTwo-chile");

dateTwo_chile.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Santiago de Chile " + dateTwo_chile.textContent;
})
var dateThree_chile=document.getElementById("dateThree-chile");

dateThree_chile.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Santiago de Chile " + dateThree_chile.textContent;
})
var dateFour_chile=document.getElementById("dateFour-chile");

dateFour_chile.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Santiago de Chile " + dateFour_chile.textContent;
})
var dateFive_chile=document.getElementById("dateFive-chile");

dateFive_chile.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Santiago de Chile " + dateFive_chile.textContent;
})
var dateSix_chile=document.getElementById("dateSix-chile");

dateSix_chile.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Santiago de Chile " + dateSix_chile.textContent;
})


/*---------------------------------------------------------------*/


var optionSelected3= document.getElementById("option-mexico");

optionSelected3.addEventListener("click", function(event) {
	var text = document.getElementById("selected");
	text.textContent=optionSelected3.textContent;
	var studentsNumber = document.getElementById("studentNumber");
})

var dateOne_mexico=document.getElementById("dateOne-mexico");

dateOne_mexico.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Mexico " + dateOne_mexico.textContent;
})
var dateTwo_mexico=document.getElementById("dateTwo-mexico");

dateTwo_mexico.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Mexico " + dateTwo_mexico.textContent;
})
var dateThree_mexico=document.getElementById("dateThree-mexico");

dateThree_mexico.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Mexico " + dateThree_mexico.textContent;
})
var dateFour_mexico=document.getElementById("dateFour-mexico");

dateFour_mexico.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Mexico " + dateFour_mexico.textContent;
})
var dateFive_mexico=document.getElementById("dateFive-mexico");

dateFive_mexico.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Mexico " + dateFive_mexico.textContent;
})
var dateSix_mexico=document.getElementById("dateSix-mexico");

dateSix_mexico.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Mexico " + dateSix_mexico.textContent;
})


/*----------------------------------------------------*/

var optionSelected4= document.getElementById("option-arequipa");

optionSelected4.addEventListener("click", function(event) {
	var text = document.getElementById("selected");
	text.textContent=optionSelected4.textContent;
	var studentsNumber = document.getElementById("studentNumber");
})

var dateOne_arequipa=document.getElementById("dateOne-arequipa");

dateOne_arequipa.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Arequipa " + dateOne_arequipa.textContent;
})
var dateTwo_arequipa=document.getElementById("dateTwo-arequipa");

dateTwo_arequipa.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Arequipa " + dateTwo_arequipa.textContent;
})
var dateThree_arequipa=document.getElementById("dateThree-arequipa");

dateThree_arequipa.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Arequipa " + dateThree_arequipa.textContent;
})
var dateFour_arequipa=document.getElementById("dateFour-arequipa");

dateFour_arequipa.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Arequipa " + dateFour_arequipa.textContent;
})
var dateFive_arequipa=document.getElementById("dateFive-arequipa");

dateFive_arequipa.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Arequipa " + dateFive_arequipa.textContent;
})
var dateSix_arequipa=document.getElementById("dateSix-arequipa");

dateSix_arequipa.addEventListener("click", function(event){
	var text = document.getElementById("selected");
	text.textContent="Arequipa " + dateSix_arequipa.textContent;
})

/*--------------------------------------------------------------*/

var specialization_1 = document.getElementById("topic-1");
var squareMarked_1 = document.getElementById("square-1");
var specialization_2 = document.getElementById("topic-2");
var squareMarked_2 = document.getElementById("square-2");
var specialization_3 = document.getElementById("topic-3");
var squareMarked_3 = document.getElementById("square-3");


specialization_1.addEventListener("click", function(event) {
	squareMarked_1.setAttribute("class", "icon-square background-color");
	squareMarked_2.setAttribute("class", "icon-square");
	squareMarked_3.setAttribute("class", "icon-square");
})


specialization_2.addEventListener("click", function(event) {
	squareMarked_2.setAttribute("class", "icon-square background-color");
	squareMarked_1.setAttribute("class", "icon-square");
	squareMarked_3.setAttribute("class", "icon-square");
})



specialization_3.addEventListener("click", function(event) {
	squareMarked_3.setAttribute("class", "icon-square background-color");
	squareMarked_1.setAttribute("class", "icon-square");
	squareMarked_2.setAttribute("class", "icon-square");
})

/*---------------------------------------------------------------------------------*/
/*FUNCIONALIDAD POR SPRINT*/

window.addEventListener('load', function() {
  var sede = '';
  var generacion = '';
  var places = document.getElementById('place');
  var generations = document.getElementById('generation');
  places.addEventListener('change', function(event) {
    var listGenerations = {AQP: ['2016-2', '2017-1'],
      CDMX: ['2017-1', ' 2017-2 '],
      LIM: ['2016-2', '2017-1', '2017-2'],
      SCL: ['2016-2', '2017-1', '2017-2']};
    
    var placeSelect = places.value;
    sede = placeSelect;
    // Limpiamos el select generation
    generations.innerHTML = '<option value="">Seleccione Generación</option>';
    if (placeSelect !== '') {
      // Seleccionamos Sede y se ordena
      placeSelect = listGenerations[placeSelect];
      placeSelect.sort();
      placeSelect.forEach(function(generation) {
        var opt = document.createElement('option');
        opt.value = generation;
        opt.text = generation;
        generations.add(opt);
      });
    }
    // fin de 1er lista
    generations.addEventListener('change', function() {
      generacion = generations.value;
    });
  });
  /* Fin de los Selects */
  /* Carga de datos predeterminados */
  //enveroment('LIM', '2017-2');
  //ratingTeachers('LIM', '2017-2');
  //ratingJedi('LIM', '2017-2');
  //studentSatisfation('LIM', '2017-2');

  var btndash = document.getElementById('btndash');
  /* Evento al hacer click al boton */
  btndash.addEventListener('click', function() {
    /* Enveroment Static*/
    enveroment(sede, generacion);
    /* Promedio de puntuacion Teacher */
    ratingTeachers(sede, generacion);
    ratingJedi(sede, generacion);
    studentSatisfation(sede, generacion);
    
  });
});
/* Funciones */
function enveroment(sede, generacion) {
  var cantidad = data[sede][generacion].students.length;
  var acum = 0;
  var acumtrue = 0;
  for (var i = 0; i < cantidad;i++) {
    if (data[sede][generacion].students[i].active == false) {
      acum++;
    } else {
      acumtrue++;
    }
  }
  var dropout = (acum / cantidad) * 100;
  var dropoutPercentaje = (Math.round(dropout) + '%');
  // inserta data de cantidad a los elementos
  var spanCount = document.getElementById('count-overview');
  var textCount = document.createTextNode(cantidad);
  spanCount.appendChild(textCount);
  // inserta data de desercion a los elementos
  var spanPercentaje = document.getElementById('percentaje-overview');
  var textPercentaje = document.createTextNode(dropoutPercentaje);
  spanPercentaje.appendChild(textPercentaje);
}
// Funcion que obtiene el promedio de la puntuacion de los teachers
function ratingTeachers(sede, generacion) {
  var ratingTeacher = 0;
  var countRatingT = data[sede][generacion].ratings.length;
  for (var i = 0;i < data[sede][generacion].ratings.length;i++) { 
    ratingTeacher += data[sede][generacion].ratings[i].teacher;
  }
  var averageTeacher = (ratingTeacher / countRatingT).toFixed(1);
  // inserta data a los elementos
  var spanRatingT = document.getElementById('t-rating-overview');
  var textRatingT = document.createTextNode(averageTeacher);
  spanRatingT.appendChild(textRatingT);
}
// Funcion que obtiene el promedio de la puntuacion de los jedis
function ratingJedi(sede, generacion) {
  var ratingJedi = 0;
  var countRatingJ = data[sede][generacion].ratings.length;
  // Recorremos el array ratings 
  for (var j = 0;j < data[sede][generacion].ratings.length;j++) { 
    // Acumula los puntajes de los jedis
    ratingJedi += data[sede][generacion].ratings[j].jedi;
  }
  // Declaro variable que almacene el promedio y con  función toFixed() poder limitar el número de decimales a través de su parámetr
  var averageJedi = (ratingJedi / countRatingJ).toFixed(1);
  // inserta data a los elementos
  var spanRatingJ = document.getElementById('j-rating-overview');
  var textRatingJ = document.createTextNode(averageJedi);
  spanRatingJ.appendChild(textRatingJ);
}
function studentSatisfation(sede, generacion) {
  var count = data[sede][generacion].ratings.length - 1;
  var sum = 0;
  for (var i = 0;i < data[sede][generacion].ratings.length;i++) { 
    // Acumula los puntajes de los jedis
    sum += data[sede][generacion].ratings[i].nps.promoters;
  }
  console.log(sum);
  // inserta data a los elementos
  var spanNpsS = document.getElementById('s-nps-overview');
  var textNpsS = document.createTextNode(sum);
  spanNpsS.appendChild(textNpsS);

}









	

















