/* 

   Obtenemos un elemento en referencia.

   - Este es el nodo de HTML donde vamos a crear un nuveo elemento.

*/

const peliculas = document.getElementById("movies");

/* 

  Pra crear un nuevo elemento usamos createElement

    document.createElement(tipoElemento)

  - El tipo de lemento pasa como string "" o ''
  - Se debe guardar en una variable o constante.

*/

const newMovie = document.createElement("li")

/* 

  Para agregar elemnto al DOM desde la referencia usamos el método appende()

    elementoReferencia.append(NuevoElemento)

  -No pasa como string.

*/

movies.append(newMovie)

/* 

 Agragamos texto al nuevo elemento con innerText

  elemento.innerText = valor

- Valor pasa como string "" o ''

*/

newMovie.innerText = "Terminator";

/* 

 Agregamos la clase de al nuevo elemento con el método add()
    elemento.classList.add(clase)

  - La clase pasa como styring
  - El método aceota más de un parametro separandolos con comas ,

*/

newMovie.classList.add("List-item" , "bg-two");

// RETO Agrgamoos un quinto elemento



