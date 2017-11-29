var frontEnd = document.getElementById('frontEnd');
var container = document.getElementsByClassName('container')[0];

frontEnd.addEventListener('click', function(event) {
  var dataArray = data.AQP["2016-2"]['students'];

  for (var i = 0; i < dataArray.length; i++) {
    var div = document.createElement('div');
    div.classList.add('style');
    container.appendChild(div);
    // Para jalar las fotos de las estudiantes
    var picture = document.createElement('img');
    picture.classList.add('photo');
    div.appendChild(picture);
    picture.src = dataArray[i]['photo'];
    // Para jalar los nombres de las estudiantes
    var name = document.createElement('h3');
    name.classList.add('names');
    name.classList.add('text-Uppercase');
    div.appendChild(name);
    name.textContent = dataArray[i]['name'];
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
  }
});
