
var filtrarElementos = function (e) {
    var selectedIndex = e.target.selectedIndex;
    //manejamos los atributos data 
    var sede = e.target[selectedIndex].dataset.sede;
    var yearGen = e.target[selectedIndex].dataset.yearGen;
    
    obtenerDatos(data,sede,yearGen)
    
}

 

     var pintarCoders = function(nombre,techPercentage,hsePercentage){
    var contenedorCoders = document.getElementById("contenedor-coders");
    var coder = document.createElement("div");
    var fotoCoder = document.createElement("img");
    
    var nombreCoder = document.createElement("p");
    var tituloTech= document.createElement("p");
    var tech = document.createElement("p");
    var tituloHse= document.createElement("p");
    var hse = document.createElement("p");
    var techDiv=document.createElement("div");
    var hseDiv=document.createElement("div");
    

    fotoCoder.src = "http://lorempixel.com/200/200/people/";
    fotoCoder.classList ="foto-coder";
    nombreCoder.textContent = nombre;
    nombreCoder.classList="nombre";
    tech.textContent = techPercentage;
    hse.textContent = hsePercentage;
    tituloHse.textContent="Promedio HSE"
    tituloTech.textContent="Promedio Tech"
    coder.classList="coder"
    techDiv.classList="puntajesDiv"
    hseDiv.classList="puntajesDiv1"
    tech.classList = "promedioTech";
    hse.classList = "promedioHse";
    

    
    coder.appendChild(fotoCoder)
    coder.appendChild(nombreCoder)
    
    techDiv.appendChild(tituloTech)
    techDiv.appendChild(tech)
    hseDiv.appendChild(tituloHse)
    hseDiv.appendChild(hse)
    coder.appendChild(techDiv)
    coder.appendChild(hseDiv)
    
    contenedorCoders.appendChild(coder);
   // obtenerDatos(data,sede,yearGen)
    
}

  

  var pintarOverview = function(npsTotal,totalStudents,inscritas,drop,porcentajeDrop,totalAchieveGoalHse,totalAchieveGoalTech,porcentajeAchieveHse,porcentajeAchieveTech,promotersAverage,detractorsAverage,passiveAverage,satisfaccionAverage,jediAverage,teacherAverage){
  var contenedorOverview = document.getElementById("contenedor-coders");
  var overviewCont=document.createElement("div")
  var enrollement = document.createElement("div");
  
  var achievement=document.createElement("div");
 
  var nps = document.createElement("div");
  
  var satisfaccionDiv=document.createElement("div");
  
  var teacherDiv=document.createElement("div")
  
  var jediDiv=document.createElement("div")
  
  

  var grafica = document.createElement("img");
  var grafica2 = document.createElement("img");
  var grafica3 = document.createElement("img");
  var grafica4 = document.createElement("img");
  var grafica5 = document.createElement("img");
  var grafica6 = document.createElement("img");
  var tituloEnrollement=document.createElement("p");
  var tituloAchievement=document.createElement("p");
  var tituloNps=document.createElement("p");
  var tituloAlumnasTotales=document.createElement("p");
  var alumnasTotales=document.createElement("p");
  var tituloAlumnasInscritas=document.createElement("p");
  var alumnasInscritas= document.createElement("p");
  var tituloAlumnasDesertoras= document.createElement("p");
  var desertoras = document.createElement("p");
  var tituloPorcentajeDesercion= document.createElement("p");
  var porcentajeDesercion = document.createElement("p");
  
  var tituloNumeroSuperaHse= document.createElement("p");
  var tituloNumeroSuperaTech= document.createElement("p");
  var tituloPorcentajeSuperaHse= document.createElement("p");
  var tituloPorcentajeSuperaTech= document.createElement("p");
  var numeroQueSuperaHse=document.createElement("p");
  var numeroQueSuperaTech=document.createElement("p");
  var porcentajeQueSuperaHse=document.createElement("p");
  var porcentajeQueSuperaTech=document.createElement("p");
  var npsPromoters=document.createElement("p");
  var npsDetractors=document.createElement("p");
  var npsPassive=document.createElement("p");
  var titleNpsPromoters=document.createElement("p");
  var titleNpsDetractors=document.createElement("p");
  var titleNpsPassive=document.createElement("p");
  var tituloSatisfaccion=document.createElement("p")
  var numerosSatisfaccion=document.createElement("p")
  var tituloTeacher=document.createElement("p")
  var tituloJedi=document.createElement("p")
  var teacherNumbers=document.createElement("p")
  var jediNumbers=document.createElement("p")
  
  
  enrollement.classList="enrollement"
  achievement.classList="achievement"
  nps.classList="nps"
  satisfaccionDiv.classList="satisfaccionDiv"
  teacherDiv.classList="teacherDiv"
  jediDiv.classList="jediDiv"
  
  npsPromoters.textContent=promotersAverage;
  npsPromoters.classList = "numerosOverview";
  npsDetractors.textContent=detractorsAverage;
  npsDetractors.classList = "numerosOverview";
  npsPassive.textContent=passiveAverage;
  npsPassive.classList = "numerosOverview";
  titleNpsPromoters.textContent="Promoters"
  titleNpsDetractors.textContent="Detractors"
  titleNpsPassive.textContent="Passive"

  tituloSatisfaccion.textContent="STUDENT SATISFACTION"
  tituloSatisfaccion.classList="titulosOverview"

  numerosSatisfaccion.textContent=satisfaccionAverage;
  numerosSatisfaccion.classList = "numerosOverview";
  tituloNps.innerHTML="NPS";
  tituloNps.classList="titulosOverview"
  tituloEnrollement.textContent="ENROLLEMENT"
  tituloEnrollement.classList="titulosOverview"
  tituloAchievement.textContent="ACHIEVEMENT"
  tituloAchievement.classList="titulosOverview"
  tituloPorcentajeDesercion.textContent="PORCENTAJE DE DESERCION"
  tituloPorcentajeDesercion.classList="titulosOverview"
  tituloAlumnasDesertoras.textContent="Alumnas que desertaron"
  tituloAlumnasInscritas.textContent="Alumnas inscritas"
  tituloAlumnasTotales.textContent="Alumnas totales"
  alumnasTotales.textContent = totalStudents;
  alumnasTotales.classList = "numerosOverview";

  alumnasInscritas.textContent = inscritas;
  alumnasInscritas.classList = "numerosOverview";

  grafica.src = "assets/images/bar-graph.png";
  grafica2.src ="assets/images/graph.png" ;
  grafica3.src = "assets/images/graph.png";
  grafica4.src = "assets/images/circle-graphic.png";
  grafica5.src = "assets/images/bar-graph.png";
  grafica6.src = "assets/images/graph.png";
  desertoras.textContent = drop;
  desertoras.classList = "numerosOverview";
  porcentajeDesercion.textContent = porcentajeDrop;
  porcentajeDesercion.classList = "numerosOverview";

  tituloNumeroSuperaHse.textContent="Numero de alumnas que supera HSE"
  tituloNumeroSuperaTech.textContent="Numero de alumnas que supera TECH"
  tituloPorcentajeSuperaHse.textContent="Porcentaje de alumnas que supera HSE"
  tituloPorcentajeSuperaTech.textContent="Porcentaje de alumnas que supera TECH"
  numeroQueSuperaHse.textContent=totalAchieveGoalHse;
  numeroQueSuperaHse.classList = "numerosOverview";
  numeroQueSuperaTech.textContent=totalAchieveGoalTech;
  numeroQueSuperaTech.classList = "numerosOverview";
  porcentajeQueSuperaHse.textContent=porcentajeAchieveHse;
  porcentajeQueSuperaHse.classList = "numerosOverview";
  porcentajeQueSuperaTech.textContent=porcentajeAchieveTech;
  porcentajeQueSuperaTech.classList = "numerosOverview";
  tituloTeacher.textContent="TEACHERS"
  tituloTeacher.classList="titulosOverview"
  tituloJedi.textContent="JEDIS"
  tituloJedi.classList="titulosOverview"
  teacherNumbers.textContent=teacherAverage;
  teacherNumbers.classList = "numerosOverview";
  jediNumbers.textContent=jediAverage;
  jediNumbers.classList = "numerosOverview";
  

  
  enrollement.appendChild(tituloEnrollement)
  enrollement.appendChild(tituloAlumnasTotales)
  enrollement.appendChild(alumnasTotales)
  enrollement.appendChild(tituloAlumnasInscritas)
  enrollement.appendChild(alumnasInscritas)  
  enrollement.appendChild(tituloAlumnasDesertoras)
  enrollement.appendChild(desertoras)   
  enrollement.appendChild(tituloPorcentajeDesercion)
 enrollement.appendChild(porcentajeDesercion)  
 enrollement.appendChild(grafica)     
achievement.appendChild(tituloAchievement)
achievement.appendChild(tituloNumeroSuperaHse)
achievement.appendChild(numeroQueSuperaHse)
achievement.appendChild(tituloPorcentajeSuperaHse)
achievement.appendChild(porcentajeQueSuperaHse)
achievement.appendChild(tituloNumeroSuperaTech)
achievement.appendChild(numeroQueSuperaTech)
achievement.appendChild(tituloPorcentajeSuperaTech)
achievement.appendChild(porcentajeQueSuperaTech)
achievement.appendChild(grafica2)
  

  nps.appendChild(tituloNps)
  nps.appendChild(titleNpsPromoters)
  nps.appendChild(npsPromoters)
  nps.appendChild(titleNpsDetractors)
  nps.appendChild(npsDetractors)
  nps.appendChild(titleNpsPassive)
  nps.appendChild(npsPassive)
  nps.appendChild(grafica3)

  satisfaccionDiv.appendChild(tituloSatisfaccion)
  satisfaccionDiv.appendChild(numerosSatisfaccion)
  satisfaccionDiv.appendChild(grafica4)
  
  teacherDiv.appendChild(tituloTeacher)
  teacherDiv.appendChild(teacherNumbers)
  teacherDiv.appendChild(grafica5)
  
  jediDiv.appendChild(tituloJedi)
  jediDiv.appendChild(jediNumbers)
  jediDiv.appendChild(grafica6)
  



  
  
  overviewCont.appendChild(enrollement);
  overviewCont.appendChild(achievement);
  overviewCont.appendChild(nps);
  overviewCont.appendChild(satisfaccionDiv);
  overviewCont.appendChild(teacherDiv);
  overviewCont.appendChild(jediDiv);
  contenedorOverview.appendChild(overviewCont);



 // obtenerDatos(data,sede,yearGen)


}


 
 // obtener datos de estudiantes por medio de for 
    var obtenerDatos = function(datos,sede,yearGen){
      document.getElementById("contenedor-coders").innerHTML = "";
      var ratings=data[sede][yearGen]["ratings"];
      var student= datos[sede][yearGen]["students"];
      var inscritas=0;
      var drop=0;
    
     var totalAchieveGoalHse=0;
     var totalAchieveGoalTech=0;
      var totalStudents=data[sede][yearGen]["students"].length;
      
      
     
      for(var i = 0 ; i < student.length; i ++){
       
        var name = student[i].name;
        var foto=student[i].photo;
        var active = student[i].active;
        var sprints=data[sede][yearGen]["students"][i]["sprints"];
        var porcentajeDrop=Math.round(drop*100/totalStudents)+"%" ;
        var hse=0;
        var tech=0;
        console.log(name)
        
       if(active==true){
        inscritas+=1;
      }else{
        drop+=1;
      }
     
       for (var j=0; j<student[i]["sprints"].length; j++){
        hse+= student[i]["sprints"][j]["score"]["hse"];
        tech+=student[i]["sprints"][j]["score"]["tech"];
       
      }

    
       averageHse=Math.round(hse/student[i]["sprints"].length);
       averageTech=Math.round(tech/student[i]["sprints"].length);
       var hsePercentage=Math.round((averageHse*100)/1200)+"%";
       var techPercentage=Math.round((averageTech*100)/1800)+"%";
       
       console.log();
       console.log(hsePercentage);

       if(averageHse>840){
         totalAchieveGoalHse+=1;
         var porcentajeAchieveHse=Math.round(totalAchieveGoalHse*100/totalStudents)+"%";
       } else if(averageHse==NaN){
         return "0";
       }
        if(averageTech>1260){
          totalAchieveGoalTech+=1;
          var porcentajeAchieveTech=Math.round(totalAchieveGoalTech*100/totalStudents)+"%";
        } else if(averageTech==NaN){
          return "0";
        }
       
      pintarCoders(name,techPercentage,hsePercentage);
         
     }
      

     var jedi=0;
     var teacher=0;
     var satisfaccion=0;
     var promoters=0;
     var passive=0;
     var detractors=0;

     
     for(var i= 0 ; i < ratings.length; i ++){
    var nps=ratings[i].nps;
    var sprintsRatings=ratings[i].sprint;
      
     
      promoters+=ratings[i].nps.promoters;
      detractors+=ratings[i].nps.detractors;
      passive+=ratings[i].nps.passive;
      satisfaccion+=ratings[i].student.cumple;
      teacher+=ratings[i].teacher;
      jedi+=ratings[i].jedi;


     var jediAverage=(jedi/ratings.length);
     var teacherAverage=(teacher/ratings.length);
     var satisfaccionAverage=Math.round((satisfaccion/ratings.length))+"%";
    var promotersAverage=Math.round((promoters/ratings.length))+"%";
    var passiveAverage=Math.round((passive/ratings.length))+"%";
    var detractorsAverage=Math.round((detractors/ratings.length))+"%";
    var npsTotal=(promotersAverage-detractorsAverage);
    
   // console.log(totalNps);

    // console.log(promoters)
     
     
    /* for ( var l=0; l<sprintsRatings.length; l++){
       promoters+=sprintsRatings[l]["promoters"];
       detractors+=ratings[i]["sprint"][l]["detractors"];
       passive+=ratings[i]["sprint"][l]["promoters"];
       satisfaccion+=ratings[i]["sprint"][l]["promoters"];
       teacher+=ratings[i].teacher;
       jedi+=ratings[i].jedi;
       nps=promoters-detractors;
       console.log(nps);
     }*/
    
     
    }
  
      
       
       pintarOverview(npsTotal,totalStudents,inscritas,drop,porcentajeDrop,totalAchieveGoalHse,totalAchieveGoalTech,porcentajeAchieveHse,porcentajeAchieveTech,promotersAverage,detractorsAverage,passiveAverage,satisfaccionAverage,jediAverage,teacherAverage)
       
      }
    
    
    /*  var overviewBotton= function(){
        document.getElementById("overviewButton").addEventListener("click",pintarOverview);
      }
      var studentsBotton= function(){
        document.getElementById("overviewButton").addEventListener("click",pintarStudents);
      }*/

      /*----------------------------------*/

      //obtener datos overview

  /*    var obtenerDatos = function(datos,sede,yearGen){
        document.getElementById("contenedor-coders").innerHTML = "";
        var ratings=data[sede][yearGen]["ratings"];
        var student= datos[sede][yearGen]["students"];
        var inscritas=0;
        var drop=0;
      
       var totalAchieveGoalHse=0;
       var totalAchieveGoalTech=0;
        var totalStudents=data[sede][yearGen]["students"].length;
        
        
       
        for(var i = 0 ; i < student.length; i ++){
         
          var name = student[i].name;
          var foto=student[i].photo;
          var active = student[i].active;
          var sprints=data[sede][yearGen]["students"][i]["sprints"];
          var porcentajeDrop=drop*100/totalStudents ;
          var hse=0;
          var tech=0;
          console.log(name)
          
         if(active==true){
          inscritas+=1;
        }else{
          drop+=1;
        }
       
         for (var j=0; j<student[i]["sprints"].length; j++){
          hse+= student[i]["sprints"][j]["score"]["hse"];
          tech+=student[i]["sprints"][j]["score"]["tech"];
        }
         averageHse=hse/student[i]["sprints"].length;
         averageTech=tech/student[i]["sprints"].length;
  
         if(averageHse>840){
           totalAchieveGoalHse+=1;
           var porcentajeAchieveHse=totalAchieveGoalHse*100/totalStudents;
         } 
          if(averageTech>1260){
            totalAchieveGoalTech+=1;
            var porcentajeAchieveTech=totalAchieveGoalTech*100/totalStudents;
          }
         
       //  pintarCoders(name,averageTech,averageHse);
           
       }
        
  
       
       
       for(var i= 0 ; i < ratings.length; i ++){
      var nps=ratings[i].nps;
      var sprintsRatings=ratings[i].sprint;
        
       
       var promoters=ratings[i].nps.promoters;
       var detractors=ratings[i].nps.detractors;
       var passive=ratings[i].nps.passive;
       var satisfaccion=ratings[i].student.cumple;
       var teacher=ratings[i].teacher;
       var jedi=ratings[i].jedi;
  
       console.log(promoters)
       console.log()
       
       for ( var l=0; l<sprintsRatings.length; l++){
         promoters+=sprintsRatings[l]["promoters"];
         detractors+=ratings[i]["sprint"][l]["detractors"];
         passive+=ratings[i]["sprint"][l]["promoters"];
         satisfaccion+=ratings[i]["sprint"][l]["promoters"];
         teacher+=ratings[i].teacher;
         jedi+=ratings[i].jedi;
        // console.log(promoters);
       }
      
       
      }
    
        
         
     //    pintarOverview(totalStudents,inscritas,drop,porcentajeDrop,totalAchieveGoalHse,totalAchieveGoalTech,porcentajeAchieveHse,porcentajeAchieveTech,promoters,detractors,passive,satisfaccion,jedi,teacher)
         
        }
      
      
       /* var overviewBotton= function(){
          document.getElementById("overviewButton").addEventListener("click",pintarOverview);
        }
        var studentsBotton= function(){
          document.getElementById("overviewButton").addEventListener("click",pintarStudents);
        }*/



