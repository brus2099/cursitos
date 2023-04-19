function saludar (nombre) {
  return `Hola ${nombre}!!`;
}

function bienvenida () {
  return 'Hola mundo';
}

// module.exports.funcionSaludar = saludar;
// module.exports.funcionBienvenida = bienvenida;

module.exports = {
  funcionSaludar: saludar,
  funcionBienvenida: bienvenida
};