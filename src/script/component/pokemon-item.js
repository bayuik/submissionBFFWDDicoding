class PokemonItem extends HTMLElement {
  set pokemon(pokemon) {
    this._pokemon = pokemon;
    this.render();
  }

  set picture(picture) {
    this._picture = picture;
    this.render();
  }

  set type(type) {
    this._type = type;
    this.render();
  }

  set ability(ability) {
    this._ability = ability;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .card {
          border: 3px solid red;
          border-radius: 18px 18px 18px 18px;
          background: #FF005C;
          color: #efef;
        }
        
        img{
          background-color: #FFF600;
          border-radius: 15px 15px 0 0;
        }

        .card:hover > img{
          background-color: #FF005C;
        }

        .card:hover {
          box-shadow: 0px 0px 26px -10px rgba(255,246,0,1);
          position: relative;
          top: -20px;
          color: black;
          background-color: #FFF600;
        }

        #type {
          background-color: #455D7A;
          padding: 2px 5px;
          border-radius: 5px;
          color: #fff;
        }
      </style>

      <div class="card">
        <img src="${this._picture}" alt="...">
        <div class="card-body">
          <h3 class="text-center">${this._pokemon.name}</h3>
          <div class="d-flex justify-content-around">
            <p>Type</p>
            <p id="type">${this._type}</p>
          </div>
          <div class="d-flex justify-content-around">
            <p>Ability</p>
            <p id="type">${this._ability}</p>
          </div>
        </div>
      </div>`;
  }
}

customElements.define("pokemon-item", PokemonItem);