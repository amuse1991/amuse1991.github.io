import Intro from "../components/Intro.js";
import Personality from "../components/Personality.js";
import PageTitle from "../components/PageTitle.js";

export default class Contacts {
  $target = null;
  $contacts = null;
  $title = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$about = document.createElement("section");
    this.$about.setAttribute("class", "contacts");
    this.$target.appendChild(this.$about);
    this.$title = new PageTitle({ $target: this.$about, name: "contacts" });
    this.render();
  }

  render() {}
}
