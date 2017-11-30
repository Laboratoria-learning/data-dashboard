/* Iniciamos extrayendo los datos de las sedes */
// debugger;

window.addEventListener('load', function() {
  var containerSedes = document.getElementById('container-sedes');
  containerSedes.addEventListener('click', function() {
    var sedes = document.getElementById('container-generations');
    /* Creando la lista de las sedes */
<<<<<<< HEAD
                    
    var totalAlum = [];
    var sumTechHse = 0;
    var desertion = 0;
    var totalTech = [];
    var totalHse = [];
    var totalSum = [];
    var totalDesertion = [];

=======
>>>>>>> 3b3a362ba22b3aaca04a007dcc5a05e8b519931a
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
      /* Este evento trae la data del total de alumnas, total de desercion y activas */ 
      var generations = document.getElementsByClassName('generations');
      for (var a = 0; a < generations.length; a++) {
        generations[a].addEventListener('click', function() {
          var secondContainer = document.getElementById('second-container');
          var containerParagraph = document.getElementsByClassName('container-paragraph');
                
          var totalDesertion = 0;
          var totalActive = 0; 
          for (var i = 0; i < Object.keys(data).length; i++) {
            for (var a = 0; a < Object.keys(data[Object.keys(data)[i]]).length; a++) {
              total = (Object.values((Object.values(Object.values(data)[i]))[a])[0].length);
              var numberStudent = document.createElement('p');
              numberStudent.className = 'number';
              var textNumberStudent = document.createTextNode(total);  
                                               
              numberStudent.appendChild(textNumberStudent);
              containerParagraph[0].appendChild(numberStudent);
              
              for (var b = 0; b < Object.values((Object.values(Object.values(data)[i]))[a])[0].length; b++) {
                if (Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[2]) {
                  totalActive = totalActive + 1;
                } else {
                  totalDesertion = totalDesertion + 1;
                }
              }  
              var numberApproved = document.createElement('p');
              numberApproved.className = 'number';
              var numberApprovedStudent = document.createTextNode(totalActive);  
            
              var numberDesertion = document.createElement('p');
              numberDesertion.className = 'number';
              var numberDesertionStudent = document.createTextNode(totalDesertion); 
              numberDesertion.appendChild(numberDesertionStudent);
              containerParagraph[1].appendChild(numberDesertion);
              numberApproved.appendChild(numberApprovedStudent);
              containerParagraph[2].appendChild(numberApproved);
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
<<<<<<< HEAD
});  
=======
}); 

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Sedes', 'Total de alumnas'],
    ['Arequipa',     30],
    ['Santiago de Chile',      95],
    ['Ciudad de México',  70],
    ['Lima', 66],
  ]);

  var options = {
    title: 'Total de alumnas por sedes'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);

  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Desercion', 'Total y porcentaje'],
      ['Arequipa',     51],
      ['Santiago de Chile',      27],
      ['Ciudad de México',  18],
      ['Lima', 59],
    ]);

    var options = {
      title: 'Total de alumnas que desertaron por sede',
      pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  };


};
 
/*
var sum = 0;
for (var i = 0; i < Object.keys(data).length; i++) {
  for (var a = 0; a < Object.keys(data[Object.keys(data)[i]]).length; a++) {
    sum = sum + (Object.values((Object.values(Object.values(data)[i]))[a])[0].length);
    console.log(Object.values(data)[i]); 
    // console.log(Object.values((Object.values(Object.values(data)[i]))[a])[0].length);
  }
} */
// console.log(sum); 

// var sum = 0;
// var rest = 0;
// var totalTech = [];
// var totalHse = [];
// var totalSum = [];
// for (var i = 0; i < Object.keys(data).length; i++) {
//   for (var a = 0; a < Object.keys(data[Object.keys(data)[i]]).length; a++) {
//     for (var b = 0; b < Object.values((Object.values(Object.values(data)[i]))[a])[0].length; b++) {
//     // console.log(Object.values(data)[i]); 
//     // se obtiene el array de datos de las alummnas 
//     // console.log(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[2]);

//       if (Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[2]) {
//         for (var c = 0; c < Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3].length; c++) {
//           var tech = Object.values(Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3][c])[1])[0];
//           totalTech.push(tech);
//           var hse = Object.values(Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3][c])[1])[1];
//           totalHse.push(hse);
//           var sum = totalTech[c] + totalHse[c];
//           totalSum.push(sum);
//           if(totalSum[c] >= 2400) {
            
//           }
//         }
//         console.log(Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3][c])[0]);
//       }
//  else {
//   rest = rest + 1;
// }

// console.log(sum);
// console.log(rest); 
/*
for (var c = 0; c < Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3].length; c++) {
  var tech = Object.values(Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3][c])[1])[0];
  totalTech.push(tech);
  var hse = Object.values(Object.values(Object.values(Object.values((Object.values(Object.values(data)[i]))[a])[0][b])[3][c])[1])[1];
  totalHse.push(hse);
  var sum = totalTech[c] + totalHse[c];
  totalSum.push(sum);
  if(totalSum[c] >= 2400) {
    
  } */
>>>>>>> 3b3a362ba22b3aaca04a007dcc5a05e8b519931a
