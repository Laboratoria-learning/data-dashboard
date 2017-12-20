var firstOption= document.getElementById('option-1');
var secondOption= document.getElementById('option-2');
var thirdOption= document.getElementById('option-3');
var fourthOption= document.getElementById('option-4');
var fifthOption= document.getElementById('option-5');


var firstSection= document.getElementById('section-1');
var secondSection= document.getElementById('section-2');
var thirdSection= document.getElementById('section-3');
var fourthSection= document.getElementById('section-4');
var fifthSection= document.getElementById('section-5');

//Eventos para ocultar secciones
firstOption.addEventListener("click", hideSections);
secondOption.addEventListener("click", hideSections);
thirdOption.addEventListener("click", hideSections);
fourthOption.addEventListener("click", hideSections);
fifthOption.addEventListener("click", hideSections);

function hideSections(){

	if(this.id==="option-1"){
		firstSection.className="active";
		secondSection.className="inactive";
		thirdSection.className="inactive";
		fourthSection.className="inactive";
		fifthSection.className="inactive";
		event.preventDefault();
	}else if(this.id==="option-2"){
		firstSection.className="inactive";
		secondSection.className="active";
		thirdSection.className="inactive";
		fourthSection.className="inactive";
		fifthSection.className="inactive";
		event.preventDefault();
	}else if(this.id==="option-3"){
		firstSection.className="inactive";
		secondSection.className="inactive";
		thirdSection.className="active";
		fourthSection.className="inactive";
		fifthSection.className="inactive";
		event.preventDefault();
	}else if(this.id==="option-4"){
		firstSection.className="inactive";
		secondSection.className="inactive";
		thirdSection.className="inactive";
		fourthSection.className="active";
		fifthSection.className="inactive";
		event.preventDefault();
	}else{
		firstSection.className="inactive";
		secondSection.className="inactive";
		thirdSection.className="inactive";
		fourthSection.className="inactive";
		fifthSection.className="active";
		event.preventDefault();
	}
}

// eventos para iluminar pestañas
firstOption.addEventListener("click", selectOption);
secondOption.addEventListener("click",selectOption);
thirdOption.addEventListener("click", selectOption);
fourthOption.addEventListener("click", selectOption);
fifthOption.addEventListener("click", selectOption);

function selectOption(){

	if(this.id==="option-1"){
		firstOption.classList.add("highlighted");
		secondOption.classList.remove("highlighted");
		thirdOption.classList.remove("highlighted");
		fourthOption.classList.remove("highlighted");
		fifthOption.classList.remove("highlighted");
		event.preventDefault();
	}else if(this.id==="option-2"){
		firstOption.classList.remove("highlighted");
		secondOption.classList.add("highlighted");
		thirdOption.classList.remove("highlighted");
		fourthOption.classList.remove("highlighted");
		fifthOption.classList.remove("highlighted");
		event.preventDefault();
	}else if(this.id==="option-3"){
		firstOption.classList.remove("highlighted");
		secondOption.classList.remove("highlighted");
		thirdOption.classList.add("highlighted");
		fourthOption.classList.remove("highlighted");
		fifthOption.classList.remove("highlighted");
		event.preventDefault();
	}else if(this.id==="option-4"){
		firstOption.classList.remove("highlighted");
		secondOption.classList.remove("highlighted");
		thirdOption.classList.remove("highlighted");
		fourthOption.classList.add("highlighted");
		fifthOption.classList.remove("highlighted");
		event.preventDefault();
	}else{
		firstOption.classList.remove("highlighted");
		secondOption.classList.remove("highlighted");
		thirdOption.classList.remove("highlighted");
		fourthOption.classList.remove("highlighted");
		fifthOption.classList.add("highlighted");
		event.preventDefault();
	}
}

// ----------------> Selector de Generacion <----------------

var selectedGen = document.getElementById('generacion');

selectedGen.addEventListener('change', genDashboard);

