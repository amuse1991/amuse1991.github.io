import Jumbotron from "../components/Jumbotron.js";
export default class Home {
  $target = null;
  $home = null;
  jumbotron = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$home = document.createElement("section");
    this.$home.setAttribute("class", "home");
    this.$target.appendChild(this.$home);
    this.jumbotron = new Jumbotron({ $target: this.$home });
  }

  render() {}
}
