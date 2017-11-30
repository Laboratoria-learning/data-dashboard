/* Iniciamos extrayendo los datos de las sedes */
// debugger;

window.addEventListener('load', function() {
  var containerSedes = document.getElementById('container-sedes');
  containerSedes.addEventListener('click', function() {
    var sedes = document.getElementById('container-generations');
    /* Creando la lista de las sedes */
                    
    var totalAlum = [];
    var sumTechHse = 0;
    var desertion = 0;
    var totalTech = [];
    var totalHse = [];
    var totalSum = [];
    var totalDesertion = [];

    for (var i = 0; i < Object.keys(data).length; i++) {
      var containerList = document.createElement('ul');
      containerList.className = 'container-list';
      var list = document.createElement('li');
      list.className = 'list';
      var text = document.createTextNode(Object.keys(data)[i]);
      list.appendChild(text);
      containerList.appendChild(list);
      sedes.appendChild(containerList);

      /* Creando la lista de las generaciones */
      for (var a = 0; a < Object.keys(data[Object.keys(data)[i]]).length; a++) {
        var containerListGenerations = document.createElement('ul');
        containerListGenerations.className = 'container-generations';
        var listGenerations = document.createElement('li');
        listGenerations.className = 'generations';
        var textGenerations = document.createTextNode(Object.keys(data[Object.keys(data)[i]])[a]);
        
        listGenerations.appendChild(textGenerations);
        containerListGenerations.appendChild(listGenerations);
        list.appendChild(containerListGenerations);

        /* Creando el total de alumnas, total de desercion y activas  */
        for (var b = 0; b < Object.values((Object.values(Object.values(data)[i]))[a])[0].length; b++) {
          var alum = (Object.values((Object.values(Object.values(data)[i]))[a])[0].length);
          totalAlum .push(alum);

          if (Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[2]) {
            for (var c = 0; c < Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3].length; c++) {
              var tech = Object.values(Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3][c])[1])[0];
              totalTech.push(tech);
    
              var hse = Object.values(Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3][c])[1])[1];
              totalHse.push(hse);
    
              var sumTechHse = totalTech[c] + totalHse[c];
              totalSum.push(sumTechHse);
            }
          } else {
            desertion = desertion + 1;
            totalDesertion.push(desertion);
          }
        }
      }
      var generationsList = document.getElementsByClassName('container-generations');
      var containerParagraph = document.getElementsByClassName('container-paragraph');
      for (var a = 0; a < generationsList.length; a++) {
        generationsList[a].addEventListener('click', function() {
          var numberStudent = document.createElement('p');
          numberStudent.className = 'number';
          
          for (var a = 0; a < generationsList.length; a++) {
            var textNumberStudent = document.createTextNode(totalAlum[a]); 
          } 
                                           
          numberStudent.appendChild(textNumberStudent);
          containerParagraph[0].appendChild(numberStudent);
    
          var numberDesertion = document.createElement('p');
          numberDesertion.className = 'number';

          for (var a = 0; a < totalDesertion.length; a++) {
            var numberDesertionStudent = document.createTextNode(totalDesertion[a]); 
          }
    
          numberDesertion.appendChild(numberDesertionStudent);
          containerParagraph[2].appendChild(numberDesertion);
    
          var numberApproved = document.createElement('p');
          numberApproved.className = 'number';

          for (var a = 0; a < generationsList.length; a++) {
            var numberApprovedStudent = document.createTextNode(totalSum[a]); 
          } 
        
          numberApproved.appendChild(numberApprovedStudent);
          containerParagraph[1].appendChild(numberApproved);
        });
      }
    }
    if (sedes.classList.contains('hide')) {
      sedes.classList.remove('hide');
      sedes.classList.add('show');
    } else {
      sedes.textContent = '';        
      sedes.classList.remove('show');
      sedes.classList.add('hide');
    }  
  }); 
});  
