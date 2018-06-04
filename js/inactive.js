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
    console.log(stAQP162);
var stAQP171 = data['AQP']['2017-1']['students'].length;
    console.log(stAQP171);

//HOW MANY STUDENTS THERE ARE IN MEXICO CITY EACH SEMESTER
var stCMDX171 = data['CDMX']['2017-1']['students'].length;
    console.log(stCMDX171);
var stCMDX172 = data['CDMX']['2017-2']['students'].length;
    console.log(stCMDX172);

//HOW MANY STUDENTS THERE ARE IN LIMA EACH SEMESTER
var stLIM162 = data['LIM']['2016-2']['students'].length;
    console.log(stLIM162);
var stLIM171 = data['LIM']['2017-1']['students'].length;
    console.log(stLIM171);
var stLIM172 = data['LIM']['2017-2']['students'].length;
    console.log(stLIM172);

//HOW MANY STUDENTS THERE ARE IN SANTIAGO EACH SEMESTER *THEY DON'T WORK AS THEY SHOULD
var stSCL162 = data['SCL']['2016-2']['students'].length;
    console.log(stSCL162);
var stSCL171 = data['SCL']['2017-1']['students'].length;
    console.log(stSCL171);
var stSCL172 = data['SCL']['2017-2']['students'].length;
    console.log(stSCL172);


//SUM OF STUDENTS FOR LOCATION
var sumStudentsAQP = stAQP162 + stAQP171
var sumStudentsCDMX = stCMDX171 + stCMDX172
var sumStudentsLIM = stLIM162 + stLIM171 + stLIM172 
var sumStudentsSCL = stSCL162 + stSCL171 + stSCL172 


//LIST OF ALL THE OBJECTS INSIDE THE PROPERTY STUDENTS

//AREQUIPA 2016-2
var totalStAQP1 = data['AQP']['2016-2']['students'];
console.log(totalStAQP1);

//AREQUIPA 2017-1
var totalStAQP2 = data['AQP']['2017-1']['students'];
console.log(totalStAQP2);

//MEXICO CITY 2017-1
var totalStCDMX1 = data['CDMX']['2017-1']['students'];
console.log(totalStCDMX1);

//MEXICO CITY 2017-2
var totalStCDMX2 = data['CDMX']['2017-2']['students'];
console.log(totalStCDMX2);

//LIMA 2016-2
var totalStLIM1 = data['LIM']['2016-2']['students'];
console.log(totalStLIM1);

//LIMA 2017-1
var totalStLIM2 = data['LIM']['2017-1']['students'];
console.log(totalStLIM2);

//LIMA 2017-2
var totalStLIM3 = data['LIM']['2017-2']['students'];
console.log(totalStLIM3);

//SANTIAGO 2016-1
var totalStSCL1 = data['LIM']['2016-2']['students'];
console.log(totalStSCL1);

//SANTIAGO 2017-1
var totalStSCL2 = data['LIM']['2017-1']['students'];
console.log(totalStSCL2);

//SANTIAGO 2017-1
var totalStSCL3 = data['LIM']['2017-2']['students'];
console.log(totalStSCL3);



//-------------------------------------------------------------1
//COUNTER FOR INACTIVE STUDENTS IN AQP 2016-2
var inactiveAQP1 = 0;

for (var i=0; i<totalStAQP1.length; i++){
    var counterASA1 = totalStAQP1[i];
    if (counterASA1.active == false){
        inactiveAQP1++;
    }
}
// console.log(inactiveAQP1);

//AVERAGE FOR INACTIVE STUDENTS IN AQP 2016-2
var avgAQP1 = (inactiveAQP1/stAQP162)*100;
console.log(avgAQP1);
//______________________________________________________________2


//COUNTER FOR INACTIVE STUDENTS IN AQP 2017-1
var inactiveAQP2 = 0;

for (var i=0; i<totalStAQP2.length; i++){
    var counterASA2 = totalStAQP2[i];
    if (counterASA2.active == false){
        inactiveAQP2++;
    }
}
// console.log(activeAQP2);

