/**
 * 17
 * useEffect: este hook permite representar el ciclo de vida de componentes funcionales
 * montaje - didmount
 * actualizacion - didUpdate
 * desmontaje - willUnmount
 *  */

import React, { useState, useEffect } from "react";

function HookUseEffect(props) {
  const [ scrollY, setScrollY ] = useState(0);
  const [ name, setName ] = useState('el webo');

  useEffect( () => {
    console.log('solo se ejecta una vez')
  }, [/**
        este parametro es un arreglo, y se le puede pasar un estado, y cada vez que ese estado cambie, se ejecutara el useEffect
         -- scrollY es pasado como parametro
        cada que la ventana se mueva, scrollY va a sufrir cambios, y se ejecutara el useEffect
        en el caso de que estuvieramoes haciendo una peticion a un servicio o a una api, esto representa un inconveniente ya que cada que el estado se actualice, se hara una peticion
        React recomienda que si el useEffect solo se va a ejecutar una vez, se le pase un arreglo vacio, para que no se ejecute cada que se actualice el componente
        esto lo hara equivalente al didmount de los componentes de clase
        y si no se coloca un arreglo, se ejecutara cada que se actualice el componente, y esto es equivalente al didUpdate de los componentes de clase
       */
  ])

  // es importante mencionar que se ejecutan en el orden en el que se declaran
  /**
   * normas generales
   * 1. es ideal tener un solo useEffect que funcione como didmount
   * 2. si se necesita ejecutar un useEffect cada que un estado cambie, se debe declarar un useEffect por cada estado
   * 3. no es recomendable dejar los useEffect sin dependencias, ya que se ejecutaran cada que se actualice el componente
   */

  useEffect( () => {
    //console.log('fase de actualizacion');

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener('scroll', detectarScroll)

    // cuando el scroll hoks ya no exista:
    return () => {
      window.removeEventListener('scroll', detectarScroll);
      //console.log('desmontando componente');
      // evidentemente cuando ya no exista en la UI se va a ejecutar
    }
  }, [scrollY]); 

  useEffect( () => {
    //console.log('state name cambio')
  }, [name])

  // para simular la fase de desmontaje, se debe retornar una funcion
  useEffect( () => {
    return () => {
      //console.log('fase de desmontaje')
      // este momento es perfecto para desuscribirse de eventos, o cancelar peticiones, o cualquier cosa que se quiera hacer antes de que el componente se desmonte, es la oportunidad para eliminar procesos y memoria que no se van a usar mas
    }
  })

  // los useEffect se ejecutan cada que se actualiza el componente, y en el orden en que se declaran

  return(
    <>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}

// no mames el de desmontaje no se ejecuta 

export default HookUseEffect;

