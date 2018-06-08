function addItem() {
    var newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("box").value;
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
    saveList();
  }

//   var input = document.getElementById("box")
//   input.value == "";

  function removeItem() {
    document.getElementById("list").removeChild(this);
    saveList();
   }
   function saveList() {
    localStorage.storedList = document.getElementById("list").innerHTML;
   }
   function loadList() {
    document.getElementById("list").innerHTML = localStorage.storedList;
    for(var i = 0; i < list.children.length; i++) {
     list.children[i].onclick = removeItem;
    }
   }
