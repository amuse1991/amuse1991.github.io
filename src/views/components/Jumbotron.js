export default class Jumbotron {
  $target = null;
  $jumboContainer = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$jumboContainer = document.createElement("section");
    this.$jumboContainer.setAttribute("class", "jumbotron");
    this.$target.appendChild(this.$jumboContainer);
    this.render();
  }

  render() {
    this.$jumboContainer.innerHTML = `
      <h1 class="jumbotron__title">
      Hello, I'm <strong>Yoonho Shin</strong>. <br />
      I'm backend web developer.
      </h1>
      <a href="#" class="jumbotron__view-more">view my work</a>
    `;
  }
}
