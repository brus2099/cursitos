const express = require('express');
const routerMatematicas = express.Router();
const {matematicas} = require('../datos/cursos').infoCursos;

// Cursos de matematicas
routerMatematicas.get('/', (req, res) => {
  res.send(matematicas);
});

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultado = matematicas.filter(curso => curso.tema === tema);

  if (resultado.length === 0) {
    return res.status(404).send(`No existen cursos de ${tema}`);
  }
  res.send(JSON.stringify(resultado));
});

module.exports = routerMatematicas;