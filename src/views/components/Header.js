import NavBar from "./NavBar.js";
export default class Header {
  $target = null;
  $header = null;
  navbar = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$header = document.createElement("header");
    this.$target.appendChild(this.$header);
    this.navbar = new NavBar({ $target: this.$header });
  }
}
