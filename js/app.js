
console.log(data);
//Llamar sede
var aqp = data.AQP;
console.log(aqp);
//Llamar generación
console.log(aqp["2016-2"]);
//Llamar studiantes
var students = aqp["2016-2"].students;
console.log(students);
//Llamar studiante
console.log(aqp["2016-2"].students[0]);
//Llamar estudiante activas
console.log(aqp["2016-2"].students[0].active);

var register = document.getElementById('register');
register.textContent = students.length;
var desertStudents = document.getElementById('desertStudents');
desertStudents.textContent = desert();

function desert () {
    var arrActive = [];
    
    for (i = 0; i< students.length; i++) {
        arrActive.push(students[i].active);
        }

        var countDesert = 0;
        for (j = 0; j < arrActive.length; j++){
            if (arrActive[j] === false){
                countDesert++;
            }
    }

    return parseInt(countDesert * 100/ students.length) + '%'
}

