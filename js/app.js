window.addEventListener('load', function(event){
    
        var chooseGeneration = document.querySelector('.choose-sede-generation');
        var optgroupt =document.getElementById('optgroupt');
        var enrollment = document.getElementById('enrollment');
        var generation = document.getElementById('generation');
        var divgeneration = document.getElementById('divgeneration');
        var title = document.getElementById('title');
        var titleGen = document.getElementById('title-gen');
        
        optgroupt.addEventListener('change', function(event){
    
            console.dir(event.target.value);//cada vez que escoja una opción, me arrojará su valor:AQP,LIM,CDMX,SLC.
            var sede = event.target.value;
    
                if (sede === 'AQP') {
                    title.textContent='';
                    title.textContent='AREQUIPA';
                }
    
                if (sede ==='SCL') {
                    title.textContent='';
                    title.textContent='SANTIAGO DE CHILE';
                }
    
                if (sede ==='LIM') {
                    title.textContent='';
                    title.textContent='LIMA';
                }
    
                if (sede === 'CDMX') {
                    title.textContent='';
                    title.textContent='CIUDAD DE MEXICO';
                }
            //var arraySedes = Object.keys(data);["AQP", "CDMX", "LIM", "SCL"]
    
            //generation.setAttribute('onchange', 'generation(this.value)');
    
            console.log(Object.keys(data[sede])); 
            console.log(     Object.keys(data[sede])[0]          );       
    
            
            for(var i = 0; i <= Object.keys(data).length; i++){
                if(event.target.value === Object.keys(data)[i]){
                   // for(var j = 0; j < Object.keys(data[Object.keys(data)[i]]).length; j++){
                    for(var j = 0; j < Object.keys(data[sede]).length; j++){
    
                            var otherlistGeneration = document.createElement('option');
                            otherlistGeneration.classList.add('generations');
                            var textGeneration = document.createTextNode(Object.keys(data[sede])[j]);//Object.keys(data[sede])
                            otherlistGeneration.appendChild(textGeneration);
                            generation.appendChild(otherlistGeneration); 
    
                    }
                }            
            } 
            /*************************************************************************/
            generation.addEventListener('change', function(event){   
                titleGen.textContent = event.target.value;
    
                console.log(Object.keys(data));//devuelve ["AQP", "CDMX", "LIM", "SCL"]
                console.log(sede);// me devuelve el nombre de la sede elegida en el anterior evento.
                console.log(Object.keys(data[sede]));//devuelve ["2016-2", "2017-1"] (sede:representa la propiedad del objeto data elegido en el anterior evento)
                //console.log(event.target.value)
               
                
                for (var item in data){
                    if(item === sede){
                        var dataSede= {};
                        dataSede = data[item];
                    }
    
                }
                console.log(dataSede);//me devuelve el contenido de la sede elegida: {2016-2: {…}, 2017-1: {…}, 2017-2: {…}}
                //debugger
                for(var i in dataSede){
                    if(i === event.target.value){
                        var dataAlumns = {};
                        dataAlumns = dataSede[i].students;
                    }
                }
                console.log(dataAlumns)//tengo a todos los estudiantes de la sede y generación elegida en un array
               
                debugger
                var cont=0;
                for(var k = 0; k<dataAlumns.length;k++){
                  if(dataAlumns[k].active === false)                   
                            cont++;
                }
                console.log(cont);//número de alumnos inactivos
              //alumno[0].active
                /*for(var items in contentDataGeneration){           
                    var dataStudents = items;
                    var contentDataStudents = contentDataGeneration[items];
                }
                console.log(dataStudents);
                console.log(contentDataStudents);
    */
    
                
            });
    
    
    
    
    });
    
                        //var test = "2017-2";
                       /* if(Object.keys(data[sede])[j]==="2017-2"){
                            arra.unshift(Object.keys(data[sede])[j]);
                         }else if(Object.keys(data[sede])[j]==="2017-1"){
                             arra.push(Object.keys(data[sede])[j]);
                         }else {
                             arra.push(Object.keys(data[sede])[j]);
                         }*/
        
        
       /* for(var i = 0; i < Object.keys(data).length; i++){
            if(event.target.value === Object.keys(data)[i]){
                for(var j = 0; j < Object.keys(data[Object.keys(data)[i]]).length; j++){
                    var listGeneration = document.createElement('option');
                    listGeneration.classList.add('generation');
                    var textGeneration = document.createTextNode(Object.keys(data[Object.keys(data)[i]])[j]);
                    listGeneration.appendChild(textGeneration);
                    generation.appendChild(listGeneration);*/
    
       //for(var j = 0; j < Object.keys(data[Object.keys(data)[i]]).length; j++){
       //var textGeneration = document.createTextNode(Object.keys(data[Object.keys(data)[i]])[j]);
    
     // generation.appendChild(listGeneration);
    
    
    /*
    
    
    
          for(var i = 0; i < Object.keys(data).length; i++){
            var listCity = document.createElement('optgroupt');
            listCity.classList.add('optgroupt');
            listCity.setAttribute('label',Object.keys(data)[i]);
            var listText = document.createTextNode(Object.keys(data)[i]);
            listCity.appendChild(listText);
            chooseGeneration.appendChild(listCity);
       
            for(var j = 0; j < Object.keys(data[Object.keys(data)[i]]).length; j++){
              var listGeneration = document.createElement('option');
              listGeneration.classList.add('listGenerationStyle');
              var textGeneration = document.createTextNode(Object.keys(data[Object.keys(data)[i]])[j]);
              listGeneration.appendChild(textGeneration);
              listCity.appendChild(listGeneration);
               
            }
          } 
      });*/
    });
     
    
    //debugger
    console.log(data);
    console.log(Object.keys(data));//["AQP", "CDMX", "LIM", "SCL"]
    console.log(Object.values(data));
    console.log(Object.keys(data)[0]);
    console.log(Object.values(data).length);//[{…}, {…}, {…}, {…}]
    console.log(Object.values(data)[0]);
    console.log([...Object.values(data)])
    console.log([...Object.values(data)][0][0])
    console.log([...Object.values(data)][0])
    console.log(Object.keys([...Object.values(data)][0]))
    console.log(Object.keys(Object.values(data)[0]))
    console.log(Object.keys(Object.values(data)[0]).length);
    //console.log(Object.keys(Object.keys(data)));
    
    
      /*
      var nuevo = data.LIM["2017-2"].students;
      console.log(nuevo);// 14 alumnos (Cada alumno 4 objetos)
      
      console.log(nuevo[0].active);
      
      var alumnos = Object.keys(nuevo);//["name", "photo", "active", "sprints"]
      
      
      
      
      
      
      var cont=0;
      debugger
      for (var i = 0; i<=nuevo.length; i++) {
         if (nuevo[i]['active']=== true){
             cont++;
         }
      }
      console.log(cont);
      
      /*
      
      var cont=0;
      for(var i = 0; i<=nuevo.length; i++){
         for(var j = 0 ; j<= alumnos[j].length; j++){
             if(Object.keys(nuevo[i]).active){
                 cont++;
             }
         }
      }
      */
      
      // Puedes hacer uso de la base de datos a través de la variable `data`