![logo](https://cdn-images-1.medium.com/max/945/1*3ebT5azEfTrKxANOE3BwyA.jpeg)
# Data Dashboard

### Hipotesis

#### Problematica actual
##### Definicion, delimitacion y planeación



### Objetivos
###### En este proyecto se engloban dos objetivos principales:
###### Primer Objetivo
> A nivel curricular el Objetivo basico es poner en practica lo aprendido en la unidad ** _"Creando un sitio web interactivo"_** _donde debemos incluir los conocimientos adquiridos sobre:_

* **Maquetado web** (_Con CSS y HTML_)
* **Creando interacción** (_Con Java Script_)
* **User experience desing** (_utilizando UX y UI_)


###### Segundo Objetivo
>De acuerdo al proyecto, el objetivo principal de data-Dashboard es realizar un sitio web en el cual se pueda encontrar y accesar de manera facil, agil y organizada la data de Laboratoria para de esta forma poder optimizar el tiempo de las TMs y miembros del staff en cada cede.
Dentro de los datos que normalmente se requiere analizar encontramos:

1. El total de estudiantes presentes por sede y generación.
2. El porcentaje de deserción de estudiantes.
3. La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. (La meta de puntos es 70% del total de puntos en HSE y en tech.)
4. El porcentaje que representa el dato anterior en relación al total de estudiantes.
5. El Net Promoter Score (NPS) promedio de los sprints cursados.
6. La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.
7. La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos de HSE en promedio y por sprint.
8. El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
9. La puntuación promedio de l@s profesores.
10. La puntuación promedio de l@s jedi masters.

***
### Investigacion, analisis y empatia
>Con la finalidad de obtener la mayor cantidad de informacion sobre las espectativas sobre el Data Dashboard y poder generar con nuestro nuevo sitio web la experiencia de usuario deseada nos dimos a la tarea de entrevistar  directamente a los usuarios; dentro de estos encontramos:
* TMs :
  * _Karla Rejas, GDL_
  * _Lucile Baratier, CDMX_
  * _Alejandra Ramirez, Lima_
  * _Valentina Smith, Santiago_
* Coachs:
  * _Yessenia Sanchez (Inti), GDL_
  * _Ameli Castillo (Meme), GDL_
  * _Levhita, GDL_
* HSE:
  * _Samantha Penilla, GDL_
* Alumnas GDL
  * Miriam Perez
  * Lillys Hernandez
  * Nadia Salazar


#### Fuentes de información
* [entrevista Sam](https://www.youtube.com/watch?v=j8vlV6c8IWg)
* [entrevista Meme](https://www.youtube.com/watch?v=vkNDiGRlch8&t=37s)
* [entrevista Karla]()
* [Entrevista Inti]()
* [Entrevistas TMs foraneas]()

Al cabo de analizar la información recabada de estas entrevistas encontramos que en la actualidad el metodo utilizado para accesar a la data que cada miembro del staff necesita se obtiene basicamente mediante encuestas y hojas excel que en su mayoria son generadas por ellos mismos o bien provienen de la base de datos de Laboratoria pero estas ultimas solo las recibe la TM de cada cede  quien debe procesarla y unificarla para despues compartir los datos que los coachs necesitan; este proceso es largo y tedioso debido a que todo viene en archivos separados y se debe empatar la informacion de cada alumna una por una.

**"Dedico mucho tiempo solo al organizar la data recibida en las hojas excel y ademas se recibe en archivos pesados y separados que requieren un equipo de computo mas potente para trabajar ;ademas se debe organizar todo antes de compartir con los Coachs en nuevos excel y eso a su ves nos consume mucho tiempo..."
(Karla Rejas,TM GDL)**

Los resultados de las alumnas solo se reflejan asta el final de cada sprint lo cual complica el trabajo al hacer las retrospectivas y feedback.
Ademas, las alumnas no tienen acceso directo a sus resultados por lo cual deben solicitarlos a su coach quien debe realizar un proceso manual y largo para acceder a su data

**Accedemos a la data por encuestas o excel y esta se filtra solo por generacion, cede, codigo y spring pero a mi me gustaria que estubiera presentada por unidad para poder ver como van evolucionando a traves del bootcamp y poder dar el feedback adecuado y detectar si necesitan ayuda a timpo...(Meme, Coach GDL)**

**nuestra base de datos actual solo incluye datos duros y no nos permite identificar de manera inmediata si alguna requiere asesoria mas personal o apoyo extra...(Inti, Coach  GDL)**

Actualmente no existe un sistema centralizador que permita conectar  y actualizar de manera automatizada la informacion, esto ademas de complicar el proceso de analisis no permite plasmar resultados de manera oportuna e inmediata y hace necesario que se repita un proceso de analisis manual cada vez que se debe acceder a cierta informacion.
Algo que debemos destacar es el hecho de que a pesar de que los resultados de cada estudiante se obtienen de la suma de los resultados tecnicos y los resultados de HSE Actualmenteno existe un formato que permita empatar los resultadosde ambos:

**Me gustaria un espacio que me permita agregar a la base de datos las interacciones que tengo con las alumnas y poder medir si detras de alguna mala nota existe alguna situacion en su vida que este afectando su desempeño... (Sam,  GDL)**

Si la organizacion y analisis manual de la informacion se automatizara mediante un proceso el tiempo que los miembos del staff emplean en esta actividad se reduciria conciderablemente y permitiria aumentar el desempeño y satisfaccion laboral.

*actualmente no se miden parametros importantes en la base de datos actual por ejemplo:*

1. Desempeño por tema y/o unidad por alumna, generacion,cede.
2. Nivel de aprovechamiento de los recursos y apoyos extracurriculares tales como cursos y charlas.
3. Compromiso y desempeño vs Problematicas personales.
***
Los usuarios entrevistados mencionaron las siguientes puntos importantes a desarrollar:

 **Cubriendo necesidades**

En la actualidad | Data Dashboard deseado
-----------------|-----------------------
se accede a la data por medio multiples archivos de hojas de exel|accede a la data organizada en un solo lugar
el tiempo de busqueda y acceso a la data es largo|un menu agil y especifico permite acceder rapidamente a la data
la TM es quien en primer instancia recibe la data , la organiza y distribuye en cada cede|todos pueden ingresar a la base de datos y copilar y/o analizar la data necesaria y/o solicitada de acuerdo a su perfil(TMs,HSE, coach,Alumna)
cada proceso para organizar la data recabada se hace de forma manual|la nueva web de Data Dashboard automatizara el analisis y organizacion de la data
si alguna alumna/estudiante requiere saber sobre su desempeño debe recurrir a su jedi o profesor para obtener sus resultados|cada alumna/estudiante tendra acceso a sus resultados en todo momento accediendo con su codigo
todo lo relacionado con HSE se procesa en una base de datos distinta y dificulta su analisis con la parte tecnica|dentro de cada perfil encontraremos un apartado de HSE que estara enlazado con los resultados tecnicos para facilitar el proceso de analisis y calificaciones finales.
no se cuenta con un medidor de aprovechamiento detallado|de manera clara y de facil acceso podemos acceder a graficas de aprovechamiento por cede,generacion,alumna,unidad y tema.
El proceso para las deserciones es complicado y externo, el proceso es confuso y no queda en cierta forma Archivado con el resto de la data las causas|cada perfil contara con un apartado que incluye un proceso claro para generar una baja en caso necesario y esta informmacion quedara registrada en nuestro data Dashboard

## Propuesta
### Pseudocodigo
1. generar una Pagina de inicio principal con imagen de fondo, datos basicos del data Dashboard y un log in que especifique el tipo de usuario(Tms,Coachs, HSE, Alumnas)
2. Pintar el nombre de usuario y desplegar menu de opciones (cede,generacion y especificaciones por tipo de usuario ya que dependiendo del perfil se definira a que data necesita tener acceso)
3. caso "1" usuario TMs:
  * menu:
    * overview (pagina principal)
    * sede
      * generacion
        * jedi (desplega informacion y evaluaciones asi como input para ingresar data - comentarios- retroalimentacion- compromisos-mas)
        * profesores (desplega informacion y evaluaciones asi como input para ingresar data - comentarios- retroalimentacion- compromisos-mas)
        * Alumnos (despliega perfil de ingreso- historia-trayecto-resultados-graficas comparativas de evolucion-boton de deserción que reedirige a form y este guarda la data ingresada para estadisticas)
          * NPS(El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

[Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
[Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
[Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100

[NPS] = [Promoters] - [Detractors])
          * aprovechamiento(individual y generacional tanto por unidad , tema y sprints)
            * individual(tema a tema con imput para comentarios)
            * Generacional
          * deserción
4. caso "2" Coachs
* menu: cede - generacion
    * ingresar Data(comentarios-resultados-datos sobesalientes...)
    * obtener Data
      * trabajos entregados
      * asistencias
      * resultadosde  
        * spring
        * Unidad
        * tema
        * extracurriculares

5. Caso "3" HSE:
    * menu (cede-generacion)
      * asistencias
      * interacciones(con opcion de review y de ingresar data)
      * Aprovechamiento(por tema-unidad-sprints)
      * deserción(form)

6. caso "4" alumnas
      * menu
        * perfil (overview)
        * skills
        * Desempeño
        * contacto

*App y version web **se inicia con la version caso 1 y posteriormente se implementaran las versiones necesarias para cubrir el total de los casos**
***
## ketching y Prototyping


### Flujo
![digrama de flujo](https://i.pinimg.com/originals/bb/48/50/bb48502996b4f8ecee052a4064cf9a6d.gif)
### primer Sketcher para determinar secuencia de interacciones
![mockup1](assets/images/flujo1.png)
***
![mockuo2](assets/images/flujo2.png)
***
![mockup3](assets/images/flujo3.png)
***
![mockup4](assets/images/flujo4.png)
***
![mockup5](assets/images/flujo5.png)
