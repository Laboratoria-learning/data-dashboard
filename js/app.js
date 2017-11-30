/*Añadiendo 2da pregunta*/

var containerFilter2 = document.getElementById('containerFilter2');
var containerFilter3 = document.getElementById('containerFilter3');
function showPercent(event) {
    var contpercent = document.createElement('div');
    contpercent.classList = 'filter2';
    var percentxt = document.createElement('p');
    percentxt.textContent = 'DROPOUT';
    var percent = document.createElement('a');
    var countPerct = 0;
    var active1 = data.AQP["2016-2"]["students"];
    if (selection.value === "AQP-2016-2") {
        for (var i = 0; i < active1.length; i++) {
            if (active1[i]['active'] === false) {
                countPerct++;
                percent.textContent = ((countPerct * 100) / (active1.length)).toFixed(2) + '% ';
                contpercent.appendChild(percent);
                contpercent.appendChild(percentxt);
                containerFilter2.appendChild(contpercent);
                countPerct = '';
            }
        }
    }
    var active2 = data.AQP["2017-1"]["students"];
    if (selection.value === "AQP-2017-1") {
        for (var i = 0; i < active2.length; i++) {
            if (active2[i]['active'] === false) {
                countPerct++;
                percent.textContent = ((countPerct * 100) / (active1.length)).toFixed(2) + '% ';
                contpercent.appendChild(percent);
                contpercent.appendChild(percentxt);
                containerFilter2.appendChild(contpercent);
                countPerct = '';

            }
        }
    }
    var countSprints = 0;
    var contPoint = document.createElement('div');
    contPoint.classList = 'filter2';
    var contPoints = document.createElement('a');
    var contPointTxt = document.createElement('p');
    contPointTxt.textContent = 'STUDENTS THAT MEER THE TARGET';
    contPointTxt.classList = 'filtertxt';
    if (selection.value === "AQP-2016-2") {
        for (var i = 0; i < active1.length; i++) {
            for (var j = 0; j < active1[i]['sprints'].length; j++) {
                if (active1[i]['sprints'][j]['score']['tech'] >= 1260 && active1[i]['sprints'][j]['score']['hse'] >= 840) {
                    countSprints++;
                    contPoints.textContent = countSprints;
                    contPoint.appendChild(contPointTxt);
                    contPoint.appendChild(contPoints)
                    containerFilter3.appendChild(contPoint);

                }
            }
        }
    }
}
});


