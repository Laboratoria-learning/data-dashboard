window.addEventListener('load',function(){
var students = document.getElementById('students');
var studentsBtn = document.getElementById('students-btn')

studentsBtn.addEventListener('click', function(){
  var div = document.createElement('div');
  students.appendChild(div);
  var intento = data.AQP['2016-2'].students
  //var aqp2016 = intento.length
  for (var i = 0; i < intento.length; i++){
    var x = intento[i];
    var y = x.photo;
    var z = x.name;
    var w = x.sprints;
      var img = document.createElement('img');
      var p = document.createElement('p');
      var p2 = document.createElement('p');
      p2.textContent = w;
      p.textContent = z;
      p.setAttribute('class','x')
      img.setAttribute('src',y)
      img.setAttribute('class','y')
      //div.innerHTML = x.name + '</br>';
      div.appendChild(p)
      div.appendChild(img)
      div.appendChild(p2)
    }
   //provando(students);
    //console.log(data.AQP);
    //console.log(data.AQP['2016-2'].students[0].sprints[0]);
})

// haciendo los datos para el overview

var overview = document.getElementById('overview');
var overviewBtn = document.getElementById('overview-btn')

overviewBtn.addEventListener('click', function(){
  var div2 = document.createElement('div');
  overview.appendChild(div2);
  //for para el NPS
  var intento2 = data.AQP['2016-2'].ratings
  for (var i = 0; i < intento2.length; i++){

    var x2 = intento2[i];
    var y2 = x2.nps.promoters;
    var z2 = x2.nps.passive;
    var w2 = x2.nps.detractors;
    var sumXZW = (y2 + z2 + w2)
    var promoters = y2/sumXZW*100
    var detractors = w2/sumXZW*100
    var nps = promoters - detractors
    var p3 = document.createElement('p')
    p3.textContent = 'NPS' + ':' + nps;
    div2.appendChild(p3)
  /*  [Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
[Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
[Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100
[NPS] = [Promoters] - [Detractors] */
  }

  //for para La puntuación promedio de l@s profesores.
  for (var i = 0; i < intento2.length; i++){

    var x3 = intento2[i];
    var y3 = x3.teacher;
    var p4 = document.createElement('p')
    p4.textContent = 'PUNTACIÓN PROMEDIO PROFESORES' + ':' + y3
    div2.appendChild(p4)
  }
  //for para La puntuación promedio de l@s jedi.
  for (var i = 0; i < intento2.length; i++){

    var x4 = intento2[i];
    var y4 = x4.jedi;
    var p5 = document.createElement('p')
    p5.textContent = 'PUNTACIÓN PROMEDIO JEDI' + ':' + y4
    div2.appendChild(p5)
  }
  });
});
console.log (data)
