//window.addEventListener('load', function() {

var selectPoints = document.getElementById('studentsPoints');
selectPoints.addEventListener('click', showPoints);


//almacenando porcentaje de los estudiantes
    var cont = document.getElementById('container');
    var contStudents = document.getElementById('students');
    var count = 0;

    var active1 = data.AQP["2016-2"]["students"];
    for (var i = 0; i < active1.length; i++) {
        if (active1[i].active === false) {
            count++;
        }
    };
    var active2 = data.AQP["2017-1"]["students"];
    for (var i = 0; i < active2.length; i++) {
        if (active2[i].active === false) {
            count++;
        }
    };
    var active3 = data.CDMX["2017-1"]["students"];
    for (var i = 0; i < active3.length; i++) {
        if (active3[i].active === false) {
            count++;
        }
    };
    var active4 = data.CDMX["2017-1"]["students"];
    for (var i = 0; i < active4.length; i++) {
        if (active4[i].active === false) {
            count++;
        }
    };
    var active5 = data.LIM["2016-2"]["students"];
    for (var i = 0; i < active5.length; i++) {
        if (active5[i].active === false) {
            count++;
        }
    };
    var active6 = data.LIM["2017-1"]["students"];
    for (var i = 0; i < active6.length; i++) {
        if (active6[i].active === false) {
            count++;
        }
    };
    var active7 = data.LIM["2017-2"]["students"];
    for (var i = 0; i < active7.length; i++) {
        if (active7[i].active === false) {
            count++;
        }
    };
    var active8 = data.SCL["2016-2"]["students"];
    for (var i = 0; i < active8.length; i++) {
        if (active8[i].active === false) {
            count++;
        }
    };
    var active9 = data.SCL["2017-1"]["students"];
    for (var i = 0; i < active9.length; i++) {
        if (active9[i].active === false) {
            count++;
        }
    };
    var active10 = data.SCL["2017-2"]["students"];
    for (var i = 0; i < active10.length; i++) {
        if (active10[i].active === false) {
            count++;
        }
    };
    var aqp2016 = data.AQP["2016-2"].students.length;
    var aqp2017 = data.AQP["2017-1"].students.length;
    var cdmx20171 = data.CDMX["2017-1"].students.length;
    var cdmx20172 = data.CDMX["2017-2"].students.length;
    var lim20162 = data.LIM["2016-2"].students.length;
    var lim20171 = data.LIM["2017-1"].students.length;
    var lim20172 = data.LIM["2017-2"].students.length;
    var scl20162 = data.SCL["2016-2"].students.length;
    var scl20171 = data.SCL["2017-1"].students.length;
    var scl20172 = data.SCL["2017-2"].students.length;
    var contStudentsRet = document.createElement('div');
    contStudentsRet.classList = 'active';
    var txtdates = document.createElement('H3');
    txtdates.textContent = 'Desercion Total';
    var dates = document.createElement('H1');
    dates.textContent = ((count * 100) / (aqp2016 + aqp2017 + cdmx20171 + cdmx20172 + lim20162 + lim20171 + lim20172 + scl20162 + scl20171 + scl20172)).toFixed(2) + '% ';
    contStudentsRet.appendChild(txtdates);
    contStudentsRet.appendChild(dates);
    cont.appendChild(contStudentsRet);


//3er filtro

//   var actual = data.AQP["2016-2"]["students"];  


