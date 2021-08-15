class PokemonItem extends HTMLElement {
  connectedCallback(){
    this.render();
  }

  set pokemon(pokemon) {
    this._pokemon = pokemon;
    this.render();
}

  set picture(picture){    
    this._picture = picture
    this.render()
  }

  set detail(detail){
    this._detail = detail;
    this.render()
  }

  render(){

    this.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${this._picture}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this._pokemon.name}</h5>
          <p class="card-text">Moves: ${this._detail}</p>
          <a href="${this._pokemon.url}" class="btn btn-primary">Details</a>
        </div>
      </div>`
  }
}

customElements.define("pokemon-item", PokemonItem);