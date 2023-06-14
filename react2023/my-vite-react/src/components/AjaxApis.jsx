import React, { Component } from 'react';

/**15
 * antes a los componentes funcionales se les llamaba componente pendejo
 * su unica funcion era contener una visualizacion o una plantilla para renderizar, pero no contenian lógica
 * toda la lógica era cargada por loc componentes clasistas, antes de la introducción de los hooks
 * en un inicio para aprender un lenguaje de programación era necesario comprender cosas abstractas como la teoria orientada a objetos
 * javascript integro esta abstraccion para que programadores de otros lenguajes pudieran trabajar de forma más sencilla, aunque no fue diseñado con este paradigma
 * una de las complicaciones de esta forma de trabajar fue el contexto, principalmente con la palabra this
 * es dificil entender el contexto en javascript con la programación orientada a objetos
 * react comenzo definiendo componentes en clase, pero esto aumentaba la curva de aprendizaje
 * en conclusion, las clases no existen, son solo azucar sintactivo 
 * En el gran cambio de ES6 react regreso a sus origenes, que fue ser un lenguaje funcional
 * ES6 esta orientado al scope, por tanto se simplifico la forma de escribir componentes
 * las clases confunden a las personas y las maquinas, ya que al transpilar codigo moderno a ES5, las clases son dificiles de transpilar y minificar, por lo cual tanbien almacenan más espacio
 * Con coponentes funcionales es más rapido construir, menos complicado escribir texto, van a pesar menos y sin consumir el mismo rendimiento que os clasistas
 *  */
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
        json.results.forEach(pokemono => {
          fetch(pokemono.url)
            .then(res => res.json())
            .then(json => {
              let pokemono = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default
              };

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
        <p> </p>
        {this.state.pokemonos.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (this.state.pokemonos.map(pokemono =>
          <Pokemono
            key={pokemono.id}
            name={pokemono.name}
            avatar={pokemono.avatar}
          />
        ))}
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