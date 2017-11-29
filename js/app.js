//Variables
var sede = 'LIM';
var promo = '2016-2';
//var options = document.getElementsByTagName('option');
var inputsSede = document.getElementsByClassName('sede');
var inputsPromo = document.getElementsByClassName('promo');


//Sedes 
//AQP, CDMX, LIM, SCL
function selectSede () {
  var firstPromAqp = document.getElementById('form-aqp').children[0].firstChild;
  var firstPromCdmx = document.getElementById('form-cdmx').children[0].firstChild;
  var firstPromScl = document.getElementById('form-scl').children[0].firstChild;
  var firstPromLim = document.getElementById('form-lim').children[0].firstChild;
  for (var i = 0; i < inputsSede.length; i++) {
    inputsSede[i].addEventListener('click',function () {
      sede = this.value;
      if (sede === 'AQP') {
        firstPromAqp.checked = true;
        promo = firstPromAqp.value;
        firstPromLim.checked = false;
        firstPromScl.checked = false;
        firstPromCdmx.checked = false;
      } else if (sede === 'CDMX') {
        firstPromCdmx.checked = true;
        promo = firstPromCdmx.value;
        firstPromLim.checked = false;
        firstPromScl.checked = false;
        firstPromAqp.checked = false;
      } else if (sede === 'SCL') {
        firstPromScl.checked = true;
        promo = firstPromScl.value;
        firstPromLim.checked = false;
        firstPromCdmx.checked = false;
        firstPromAqp.checked = false;
      } else if (sede === 'LIM') {
        firstPromLim.checked = true;
        promo = firstPromLim.value;
        firstPromCdmx.checked = false;
        firstPromScl.checked = false;
        firstPromAqp.checked = false;
      } 
      drawSeriesChart();
    })
  }
} 
//Promos
//2016-2 2017-1 2017-2
function selectPromo() {
  for (var i = 0; i < inputsPromo.length; i++) {
    inputsPromo[i].addEventListener('click',function () {
      var current = this;
      promo = this.value;
      for (var i = 0; i < inputsPromo.length; i++) {
        if (current != inputsPromo[i]) {
          inputsPromo[i].checked = false;
        }
      }
      drawSeriesChart();
    })
  }
}
selectSede();
selectPromo();


//Enrollment
function enrollment(act,inac) {
  active = 0;
  inactive = 0;
  for (var i = 0; i < dataStudents[sede][promo].students.length; i++) {
    if (dataStudents[sede][promo].students[i].active === true) {
      active++;
    } else if (dataStudents[sede][promo].students[i].active === false) {
      inactive++;
    }
  }
  return enrollment[act] = {
    act: active,
    inac: inactive,
  }
}

var studentsTotal = enrollment().act+enrollment().inac;

//Achieveement
function achievement (sp1b, sp1l, sp2b, sp2l, sp3b, sp3l, sp4b, sp4l) {
  sprint1big = 0;
  sprint1low = 0;
  sprint2big = 0;
  sprint2low = 0;
  sprint3big = 0;
  sprint3low = 0;
  sprint4big = 0;
  sprint4low = 0;
  for (var i = 0; i < dataStudents[sede][promo].students.length; i++) {
    for (var j = 0; j < dataStudents[sede][promo].students[i].sprints.length; j++) {
      var techNote = dataStudents[sede][promo].students[i].sprints[j].score.tech;
      var hseNote = dataStudents[sede][promo].students[i].sprints[j].score.hse;
      if (j === 0) {
        if (techNote >= 1260 && hseNote >= 840) {
          sprint1big ++;
        } else {
          sprint1low ++
        }
      } else if (j === 1) {
        if (techNote >= 1260 && hseNote >= 840) {
          sprint2big ++;
        } else {
          sprint2low ++;
        }
      } else if (j === 2) {
        if (techNote >= 1260 && hseNote >= 840) {
          sprint3big ++;
        } else {
          sprint3low ++;
        }
      } else if (j === 3) {
        if (techNote >= 1260 && hseNote >= 840) {
          sprint4big ++;
        } else {
          sprint4low ++;
        }
      }
    }
  }
  return achievement[sp1b] = {
    sp1b: sprint1big,
    sp1l: sprint1low,
    sp2b: sprint2big,
    sp2l: sprint2low,
    sp3b: sprint3big,
    sp3l: sprint3low,
    sp4b: sprint4big,
    sp4l: sprint4low,
  }
}

