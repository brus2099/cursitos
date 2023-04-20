/**
 * 9
 * Eventos: los eventos del navegador 
 * diferentes formas de definirlos
 */

import React, { Component } from 'react'

// 10
// con properties initializer
class EventosES7 extends Component {

  state = {
    contador: 0
  }

  //para evitar el bindeo las clases se definen con componentes de clase
  // las arrow functions heredan el contexto del cual pertenecen
  // weboz
  sumar = () => {
    this.setState({
      contador: this.state.contador += 1
    });
  }

  restar = () => {
    this.setState({
      contador: this.state.contador -= 1
    });
  }

  // los hooks resolvieron un vergo de cosas mamon
  // escribir componentes de clase es demasiado verboso por la sintaxis que una clase requiere implicitamente
  // 

  render() {
    return (
      <div className="">
        <h2>Eventos en componentes de clase ES7</h2>
        <nav>
          {/**con parentesis es invocacion inmediata */}
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <p>{this.state.contador}</p>
      </div>
    );
  }
}

class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }

    //estudiar el binding
    // no olvidar this
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    this.setState({
      contador: this.state.contador += 1
    });
  }

  restar() {
    this.setState({
      contador: this.state.contador -= 1
    });
  }

  render() {
    return (
      <div className="">
        <h2>Eventos en componentes de clase ES6</h2>
        <nav>
          {/**con parentesis es invocacion inmediata */}
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <p>{this.state.contador}</p>
      </div>
    );
  }
}

// .l.
// mamadas para simlpificar el componente
const Boton = ({ miEventoClic }) => <button onClick={miEventoClic} >Boton povre</button>

// 11
class MasEventosAwevo extends Component {
  /**
   * los eventos sinteticos son los que react proporciona especiamente para ser usados el JSX
   * estos solo reciben un solo parametro de evento
   */
  syntheticClick = (e) => {
    console.log(e);
  }

  nativeClick = (e, msg) => {
    console.log(msg);
  }

  render() {
    return (
      <div className="">
        <h2>Mas sobre eventos</h2>
        <button onClick={this.syntheticClick}>Sintetico</button>

        <button onClick={
          // esta mamada es una llamada inmediata, y asi se genera el evento nativo de html
          (e) => this.nativeClick(e, "mensaje porque es evento nativo")
        }>Nativo</button>
        <br />
        {/* fijate bien en las propiedades
            onClick esta funcionando como prop y no como evento
            para eso hay que pasar la funcion por prop
        */}
        <Boton onClick={
          (e) => this.nativeClick(e, "boton povre")
        }/>
        <Boton miEventoClic={
          (e) => this.nativeClick(e, "boton povre")
        }/>
      </div>
    );
  }
}

export {
  EventosES6,
  EventosES7,
  MasEventosAwevo
};

/**
 * sigo usando componentes de clase porque asi se hacia antes de la version 16
 * es util este codigo antiguo por si tengo que mantener un proyecto viejo 
 * siempre hay un chingo de proyectos react en internet con componentes clase 
 */