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
//COUNTER FOR INACTIVE STUDENTS & WHO THEY ARE IN AQP 2016-2
var inactiveAQP1 = 0;
infoAQP1 = [];
// picAQP1 = " ";

for (var i=0; i<totalStAQP1.length; i++){
    var counterASA1 = totalStAQP1[i];
    if (counterASA1.active == false){
        inactiveAQP1++;
        infoAQP1.push(totalStAQP1[i]['name']);
        // picAQP1.push(totalStAQP1[i]['photo']);
    }
}
console.log(inactiveAQP1);
console.log(infoAQP1);
// console.log(picAQP1);

//AVERAGE FOR INACTIVE STUDENTS IN AQP 2016-2
var avgAQP1 = (inactiveAQP1/stAQP162)*100;
console.log(avgAQP1);

//______________________________________________________________2


//COUNTER FOR INACTIVE STUDENTS & WHO THEY ARE IN AQP 2017-1
var inactiveAQP2 = 0;
infoAQP2 = [];

for (var i=0; i<totalStAQP2.length; i++){
    var counterASA2 = totalStAQP2[i];
    if (counterASA2.active == false){
        inactiveAQP2++;
        infoAQP2.push(totalStAQP2[i]['name']);
        // infoAQP2.push(totalStAQP2[i]['photo']);
    }
}
console.log(inactiveAQP2);
console.log(infoAQP2);

//AVERAGE FOR INACTIVE STUDENTS IN AQP 2017-1
var avgAQP2 = (inactiveAQP2/stAQP171)*100;
console.log(avgAQP2);


//______________________________________________________________3

//COUNTER FOR INACTIVE STUDENTS & WHO THEY ARE IN CDMX 2017-1
var inactiveCDMX1 = 0;
infoCDMX1 = [];

for (var i=0; i<totalStCDMX1.length; i++){
    var counterASM1 = totalStCDMX1[i];
    if (counterASM1.active == false){
        inactiveCDMX1++;
        infoCDMX1.push(totalStCDMX1[i]['name']);
        // infoCDMX1.push(totalStCDMX1[i]['photo']);
    }
}
console.log(inactiveCDMX1);
console.log(infoCDMX1);

//AVERAGE FOR INACTIVE STUDENTS IN CDMX 2017-1
var avgCDMX1 = (inactiveCDMX1/stCMDX171)*100;
console.log(avgCDMX1);

//______________________________________________________________4

//COUNTER FOR INACTIVE STUDENTS IN CDMX 2017-2
var inactiveCDMX2 = 0;
infoCDMX2 = [];

for (var i=0; i<totalStCDMX2.length; i++){
    var counterASM2 = totalStCDMX2[i];
    if (counterASM2.active == false){
        inactiveCDMX2++;
        infoCDMX2.push(totalStCDMX2[i]['name']);
        // infoCDMX2.push(totalStCDMX2[i]['photo']);
    }
}
console.log(inactiveCDMX2);
console.log(infoCDMX2);

//AVERAGE FOR INACTIVE STUDENTS IN CDMX 2017-2
var avgCDMX2 = (inactiveCDMX2/stCMDX172)*100;
console.log(avgCDMX2);

//______________________________________________________________5

//COUNTER FOR INACTIVE STUDENTS IN LIMA 2016-2
var inactiveLIM1 = 0;
infoLIM1 = [];

for (var i=0; i<totalStLIM1.length; i++){
    var counterASL1 = totalStLIM1[i];
    if (counterASL1.active == false){
        inactiveLIM1++;
        infoLIM1.push(totalStLIM1[i]['name']);
        // infoLIM1.push(totalStLIM1[i]['photo']);
    }
}
console.log(inactiveLIM1);
console.log(infoLIM1);

//AVERAGE FOR INACTIVE STUDENTS IN LIMA 2016-2
var avgLIM1 = (inactiveLIM1/stLIM162)*100;
console.log(avgLIM1);

//______________________________________________________________6

//COUNTER FOR INACTIVE STUDENTS IN LIMA 2017-1
var inactiveLIM2 = 0;
infoLIM2 = [];

for (var i=0; i<totalStLIM2.length; i++){
    var counterASL2 = totalStLIM2[i];
    if (counterASL2.active == false){
        inactiveLIM2++;
        infoLIM2.push(totalStLIM2[i]['name']);
        // infoLIM2.push(totalStLIM2[i]['photo']);
    }
}
console.log(inactiveLIM2);
console.log(infoLIM2);

//AVERAGE FOR INACTIVE STUDENTS IN LIMA 2017-1
var avgLIM2 = (inactiveLIM2/stLIM171)*100;
console.log(avgLIM2);

//______________________________________________________________7

//COUNTER FOR INACTIVE STUDENTS IN LIMA 2017-2
var inactiveLIM3 = 0;
infoLIM3 = [];

for (var i=0; i<totalStLIM3.length; i++){
    var counterASL3 = totalStLIM3[i];
    if (counterASL3.active == false){
        inactiveLIM3++;
        infoLIM3.push(totalStLIM3[i]['name']);
        // infoLIM3.push(totalStLIM3[i]['photo']);
    }
}
console.log(inactiveLIM3);
console.log(infoLIM3);

//AVERAGE FOR INACTIVE STUDENTS IN LIMA 2017-2
var avgLIM3 = (inactiveLIM3/stLIM172)*100;
console.log(avgLIM3);

//______________________________________________________________8

//COUNTER FOR INACTIVE STUDENTS IN CHILE 2016-2
var inactiveSCL1 = 0;
infoSCL1 = [];

