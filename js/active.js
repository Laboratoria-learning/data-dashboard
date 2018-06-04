// VARIABLES THAT DEFINE EACH OPTION FROM THE SELECT
var smsAqpOne = document.getElementById("filter").options[1];
var smsAqpTwo = document.getElementById("filter").options[2];
var smsCdMxOne = document.getElementById("filter").options[3];
var smsCdMxTwo = document.getElementById("filter").options[4];
var smsLimaOne = document.getElementById("filter").options[5];
var smsLimaTwo = document.getElementById("filter").options[6];
var smsLimaThree = document.getElementById("filter").options[7];
var smsSclOne = document.getElementById("filter").options[8];
var smsSclTwo = document.getElementById("filter").options[9];
var smsSclThree = document.getElementById("filter").options[10];

// ADDS AN EVENT TO THE VARIABLES 
function semester (){
    smsAqpOne.addEventListener("change",showSemester);
    smsAqpTwo.addEventListener("change",showSemester);
    smsCdMxOne.addEventListener("change",showSemester);
    smsCdMxTwo.addEventListener("change",showSemester);
    smsLimaOne.addEventListener("change",showSemester);
    smsLimaTwo.addEventListener("change",showSemester);
    smsLimaThree.addEventListener("change",showSemester);
    smsSclOne.addEventListener("change", showSemester);
    smsSclTwo.addEventListener("change",showSemester);
    smsSclThree.addEventListener("chagne",showSemester);
};

//HOW MANY STUDENTS THERE ARE IN AREQUIPA EACH SEMESTER
var stAQP162 = data['AQP']['2016-2']['students'].length;
var stAQP171 = data['AQP']['2017-1']['students'].length;

//HOW MANY STUDENTS THERE ARE IN MEXICO CITY EACH SEMESTER
var stCMDX171 = data['CDMX']['2017-1']['students'].length;
var stCMDX172 = data['CDMX']['2017-2']['students'].length;

//HOW MANY STUDENTS THERE ARE IN LIMA EACH SEMESTER
var stLIM162 = data['LIM']['2016-2']['students'].length;
var stLIM171 = data['LIM']['2017-1']['students'].length;
var stLIM172 = data['LIM']['2017-2']['students'].length;

//HOW MANY STUDENTS THERE ARE IN SANTIAGO EACH SEMESTER
var stSCL162 = data['SCL']['2016-2']['students'].length;
var stSCL171 = data['SCL']['2017-1']['students'].length;
var stSCL172 = data['SCL']['2017-2']['students'].length;


//SUM OF STUDENTS FOR LOCATION
var sumStudentsAQP = stAQP162 + stAQP171
var sumStudentsCDMX = stCMDX171 + stCMDX172
var sumStudentsLIM = stLIM162 + stLIM171 + stLIM172 
var sumStudentsSCL = stSCL162 + stSCL171 + stSCL172 


var arrayActive = []
var arrayInactive = []

//LIST OF ALL THE OBJECTS INSIDE THE PROPERTY STUDENTS

//AREQUIPA 2016-2
var totalStAQP1 = data['AQP']['2016-2']['students'];
// console.log(totalStAQP1);

//AREQUIPA 2017-1
var totalStAQP2 = data['AQP']['2017-1']['students'];
// console.log(totalStAQP2);

//MEXICO CITY 2017-1
var totalStCDMX1 = data['CDMX']['2017-1']['students'];
// console.log(totalStCDMX1);

//MEXICO CITY 2017-2
var totalStCDMX2 = data['CDMX']['2017-2']['students'];
// console.log(totalStCDMX2);

//LIMA 2016-2
var totalStLIM1 = data['LIM']['2016-2']['students'];
// console.log(totalStLIM1);

//LIMA 2017-1
var totalStLIM2 = data['LIM']['2017-1']['students'];
// console.log(totalStLIM2);

//LIMA 2017-2
var totalStLIM3 = data['LIM']['2017-2']['students'];
// console.log(totalStLIM3);

//SANTIAGO 2016-1
var totalStSCL1 = data['LIM']['2016-2']['students'];
// console.log(totalStSCL1);

//SANTIAGO 2017-1
var totalStSCL2 = data['LIM']['2017-1']['students'];
// console.log(totalStSCL2);

//SANTIAGO 2017-1
var totalStSCL3 = data['LIM']['2017-2']['students'];
// console.log(totalStSCL3);

//COUNTER FOR ACTIVE STUDENTS IN AQP 2016-2
var activeAQP1 = 0;

for (var i=0; i<totalStAQP1.length; i++){
    var counterASA1 = totalStAQP1[i];
    if (counterASA1.active == true){
        activeAQP1++;
    }
}
// console.log(activeAQP1);

//COUNTER FOR ACTIVE STUDENTS IN AQP 2017-1
var activeAQP2 = 0;

for (var i=0; i<totalStAQP2.length; i++){
    var counterASA2 = totalStAQP2[i];
    if (counterASA2.active == true){
        activeAQP2++;
    }
}
// console.log(activeAQP2);

