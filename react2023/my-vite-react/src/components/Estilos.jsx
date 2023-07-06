/**
 * Estilos CSS en React
 * 
 * 1. importando la hoja de estilos
 * import './Estilos.css'
 * si se usa esta tecnica se sugiere crear un archivo css por componente con el mismo nombre, y colocar el css en la misma carpeta del componente de tal forma que se puedan ver juntos
 * ie:
 * src
 * --components
 * ----Estilos.jsx
 * ----Estilos.css
 * la otra estructura es crear una carpeta por componente y almacenar ahi los dos archivos
 * ie:
 * src
 * --components
 * ----Estilos
 * --------Estilos.jsx
 * --------Estilos.css
 * esto depende de la estructura del proyecto, o del lugar de trabajo
 * 
 * 2. creando estilos en linea
 * el atribito style de los elementos html acepta un objeto con las propiedades css (investigar como poner pseudo clases y pseudo elementos inline)
 * tambien es valido crear una variable con el objeto y pasarla como valor del atributo style
 * 
 * 3. agregando hojas de estilos modulares
 * revisa el archivo Estilos.module.css
 * 
 * 4. con sass
 * se instala node-sass
 */
import React from "react";
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";
import "./Estilos.scss";

const Estilos = () => {
  const estilos = {
    backgroundColor: '#61dafb',
    color: 'white',
    padding: '1rem',
    margin: '1rem',
    borderRadius: '1rem',
    textAlign: 'center',
  };

  return (
    <>
      <div className="estilo">
        <h2>Estilos CSS en React</h2>
      </div>
      <p className="slogan">Quality never goes out of style</p>
      <p className="slogan"
        style={{
          /* Se sobrepone al hover del import */
          color: '#61dafb',
        }}>Quality never goes out of style</p>
      <p style={ estilos }>Pasado como variable</p>
      <p>Agregando la hoja de estilos normalize.css en index.css</p>
      <code>@import-normalize</code>

      <h3>Estilos con modulos</h3>
      <button className={moduleStyles.btnInitial} onClick={ e => {
        e.target.classList.remove(moduleStyles.btnInitial);
        if (e.target.classList.contains(moduleStyles.error)) {
          e.target.classList.remove(moduleStyles.error);
          e.target.classList.add(moduleStyles.success);
        } else {
          e.target.classList.remove(moduleStyles.success);
          e.target.classList.add(moduleStyles.error);
        }
      }}>Cambia el color</button>

      <h3>Estilos con sass</h3>
      <p className="bg-sass">Estilos con sass</p>
    </>
  );
}

export default Estilos;