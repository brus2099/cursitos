/*
  6
  Estado: las variables que intervienen en la modificacion del componente
  como se encuentran en cierto momento dado
  todos los componentes pueden tener componente
  es inmutable: cuando se modifica el estado se genera una copia de respaldo y se agrega lo nuevo a la copia, generando un nuevo estado 
  no se puede modificar directamente
  es asincrono: cuenta con sus metodos para modificarlo
  En react el flujo corre en una sola direccion y descendente: de padres a hijos
  antes solo los componentes basados en clase podian usar estado
  desde los hooks, los componentes de funciones tambien lo tienen
*/

//el estado del padre se puede pasar al hijo

import React, { Component } from 'react';

/* esto es valido */
const EstadoHijo = props => {
  return (
    <div className="">
      <h3>{props.contadorHijo}</h3>
    </div>
  )
}

class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }
    /*
        setInterval(() => {
          this.setState({
            contador:this.state.contador + 1
          });
        }, 1000);
      */
  }

  render() {
    return (
      <div className="">
        <h2>El estado</h2>
        <p>{this.state.contador}</p>
        <EstadoHijo contadorHijo={this.state.contador} />
      </div>
    );
  }
}

export default Estado;