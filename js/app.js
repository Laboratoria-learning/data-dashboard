/*
 * Funcionalidad de tu producto
 */

window.addEventListener('load', function() {
  var openAnimatedMenu = document.getElementById('open-animated-menu');
  var closeAnimatedMenu = document.getElementById('close-animated-menu');
    
  openAnimatedMenu.addEventListener('click', function() {
    document.getElementById('animated-menu').style.width = '250px';
  });

  closeAnimatedMenu.addEventListener('click', function() {
    document.getElementById('animated-menu').style.width = '0';
  });

  var box2 = document.getElementById('aqp-nps-sprint1');
  var promoS120162 = data.AQP['2016-2'].ratings[0].nps.promoters;
  var detracS120162 = data.AQP['2016-2'].ratings[0].nps.detractors;

  var parag = document.createElement("p");
  var text = document.createTextNode(promoS120162);
  parag.appendChild(text);
  box2.appendChild(parag);

  var parag2 = document.createElement("p");
  var text2 = document.createTextNode(detracS120162);
  parag2.appendChild(text2);
  box2.appendChild(parag2);
});


// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

