
window.addEventListener('load',function(){
var students = document.getElementById('students');
var studentsBtn = document.getElementById('students-btn')
/*
function provando(){
  var div = document.createElement('div');
  students.appendChild(div);
  var intento = data['AQP']['2016-2']['students']
  //var aqp2016 = intento.length
  for (var i = 0; i < intento.length; i++){
    var x = intento[i]
    var y = x.photo
    if (intento!=x){
      var img = document.createElement('img');
      img.setAttribute('src',y)
      div.innerHTML = x.name + '</br>'
      div.appendChild(img)
    }
    console.log(x)
  }
}*/

studentsBtn.addEventListener('click', function(){
  var div = document.createElement('div');
  students.appendChild(div);
  var intento = data['AQP']['2016-2']['students']
  //var aqp2016 = intento.length
  for (var i = 0; i < intento.length; i++){
    var x = intento[i];
    var y = x.photo;
    var z = x.name;
      var img = document.createElement('img');
      var p = document.createElement('p');
      p.textContent = z;
      img.setAttribute('src',y)
      img.setAttribute('class','y')
      console.log(img);

      //div.innerHTML = x.name + '</br>';
      div.appendChild(p)
      div.appendChild(img)
    }
    console.log(x)
   //provando(students);
})
});
/*
console.log (data['AQP']['2016-2']['students'])

for (var i = 0; i < Object.keys(data['AQP']).length; i++) {
  console.log(data[Object.keys(data)[i]]);
 }

console.log(data)

console.log(data['AQP']['2016-2']['students'][0])*/
