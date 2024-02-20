//setters y getters

//forma rudimentaria:
const persona = {
    nombre : '',
    edad : '',
}
const fernando = persona;
fernando.nombre = 'Fernando';
fernando.edad = '51';

console.log(fernando.nombre);

//getters y setters: se empleaba con el ECMAScript5
const alumno = {
    nombre : '',
    edad : '',
    getNombre: () => { 
        return this.nombre.toUpperCase();
    },
    setNombre: (n) => {
        this.nombre = n;
    }
}
const juan = alumno;
juan.setNombre('Juan');
console.log(juan.getNombre());

//a partir del ECMAScript 6:
const operario = {
    nombre : '',
    edad : '',
    get nombre(){ 
        return this.nombre_value.toUpperCase(); 
    },
    set nombre(n){
        if(n != 'Laura'){
            this.nombre_value = 'Nombre no valido';
        }
       
    }
}
const laura = operario;
laura.nombre = 'Mario';
console.log(laura.nombre);