/*Un event loop, también conocido como bucle de eventos, 
es un mecanismo fundamental que existe en algunos lenguajes 
de programación, como JavaScript, para gestionar la ejecución 
de tareas de forma eficiente y no bloqueante.

En términos sencillos, el event loop es como un vigilante que 
está continuamente atento a la aparición de nuevos eventos o tareas para ser procesadas. 
Estos eventos pueden ser acciones del usuario, respuestas de servidores o temporizadores, 
entre otros. En lugar de ejecutar una tarea tras otra de forma secuencial, el event loop 
se encarga de organizar y gestionar estas tareas de manera asíncrona, 
lo que permite que el programa siga respondiendo a otros eventos mientras 
espera la finalización de operaciones lentas.

Imagina que es el encargado de recibir todas las peticiones y eventos que 
ocurren mientras el programa está en ejecución y luego decide cómo y cuándo deben ser atendidas.


*/

//programa sincrono de comportamiento nomral:
function saludar() {
  console.log("hola fer");
}
function despedir() {
  console.log("adios");
}

function main() {
  saludar();
  despedir();
}

main();

//funcion asincrona: ejemplo con callback
//primero se ejecutan las tareas, luego las microtareas y ultimo las tareas agendadas
function saludar() {
  console.log("hola fer");
}
function despedir() {
  console.log("adios");
}
function main() {
  saludar();
  setTimeout(() => {
    despedir();
  }, 2000);
  console.log("mensaje dentro del main");
}
main();

//ejemplo con promesas
function saludar() {
  console.log("hola fer");
}
function despedir() {
  console.log("adios");
}
function main() {
  saludar();
  Promise.resolve("mensaje promesa 1").then((msg) => console.log(msg));
  Promise.resolve("mensaje promesa 2").then((msg) => console.log(msg));
  despedir();
}
main();

