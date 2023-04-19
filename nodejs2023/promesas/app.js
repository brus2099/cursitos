const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(promesaCumplida) {
      resolve('Respuesta de exito cumplida');
    } else {
      reject('Respuesta de rechazo');
    }
  }, 3000);
});

const manejarPromesaCumplida = valor => {
  console.log(valor);
}

const manejarPromesaRechazada = razonRechazo => {
  console.log(razonRechazo);
}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);