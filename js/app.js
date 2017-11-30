/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
/* console.log(data.AQP);
console.log(data.LIM);
console.log(data.CDMX);
console.log(data.SCL);
/* var AQP = data.AQP["2017-2"];*/
/* var arequipa = data.AQP;
var lima = data.LIM;
var mexico = data.CDMX;
var chile = data.SCL;
/* console.log(AQP); */
console.log(data);

window.addEventListener('load', function(event) {
  var sede = document.getElementById('sede');
  var semestre = document.getElementById('semestre');

  
  sede.addEventListener('change', jalarData);
  document.addEventListener('change', inscritas);
  /* funcion para sacar data  de acuerdo a la sede y semestre que se elige*/ 
  function jalarData(event) {
    for (var i = 0; i < Object.keys(data).length; i++) {
      if (event.target.value === Object.keys(data)[i]) {
        semestre.innerHTML = '';
        /* Metodo reverse para que salga el ultimo semestre primero*/ 
        var todosSemestres = Object.keys(data[sede.value]).reverse();
        console.log(todosSemestres);
        for (var j = 0; j < todosSemestres.length; j++) {
          var optionSemestre = document.createElement('option');
          optionSemestre.value = todosSemestres[j];
          optionSemestre.textContent = todosSemestres[j];
          semestre.appendChild(optionSemestre);
        }
      }
    }
  }
/* Funcion para jalar data de alumnas inscritas y desercion por sede   */
  function inscritas(event) {
    if (event.target === sede || event.target === semestre) {
      var alumnas = data[sede.value][semestre.value].students;
      var alumnasInscritas = 0;
      var alumnasDesercion = 0;

      for (var i = 0; i < alumnas.length; i++) {
        if (alumnas[i]['active'] === true) {
          alumnasInscritas++;
        } else {
          alumnasDesercion++;
        }
      }
      document.getElementById('total-students').textContent = alumnasInscritas;
      document.getElementById('desercion').textContent = Math.round((alumnasDesercion / alumnas.length) * 100) * 10 / 10 + '%';
    }
    averageTeachers();
  }

  /* Función para obtener promedio de profesores */
  function averageTeachers(event) {
    if (sede === sede || event.target === semestre) {
      var ratings = data[sede.value][semestre.value].ratings;
      console.log(ratings);
      var sum = 0;

      for (var i = 0; i < ratings.length; i++) {
        var teacherNote = ratings[i]['teacher']; 
        sum += teacherNote;
        console.log(sum);
        var average = Math.round(sum / ratings.length);
        console.log(average);
      }
      var averageText = document.createTextNode(average);
      console.log(averageText); // '4'
      var box = document.getElementById('teachers-average');
      console.log(box);
      var averageContainer = document.createElement('h4');
      averageContainer.appendChild(averageText);
      box.appendChild(averageContainer);
    }
    averageJedis();
  }

  /* Función para obtener el promedio de los profesores */
  function averageJedis(event) {
    if (sede === sede || event.target === semestre) {
      var ratings = data[sede.value][semestre.value].ratings;
      console.log(ratings);
      var sum = 0;

      for (var i = 0; i < ratings.length; i++) {
        var jediNote = ratings[i]['jedi']; 
        sum += jediNote;
        console.log(sum);
        var average = Math.round(sum / ratings.length);
        console.log(average);
      }
      var averageTextJedi = document.createTextNode(average);
      console.log(averageTextJedi); 
      var box = document.getElementById('jedis-average');
      console.log(box);
      var averageContainerJedi = document.createElement('h4');
      averageContainerJedi.appendChild(averageTextJedi);
      box.appendChild(averageContainerJedi);
    }
   
  }

  




  var students = document.getElementById('students');
  students.addEventListener('click', function(event) {
    var sectionEstudents = document.getElementById('section-students');
    var sectionData = document.getElementById('section-data');
    var section = document.getElementById('teachers-ratings');
    var formSearch = document.getElementById('search');
    /* Creando el contenedor-data de students.*/
    var containerData = document.createElement('div');
    /* Creando elementos para la foto del estudiante.*/
    var photoProfile = document.createElement('div');
    var img = document.createElement('img');
    /* Creando elementos para la nombre y status del estudiante.*/
    var infoProfile = document.createElement('div');
    var name = document.createElement('div');
    // var textName = document.createElement('p');
    var status = document.createElement('div');
    // var texStatus = document.createElement('p');
    /* Creando elementos para skills del estudiante.*/
    var skillsProfile = document.createElement('div');
    var skillTech = document.createElement('div');
    // var percentT = document.createElement('p');
    // var textSkillt = document.createElement('p');
    var skillHse = document.createElement('div');
    // var percentH = document.createElement('p');
    // var textSkillh = document.createElement('p');
    var divButton = document.createElement('div');
    var buttonRemove = document.createElement('button');

    sectionEstudents.appendChild(containerData);
    sectionEstudents.insertBefore(formSearch, containerData);
    containerData.appendChild(photoProfile);
    containerData.appendChild(infoProfile);
    infoProfile.appendChild(name);
    infoProfile.appendChild(status);
    infoProfile.insertBefore(name, status);
    containerData.appendChild(skillsProfile);
    skillsProfile.appendChild(skillTech);
    skillsProfile.appendChild(skillHse);
    skillsProfile.appendChild(divButton);
    skillsProfile.insertBefore(skillTech, skillHse);
    skillsProfile.insertBefore(skillHse, divButton);
    divButton.appendChild(buttonRemove);
    buttonRemove.textContent = 'Remove';
    sectionData.classList.add('display-none');
    sectionEstudents.classList.remove('display-none');
    buttonRemove.setAttribute('type', 'submit');
    containerData.classList.add('container-data');
    photoProfile.classList.add('photo-profile');
    infoProfile.classList.add('info-profile');
    name.classList.add('name-profile');
    status.classList.add('status-profile');
    skillsProfile.classList.add('skills-profile');
    skillTech.classList.add('skill');
    skillHse.classList.add('skill');
    divButton.classList.add('button');
    buttonRemove.classList.add('remove');
  });
  
  /*
  select.addEventListener('click', function showSedes(event) {
    var select = document.getElementById('select');
    // Agregar funcion para mostrar la data al select
    select.addEventListener('change', function(event) {
      if (select.value === 'Lima-2016-1') {
        alert('hola');
      }  
    }); 
  }); */

  teachers.addEventListener('click', function showData(event) {
    // Creando el contenedor del promedio de los Teachers.
    var sectionEstudents = document.getElementById('section-students');
    var sectionData = document.getElementById('section-data');
    var section = document.getElementById('teachers-ratings');
    var teachersOption = document.getElementById('teachers');
    var containerData = document.createElement('div');
    var containerTeacher = document.createElement('div');
    var titleData = document.createElement('h1');
    titleData.textContent = 'Overall Teacher Rating';
    containerData.appendChild(containerTeacher);
    containerTeacher.appendChild(titleData);
    containerTeacher.setAttribute('id', 'teacher-data');
    section.appendChild(containerData);
    containerTeacher.classList.add('average-container');
    containerData.classList.add('teachers-data');
    titleData.classList.add('average-title');

    // Creando el contenedor del promedio de los Jedis-masters 
    var containerJedis = document.createElement('div');
    var titleJedi = document.createElement('h1');
    titleJedi.textContent = 'Jedi Master Rating';
    containerData.appendChild(containerJedis);
    containerJedis.appendChild(titleJedi);
    containerJedis.classList.add('average-container');
    titleJedi.classList.add('average-title');
  });
});

