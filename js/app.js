/*mediante esta función cambiaremos el contenido segun boton*/
var addAndHide = function (event) {
  var tabSeleccionado = event.target.dataset.tabSelect;
  var overview = document.getElementById("overview");
  var students = document.getElementById("students");
  var teachers = document.getElementById("teachers");

  if (tabSeleccionado === "tabOverview") {
    students.style.display = "none";
    teachers.style.display = "none";
    overview.style.display = "block";
  } else if (tabSeleccionado === "tabStudents") {
    students.style.display = "block";
    teachers.style.display = "none";
    overview.style.display = "none";
  } else if (tabSeleccionado === "tabTeachers") {
    students.style.display = "none";
    teachers.style.display = "block";
    overview.style.display = "none";
  }
}
/*En esta función obtenemos los botones y le agregamos un evento a cada uno mediante un for, el evento se desencadena mediante un click y permitira que aparezca el contenido solicitado*/
var changeArticle = function () {
  var btns = document.getElementsByClassName("tab");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", addAndHide);
  }
}
changeArticle();

/*Crearemos una función que nos permita obtener las generaciones por sede*/
var sedes = document.querySelector('.sedes');
var sedesOptions = sedes.getElementsByTagName('option');
var generations = document.querySelector('.generations');
var sprints = document.getElementById('sprints');

/*el evento onchange ocurre cuando el valor de un elemento <select> ha sido cambiado*/
sedes.onchange = function (event) {
  genSelect(event.target.value);/*event.target.value obtiene el valor de la sede*/
};
/*Funcion para que al seleccionar una sede cambie las generaciones en base a cada sede*/
function genSelect(sede) {
  var datagene = Object.keys(data[sede]);
  generations.textContent = "";
  for (var i = 0; i < datagene.length; i++) {
    var option = document.createElement('option');
    option.textContent= datagene[i];
    generations.appendChild(option);
  }
}
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
