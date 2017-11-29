

var students = document.getElementById('students');

  var div = document.createElement('div');
  students.appendChild(div)
  var addText = document.createTextNode("hola");
  div.appendChild(addText);

  var div2 = document.createElement('div');
  students.appendChild(div2);
  var studentsAqp = document.createTextNode(data['AQP']['2016-2']['students'][0])
  div2.appendChild(studentsAqp);
//console.log(data['AQP']['2016-2']['students'][0])
