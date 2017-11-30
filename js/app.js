window.addEventListener('load', function() {
  /* funcion para mostrar las alumas por sede-generacion*/
  var selection = document.getElementById('selection');
  var containerStudents = document.getElementById('total-students');
  var totalNps = document.getElementById('total-nps');
  selection.addEventListener('change', showGenerations);
  function showGenerations(event) {
    /* seleccionando cada option de lista despegable*/
    var options = selection.value;
    /* se convierte a un array para obtener la data de sede y generaciones*/
    var array = options.split('-');/* [lima,2017,2]*/
    console.log(array);
    /* obteniendo la generacion*/
    var array1 = array.splice(1, 2);
    console.log(array1);
    /* uniendo los dos elementos de la generacion*/
    var generation = array1[0] + '-' + array1[1];
    /* obteniendo la sede*/
    var site = array.splice(0, 1);
    console.log(site);
    /* obteniendo datos por sede-generacion*/
    var siteGeneration = data[site][generation];
    console.log(siteGeneration);
    /* analizando el total de estudiantes*/
    var totalStudents = siteGeneration.students.length;
    containerStudents.innerHTML = '# de studiantes inscritos' + '</br>' + totalStudents;
    /* analizando el NPS*/
    var result = 0;
    /* recorriendo el elemento ratings para obtner el nps*/
    for (i = 0; i < siteGeneration.ratings.length;i++) {
      var promoters = siteGeneration.ratings[i].nps.promoters;
      var passive = siteGeneration.ratings[i].nps.passive;
      var detractors = siteGeneration.ratings[i].nps.detractors;
      result = result + (promoters - detractors);
      /* console.log(result)*/
      var percentage = ((result / siteGeneration.ratings.length) * 100) / 100 ;
      /* considerando solo dos decimales */
      percentage.toFixed(2) + ' % ';
      /* console.log(percentage);*/
    }
    /* incorporando el porcentaje del nps*/
    totalNps.innerHTML = '% NPS' + '<br>' + percentage ;
    /*analizando el */
  }

  /* menu derecho*/
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
  bars.addEventListener('click', showMenu);
  console.log(data);
});
