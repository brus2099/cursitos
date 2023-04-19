const http = require('http')

const servidor = http.createServer((req, res) => {
  // aqui inicia la peticion
  // a partir de aqui se procesa lo que se debe devolver

  const pingaMensaje = 'Joton'
  console.log('Recibiendo solicitud');
  
  // finalizar el procesado de la petición
  res.end(pingaMensaje);
});

const PORT = 3000;

servidor.listen(PORT, () => {
  // lo que ocurre cuando se consulte al servidor
  console.log(`Escuchando en el puerto ${PORT}`);
});