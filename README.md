# Data Dashboard

**Por Lorena Palominos y Jocelyne González**

* **Track:** _Common Core_
* **Curso:** _Creando tu primer sitio web interactivo_
* **Unidad:** _Producto final_

***

## Flujo de trabajo

Para la ejecución de este maquetado realizamos la estructura del HTML de la siguiente manera: 

### Head 
Dentro del Head enlacazamos el favicon (ícono), la tipografía Roboto, el .css correspondiente a Font Awesome, Fontello y el main.css.

*Luego el cuerpo del documento sigue así:*

### Body
Dentro del Body utilizamos etiquetas semánticas como **header** y dentro colocamos **nav** para poder diferenciar el menú fijo, del menú desplegable y del tipo pestañas (tabs).

### Main
Dentro del main ubicamos el menú lateral de acordeón para poder acceder a las diferentes generaciones y ciudades.

Luego a base de divs se fueron generando los diversos contenedores de los datos solicitados y mediante Javascript llamando las funciones correspondientes para calcularlas por cada generación.

Los gráficos que se visualizan son imágenes simuladas (estáticas).

Al cerrar el **main** pero antes de cerrar el **body** se enlazan los Javascript correspondientes a la data y al del propio documento.

### index2.html 
Hay un segundo HTML, que se enlaza con la pestaña de Students, en el cual dejamos planteado cómo se vería en términos de jerarquía la información, esto incluye los cursos que ha tomado la estudiante y sus puntajes en cada área.

El **main.css** está elaborado de manera que cada parte del documento disponga de su propio contenedor y luego dentro de éste se agrupen y posicionen los diferentes elementos.

Los enlaces y menú están trabajados, en general, con una transición simple de colores.


###Javascript
Para realizar la funcionalidad del documento primero comenzamos declarando variables globales, estas permiten que puedan ser reutilizadas durante todo el código. 

Para explicar un poco más en detalle, existe un evento de click que permite desplegar el menú bajo el cargo del usuario que se encuentra visualizando el dashboard (también se utilizó la función window.onload para recargar la página), este menú le permite al usuario editar partes del documento, como su perfil y además eliminar alumnas. 

En la sección del javascript "Asignando valores a las variables según la generación elegida" nos permite seleccionar cada sede y cada generación y por medio de eventos de click los datos mostrados en pantalla van cambiando de acuerdo a esto, esto quiere decir que cambia los datos del gráfico (porcentaje) y además los títulos.

La función `sumAllStudents` corresponde a un contador que nos va sumando la cantidad de estudiantes, itera mediante un for y el if nos da la condición. 

`var paragraphReplace` reemplaza los datos de un párrafo creado con DOM

Más abajo describimos las variables y la función que muestra el porcentaje de deserción, las estudiantes inactivas y las que pasan el 70% de los sprints. 

Y para finalizar se describe una función que llama a todas las funciones. 





*Documento realizado en una pantalla de **1366x768** aproximadamente (de resolución total).*

