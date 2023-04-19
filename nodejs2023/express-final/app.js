const express = require('express');
const app = express();

// se agrega ./ para indicar que no es un modulo de node. Es un archivo, y se indica que es un camino relativo
const {infoCursos} = require('./cursos');

console.log(infoCursos);

// Routers
const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);

app.get('/', (req, res) => {
  res.send('First server from Express 👋');
});

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

// Cursos de programacion
routerProgramacion.get('/', (req, res) => {
  res.send(infoCursos.programacion);
});

// : define parametros url
routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

  if(resultado.length === 0) {
    return res.status(404).send(`No existen cursos de ${lenguaje}`);
  }

  if(req.query.ordenar === 'vistas') {
    return res.send(JSON.stringify(resultado.sort((a, b) => a.vistas - b.vistas)));
  }

  if(req.query.ordenar === 'alfabetico') {
    return res.send(JSON.stringify(resultado.sort()));
  }

  res.send(JSON.stringify(resultado));
});

// acepta 2 parametros
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultado = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if(resultado.length === 0) {
    // se puede asignar un codigo de estado en el mismo send
    return res.status(404).send(`No existen cursos de ${lenguaje} de nivel ${nivel}`);
  }

  res.send(JSON.stringify(resultado));
});

// Router para matematicas
const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas);

// Cursos de matematicas
routerMatematicas.get('/', (req, res) => {
  res.send(infoCursos.matematicas);
});

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultado = infoCursos.matematicas.filter(curso => curso.tema === tema);

  if(resultado.length === 0) {
    return res.status(404).send(`No existen cursos de ${tema}`);
  }
  res.send(JSON.stringify(resultado));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});