for (var i=0; i<totalStSCL1.length; i++){
    var counterASC1 = totalStSCL1[i];
    if (counterASC1.active == false){
        inactiveSCL1++;
        infoSCL1.push(totalStSCL1[i]['name']);
        // infoSCL1.push(totalStSCL1[i]['photo']);
    }
}
console.log(inactiveSCL1);
console.log(infoSCL1);

//AVERAGE FOR INACTIVE STUDENTS IN CHILE 2016-2
var avgSCL1 = (inactiveSCL1/stSCL162)*100;
console.log(avgSCL1);

//______________________________________________________________9

//COUNTER FOR INACTIVE STUDENTS IN SANTIAGO DE CHILE 2017-1
var inactiveSCL2 = 0;
infoSCL2 = [];

for (var i=0; i<totalStSCL2.length; i++){
    var counterASC2 = totalStSCL2[i];
    if (counterASC2.active == false){
        inactiveSCL2++;
        infoSCL2.push(totalStSCL2[i]['name']);
        // infoSCL2.push(totalStSCL2[i]['photo']);
    }
}
console.log(inactiveSCL2);
console.log(infoSCL2);

//AVERAGE FOR INACTIVE STUDENTS IN CHILE 2017-1
var avgSCL2 = (inactiveSCL2/stSCL171)*100;
console.log(avgSCL2);

//______________________________________________________________10

//COUNTER FOR INACTIVE STUDENTS IN SANTIAGO DE CHILE 2017-2
var inactiveSCL3 = 0;
infoSCL3 = [];

for (var i=0; i<totalStSCL3.length; i++){
    var counterASC3 = totalStSCL3[i];
    if (counterASC3.active == false){
        inactiveSCL3++;
        infoSCL3.push(totalStSCL3[i]['name']);
        // infoSCL3.push(totalStSCL3[i]['photo']);
    }
}
console.log(inactiveSCL3);
console.log(infoSCL3);

//AVERAGE FOR INACTIVE STUDENTS IN CHILE 2017-2
var avgSCL3 = (inactiveSCL3/stSCL172)*100;
var avgStg172 = avgSCL3.toFixed(2);
console.log(avgStg172);

//---------------------------------------------------------
//VARS TO CALL THE IDs FROM THE <P> INACTIVE
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

//VARS TO CALL THE IDs FROM THE <P> AVERAGE
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

//VARS TO CALL THE IDs FROM THE <P> INFO
var whoAQP162 = document.getElementById('whoAQP162');
var whoAQP171 = document.getElementById("whoAQP171");
var whoCDMX171 = document.getElementById("whoCDMX171");
var whoCDMX172 = document.getElementById("whoCDMX172");
var whoLIM162 = document.getElementById("whoLIM162");
var whoLIM171 = document.getElementById("whoLIM171");
var whoLIM172 = document.getElementById("whoLIM172");
var whoSCL162 = document.getElementById("whoSCL162");
var whoSCL171 = document.getElementById("whoSCL171");
var whoSCL172 = document.getElementById("whoSCL172");



    
// THE FUNCTION THAT ESTABLISHES WHAT IS GOING TO HAPPEN WHENEVER ONE OPTION IS SELECTED
function showSemester(){
    if (smsAqpOne.selected){
        // inactiveAQP162.innerHTML = inactiveAQP1;
        averageAQP162.innerHTML = avgAQP1;
        whoAQP162.innerHTML = infoAQP1.join(" ");
    }else if (smsAqpTwo.selected){
        // inactiveAQP171.innerHTML = inactiveAQP2;
        averageAQP171.innerHTML = avgAQP2;
        whoAQP171.innerHTML = infoAQP2.join(" ");
    }else if (smsCdMxOne.selected){
        // inactiveCDMX171.innerHTML = inactiveCDMX1;
        averageCDMX171.innerHTML = avgCDMX1;
        whoCDMX171.innerHTML = infoCDMX1.join(" ");
    }else if (smsCdMxTwo.selected){
        // inactiveCDMX172.innerHTML = inactiveCDMX2;
        averageCDMX172.innerHTML = avgCDMX2;
        whoCDMX172.innerHTML = infoCDMX2.join(" ");
    }else if (smsLimaOne.selected){
        // inactiveLIM162.innerHTML = inactiveLIM1;
        averageLIM162.innerHTML = avgLIM1;
        whoLIM162.innerHTML = infoLIM1.join(" ");
    }else if (smsLimaTwo.selected){
        // inactiveLIM171.innerHTML = inactiveLIM2;
        averageLIM171.innerHTML = avgLIM2;
        whoLIM171.innerHTML = infoLIM2.join(" ");
    }else if (smsLimaThree.selected){
        // inactiveLIM172.innerHTML = inactiveLIM3;
        averageLIM172.innerHTML = avgLIM3;
        whoLIM172.innerHTML = infoLIM3.join(" ");
    }else if (smsSclOne.selected){
        // inactiveSCL162.innerHTML = inactiveSCL1;
        averageSCL162.innerHTML = avgSCL1;
        whoLIM162.innerHTML = infoSCL1.join(" ");
    }else if (smsSclTwo.selected){
        // inactiveSCL171.innerHTML = inactiveSCL2;
        averageLIM171.innerHTML = avgSCL2;
        whoLIM171.innerHTML = infoSCL2.join(" ");
    } else {
        // inactiveSCL172.innerHTML = inactiveSCL3;
        averageSCL172.innerHTML = avgSCL3;
        whoLIM172.innerHTML = infoSCL3.join(" ");
    }
};
