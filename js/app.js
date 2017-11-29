/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);
window.addEventListener('load', function() {
  var sede = '';
  var generacion = '';
  var places = document.getElementById('place');
  var generations = document.getElementById('generation');
  places.addEventListener('change', function(event) {
    var listGenerations = {AQP: ['2016-2', '2017-1'],
      CDMX: ['2017-1', ' 2017-2 '],
      LIM: ['2016-2', '2017-1', '2017-2'],
      SCL: ['2016-2', '2017-1', '2017-2']};
    
    var placeSelect = places.value;
    sede = placeSelect;
    // Limpiamos el select generation
    generations.innerHTML = '<option value="">Seleccione Generación</option>';
    if (placeSelect !== '') {
      // Seleccionamos Sede y se ordena
      placeSelect = listGenerations[placeSelect];
      placeSelect.sort();
      placeSelect.forEach(function(generation) {
        var opt = document.createElement('option');
        opt.value = generation;
        opt.text = generation;
        generations.add(opt);
      });
    }
    // fin de 1er lista
    generations.addEventListener('change', function() {
      generacion = generations.value;
    });
  });


  /* Fin de los Selects */
  var btndash = document.getElementById('btndash');
  btndash.addEventListener('click', function() {
    /* Enveroment Static*/
    console.log(sede);
    console.log(generacion);
    console.log('-------------');
    var cantidad = data[sede][generacion].students.length;
    console.log(cantidad);
    var acum = 0;
    var acumtrue = 0;
    for (var i = 0; i < cantidad;i++) {
    // console.log(data[sede][generacion].students[i].active);
      if (data[sede][generacion].students[i].active == false) {
        console.log(data[sede][generacion].students[i]);
        acum++;
}
      else {
        console.log(data[sede][generacion].students[i]);
        acumtrue++;
}
    }
    console.log(acum);
    console.log(acumtrue);
    var dropout = (acum / cantidad) * 100;
    var dropoutPercentaje = (Math.round(dropout) + '%');
    // inserta data de cantidad a los elementos
    var spanCount = document.getElementById('count-overview');
    var textCount = document.createTextNode(cantidad);
    spanCount.appendChild(textCount);
    // inserta data de desercion a los elementos
    var spanPercentaje = document.getElementById('percentaje-overview');
    var textPercentaje = document.createTextNode(dropoutPercentaje);
    spanPercentaje.appendChild(textPercentaje);
  });
   
});

