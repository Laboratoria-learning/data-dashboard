var frontEnd = document.getElementById('frontEnd');
var container = document.getElementsByClassName('container')[0];
/*Variables globales por sedes*/
//Lima
 var arrayAlumn20162L = data.LIM['2016-2']['students'];
 var arrayAlumn20171L = data.LIM['2017-1']['students'];
 var arrayAlumn20172L = data.LIM['2017-2']['students'];
 // Arequipa
 var arrayAlumn20162A = data.AQP['2016-2']['students'];
 var arrayAlumn20171A = data.AQP['2017-1']['students'];
 // Santiago
 var arrayAlumn20162S = data.SCL['2016-2']['students'];
 var arrayAlumn20171S = data.SCL['2017-1']['students'];
 var arrayAlumn20172S = data.SCL['2017-2']['students'];
 // Mexico df
 var arrayAlumn20171M = data.CDMX['2017-1']['students'];
 var arrayAlumn20172M = data.CDMX['2017-2']['students'];


frontEnd.addEventListener('click', showAlumn);
function showAlumn() {

  //var dataArray = data.AQP["2016-2"]['students'];
  for (var i = 0; i < arrayAlumn20162A.length; i++) {
    if(arrayAlumn20162A[i]['active'] == true){
      var div = document.createElement('div');
      div.classList.add('style');
      container.appendChild(div);
      // Para jalar las fotos de las estudiantes
      var picture = document.createElement('img');
      picture.classList.add('photo');
      div.appendChild(picture);
      picture.src = arrayAlumn20162A[i]['photo'];
      // Para jalar los nombres de las estudiantes
      var name = document.createElement('h3');
      name.classList.add('names');
      name.classList.add('text-Uppercase');
      div.appendChild(name);
      name.textContent = arrayAlumn20162A[i]['name'];
      // console.log(dataArray[i]['photo']);
      // Cuadro de cursos y especializacion
      var divSmall = document.createElement('div');
      divSmall.classList.add('divSmall');
      div.appendChild(divSmall);
      // Especializacion
      var specialization = document.createElement('p');
      specialization.textContent = 'Frontend Developer';
      specialization.classList.add('p');
      divSmall.appendChild(specialization);
      // Cursos
      var js = document.createElement('p');
      js.textContent = 'JAVASCRIPT';
      js.classList.add('curse');
      divSmall.appendChild(js);
      var alps = document.createElement('p');
      alps.textContent = 'APls';
      alps.classList.add('curse');
      divSmall.appendChild(alps);
      var jQuery = document.createElement('p');
      jQuery.textContent = 'JQUERY';
      jQuery.classList.add('curse');
      divSmall.appendChild(jQuery);
      //Notas
      var divNote = document.createElement('div');
      divNote.classList.add('divNote');
      div.appendChild(divNote);
      var tech = document.createElement('p');
      var sprint = arrayAlumn20162A[i]['sprints'];
      /*for (var j = 0; i < sprint.length; j++) {
        sprint[j]
      }*/
      tech.textContent = 'JAVASCRIPT';
      tech.classList.add('curse');
      divNote.appendChild(tech);
    }

  }
};
