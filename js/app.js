/* Iniciamos extrayendo los datos de las sedes */
debugger;

window.addEventListener('load', function() {
  var containerSedes = document.getElementById('container-sedes');
  containerSedes.addEventListener('click', function() {
    var sedes = document.getElementById('container-generations');
    var total = 0;

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

        /* Usamos esta formula para obtener el total de alumnas */
        total = total + (Object.values((Object.values(Object.values(data)[i]))[a])[0].length);

        listGenerations.addEventListener('click', function() {
          var firstContainer = document.getElementById('first-container');

          var totalStudents = document.createElement('div');
          var paragraphStudent = document.createElement('p');
          var textStudent = document.createTextNode('Total Students ' + total);

          var desertion = document.createElement('div');
          var paragraphDesertion = document.createElement('p');
          var textDesertion = document.createTextNode('Desertion');

          var approvedStudents = document.createElement('div');
          var paragraphApproved = document.createElement('p');
          var textApproved = document.createTextNode('Approved Students');

          paragraphStudent.appendChild(textStudent);
          totalStudents.appendChild(paragraphStudent);
          firstContainer.appendChild(totalStudents);

          paragraphDesertion.appendChild(textDesertion);
          desertion.appendChild(paragraphDesertion);
          firstContainer.appendChild(desertion);

          paragraphApproved.appendChild(textApproved);
          approvedStudents.appendChild(paragraphApproved);
          firstContainer.appendChild(approvedStudents);
        });
      }
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