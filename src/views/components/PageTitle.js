export default class PageTitle {
  $target = null;
  $title = null;

  constructor({ $target, name }) {
    this.$target = $target;
    this.$title = document.createElement("header");
    this.$title.setAttribute("class", "page-title");
    this.$target.insertAdjacentElement("beforebegin", this.$title);

    this.$title.innerHTML = `
      <h1 class>${name}</h1>
      <div class="page-title__decorator"></div>
    `;
  }
}
