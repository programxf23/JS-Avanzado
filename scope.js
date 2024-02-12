/*El scope puede definirse como el alcance que una variable tendrá en tu código. 
En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código. 
Existen dos tipos de scope, el scope global y el scope local. 
*/
/*Cuando puedes acceder a una variable únicamente en cierta parte del código, 
se dice que esa variable está declarada en el scope local. 
Estas también son conocidas como variables locales. 
Un ejemplo de esto es cuando una variable está declarada dentro de un bloque o una función. 
Si tratas de acceder a esta variable fuera de esta función o bloque, 
tendrás un error que dirá que la variable no está definida.*/

let nombre = "Tomas"; //scope global

const saludar = ()=>{
    let apellido = "Herrera"; //scope local
    console.log(`nombre: ${nombre} y apellido: ${apellido}`);
}
saludar(); //true

//console.log(apellido); undefined


//scope heredado
const funcion1 = ()=>{
    let saludo = ("Hola, desde funcion 1");

    const funcion2 = ()=>{
        console.log(saludo);
    }
    funcion2();
}
 funcion1();

//
/*
Diferencias entre let, const y var
Variables declaradas con let o const. Cuando declaramos una variable let o const dentro de un bloque, 
el alcance o scope que tendrá será sólo dentro de ese bloque. 
Además, si existe una colisión de nombres entre dos variables let o const recibiremos un mensaje de error. 
Esto hace que seamos menos susceptibles a cometer errores al utilizarlas, 
es por esto que desde que salió ES6 es más recomendable utilizar let o const 
a la hora de declarar una variable en lugar de usar var.
*/