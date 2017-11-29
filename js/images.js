window.addEventListener("load", function(){

//debugger
var contentStudentsImg = document.getElementById("content-students-img");

var aqp = data.AQP;
var students = aqp["2016-2"].students;

for (var i = 0; i < students.length; i++) {
 var studentsPhoto = students[i].photo;
 var nameStudents = students[i].name;

var div = document.createElement("div");
var img = document.createElement("img");
var span = document.createElement("span");


img.setAttribute("src",studentsPhoto);
img.setAttribute("alt","foto de la estudiante");


div.appendChild(img);
div.appendChild(span);
span.textContent = nameStudents;
contentStudentsImg.appendChild(div);
img.style.width = "200px";
img.style.height = "200px";


}

})
