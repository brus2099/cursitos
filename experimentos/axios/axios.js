
/*
async function consultarPokemon () {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
  console.log(response);
}

consultarPokemon();
*/

async function requestToLocalServer () {
  const response = await axios.get('http://localhost:3000/');
  console.log(response);
}

requestToLocalServer();