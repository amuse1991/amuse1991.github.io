import Modal from "../components/Modal.js";
import CardList from "../components/CardList.js";
export default class Projects {
  $target = null;
  $project = null;
  modal = null;
  cardList = null;

  dataset = {
    list: [
      {
        title: "인공위성 관제 모니터링 웹 서비스",
        tags: ["react.js", "node.js"],
        titleDesc:
          "(주)쎄트렉아이와 진행한 산학 협력 프로젝트입니다. Node.js, React.js를 이용해 위성 정보를 웹 상에서 모니터링 할 수 있는 서비스를 개발했습니다.",
        thumbFileName: "thumb_sat.png"
      },
      {
        title: "사내 업무 평가 웹 어플리케이션 개발",
        tags: [".NET MVC5"],
        titleDesc:
          "2017년 동계 인턴 기간 동안 수행한 1인 프로젝트 입니다. .NET MVC 프레임워크를 사용해 사원들의 업무 내용을 확인하고, 주간 및 월간 평가를 할 수 있는 웹 어플리케이션을 개발했습니다.",
        thumbFileName: "thumb_sat.png"
      },
      {
        title: "인공위성 관제 모니터링 웹 서비스",
        tags: ["react.js", "node.js"],
        titleDesc:
          "(주)쎄트렉아이와 진행한 산학 협력 프로젝트입니다. Node.js, React.js를 이용해 위성 정보를 웹 상에서 모니터링 할 수 있는 서비스를 개발했습니다.",
        thumbFileName: "thumb_sat.png"
      },
      {
        title: "사내 업무 평가 웹 어플리케이션 개발",
        tags: [".NET MVC5"],
        titleDesc:
          "2017년 동계 인턴 기간 동안 수행한 1인 프로젝트 입니다. .NET MVC 프레임워크를 사용해 사원들의 업무 내용을 확인하고, 주간 및 월간 평가를 할 수 있는 웹 어플리케이션을 개발했습니다.",
        thumbFileName: "thumb_sat.png"
      }
    ]
  };

  constructor({ $target }) {
    this.$target = $target;

    this.$project = document.createElement("section");
    this.$project.setAttribute("class", "project");
    this.$target.appendChild(this.$project);

    this.modal = new Modal({ $target: this.$project });
    this.cardList = new CardList({
      $target: this.$project,
      dataset: this.dataset
    });
  }
}
