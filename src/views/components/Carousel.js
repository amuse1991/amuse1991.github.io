export default class Carousel {
  $target = null;
  $carousel = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$carousel = document.createElement("figure");
    this.$carousel.setAttribute("class", "carousel-container");
    this.$target.appendChild(this.$carousel);
    this.render();
  }

  render() {
    this.$carousel.innerHTML = `
      carousel Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad natus consequuntur nisi. Sapiente, neque fugiat labore ipsum accusamus voluptatibus expedita corporis consequatur aspernatur nihil quo dolor, voluptas consectetur molestias a!
    `;
  }
}
