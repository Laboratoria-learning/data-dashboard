var student = document.getElementById('student');
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

showAlumn();
//student.addEventListener('onclick', showAlumn);
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
      var sprint = arrayAlumn20162A[i]['sprints'];
      var sc = 'score',
          hs = 'hse',
          tc = 'tech';
      var techSkill = document.createElement('p');
      var tech = ((sprint[0][sc][tc]) + (sprint[1][sc][tc]) + (sprint[2][sc][tc]) + (sprint[3][sc][tc])) / 4;
      var skillT = document.createElement('span');
      skillT.textContent = 'TECH SKILLS';
      skillT.classList.add('skill');
      skillT.classList.add('skillT');
      divNote.appendChild(skillT);
      techSkill.innerHTML = parseInt(tech / 18) + '%';
      techSkill.classList.add('note');
      divNote.appendChild(techSkill);
      var lifeSkill = document.createElement('p');

        //tech.textContent = (sprint[0]['score']['hse']+ sprint[1]['score']['hse'] + sprint[2]['score']['hse'] + sprint[3]['score']['hse']) / 4;
        /* HSE = 1200 puntos máximo --> el 70% son 840 pts.
          tech = 1800 puntos máximo --> el 70%  son 1260pts.*/
      var hse = ((sprint[0][sc][hs]) + (sprint[1][sc][hs]) + (sprint[2][sc][hs]) + (sprint[3][sc][hs])) / 4;
      lifeSkill.innerHTML = parseInt(hse / 12) + '%';
      lifeSkill.classList.add('note');
      divNote.appendChild(lifeSkill);
      var skillH = document.createElement('span');
      skillH.textContent = 'LIFE SKILLS';
      skillH.classList.add('skill');
      skillH.classList.add('skillH');
      divNote.appendChild(skillH);
        //Ingles
      var englishSkill = document.createElement('p');
      englishSkill.textContent = 'INTERM';
      //englishSkill.classList.add('note');
      englishSkill.classList.add('noteM');
      divNote.appendChild(englishSkill);
      var skillE = document.createElement('span');
      skillE.textContent = 'ENGLISH SKILLS';
      skillE.classList.add('skill');
      skillE.classList.add('skillE');
      divNote.appendChild(skillE);
      //Perfil
      var profile = document.createElement('p');
      profile.textContent = 'Ver perfil';
      skillE.classList.add('skill');
      div.appendChild(profile);
    }

  }
};
