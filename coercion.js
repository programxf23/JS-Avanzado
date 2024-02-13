const data1 = document.querySelector('#data1');
const data2 = document.querySelector('#data2');

const btn = document.querySelector('#btn');

//creamos la funcion para el click del boton:
btn.addEventListener('click', ()=>{
    console.log('pulsado');// coloco un console.log para ver si funciona

    dato = data1.value;
    dato2 = data2.value;
    let resultado = dato * dato2;

    console.log(`el resultado es: ${resultado} y el typeof es:  ${typeof(resultado)}`);


//como podemos forzar esta concatenacion para que se genere un resultado en la suma:

    dato = Number(data1.value);
    dato2 = Number(data2.value);
    let resultadoSuma = dato + dato2;

    console.log(`el resultado es: ${resultadoSuma} y el typeof es:  ${typeof(resultadoSuma)}`);
//con la suma se genera una concatenacion, pero si funciona con la multi, resta y div


});
//es lo mas cercano al tipado de datos en javascript sin irse a typescript

/*
La coerción es la conversión automática o implicita de valores de un tipo de dato a otro 
(Ejemplo: de cadena de texto a número). La conversión es similar a la coerción porque ambas 
convierten valores de un tipo de dato a otro pero con una diferencia clave - la coerción es 
implícita mientras que la conversión puede ser implícita o explícita.*/