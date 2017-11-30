// creando ...
window.addEventListener('load', function() {
  var overview = document.getElementById('general');
  // agregando sedes
  var selectSede = document.getElementById('sede');
  var selectGene = document.getElementById('generation');
  // agregando sedes
  var sedeO = '';
  var geneO = '';
  selectSede.addEventListener('click', function(event) {
    sedeO = selectSede.value;
    console.log(sedeO);
    return sedeO;
  });
  console.log(selectSede);
  selectGene.addEventListener('click', function(event) {
    geneO = selectGene.value;
    console.log(geneO);
    return geneO;
  });
  // enrollment
  var enrollment = document.createElement('div');
  var enrollOne = document.createElement('div');
  var titleEnroll = document.createElement('h1');
  titleEnroll.innerText = 'ENROLLMENT';
  var allStudents = document.createElement('h2');
  // agrega la cantidad de estudiantes activos por sede y generacion
  // pero falta jalarlo de manera mas generica
  allStudents.innerText = currentStudents('LIM', '2016-2');
  var textAS = document.createElement('span');
  textAS.innerText = '# STUDENTS CURRENTLY ENROLLED';
  var enrollTwo = document.createElement('div');
  var dropout = document.createElement('h2');
  dropout.innerText = dropoutAll('LIM', '2016-2');
  var textDrop = document.createElement('span');
  textDrop.innerText = '% DROPOUT';
  // agregando al enrollment
  general.appendChild(enrollment);
  enrollment.appendChild(titleEnroll);
  enrollment.appendChild(enrollOne);
  enrollment.appendChild(enrollTwo);
  enrollOne.appendChild(allStudents);
  enrollOne.appendChild(textAS);
  enrollTwo.appendChild(dropout);
  enrollTwo.appendChild(textDrop);
  // estilos
  enrollment.setAttribute('class', 'enrollmentClass');
  enrollOne.setAttribute('class', 'enrollOne');
  enrollTwo.setAttribute('class', 'enrollTwo');
  // achievement
  var achievement = document.createElement('div');
  var achiOne = document.createElement('div');
  var achiTwo = document.createElement('div');
  var titleAchi = document.createElement('h1');
  titleAchi.innerText = 'ACHIEVEMENT';
  var target = document.createElement('h1');
  target.innerText = promSprint('LIM', '2016-2');
  var texTarg = document.createElement('span');
  texTarg.innerText = '# STUDENTS THAT MEET THE TARGET';
  var percentTotal = document.createElement('h2');
  percentTotal.innerText = totalAchivement('LIM', '2016-2');
  var textTotal = document.createElement('span');
  textTotal.innerText = '% of total( )'; // allStudents('LIM', '2016-2');
  // agregando al achievement
  general.appendChild(achievement);
  achievement.appendChild(titleAchi);
  achievement.appendChild(achiOne);
  achievement.appendChild(achiTwo);
  achiOne.appendChild(target);
  achiOne.appendChild(texTarg);
  achiTwo.appendChild(percentTotal);
  achiTwo.appendChild(textTotal);
  // estilos de achievement
  achievement.setAttribute('class', 'achievementClass');
  achiOne.setAttribute('class', 'achiOne');
  achiTwo.setAttribute('class', 'achiTwo');
  // promoter score
  var promoterScore = document.createElement('div');
  var promoterOne = document.createElement('div');
  var promoterTwo = document.createElement('div');
  var titleProSco = document.createElement('h1');
  titleProSco.innerText = 'NET PROMOTER SCORE';
  var nps = document.createElement('h1');
  nps.innerText = npsCumulative('LIM', '2016-2');
  var textNps = document.createElement('span');
  textNps.innerText = '% CUMULATIVE NPS';
  var promoter = document.createElement('p');
  promoter.innerText = promotersPercent('LIM', '2016-2');
  var passive = document.createElement('p');
  passive.innerText = passivePercent('LIM', '2016-2');
  var detractors = document.createElement('p');
  detractors.innerText = detractorPercent('LIM', '2016-2');
  // agregando promoter
  general.appendChild(promoterScore);
  promoterScore.appendChild(titleProSco);
  promoterScore.appendChild(promoterOne);
  promoterScore.appendChild(promoterTwo);

  promoterOne.appendChild(nps);
  promoterOne.appendChild(textNps);
  promoterTwo.appendChild(promoter);
  promoterTwo.appendChild(passive);
  promoterTwo.appendChild(detractors);
  // agregando estilos al nps
  promoterScore.setAttribute('class', 'promoterClass');
  promoterOne.setAttribute('class', 'pOneClass');
  promoterTwo.setAttribute('class', 'pTwoClass');
  // TechSkills
  var techS = document.getElementById('techS');
  var techSection = document.createElement('section')
  var techSkills = document.createElement('div');
  var titleTS = document.createElement('h1');
  titleTS.innerText = 'TECH SKILLS';
  var comboTS = document.createElement('select');
  var OP1 = document.createElement('option');
  OP1.innerText = 'Sprint 1';
  var OP2 = document.createElement('option');
  OP2.innerText = 'Sprint 1';
  var OP3 = document.createElement('option');
  OP3.innerText = 'Sprint 3';
  var OP4 = document.createElement('option');
  OP4.innerText = 'Sprint 4';
  var metTarget = document.createElement('div');
  var titleMT = document.createElement('h1');
  titleMT.innerText = 'numberofpercent';
  var textMT = document.createElement('span');
  textMT.innerText = '# STUDENTS THAT MEET THE TARGET';
  var totalTS = document.createElement('div');
  var titleTS2 = document.createElement('h1');
  titleTS2.innerText = 'percentoftotal';
  var textTS = document.createElement('span');
  textTS.innerText = '% Of TOTAL';
 // agregando clases
  techS.appendChild(techSection);
  techSection.appendChild(techSkills)
  techSkills.appendChild(titleTS);
  techSkills.appendChild(comboTS);
  comboTS.appendChild(OP1);
  comboTS.appendChild(OP2);
  comboTS.appendChild(OP3);
  comboTS.appendChild(OP4);
  techSkills.appendChild(metTarget);
  techSkills.appendChild(totalTS);
  metTarget.appendChild(titleMT);
  metTarget.appendChild(textMT);
  totalTS.appendChild(titleTS2);
  totalTS.appendChild(textTS);
  // agregando clases al los elementos
  techSection.setAttribute('class', 'sectionTech');
  OP1.setAttribute('value', 'SP1');
  OP2.setAttribute('value', 'SP2');
  OP3.setAttribute('value', 'SP3');
  OP4.setAttribute('value', 'SP4');
  techSkills.setAttribute('class', 'techSkillStyle');
  comboTS.setAttribute('class', 'comboStyle');
  metTarget.setAttribute('class', 'metTargetStyle');
  totalTS.setAttribute('class', 'totalTSStyle');
  // funcion para sacar la cantidad actual activos de estudiantes por sede
  function currentStudents(sede, gene) {
    var count = 0;
    var sede = data[sede];
    var generation = sede[gene];
    var student = generation.students;
    for (var i = 0; i < student.length; i++) {
      if (student[i].active === true) {
        count++;
      }
    } return count;
  }
  // promedio de desertadas
  function dropoutAll(sede, gene) {
    var count = 0;
    var sede = data[sede];
    var generation = sede[gene];
    var student = generation.students;
    for (var i = 0; i < student.length; i++) {
      if (student[i].active === false) {
        count++;
      } var percent = Math.round((count / student.length) * 100);
    } return percent + ' %';
  };
  // promedio de sprint
  function promSprint(sede, gene) {
    var sede = data[sede];
    var generation = sede[gene];
    var student = generation.students;
    var array = [];
    for (var i = 0; i < student.length; i++) {
      var techAll = 0;
      var hseAll = 0;
      if (student[i].active === true) {
        var sprint = student[i].sprints.length;
        for (var s = 0; s < sprint; s++) {
          var tech = student[i].sprints[s].score.tech;
          techAll += tech;
          var hse = student[i].sprints[s].score.hse;
          hseAll += hse;
        }
        var promhse = hseAll / sprint;
        var promtech = techAll / sprint;

        array.push([promtech, promhse]);
        var complete = 0;
        for (var p = 0; p < array.length; p++) {
          if (array[p][0] >= 1260 && array[p][1] >= 840) {
            complete++;
          }
        }
      }
    } return complete;
  }
  // para el achivement total.
  function totalAchivement(sede, gene) {
    var promSprintTotal = promSprint(sede, gene);
    var totalStudents = currentStudents(sede, gene);
    var sede = data[sede];
    var generation = sede[gene];
    var student = generation.students;

    var percentAchievement = (promSprintTotal / totalStudents) * 100;
    return percentAchievement;
  }
  // funcion para el porcentaje del nps.
  function npsCumulative(sede, gene) {
    var sede = data[sede];
    var generation = sede[gene];
    var ratigns = generation.ratings;
    var numRatigns = ratigns.length;
    var arrayRatigns = [];
    for (var i = 0; i < numRatigns; i++) {
      // nps segun la formula dadaa
      // nps = promoters - detractors
      var nps = ratigns[i].nps.promoters - ratigns[i].nps.detractors;
      // agrega al array
      arrayRatigns.push(nps);
    }
    var complete = 0;
    for (var p = 0; p < arrayRatigns.length; p++) {
      complete += arrayRatigns[p];
    } var npsPercent = complete / numRatigns;
    return npsPercent;
  }
  // porcentaje del promotor
  function promotersPercent(sede, gene) {
    var sede = data[sede];
    var generation = sede[gene];
    var ratigns = generation.ratings;
    var cants = ratigns.length;
    var array = [];
    for (var i = 0; i < cants; i++) {
      var total = ratigns[i].nps.promoters + ratigns[i].nps.passive + ratigns[i].nps.detractors;
      var promoters = ((ratigns[i].nps.promoters) / total) * 100;
      array.push(promoters);
    }
    var allPromoter = 0;
    for (var p = 0; p < array.length; p++) {
      allPromoter += array[p];
    }
    var totalPromoter = allPromoter / ratigns.length;
    return totalPromoter + ' % Promoter';
  }
  // funcion para los pasives
  function passivePercent(sede, gene) {
    var sede = data[sede];
    var generation = sede[gene];
    var ratigns = generation.ratings;
    var cants = ratigns.length;
    var array = [];
    for (var i = 0; i < cants; i++) {
      var total = ratigns[i].nps.promoters + ratigns[i].nps.passive + ratigns[i].nps.detractors;
      var passive = ((ratigns[i].nps.passive) / total) * 100;
      array.push(passive);
    }
    var allPassive = 0;
    for (var p = 0; p < array.length; p++) {
      allPassive += array[p];
    }
    var totalPassive = allPassive / ratigns.length;
    return totalPassive + ' % Passive';
  }
  // funcion para los detractors
  function detractorPercent(sede, gene) {
    var sede = data[sede];
    var generation = sede[gene];
    var ratigns = generation.ratings;
    var cants = ratigns.length;
    var array = [];
    for (var i = 0; i < cants; i++) {
      var total = ratigns[i].nps.promoters + ratigns[i].nps.passive + ratigns[i].nps.detractors;
      var detractor = ((ratigns[i].nps.detractors) / total) * 100;
      array.push(detractor);
    }
    var allDetractor = 0;
    for (var p = 0; p < array.length; p++) {
      allDetractor += array[p];
    }
    var totalDetractor = allDetractor / ratigns.length;
    return totalDetractor + ' % Detractor';
  }
});
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
