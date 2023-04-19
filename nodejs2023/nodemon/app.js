const http = require('http');

const servidor = http.createServer((req, res) => {
  res.end('Servidor con nodemon');
});

const PORT = 3000;
servidor.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
  console.log('Recibida peticion');
});
 // npm run serve || npx nodemon app