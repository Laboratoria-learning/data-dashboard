window.addEventListener("load", function(){

debugger
var contentStudentsImg = document.getElementById("content-students-img");

var aqp = data.AQP;
var students = aqp["2016-2"].students;

for (var i = 0; i < students.length; i++) {
 var studentsPhoto = students[i].photo;

var img = document.createElement("img");
img.setAttribute("src",studentsPhoto);

contentStudentsImg.appendChild(img);
img.style.width = "200px";
img.style.height = "200px";
}

})
