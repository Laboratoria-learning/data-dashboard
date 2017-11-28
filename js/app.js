/* Iniciamos extrayendo los datos de las sedes */

window.addEventListener('load', function() {
  var containerSedes = document.getElementById('container-sedes');
  containerSedes.addEventListener('click', function() {
    var sedes = document.getElementsByClassName('container-generations')[0];
    if (sedes.classList.contains('hide')) {
      sedes.classList.remove('hide');
      sedes.classList.add('show');
    } else {
      sedes.classList.add('show');
      
      for (var i = 0; i < Object.keys(data).length; i++) {
        var containerList = document.createElement('ul');
        var list = document.createElement('li');
        var text = document.createTextNode('local ' + Object.keys(data)[i]);

        list.appendChild(text);
        containerList.appendChild(list);
        sedes.appendChild(containerList);

        text.addEventListener('click', function() {
          var containerGenerations = document.getElementsByClassName('container-generations')[0];
          for (var i = 0; i < Object.keys(data).length; i++) {
            for (var a = 0; a < Object.keys(data[Object.keys(data)[i]]).length; a++) {
              var containerListGenerations = document.createElement('ul');
              var listGenerations = document.createElement('li');
              var textGenerations = document.createTextNode('generacion ' + Object.keys(data[Object.keys(data)[i]])[a]);

              listGenerations.appendChild(textGenerations);
              containerListGenerations.appendChild(listGenerations);
              containerGenerations.appendChild(containerListGenerations);
              // console.log(data[Object.keys(data)[i]]);  
            } 
          }
        }); 
      }
    }  
  });
});

