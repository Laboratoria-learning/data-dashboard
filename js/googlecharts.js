google.charts.load('current', {packages: ['corechart']});

/* ****SEDE AREQUIPA**** */
/* -------Total de alumnas por generacion:--------------- */

google.charts.setOnLoadCallback(drawChartTotalStudentsAQP);
function drawChartTotalStudentsAQP() {
  var dataTotalStudentsAQP = google.visualization.arrayToDataTable([
    ['Generación', 'Total', { role: 'style' } ],
    ['Gen 2016-2', numEstudentsAQP20162, 'blue'],
    ['Gen 2016-2', numdesertedAQP20162, 'red'],
    ['Gen 2017-1', numEstudentsAQP20171, 'blue'],
    ['Gen 2017-1', numdesertedAQP20171, 'red'],
  ]);

  var viewTotalStudentsAQP = new google.visualization.DataView(dataTotalStudentsAQP);
  viewTotalStudentsAQP.setColumns([0, 1,
    { calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation' },
    2]);

  var optionsTotalStudentsAQP = {
    title: 'Total alumnas matriculadas y desertoras por generación',
    width: 600,
    height: 400,
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
  };
  var chartTotalStudentsAQP = new google.visualization.ColumnChart(document.getElementById('columnchart1_values'));
  chartTotalStudentsAQP.draw(viewTotalStudentsAQP, optionsTotalStudentsAQP);
}

/* ****SEDE CDMX**** */
/* -------Total de alumnas por generacion:--------------- */
google.charts.setOnLoadCallback(drawChartTotalStudentsCDMX);
function drawChartTotalStudentsCDMX() {
  var dataTotalStudentsCDMX = google.visualization.arrayToDataTable([
    ['Generación', 'Total', { role: 'style' } ],
    ['Gen 2017-1', numEstudentsCDMX20171, 'blue'],
    ['Gen 2017-1', numdesertedCDMX20171, 'red'],
    ['Gen 2017-2', numEstudentsCDMX20172, 'blue'],
    ['Gen 2017-2', numdesertedCDMX20172, 'red'],

  ]);

  var viewTotalStudentsCDMX = new google.visualization.DataView(dataTotalStudentsCDMX);
  viewTotalStudentsCDMX.setColumns([0, 1,
    { calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation' },
    2]);

  var optionsTotalStudentsCDMX = {
    title: 'Total alumnas matriculadas y desertoras por generación',
    width: 600,
    height: 400,
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
  };
  var chartTotalStudentsCDMX = new google.visualization.ColumnChart(document.getElementById('columnchart2_values'));
  chartTotalStudentsCDMX.draw(viewTotalStudentsCDMX, optionsTotalStudentsCDMX);
}

/* ****SEDE LIM**** */
/* -------Total de alumnas por generacion:--------------- */
google.charts.setOnLoadCallback(drawChartTotalStudentsLIM);
function drawChartTotalStudentsLIM() {
  var dataTotalStudentsLIM = google.visualization.arrayToDataTable([
    ['Generación', 'Total', { role: 'style' } ],
    ['Gen 2016-2', numEstudentsLIM20162, 'blue'],
    ['Gen 2016-2', numdesertedLIM20162, 'red'],
    ['Gen 2017-1', numEstudentsLIM20171, 'blue'],
    ['Gen 2017-1', numdesertedLIM20171, 'red'],
    ['Gen 2017-2', numEstudentsLIM20172, 'blue'],
    ['Gen 2017-2', numdesertedLIM20172, 'red'],
  ]);

  var viewTotalStudentsLIM = new google.visualization.DataView(dataTotalStudentsLIM);
  viewTotalStudentsLIM.setColumns([0, 1,
    { calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation' },
    2]);

  var optionsTotalStudentsLIM = {
    title: 'Total alumnas matriculadas y desertoras por generación',
    width: 600,
    height: 400,
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
  };
  var chartTotalStudentsLIM = new google.visualization.ColumnChart(document.getElementById('columnchart3_values'));
  chartTotalStudentsLIM.draw(viewTotalStudentsLIM, optionsTotalStudentsLIM);
}

/* ****SEDE SCL**** */
/* -------Total de alumnas por generacion:--------------- */
google.charts.setOnLoadCallback(drawChartTotalStudentsSCL);
function drawChartTotalStudentsSCL() {
  var dataTotalStudentsSCL = google.visualization.arrayToDataTable([
    ['Generación', 'Total', { role: 'style' } ],
    ['Gen 2016-2', numEstudentsSCL20162, 'blue'],
    ['Gen 2016-2', numdesertedSCL20162, 'red'],
    ['Gen 2017-1', numEstudentsSCL20171, 'blue'],
    ['Gen 2017-1', numdesertedSCL20171, 'red'],
    ['Gen 2017-2', numEstudentsSCL20172, 'blue'],
    ['Gen 2017-2', numdesertedSCL20172, 'red'],
  ]);

  var viewTotalStudentsSCL = new google.visualization.DataView(dataTotalStudentsSCL);
  viewTotalStudentsSCL.setColumns([0, 1,
    { calc: 'stringify',
      sourceColumn: 1,
      type: 'string',
      role: 'annotation' },
    2]);

  var optionsTotalStudentsSCL = {
    title: 'Total alumnas matriculadas y desertoras por generación',
    width: 600,
    height: 400,
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
  };
  var chartTotalStudentsSCL = new google.visualization.ColumnChart(document.getElementById('columnchart4_values'));
  chartTotalStudentsSCL.draw(viewTotalStudentsSCL, optionsTotalStudentsSCL);
}
