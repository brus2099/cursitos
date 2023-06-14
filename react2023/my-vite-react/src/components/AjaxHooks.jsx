import React, { useState, useEffect } from 'react';

/**
 * 19 
 * Peticiones asincronas con hooks
 */

// acostumbrarme a desestructurar los props
const Pokemono = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}

function AjaxHooks() {
  const [pokemonos, setPokemonos] = useState([]);

  useEffect(() => {
    // si se van a usar funcoines asincronas, React recomendia declararlas dentro del useEffect. declarar el callback del useEffect como async puede provocar comportamientos inesperados y se conoce como un antipatron, por lo cual no se recomienda. Por eso React recomienda hacer llamadas asincronas dentro del useEffect y no en su callback
    const getPokemonos = async (url) => {
      let res = await fetch(url);
      let json = await res.json();

      json.results.forEach(async pokemono => {
        let res = await fetch(pokemono.url);
        let json = await res.json();
        let pokeObjeto = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default
        };
        setPokemonos(pokemonosInterno => [...pokemonosInterno, pokeObjeto]);
      });
    }

    const url = 'https://pokeapi.co/api/v2/pokemon/';

    // otra prueba de que el codigo asincrono no se combina con el codigo sincrono de manera lineal
    getPokemonos(url);
    // no mames si funciona :0
    // la funcion se invoca dentro del mismo useEffect


    // result.forEach(async pokemono => {
    //   const res = await fetch(pokemono.url);
    //   const json = await res.json();
    //   let pokeObjeto = {
    //     id: json.id,
    //     name: json.name,
    //     avatar: json.sprites.front_default
    //   };
    //   // es posible pasar un callback a setPokemonos. el primer parametro es el estado anterior, en este caso pokemonos tiene el array con el estado actual de la variable pokemonos, la del useState, pero existe solo dentro del callback en ese scope
    //   setPokemonos(pokemonosInterno => [...pokemonosInterno, pokeObjeto]);
    // });
    // se deja el array vacio para que solo se ejecute una vez
  }, []);

  return (
    <>
      <h2>Peticiones Asincronas en Hooks</h2>
      {pokemonos.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (pokemonos.map(pokemono =>
        <Pokemono
          key={pokemono.id}
          name={pokemono.name}
          avatar={pokemono.avatar}
        />
      ))}
    </>
  );
}

export default AjaxHooks;