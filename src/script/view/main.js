import "../component/pokemon-list.js";
const axios = require("axios");

const main = () => {
  const pokemonListElement = document.querySelector("pokemon-list");
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60`)
    .then((response) => {
      if (response.status != 200) {
        alert(`Ooops ${response.status}`);
        return;
      }
      let data = response.data;
      pokemonListElement.pokemons = data;
    })
    .catch((reject) => {
      pokemonListElement.pokemons(reject);
    });
};

export default main;