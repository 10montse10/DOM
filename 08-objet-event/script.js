/* 

  Objeto Event

  El objeto Event representa un suceso que ocurre en el navegador, como un click, púlsar un tecla o el movimiento del mouse y proporciona información sobre las propiedades y métodos par manejarlo.

  Paraa acceder al objeto Event (e) se pasa automáticamente como un argumento a la función manejadora. 

  Ejemplo:

    function funcionManejadora(event) {
    // código a ejecutar...
    console.log(event) //Muestra la lista de propiedades y métodos del objeto
    }

  Propiedades del objeto Event

    - type: devuelve el tipo de event
    - target: devuelve el elemento a donde ocuirre el evento
    - timeStamp: devuelve la marca de tiempo en milisegundos desde la carga de la página.

    - code: devuelve el código de la tecla presionada.
    - key: devuelve el valor de la tecla presionada.

    - clientX: devuelve la posición horizontal del mouse en dirección a la ventana del navegador.
    - clientY: devuelve la posición vertical del mouse en dirección a la ventana del navegador.

*/

const button = document.getElementsByClassName("button");

/* console.log(button[0]); */

button[0].addEventListener('click', mostrarObjetoEvent);

/* Accedemos al objeto Event */

function mostrarObjetoEvent(event) {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.timeStamp);
}

document.addEventListener('keydown' ,function(e){
  console.log(e);
  console.log(e.type);
  console.log(e.code);
  console.log(e.key);
} );

document.addEventListener('mousemove' , (e) => {
  console.log(e.type);
  console.log( " Cord X: " + e.clientX +  " Cord Y: " + e.clientY );
});