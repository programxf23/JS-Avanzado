//sincronicidad - promesas - await - async

const Datos = [
  {
    id: "jojo",
    fecha: "okok",
  },

  {
    id: "jojo",
    fecha: "okok",
  },

  {
    id: "jojo",
    fecha: "okok",
  },
];

//primero hacemos la funcion asincrona:

/*const getDatos = () => {

    setTimeout(()=>{
        return Datos;
    }, 2000);
  
};
console.log(getDatos()); // me devuevle undefined...
*/

//se resuelve con una promesa:

const getDatos = () => {
  return new Promise((resolve, reject) => {
    //cuando se cumple la funcion devuelve la promesa...
    if (Datos.length === 0) {
      return reject(new Error("No hay datos"));
    } else {
      setTimeout(() => {
        resolve(Datos);
      }, 2000);
    }
  });
};
console.log(
  getDatos()
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log(error))
);
