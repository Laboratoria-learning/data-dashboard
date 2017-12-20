var locationContainer = document.body.children[0].children[1];

document.getElementById("select").addEventListener("click",addSelect);

function addSelect(){

      var slct = document.createElement("select");
      slct.id= "slct-location";
      slct.addEventListener("change",showScreen);
      locationContainer.appendChild(slct);

      var opt0 =document.createElement("option");
      opt0.value = "0";
      opt0.text = "----";
      slct.add(opt0, null);

      var opt1 =document.createElement("option");
      opt1.value = "1";
      opt1.text = "Arequipa";
      slct.add(opt1, null);

      var opt2 =document.createElement("option");
      opt2.value = "2";
      opt2.text = "CDMX";
      slct.add(opt2, null);

      var opt3 =document.createElement("option");
      opt3.value = "3";
      opt3.text = "Lima";
      slct.add(opt3, null);

      var opt4 =document.createElement("option");
      opt4.value = "4";
      opt4.text = "Chile";
      slct.add(opt4, null);

document.getElementById("select").removeEventListener("click",addSelect);
}

function showScreen() {
  var value = document.getElementById("slct-location").value;
  window.location = "../views/screen-data.html?city="+value;
}
