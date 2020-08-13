import Modal from "../components/Modal.js";
import CardList from "../components/CardList.js";
import PageTitle from "../components/PageTitle.js";
export default class Projects {
  $target = null;
  $project = null;
  $title = null;

  modal = null;
  cardList = null;

  dataset = {
    list: [
      {
        projectId: 1,
        title: "인공위성 관제 모니터링 웹 서비스",
        tags: ["react.js", "node.js"],
        titleDesc:
          "(주)쎄트렉아이와 진행한 산학 협력 프로젝트입니다. Node.js, React.js를 이용해 위성 정보를 웹 상에서 모니터링 할 수 있는 서비스를 개발했습니다.",
        thumbFileName: "thumb_sat.png",
        terms: "2018-03 ~ 2018-12",
        overview:
          "위성이 전달하는 위성 상태 정보 및 계측 정보를 도시하는 웹 어플리케이션을 개발했습니다. 본 프로젝트의 어플리케이션은 위성이 보내는 데이터 타입에 관계없이 차트를 표시할 수 있으며, 중앙 서버에서 보내는 데이터를 클라이언트에 브로드캐스팅하는 기능을 포함하고 있습니다. 본 프로젝트에서 저는 React.js와 Node.js 개발을 수행했습니다.",
        skills: [],
        roles: [],
        links: [],
        imageFileNames: ["aws-logo.png", "css-logo.png", "js-logo.png"]
      },
      {
        projectId: 2,
        title: "사내 업무 평가 웹 어플리케이션 개발",
        tags: [".NET MVC5"],
        titleDesc:
          "2017년 동계 인턴 기간 동안 수행한 1인 프로젝트 입니다. .NET MVC 프레임워크를 사용해 사원들의 업무 내용을 확인하고, 주간 및 월간 평가를 할 수 있는 웹 어플리케이션을 개발했습니다.",
        thumbFileName: "thumb_sat.png",
        imageFileNames: ["aws-logo.png", "css-logo.png", "js-logo.png"]
      },
      {
        projectId: 3,
        title: "인공위성 관제 모니터링 웹 서비스",
        tags: ["react.js", "node.js"],
        titleDesc:
          "(주)쎄트렉아이와 진행한 산학 협력 프로젝트입니다. Node.js, React.js를 이용해 위성 정보를 웹 상에서 모니터링 할 수 있는 서비스를 개발했습니다.",
        thumbFileName: "thumb_sat.png",
        imageFileNames: ["aws-logo.png", "css-logo.png", "js-logo.png"]
      },
      {
        projectId: 4,
        title: "사내 업무 평가 웹 어플리케이션 개발",
        tags: [".NET MVC5"],
        titleDesc:
          "2017년 동계 인턴 기간 동안 수행한 1인 프로젝트 입니다. .NET MVC 프레임워크를 사용해 사원들의 업무 내용을 확인하고, 주간 및 월간 평가를 할 수 있는 웹 어플리케이션을 개발했습니다.",
        thumbFileName: "thumb_sat.png",
        imageFileNames: ["aws-logo.png", "css-logo.png", "js-logo.png"]
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

    this.$title = new PageTitle({ $target: this.$project, name: "project" });

    this.$project.addEventListener("click", event => {
      if (event.target.dataset.action === "modal-open") {
        const projectId = Number(event.target.dataset.projectId);
        const modalData = this.dataset.list.find(
          item => item.projectId === projectId
        );
        this.modal.setState(modalData);
        return this.modal.open();
      }

      if (event.target.dataset.action === "modal-close") {
        return this.modal.close();
      }
    });
  }
}
