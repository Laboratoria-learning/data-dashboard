window.addEventListener("load", function(){


var contentStudentsImg = document.getElementById("content-students-img");

var aqp = data.AQP;
var students = aqp["2016-2"].students;

for (var i = 0; i < students.length; i++) {
  var studentsPhoto = students[i].photo;
  console.log(studentsPhoto);
}

function insertImg(){
  var img = document.createElement("img");
  img.setAttribute("src", "studentsPhoto");


  contentStudentsImg.appendChild(img);
}





})
