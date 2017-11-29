window.addEventListener('load', function(event) {
  var displayFilter = document.getElementById('fa-sort-desc');
  var displayFilterTwo = document.getElementById('fa-sort-desc2');
  var displayFilterThree = document.getElementById('fa-sort-desc3');

  displayFilter.addEventListener('click', function(event) {
    var checkBoxSite = document.getElementById('checkbox-site');
    var classCheckBoxSite = document.getElementsByClassName('checkbox-site')[0];
    if (classCheckBoxSite.style.display = 'none') {
      classCheckBoxSite.style.display = 'block';
      classCheckBoxSite.style.left = '100px';
      classCheckBoxSite.style.up = '80px';
    } else classCheckBoxSite.style.display = 'none';
  });

  displayFilterTwo.addEventListener('click', function(event) {
    var checkBoxCommonCore = document.getElementById('checkbox-commoncore');
    var classCheckBoxCommonCore = document.getElementsByClassName('checkbox-commoncore')[0];
    if (classCheckBoxSite.style.display = 'none') {
      classCheckBoxSite.style.display = 'block';
      classCheckBoxSite.style.left = '180px';
      classCheckBoxSite.style.up = '30px';
    } else classCheckBoxSite.style.display = 'none';
  });

  displayFilterThree.addEventListener('click', function(event) {
    var checkBoxHse = document.getElementById('checkbox-HSE');
    var classCheckBoxHse = document.getElementsByClassName('checkbox-HSE')[0];
    if (classCheckBoxHse.style.display = 'none') {
      classCheckBoxHse.style.display = 'block';
      classCheckBoxHse.style.left = '80px';
      classCheckBoxHse.style.up = '30px';
    } else classCheckBoxHse.style.display = 'none';
  });
});
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
