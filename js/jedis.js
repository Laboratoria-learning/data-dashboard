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

//HOW MANY SPRINTS THERE ARE IN AREQUIPA EACH SEMESTER
var sprintAqp162 = data['AQP']['2016-2']['ratings'].length;
    console.log(sprintAqp162);
var sprintAqp171 = data['AQP']['2017-1']['ratings'].length;
    console.log(sprintAqp171);

//HOW MANY SPRINTS THERE ARE IN MEXICO CITY EACH SEMESTER
var sprintCdMx171 = data['CDMX']['2017-1']['ratings'].length;
    console.log(sprintCdMx171);
var sprintCdMx172 = data['CDMX']['2017-2']['ratings'].length;
    console.log(sprintCdMx172);

//HOW MANY SPRINTS THERE ARE IN LIMA EACH SEMESTER
var sprintLim162 = data['LIM']['2016-2']['ratings'].length;
    console.log(sprintLim162);
var sprintLim171 = data['LIM']['2017-1']['ratings'].length;
    console.log(sprintLim171);
var sprintLim172 = data['LIM']['2017-2']['ratings'].length;
    console.log(sprintLim172);

//HOW MANY SPRINTS THERE ARE IN SANTIAGO EACH SEMESTER *THEY DON'T WORK AS THEY SHOULD *SOLVED*
var sprintStg162 = data['SCL']['2016-2']['ratings'].length;
    console.log(sprintStg162);
var sprintStg171 = data['SCL']['2017-1']['ratings'].length;
    console.log(sprintStg171);
var sprintStg172 = data['SCL']['2017-2']['ratings'].length;
    console.log(sprintStg172);

//LIST OF ALL THE OBJECTS (SPRINTS) INSIDE THE PROPERTY RATINGS
//AREQUIPA 2016-2
var totalSprAqp1 = data['AQP']['2016-2']['ratings'];
console.log(totalSprAqp1);

//AREQUIPA 2017-1
var totalSprAqp2 = data['AQP']['2017-1']['ratings'];
console.log(totalSprAqp2);

//MEXICO CITY 2017-1
var totalSprCdMx1 = data['CDMX']['2017-1']['ratings'];
console.log(totalSprCdMx1);

//MEXICO CITY 2017-2
var totalSprCdMx2 = data['CDMX']['2017-2']['ratings'];
console.log(totalSprCdMx2);

//LIMA 2016-2
var totalSprLim1 = data['LIM']['2016-2']['ratings'];
console.log(totalSprLim1);

//LIMA 2017-1
var totalSprLim2 = data['LIM']['2017-1']['ratings'];
console.log(totalSprLim2);

//LIMA 2017-2
var totalSprLim3 = data['LIM']['2017-2']['ratings'];
console.log(totalSprLim3);

//SANTIAGO 2016-1
var totalSprStg1 = data['LIM']['2016-2']['ratings'];
console.log(totalSprStg1);

//SANTIAGO 2017-1
var totalSprStg2 = data['LIM']['2017-1']['ratings'];
console.log(totalSprStg2);

//SANTIAGO 2017-1
var totalSprStg3 = data['LIM']['2017-2']['ratings'];
console.log(totalSprStg3);
//---------------------------------------------------------------------
//VARIABLES THAT CONTAIN THE IDs THAT KEEP THE JEDIS AVERAGE
var aJedisAqp1 = document.getElementById("aJediAqp162");
var aJedisAqp2 = document.getElementById("aJediAqp171");
var aJedisCdMx1 = document.getElementById("aJediCdMx171");
var aJedisrCdMx2 = document.getElementById("aJediCdMx172");
var aJedisLim1 = document.getElementById("aJediLim162");
var aJedisLim2 = document.getElementById("aJediLim171");
var aJedisLim3 = document.getElementById("aJediLim172");
var aJedisStg1 = document.getElementById("aJediScl162");
var aJedisStg2 = document.getElementById("aJediScl171");
var aJedisStg3 = document.getElementById("aJediScl172");


//---------------------------------------------------------------------1
// AVERAGE FOR THE JEDIS IN AQP 2016-2
var sumAvgA1 = 0;

for (var i = 0; i < sprintAqp162; i++) {
    var jAverageAqp1 = (totalSprAqp1[i]['jedi']);
    // jAverageA1.Math.rounded(2);
    sumAvgA1 += jAverageAqp1;
    // console.log((totalStAqp1[i]['jedi']))
}

var avgA1 = sumAvgA1 / sprintAqp162;
var avgA162 = avgA1.toFixed(2);

// console.log(avgA1);
console.log(avgA162);

//--------------------------------------------------------------------2
// AVERAGE FOR THE JEDIS IN AQP 2017-1
var sumAvgA2 = 0;

for (var j = 0; j < sprintAqp171; j++) {
    var jAverageAqp2 = (totalSprAqp2[j]['jedi']);
    // jAverageA1.Math.rounded(2);
    sumAvgA2 += jAverageAqp2;
    // console.log((totalStAqp2[i]['jedi']))
}

var avgA2 = sumAvgA2 / sprintAqp171;
var avgA171 = avgA2.toFixed(2);

// console.log(avgA2);
console.log(avgA171);

//--------------------------------------------------------------------3
//AVERAGE FOR THE JEDIS IN CDMX 2017-1
var sumAvgMx1 = 0;

for (var i = 0; i < sprintCdMx171; i++) {
    var jAverageCdMx1 = (totalSprCdMx1[i]['jedi']);
    // tAverageA1.Math.rounded(2);
    sumAvgMx1 += jAverageCdMx1;
    // console.log((totalStCdMx1[i]['jedi']))
}

