
// Menu despleglable para las sedes
var lima = document.getElementById('countries').children[0];
lima.addEventListener('click', function(event) {
  event.preventDefault();
  var city = document.getElementById('countries').children[0].children[1];
  city.classList.toggle('hide');
});

var arequipa = document.getElementById('countries').children[1];
arequipa.addEventListener('click', function(event) {
  event.preventDefault();
  var city = document.getElementById('countries').children[1].children[1];
  city.classList.toggle('hide');
});

var santiago = document.getElementById('countries').children[2];
santiago.addEventListener('click', function(event) {
  event.preventDefault();
  var city = document.getElementById('countries').children[2].children[1];
  city.classList.toggle('hide');
});

var mexicoDf = document.getElementById('countries').children[3];
mexicoDf.addEventListener('click', function(event) {
  event.preventDefault();
  var city = document.getElementById('countries').children[3].children[1];
  city.classList.toggle('hide');
});

//accediendo a lima
window.addEventListener('load',function(){
  var lima = document.getElementById('lima');
  var arequipa = document.getElementById('arequipa');
  var santiago = document.getElementById('santiago');
  var mexicoDF = document.getElementById('mexicoDF');

  lima.addEventListener('click',function(){
    var x = data.LIM["2017-2"]['ratings'][0]['nps']['promoters'];
    var y = data.LIM["2017-2"]['ratings'][0]['nps']['passive'];
    var z = data.LIM["2017-2"]['ratings'][0]['nps']['detractors'];
    var numEnrollment = document.getElementById('numEnro');
    numEnrollment.textContent=x+y+z +'#student currently enrolled';

  })




})

/* var select = document.getElementById('select');
var alumn = document.getElementById('alumn');

select.addEventListener('click', function() {
var image = document.createElement('img');
alumn.appendChild(image);
image.src = data.LIM['2016-2']['students'][0]['photo'];*/
