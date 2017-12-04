document.addEventListener("DOMContentLoaded", function(event) {
    var jsonObj = data;
    var selectSeat;

    var lima = document.getElementById("lima");
    var arequipa = document.getElementById("arequipa");
    var mexico = document.getElementById("mexico");
    var chile = document.getElementById("santiago");

    var select = document.getElementById("promocion");

    var tabs = document.getElementsByClassName("tab-links");

    // Load combo box with LIM data
    getPromotionBySeat("LIM");

    select.addEventListener('change', function () {
       getStudents(selectSeat, this.options[this.selectedIndex].value);
    });

    lima.addEventListener('click', function () {
        getPromotionBySeat("LIM");
    });

    arequipa.addEventListener('click', function () {
        getPromotionBySeat("AQP");
    });

    mexico.addEventListener('click', function () {
        getPromotionBySeat("CDMX");
    });

    chile.addEventListener('click', function () {
        getPromotionBySeat("SCL");
    });
    
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            console.log(this);
            console.log(this.innerText);
            showTab(this, this.innerText);
        })
    }

    // function getStudents(seat, promotion) {
    //     var students = jsonObj[seat][promotion]["students"];
    //     var ratings = jsonObj[seat][promotion]["ratings"];
    //     var divContent = document.getElementById("student-content");
    //     var divToClone = document.getElementById("students");

    //     for ( var i = divContent.childNodes.length - 1; i > 0; i-- ) {
    //         divContent.removeChild(divContent.childNodes[i]);
    //     }

    //     var totalStudents = document.getElementById("total-students");
    //     totalStudents.innerText = students.length;

    //     var desertion = 0;
    //     for (var j = 0; j < students.length; j++) {
    //         var student = students[j];
    //         var clone = divToClone.cloneNode(true);
    //         clone.getElementsByClassName("student-name")[0].innerText = student["name"];
    //         var photo = clone.getElementsByClassName("img-student")[0];
    //         photo.src = student["photo"];
    //         photo.alt = student["name"];
    //         clone.style.display = "block";
    //         divContent.appendChild(clone);
    //         console.log(clone);
    //         if (!student["active"]) {
    //             desertion++;
    //         }
    //     }

    //     var totalDesertion = document.getElementById("total-desertaron");
    //     totalDesertion.innerText = desertion;

    //     var inProcess = document.getElementById("process");
    //     console.log(totalStudents);
    //     console.log(desertion);
    //     console.log(totalStudents - desertion);
    //     inProcess.innerText = parseInt(students.length) - parseInt(desertion);
    // }

    function showTab(evt, tabName) {
        tabName = tabName.toLowerCase();
        console.log(tabName);

        var tabContent = document.getElementsByClassName("tab-content");
        for (var i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }

        var tabLinks = document.getElementsByClassName("tab-links");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";
        evt.className += " active";
    }

    function getPromotionBySeat(seat) {
        console.log(seat);
        console.log(jsonObj);
        selectSeat = seat;
        var select = document.getElementById("promocion");
        for (var i = select.options.length - 1; i > 0 ;i--) {
            select.remove(i);
        }

        var promotions = Object.keys(jsonObj[seat]);
        for (var p in promotions) {
            var opt = document.createElement("option");
            opt.innerText = promotions[p];
            opt.id = p;
            select.appendChild(opt);
        }

        var optDefault = document.createElement("option");
        optDefault.selected;
        optDefault.id = "";
        optDefault.a
    }

});