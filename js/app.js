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

// graficas de generacion especifica
// grafica de pastel
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Estado', 'Alumnas'],
          ['Inscritas',     11],
          ['Dadas de Baja',      2],
          ['Graduadas',  2]
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
//grafica de barras 
/*google.charts.load('current', {'packages':['corechart', 'bar']});
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
var select = document.getElementById('promo-filter');
  select.addEventListener('change', promFilter);

  function promFilter() {
    
    var city = select.value;
	var generation = select.options[select.selectedIndex].dataset.year; 
	var totalStudents = data[city][generation]['students'].length;
	var arrayStudents = data[city][generation]['students'];
	//var ratings = data[city][generation]['ratings'];

	// ----------------> Alumnas Dadas de Baja<----------------
    var dropout = 0;
    for (var i = 0; i < arrayStudents.length; i++) {
      if (arrayStudents[i].active === false) {
        dropout++;
      }
    } 
    // Porcentaje de estudiantes que desertaron
    var dropoutPercent = ((dropout/totalStudents)*100).toFixed(1) +"%";

    // #Alumnas inscritas a su contenedor
    var enrolledStudents = document.getElementById('enrolled-students');
    //enrolledStudents.textContent = totalStudents;
    
    // #Alumnas Dadas de Baja a su contenedor
    var downStudents = document.getElementById('down-students');
    //downStudents.textContent = dropout;

    // %Porcentaje de Desercion a su contenedor
    var downStudentsPercent = document.getElementById('down-students-percent');
    //downStudentsPercent.textContent = dropoutPercent;

    // ----------------> Alumnas arriba del 70% <----------------
    var studentMeetTarget = 0;
    var studentMeetTargetHse = 0;
    var studentMeetTargetTech = 0;
    console.log(studentMeetTarget,studentMeetTargetTech,studentMeetTargetHse);


    for (var i = 0; i < totalStudents; i++) {
      var scoreTech = 0;
      var scoreHSE = 0;

	      for (var j = 0; j < arrayStudents[i]['sprints'].length; j++) { //iterar sobre los sprints de cada estudiante
	        scoreTech += arrayStudents[i]['sprints'][j]['score']['tech'];//sumar los resultados de todas las estudiantes
	        scoreHSE += arrayStudents[i]['sprints'][j]['score']['hse'];
	      }

	      var averageTech = scoreTech / arrayStudents[i]['sprints'].length;
	      var averageHSE = scoreHSE / arrayStudents[i]['sprints'].length;

	      if (averageTech >= 1260 && averageHSE >= 840) { //Tenico: 1,800 HSE:1,200
	        studentMeetTarget++;
	        studentMeetTargetHse++;
	        studentMeetTargetTech++;
	      }else if(averageTech>= 1260) {
	      	studentMeetTargetTech++;
	      }else if(averageHSE >= 840){
	      	studentMeetTargetHse++;
	      }
	    }
}




 	







