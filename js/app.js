window.addEventListener('load', function() {
  /* funcion para mostrar las alumas por sede-generacion*/
  var selection = document.getElementById('selection');
  var containerStudents = document.getElementById('total-students');
  var totalNps = document.getElementById('total-nps');
  var satisfaction = document.getElementById('satisfaction');
  selection.addEventListener('change', showGenerations);
  function showGenerations(event) {
    /* seleccionando cada option de lista despegable*/
    var options = selection.value;
    /* se convierte a un array para obtener la data de sede y generaciones*/
    var array = options.split('-');/* [lima,2017,2]*/
    /* console.log(array);*/
    /* obteniendo la generacion*/
    var array1 = array.splice(1, 2);
    console.log(array1);
    /* uniendo los dos elementos de la generacion*/
    var generation = array1[0] + '-' + array1[1];
    /* obteniendo la sede*/
    var site = array.splice(0, 1);
    /* console.log(site);*/
    /* obteniendo datos por sede-generacion*/
    var siteGeneration = data[site][generation];
    /* console.log(siteGeneration);*/
    /* analizando el total de estudiantes*/
    var totalStudents = siteGeneration.students.length;
    containerStudents.innerHTML = '# de studiantes inscritos' + '</br>' + totalStudents;
    /* analizando el NPS*/
    var nps = 0;
    /* recorriendo el elemento ratings para obtner el nps*/
    for (i = 0; i < siteGeneration.ratings.length;i++) {
      var promoters = siteGeneration.ratings[i].nps.promoters;
      var percentagePromotrs = (promoters / siteGeneration.ratings.length) * 100 / 100;
      var passive = siteGeneration.ratings[i].nps.passive;
      var percentagePassive = (passive / siteGeneration.ratings.length) * 100 / 100;
      var detractors = siteGeneration.ratings[i].nps.detractors;
      var percentageDetractors = (detractors / siteGeneration.ratings.length) * 100 / 100;
      nps = nps + (promoters - detractors);
      /* console.log(result)*/
      /* resultado del porcentaje del nps*/
      var percentageNps = Math.round(((nps / siteGeneration.ratings.length) * 100) / 100) + ' \n' + '%';
    }
    /* incorporando el porcentaje del nps*/
    totalNps.innerHTML = '% NPS' + '<br>' + percentageNps ;
    /* analizando el nivel de satifaccion de la estudiantes*/
    /* resultado de satisgacción*/
    var satisfactionResult = 0;
    /* recorriendo el elemento ratings*/
    for (var j = 0; j < siteGeneration.ratings.length; j++) {
      /* analizando el elemento ratings-student-cumple*/
      var satisfactionCumple = siteGeneration.ratings[j]['student']['cumple'];
      /* console.log(satisfactionCumple);*/
      /* analizando el elemento ratings-student-supera*/
      var satisfactionSupera = siteGeneration.ratings[j]['student']['supera'];
      satisfactionResult = satisfactionResult + (satisfactionCumple + satisfactionSupera);
    }
    /* porcentaje de satisfaciión*/
    var percentageSatisfaction = Math.round(satisfactionResult / siteGeneration.ratings.length) * 100 / 100 + '%';
    /* percentageSatisfaction.toFixed(1);*/
    /* console.log(percentageSatisfaction);*/
    satisfaction.innerHTML = ' % de estudiantes satisfechos' + '<br>' + percentageSatisfaction;
  }

  /* menu derecho en el icono barras*/
  var bars = document.getElementById('bars');
  bars.addEventListener('click', showMenu);
  function showMenu(event) {
    var options = document.getElementById('options-menu');
    if (options.classList.contains('disabled-menu')) {
      options.classList.remove('disabled-menu');
      options.classList.add('enabled-menu');
    } else {
      options.classList.remove('enabled-menu');
      options.classList.add('disabled-menu');
    }
  }


/* Añadiendo 2da pregunta*/

var containerFilter2 = document.getElementById('containerFilter2');
var containerFilter3 = document.getElementById('containerFilter3');
function showPercent(event) {
    var contpercent = document.createElement('div');
    contpercent.classList = 'filter2';
    var percentxt = document.createElement('p');
    percentxt.textContent = 'DROPOUT';
    var percent = document.createElement('a');
    var countPerct = 0;
    var active1 = data.AQP["2016-2"]["students"];
    if (selection.value === "AQP-2016-2") {
        for (var i = 0; i < active1.length; i++) {
            if (active1[i]['active'] === false) {
                countPerct++;
                percent.textContent = ((countPerct * 100) / (active1.length)).toFixed(2) + '% ';
                contpercent.appendChild(percent);
                contpercent.appendChild(percentxt);
                containerFilter2.appendChild(contpercent);
                countPerct = '';
            }
        }
    }
    var active2 = data.AQP["2017-1"]["students"];
    if (selection.value === "AQP-2017-1") {
        for (var i = 0; i < active2.length; i++) {
            if (active2[i]['active'] === false) {
                countPerct++;
                percent.textContent = ((countPerct * 100) / (active1.length)).toFixed(2) + '% ';
                contpercent.appendChild(percent);
                contpercent.appendChild(percentxt);
                containerFilter2.appendChild(contpercent);
                countPerct = '';

            }
        }
    }
    var countSprints = 0;
    var contPoint = document.createElement('div');
    contPoint.classList = 'filter2';
    var contPoints = document.createElement('a');
    var contPointTxt = document.createElement('p');
    contPointTxt.textContent = 'STUDENTS THAT MEER THE TARGET';
    contPointTxt.classList = 'filtertxt';
    if (selection.value === "AQP-2016-2") {
        for (var i = 0; i < active1.length; i++) {
            for (var j = 0; j < active1[i]['sprints'].length; j++) {
                if (active1[i]['sprints'][j]['score']['tech'] >= 1260 && active1[i]['sprints'][j]['score']['hse'] >= 840) {
                    countSprints++;
                    contPoints.textContent = countSprints;
                    contPoint.appendChild(contPointTxt);
                    contPoint.appendChild(contPoints)
                    containerFilter3.appendChild(contPoint);

                }
            }
        }
    }
}
});
