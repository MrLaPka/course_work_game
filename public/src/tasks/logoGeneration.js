import objectOnThePage from "../page_elements/objectOnThePage";
import Image from "../page_elements/Image";
import faerbolRender from "../character/gg/faerbolRender";
import monsterFaerbolRender from "../character/monster/monsterFaerbolRender";
import randomLogo from "./randomGen/randomLogo";

export default class logoGeneration {
  constructor() {
    let request = new XMLHttpRequest();
    request.open("POST", "/getLogos", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", () => {
      this.logos = {};
      for (let i = 0; i < JSON.parse(request.response).length; i++) {
        let key = String(JSON.parse(request.response)[i].logo);
        this.logos[`${key}`] = String(JSON.parse(request.response)[i].src);
      }
      this.getLogos();
    });
    request.send();
  }

  getLogos() {
    let numberTask;
    let newPictures = new randomLogo(this.logos);
    numberTask = newPictures.random();
    let randomItem = Math.round(Math.random() * (newPictures.keys.length - 1));
    const model = String(newPictures.keys[randomItem]);
    const rightSrc = numberTask[randomItem];
    let taskWindow = new objectOnThePage("div");
    taskWindow.create(
      "100%",
      "100%",
      undefined,
      undefined,
      "auto",
      undefined,
      "chosePicture"
    );
    taskWindow.positioning("1100", "block", "absolute", "center");
    taskWindow.setDistance("0", "0", "0", "0");
    taskWindow.pointBack(
      undefined,
      undefined,
      undefined,
      "white",
      "1",
      "black"
    );
    let pictureAnswer = new objectOnThePage("h2");
    pictureAnswer.create(
      undefined,
      undefined,
      undefined,
      undefined,
      "0",
      `Select ${model.toUpperCase()} logo and check your answer!`
    );
    pictureAnswer.fonts("3em", "sans-serif");
    taskWindow.appendChild(pictureAnswer);
    for (let i = 0; i < 3; i++) {
      let task = new Image();
      let item = Math.round(Math.random() * (numberTask.length - 1));
      task.create(
        numberTask[item],
        "15em",
        "13em",
        undefined,
        undefined,
        "1.5em"
      );
      task.positioning(1110, "inline-block");
      task.setMargins("10em", "3em");
      taskWindow.appendChild(task);
      numberTask.splice(item, 1);
    }

    let enterButton = new objectOnThePage("button");
    enterButton.create(
      undefined,
      undefined,
      undefined,
      undefined,
      "3em",
      "Check result!"
    );
    enterButton.fonts("1.5em");
    taskWindow.appendChild(enterButton);
    document.getElementById("globalPlayWindow").appendChild(taskWindow.div);

    taskWindow.addEventListener("click", event => {
      let target = event.target;
      while (target !== taskWindow.div) {
        if (target.tagName === "IMG") {
          if (document.getElementsByClassName("right_picture")[0]) {
            document.getElementsByClassName("right_picture")[0].className = '';
          }
          target.className = 'right_picture';
          if (target.src === String(document.location) + rightSrc) {
            target.id = "right";
          } else if (
            target.src !== String(document.location) + rightSrc &&
            document.getElementById("right")
          ) {
            document.getElementById("right").id = "notRight";
          }
        }
        target = target.parentNode;
      }
    });

    enterButton.addEventListener("click", function() {
      if (document.getElementById("right")) {
        const fR = new faerbolRender();
        fR.createFaerbol(undefined, 'img/slowfaerball.gif');
      } else {
        const mFR = new monsterFaerbolRender();
        mFR.createFaerbol();
      }
      taskWindow.remove();
      document.getElementById("spellbook").remove();
    });
  }
}
