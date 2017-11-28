/* Iniciamos extrayendo los datos de las sedes */

window.addEventListener('load', function() {
  var containerSedes = document.getElementById('container-sedes');
  containerSedes.addEventListener('click', function() {
    var containerGenerations = document.getElementsByClassName('container-generations')[0];
    if (containerGenerations.classList.contains('hide')) {
      containerGenerations.classList.remove('hide');
      containerGenerations.classList.add('show');
    } else {
      containerGenerations.classList.add('show');
      
      for (var i = 0; i < Object.keys(data).length; i++) {
        var containerList = document.createElement('ul');
        var list = document.createElement('li');
        var text = document.createTextNode('local ' + Object.keys(data)[i]);
        console.log(text);
        list.appendChild(text);
        containerList.appendChild(list);
        containerGenerations.appendChild(containerList);
        // console.log(data[Object.keys(data)[i]]);  
      } 
    }  
  });
});
