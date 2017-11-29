var region = document.getElementById('region');
var ulRegion = document.getElementById('list-region');
var lima = document.getElementById('lim');
var arequipa = document.getElementById('aqp');
var chile = document.getElementById('scl');
var mexico = document.getElementById('cdmx');
var previous = region;

window.addEventListener('load', function() {
  region.addEventListener('click', showRegion);
  lima.addEventListener('click', optionsLima);
  arequipa.addEventListener('click', optionsArequipa);
  chile.addEventListener('click', optionsChile);
  mexico.addEventListener('click', optionsMexico);
});
function showRegion() {
  ulRegion.classList.toggle('hidden');
};
function optionsLima() {
  paintOptions(lima, previous);
  previous = lima;
}
function optionsArequipa() {
  paintOptions(arequipa, previous);
  previous = arequipa;
}
function optionsChile() {
  paintOptions(chile, previous);
  previous = chile;
}
function optionsMexico() {
  paintOptions(mexico, previous);
  previous = mexico;
}
function paintOptions(option, previous) {
  option.classList.add('yellow');
  previous.classList.remove('yellow');
}

AQP162 = data.AQP['2016-2'];
LIM172 = data.LIM['2017-2'];

console.log(LIM172);
console.log(LIM172.length);
