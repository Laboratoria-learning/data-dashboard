window.addEventListener('load', function(event) {
  var displayFilter = document.getElementById('fa-sort-desc');
  displayFilter.addEventListener('click', function(event) {
    var checkBoxSite = document.getElementById('checkbox-site');
    var classCheckBoxSite = document.getElementsByClassName('checkbox-site')[0];
    if (classCheckBoxSite.style.display = 'none') {
      classCheckBoxSite.style.display = 'block';
      classCheckBoxSite.style.left = '180px';
      classCheckBoxSite.style.up = '30px';
    } else classCheckBoxSite.style.display = 'none';
    console.log(event.target);
  });
});
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