//AVERAGE FOR INACTIVE STUDENTS IN AQP 2017-1
var avgAQP2 = (inactiveAQP2/stAQP171)*100;
console.log(avgAQP2);

//______________________________________________________________3

//COUNTER FOR INACTIVE STUDENTS IN CDMX 2017-1
var inactiveCDMX1 = 0;

for (var i=0; i<totalStCDMX1.length; i++){
    var counterASM1 = totalStCDMX1[i];
    if (counterASM1.active == false){
        inactiveCDMX1++;
    }
}
//console.log(inactiveCDMX1);

//AVERAGE FOR INACTIVE STUDENTS IN CDMX 2017-1
var avgCDMX1 = (inactiveCDMX1/stCMDX171)*100;
console.log(avgCDMX1);

//______________________________________________________________4

//COUNTER FOR INACTIVE STUDENTS IN CDMX 2017-2
var inactiveCDMX2 = 0;

for (var i=0; i<totalStCDMX2.length; i++){
    var counterASM2 = totalStCDMX2[i];
    if (counterASM2.active == false){
        inactiveCDMX2++;
    }
}
// console.log(activeCDMX2);

//AVERAGE FOR INACTIVE STUDENTS IN CDMX 2017-2
var avgCDMX2 = (inactiveCDMX2/stCMDX172)*100;
console.log(avgCDMX2);

//______________________________________________________________5

//COUNTER FOR INACTIVE STUDENTS IN LIMA 2016-2
var inactiveLIM1 = 0;

for (var i=0; i<totalStLIM1.length; i++){
    var counterASL1 = totalStLIM1[i];
    if (counterASL1.active == false){
        inactiveLIM1++;
    }
}
// console.log(activeLIM1);

//AVERAGE FOR INACTIVE STUDENTS IN LIMA 2016-2
var avgLIM1 = (inactiveLIM1/stLIM162)*100;
console.log(avgLIM1);

//______________________________________________________________6

//COUNTER FOR INACTIVE STUDENTS IN LIMA 2017-1
var inactiveLIM2 = 0;

for (var i=0; i<totalStLIM2.length; i++){
    var counterASL2 = totalStLIM2[i];
    if (counterASL2.active == false){
        inactiveLIM2++;
    }
}
// console.log(activeLIM2);

//AVERAGE FOR INACTIVE STUDENTS IN LIMA 2017-1
var avgLIM2 = (inactiveLIM2/stLIM171)*100;
console.log(avgLIM2);

//______________________________________________________________7

//COUNTER FOR INACTIVE STUDENTS IN LIMA 2017-2
var inactiveLIM3 = 0;

for (var i=0; i<totalStLIM3.length; i++){
    var counterASL3 = totalStLIM3[i];
    if (counterASL3.active == false){
        inactiveLIM3++;
    }
}
// console.log(activeLIM3);

//AVERAGE FOR INACTIVE STUDENTS IN LIMA 2017-2
var avgLIM3 = (inactiveLIM3/stLIM172)*100;
console.log(avgLIM3);

//______________________________________________________________8

//COUNTER FOR INACTIVE STUDENTS IN CHILE 2016-2
var inactiveSCL1 = 0;

for (var i=0; i<totalStSCL1.length; i++){
    var counterASC1 = totalStSCL1[i];
    if (counterASC1.active == false){
        inactiveSCL1++;
    }
}
console.log(inactiveSCL1);

//AVERAGE FOR INACTIVE STUDENTS IN CHILE 2016-2
var avgSCL1 = (inactiveSCL1/stSCL162)*100;
console.log(avgSCL1);

//______________________________________________________________9

//COUNTER FOR INACTIVE STUDENTS IN SANTIAGO DE CHILE 2017-1
var inactiveSCL2 = 0;

for (var i=0; i<totalStSCL2.length; i++){
    var counterASC2 = totalStSCL2[i];
    if (counterASC2.active == false){
        inactiveSCL2++;
    }
}
// console.log(activeSCL2);

