/* Iniciamos extrayendo los datos de las sedes */
// debugger;

window.addEventListener('load', function() {
  var containerSedes = document.getElementById('container-sedes');
  containerSedes.addEventListener('click', function() {
    var sedes = document.getElementById('container-generations');
    for (var i = 0; i < Object.keys(data).length; i++) {
      var containerList = document.createElement('ul');
      var list = document.createElement('li');
      list.className = 'list';
      var text = document.createTextNode('local ' + Object.keys(data)[i]);

      list.appendChild(text);
      containerList.appendChild(list);
      sedes.appendChild(containerList);

      for (var a = 0; a < Object.keys(data[Object.keys(data)[i]]).length; a++) {
        var containerListGenerations = document.createElement('ul');
        var listGenerations = document.createElement('li');
        var textGenerations = document.createTextNode('generacion ' + Object.keys(data[Object.keys(data)[i]])[a]);

        listGenerations.appendChild(textGenerations);
        containerListGenerations.appendChild(listGenerations);
        list.appendChild(containerListGenerations);
        // console.log(data[Object.keys(data)[i]]);  
      }
    }  
  });
}); 

