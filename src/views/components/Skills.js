export default class Skills {
  $target = null;
  $skills = null;
  $chart = null;
  $chartDesc = null;

  dataset = {
    list: [
      {
        title: "javascript",
        level: 4,
        logo: "js-logo.png"
      },
      {
        title: "css",
        level: 3,
        logo: "css-logo.png"
      },
      {
        title: "react",
        level: 3,
        logo: "react-logo.png"
      },
      {
        title: "node",
        level: 2,
        logo: "node-logo.png"
      },
      {
        title: "aws",
        level: 2,
        logo: "aws-logo.png"
      }
    ]
  };

  constructor({ $target }) {
    this.$target = $target;

    this.$skills = document.createElement("section");
    this.$skills.setAttribute("class", "skills");
    this.$target.appendChild(this.$skills);

    this.$chart = document.createElement("figure");
    this.$chart.setAttribute("class", "skills__chart");
    this.$skills.appendChild(this.$chart);

    this.$chartDesc = document.createElement("ul");
    this.$chartDesc.setAttribute("class", "chart__description");
    this.$skills.appendChild(this.$chartDesc);

    this.render();
  }

  render() {
    this.$chart.innerHTML = `
    ${this.dataset.list
      .map(li => {
        const { title, level, logo } = li;
        return `
        <section class="chart__item-container">
        <figure class="chart__header">
          <img class="chart__header__logo" src="static/${logo}" alt="${title} logo" />
          <figcaption class="chart__header__caption">${title}</figcaption>
        </figure>
        <ul class="chart__items">
        ${Array.from({ length: Number(level) }, (v, i) => {
          return `<li class="chart__item--filled" data-theme='${title}'>${
            i === 0 ? `LEVEL : ${level}` : ""
          }</li>`;
        }).join("")}
        </ul>
        </section>
      `;
      })
      .join("")}
    `;
  }
}
