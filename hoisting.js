let nombre = "Fernando";

function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludar(nombre);

//hoisting:

saludar(nombre);

function saludar(nombre) {
  console.log("Hola " + nombre);
}

//con el hoisting podemos llamar a una funcion antes de que este definida

/*
Hoisting es un término para describir que las declaraciones de variables y 
funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. 
Esto sucede solamente con las declaraciones y no con las asignaciones. 
El código permanece igual, solo es una interpretación del motor de JavaScript.


*/