//COUNTER FOR ACTIVE STUDENTS IN CDMX 2016-2
var activeCDMX1 = 0;

for (var i=0; i<totalStCDMX1.length; i++){
    var counterASM1 = totalStCDMX1[i];
    if (counterASM1.active == true){
        activeCDMX1++;
    }
}
// console.log(activeCDMX1);

//COUNTER FOR ACTIVE STUDENTS IN CDMX 2017-1
var activeCDMX2 = 0;

for (var i=0; i<totalStCDMX2.length; i++){
    var counterASM2 = totalStCDMX2[i];
    if (counterASM2.active == true){
        activeCDMX2++;
    }
}
// console.log(activeCDMX2);

//COUNTER FOR ACTIVE STUDENTS IN LIMA 2016-2
var activeLIM1 = 0;

for (var i=0; i<totalStLIM1.length; i++){
    var counterASL1 = totalStLIM1[i];
    if (counterASL1.active == true){
        activeLIM1++;
    }
}
// console.log(activeLIM1);

//COUNTER FOR ACTIVE STUDENTS IN LIMA 2017-1
var activeLIM2 = 0;

for (var i=0; i<totalStLIM2.length; i++){
    var counterASL2 = totalStLIM2[i];
    if (counterASL2.active == true){
        activeLIM2++;
    }
}
// console.log(activeLIM2);

//COUNTER FOR ACTIVE STUDENTS IN LIMA 2017-2
var activeLIM3 = 0;

for (var i=0; i<totalStLIM3.length; i++){
    var counterASL3 = totalStLIM3[i];
    if (counterASL3.active == true){
        activeLIM3++;
    }
}
// console.log(activeLIM3);

//COUNTER FOR ACTIVE STUDENTS IN CHILE 2016-2
var activeSCL1 = 0;

for (var i=0; i<totalStSCL1.length; i++){
    var counterASC1 = totalStSCL1[i];
    if (counterASC1.active == true){
        activeSCL1++;
    }
}
// console.log(activeSCL1);

//COUNTER FOR ACTIVE STUDENTS IN SANTIAGO DE CHILE 2017-1
var activeSCL2 = 0;

for (var i=0; i<totalStSCL2.length; i++){
    var counterASC2 = totalStSCL2[i];
    if (counterASC2.active == true){
        activeSCL2++;
    }
}
// console.log(activeSCL2);

//COUNTER FOR ACTIVE STUDENTS IN SANTIAGO DE CHILE 2017-2
var activeSCL3 = 0;

for (var i=0; i<totalStSCL3.length; i++){
    var counterASC3 = totalStSCL3[i];
    if (counterASC3.active == true){
        activeSCL3++;
    }
}
// console.log(activeSCL3);

//VARS TO CALL THE ID'S FROM THE <P>
var activeAQP162 = document.getElementById("activeAQP162");
var activeAQP171 = document.getElementById("activeAQP171");
var activeCDMX171 = document.getElementById("activeCDMX171");
var activeCDMX172 = document.getElementById("activeCDMX172");
var activeLIM162 = document.getElementById("activeLIM162");
var activeLIM171 = document.getElementById("activeLIM171");
var activeLIM172 = document.getElementById("activeLIM172");
var activeSCL162 = document.getElementById("activeSCL162");
var activeSCL171 = document.getElementById("activeSCL171");
var activeSCL172 = document.getElementById("activeSCL172");

    
// THE FUNCTION THAT ESTABLISHES WHAT IS GOING TO HAPPEN WHENEVER ONE OPTION IS SELECTED
function showSemester(){
    if (smsAqpOne.selected){
        activeAQP162.innerHTML = activeAQP1;
    }else if (smsAqpTwo.selected){
        activeAQP171.innerHTML = activeAQP2;
    }else if (smsCdMxOne.selected){
        activeCDMX171.innerHTML = activeCDMX1;
    }else if (smsCdMxTwo.selected){
        activeCDMX172.innerHTML = activeCDMX2;
    }else if (smsLimaOne.selected){
        activeLIM162.innerHTML = activeLIM1;
    }else if (smsLimaTwo.selected){
        activeLIM171.innerHTML = activeLIM2;
    }else if (smsLimaThree.selected){
        activeLIM172.innerHTML = activeLIM3;
    }else if (smsSclOne.selected){
        activeSCL162.innerHTML = activeSCL1;
    }else if (smsSclTwo.selected){
        activeSCL171.innerHTML = activeSCL2;
    } else {
        activeSCL172.innerHTML = activeSCL3;
    }
};


// function bodyOnLoad() {
//     var eFilter = document.getElementById("filter");

//     //Adds numbers 0-9 to the select automatically
//     // for (i = 0; i < 10; i++){
//     //     var option = document.createElement('option');
//     //     option.setAttribute('value', i.toString());
//     //     option.appendChild(document.createTextNode(i.toString()));
//     //     eFilter.appendChild(option);
//     // }
