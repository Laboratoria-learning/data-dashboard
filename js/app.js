window.addEventListener('load', function() {
  var selection = document.getElementById('selection');
  var container = document.getElementById('container');
  selection.addEventListener('change', showsGeneration);
  var sedeArequipa = data.AQP;
  var count = 0;

  function showsGeneration(event) {
    /* sede arequipa*/
    if (selection.value === 'AQP-2016-2') {
      var generationAqp1 = data.AQP['2016-2']['students'];
      for (var i = 0; i < generationAqp1.length; i++) {
        if (generationAqp1[i].active === true) {
          count++;
          container.innerHTML = count;
        }
      }
    }
    if (selection.value === 'AQP-2017-1') {
      var generationAqp2 = data.AQP['2017-1']['students'];
      for (var i = 0; i < generationAqp2.length; i++) {
        if (generationAqp2[i].active === true) {
          count++;
          container.innerHTML = count;
        }
      }
    }
    /* por cada generacion de mexico*/
    if (selection.value === 'CDMX-2017-1') {
      var generationCdmx1 = data.CDMX['2017-1']['students'];
      for (var i = 0; i < generationCdmx1.length; i++) {
        if (generationCdmx1[i].active === true) {
          count++;
          container.innerHTML = count;
        }
      }
    }
    if (selection.value === 'CDMX-2017-2') {
      var generationCdmx2 = data.CDMX['2017-2']['students'];
      for (var i = 0; i < generationCdmx2.length; i++) {
        if (generationCdmx2[i].active === true) {
          count++;
          container.innerHTML = count;
        }
      }
    }
    if (selection.value === 'LIM-2016-2') {
      var generationLim1 = data.LIM['2016-2']['students'];
      for (var i = 0; i < generationLim1.length; i++) {
        if (generationLim1[i].active === true) {
          count++;
          container.innerHTML = count;
        }
      }
    }
    if (selection.value === 'LIM-2017-1') {
      var generationLim2 = data.LIM['2017-1']['students'];
      for (var i = 0; i < generationLim2.length; i++) {
        if (generationLim2[i].active === true) {
          count++;
          container.innerHTML = count;
        }
      }
    }
  }
 });


// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
