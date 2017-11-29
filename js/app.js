// /*
//  * Funcionalidad de tu producto
//  */

// // Puedes hacer uso de la base de datos a través de la variable `data`
// window.onload = function() {
// }
// var sede = getElementsByClassName('sede');

// var selectProm= document.getElementsByClassName('promocion')
// var selectSprint= document.getElementsByClassName('sprint')
// console.log(data['AQP']['2017-1']['students'].length);

// var sede1 = data['AQP']['2017-1']['students']['active'];
// var sede2 = data['AQP']['2016-2']['students'];
// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['Generacion','Porcentaje'],
//     ['2017', sede1],
//     ['2016', sede2]]);

//   var options = {
//     title: 'Alumnas'
//   };
//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));

//   chart.draw(data, options);
// }     
// var retiradas = data['AQP']['2017-1']['students'] 
// function begin () {
//   var selectSede= document.getElementsByClassName('sede');
//   var selectProm= document.getElementsByClassName('promocion')
//   var selectSprint= document.getElementsByClassName('sprint')
// }

// var students = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];

// console.log(data.AQP['2016-2'].students[1].active);


function openPage(evnt, opt) {
  var i, tabContent, menus;
  tabContent = document.getElementsByClassName('tabContent');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
}
  menus = document.getElementsByClassName('menus');
  for (i = 0; i < menus.length; i++) {
    menus[i].className = menus[i].className.replace('active', '');  
}    
  document.getElementById(opt).style.display = 'block';
  evnt.currentTarget.className += 'active';
}
  document.getElementById('default').click();












