const mostrar = document.getElementById('mostrar');
const generar = document.getElementById('generar');


function * generador() {
    for(var i = 0; i < 5; i++) {
        yield(mostrar.innerHTML = i); //yield es como un return de una funcion normal
    
    }
}
const g = generador();

generar.addEventListener('click', ()=> {
    g.next()

});