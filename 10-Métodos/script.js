/* 

Métodos de navegación

Nos permiten movernos entre loos elementos relacionados en el DOM

*/

// Referencias

const padre = document.
getElementById('parent')
const hijo = document. 
getElementById('child')
const hermano = document. 
getElementById('sibling')

// parentNode -> Devuelve el nodo padre del elemento.

console.log(hijo.parentNode);

// childNodes -> Devuelve una colección (Nodelist)n de todos los nodos hijos, incluyendo elementos, texto, comentarios.

console.log(padre.childNodes);

// children -> Devuelve una colección de html, de lod nodos hijos que son elementos de la misma. Ignora nodos de texto o comentarios.

console.log(padre.children);

// firstChild -> Devuelve el primer nodo hijo, puede ser un nodo texto, comentario u olemento.

console.log(padre.firstChild);

// firstElementChild -> Devuelve el primer nodo hijo, que sea un elemento de html

console.log(padre.firstElementChild);

// lastChild -> Devuelve  elk último nodo hijo, puede ser nodo de texto, comentario u elemento.

console.log(padre.lastChild);

// lastElementChild -> Devuelvbe el último nodo hijo que sea un elemento.

console.log(padre.lastElementChild);

// nextSibling -> Devuelve el siguiente nodo hermano, puede ser nodo de texto, comentario u elemento.

console.log(hijo.nextSibling);
console.log(hermano.nextSibling);

// nextElementSibling -> Devuelve elkn siguiente nodo hermasno a que sea un elemento

console.log(hijo.nextElementSibling);
console.log(hermano.nextElementSibling);

// previousSibling -> Devuelve el anterioor nodo hermano, puede ser un nodo de texto, comentario u elemento.

console.log(hijo.previousSibling);
console.log(hermano.previousSibling);

// previousElementSibling -> Devuelve el nodo anterior nodo hermano que sea un elemento.

console.log(hijo.previousElementSibling);
console.log(hermano.previousElementSibling);
