
// ---------------------------
var resp = document.getElementById('resp');
var aqp20162 = document.getElementById('AQP20162');
var aqp20171 = document.getElementById('AQP20171');

function faqp20162() {
  resp.textContent = 'numEstudentsAQP20162';
}

function faqp20171() {
  resp.textContent = 'numEstudentsAQP20171';
}
aqp20162 .addEventListener('click', faqp20162);
aqp20171 .addEventListener('click', faqp20171);

// -------------------

var resp2 = document.getElementById('resp2');
var ar20162 = document.getElementById('ar20162');
var ar20171 = document.getElementById('ar20171');

function far20162() {
  resp2.textContent = 'arequipa1';
}

function far20171() {
  resp2.textContent = 'arequipa2';
}
ar20162.addEventListener('click', far20162);
ar20171.addEventListener('click', far20171);

// -----------
