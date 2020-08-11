import dom from "./util/dom.js";
import Header from "./views/components/Header.js";
import Footer from "./views/components/Footer.js";
import Home from "./views/pages/Home.js";
import About from "./views/pages/About.js";

export default class App {
  $target = null;
  $header = null;
  $pages = null;
  $footer = null;

  constructor($target) {
    this.$target = $target;
    this.$header = new Header({ $target });
    this.$pages = dom.creatAndAppendChild("section", this.$target, {
      className: "pages"
    });
    this.$footer = new Footer({ $target });
    this.render();
  }

  render() {
    const $Home = new Home({ $target: this.$pages });
    const $About = new About({ $target: this.$pages });
  }
}
