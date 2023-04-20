/**
 * 8
 * Renderizado de elemenos de listas
 */

import React, { Component } from 'react';
import data from '../resources/data-example.json';

const ElementoLista = props => {
  return (
    <li>
      <a href={props.enlace} target="_blank">{props.nombre}</a>
    </li>
  );
}

class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ['primavera', 'verano', 'otoño', 'invierno']
    }
  }

  render() {
    return (
      <div className="">
        <h2>Renderizado de elementos</h2>
        <p>Estaciones del año</p>
        <ol>
          {
            this.state.seasons.map(elem => <li key={elem}>{elem}</li>)
          }
        </ol>
        <h3>Lista de Frameworks JS</h3>
        <ul>
          {
            // mucho cuidado con las key
            data.frameworks.map(elem => <ElementoLista key={elem.id} nombre={elem.name} enlace={elem.url}/>)
          }
        </ul>
      </div>
    );
  }
}

export default RenderizadoElementos;
