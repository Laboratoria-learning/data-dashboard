window.addEventListener('load', function(event) {
  var chooseGeneration = document.querySelector('.choose-sede-generation');
  var optgroupt =document.getElementById('optgroupt');
  var enrollment = document.getElementById('enrollment');
  var generation = document.getElementById('generation');
  var divgeneration = document.getElementById('divgeneration');
  var title = document.getElementById('title');
  var titleGen = document.getElementById('title-gen');

  optgroupt.addEventListener('change', function(event) {
    console.dir(event.target.value);// cada vez que escoja una opción, me arrojará su valor:AQP,LIM,CDMX,SLC.
    var sede = event.target.value;
    if (sede === 'AQP') {
      title.textContent = '';
      title.textContent = 'AREQUIPA';
    }
    if (sede === 'SCL') {
      title.textContent = '';
      title.textContent = 'SANTIAGO DE CHILE';
    }
    
    if (sede === 'LIM') {
      title.textContent = '';
      title.textContent = 'LIMA';
    }
    
    if (sede === 'CDMX') {
      title.textContent = '';
      title.textContent = 'CIUDAD DE MEXICO';
    }
                   
    for (var i = 0; i <= Object.keys(data).length; i++) {
      if (event.target.value === Object.keys(data)[i]) {
        for (var j = 0; j < Object.keys(data[sede]).length; j++) {
          var otherlistGeneration = document.createElement('option');
          otherlistGeneration.classList.add('generations');
          var textGeneration = document.createTextNode(Object.keys(data[sede])[j]);
          otherlistGeneration.appendChild(textGeneration);
          generation.appendChild(otherlistGeneration); 
        }
        // para limpiar y qie no se repita
        optgroupt.addEventListener('click', function() {
          var sede = document.getElementsByClassName('generation-sede');
          for (var k = 0; k < sede.length; k++) {
            generation.removeChild(sede[k]);
          }
        });  
      }            
    } 
    generation.addEventListener('change', function(event) {   
      titleGen.textContent = event.target.value;
      console.log(Object.keys(data));// devuelve ["AQP", "CDMX", "LIM", "SCL"]
      console.log(sede);// me devuelve el nombre de la sede elegida en el anterior evento.
      console.log(Object.keys(data[sede]));// devuelve ["2016-2", "2017-1"] (sede:representa la propiedad del objeto data elegido en el anterior evento)
      for (var item in data) {
        if (item === sede) {
          var dataSede = {};
          dataSede = data[item];
        }
      }
      console.log(dataSede);// me devuelve el contenido de la sede elegida: {2016-2: {…}, 2017-1: {…}, 2017-2: {…}}

      for (var p in dataSede) {
        var datesGen = {};
        datesGen = dataSede[p];
      }
      console.log(datesGen);//me muestra en un objeto:{students: Array(61), ratings: Array(2)}

      for (var i in dataSede) {
        if (i === event.target.value) {
          var dataAlumns = {};
          dataAlumns = dataSede[i].students;
        }
      }
      console.log(dataAlumns);// tengo a todos los estudiantes de la sede y generación elegida en un array
      var contGoal = 0;// que alcanzaron la meta
      var contTech = 0;
      var contHse = 0;
      var qTech;
      var uHse;
      var contCalc = 0;
      var contInactive = 0;

      for (var k = 0; k < dataAlumns.length; k++) {
        if (dataAlumns[k].active === false) {
          contInactive++;
        }
        // console.log(contInactive);//número de alumnos inactivos por sede elegida
        // console.log(dataAlumns[k]);//me muestra cada objeto alumno

        // empezando los calculos cuando el alumno está activo

        if (dataAlumns[k].active === true) {
          var sumTech = 0;
          var sumHse = 0;
    
          for (var y = 0; y < dataAlumns[k].sprints.length; y++) { // va a sumar el puntaje total de los sprints-alumna en tech y hse
            sumTech += dataAlumns[k].sprints[y].score.tech;
            // console.log(dataAlumns[k].sprints[y].score.tech);//ingresa a la nota por número de sprint del alumno
            sumHse += dataAlumns[k].sprints[y].score.hse; 
            // console.log(dataAlumns[k].sprints[y].score.hse);  
          }
          // console.log(sumTech);//suma total de notas en tech de cada alumno de la generación elegida
          // console.log(sumHse);//suma total de notas en tech de cada alumno de la generación elegida
          // console.log(dataAlumns[k].sprints)//me muestra los sprints del alumno
    
          // Cálculos para los promedios por generación escogida
          qTech = sumTech / dataAlumns[k].sprints.length;// me muestra el promedio de las notas tech (sumTech/#sprints llevados)
          uHse = sumHse / dataAlumns[k].sprints.length;// me muestra el promedio de las notas hse (sumHse/#sprints llevados)
          // console.log(qTech);//promedio de tech(de c/alumno)
          // console.log(dataAlumns[k].sprints);//número de sprints(de c/alumno)

          if (uHse >= 840 && qTech >= 1240) {
            contGoal++; 
          }
          if (qTech >= 1240) {
            contTech++;              
          }
          if (uHse >= 840) {
            contHse++;
          }
          contCalc++;
        }
        console.log(contCalc);// probar
      }
      console.log(contTech);// número de estudiantes que pasaron el mínimo requerido en tech
      console.log(contHse);// número de estudiantes que pasaron el mínimo requerido en hse
      console.log(contGoal);// número de estudiantes que pasaron el mínimo requerido en ambos skills
      var retired = ((contInactive * 100) / dataAlumns.length).toFixed(1);
      var studentAchievement = ((contGoal * 100) / dataAlumns.length).toFixed(1);
      var neoTech = ((contTech / (dataAlumns.length - contInactive)) * 100).toFixed(1);
      var neoSkills = ((contHse / (dataAlumns.length - contInactive)) * 100).toFixed(1);
                
      // añade función a html
      var enrollment = document.getElementById('enrollment');
      enrollment.textContent = '';
      enrollment.textContent = dataAlumns.length;
      var retiredAlumn = document.getElementById('retiredAlumn');
      retiredAlumn.textContent = '';
      retiredAlumn.textContent = retired;
      var countAchievement = document.getElementById('countAchievement');
      countAchievement.textContent = '';
      countAchievement.textContent = contGoal;
      var percentageAchievement = document.getElementById('percentageAchievement');
      percentageAchievement.textContent = '';
      percentageAchievement.textContent = studentAchievement;
      var countSkills = document.getElementById('countSkills');
      countSkills.textContent = '';
      countSkills.textContent = contTech;
      var totalStudents = document.getElementById('totalStudentsTech');
      totalStudents.textContent = '';
      totalStudents.textContent = (dataAlumns.length-contInactive);
      var percentageStudentsPass = document.getElementById('percentageStudentsTech');
      percentageStudentsPass.textContent = '';
      percentageStudentsPass.textContent = neoTech;
      var countHse = document.getElementById('countHse');
      countHse.textContent = '';
      countHse.textContent = contHse;
      var totalStudentsHse = document.getElementById('totalStudentsHse');
      totalStudentsHse.textContent = '';
      totalStudentsHse.textContent = (dataAlumns.length-contInactive);
      var percentageStudentsHse = document.getElementById('percentageStudentsHse');
      percentageStudentsHse.textContent = '';
      percentageStudentsHse.textContent = neoSkills;
                    
    
    });

    // STUDENT SATISFACTION (para últimos gráficos)
    for (var satisfaction in data) {
      if (satisfaction === event.target.value) {// reemplazar por dataalumns en el evento al jalar optgroupt
        var dataSatisfaction = {};
        dataSatisfaction = data[satisfaction];
      }     
    }
    console.log(dataSatisfaction); // {2017-1: {…}, 2017-2: {…}} --> value de cada sede

    // Contenido de cada generación guardado en dataS
    for (var g in dataSatisfaction) {
      var dataG = {};
      dataG = dataSatisfaction[g];
    }
    console.log(dataG); // {students: Array(14), ratings: Array(2)}
    console.log(dataG.ratings); // Objeto contenido en "ratings"
      
    // accediendo a student y su contenido
    for (var s in dataG.ratings) {
      var dataStudent = {};
      dataStudent = dataG.ratings[s]; // {sprint: 2, nps: {…}, student: {…}, teacher: 4.1, jedi: 4.2}
      var dataExpectation = dataStudent.student;// {no-cumple: 6, cumple: 75, supera: 19}
    }
    
    for (var nc in dataExpectation) {
      var noCumple = {};
      if (dataExpectation['no-cumple'] === false) {
        console.log(funciona);
      }
    }
    console.log(dataExpectation['no-cumple']); // valor de no-cumple : 6
  });
});
    