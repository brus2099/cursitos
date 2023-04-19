const express = require('express');
const app = express();
const {infoCursos} = require('../datos/cursos');

// Los routers se importan de archivos aparte. Es un router por cada ruta.
const routerProgramacion = require('./router-programacion');
app.use('/api/cursos/programacion', routerProgramacion);
const routerMatematicas = require('./router-matematicas');
app.use('/api/cursos/matematicas', routerMatematicas);

app.get('/', (req, res) => {
  res.send('First server from Express 👋');
});

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});