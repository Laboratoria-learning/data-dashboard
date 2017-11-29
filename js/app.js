
window.addEventListener('load', function () {
var cont = document.getElementById('contenedor');
var contAlumnas = document.getElementById('alumnas');
var count = 0;

 var active1 = data.AQP["2016-2"]["students"];
for (var i = 0; i <active1.length; i++) {
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
       //    var cuadro =  document.createElement('p');
      //      cuadro.textContent=count;
      //      contAlumnas.appendChild(cuadro);
    }
};
    var aqp2016= data.AQP["2016-2"].students.length; //1
    var aqp2017 = data.AQP["2017-1"].students.length;//2
    var cdmx20171 = data.CDMX["2017-1"].students.length;//3
    var cdmx20172 = data.CDMX["2017-2"].students.length;//4
    var lim20162 = data.LIM["2016-2"].students.length;//5
    var lim20171 = data.LIM["2017-1"].students.length;//6
    var lim20172 = data.LIM["2017-2"].students.length;//7
    var scl20162 = data.SCL["2016-2"].students.length;//8
    var scl20171 = data.SCL["2017-1"].students.length;//9
    var scl20172 = data.SCL["2017-2"].students.length;//10
    var contAlumnasRet = document.createElement('div');
    contAlumnasRet.classList='activas';
    var txtdates = document.createElement('H3');
    txtdates.textContent = 'Desercion Total';
    var dates = document.createElement ('H1');     
    dates.textContent =((count * 100)/(aqp2016+ aqp2017 + cdmx20171 + cdmx20172 + lim20162 + lim20171 + lim20172 + scl20162 + scl20171 + scl20172)).toFixed(2) + '% '; 
    contAlumnasRet.appendChild(txtdates);
    contAlumnasRet.appendChild(dates);   
    cont.appendChild(contAlumnasRet); 
  
});
