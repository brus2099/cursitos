const http = require('http');

const servidor = http.createServer((req, res) => {
  /*
  console.log('Esta es la peticion');
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  */

  console.log('Esta es la respuesta');
  res.statusCode = 200;
  console.log(res.statusCode);

  res.setHeader('content-type', 'application/json');
  console.log(res.getHeaders());

  res.end('Respuesta del servidor');
});

const PORT = 3000;
servidor.listen(PORT, () => {
  console.log(`Listening at port ${PORT}...`)
});
