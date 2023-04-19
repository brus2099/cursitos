/*
  7
  Renderizado condicional: mostrar componente dependiendo de un resultado que depende del estado o propiedades
*/

import React, { Component } from 'react'

const Login = props => {
  return (
    <div className="">
      <h3>Log in</h3>
    </div>
  );
}

const Logout = props => {
  return (
    <div className="">
      <h3>Log out</h3>
    </div>
  )
}

class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cuando session se cumpla se renderiza un componente u otro
      session: true
    }
  }

  render() {
    return (
      <div className="">
        <h2>Renderizado Condicional</h2>
        { this.state.session ? 
            <Login /> : 
            <Logout /> }
      </div>
    );
  };
}

export default RenderizadoCondicional;