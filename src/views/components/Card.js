export default class Card {
  $target = null;
  $card = null;
  data = null;

  constructor({ $target, data }) {
    this.$target = $target;
    this.$card = document.createElement("article");
    this.$card.setAttribute("class", "card");
    this.$target.appendChild(this.$card);
    this.data = data;

    this.render();
  }

  render() {
    const { projectId, title, tags, titleDesc, thumbFileName } = this.data;
    this.$card.innerHTML = `
      <h2 class="card__title">${title}</h2>
      <img class="card__thumb" src="static/${thumbFileName}" alt="${title} thumbnail">
      <ul class="card__tag-group"> 
        ${tags.map(tag => `<li class="card__tag">${tag}</li>`).join("")}
      </ul>
      <p class="">${titleDesc}</p>
      <button type="button" class="card__button" data-project-id="${projectId}" data-action="modal-open">learn more</button>
    `;
  }
}
