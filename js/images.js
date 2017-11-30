window.addEventListener('load', function() {
  var contentStudentsImg = document.getElementById('content-students-img');
  var boton = document.getElementById('boton');
  var AQP = data.AQP;
  var CDMX = data.CDMX;
  var LIM = data.LIM;
  var SCL = data.SCL;
  var selectSede = document.getElementById('select-sede');
  var selectGen = document.getElementById('select-generation');
  var SEDE = '';
  var GEN = '';
  selectGen.addEventListener('change', generation);
  function generation(event) {
    SEDE = selectSede.value;
    GEN = selectGen.value;
    console.log(SEDE);
    console.log(GEN);
  }
  boton.addEventListener('click', showImages);
  function showImages(event) {
  }
  var studentsAQP2016 = AQP['2016-2'].students;
  var studentsAQP2017 = AQP['2017-1'].students;
  var studentsCDMX2017 = CDMX['2017-1'].students;
  var studentsCDMX20172 = CDMX['2017-2'].students;
  var studentsLIM2016 = LIM['2016-2'].students;
  var studentsLIM20171 = LIM['2017-1'].students;
  var studentsLIM20172 = LIM['2017-2'].students;
  var studentsSCL2016 = SCL['2016-2'].students;
  var studentsSCL20171 = SCL['2017-1'].students;
  var studentsSCL20172 = SCL['2017-2'].students;
  var paises = [studentsAQP2016, studentsAQP2017, studentsCDMX2017, studentsCDMX20172, studentsLIM2016, studentsLIM20171, studentsLIM20172,
    studentsLIM20172, studentsSCL2016, studentsSCL20172];
  for (var i = 0; i < paises.length; i++) {
    var alunm = paises[i];
    for (var j = 0; j < alunm.length; j++) {
      var nameStudents = alunm[j].name;
      var photoStudents = alunm[j].photo;
      var div = document.createElement('div');
      var img = document.createElement('img');
      var span = document.createElement('span');
      var leftSquare = document.createElement('div');
      var rightSquare = document.createElement('div');
      img.setAttribute('src', photoStudents);
      img.setAttribute('alt', nameStudents);
      div.appendChild(img);
      div.appendChild(span);
      div.appendChild(leftSquare);
      div.appendChild(rightSquare);
      // p.appendChild(rightSquare);
      span.textContent = nameStudents;
      contentStudentsImg.appendChild(div);
      img.style.width = '200px';
      img.style.height = '200px';
    }
  }
});
