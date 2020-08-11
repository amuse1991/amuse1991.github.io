import Carousel from "./Carousel.js";

export default class Modal {
  $target = null;
  $modal = null;
  $modalContent = null;
  carousel = null;

  constructor({ $target }) {
    this.$target = $target;

    this.$modal = document.createElement("section");
    this.$modal.setAttribute("class", "modal");
    this.$target.appendChild(this.$modal);

    this.$modalContent = document.createElement("article");
    this.$modalContent.setAttribute("class", "modal__content");
    this.$modal.appendChild(this.$modalContent);

    this.carousel = new Carousel({ $target: this.$modalContent });
  }
}
