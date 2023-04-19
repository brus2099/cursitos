const http = require('http');
const {infoCursos} = require('./rutas-cursos');

const servidor = http.createServer((req, res) => {
  const {method} = req;

  switch(method) {
    case 'GET':
      return manejarSolicitudGET(req, res);
    case 'POST':
      return manejarSolicitudPOST(req, res);
    case 'PUT':
      return manejarSolicitudPUT(req, res);
    default:
      res.statusCode = 501;
      res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`);
  }
});

function manejarSolicitudGET(req, res) { // 200 ok
  const path = req.url;

  console.log(res.statusCode);
  if (path==='/') {
    res.writeHead(200, {'Content-Type':'application/json'});
    return res.end('Respuesta de la ruta inicial codigo 200');
  } else if (path==='/api/cursos') {
    return res.end(JSON.stringify(infoCursos));
  } else if (path==='/api/cursos/programacion') {
    return res.end(JSON.stringify(infoCursos.programacion));
  } 

  res.statusCode = 404;
  res.end('Recurso solicitado no existe');
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;

  if (path==='/api/cursos/programacion') {
    let cuerpo = '';
    req.on('data', contenido => {
      cuerpo += contenido.toString();
    });
    req.on('end', () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);
      cuerpo = JSON.parse(cuerpo);
      console.log(typeof cuerpo);
      console.log(cuerpo.titulo);
      return res.end('Se supone que al recibir un POST se debe crear el recurso. Haz de cuenta que fue creado.');  
    });
    // return res.end('Se supone que al recibir un POST se debe crear el recurso. Haz de cuenta que fue creado.');
  }
}

function manejarSolicitudPUT(req, res) {
  const path = req.url;

  if (path==='/api/cursos/programacion/1') {
    return res.end('El curso con id 1 se ha actualizado.')
  }
}

const PORT = 3000;

servidor.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
