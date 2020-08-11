import Intro from "../components/Intro.js";
import Personality from "../components/Personality.js";
import Skills from "../components/Skills.js";

export default class About {
  $target = null;
  $about = null;
  intro = null;
  skills = null;
  personality = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$about = document.createElement("section");
    this.$about.setAttribute("class", "about");
    this.$target.appendChild(this.$about);
    this.render();
  }

  render() {
    this.intro = new Intro({ $target: this.$about });
    this.personality = new Personality({ $target: this.$about });
    this.skills = new Skills({ $target: this.$about });
  }
}
