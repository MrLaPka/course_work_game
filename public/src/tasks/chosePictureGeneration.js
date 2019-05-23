import objectOnThePage from "../page_elements/objectOnThePage";
import Image from "../page_elements/Image";
import faerbolRender from "../character/gg/faerbolRender";
import monsterFaerbolRender from "../character/monster/monsterFaerbolRender";
import randomExcess from "./randomGen/randomExcess";

export default class chosePictureGeneration {
  constructor() {
    let request = new XMLHttpRequest();
    request.open("POST", "/getVegetables", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", () => {
      this.vegetables = {};
      for (let i = 0; i < JSON.parse(request.response).length; i++) {
        let key = String(JSON.parse(request.response)[i].name);
        this.vegetables[`${key}`] = String(JSON.parse(request.response)[i].src);
      }
      this.getFruits();
    });
    request.send();
  }

  getFruits() {
    let request = new XMLHttpRequest();
    request.open("POST", "/getFruits", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", () => {
      this.fruits = {};
      let numberTask;
      for (let i = 0; i < JSON.parse(request.response).length; i++) {
        let key = String(JSON.parse(request.response)[i].name);
        this.fruits[`${key}`] = String(JSON.parse(request.response)[i].src);
      }
      let randomTask = Math.random();
      let right;
      if (randomTask < 0.5) {
        let newPictures = new randomExcess(this.fruits);
        numberTask = newPictures.random();
        let newOnePicture = new randomExcess(this.vegetables);
        right = newOnePicture.randomOne();
        numberTask.push(right);
      } else {
        let newPictures = new randomExcess(this.vegetables);
        numberTask = newPictures.random();
        let newOnePicture = new randomExcess(this.fruits);
        right = newOnePicture.randomOne();
        numberTask.push(right);
      }

      let taskWindow = new objectOnThePage("div");
      taskWindow.create(
        "100%",
        "31.250em",
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
        "What is the excess item?"
      );
      pictureAnswer.fonts("3em", "sans-serif");
      taskWindow.appendChild(pictureAnswer);
      for (let i = 0; i < 4; i++) {
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
        taskWindow.appendChild(task);
        numberTask.splice(item, 1);
      }

      let enterButton = new objectOnThePage("button");
      enterButton.create(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        "Check result!"
      );
      enterButton.fonts("1.5em");
      taskWindow.appendChild(enterButton);
      document.getElementById("globalPlayWindow").appendChild(taskWindow.div);

      taskWindow.addEventListener("click", event => {
        let target = event.target;
        while (target !== taskWindow.div) {
          if (target.tagName === "IMG") {
            if (target.src === String(document.location) + right) {
              target.id = "right";
            } else if (
              (target.src !== String(document.location)) + right &&
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
          fR.createFaerbol(undefined, 'img/magicfaer.gif');
        } else {
          const mFR = new monsterFaerbolRender();
          mFR.createFaerbol();
        }
        taskWindow.remove();
        document.getElementById("spellbook").remove();
      });
    });
    request.send();
  }
}
