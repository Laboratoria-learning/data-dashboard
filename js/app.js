//Creando selection desde DOM y filtrando info
//Variables globales para localizar elementos
var locationContainer = document.body.children[0].children[1];
var locationSelect = document.getElementById("select")

locationSelect.addEventListener("click",addSelect);

function addSelect(){

      var slct = document.createElement("select");
      slct.id= "slct-location";
      slct.addEventListener("change",showScreen);
      locationContainer.appendChild(slct);

      var opt0 =document.createElement("option");
      opt0.value = "0";
      opt0.text = "Select the city";
      slct.add(opt0, null);

      var opt1 =document.createElement("option");
      opt1.value = "1";
      opt1.text = "AQP 2016-2";
      slct.add(opt1, null);

      var opt2 =document.createElement("option");
      opt2.value = "1";
      opt2.text = "AQP 2017-1";
      slct.add(opt2, null);

      var opt3 =document.createElement("option");
      opt3.value = "2";
      opt3.text = "CDMX 2017-1";
      slct.add(opt3, null);

      var opt4 =document.createElement("option");
      opt4.value = "2";
      opt4.text = "CDMX 2017-2";
      slct.add(opt4, null);

      var opt5 =document.createElement("option");
      opt5.value = "3";
      opt5.text = "LIM 2016-2";
      slct.add(opt5, null);

      var opt6 =document.createElement("option");
      opt6.value = "3";
      opt6.text = "LIM 2017-1";
      slct.add(opt6, null);

      var opt7 =document.createElement("option");
      opt7.value = "3";
      opt7.text = "LIM 2017-2";
      slct.add(opt7, null);

      var opt8 =document.createElement("option");
      opt8.value = "4";
      opt8.text = "SCL 2016-2";
      slct.add(opt8, null);

      var opt9 =document.createElement("option");
      opt9.value = "4";
      opt9.text = "SCL 2017-1";
      slct.add(opt9, null);

      var opt10 =document.createElement("option");
      opt10.value = "4";
      opt10.text = "SCL 2017-2";
      slct.add(opt10, null);

locationSelect.removeEventListener("click",addSelect);
}
// Funcion para obtener el value y asignarlo a "app2.js"
function showScreen() {
  var value = document.getElementById("slct-location").value;
  window.location = "../views/data.html?city="+value;
}
