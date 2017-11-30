# DATA DASHBOARD

## Introducción

Este es un PRODUCTO FINAL del SPRINT 2 "Creando un sitio web inteeractivo con JS". 

Los requerimientos que se nos pidieron fueron los siguientes: 
* El total de estudiantes presentes por sede y generación.
* El porcentaje de deserción de estudiantes.
* La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
* El porcentaje que representa el dato anterior en relación al total de estudiantes.
* El Net Promoter Score (NPS) promedio de los sprints cursados. 
* La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.
* La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos de HSE en promedio y por sprint.
* El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
* La puntuación promedio de l@s profesores.
* La puntuación promedio de l@s jedi masters.

##  Solución

Como parte de la solución se crearon tres archivos JS: variables.js, eventos.js, googlecharts.js y el archivo data.js por default. 

* variables.js: Como primera acción para desarrollar los requerimientos creamos este archivo en el cual desarrollamos por lo menos 5 preguntas. Les asignamos a cada resultado una variable para que al agregar la función o evento sea más fácil poder llamarlas. Así mismo, el archivo esta ordenado por SEDE y GENERACIÓN; logrando así una visualización mejor de los resultados obtenidos cuando se inspecciona en la consola. 

* eventos.js: Una vez terminado el desarrollo de las variables creamos en este archivo los eventos y funciones que permitan la interacción con el cliente. Así como también se realizaron nombramientos de nuevas variables y es aquí donde también pudimos enlazar el Google Chart; en el caso del ENROLLMENT para todas las generaciones y sedes; para el caso de NET PROMOTER SCORE aparecen para Arequipa Generación 2016-2 y 2017-1.

* googlecharts.js: En este archivo se crearon todas las funciones y variables para los gráficos. En el caso de ENROLLMENT se puede observar que si uno selecciona LIMA 2016-2 cambia la gráfica y los datos del total de estudiantes inscritas y el número de desertoras; lo mismo pasará si se selecciona SANTIAGO DE CHILE 2017-2.

Estos tres archivos se crearon para tener un mejor orden a la hora de crear las variables, funciones y eventos.

En el archivo main.css se dieron los estilos y maquetados a cada parte del dash board.

Todos resultados y variables que hemos logrado obtener se pueden visualizar en la consola de la web de forma más ordenada. Las secciones que tienen interacción, es decir, cambian los dígitos son : ENROLLMENT, NET PROMOTER SCORE, TEACHER RATING Y JEDI MASTER RATING. 

Las variables que cambian los gráficos son: ENROLLMENT Y NET PROMOTER SCORE. 

## Autoras

* Silvia Fuentes.
* Rocio Quilla.