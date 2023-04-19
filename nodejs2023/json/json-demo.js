// const curso = require('./curso.json');

// console.log(curso.temas);

let infoCurso = {
  "titulo": "Aprende Node JS",
  "numVistas": 777,
  "numLikes": 666,
  "temas": [
    "Javascript",
    "Node JS"
  ],
  "esPublico": true
}

let infoCursoJSON  = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo);