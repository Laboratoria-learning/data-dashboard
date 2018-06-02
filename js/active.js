function bodyOnLoad() {
    
    var eFilter = document.getElementById("filter");
   
    var data = Object.keys(data);
        console.log(data);


}













// function bodyOnLoad() {
//     var eFilter = document.getElementById("filter");

//     //Adds numbers 0-9 to the select automatically
//     // for (i = 0; i < 10; i++){
//     //     var option = document.createElement('option');
//     //     option.setAttribute('value', i.toString());
//     //     option.appendChild(document.createTextNode(i.toString()));
//     //     eFilter.appendChild(option);
//     // }

//     //I want to identify all the strings that are inside the object city, because those are the "semesters"
//     // var semester = ()
//     // console.log(semester);
//     // for (i = 0; i > data.lenght; i++) {
//     //     if (typeOf object.property === 'true') {
//     //         console.log('here you are')
//     //     }
//     // }
//     // console.log(data.AQP);

//     // function search(city){
//     //     for (var i=0; i < city.length; i++) {
//     //         if (city[i].typeof === 'true') {
//     //             return data[i];
//     //         }
//     //     }
//     // }


//     // for (var city in data) {
//     //     var test = [];
//     //     test.push(Object.getOwnPropertyNames(data));
//     //         console.log(test);
//     //     for (i=0; i<test.length; i++){
//     //         console.log(test[i]);
//     //         console.log(data.test[i]);
//     //     }

//     //console.log(Object.getOwnPropertyNames(data));

//     for (var semester in city) {
//         console.log(semester);
//         console.log(Object.getOwnPropertyNames(data));
//         if (typeof semester == 'string') {
//             console.log(semester)
//         }
//         console.log(semester, city);
//         var option = document.createElement('option');
//         const newLocal = city.valueOf() + ": " + semester.valueOf();
//         var optionValue = newLocal;

//         option.setAttribute('value', optionValue);
//         option.setAttribute('data-semester', semester);
//         option.appendChild(document.createTextNode(optionValue));
//         eFilter.appendChild(option);
//     }
// }



// function selectOption() {
//     //console.log(data.AQP["2017-1"].students[0].active);

//     var countActive = 0;

//     for (var student in data.AQP["2017-1"].students) {
//         console.log(students.name.valueOf());
//         if (student.active == true) {
//             countActive = countActive + 1;
//         }
//     }
//     console.log(countActive);

// }