//Promoter Score

function promoter () {

}


//Function para saber las notas Tech de cada sprint
function sprintsNoteTech (sp1b, sp1l, sp2b, sp2l, sp3b, sp3l, sp4b, sp4l) {
  var sprint1big = 0;
  var sprint1low = 0;
  var sprint2big = 0;
  var sprint2low = 0;
  var sprint3big = 0;
  var sprint3low = 0;
  var sprint4big = 0;
  var sprint4low = 0;
  for (var i = 0; i < dataStudents[sede][promo].students.length; i++){
    for (var j = 0; j < dataStudents[sede][promo].students[i].sprints.length; j++){
      var techNote = dataStudents[sede][promo].students[i].sprints[j].score.tech;
      if (j === 0) {
        if (techNote >= 1260) {
          sprint1big ++;
        } else {
          sprint1low ++
        }
      } else if (j === 1) {
        if (techNote >= 1260) {
          sprint2big ++;
        } else {
          sprint2low ++;
        }
      } else if (j === 2) {
        if (techNote >= 1260) {
          sprint3big ++;
        } else {
          sprint3low ++;
        }
      } else if (j === 3) {
        if (techNote >= 1260) {
          sprint4big ++;
        } else {
          sprint4low ++;
        }
      }
    }
  }
  return sprintsNoteTech[sp1b] = {
    sp1b: sprint1big,
    sp1l: sprint1low,
    sp2b: sprint2big,
    sp2l: sprint2low,
    sp3b: sprint3big,
    sp3l: sprint3low,
    sp4b: sprint4big,
    sp4l: sprint4low,
  }
}




//Function para saber las notas Hse de cada sprint
function sprintsNoteHse(sp1b, sp1l, sp2b, sp2l, sp3b, sp3l, sp4b, sp4l) {
  var sprint1big = 0;
  var sprint1low = 0;
  var sprint2big = 0;
  var sprint2low = 0;
  var sprint3big = 0;
  var sprint3low = 0;
  var sprint4big = 0;
  var sprint4low = 0;
  for (var i = 0; i< dataStudents[sede][promo].students.length; i++){
    for (var j = 0; j<dataStudents[sede][promo].students[i].sprints.length; j++){
      var hseNote = dataStudents[sede][promo].students[i].sprints[j].score.hse;
      if (j === 0) {
        if (hseNote >= 840) {
          sprint1big ++;
        } else {
          sprint1low ++
        }
      } else if (j === 1) {
        if (hseNote >= 840) {
          sprint2big ++;
        } else {
          sprint2low ++;
        }
      } else if (j === 2) {
        if (hseNote >= 840) {
          sprint3big ++;
        } else {
          sprint3low ++;
        }
      } else if (j === 3) {
        if (hseNote >= 840) {
          sprint4big ++;
        } else {
          sprint4low ++;
        }
      }
    }
  }
  return sprintsNoteHse[sp1b] = {
    sp1b: sprint1big,
    sp1l: sprint1low,
    sp2b: sprint2big,
    sp2l: sprint2low,
    sp3b: sprint3big,
    sp3l: sprint3low,
    sp4b: sprint4big,
    sp4l: sprint4low,
  }
}



//Barras

google.charts.load('current', {
  callback: drawSeriesChart,
  packages: ['corechart']
});

function drawSeriesChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Month');
  data.addColumn('number', 'Category A');
  data.addColumn('number', 'Category B');
  data.addRows([
    ['Activas', enrollment().act, enrollment().act+enrollment().inac],
    ['Deserción', enrollment().inac, enrollment().act+enrollment().inac]
  ]);

  var formatPercent = new google.visualization.NumberFormat({
    pattern: '#,##0.0%'
  });
  
  var view = new google.visualization.DataView(data);


  //var ColumnChart para columnas y BarChart para filas
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(view, {
    isStacked: 'percent'
  });
}

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(dataStudents);
