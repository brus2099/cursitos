import React from 'react';
import { useFetch } from '../hooks/useFetch';

/**
 * 20
 * Hooks personalizados
 * esta ocasion el hook estara en la carpeta components
 * pero lo ideal es crear una carpeta 'hooks' y colocarlos ahi
 * para que React sepa que se trata de un hook, el nombre debe comenzar con 'use'
 * escrito en camelCase
 */
function HooksPersonalizados() {
  let url = 'https://pokeapi.co/api/v2/pokemlonp/';
  url = 'https://jsonplaceholder.typicode.com/users';
  // console.log(useFetch())
  let { data, isPending, error } = useFetch(url);
  // el hook funciono exiosamente
  return (
    <>
      <h2>Hooks personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={
          { whiteSpace: 'pre-wrap' }
        }>
          {/** cuando existe un error los datos anteriormente obtenidos no cambian porque en el hook no indcamos que los datos cambien dentro del setData en el catch
           * esto es util en sitios de comercio electronico, para que el usuario no pierda la informacion que esta obteniendo
           */}
          <code>{ /*JSON.stringify(data)*/}
            descomenta esta linea para ver la respuesta
          </code>
        </pre>
      </h3>
    </>
  );
}

export default HooksPersonalizados;