/* 

Evento

Un ecento es una acció o suceso que ocurre en el navegador o en un elemento DOM. Puede ser iniciado por el usuario o por el sistema y pueden ser *manejados* mediante javascript.

+ Manjer eventos

Significa escribir código que reaccione de cierta manera cuando algo específico suceda. Para manejar eventos es importante conocer algunos conceptos claves. 

1.- Target (Blanco)

El elemento target es el elemento del DOM en el que ocurrio el evento. Estre se encuentra dentro del objeto evento (event) y se accede mediantre la propiedad evente target.

2.- Event Listener (Escuchadior)

El event Listener es el "oido" que está atento a que ocurra un evento en un elemento específico. Usamo el método addEventListener para escichar eventos.

3.- Trigger (Disparador)

Es simplemente el desencadenante que provoca que un event ocurra. Es la acción que realiza el usuario o el sistema para activar al evento. 

  * Hacer clic
  * Mover el raton
  * Escribir en un input

4.- Event Handler (Manejador)

El event Handlers es la acción que se ejecuta cada vez que ocurre el evento. Con código JS le decimos que hace el event handler.

  * Mostrar un mensaje
  * Cambiar de color
  * Lanzar un alerta
  * ...
  * 
Sintaxis 

    target.eventListener( trigger , eventHandler )

- target: elemento donde ocurre el evento
- listener: Escucha y detecta el evento.
- trigger: La acción que ocurre donde el evento
- handler: La función que se ejecuta al ocurrir el evento.


*/

const button = document.getElementById("button");

button.addEventListener("click" , mostrarMensaje );

/* 

  Definimos la función

*/

function mostrarMensaje() {
  console.log("le haz picado 👍");
}