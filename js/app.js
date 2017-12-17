window.addEventListener("load", session);

function session (event){
var newDivForm= document.createElement("div");
newDivForm.setAttribute("Id", "form");
newDivForm.classList.add("form");

var inputUser = document.createElement("input");
inputUser.setAttribute("type", "text");
inputUser.setAttribute("value", "");
inputUser.setAttribute("Id", "inputUser");
inputUser.setAttribute("placeholder", "User");
newDivForm.appendChild(inputUser);

var inputPswd = document.createElement("input");
inputPswd.setAttribute("type", "password");
inputPswd.setAttribute("value", "");
inputPswd.setAttribute("Id", "inputPassword");
inputPswd.setAttribute("placeholder", "Password");
inputPswd.setAttribute("maxlength", "11");
newDivForm.appendChild(inputPswd);

var sendButton = document.createElement ("button");
sendButton.setAttribute("value", "Send");
sendButton.setAttribute("Id","btnSnd");
sendButton.innerText = "Send";
newDivForm.appendChild(sendButton);
document.body.appendChild(newDivForm);

document.getElementById("btnSnd").addEventListener("click", createSession);

function createSession (event){
  var userValue = document.getElementById("inputUser").value;
  console.log(userValue);

  var pswdValue = document.getElementById("inputPassword").value;
  console.log(pswdValue);

  /* Usuarios registrados
  Usuario :Jonathan
  Password: Laboratoria */
  if(userValue === "Jonathan" || pswdValue === "Laboratoria"){
    alert("continua");
    inputUser.value = "";
    inputPswd.value = "";
  } else {
    alert("Falso");
    inputUser.value = "";
    inputPswd.value = "";
  }
 }
}
/*var sede= data[]

data.AQP["2016-2"].students[0].active

for(var i=1; i <= numsede.length; i++){
  for(var j=0; j<=data.AQP[i].students.length; j´++)
  {
    console.log(data.AQP[i].students[j].name)} }
*/
var arraySede = Object.keys(data);
// Obtiene la cantidad de sedes (4)
var numSede =arraySede.length;
var counter=0;
//var arrayGen = Object.keys(numSede[0]);

/*for( var i = 0; i<=numSede; i++){
  var cantGen = Object.keys(data[arraySede[i]]);
  console.log(cantGen);
  for (var j = 0; j<=cantGen.length; j++){
    var totalStudents = data[arraySede[i]][cantGen[j]].students.length;
    for(var k= 0; k<= totalStudents; k++){
      var activeStudents = data[arraySede[i]][cantGen[j]][students[0]];

    if(activeStudents === true){

      counter = counter ++;
    }
    console.log(counter);
    }
  }
}*/
var count =0;
var countTotal = 0;
//data[sede][generacion].students
for (var i in data.AQP["2016-2"].students){
  countTotal ++;
  console.log (data.AQP["2016-2"].students[i].active);
  var activeStudents = data.AQP["2016-2"].students[i].active;

  if(activeStudents === true){
    counter ++;
  } else {
    count ++;
  }

}
console.log("El valor es de: "+counter);
console.log("El valor es de inactivas: "+count);
console.log("Studiantes por generación"+ countTotal);

var countTotalStudents = 0;
var statusInd = 0;
var countTotalActive = 0;
var countTotalInact = 0;
for(var indexSede in data ){
  //console.log (data[indexSede]);
  for (var indexGen in data[indexSede]){
    //console.log( indexGen); //Obtiene el valor del número de la generación
    for (var indexPropGen in data[indexSede][indexGen]){
      //console.log(indexPropGen); //entra a estudiantes y ratings
      if (indexPropGen === "students"){
        //console.log (indexPropGen);
        for(var indexStudents  in data[indexSede][indexGen][indexPropGen]){
        //  console.log(indexStudents["students"]);
        //onsole.log(indexStudents);
        countTotalStudents++;
        statusInd = data[indexSede][indexGen][indexPropGen][indexStudents].active;
        if(statusInd === true){
          countTotalActive ++;
        } else {
          countTotalInact ++;
        }

      }
      }

        //countTotalStudents ++;
    //  }
    }
  }
}
console.log ("totales estudiantes "+ countTotalStudents);
console.log("activastotales " + countTotalActive);
console.log("inactivastotales "+ countTotalInact);
