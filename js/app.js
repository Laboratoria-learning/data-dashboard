/*
 * Funcionalidad de tu producto
 */
var showHide = function(e) {
    var tabs = e.target.dataset.selecttab;
    var overContent = document.getElementById('overview-tab');
    var studentsTab = document.getElementById('students-tab');
    if(tabs === 'overview'){
      console.log('bien hecho');
      //ocultar students y teachers
      //mostrar info de overview
      var changeOne = overContent.style.display = 'block';
      change.toggle('overview-tab');
    } else if (tabs === 'students'){
      console.log('vas bien');
      //ocultar overview y teachers
      changeOne.toggle('overview-tab');
      //mostrar students
      var changeTwo = studentsTab.style.display = 'block';
      
    changeTwo.toggle('students-tab');
    } if (tabs === 'teachers')
      console.log('lo lograste');
      //ocultar students y overview
      //mostrar teachers
  }
  var chargePage = function() {
    var tabElements = document.getElementsByClassName('tabBtn');
    for(var i = 0; i < tabElements.length; i++) {
      tabElements[i].addEventListener('click', showHide);
    }
  }
  
  chargePage();

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
