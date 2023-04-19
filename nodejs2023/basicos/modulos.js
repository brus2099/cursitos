/*
console.log('El poyo');
console.warn('Warn');
console.error(new Error('Creacion de un error'));
*/

/*
console.log(process.argv[1]);
console.log(process.argv[2]);
*/

//console.log(process.memoryUsage())
/*
const os = require('os');

console.log(os.userInfo());
*/

/*
function unString (texto){
  console.log(`Un texto y su argumento ${texto}`);
}

function sumar (a, b) {
  console.log(a + b);
}
console.log('antes del timeout')
setTimeout(unString, 1000, 'pinga huevo poyo pinga');

console.log('despues del primer timeout')
setTimeout(sumar, 3000, 1, 2);

setImmediate(unString, 'otro texto');
console.log('viejo pendejo')

setInterval(unString, 2000, 'desde interval')
*/

const fs = require('fs');
console.log('antes de la lectura')

const archivo = fs.readFileSync('index.html', 'utf-8');
console.log(archivo);
console.log('despues de leer el archivo');


fs.renameSync('index.html', 'main.html', (err) => {
  if(err){
    throw err;
  }
  console.log('Nombre cambiado ahuevo')
});

console.log('despues de cambiar el nombre');
/*
fs.appendFileSync('index.html', '<p>Hola joto</p>', (err) => {
  if (err) {
    throw err
  } 
  console.log('contenido agregado joton');
});
console.log('despues de añadir contenido');

fs.writeFileSync('index.html', 'Contenido Nuevo', (err) => {
  if (err) {
    throw err
  }
  console.log('Contenido reemplazado joto');
});
console.log('despues de reescribir el archivo');

fs.unlinkSync('main.html', (err) => {
  if(err){
    throw err;
  }
  console.log('eliminado');
});
console.log('despues de eliminar');
*/