var avgMx1 = sumAvgMx1 / sprintCdMx171;
var avgMx171 = avgMx1.toFixed(2);

// console.log(avgMx1);
console.log(avgMx171);

//------------------------------------------------------------------4
//AVERAGE FOR THE JEDIS IN CDMX 2017-2
var sumAvgMx2 = 0;

for (var i = 0; i < sprintCdMx172; i++) {
    var jAverageCdMx2 = (totalSprCdMx2[i]['jedi']);
    // tAverageA1.Math.rounded(2);
    sumAvgMx2 += jAverageCdMx2;
    // console.log((totalStCdMx1[i]['jedi']))
}

var avgMx2 = sumAvgMx2 / sprintCdMx172;
var avgMx172 = avgMx2.toFixed(2);

// console.log(avgMx1);
console.log(avgMx172);

//------------------------------------------------------------------5
//AVERAGE FOR THE JEDIS IN LIMA 2016-2
var sumAvgLim1 = 0;

for (var i = 0; i < sprintLim162; i++) {
    var jAverageLim1 = (totalSprLim1[i]['jedi']);
    // jAverageA1.Math.rounded(2);
    sumAvgLim1 += jAverageLim1;
    // console.log((totalStCdMx1[i]['jedi']))
}

var avgLim1 = sumAvgLim1 / sprintLim162;
var avgLim162 = avgLim1.toFixed(2);

// console.log(avgMx1);
console.log(avgLim162);

//------------------------------------------------------------------6
//AVERAGE FOR THE JEDIS IN LIMA 2017-1
var sumAvgLim2 = 0;

for (var i = 0; i < sprintLim171; i++) {
    var jAverageLim2 = (totalSprLim2[i]['jedi']);
    // jAverageA1.Math.rounded(2);
    sumAvgLim2 += jAverageLim2;
    // console.log((totalStCdMx1[i]['jedi']))
}

var avgLim2 = sumAvgLim2 / sprintLim171;
var avgLim171 = avgLim2.toFixed(2);

// console.log(avgMx1);
console.log(avgLim171);

//------------------------------------------------------------------7
//AVERAGE FOR THE JEDIS IN LIMA 2017-2
var sumAvgLim3 = 0;

for (var i = 0; i < sprintLim172; i++) {
    var jAverageLim3 = (totalSprLim3[i]['jedi']);
    // jAverageA1.Math.rounded(2);
    sumAvgLim3 += jAverageLim3;
    // console.log((totalStCdMx1[i]['jedi']))
}

var avgLim3 = sumAvgLim3 / sprintLim172;
var avgLim172 = avgLim3.toFixed(2);

// console.log(avgMx1);
console.log(avgLim172);

//------------------------------------------------------------------8
//AVERAGE FOR THE JEDIS IN SANTIAGO DE CHILE 2017-1
var sumAvgStg2 = 0;

for (var i = 0; i < sprintStg171; i++) {
    var jAverageStg2 = (totalSprStg2[i]['jedi']);
    // jAverageA1.Math.rounded(2);
    sumAvgStg2 += jAverageStg2;
    // console.log((totalStCdMx1[i]['jedi']))
}

var avgStg2 = sumAvgStg2/ sprintStg171;
var avgStg171 = avgStg2.toFixed(2);

// console.log(avgMx1);
console.log(avgStg171);

//------------------------------------------------------------------9
//AVERAGE FOR THE JEDIS IN SANTIAGO DE CHILE 2017-1
var sumAvgStg2 = 0;

for (var i = 0; i < sprintStg171; i++) {
    var jAverageStg2 = (totalSprStg2[i]['jedi']);
    // jAverageA1.Math.rounded(2);
    sumAvgStg2 += jAverageStg2;
    // console.log((totalStCdMx1[i]['jedi']))
}

var avgStg2 = sumAvgStg2/ sprintStg171;
var avgStg171 = avgStg2.toFixed(2);

// console.log(avgMx1);
console.log(avgStg171);

//------------------------------------------------------------------10
//AVERAGE FOR THE JEDIS IN SANTIAGO DE CHILE 2017-2
var sumAvgStg3 = 0;

for (var i = 0; i < sprintStg172; i++) {
    var jAverageStg3 = (totalSprStg3[i]['jedi']);
    // jAverageA1.Math.rounded(2);
    sumAvgStg3 += jAverageStg3;
    // console.log((totalStCdMx1[i]['teacher']))
}

var avgStg3 = sumAvgStg3/ sprintStg172;
var avgStg172 = avgStg3.toFixed(2);

// console.log(avgMx1);
console.log(avgStg172);


// THE FUNCTION THAT ESTABLISHES WHAT IS GOING TO HAPPEN WHENEVER ONE OPTION IS SELECTED
function showSemester(){
    if (smsAqpOne.selected){
        aJedisAqp1.innerHTML = avgA162;
    }else if (smsAqpTwo.selected){
        aJedisAqp2.innerHTML = avgA171;
    }else if (smsCdMxOne.selected){
        aJedisCdMx1.innerHTML = avgMx171;
    }else if (smsCdMxTwo.selected){
        aJedisCdMx2.innerHTML = avgMx172;
    }else if (smsLimaOne.selected){
        aJedisLim1.innerHTML = avgLim162;
    }else if (smsLimaTwo.selected){
        aJedisLim2.innerHTML = avgLim171;
    }else if (smsLimaThree.selected){
        aJedisLim3.innerHTML = avgLim172;
    }else if (smsSclOne.selected){
        aJedisStg1.innerHTML = avgStg171;
    }else if (smsSclTwo.selected){
        aJedisStg2.innerHTML = avgStg171;
    } else {
        aJedisStg3.innerHTML = avgStg172;
    }
};
