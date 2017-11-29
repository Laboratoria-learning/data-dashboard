window.addEventListener('load',function(){
var students = document.getElementById('students');
var studentsBtn = document.getElementById('students-btn')

function provando(){
  var div2 = document.createElement('div');
  students.appendChild(div2);
  var aqp2016 = data['AQP']['2016-2']['students'][0]
  div2.innerHTML = aqp2016.name
 }

studentsBtn.addEventListener('click', function(){
   provando(students);
})

//console.log(data['AQP']['2016-2']['students'][0])
});
