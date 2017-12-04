/* console.log(data); */
console.log(data);
window.addEventListener('load', function(event) {
/* evento para botón de especialización javascript */
  var javascriptButton = document.getElementById('javascript-button');
  javascriptButton.addEventListener('click', function(event) {
    alert('es click');
    button.classList.add('desactive');
  });
  /* evento para botón de especialización uxdesing */
  var uxdesignButton = document.getElementById('uxdesign-button');
  uxdesignButton.addEventListener('click', function(event) {
    alert('es click en uxdesing');
  });


  /* evento para botón de especialización front end designer */
  var frontEndDesignerButton = document.getElementById('front-end-designer-button');
  frontEndDesignerButton.addEventListener('click', function(event) {
    alert('es click en front end desing');
    /* para recorrer el array students */

    for (var zz = 0 ; zz < 259 ; zz++) {
      /* ubico área para crear elementos */

      var visualizationSection = document.getElementById('visualization');
      /* creaación de elementos divs */
      /* photo del estudiante */
      var divStudent = document.createElement('div'); /* div con id-student */
      var divPhoto = document.createElement('div'); /* div photo */
      var imgPhoto = document.createElement('img'); /* img con propiedad src */
      divStudent.classList.add('student');
      divPhoto.classList.add('photo');
      imgPhoto.setAttribute('src', students[[zz, 1]]);
      imgPhoto.classList.add('photo-standart');
      visualizationSection.appendChild(divStudent);
      divStudent.appendChild(divPhoto);
      divPhoto.appendChild(imgPhoto);
      /* datos de estudiante */
      var divDate = document.createElement('div'); /* div con id-date */
      var divDateStudent = document.createElement('div'); /* div con id-name */
      var divName = document.createElement('div'); /* div con id-date */
      var divEspecializationStudent = document.createElement('div'); /* div con id-name */
      divDate.classList.add('date');
      divDateStudent.classList.add('date-student');
      divName.classList.add('big-letter');
      divName.classList.add('name');
      divName.classList.add('especialization-student');
      divStudent.appendChild(divDate);
      divDate.appendChild(divDateStudent);
      divDateStudent.appendChild(divName);
      divDateStudent.appendChild(divEspecializationStudent);
      divName.textContent = students[[zz, 0]];
      divEspecializationStudent.textContent = 'Front End Developer';
      /* evaluación técnica */
      var divTechSkills = document.createElement('div');
      var divTech = document.createElement('div');
      var labelPercentTech = document.createElement('label');
      var labelNumberTech = document.createElement('label');
      var brUp1 = document.createElement('br');
      divTechSkills.classList.add('tech-skills');
      labelPercentTech.classList.add('big-letter');
      labelNumberTech.classList.add('little-letter');
      divDate.appendChild(divTechSkills);
      divTechSkills.appendChild(divTech);
      divTech.appendChild(labelPercentTech);
      divTech.appendChild(brUp1);
      divTech.appendChild(labelNumberTech);
      labelPercentTech.textContent = students[[zz, 13]] + ' % ' ;
      labelNumberTech.textContent = ' TECH SKILLS ';
      /* evaluación habilidades blandas */
      var divLifeSkills = document.createElement('div');
      var divLife = document.createElement('div');
      var labelPercentHse = document.createElement('label');
      var brUp2 = document.createElement('br');
      var labelNumberHse = document.createElement('label');
      divLifeSkills.classList.add('life-skills');
      labelPercentHse.classList.add('big-letter');
      labelNumberHse.classList.add('little-letter');
      divDate.appendChild(divLifeSkills);
      divLifeSkills.appendChild(divLife);
      divLife.appendChild(labelPercentHse);
      divLife.appendChild(brUp2);
      divLife.appendChild(labelNumberHse);
      labelPercentHse.textContent = students[[zz, 14]] + ' % ';
      labelNumberHse.textContent = ' LIFE SKILLS ';
      /* evaluación habilidades blandas */
      var divEnglishSkills = document.createElement('div');
      var divEnglish = document.createElement('div');
      var labelIntern = document.createElement('label');
      var brUp3 = document.createElement('br');
      var labelEnglishSkills = document.createElement('label');
      var brUp4 = document.createElement('br');
      var brUp5 = document.createElement('br');
      var brUp6 = document.createElement('br');
      divDate.appendChild(divEnglishSkills);
      divEnglishSkills.appendChild(divEnglish);
      divEnglish.appendChild(labelIntern);
      divEnglish.appendChild(brUp4);
      divEnglish.appendChild(labelEnglishSkills);
      divDate.appendChild(brUp5);
      divDate.appendChild(brUp6);
      divEnglishSkills.classList.add('english-skills');
      labelIntern.classList.add('big-letter');
      labelEnglishSkills.classList.add('little-letter');
      labelIntern.textContent = 'INTERN';
      labelEnglishSkills.textContent = 'ENGLISH SKILLS';
      /* descripción de habilidades técnicas */
      var divSkillsDetails = document.createElement('div');
      var divSkills1 = document.createElement('div');
      var divSkills2 = document.createElement('div');
      var divSkills3 = document.createElement('div');
      var brUp7 = document.createElement('br');
      var brUp8 = document.createElement('br');
      var labelViewPerfil = document.createElement('label');
      var spanI = document.createElement('span');
      var brUp9 = document.createElement('br');
      var brUp10 = document.createElement('br');
      divSkillsDetails.classList.add('skills-details');
      divSkillsDetails.classList.add('little-letter');
      divSkills1.classList.add('skill-1');
      divSkills2.classList.add('skill-2');
      divSkills3.classList.add('skill-3');
      divDate.appendChild(divSkillsDetails);
      divSkillsDetails.appendChild(divSkills1) ;
      divSkillsDetails.appendChild(divSkills2) ;
      divSkillsDetails.appendChild(divSkills3) ;
      divDate.appendChild(brUp7);
      divDate.appendChild(brUp8);
      divDate.appendChild(labelViewPerfil);
      divDate.appendChild(spanI);
      divStudent.appendChild(brUp9);
      divStudent.appendChild(brUp10);
      divSkills1.textContent = '  Javascript  ';
      divSkills2.textContent = '  APIs  ';
      divSkills3.textContent = '  JQuery  ';
      labelViewPerfil.textContent = '  Ver Perfil  ';
      spanI.textContent = 'i' ;
    };
  });
});
