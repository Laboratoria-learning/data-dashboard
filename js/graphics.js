/* Aseguramos que cargue la libreria antes de aplicar las funciones*/
google.charts.load('current', {packages: ['corechart']});
/* GRAFICO PARA LA CONTENEDOR DIV "ENROLLMENT" */
google.charts.setOnLoadCallback(enrollmentGraphic);
function enrollmentGraphic(dropout, students) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    [' Deserting Students', dropout],
    ['Active Students', students]
  ]
  );
  var opciones = {'width': 350,
    'height': 180,
  };
  var graphic = new google.visualization.PieChart(document.getElementById('graphic-enrollment'));
  graphic.draw(data, opciones);
}
/* GRAFICO PARA LA CONTENEDOR DIV "ACHIEVEMENT" */
google.charts.setOnLoadCallback(achievementGraphic);
function achievementGraphic(goalAccomplished, goalNotMet) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    ['Students that meet the target ', goalAccomplished],
    ['Students that not meet the target', goalNotMet]
  ]
  );
  var opciones = {'width': 350,
    'height': 180,
  };
  var graphic = new google.visualization.PieChart(document.getElementById('graphic-achievement'));
  graphic.draw(data, opciones);
}
/* GRAFICO PARA LA CONTENEDOR DIV "NET PROMOTER SCORE" */
google.charts.setOnLoadCallback(netPromoterScoreGraphic);
function netPromoterScoreGraphic(promoters, passive, detractors) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    ['Promoters', promoters],
    ['Passive', passive],
    ['Detractors', detractors]
  ]
  );
  var opciones = {'width': 350,
    'height': 180,
  };
  var graphic = new google.visualization.PieChart(document.getElementById('graphic-net-promoter-score'));
  graphic.draw(data, opciones);
}
/* GRAFICOS PARA DE LOS CONTENEDORES VACIOS DIV "TECH SKILLS" */
/* Grafico general: total de estudiantes que superan la meta de puntos tÉcnicos en promedio*/
google.charts.setOnLoadCallback(techSkillsGraphic);
function techSkillsGraphic(techGoalAccomplished, techGoalNotMet) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    ['Students that meet the technological goal', techGoalAccomplished],
    ['Students that not meet technological goal', techGoalNotMet]
  ]
  );
  var opciones = {'width': 400,
    'height': 320,
  };
  var graphic = new google.visualization.PieChart(document.getElementById('graphic-tech-skills'));
  graphic.draw(data, opciones);
}
/* Grafico especifico(por sprint): total de estudiantes que superan la meta de puntos tÉcnicos en promedio por sprints*/
google.charts.setOnLoadCallback(techSkillsSprintsGraphic);
function techSkillsSprintsGraphic(techSprintOne, techSprintTwo, techSprintThree, techSprintFour) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    ['Sprint 1', techSprintOne],
    ['Sprint 2', techSprintTwo],
    ['Sprint 3', techSprintThree],
    ['Sprint 4', techSprintFour]
  ]
  );
  var opciones = {'width': 530,
    'height': 360,
  };
  var graphic = new google.visualization.ColumnChart(document.getElementById('graphic-tech-skills-sprints'));
  graphic.draw(data, opciones);
}
/* Grafico : total de estudiantes que superan la meta de puntos tÉcnicos en promedio por SPRINT*/
google.charts.setOnLoadCallback(techSkillsSprintGraphic);
function techSkillsSprintGraphic(techGoalAccomplishedSprint, techGoalNotMetSprint) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    ['Students that meet the technological goal for sprint', techGoalAccomplishedSprint],
    ['Students that not meet technological goal for sprint', techGoalNotMetSprint]
  ]
  );
  var opciones = {'width': 300,
    'height': 180,
  };
  var graphic = new google.visualization.PieChart(document.getElementById('graphic-tech-skills-sprint'));
  graphic.draw(data, opciones);
}
/* GRAFICO PARA LA CONTENEDOR DIV "LIFE SKILLS" */
/* Grafico general: total de estudiantes que superan la meta de puntos life en promedio*/
google.charts.setOnLoadCallback(lifesSkillsGraphic);
function lifesSkillsGraphic(lifeGoalAccomplished, lifeGoalNotMet) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    ['Students that meet the attitudinal goal', lifeGoalAccomplished],
    ['Students that not meet attitudinal goal', lifeGoalNotMet]
  ]
  );
  var opciones = {'width': 400,
    'height': 320,
  };
  var graphic = new google.visualization.PieChart(document.getElementById('graphic-lifes-skills'));
  graphic.draw(data, opciones);
}
/* Grafico especifico(por sprint): total de estudiantes que superan la meta de puntos tÉcnicos en promedio por sprint*/
google.charts.setOnLoadCallback(lifeSkillsSprintsGraphic);
function lifeSkillsSprintsGraphic(lifeSprintOne, lifeSprintTwo, lifeSprintThree, lifeSprintFour) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    ['Sprint 1', lifeSprintOne],
    ['Sprint 2', lifeSprintTwo],
    ['Sprint 3', lifeSprintThree],
    ['Sprint 4', lifeSprintFour]
  ]
  );
  var opciones = {'width': 530,
    'height': 360,
  };
  var graphic = new google.visualization.ColumnChart(document.getElementById('graphic-lifes-Skills-sprints'));
  graphic.draw(data, opciones);
}
/* Grafico : total de estudiantes que superan la meta de puntos tÉcnicos en promedio por SPRINT*/
google.charts.setOnLoadCallback(lifeSkillsSprintGraphic);
function lifeSkillsSprintGraphic(lifeGoalAccomplishedSprint, lifeGoalNotMetSprint) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    ['Students that meet the attitudinal goal for sprint', lifeGoalAccomplishedSprint],
    ['Students that not meet attitudinal goal for sprint', lifeGoalNotMetSprint]
  ]
  );
  var opciones = {'width': 300,
    'height': 200,
  };
  var graphic = new google.visualization.PieChart(document.getElementById('graphic-life-skills-sprint'));
  graphic.draw(data, opciones);
}
/* GRAFICO PARA LA CONTENEDOR DIV "STUDENT SATISFACTION" */
google.charts.setOnLoadCallback(studentSatisfactionGraphic);
function studentSatisfactionGraphic(studentSatisfactionOne, studentSatisfactionTwo, studentSatisfactionThree, studentSatisfactionFour) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    ['Sprint 1', studentSatisfactionOne],
    ['Sprint 2', studentSatisfactionTwo],
    ['Sprint 3', studentSatisfactionThree],
    ['Sprint 4', studentSatisfactionFour]
  ]
  );
  var opciones = {'width': 350,
    'height': 180,
  };
  var graphic = new google.visualization.ComboChart(document.getElementById('graphic-student-satisfaction'));
  graphic.draw(data, opciones);
}
/* GRAFICO PARA LA CONTENEDOR DIV "TEACHER RATING" */
google.charts.setOnLoadCallback(teacherRatingGraphic);
function teacherRatingGraphic(teacherRatingOne, teacherRatingTwo, teacherRatingThree, teacherRatingFour) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    ['Sprint 1', teacherRatingOne],
    ['Sprint 2', teacherRatingTwo],
    ['Sprint 3', teacherRatingThree],
    ['Sprint 4', teacherRatingFour]
  ]
  );
  var opciones = {'width': 350,
    'height': 180,
  };
  var graphic = new google.visualization.ComboChart(document.getElementById('graphic-teacher-rating'));
  graphic.draw(data, opciones);
}
/* GRAFICO PARA LA CONTENEDOR DIV "JEDI MASTER RATING" */
google.charts.setOnLoadCallback(jediMasterRatingGraphic);
function jediMasterRatingGraphic(jediMasterRatingOne, jediMasterRatingTwo, jediMasterRatingThree, jediMasterRatingFour) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'students');
  data.addColumn('number', 'quantity');
  data.addRows([
    ['Sprint 1', jediMasterRatingOne],
    ['Sprint 2', jediMasterRatingTwo],
    ['Sprint 3', jediMasterRatingThree],
    ['Sprint 4', jediMasterRatingFour]
  ]
  );
  var opciones = {'width': 350,
    'height': 180,
  };
  var graphic = new google.visualization.ComboChart(document.getElementById('graphic-jedi-master-rating'));
  graphic.draw(data, opciones);
}
