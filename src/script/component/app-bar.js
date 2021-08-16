class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      nav {
        background-color: #FF005C;
      }
    </style>
    <nav class="navbar">
      <div class="container-fluid">
        <h1 class="m-auto text-white">Pokemon</h1>
      </div>
    </nav>`;
  }
}

customElements.define("app-bar", AppBar);
