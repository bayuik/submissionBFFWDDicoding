import './pokemon-item.js';

class PokemonList extends HTMLElement {
    set pokemons(pokemons) {
        this._pokemons = pokemons.results;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._pokemons.forEach(pokemon => {
            const pokemonItemElement = document.createElement("pokemon-item");
            pokemonItemElement.pokemon = pokemon;
            fetch(pokemon.url)
              .then(response => {
                response.json()
                .then(pokemon => {
                  // let data = pokemon
                  pokemonItemElement.picture = pokemon.sprites.front_default
                  pokemonItemElement.detail = pokemon.moves[0].move.name
                })
              })
            this.appendChild(pokemonItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = ``;
        this.innerHTML += `<h2>${message}</h2>`;
    }
}

customElements.define("pokemon-list", PokemonList);