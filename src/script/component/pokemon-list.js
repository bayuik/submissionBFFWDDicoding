import axios from "axios";
import "./pokemon-item.js";

class PokemonList extends HTMLElement {
  set pokemons(pokemons) {
    this._pokemons = pokemons.results;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._pokemons.forEach((pokemon) => {
      const pokemonItemElement = document.createElement("pokemon-item");
      pokemonItemElement.classList.add("my-4", "col-sm-6", "col-md-4", "col-lg-3");
      pokemonItemElement.pokemon = pokemon;
      axios.get(pokemon.url).then((response) => {
        let data = response.data;
        pokemonItemElement.picture = data.sprites.front_default;
        pokemonItemElement.type = data.types[0].type.name;
        pokemonItemElement.ability = data.abilities[0].ability.name;
      });
      this.appendChild(pokemonItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = ``;
    this.innerHTML += `<h2>${message}</h2>`;
  }
}

customElements.define("pokemon-list", PokemonList);