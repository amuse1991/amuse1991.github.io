export default class Footer {
  $target = null;
  $footer = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$footer = document.createElement("footer");
    this.$target.appendChild(this.$footer);
  }
}
