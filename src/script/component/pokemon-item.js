class PokemonItem extends HTMLElement {
  set pokemon(pokemon){
    this._pokemon = pokemon;
    this.render();
  }

  render(){
    this.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `
  }
}

customElements.define("pokemon-item", PokemonItem);