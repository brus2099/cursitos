const estatusPedido = () => {
  return Math.random() < 0.8;
}

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve('Pedido fino, tu pizza fue arpobada');
    } else {
      reject('Pizza rechazada');
    }
  }, 3000)
});
/*
const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
}

const rechazarPedido = (razonRechazo) => {
  console.log(razonRechazo);
}

miPedidoDePizza.then(manejarPedido, rechazarPedido);
*/

miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })/*
.then(null, (razonError) => {
  console.log(razonError);
}); */
  .catch((razonError) => {
    console.log(razonError);
  });
  /* tambien aceptan nombres de funciones */
/* cuando la logica de las funcioens es más extensa */
  
