import "../component/pokemon-list.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const pokemonListElement = document.querySelector("pokemon-list");

  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => {
      if (response.status != 200) {
        alert(`Ooops ${response.status}`);
        return;
      }
      response.json().then((data) => {
        pokemonListElement.pokemons = data;
      });
    })
    .catch((reject) => {
      pokemonListElement.pokemons(reject);
    });
};

export default main;
