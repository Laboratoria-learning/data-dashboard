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
  
arrayLocations(data, 'LIM', '2016-2');

var inputStudents = document.getElementById('students');
inputStudents.addEventListener('click', function() {
  document.body.innerHTML = data['LIM']['2016-2']['students'];
});

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
