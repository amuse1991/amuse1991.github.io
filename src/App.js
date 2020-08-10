import dom from "./util/dom.js";
import NavBar from "./views/components/NavBar.js";
import Home from "./views/pages/Home.js";
export default class App {
  $target = null;
  $header = null;
  $content = null;
  $footer = null;

  constructor($target) {
    this.$target = $target;
    this.$header = dom.creatAndAppendChild("header", this.$target, {
      className: "header-container"
    });
    this.$content = dom.creatAndAppendChild("section", this.$target, {
      className: "content-container"
    });
    this.$footer = dom.creatAndAppendChild("footer", this.$target, {
      className: "footer-container"
    });

    this.render();
  }

  render() {
    const $NavBar = new NavBar({ $target: this.$header });

    const $Home = new Home();
  }
}
