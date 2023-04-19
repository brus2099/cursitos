// Componentes van escritos empezando con mayuscula
import React, { Component } from 'react';

// mismo nombre de archivo
/*
class Componete extends Component {

  // metodo de a huevo en componentes clase
  render() {
    { asi se jalan las propiedades }
    return <h3>Soy Componente y mi msg es {this.props.msg}</h3>
  }
}
*/

// :O
/*
function Componente (props) {
  return <h3>Soy Componente y mi msg es {props.msg}</h3>
}
*/

// :OOO
const Componente = props => <h3>Soy Componente y mi msg es {props.msg}</h3>

export default Componente;