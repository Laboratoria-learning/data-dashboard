// Load google charts-satisfied-students
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Sprint', 'Satisfied',],
  ['S1 ',30],
  ['S2', 20],
  ['S3', 50],
  ['S4', 60],
  ['S5', 70]
]);

  // Optional; add a title and set the width and height of the chart
  var options = { 'width':325, 'height':170};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.LineChart(document.getElementById('satisfied-chart'));
  chart.draw(data, options);
}
//funcion de los tabs de main section
var showHide = function(e) {
    var tabSelected = e.target.dataset.tabSelected;
    var overview = document.getElementById('container-overview');
    var students = document.getElementById('container-students');
    var teachers = document.getElementById('container-teachers');

    if(tabSelected === 'tabOverview') {
        console.log('This is overview section');
        //ocultar students, teachers  
        students.style.display ='none';
        teachers.style.display ='none';
        // mostrar solo overview
        overview.style.display = 'block';
    }else if(tabSelected === 'tabStudents') {
        console.log('This is students section');
        //ocultar overview, teachers
        overview.style.display ='none';
        teachers.style.display ='none';
        // mostrar solo students
        students.style.display ='block';
    }else if(tabSelected === 'tabTeachers') {
        console.log('This is teachers section');
        //ocultar overview, students 
        overview.style.display ='none';
        students.style.display ='none';
        // mostrar solo teachers
        teachers.style.display = 'block';
    }
}

var loadPage = function(){
    var overview = document.getElementById('container-overview');
    var students = document.getElementById('container-students');
    var teachers = document.getElementById('container-teachers'); 
    overview.style.display ='none';
    students.style.display ='none';
    teachers.style.display ='none';
    var tabElements = document.getElementsByClassName('tab');
    for(var i = 0;i < tabElements.length; i++) {
        tabElements[i].addEventListener('click', showHide)
    }
}
loadPage();
// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
