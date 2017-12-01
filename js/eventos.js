//Me aseguro de que mi pagina cargue 
window.addEventListener('load', function() {
    //Llamando al elemento lim2016II del DOM en mi html
     var lima = document.getElementById('lim2016II');
     var promos = document.getElementById('select-promo');
     console.log(lima);
    //Creando el evento click para realizar la funcion
     promos.addEventListener('change',studentsLima);
    function studentsLima(event){ 
      var students = data.LIM['2016-2'].students;
    //Numero de estudiantes por generacion
      var numStudents = students.length;
    
      /*var students = 0;
      for(var i= 0; i<=students.length; i++){
        if(students[i].score === tech){
            students = students[i]
            
        }
       
    
      } */
    
    
      console.log(students);
     };
    });