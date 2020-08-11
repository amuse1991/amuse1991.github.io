export default class Intro {
  $target = null;
  $intro = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$intro = document.createElement("section");
    this.$intro.setAttribute("class", "intro");
    this.$target.appendChild(this.$intro);
    this.render();
  }

  render() {
    this.$intro.innerHTML = `<p>안녕하세요.
    신입 프론트엔드 개발자 신윤호입니다. <br>
    프론트엔드 개발에 흥미를 가지고 컴퓨터공학과에 편입하여 본격적으로 개발을 시작했으며 <br>
    재학 기간 동안관련 수업 이수,웹 개발 직무 인턴쉽을 수행했습니다. <br>
    뿐만 아니라 웹을 주제로졸업 프로젝트를 진행했으며,공모전 수상 경험또한 가지고 있습니다. <br> </p>`;
  }
}
