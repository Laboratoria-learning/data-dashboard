function arrayLocations(data, sede, number) {
  var keys = Object.keys(data);
  for (var i = 0;i < keys.length;i++) {
    if (keys[i] === sede) {
      var dataSede = data[sede];
      var year = Object.keys(dataSede);

      for (var j = 0;j < year.length;j++) {
        if (year[j] === number) {
          var yearSelectioned = data[sede][number];
          var elementsOfEachYear = Object.keys(yearSelectioned);
          
          for (var x = 0;x < elementsOfEachYear.length;x++) {
            var propertiesOfYear = data[sede][number];
            var studentsRatings = Object.keys(propertiesOfYear);
            console.log(studentsRatings);
          }
        }
      }
    }
  }
  return keys;
}
/*
  foto de la usuaria || nombre de la usuaria
  hr
  add student
  hr
  remove student
  hr
  add sprint
  hr
  */ 
arrayLocations(data, 'LIM', '2016-2');

var inputStudents = document.getElementById('students');
inputStudents.addEventListener('click', function() {
  // document.body.innerHTML = data['LIM']['2016-2']['students']['photo'];
  // var img = data['LIM']['2016-2']['students'][0]['photo'];
  // document.body.innerHTML = data['LIM']['2016-2']['students'][0]['photo'];
  var info = Object.keys(data['LIM']['2016-2']['students']).length;
  for (var i = 0; i < info; i++) {
    // document.body.innerHTML = data['LIM']['2016-2']['students'][i]['photo'];
    var img = document.createElement('img');
    var container = data['LIM']['2016-2']['students'][i]['photo'];
    img.setAttribute('src', container);
    
    var div = document.createElement('div');
    div.appendChild(img);
    document.body.appendChild(div);
    
    
    // document.body.appendChild(div);
    // document.body.appendChild(div);
  }
});
/*
var iconHumburger = document.getElementById('icon-hamburger');
iconHumburger.addEventListener('click', function() {
  var creatingDiv = document.createElement('div');
  var creatingP = document.createElement('p');
  var text = document.createTextNode('hey');
  creatingP.appendChild(text);
  creatingDiv.appendChild(creatingP);
  iconHumburger.appendChild(creatingDiv);
});*/


// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
