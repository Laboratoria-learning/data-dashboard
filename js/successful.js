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

//_____________________________________________________________

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
var stLIM172 = data['LIM']['2017-2']['ratings'].length;
    console.log(stLIM172);

//HOW MANY STUDENTS THERE ARE IN SANTIAGO EACH SEMESTER *THEY DON'T WORK AS THEY SHOULD
var stSCL162 = data['SCL']['2016-2']['ratings'].length;
    console.log(stSCL162);
var stSCL171 = data['SCL']['2017-1']['ratings'].length;
    console.log(stSCL171);
var stSCL172 = data['SCL']['2017-2']['ratings'].length;
    console.log(stSCL172);

//LIST OF ALL THE OBJECTS INSIDE THE PROPERTY STUDENTS
//AREQUIPA 2016-2
var totalStAQP1 = data['AQP']['2016-2']['ratings'];
console.log(totalStAQP1);

//AREQUIPA 2017-1
var totalStAQP2 = data['AQP']['2017-1']['ratings'];
console.log(totalStAQP2);

//MEXICO CITY 2017-1
var totalStCDMX1 = data['CDMX']['2017-1']['ratings'];
console.log(totalStCDMX1);

//MEXICO CITY 2017-2
var totalStCDMX2 = data['CDMX']['2017-2']['ratings'];
console.log(totalStCDMX2);

//LIMA 2016-2
var totalStLIM1 = data['LIM']['2016-2']['ratings'];
console.log(totalStLIM1);

//LIMA 2017-1
var totalStLIM2 = data['LIM']['2017-1']['ratings'];
console.log(totalStLIM2);

//LIMA 2017-2
var totalStLIM3 = data['LIM']['2017-2']['ratings'];
console.log(totalStLIM3);

//SANTIAGO 2016-1
var totalStSCL1 = data['LIM']['2016-2']['ratings'];
console.log(totalStSCL1);

//SANTIAGO 2017-1
var totalStSCL2 = data['LIM']['2017-1']['ratings'];
console.log(totalStSCL2);

//SANTIAGO 2017-1
var totalStSCL3 = data['LIM']['2017-2']['ratings'];
console.log(totalStSCL3);
//------------------------------------------------------------------

//IT HELPS TO KNOW HOW MANY SUCCESSFUL STUDENTS THERE ARE IN AQP 2016-2

sucAqp1 = 0
for (var i = 0; i < stAQP171; i++) {
    var techScoreAqp1 = 0;
    var hseScoreAqp1 = 0;
    var totalStAQP1 = 0;
    var sprintAqp1 = data['AQP']['2016-2']['students'][i].sprints.length;
    for (var j = 0; j < sprintAqp1; j++) {
        techScoreAqp1 += data['AQP']['2016-2']['students'][i].sprints[j].score.tech;
        hseScoreAqp1 += data['AQP']['2016-2']['students'][i].sprints[j].score.hse;

        console.log(sprintAqp1);
    }
    totalStAQP1 = techScoreAqp1 + hseScoreAqp1;
    if (totalStAQP1 > (2100 * sprintAqp1));
    sucAqp1++;
}

console.log(sucAqp1);


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