/* AREQUIPA*/
var sedeArequipa = 'AQP';
var generacion1 = '2016-2';
var generacion2 = '2017-1';

for (var sede in data) {
  if (sede == sedeArequipa) {
    for (var semestre1 in data[sede]) {
      if (semestre1 == generacion1) {
        console.log(data[sede][semestre1].students);
      }
    }
  }
}
for (var sede in data) {
  if (sede == sedeArequipa) {
    for (var semestre2 in data[sede]) {
      if (semestre2 == generacion2) {
        console.log(data[sede][semestre2].students);
      }
    }
  }
}

for (var sede in data) {
  if (sede == sedeArequipa) {
    for (var semestre1 in data[sede]) {
      if (semestre1 == generacion1) {
        let array = data[sede][semestre1].ratings;
        for (var i = 0; i < array.length; i++) {
          console.log(array[i]);
        }
      }
    }
  }
}
for (var sede in data) {
  if (sede == sedeArequipa) {
    for (var semestre1 in data[sede]) {
      if (semestre1 == generacion1) {
        let array = data[sede][semestre1].ratings;
        for (var i = 0; i < array.length; i++) {
          console.log('sprint ->' + array[i]['sprint']);
          console.log(array[i]['nps']);
          console.log('Jedi ->' + array[i]['jedi']);
        }
      }
    }
  }
}
console.log(data.LIM.students);
