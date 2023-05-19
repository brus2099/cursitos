/*16
  Hook useState
  Permite usar el estado
  Es un metodo que devuelve el valor del estado y la funcion que lo va a actualizar
  react recomienda crear un conjunto de estos datos por cada variable a la que le hagamos un estado
  supongo que no tengo que hacer un objeto con las propiedades que tengo que actualizar como en las clases
*/

import React, { useState } from 'react';

function HookUseState (props) {
  // console.log(useState(0))
  // Es bueno desestructurar los dos valores que useState devuelve
  // Se debe proporcionar el valor inicial del valor
  // acepta string, bool, arreglos, objetos
  // nuevamente, por cada variable es bueno crear un useState
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1)

  const restar = () => setContador(contador - 1)

  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      { // nos ahorramos un huevo de codigo
        // suputamadre 
      }
      <p>Contador de {props.titulo}</p>
      <p>{contador}</p>
    </>
  );
}

export default HookUseState;

HookUseState.defaultProps = {
  titulo: 'Clicks'
}