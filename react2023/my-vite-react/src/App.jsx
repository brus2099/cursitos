import React from 'react';
// para aplicaciones antiguas
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasEventosAwevo } from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import HookUseState from './components/HookUseState';
import HookUseEffect from './components/HookUseEffect'
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';

function App() {
  const [count, setCount] = useState(0);
  let name = "Bruno";
  let auth = false;
  let arrayGenerico = ["pinga", "webo", "elemento", "array"];
  let showComponent = null;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* comentarios en jsx */}
        {/* interpolacion de codigo js en jsx
            para añadir los valores en propiedades del elemento es sin comillas
            las comillas son para string
        */}
        <p id={name}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <ul>
          {/* las renderizaciones de listas ocupan un atributo key */}
          {arrayGenerico.map((elem, index) => <li key={index}>{elem}</li>)}
        </ul>
        <h2>Pinga webo mamgueboo {name}</h2>
        <p className="clase">
          {/* no es HTML!!!!!!! */}
          {count % 2 == 0 ? "Usuario está logueado" : 'pingawebo 2'}
          {2 + 3}
          { /* cualquier expresion que devualva un solo valor es valida */}
        </p>
      </div>
      <label htmlFor="weboNombre">Nombre</label>
      {/** los id se escriben normal */}
      <input type="text" id="weboNombre" />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/** no es valido añadir elementos e interpolaciones fuera de la etiqueta contenedora */}

      {/* mis componentes 
          dos formas de escribirlos
      */}
      <section>
        {/* componentes aceptan propiedades */}
        <Componente msg="pinga"></Componente>
        <Componente msg="webo" />
      </section>
      <hr />
      <section>
        {/* 
          5 
          las propiedades son valores que recibe el hijo del padre y se agrupan en un objeto props
          cada atributo de props son las propiedades que se pasan desde el padre
          son inmutables, de solo lectura
          strings, numeros, bools
          objetos, funciones, otros componentes, fragmentos de jsx
          cuando es componente de clase, la propiedad props se declara en el constructor
        */}
        <h2>video 5</h2>
        <Propiedades
          cadena="Esto es una cadena de texto"
          numero={99}
          bool={true}
          arreglo={[1, 2, 3]}
          objeto={{
            nombre: 'brus2099',
            correo: 'sexo.sexo@sexo.com'
          }}
          funcion={num => num * num}
          elementoReact={<i>elemento React como propiedad</i>}
          componenteReact={<Componente msg={'pasado como prop en una sintaxis terrible'} />}
        />
        {/* instalando prop-types */}
      </section>
      <hr />

      <section>
        <h2>video 6</h2>
        <Estado />
      </section>
      <hr />

      <section>
        <h2>video 7</h2>
        <RenderizadoCondicional />
      </section>
      <hr />

      <section>
        <h2>video 8</h2>
        <RenderizadoElementos />
      </section>
      <hr />

      <section>
        <h2>video 9</h2>
        <EventosES6 />
        <EventosES7 />
        <MasEventosAwevo />
      </section>
      <hr />

      <section>
        <h2>Video 12</h2>
        <ComunicacionComponentes />
      </section>
      <hr />

      <section>
        <h2>Video 13</h2>
        <CicloVida />
      </section>
      <hr />

      <section>
        <h2>video 14</h2>
        {
          false ?
            <AjaxApis /> :
            'quita el condicional en AjaxApis'
        }
      </section>
      <hr />

      <section>
        <h2>A huevo hooks!!</h2>
        <h2>video 15</h2>
        <p>Leer comentario dentro del archivo del componente AjaxAis</p>
        <h2>video 16</h2>
        <HookUseState titulo="followers" />
      </section>
      <hr />

      <section>
        <h2>video 17</h2>
        <HookUseEffect />
      </section>
      <hr />

      <section>
        <h2>video 18</h2>
        <RelojHooks />
      </section>
      <hr />

      <section>
        <h2>video 19</h2>
        {true ?
          <p>quita el condicional en AjaxHooks</p> :
          <AjaxHooks />}
      </section>
      <hr />

      <section>
        <h2>video 20</h2>
        <HooksPersonalizados />
      </section>
      <hr />

      <section>
        <h2>video 21</h2>
        <Referencias />
      </section>

    </div>
  )
}

export default App

// los componentes pueden tener o no estado
// antes los componentes de clase eran los que guardaban logica, y los 'tontos' eran ocmponentes estaticos
// en React 16.0.8 se introdujeron los hooks
// los componentes de funciones ya incluian estado


