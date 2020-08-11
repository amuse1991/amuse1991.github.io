export default class Personality {
  $target = null;
  $personality = null;
  data = {
    list: [
      {
        title: "can-do attitude",
        description:
          "주어진 문제가 어렵더라도 해결 가능하다는 마음가짐으로 임합니다.",
        icon: "personal-icon-01.png"
      },
      {
        title: "responsible",
        description:
          "업무에 책임감을 가지고 정해진 기한 내에 최선을 결과를 내려 노력합니다.",
        icon: "personal-icon-02.png"
      },
      {
        title: "self-motivated",
        description:
          "능동적으로 해야 할 일을 찾고 그 일을 해결하기 위한 기술을 학습합니다.",
        icon: "personal-icon-03.png"
      },
      {
        title: "cooperative",
        description: "동료의 이야기를 경청하고 비판을 합리적으로 수용합니다.",
        icon: "personal-icon-04.png"
      }
    ]
  };

  constructor({ $target }) {
    this.$target = $target;
    this.$personality = document.createElement("section");
    this.$personality.setAttribute("class", "personality");
    this.$target.appendChild(this.$personality);
    this.render();
  }

  render() {
    this.$personality.innerHTML = `
      ${this.data.list
        .map((item, idx) => {
          const { title, description, icon } = item;
          return `
          <figure class="personality__item">
            <img class="personality__img" src=\"static/${icon}\" alt=\"personality icon ${
            idx + 1
          } \" />
            <figcaption class="personality__caption">${title}</figcaption>
            <p class="personality__description">${description}</p>
          </figure>
          `;
        })
        .join("")}
    `;
  }
}
