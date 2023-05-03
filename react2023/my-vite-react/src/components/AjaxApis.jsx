import React, { Component } from 'react';

const Pokemono = props => {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  )
}

class AjaxApis extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemonos: []
    }
  }

  componentDidMount() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        json.results.forEach(pokemono => {
          fetch(pokemono.url)
            .then(res => {
              return res.json()
            })
            .then(json => {
              let pokemono = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default
              };
              console.log(pokemono)

              let pokemonos = [...this.state.pokemonos, pokemono];
              
              this.setState({ pokemonos });
            });
        });
      });
  }

  

  render() {
    return (
      <>
        <h2>Peticiones Asincronas con Ajax y APIs</h2>
        <button onClick={updatePokemonos}>Consultar estado</button>
        {
          this.state.pokemonos.map(pokemono => <Pokemono key={pokemono.id} name={pokemono.name} avatar={pokemono.avatar} />)
        }
      </>
    )
  }
}

export default AjaxApis;

/**
 * 13
 * Peticiones 
 * los ciclos de vida del componente pueden ser utiles al hacer peticiones
 * cuando el componente se inicia se hace la peticion antes de mostrar cualquier cosa
 * 
 */