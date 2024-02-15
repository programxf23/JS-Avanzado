var nombre = "Manuel";
//IIFE (Expresión de Función Inmediatamente invocada - Immediately-invoked Function Expression (IIFE))
(function(){
    var edad = 37;
    console.log(37);
})();


//ecma 6 ++

function crearUsuario(n){
    let nombre = n;
    return{
        setNombre: function(n){
            nombre = n;
        },
        getNombre: function(){
            console.log(nombre);
        }
    }
}

let usuario1 = crearUsuario("Manuel");
usuario1.setNombre("Jose");
usuario1.getNombre();

/*

JavaScript es un lenguaje de programación popular que se utiliza ampliamente para el desarrollo de aplicaciones web. Una de las características más interesantes de JavaScript son los closures, que permiten crear funciones internas que pueden acceder y manipular variables en su ámbito externo. En este artículo, explicaremos en detalle el concepto de closures en JavaScript y cómo se utilizan.

Un closure en JavaScript es una función que se crea dentro de otra función y tiene acceso a las variables de su ámbito padre, incluso después de que la función exterior haya terminado de ejecutarse. En otras palabras, un closure es una función que "recuerda" el ámbito en el que se creó.

Para crear un closure en JavaScript, es necesario definir una función interna dentro de una función externa y devolver la función interna como un valor de retorno. La función interna tendrá acceso a las variables locales de la función externa y podrá utilizarlas incluso después de que la función externa haya terminado de ejecutarse.

Veamos un ejemplo para entender mejor cómo se crea un closure en JavaScript:

function sumar(a) {
  return function(b) {
    return a + b;
  }
}

var suma5 = sumar(5);
console.log(suma5(2)); // devuelve 7
console.log(suma5(7)); // devuelve 12
En este ejemplo, la función sumar toma un parámetro a y devuelve una función interna que toma otro parámetro b. La función interna devuelve la suma de a y b. Al llamar a sumar(5), se devuelve la función interna que tiene acceso a la variable a con el valor 5. Luego, se almacena esta función en la variable suma5. Al llamar a suma5(2) y suma5(7), se devuelve la suma de a y b con los valores 5 y 2 o 7, respectivamente.

Un closure es útil en situaciones donde se desea mantener el estado de una función entre llamadas. Por ejemplo, se puede utilizar un closure para contar el número de veces que se llama a una función:

function contador() {
  var count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

var contar = contador();
contar(); // muestra 1
contar(); // muestra 2
contar(); // muestra 3
En este ejemplo, la función contador devuelve una función interna que incrementa la variable count cada vez que se llama. Al llamar a contador(), se devuelve la función interna que tiene acceso a la variable count. Luego, se almacena esta función en la variable contar. Al llamar a contar() varias veces, se muestra el valor de count incrementado cada vez.

Vamos a ver algunos ejemplos más de closures en JavaScript.

Funciones de contador con diferentes incrementos.

function contador(incremento) {
  var count = 0;
  return function() {
    count += incremento;
    console.log(count);
  }
}

var contar1 = contador(1);
var contar5 = contador(5);
contar1(); // muestra 1
contar1(); // muestra 2
contar5(); // muestra 5
contar5(); // muestra 10
En este ejemplo, la función contador toma un parámetro incremento y devuelve una función interna que incrementa la variable count por el valor del parámetro incremento cada vez que se llama. Al llamar a contador(1), se devuelve la función interna que incrementa count en 1. Al llamar a contador(5), se devuelve la función interna que incrementa count en 5. Luego, se almacenan estas funciones internas en las variables contar1 y contar5, respectivamente. Al llamar a estas funciones varias veces, se muestra el valor de count incrementado por el valor del parámetro incremento cada vez.

Funciones de temporizador con intervalos diferentes.

function temporizador(intervalo) {
  setInterval(function() {
    console.log("Han pasado " + intervalo + " segundos.");
  }, intervalo * 1000);
}

temporizador(2);
temporizador(5);
En este ejemplo, la función temporizador toma un parámetro intervalo y utiliza la función setInterval para ejecutar una función anónima que muestra un mensaje después de que haya pasado el número de segundos especificado por el parámetro intervalo. Al llamar a temporizador(2), se muestra un mensaje cada 2 segundos. Al llamar a temporizador(5), se muestra un mensaje cada 5 segundos. Cada función anónima es un closure que tiene acceso al valor del parámetro intervalo y puede utilizarlo después de que la función temporizador haya terminado de ejecutarse.

Funciones de filtro para arrays.

function filtrar(array, filtro) {
  var resultado = [];
  for (var i = 0; i < array.length; i++) {
    if (filtro(array[i])) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

var numeros = [1, 2, 3, 4, 5];
var pares = filtrar(numeros, function(num) {
  return num % 2 === 0;
});
console.log(pares); // muestra [2, 4]
En este ejemplo, la función filtrar toma un array y una función filtro como parámetros y devuelve un nuevo array que contiene solo los elementos del array original que cumplen con la condición especificada por la función filtro. Al llamar a filtrar(numeros, function(num) { return num % 2 === 0; }), se devuelve un nuevo array que contiene solo los números pares del array original. La función function(num) { return num % 2 === 0; } es un closure que tiene acceso al array numeros y puede utilizarlo después de que la función filtrar haya terminado de ejecutarse.


*/