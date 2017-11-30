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
    //jalamos las estudiantes de Arequipa 2016-2, mediante la data
    var studentsAqp = data.AQP['2016-2'].students
    for (var i = 0; i < studentsAqp.length; i++){
      var studentsAqp2016a = studentsAqp[i];
      var photoStudentsAqp2016a = studentsAqp2016a.photo;
      var nameStudentsAqp2016a = studentsAqp2016a.name;
      var sprintsStudentsAqp2016atech1 = studentsAqp2016a.sprints[0].score.tech;
      var sprintsStudentsAqp2016atech2 = studentsAqp2016a.sprints[1].score.tech;
      var sprintsStudentsAqp2016atech3 = studentsAqp2016a.sprints[2].score.tech;
      var sprintsStudentsAqp2016atech4 = studentsAqp2016a.sprints[3].score.tech;
      var sprintsStudentsAqp2016ahse1 = studentsAqp2016a.sprints[0].score.hse;
      var sprintsStudentsAqp2016ahse2 = studentsAqp2016a.sprints[1].score.hse;
      var sprintsStudentsAqp2016ahse3 = studentsAqp2016a.sprints[2].score.hse;
      var sprintsStudentsAqp2016ahse4 = studentsAqp2016a.sprints[3].score.hse;
      //creando los elementos
        var img = document.createElement('img');
        var pName = document.createElement('p');
        var divTech1 = document.createElement('div');
        var divTech2 = document.createElement('div');
        var divTech3 = document.createElement('div');
        var divTech4 = document.createElement('div');
        var divHse1 = document.createElement('div');
        var divHse2 = document.createElement('div');
        var divHse3 = document.createElement('div');
        var divHse4 = document.createElement('div');
        //añadiendo el contenido a los elementos creados
        divTech1.innerHTML ='Puntaje TECH 1° sprint' + ':' + ' ' + sprintsStudentsAqp2016atech1;
        divTech2.innerHTML ='Puntaje TECH 2° sprint' + ':' + ' ' + sprintsStudentsAqp2016atech2;
        divTech3.innerHTML ='Puntaje TECH 3° sprint' + ':' + ' ' + sprintsStudentsAqp2016atech3;
        divTech4.innerHTML ='Puntaje TECH 4° sprint' + ':' + ' ' + sprintsStudentsAqp2016atech4;
        divHse1.innerHTML ='Puntaje HSE 1° sprint' + ':' + ' ' + sprintsStudentsAqp2016ahse1;
        divHse2.innerHTML ='Puntaje HSE 2° sprint' + ':' + ' ' + sprintsStudentsAqp2016ahse2;
        divHse3.innerHTML ='Puntaje HSE 3° sprint' + ':' + ' ' + sprintsStudentsAqp2016ahse3;
        divHse4.innerHTML ='Puntaje HSE 4° sprint' + ':' + ' ' + sprintsStudentsAqp2016ahse4;
        pName.textContent = nameStudentsAqp2016a;
        //añadiendo los nodos
        div.appendChild(pName)
        div.appendChild(img)
        div.appendChild(divTech1)
        div.appendChild(divTech2)
        div.appendChild(divTech3)
        div.appendChild(divTech4)
        div.appendChild(divHse1)
        div.appendChild(divHse2)
        div.appendChild(divHse3)
        div.appendChild(divHse4)
        //agregando los atributos
        div.setAttribute('class', 'students')
        img.setAttribute('src',photoStudentsAqp2016a)
        img.setAttribute('class','photoStudentsAqp2016a')
        pName.setAttribute('class','studentsAqp2016a')
        divTech1.setAttribute('class','studentsAqp2016TECH')
        divTech2.setAttribute('class','studentsAqp2016TECH')
        divTech3.setAttribute('class','studentsAqp2016TECH')
        divTech4.setAttribute('class','studentsAqp2016TECH')
        divHse1.setAttribute('class','studentsAqp2016HSE')
        divHse2.setAttribute('class','studentsAqp2016HSE')
        divHse3.setAttribute('class','studentsAqp2016HSE')
        divHse4.setAttribute('class','studentsAqp2016HSE')
      }
    });
    // Evento para el boton general
    overviewBtn.addEventListener('click', function() {
      sectionDefault.style.display = 'none';
      students.style.display = 'none';
      overview.style.display = 'block';

      var div2 = document.createElement('div');
    overview.appendChild(div2);
    //for para el NPS
    //jalamos los ratings de Arequipa 2016-2, mediante la data
    var overviewAqp = data.AQP['2016-2'].ratings
    for (var i = 0; i < overviewAqp.length; i++){
      var overviewAqp2016a = overviewAqp[i];
      var promotersOverviewAqp2016a = overviewAqp2016a.nps.promoters;
      var passiveOverviewAqp2016a = overviewAqp2016a.nps.passive;
      var detractorsOverviewAqp2016a = overviewAqp2016a.nps.detractors;
      var sum = (promotersOverviewAqp2016a + passiveOverviewAqp2016a + detractorsOverviewAqp2016a)
      var promoters = promotersOverviewAqp2016a/sum*100
      var detractors = detractorsOverviewAqp2016a/sum*100
      var nps = promoters - detractors
      //creando los elementos
      var pNPS = document.createElement('p');
      //añadiendo el contenido a los elementos creados
      pNPS.textContent = 'NPS' + ':' + ' ' + nps;
      //añadiendo los nodos
      div2.appendChild(pNPS);
      //agregando los atributos
      pNPS.setAttribute('class','overviewNPS');
    }
    //for para La puntuación promedio de l@s profesores.
    for (var i = 0; i < overviewAqp.length; i++){
      var overviewAqp2016a = overviewAqp[i];
      var teacheroverviewAqp2016a = overviewAqp2016a.teacher;
      //creando los elementos
      var pPuntsTeacher = document.createElement('p')
      //añadiendo el contenido a los elementos creados
      pPuntsTeacher.textContent = 'PUNTACIÓN PROMEDIO PROFESORES' + ':' + ' ' + teacheroverviewAqp2016a;
      //añadiendo los nodos
      div2.appendChild(pPuntsTeacher)
      //agregando los atributos
      pPuntsTeacher.setAttribute('class','overviewTEACHER')
    }
    //for para La puntuación promedio de l@s jedi.
    for (var i = 0; i < overviewAqp.length; i++){
      var overviewAqp2016a = overviewAqp[i];
      var jedioverviewAqp2016a = overviewAqp2016a.jedi;
      //creando los elementos
      var pPuntsJedi = document.createElement('p')
      //añadiendo el contenido a los elementos creados
      pPuntsJedi.textContent = 'PUNTACIÓN PROMEDIO JEDI' + ':' + ' ' + jedioverviewAqp2016a
      //añadiendo los nodos
      div2.appendChild(pPuntsJedi)
      //agregando los atributos
      pPuntsJedi.setAttribute('class','overviewJEDI')
    }
    //for para el total de estudiantes presentes
    var overviewAqp2 = data.AQP['2016-2'].students
    var contador = 0;
    for (var i = 0; i < overviewAqp2.length; i++){
      var overviewAqp2a = overviewAqp2[i];
      var activeOverviewAqp2a = overviewAqp2a.active
      if (activeOverviewAqp2a == true){
        contador++
      }
    }
    //creando los elementos
    var pTrue = document.createElement('p');
    //añadiendo contenido a los elementos creados
    pTrue.textContent = 'total de estudiantes presentes' + ':' + ' ' + contador
    //añadiendo los nodos
    div2.appendChild(pTrue)
    //agregando los atributos
    pTrue.setAttribute('class','overviewTRUE')
    //for para el % de deserción de estudiantes

    var keysAqp2 = Object.keys(data['AQP']['2017-1']['ratings']).length;
var dataAqp2 = data['AQP']['2017-1']['ratings'];
var contadorAqp2 = 0;

for (var i = 0;i < keysAqp2;i++) {
  var satisfactionAqp2 = dataAqp2[i]['nps']['promoters'];
  contadorAqp2 += satisfactionAqp2;
  var totalAqp2 = contadorAqp2 / 3 + '%';
}
var p2 = document.createElement('p');
p2.textContent = 'Porcentaje de satisfacción en Arequipa 2017-1 es de ' + totalAqp2;
document.body.appendChild(p2);

// intento de sacar el porcentaje de satisfaccion en México
// 2017-1

var keysCdmx1 = Object.keys(data['CDMX']['2017-1']['ratings']).length;
var dataCdmx1 = data['CDMX']['2017-1']['ratings'];
var contadorCdmx1 = 0;

for (var i = 0;i < keysCdmx1;i++) {
  var satisfactionCdmx1 = dataCdmx1[i]['nps']['promoters'];
  contadorCdmx1 += satisfactionCdmx1;
  var totalCdmx1 = contadorCdmx1 / 3 + '%';
}
var p3 = document.createElement('p');
p3.textContent = 'Porcentaje de satisfacción en Mexico 2017-1 es de ' + totalCdmx1;
document.body.appendChild(p3);

// intento de sacar el porcentaje de satisfaccion en México
// 2017-2

var keysCdmx2 = Object.keys(data['CDMX']['2017-2']['ratings']).length;
var dataCdmx2 = data['CDMX']['2017-2']['ratings'];
var contadorCdmx2 = 0;

for (var i = 0;i < keysCdmx2;i++) {
  var satisfactionCdmx2 = dataCdmx2[i]['nps']['promoters'];
  contadorCdmx2 += satisfactionCdmx2;
  var totalCdmx2 = contadorCdmx2 / 2 + '%';
}
var p4 = document.createElement('p');
p4.textContent = 'Porcentaje de satisfacción en Mexico 2017-2 es de ' + totalCdmx2;
document.body.appendChild(p4);

// intento de sacar el porcentaje de satisfaccion en Lima
// 2016-2

var keysLim1 = Object.keys(data['LIM']['2016-2']['ratings']).length;
var dataLim1 = data['LIM']['2016-2']['ratings'];
var contadorLim1 = 0;

for (var i = 0;i < keysLim1 ;i++) {
  var satisfactionLim1 = dataLim1 [i]['nps']['promoters'];
  contadorLim1 += satisfactionLim1;
  var totalLim1 = contadorLim1 / 2 + '%';
}
var p5 = document.createElement('p');
p5.textContent = 'Porcentaje de satisfacción en Lima 2016-2 es de ' + totalLim1;
document.body.appendChild(p5);

// intento de sacar el porcentaje de satisfaccion en Lima
// 2017-1

var keysLim2 = Object.keys(data['LIM']['2017-1']['ratings']).length;
var dataLim2 = data['LIM']['2017-1']['ratings'];
var contadorLim2 = 0;

for (var i = 0;i < keysLim2 ;i++) {
  var satisfactionLim2 = dataLim2 [i]['nps']['promoters'];
  contadorLim2 += satisfactionLim2;
  var totalLim2 = contadorLim2 / 4 + '%';
}
var p6 = document.createElement('p');
p6.textContent = 'Porcentaje de satisfacción en Lima 2017-1 es de ' + totalLim2;
document.body.appendChild(p6);

// intento de sacar el porcentaje de satisfaccion en Lima
// 2017-2

var keysLim3 = Object.keys(data['LIM']['2017-2']['ratings']).length;
var dataLim3 = data['LIM']['2017-2']['ratings'];
var contadorLim3 = 0;

for (var i = 0;i < keysLim3 ;i++) {
  var satisfactionLim3 = dataLim3 [i]['nps']['promoters'];
  contadorLim3 += satisfactionLim3;
  var totalLim3 = contadorLim3 / 2 + '%';
}
var p7 = document.createElement('p');
p7.textContent = 'Porcentaje de satisfacción en Lima 2017-2 es de ' + totalLim3;
document.body.appendChild(p7);

// intento de sacar el porcentaje de satisfaccion en Chile
// 2016-2

var keysScl1 = Object.keys(data['SCL']['2016-2']['ratings']).length;
var dataScl1 = data['SCL']['2016-2']['ratings'];
var contadorScl1 = 0;

for (var i = 0;i < keysScl1 ;i++) {
  var satisfactionScl1 = dataScl1 [i]['nps']['promoters'];
  contadorScl1 += satisfactionScl1;
  var totalScl1 = contadorScl1 / 4 + '%';
}
var p8 = document.createElement('p');
p8.textContent = 'Porcentaje de satisfacción en Chile 2016-2 es de ' + totalScl1;
document.body.appendChild(p8);

// intento de sacar el porcentaje de satisfaccion en Chile
// 2017-1

var keysScl2 = Object.keys(data['SCL']['2017-1']['ratings']).length;
var dataScl2 = data['SCL']['2017-1']['ratings'];
var contadorScl2 = 0;

for (var i = 0;i < keysScl2 ;i++) {
  var satisfactionScl2 = dataScl2 [i]['nps']['promoters'];
  contadorScl2 += satisfactionScl2;
  var totalScl2 = contadorScl2 / 3 + '%';
}
var p9 = document.createElement('p');
p9.textContent = 'Porcentaje de satisfacción en Chile 2017-1 es de ' + totalScl2;
document.body.appendChild(p9);

    });
  });
});
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
