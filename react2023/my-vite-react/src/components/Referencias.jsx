/**
 * 21. Referencias
 * Es la manera en que React permite poder controlar un elemento que ya se cargo en el DOM
 * Ej. un menu hamburguesa
 * Cuando damos clic en el boton, se abre el menu, y cuando damos clic en cualquier parte del documento, se cierra
 * Esto normalmente podria ser abordado con una variable de estado
 * Se cambiaria una clase visible true o false
 * Hay un inconeviente, y es que las variables de estado al cambiar generan renderizado de la ui
 * El hamburguesa ya esta cargado en el dom, y no tiene sentido hacer un renderizado condicional cada vez que se quiera quitar o poner
 * eso lo crearia y lo quitaria del dom
 * Otra forma de aborarlo es mediante css y la propiedad display, o con la propiedad visibility
 * Pero esto no es muy recomendable porque se estaria manipulando el dom directamente
 * Aqui es donde entran las referencias
 * Estas permiten un elemento que ya existe en el dom y poderlo manipular desde React
 * Ejemplos de cuando usar referencias:
 * - Animaciones: poner el focus de la animacion en un elemento especifico
 * - Seleccion de texto: copiando y pegando
 * - Media: controlar el reproductor de video. Esto es util porqur cada que se pausa y reproduce el video, se estaria generando un renderizado del video y cargandolo de nuevo
 * - Animaciones: controlar el scroll
 * - Terceros: librerias de terceros que no son de React
 * 
 * No abusar de las referencias!!
 */

import React, {createRef, useRef} from 'react';
// se escribe con una sola f
/**
 * el class components la forma de cargar referencias es con el metodo createRef, y no se puede usar en componentes funcionales
 * pero en los componentes funcionales se puede usar el hook useRef
 */

const Referencias = () => {
  //let refMenu = createRef(), // esto marca error
  let refMenu = useRef();
  let refMenuBtn = useRef();

  const handdleToggleMenu = e => {
    // sin referencias
    /*
    const menu = document.getElementById('menu');
    if (e.target.textContent === 'Menú') {
      e.target.textContent = 'Cerrar';
      menu.style.display = 'block';
    } else {
      e.target.textContent = 'Menú';
      menu.style.display = 'none';
    }
    */

    // con referencias
    if (refMenuBtn.current.textContent === 'Menú') {
      refMenuBtn.current.textContent = 'Cerrar';
      refMenu.current.style.display = 'block';
    } else {
      refMenuBtn.current.textContent = 'Menú';
      refMenu.current.style.display = 'none';
    }
  };

  return (
    <>
      <h2>Referencias</h2>
      <button id="menu-btn" ref={refMenu} onClick={handdleToggleMenu}>Menú</button>
      <nav id="menu" ref={refMenuBtn} style={{display: "none"}}>
        <a href="#">Sección 1</a>
        <br />
        <a href="#">Sección 2</a>
        <br />
        <a href="#">Sección 3</a>
        <br />
        <a href="#">Sección 4</a>
        <br />
        <a href="#">Sección 5</a>
        <br />
      </nav>
    </>
  );
};

export default Referencias;