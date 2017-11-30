<div class="filters-container">
  <ul class="filters">
    <li class="Overview">OVERVIEW</li>
    <li class="Estudiantes">STUDENTS</li>
    <li class="Profesores">TEACHERS</li>
  </ul>
</div>
<div class="menuContainer">
  <ul class="">
    <li id='AQP20162' class="list" >AQP 2016-2</li>
    <li id='AQP20171' class="list" >AQP 2017-1</li>
  </ul>
</div>
<div class="chartsContainer">
  <div id=resp class="resp">
  </div>
</div>

// ---------------------------
var resp = document.getElementById('resp');
var aqp20162 = document.getElementById('AQP20162');
var aqp20171 = document.getElementById('AQP20171');

function faqp20162() {
  resp.textContent = 'numEstudentsAQP20162';
}

function faqp20171() {
  resp.textContent = numEstudentsAQP20171;
}
aqp20162 .addEventListener('click', faqp20162);
aqp20171 .addEventListener('click', faqp20171);




// ---------------------------
var resp = document.getElementById('resp');
var aqp20162 = document.getElementById('AQP20162');
function faqp20162() {
  resp.textContent = 'numEstudentsAQP20162';
}
aqp20162 .addEventListener('click', faqp20162 );

// ----------------
aqp20162.addEventListener('click', faqp20162);

var aqp20171 = document.getElementById('AQP20171');
function faqp20171() {

  resp.textContent = 'numEstudentsAQP20171';

}
// newDiv.classList.add('new-style');
aqp20171 .addEventListener('click', faqp20171 );
----------------------
var lim = document.getElementById('lima1');
function creatDiv(event) {
  event.preventDefault();
  var newDiv = document.createElement('div');
  newDiv.classList.add('new-style');
  container.appendChild(newDiv);
  newDiv.textContent = numEstudentsAQP20162;
}
lim.addEventListener('click', creatDiv);

------------------------------------
var lim = document.getElementById('lima1');
function creatDiv() {
  var newDiv = document.createElement('div');
  newDiv.classList.add('new-style');
  container.appendChild(newDiv);
  newDiv.textContent = numEstudentsAQP20162;
}

lim.addEventListener('click', creatDiv);

-----------------------------------
var cdmx20171 = document.getElementById('CDMX20171');

function createContainer() {
  alert('salio');
}

el.addEventListener('click', createContainer);

var btn = document.getElementById('btn');
function getData() {
  alert('salio');
}
button.addEventListener('click', getData);

----------------
var container = document.getElementById('container');
var cdmx20171 = document.getElementById('CDMX20171');
function createContainer() {
  var div1 = document.createElement('div');
  container.appendChild(div1);
  alert('salio');
  newDiv.textContent = 'salio';
}
cdmx20171.addEventListener('click', createContainer);


---------------------------------
button.disabled = false;

<!--funcion conseguir data-->
function getData() {
var dataValue = data.value;
<!--nuevo div-->
var newDiv = document.createElement('div');
<!--data y estilo en nuevo div-->
createTweet.appendChild(newDiv);
newDiv.textContent = time() + ' |  ' +dataValue;
newDiv.classList.add('new-style');
<!--limpiar data-->
data.value = "";


button.addEventListener('click', getData);

---------------------------------------

var boton = document.getElementById('btn')

boton.addEventListener('click', showMenu);
function showMenu() {
  var menu = document.getElementById('opcs-menu');

  if (menu.classList.contains('disabled-menu')){
  menu.classList.remove('disabled-menu');
  menu.classList.add('enabled-menu');
  }
  else{
    menu.classList.remove('enabled-menu');
    menu.classList.add('disabled-menu');
  }
}

--------------------------------------

var container = document.getElementById('container');

function createImage(urlImage) {
  var image = document.createElement('img');

  image.setAttribute('src', urlImage );
  image.setAttribute('alt', 'caja');
  container.appendChild(image);
}
var arrayImages = ['http://www.abc-pack.com/wp-content/uploads/2013/10/Cajas-de-carton-para-envios-y-paqueteria.jpg', 'https://kartox.com/media/catalog/product/cache/1/image/4137793dd7223b9146d9dcb53ced065c/k/a/kartox-caja-sin-solapas.jpg', 'https://kartox.com/media/catalog/product/cache/1/image/4137793dd7223b9146d9dcb53ced065c/k/a/kartox-caja-con-solapas-cerrada_2.jpg']

for(var i = 0; i < arrayImages.length; i++) {
  createImage(arrayImages[i]);
}
var container = document.getElementById('container');

container.addEventListener('click', function () {
  container.style.backgroundColor = 'red';
})






/* Cantidad de estudiantes que superan la meta*/

/* ratings de estudiantes---------------------------------------------*/
// estudiantes CDMX
var ratingsCDMX20171 = data.CDMX['2017-1'].ratings;// Array
var ratingsCDMX20172 = data.CDMX['2017-2'].ratings;
// estudiantes LIM
var ratingsLIM20162 = data.LIM['2016-2'].ratings;
var ratingsLIM20171 = data.LIM['2017-1'].ratings;
var ratingsLIM20172 = data.LIM['2017-2'].ratings;


/* porcentajes de estudiantes superaron la meta CDMX 2017-1 por sprint--------------------------*/
percesExceedGoalCDMX20171 = [];
for (var i = 0; i < ratingsCDMX20171.length; i++) {
  percesExceedGoalCDMX20171.push(ratingsCDMX20171[i].student.supera);
}
console.log('% estudiantes exceden meta en CDMX20171 : ' + percesExceedGoalCDMX20171);

// numero estudiantes superaron la meta CDMX 2017-1 por sprint

var sprint1numExceedGoalCDMX20171 = percesExceedGoalCDMX20171[0] * numEstudentsCDMX20171 / 100; // <-- linea 9
console.log('numero alumnas exceden meta CDMX20171-sprint1 : ' + sprint1numExceedGoalCDMX20171);
var sprint2numExceedGoalCDMX20171 = percesExceedGoalCDMX20171[1] * numEstudentsCDMX20171 / 100;
console.log('numero alumnas exceden meta CDMX20171-sprint2 : ' + sprint2numExceedGoalCDMX20171);
var sprint3numExceedGoalCDMX20171 = percesExceedGoalCDMX20171[2] * numEstudentsCDMX20171 / 100;
console.log('numero alumnas exceden meta CDMX20171-sprint3 : ' + sprint3numExceedGoalCDMX20171);

/* porcentajes de estudiantes superaron la meta CDMX 2017-2 por sprint--------------------------*/
percesExceedGoalCDMX20172 = [];
for (var i = 0; i < ratingsCDMX20172.length; i++) {
  percesExceedGoalCDMX20172.push(ratingsCDMX20172[i].student.supera);
}
console.log('% estudiantes exceden meta en CDMX20172 : ' + percesExceedGoalCDMX20172);

// numero estudiantes superaron la meta CDMX 2017-1 por sprint

var sprint1numExceedGoalCDMX20172 = percesExceedGoalCDMX20172[0] * numEstudentsCDMX20172 / 100; // <-- linea 9
console.log('numero alumnas exceden meta CDMX20172-sprint1 : ' + sprint1numExceedGoalCDMX20172);
var sprint2numExceedGoalCDMX20172 = percesExceedGoalCDMX20172[1] * numEstudentsCDMX20172 / 100;
console.log('numero alumnas exceden meta CDMX20172-sprint2 : ' + sprint2numExceedGoalCDMX20172);


// Codigo Chio para agrupar //

