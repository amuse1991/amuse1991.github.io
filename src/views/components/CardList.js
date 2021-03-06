import Card from "./Card.js";

export default class CardList {
  $target = null;
  $cardList = null;
  cards = null;
  dataset = null;

  constructor({ $target, dataset }) {
    this.$target = $target;
    this.dataset = dataset;

    this.$cardList = document.createElement("section");
    this.$cardList.setAttribute("class", "card-list");
    this.$target.appendChild(this.$cardList);

    this.cards = dataset.list.map(
      data => new Card({ $target: this.$cardList, data })
    );
  }
}
