import Intro from "../components/Intro.js";
import Personality from "../components/Personality.js";
import PageTitle from "../components/PageTitle.js";

export default class About {
  $target = null;
  $about = null;
  $title = null;
  intro = null;
  personality = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$about = document.createElement("section");
    this.$about.setAttribute("class", "about");
    this.$target.appendChild(this.$about);
    this.$title = new PageTitle({ $target: this.$about, name: "about" });
    this.render();
  }

  render() {
    this.intro = new Intro({ $target: this.$about });
    this.personality = new Personality({ $target: this.$about });
  }
}