function genDashboard() {
  var city = selectedGen.value;
  var year = selectedGen.options[selectedGen.selectedIndex].dataset.year;
  var totalStudents = data[city][year]['students'].length;
  var arrayStudents = data[city][year]['students'];

  // ----------------> Alumnas Dadas de Baja<----------------
  var dropout = 0;
    for (var i = 0; i < arrayStudents.length; i++) {
      if (arrayStudents[i].active === false) {
        dropout++;
      }
    }
  // --------> Porcentaje de estudiantes que desertaron<------------
  var dropoutPercent = ((dropout/totalStudents)*100).toFixed(1) +"%";

  // ---------------->#Alumnas arriba del 70% <----------------
  var studentMeetTarget = 0;
  var studentMeetTargetHse = 0;
  var studentMeetTargetTech = 0;

    for (var i = 0; i < totalStudents; i++) {
        var scoreTech = 0; //se actualiza despues de revisar sprints de cada alumna
        var scoreHSE = 0;

          for (var j = 0; j < arrayStudents[i]['sprints'].length; j++) { //iterar sobre los sprints de cada estudiante
            scoreTech += arrayStudents[i]['sprints'][j]['score']['tech'];//sumar los resultados de todas las estudiantes de tecnico
            scoreHSE += arrayStudents[i]['sprints'][j]['score']['hse'];//sumar los resultados de todas las estudiantes de hse
          }


          var averageTech = scoreTech / arrayStudents[i]['sprints'].length;
          var averageHSE = scoreHSE / arrayStudents[i]['sprints'].length;

          if(averageTech >= 1260 && averageHSE >= 840) { //Tenico: 1,800 HSE:1,200
            studentMeetTarget++;
            studentMeetTargetHse++;
            studentMeetTargetTech++;
          }else if(averageTech >= 1260) {
            studentMeetTargetTech++;
          }else if(averageHSE >= 840) {
            studentMeetTargetHse++;
          }
  }

// ---------------->%Alumnas arriba del 70% <----------------
var studentMeetTargetPT =((studentMeetTarget/totalStudents)*100).toFixed(1) +"%";
var studentMeetTargetHsePT =((studentMeetTargetHse/totalStudents)*100).toFixed(1) +"%";
var studentMeetTargetTechPT =((studentMeetTargetTech/totalStudents)*100).toFixed(1) +"%";

// ---------------->NPS <----------------

var sprintRatings = data[city][year]['ratings'];
var promoters =0;
var passives=0;
var detractors=0;



for (i = 0; i < sprintRatings.length; i++) {
      promoters += sprintRatings[i]['nps']['promoters']; //esto da el numero de promoters
      passives += sprintRatings[i]['nps']['passive'] //esto da el numero de passives
      detractors += sprintRatings[i]['nps']['detractors']; //esto da el numero de detractors
}

var totalAnswers=(promoters+detractors+passives);

promotersPercent = ((promoters/totalAnswers)*100);
passivesPercent =((passives/totalAnswers)*100);
detractorsPercent =((detractors/totalAnswers)*100);


var nps= (promotersPercent - detractorsPercent).toFixed(1) + '%';

// ----------------> STUDENT SATISFACTION <----------------
    var noCumple= 0;
    var cumple = 0;
    var supera = 0;

    for (i = 0; i < sprintRatings.length;i++) {
      noCumple += sprintRatings[i]['student']['no-cumple'];
      cumple += sprintRatings[i]['student']['cumple'];
      supera += sprintRatings[i]['student']['supera'];
    }

    var satifactionResponses= (noCumple+cumple+supera);
    var satifactionPercent= (((cumple+supera)/satifactionResponses)*100).toFixed(1) +"%";

// ---------------->#Puntos Promedio por Sprint <----------------
  var techPoints = 0;
  var hsePoints= 0;

  for (var i = 0; i < totalStudents; i++) {
          for (var j = 0; j < arrayStudents[i]['sprints'].length; j++) { //iterar sobre los sprints de cada estudiante
            techPoints += arrayStudents[i]['sprints'][j]['score']['tech'];//sumar los resultados de todas las estudiantes de tecnico
            hsePoints += arrayStudents[i]['sprints'][j]['score']['hse'];//sumar los resultados de todas las estudiantes de hse
          }
  }
  var totalPointsAvg = ((techPoints+hsePoints)/totalStudents).toFixed(0);
  var techPointsAvg = (techPoints / totalStudents).toFixed(0);;
  var hsePointsAvg = (hsePoints / totalStudents).toFixed(0);;

  // --------> Meter datos a sus cajas de Kpis<------------

  // #Alumnas inscritas a su contenedor
    var enrolledStudents = document.getElementById('enrolled-students');
    enrolledStudents.textContent = totalStudents;

  // #Alumnas Dadas de Baja a su contenedor
    var downStudents = document.getElementById('down-students');
    downStudents.textContent = dropout;

  // %Porcentaje de Desercion a su contenedor
    var downStudentsPercent = document.getElementById('down-students-percent');
    downStudentsPercent.textContent = dropoutPercent;

  // #Alumnas arriba del 70
    var  studentsAboveTotal = document.getElementById("students-above70-total");
    studentsAboveTotal.textContent = studentMeetTarget;

  // #Alumnas arriba del 70 - hse
    var  studentsAboveHse= document.getElementById("students-above70-hse");
    studentsAboveHse.textContent = studentMeetTargetHse;

  // #Alumnas arriba del 70 - tech
    var  studentsAboveTech=document.getElementById("students-above70-tech");
    studentsAboveTech.textContent = studentMeetTargetTech;

  // %Alumnas arriba del 70
    var  studentsAboveTotalP= document.getElementById("students-above70-total-p");
    studentsAboveTotalP.textContent = studentMeetTargetPT;

  // %Alumnas arriba del 70
    var  studentsAboveHseP= document.getElementById("students-above70-hse-p");
    studentsAboveHseP.textContent = studentMeetTargetHsePT;

  // %Alumnas arriba del 70
    var  studentsAboveTecP= document.getElementById("students-above70-tech-p");
    studentsAboveTecP.textContent =  studentMeetTargetTechPT;

  // NPS
    var  npsContainer= document.getElementById("nps-container");
    npsContainer.textContent =  nps;

  // Porcentaje de Satisfaccion con el curso
    var  satisfactionContainer= document.getElementById("satisfaction-container");
    satisfactionContainer.textContent =  satifactionPercent;

  // Puntos Promedio (Total)
    var  totalPointsContainer= document.getElementById("total-points-avg");
    totalPointsContainer.textContent =  totalPointsAvg;

  // Puntos Promedio (HSE)
    var  hsePointsContainer= document.getElementById("hse-points-avg");
    hsePointsContainer.textContent =  hsePointsAvg;

  // Puntos Promedio (TECH)
    var  techPointsContainer= document.getElementById("tech-points-avg");
    techPointsContainer.textContent =  techPointsAvg;




// --------------------------------> Graficas<-// ----------------------------------->

  // Grafica de Pastel
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Estado', 'Alumnas'],
          ['Inscritas', totalStudents ],
          ['Dadas de Baja', dropout],
          ['Graduadas', studentMeetTarget]
        ]);

        var options = {
          title: 'Total de Alumnas',
          'is3D':true,
          'width':500,
        'height':400,
        'pieSliceText':'percentage',
        chartArea:{left:50,top:30,width:'60%',height:'75%'},
        colors:['red','#004411','yellow'],
        legend:{textStyle: {color: 'black', fontSize: 12}}

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart-total-alumnas'));

        chart.draw(data, options);
      }

}
//grafica de barras


