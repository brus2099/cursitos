const express = require('express');
const routerProgramacion = express.Router();
const {programacion} = require('../datos/cursos').infoCursos;

// Middleware
routerProgramacion.use(express.json());

// Cursos de programacion
routerProgramacion.get('/', (req, res) => {
  res.send(programacion);
});

// : define parametros url
routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = programacion.filter(curso => curso.lenguaje === lenguaje);

  if (resultado.length === 0) {
    return res.status(404).send(`No existen cursos de ${lenguaje}`);
  }

  if (req.query.ordenar === 'vistas') {
    return res.send(JSON.stringify(resultado.sort((a, b) => a.vistas - b.vistas)));
  }

  if (req.query.ordenar === 'alfabetico') {
    return res.send(JSON.stringify(resultado.sort()));
  }

  res.send(JSON.stringify(resultado));
});

// acepta 2 parametros
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultado = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if (resultado.length === 0) {
    // se puede asignar un codigo de estado en el mismo send
    return res.status(404).send(`No existen cursos de ${lenguaje} de nivel ${nivel}`);
  }

  res.send(JSON.stringify(resultado));
});

routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
});

routerProgramacion.put('/:id', (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if(indice >= 0) {
    programacion[indice] = cursoActualizado;
    return res.send(JSON.stringify(programacion));
  }
  
  res.send('El curso que quieres actualizar no existe');
});

routerProgramacion.patch('/:id', (req,res) => {
  const infoNueva = req.body;
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoNueva);
    return res.send(JSON.stringify(programacion));
  }

  res.send('El curso que quieres actualizar no existe');
});

routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if(indice >= 0){
    programacion.splice(indice, 1);
    return res.send(JSON.stringify(programacion));
  }
  res.send('El curso que quieres actualizar no existe');
})

module.exports = routerProgramacion;