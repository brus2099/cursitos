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

  useEffect( () => {
    console.log('fase de actualizacion');

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener('scroll', detectarScroll)
  });

  useEffect( () => {
    console.log('parametro scroll y')
  }, [])

  useEffect( () => {
    console.log('fase de actualizacion')
  })

  return(
    <>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}

export default HookUseEffect;

