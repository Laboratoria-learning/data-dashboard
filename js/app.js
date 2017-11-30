window.addEventListener('load', function() {
  var selectHeadquarters = document.getElementById('headquarters');
  var selectGeneration = document.getElementById('generation');
  var overview = document.getElementById('overview');
  var overviewBtn = document.getElementById('overview-btn');
  var students = document.getElementById('students');
  var studentsBtn = document.getElementById('students-btn');
  var sectionDefault = document.getElementById('content-default');
  // Cargando data al selector de Sedes
  var headquarters = Object.keys(data);
  var arrOptionnHeadquarter = [];
  for (var i = 0; i < headquarters.length ; i++) {
    var option = document.createElement('option');
    if (headquarters[i] === 'AQP') {
      option.textContent = 'Arequipa';
      option.setAttribute('value', 'arequipa');
      arrOptionnHeadquarter.push(i);
    }
    if (headquarters[i] === 'CDMX') {
      option.textContent = 'México';
      option.setAttribute('value', 'mexico');
      arrOptionnHeadquarter.push(i);
    }
    if (headquarters[i] === 'LIM') {
      option.textContent = 'Lima';
      option.setAttribute('value', 'lima');
      arrOptionnHeadquarter.push(i);
    }
    if (headquarters[i] === 'SCL') {
      option.textContent = 'Chile';
      option.setAttribute('value', 'chile');
      arrOptionnHeadquarter.push(i);
    }
    selectHeadquarters.appendChild(option);
  }
  console.log(arrOptionnHeadquarter); // [0, 1, 2, 3]

  // Función para agregar opciones en selector Generación
  var arrOptionGeneration = [];
  function addOptions(headquarter) {
    var objHeadquarters = data[headquarter];
    var arrGeneration = Object.keys(objHeadquarters);
    for (var i = 0; i < arrGeneration.length; i++) {
      var option = document.createElement('option');
      var textOption = arrGeneration[i];
      option.textContent = textOption;
      option.setAttribute('value', textOption);
      selectGeneration.appendChild(option);
      arrOptionGeneration.push(i);
    }
    console.log(arrOptionGeneration); // Arrary con generaciones de dicha sede: [0, 1]
  }
  // Evento para cargar selector de Generaciones
  selectHeadquarters.addEventListener('change', function() {
    switch (true) {
    case selectHeadquarters.value === 'arequipa':
      addOptions('AQP');
      break;
    case selectHeadquarters.value === 'mexico':
      addOptions('CDMX');
      break;
    case selectHeadquarters.value === 'lima':
      addOptions('LIM');
      break;
    case selectHeadquarters.value === 'chile':
      addOptions('SCL');
      break;
    }
  });

  // Evento para cargar data al seleccionar una generación
  selectGeneration.addEventListener('change', function() {
    for (var i = 0; i < arrOptionGeneration.length; i++) {
      var selectedGeneration = arrOptionGeneration[i];
    }
    console.log('Index de la opción: ' + selectedGeneration);
    // Evento click para el button estudiantes
    studentsBtn.addEventListener('click', function() {
      sectionDefault.style.display = 'none';
      overview.style.display = 'none';
      students.style.display = 'block';

      var div = document.createElement('div');
      students.appendChild(div);
      var arrStudents = data.AQP['2016-2'].students;
      for (var i = 0; i < arrStudents.length; i++) {
        var objDataStudent = arrStudents[i];
        var photo = objDataStudent.photo;
        var name = objDataStudent.name;
        var w = objDataStudent.sprints[0].score.tech;
        var a = objDataStudent.sprints[1].score.tech;
        // console.log(w);
        var img = document.createElement('img');
        var p = document.createElement('p');
        var p2 = document.createElement('div');
        var p21 = document.createElement('div');
        p2.innerHTML ='puntaje tech 1° sprint' + ':' + w;
        p21.innerHTML ='puntaje tech 2° sprint' + ':' + a;
        p.textContent = name;
        p.setAttribute('class', 'x')
        img.setAttribute('src', photo)
        img.setAttribute('class', 'y')
        // div.innerHTML = x.name + '</br>';
        div.appendChild(p)
        div.appendChild(img)
        div.appendChild(p2)
        div.appendChild(p21)
      }
    })
    // Evento para el boton general
    overviewBtn.addEventListener('click', function() {
      sectionDefault.style.display = 'none';
      students.style.display = 'none';
      overview.style.display = 'block';

      var div2 = document.createElement('div');
      overview.appendChild(div2);
      //for para el NPS
      var arrSprints = data.AQP['2016-2'].ratings;
      for (var i = 0; i < arrSprints.length; i++) {
        var x2 = arrSprints[i];
        console.log(x2);
        var y2 = x2.nps.promoters;
        var z2 = x2.nps.passive;
        var w2 = x2.nps.detractors;
        var sumXZW = (y2 + z2 + w2);
        var promoters = y2/sumXZW*100;
        var detractors = w2/sumXZW*100;
        var nps = promoters - detractors;
        var p3 = document.createElement('p')
        p3.textContent = 'NPS' + ':' + nps;
        div2.appendChild(p3);
      }

      // for para La puntuación promedio de l@s profesores.
      for (var i = 0; i < arrSprints.length; i++){
        var x3 = arrSprints[i];
        var y3 = x3.teacher;
        var p4 = document.createElement('p');
        p4.textContent = 'PUNTACIÓN PROMEDIO PROFESORES' + ':' + y3;
        div2.appendChild(p4);
      }
      //for para La puntuación promedio de l@s jedi.
      for (var i = 0; i < arrSprints.length; i++) {
        var x4 = arrSprints[i];
        var y4 = x4.jedi;
        var p5 = document.createElement('p');
        p5.textContent = 'PUNTACIÓN PROMEDIO JEDI' + ':' + y4;
        div2.appendChild(p5);
      }
    });
  });
});
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
