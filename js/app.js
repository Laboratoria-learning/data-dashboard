/*
 * Funcionalidad de tu producto
 */
/* ****************************************************************************************************************/
window.addEventListener('load', function() {
  var view = document.getElementById('overview'),
    students = document.getElementById('students'),
    paginaview = document.getElementById('paginaView'),
    paginaStudents = document.getElementById('paginaStudents'),
    total = document.getElementById('total'),
    porcentaje = document.getElementById('porcentaje'),
    meta = document.getElementById('meta'),
    boxTeacher = document.getElementById('box-teacher'),
    boxJedi = document.getElementById('box-jedi'),
    filtro = document.getElementById('filtro');


  /* ***************************************************************llamando por sede y por promocion**********************************************************************/
  filtro.addEventListener('change', function(event) {
    switch (event.target.value) {
    case '0': sedePromo('LIM', '2016-2');
      break;
    case '1':sedePromo('LIM', '2017-1');
      break;
    case '2':sedePromo('LIM', '2017-2');
      break;
    case '3':sedePromo('AQP', '2016-2');
      break;
    case '4':sedePromo('AQP', '2017-1');
      break;
    case '5':sedePromo('SCL', '2016-2');
      break;
    case '6':sedePromo('SCL', '2017-1');
      break;
    case '7':sedePromo('SCL', '2017-2');
      break;
    case '8':sedePromo('CDMX', '2017-1');
      break;
    case '9':sedePromo('CDMX', '2017-2');
      break;
    }
    function sedePromo(sede, promo) {
      var arr = data[sede][promo]['students'];
      var cant = 0;
      var nocant = 0;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].active === true) {
          cant++;
        } else {
          nocant++;
        }
      }
      var calculandoPorcentaje = parseInt((nocant / arr.length) * 100);
      total.textContent = '# activas' + cant;
      porcentaje.textContent = '% desercion' + calculandoPorcentaje + '%';
      /* Cantida de alumnas que superan el objetivo*******************************************************************/
      var arrRatings = data[sede][promo]['ratings'];
      var sumaRatings = 0;
      for (var i = 0; i < arrRatings.length; i++) {
        var ratings = data[sede][promo]['ratings'][i]['student']['supera'];
        sumaRatings = sumaRatings + ratings;
        var promedio = parseInt(sumaRatings / arrRatings.length);
      }
      meta.textContent = 'promedio' + promedio;
    }
  });

  /* **************************************************************Cantida de alumnas por sede y promocion*****************************************************************/
  var arr = data['CDMX']['2017-1']['students'];
  console.log(arr);
  var cant = 0;
  var nocant = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].active === true) {
      cant++;
    } else {
      nocant++;
    }
  }
  console.log(cant);
  console.log(nocant);
  var calculandoPorcentaje = parseInt((nocant / 15) * 100);
  total.textContent = '# activas' + cant;
  porcentaje.textContent = '% desercion' + calculandoPorcentaje + '%';
  /* Cantida de alumnas que superan el objetivo*******************************************************************/
  var arrRatings = data['AQP']['2016-2']['students'];
  var sumaScore = 0;
  for (var i = 0; i < arrRatings.length; i++) {
    var suma = 0;
    for (var j = 0; j < 4; j++) {
      var tech = data['AQP']['2016-2']['students'][i]['sprints'][j]['score']['tech'];
      var hse = data['AQP']['2016-2']['students'][i]['sprints'][j]['score']['hse'];
      if (tech >= 1260 && hse >= 840) {
        suma++;
      } else {
        suma = 0;
      }
    }
    if (suma === 4) {
      sumaScore++;
    } else {
      sumaScore = sumaScore;
    }
  }
  console.log(sumaScore);
  meta.textContent = 'meta' + sumaScore;
  /* cantida de nps*********************************************************************************/
  var arrNps = data['AQP']['2016-2']['ratings'][0]['nps']['passive'];
  for (var i = 0; i < arrRatings.length; i++) {
  }
  /* ******************************************************************************************************************/
  var promedioTeacher = 0;
  for (var i = 0; i < arrRatings.length; i++) {
    var teacher = data['AQP']['2016-2']['ratings'][i]['teacher'];
    promedioTeacher = (promedioTeacher + teacher) / 3;
  }
  boxTeacher.textContent = 'promedio profesores' + promedioTeacher.toFixed(2);
  /* ******************************************************************************************************************/
  var promedioJedi = 0;
  for (var i = 0; i < arrRatings.length; i++) {
    var jedi = data['AQP']['2016-2']['ratings'][i]['jedi'];
    promedioJedi = (promedioJedi + jedi) / 3;
  }
  boxJedi.textContent = 'promedio jedi' + promedioJedi.toFixed(2);

  /* evento click para la navegacion facetada de students para que muestre cuando se haga click y se borre la vista de overview*/
  students.addEventListener('click', function() {
    paginaView.classList.toggle('enabled');
    paginaView.classList.toggle('disabled');
    paginaStudents.classList.toggle('disabled');
    paginaStudents.classList.toggle('enabled');
  });
  /* evento click para la navegacion facetada overview para que se muestre******************************************/
  view.addEventListener('click', function() {
    paginaView.classList.remove('disabled');
    paginaView.classList.add('enabled');
    paginaStudents.classList.remove('enabled');
    paginaStudents.classList.add('disabled');
  });
});
/* ***********************************************grafico de barras*****************************************************************/
google.charts.load('current', {'packages': ['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ['sprint', 'Puntaje'],
    ['S1', 44],
    ['S2', 40],
    ['S3', 31],
    ['S4', 12],
  ]);

  var options = {
    width: 250,
    height: 200,
    legend: { position: 'none' },
    axes: {
      x: {
        0: { side: 'botoom'} // Top x-axis.
      }
    },
    bar: { groupWidth: '60%'}
  };

  var chart = new google.charts.Bar(document.getElementById('top_x_div'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};
