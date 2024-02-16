//this
//this en contexto global
console.log(this); //hace referencia a windows


//ahora cuando hablamos de this en contexto de funcion es lo mismo:
function mostrarThis(){
    console.log(`mostrar this:  ${this}`); 
}
mostrarThis();

//usar this en use strict:
function mostrarThisStrict(){
    'use strict';
    console.log(`mostrar this: ${this}`);
}
mostrarThisStrict(); //undefined, no puede mostrar el contexto general


//this con objetos:
const persona = {
    nombre: "Tomas",
    saludar : ()=>{
        //nombre = 'Tomas';
        console.log(`Hola ${this.nombre}`);
    }
    
}
persona.saludar();//el resultado es undefined por que en la funcion saludar en ningun momento hace referencia al nombre

//entonces tenemos que definir el nombre dentro de la funcion saludar.


//this en el contexto de una clase:
function Persona(n){
    this.nombre = n;

}
Persona.prototype.saludar = function(){
    console.log(`Hola ${this.nombre}`);

}
//creamos una nueva instancia de la clase:
const Manuel = new Persona('Manuel');
Manuel.saludar();//en este caso this hace referencia a la instancia de clase que se ha referenciado