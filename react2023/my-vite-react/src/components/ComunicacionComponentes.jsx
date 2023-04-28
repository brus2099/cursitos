import React, { Component } from 'react';

class Padre extends Component {

  state = {
    contador: 0
  }

  incrementarContador = e => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render() {
    return(
      <>
        <h2>Comunicacion entre Componentes</h2>
        <p>Contador: <b>{this.state.contador}</b></p>
        <Hijo incrementar={this.incrementarContador} mensaje="puto"/>
        <Hijo incrementar={this.incrementarContador} mensaje="hola"/>
      </>
    )
  }
}

const Hijo = props => {
  return(
    <>
      <p>{props.mensaje}</p>   
      <button onClick={props.incrementar}>Incrementar</button>
   </>
  )
}

export default Padre;
/*
export {
  EventosES6,
  EventosES7,
  MasEventosAwevo
};
*/

/**Transporte de informacion
 * hay tres casos donde se transporta informacion entre componentes:
 * - de padre a hijo
 * - de hijo a padre con los eventos personalizados
 * - entre componentes mas profundos que los hijos y mas altos que los padres, al mismo tiempo que hijos de diferentes padres
 * para este ultimo existen tecnicas como Redux, los Portals y Context
 * estos ultimos dos forman parte de la API interna de React
 * estas tecnicas avanzadas funcionan mejor cuando vea componentes funcionales
 */