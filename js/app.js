/*
 * Funcionalidad de tu producto
 */
/*accediendo a los sprints
for(var elemento1 in data){
  for (var elemento2 in data[elemento1]){
    for (var elemento3 in data[elemento1][elemento2])
    console.log(
      elemento1 + "." + elemento2 + elemento3
    );
    console.log(
      data[elemento1][elemento2][elemento3]
    )
  }
}*/

for(var elemento1 in data){
  for (var elemento2 in data[elemento1]){
      var obj =  data[elemento1][elemento2]
      var arr = Object.keys(obj);
      console.log(data[elemento1][elemento2][arr[0]]);
  }
}

// Puedes hacer uso de la base de datos a través de la variable `data`

 /*+ ": " +     console.log(
       data[elemento1][elemento2]
     )*/
console.log(data);
