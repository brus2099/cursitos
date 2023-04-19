import React from 'react';
import PropTypes from 'prop-types'

const Propiedades = props => {
  return (
    <div className="">
      <h2>Propiedades</h2>
      <p>{props.porDefecto}</p>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.bool ? 'verdadero' : 'falso'}</li>
        <li>{props.arreglo.join('-')}</li>
        <li>{props.objeto.nombre + ' ' + props.objeto.correo}</li>
        <li>{props.arreglo.map(props.funcion).join(' ')}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

export default Propiedades;

// las propiedades pueden definirse desde dentro
Propiedades.defaultProps = {
  porDefecto: 'las props default'
};

// este paquete restringe los tipos de las propiedades que se estan recibiendo del padre
Propiedades.propTypes = {
  // debe ser numero y es requerida. Si saltan los warning en la consola a pesar de que se renderizan
  numero: PropTypes.number.isRequired
}
