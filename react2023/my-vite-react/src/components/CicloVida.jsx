import React, { Component } from 'react';

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    // estado final del componente
    // esto ocurre antes de que el componente desaparezca
    console.log(3, 'El componente ha sido eliminado del DOM');
  }

  render() {
    return <p>{this.props.hora}</p>
  }
}

class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aún no está en el DOM");
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false
    }
    this.temporizador = null;
  }

  // despues de renderizar0
  componentDidMount() {
    console.log('El componente ya se encuentra en el DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    //permite pasar las propiedades y estado previos por si necesito trabajar con esos valoes antes de actualizar el estado
    console.log(2, 'Estado o las props del componente han cambiado');
    console.log(prevProps);
    console.log('Un segundo antes por el estado previo:', prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true
    });
  }

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false
    });
  }

  render() {
    console.log(4, "El componente se visualiza (o actualiza) en el DOM");
    return (
      <>
        <h2>Ciclo de vida de los componentes</h2>
        
        {
          // esta validacion es correcta 
          this.state.visible && <Reloj hora={this.state.hora} /> 
        }
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    )
  }
}

export default CicloVida;

/**13
 * Ciclo de vida
 * metodos especiales para ejecutar cosas de forma automatica
 * en funciones el equivalente es useEffect
 * en clases tiene 3 fases: montaje, actualizacion y desmontaje
 * hay metodos especiales para cada fase
 * Montaje: constructor, render y componentDidMount 
 * Actualizacion: render, componentDidUpdate
 * Desmontaje: componentWillUnmount
 * 
 */