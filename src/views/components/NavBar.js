import dom from "../../util/dom.js";
export default class NavBar {
  $target = null;
  $nav = null;
  constructor({ $target }) {
    this.$target = $target;
    this.$nav = dom.creatAndAppendChild("nav", this.$target, {
      className: "navbar"
    });
    this.render();

    const $toggleBtn = document.querySelector(".navbar__menu-toggle");
    $toggleBtn.addEventListener("click", event => {
      console.log("click");
      const $navItemContainer = document.querySelector(
        ".navbar__item-container"
      );
      $navItemContainer.classList.toggle("navbar__item-container--hidden");
    });
  }

  render() {
    this.$nav.innerHTML = `
      <a href="#" class="navbar__logo">Yoonho Shin</a>
      <i class="fas fa-bars navbar__menu-toggle"></i>
      <ul class="navbar__item-container navbar__item-container--hidden">
        <li class="navbar__nav-item">home</li>
        <li class="navbar__nav-item">about</li>
        <li class="navbar__nav-item">projects</li>
        <li class="navbar__nav-item">articles</li>
        <li class="navbar__nav-item">contacts</li>
      </ul>
      
    `;
  }
}