function showPoints() {
   var countSprints = 0;
     if (selectPoints.value === 'arequipa162') {
         for (var i = 0; i < active1.length; i++) {
            for (var j = 0; j < active1[i]['sprints'].length; j++) {
             //   var sprintNote = active1[i]['sprints'][j]['score']['tech'] + active1[i]['sprints'][j]['score']['hse'];             
                if (active1[i]['sprints'][j]['score']['tech'] >= 1260 && active1[i]['sprints'][j]['score']['hse'] >= 840) {
                    countSprints++;
                     var contPoints = document.createElement('textarea');
                    contPoints.classList = 'points';
                    contPoints.textContent = countSprints;
                    contStudents.appendChild(contPoints);
                    
                    contPoints.addEventListener('click', function(){
                        if(contPoints.value){
                            for (var i = 0; i < active1.length; i++) {
                                for (var j = 0; j < active1[i]['sprints'].length; j++) {
                                    if (active1[i]['sprints'][j]['score']['tech'] >= 1260 && active1[i]['sprints'][j]['score']['hse'] >= 840) {
                                       countSprints++;
                                        var listStudentsPoints = document.createElement('textarea');
                                        listStudentsPoints.classList = 'pointsListEstudents';
                                        listStudentsPoints.textContent = (countSprints/100);
                                        contStudents.appendChild(listStudentsPoints);
                             };
                             };                            
                             };

                         };
                    });

                }
            }
        }
         countSprints = '';
    }
   if (selectPoints.value === 'arequipa171') {
       for (var i = 0; i < active2.length; i++) {
           for (var j = 0; j < active2[i]['sprints'].length; j++) {
               var sprintNote = active2[i]['sprints'][j]['score']['tech'] + active2[i]['sprints'][j]['score']['hse'];
               if (sprintNote >= 2330) {
                   countSprints++;
                   var contPoints = document.createElement('textarea');
                   contPoints.classList = 'points';
                   contPoints.textContent = countSprints;
                   contStudents.appendChild(contPoints);
         }
         }
         }
         countSprints = '';
         }
if (selectPoints.value === 'mexico171') {
    for (var i = 0; i < active3.length; i++) {
        for (var j = 0; j < active3[i]['sprints'].length; j++) {
            var sprintNote = active3[i]['sprints'][j]['score']['tech'] + active3[i]['sprints'][j]['score']['hse'];
            if (sprintNote >= 2330) {
                countSprints++;
                var contPoints = document.createElement('textarea');
                contPoints.classList = 'points';
                contPoints.textContent = countSprints;
                contStudents.appendChild(contPoints);
            }
        }
    }
    countSprints = '';
}
   if (selectPoints.value === 'mexico172') {
       for (var i = 0; i < active4.length; i++) {
           for (var j = 0; j < active4[i]['sprints'].length; j++) {
               var sprintNote = active4[i]['sprints'][j]['score']['tech'] + active4[i]['sprints'][j]['score']['hse'];
               if (sprintNote >= 2330) {
                   countSprints++;
                   var contPoints = document.createElement('textarea');
                   contPoints.classList = 'points';
                   contPoints.textContent = countSprints;
                   contStudents.appendChild(contPoints);
               }
           }
       }
       countSprints = '';
   }
 if (selectPoints.value === 'lima162') {
     for (var i = 0; i < active5.length; i++) {
         for (var j = 0; j < active5[i]['sprints'].length; j++) {
             var sprintNote = active5[i]['sprints'][j]['score']['tech'] + active5[i]['sprints'][j]['score']['hse'];
             if (sprintNote >= 2330) {
                 countSprints++;
                 var contPoints = document.createElement('textarea');
                 contPoints.classList = 'points';
                 contPoints.textContent = countSprints;
                 contStudents.appendChild(contPoints);
             }
         }
     }
     countSprints = '';
 }
  if (selectPoints.value === 'lima171') {
      for (var i = 0; i < active6.length; i++) {
          for (var j = 0; j < active6[i]['sprints'].length; j++) {
              var sprintNote = active6[i]['sprints'][j]['score']['tech'] + active6[i]['sprints'][j]['score']['hse'];
              if (sprintNote >= 2330) {
                  countSprints++;
                  var contPoints = document.createElement('textarea');
                  contPoints.classList = 'points';
                  contPoints.textContent = countSprints;
                  contStudents.appendChild(contPoints);
              }
          }
      }
      countSprints = '';
  }
   if (selectPoints.value === 'lima172') {
       for (var i = 0; i < active7.length; i++) {
           for (var j = 0; j < active7[i]['sprints'].length; j++) {
               var sprintNote = active7[i]['sprints'][j]['score']['tech'] + active7[i]['sprints'][j]['score']['hse'];
               if (sprintNote >= 2330) {
                   countSprints++;
                   var contPoints = document.createElement('textarea');
                   contPoints.classList = 'points';
                   contPoints.textContent = countSprints;
                   contStudents.appendChild(contPoints);
               }
           }
       }
       countSprints = '';
   }
 if (selectPoints.value === 'chile171') {
     for (var i = 0; i < active8.length; i++) {
         for (var j = 0; j < active8[i]['sprints'].length; j++) {
             var sprintNote = active8[i]['sprints'][j]['score']['tech'] + active8[i]['sprints'][j]['score']['hse'];
             if (sprintNote >= 2330) {
                 countSprints++;
                 var contPoints = document.createElement('textarea');
                 contPoints.classList = 'points';
                 contPoints.textContent = countSprints;
                 contStudents.appendChild(contPoints);
             }
         }
     }
     countSprints = '';
 }
 if (selectPoints.value === 'chile172') {
     for (var i = 0; i < active9.length; i++) {
         for (var j = 0; j < active9[i]['sprints'].length; j++) {
             var sprintNote = active9[i]['sprints'][j]['score']['tech'] + active9[i]['sprints'][j]['score']['hse'];
             if (sprintNote >= 2330) {
                 countSprints++;
                 var contPoints = document.createElement('textarea');
                 contPoints.classList = 'points';
                 contPoints.textContent = countSprints;
                 contStudents.appendChild(contPoints);
             }
         }
     }
     countSprints = '';
 }





















};
//});
  
    
    
  