/*html
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <button id="change-chart">Change to Classic</button>
        <br><br>
        <div id="chart_div" style="width: 800px; height: 500px;"></div>
  js

google.charts.load('current', {'packages':['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {

        var button = document.getElementById('change-chart');
        var chartDiv = document.getElementById('chart_div');

        var data = google.visualization.arrayToDataTable([
          ['Sprint', 'HSE', 'TECH',"TOTAL"],
          ['Sprint 1', 8000, 23.3, 50],
          ['Sprint 2', 24000, 4.5,60],
          ['Sprint 3', 30000, 14.3,70],

        ]);

        var materialOptions = {
          width: 900,
          chart: {
            title: 'Nearby galaxies',
            subtitle: 'distance on the left, brightness on the right'
          },
          series: {
            0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
            1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
          },
          axes: {
            y: {
              distance: {label: 'parsecs'}, // Left y-axis.
              brightness: {side: 'right', label: 'apparent magnitude'} // Right y-axis.
            }
          }
        };

        var classicOptions = {
          width: 900,
          series: {
            0: {targetAxisIndex: 0},
            1: {targetAxisIndex: 1}
          },
          title: 'Nearby galaxies - distance on the left, brightness on the right',
          vAxes: {
            // Adds titles to each axis.
            0: {title: 'parsecs'},
            1: {title: 'apparent magnitude'}
          }
        };

        function drawMaterialChart() {
          var materialChart = new google.charts.Bar(chartDiv);
          materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
          button.innerText = 'Change to Classic';
          button.onclick = drawClassicChart;
        }

        function drawClassicChart() {
          var classicChart = new google.visualization.ColumnChart(chartDiv);
          classicChart.draw(data, classicOptions);
          button.innerText = 'Change to Material';
          button.onclick = drawMaterialChart;
        }

*/
