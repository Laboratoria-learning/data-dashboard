/* Iniciamos extrayendo los datos de las sedes */
debugger;

window.addEventListener('load', function() {
  var containerSedes = document.getElementById('container-sedes');
  containerSedes.addEventListener('click', function() {
    var sedes = document.getElementById('container-generations');

    /* Creando la lista de las sedes */
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
        listGenerations.className = 'list-generations';
        var textGenerations = document.createTextNode(Object.keys(data[Object.keys(data)[i]])[a]);

        
        listGenerations.appendChild(textGenerations);
        containerListGenerations.appendChild(listGenerations);
        list.appendChild(containerListGenerations);

        /* Este evento trae la data del total de alumnas, total de desercion y activas  */  
        listGenerations.addEventListener('click', function() {
          var secondContainer = document.getElementById('second-container');
          
          /* Variables del total de alumnas, total de desercion y activas */
          var totalDesertion = 0;
          var totalActive = 0; 
          for (var i = 0; i < Object.keys(data).length; i++) {
            for (var a = 0; a < Object.keys(data[Object.keys(data)[i]]).length; a++) {
              total = (Object.values((Object.values(Object.values(data)[i]))[a])[0].length);
              var totalStudents = document.createElement('div');
              var paragraphStudent = document.createElement('p');
              var textStudent = document.createTextNode('Total Students ' + total);  
                                         
              paragraphStudent.appendChild(textStudent);
              totalStudents.appendChild(paragraphStudent);
              secondContainer.appendChild(totalStudents);
        
              for (var b = 0; b < Object.values((Object.values(Object.values(data)[i]))[a])[0].length; b++) {
                if (Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[2]) {
                  totalActive = totalActive + 1;
                } else {
                  totalDesertion = totalDesertion + 1;
                }
              }  
              var approvedStudents = document.createElement('div');
              var paragraphApproved = document.createElement('p');
              var textApproved = document.createTextNode('Approved Students ' + totalActive);
      
              var desertion = document.createElement('div');
              var paragraphDesertion = document.createElement('p');
              var textDesertion = document.createTextNode('Desertion Students ' + totalDesertion);
                                    
              paragraphDesertion.appendChild(textDesertion);
              desertion.appendChild(paragraphDesertion);
              secondContainer.appendChild(desertion);
      
              paragraphApproved.appendChild(textApproved);
              approvedStudents.appendChild(paragraphApproved);
              secondContainer.appendChild(approvedStudents);
            }
          }
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
 
/*
var sum = 0;
for (var i = 0; i < Object.keys(data).length; i++) {
  for (var a = 0; a < Object.keys(data[Object.keys(data)[i]]).length; a++) {
    sum = sum + (Object.values((Object.values(Object.values(data)[i]))[a])[0].length);
    // console.log(Object.values(data)[i]); 
    // console.log(Object.values((Object.values(Object.values(data)[i]))[a])[0].length);
  }
}
console.log(sum); */
/*
var sum = 0;
var rest = 0;
for (var i = 0; i < Object.keys(data).length; i++) {
  for (var a = 0; a < Object.keys(data[Object.keys(data)[i]]).length; a++) {
    for (var b = 0; b < Object.values((Object.values(Object.values(data)[i]))[a])[0].length; b++) {
    // console.log(Object.values(data)[i]); 
    // se obtiene el array de datos de las alummnas 
    // console.log(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[2]);

      if (Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[2]) {
        sum = sum + 1;

      } else {
        rest = rest + 1;

      }
    }
  }
}
console.log(sum);
console.log(rest); */