
const EventEmitter = require('events');

const emisorEventos = new EventEmitter();
emisorEventos.on('compra', (argumento) => {
  console.log(`se realizo evento con argumento ${argumento}`);
  console.log('Más de una instrucción');
});

// console.log(EventEmitter);
emisorEventos.emit('compra', 'webo');

emisorEventos.on('nuevo-evento', (argumento, arg2) => {
  let test = typeof argumento;
  let type2 = typeof arg2
  console.log(test, type2);
});

emisorEventos.emit('nuevo-evento', true, 2);

