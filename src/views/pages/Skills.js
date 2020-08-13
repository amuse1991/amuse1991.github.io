import PageTitle from "../components/PageTitle.js";

export default class Skills {
  $target = null;
  $skills = null;
  $chart = null;
  $chartDesc = null;
  $title = null;

  dataset = {
    list: [
      {
        title: "javascript",
        level: 4,
        logo: "js-logo.png",
        descriptions: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!"
        ]
      },
      {
        title: "css",
        level: 3,
        logo: "css-logo.png",
        descriptions: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!"
        ]
      },
      {
        title: "react.js",
        level: 3,
        logo: "react-logo.png",
        descriptions: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!"
        ]
      },
      {
        title: "node.js",
        level: 2,
        logo: "node-logo.png",
        descriptions: [
          "1",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!"
        ]
      },
      {
        title: "aws",
        level: 2,
        logo: "aws-logo.png",
        descriptions: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores dolorum maiores accusantium aut excepturi sit quibusdam nemo facilis voluptatum esse ratione, deserunt molestias vero quae, quas neque pariatur natus!"
        ]
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

    this.$chartDesc = document.createElement("article");
    this.$chartDesc.setAttribute("class", "chart__description");
    this.$skills.appendChild(this.$chartDesc);

    this.$title = new PageTitle({ $target: this.$skills, name: "skills" });

    this.$chart.addEventListener("click", () => {
      const title = event.target.dataset.title;
      if (!title) return;
      const data = this.dataset.list.find(data => data.title === title) || {
        descriptions: ["no data"]
      };
      this.$chartDesc.innerHTML = `
      <img class="chart__desc__img" src="static/${data.logo}" alt="${
        data.title
      } logo">
      <ul>
          ${data.descriptions
            .map(desc => {
              return `<li>${desc}</li>`;
            })
            .join("")}
        </ul>
      `;
    });
    this.render();
  }

  render() {
    this.$chart.innerHTML = `
    ${this.dataset.list
      .map(li => {
        const { title, level, logo } = li;
        return `
        <section class="chart__item-container" data-title='${title}'>
        <figure class="chart__header">
          <img class="chart__header__logo" src="static/${logo}" alt="${title} logo" />
        </figure>
        <ul class="chart__items">
        ${Array.from({ length: Number(level) }, (v, i) => {
          return `<li class="chart__item--filled" data-title='${title}'>${
            i === 0 ? `${title.toUpperCase()}<br>level ${level}` : ""
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
