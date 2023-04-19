function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de El Poyo`);
    setTimeout(() => {
      if (producto === 'taza') {
        resolve('Ordenando taza con el logo de El Poyo');
      } else { 
        reject(`Producto no disponible actualmente: ${producto}`);
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise( resolve => {
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue: ${respuesta}`);
    setTimeout(() => {
      resolve('Gracias por tu compra. Disfruta tu producto');
    }, 4000);
  });
}
/*
console.log(ordenarProducto('hola'));
console.log(procesarPedido('test'));
*/
/*
ordenarProducto('lapiz')
  .then( respuesta => {
    console.log('Respuesta recibida...');
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then( respuestaProcesada => {
    console.log(respuestaProcesada);
  })
  .catch( err => {
    console.log(err);
  });
*/

// forma async await
// funciones con async retornan promesas
async function realizarPedido (producto) {
  // detener la ejecucion de la funcion hasta completar l proceso asincrono
  try {
    const respuesta = await ordenarProducto(producto);
    console.log('respuesta recibida');
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error)
  }
}

realizarPedido('lapisss');
