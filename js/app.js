// variable que almacena  el texto junto de sede y generacion
var sedeGeneration = document.getElementById('sede_generation');
// variable que almacena la lista de sedes
var listSedes = document.getElementById('list_sedes').childElements;
var arequipaGenerations = document.getElementById('arequipa_generations');
var mexicoGenerations = document.getElementById('mexico_generations');
var limaGenerations = document.getElementById('lima_generations');
var chileGenerations = document.getElementById('chile_generations');


sedeGeneration.addEventListener('click', showListSedes);
function showListSedes(event) {

};
// data.AQP["2016-2"].students.length --> me da el total de estudiantes de arequipa 2016-2































































// total promoters
var promoters = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var promoters = promoters + data.AQP['2016-2'].ratings[i].nps.promoters;
};
// total detractors
var detractors = 0;
for (i = 0; i < data.AQP['2016-2'].ratings.length; i++) {
  var detractors = detractors + data.AQP['2016-2'].ratings[i].nps.detractors;
};

// total nps
var nps = promoters - detractors;
console.log(nps);