//AVERAGE FOR INACTIVE STUDENTS IN CHILE 2017-1
var avgSCL2 = (inactiveSCL2/stSCL171)*100;
console.log(avgSCL2);

//______________________________________________________________10

//COUNTER FOR INACTIVE STUDENTS IN SANTIAGO DE CHILE 2017-2
var inactiveSCL3 = 0;

for (var i=0; i<totalStSCL3.length; i++){
    var counterASC3 = totalStSCL3[i];
    if (counterASC3.active == false){
        inactiveSCL3++;
    }
}
// console.log(activeSCL3);

//AVERAGE FOR INACTIVE STUDENTS IN CHILE 2017-1
var avgSCL3 = (inactiveSCL3/stSCL172)*100;
console.log(avgSCL3);

//---------------------------------------------------------
//VARS TO CALL THE ID'S FROM THE <P> INACTIVE
var inactiveAQP162 = document.getElementById("inactiveAQP162");
var inactiveAQP171 = document.getElementById("inactiveAQP171");
var inactiveCDMX171 = document.getElementById("inactiveCDMX171");
var inactiveCDMX172 = document.getElementById("inactiveCDMX172");
var inactiveLIM162 = document.getElementById("inactiveLIM162");
var inactiveLIM171 = document.getElementById("inactiveLIM171");
var inactiveLIM172 = document.getElementById("inactiveLIM172");
var inactiveSCL162 = document.getElementById("inactiveSCL162");
var inactiveSCL171 = document.getElementById("inactiveSCL171");
var inactiveSCL172 = document.getElementById("inactiveSCL172");

//VARS TO CALL THE ID'S FROM THE <P> AVERAGE
var averageAQP162 = document.getElementById('averageAQP162');
var averageAQP171 = document.getElementById("averageAQP171");
var averageCDMX171 = document.getElementById("averageCDMX171");
var averageCDMX172 = document.getElementById("averageCDMX172");
var averageLIM162 = document.getElementById("averageLIM162");
var averageLIM171 = document.getElementById("averageLIM171");
var averageLIM172 = document.getElementById("averageLIM172");
var averageSCL162 = document.getElementById("averageSCL162");
var averageSCL171 = document.getElementById("averageSCL171");
var averageSCL172 = document.getElementById("averageSCL172");


    
// THE FUNCTION THAT ESTABLISHES WHAT IS GOING TO HAPPEN WHENEVER ONE OPTION IS SELECTED
function showSemester(){
    if (smsAqpOne.selected){
        // inactiveAQP162.innerHTML = inactiveAQP1;
        averageAQP162.innerHTML = avgAQP1;
    }else if (smsAqpTwo.selected){
        // inactiveAQP171.innerHTML = inactiveAQP2;
        averageAQP171.innerHTML = avgAQP2;
    }else if (smsCdMxOne.selected){
        // inactiveCDMX171.innerHTML = inactiveCDMX1;
        averageCDMX171.innerHTML = avgCDMX1;
    }else if (smsCdMxTwo.selected){
        // inactiveCDMX172.innerHTML = inactiveCDMX2;
        averageCDMX172.innerHTML = avgCDMX2;
    }else if (smsLimaOne.selected){
        // inactiveLIM162.innerHTML = inactiveLIM1;
        averageLIM162.innerHTML = avgLIM1;
    }else if (smsLimaTwo.selected){
        // inactiveLIM171.innerHTML = inactiveLIM2;
        averageLIM171.innerHTML = avgLIM2;
    }else if (smsLimaThree.selected){
        // inactiveLIM172.innerHTML = inactiveLIM3;
        averageLIM172.innerHTML = avgLIM3;
    }else if (smsSclOne.selected){
        // inactiveSCL162.innerHTML = inactiveSCL1;
        averageSCL162.innerHTML = avgSCL1;
    }else if (smsSclTwo.selected){
        // inactiveSCL171.innerHTML = inactiveSCL2;
        averageLIM171.innerHTML = avgSCL2;
    } else {
        // inactiveSCL172.innerHTML = inactiveSCL3;
        averageSCL172.innerHTML = avgSCL3;
    }
};
