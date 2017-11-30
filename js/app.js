/* Funcionalidad de tu producto*/
window.addEventListener('load', function() {
  var sede = document.getElementsByClassName('sede');
  var promocion = document.getElementsByClassName('promocion');

  var student = document.getElementById('student');// al quiero hacer click
  var container1 = document.getElementById('container1');// al que quiero que aparezca
  var overview = document.getElementById('overvi');// opcion overview
  var overcon = document.getElementById('overview');// contenido overview
  var lima = document.getElementById('lima'); // el evento clicl select
  var currentStudents = document.getElementById('currentStudents');// mostrar la cantidad de alumnas
  // var par = document.getElementById('par')
  /* function studentsLaboratoria(sede, generacion) { 
  }  
  studentsLaboratoria('Lima', '2017-II');*/
  lima.addEventListener('select', container);
  function container() {
    
  }
  // 1.funcion para la primera solicitud de usuario
  function cantStudents() {
    var sedAlum = data['AQP']['2016-2']['students'];
    
    for (var i = 0; i < n.length ; i++) {
      if (n[i].active === true) {
        var points = n[i].sprints.score.hse;
        // for(var j = 0; j<points.length;j++){
        //  var score1 = [j].score.hse;
              
        // console.log(points);
      } else {
            
        
      }
    }
  }


  student.addEventListener('click', elige);
  function elige() {
    container1.style.display = 'block';
    overcon.style.display = 'none';
  }
  overview.addEventListener('click', over);
  function over() {
    overcon.style.display = 'block';
    container1.style.display = 'none';
  }
  /* menu.addEventListener('click',icono);
  function icono() {
  opcionMenu.style.display = 'block';
  }*/
  
  /* btnmenu.addEventListener('click', showMenu);
  function showMenu() { 
    if (menu.classList.contains('disabled-menu')) { 
      menu.classList.add('enabled-menu'); 
      menu.classList.remove('disabled-menu');
    } else {
      
      menu.classList.add('disabled-menu');
      menu.classList.remove('enabled-menu');
    }
  }*/
  
  
 
   // overview.style.display = 'none';
  /* menu.addEventListener('click', option);
  function option() {
      alert('hola');
    if (opcionMenu.classList.contains('disabled-menu')) {
      opcionMenu.classList.add('enabled-menu');
      opcionMenu.classList.remove('disabled-menu');   
    } else {
      opcionMenu.classList.add('disabled-menu');
      opcionMenu.classList.remove('enabled-menu');
    }
  }*/
});

     
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
