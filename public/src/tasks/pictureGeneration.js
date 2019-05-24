import objectOnThePage from "../page_elements/objectOnThePage";
import Input from "../page_elements/Input";
import randomPictures from "./randomGen/randomPictures";
import Image from "../page_elements/Image";
import checkSolutionPicture from "./checkTasks/checkSolutionPicture";

export default class pictureGeneration {
  constructor() {
    let request = new XMLHttpRequest();
    request.open("POST", "/getPictures", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", () => {
      let pictures = {};
      for (let i = 0; i < JSON.parse(request.response).length; i++) {
        let key = String(JSON.parse(request.response)[i].answer);
        pictures[`${key}`] = String(JSON.parse(request.response)[i].src);
      }

      let taskWindow = new objectOnThePage("div");
      taskWindow.create(
        "100%",
        "100%",
        undefined,
        undefined,
        "auto",
        undefined,
      );
      taskWindow.positioning("1110", "block", "absolute", "center");
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
        "Write who on the picture in small letters in an empty field"
      );
      pictureAnswer.fonts("3em", "sans-serif");
      const pForImage = new objectOnThePage("p");
      pForImage.create(undefined, undefined, undefined, undefined, "0");
      pForImage.positioning(undefined, "block", undefined, "center");
      let task = new Image();
      let newPicture = new randomPictures(pictures);
      let numberTask = newPicture.random();
      task.create(
        String(numberTask),
        "15em",
        "13em",
        undefined,
        undefined,
        "0"
      );
      let solutionArea = new Input();
      solutionArea.create(
        "text",
        undefined,
        undefined,
        undefined,
        undefined,
        "solutionArea"
      );
      let enterButton = new objectOnThePage("button");
      enterButton.create(
        undefined,
        undefined,
        undefined,
        "enterButton3",
        undefined,
        "Check the answer!"
      );
      enterButton.fonts("1.5em");
      pForImage.appendChild(task);
      taskWindow.appendChild(pictureAnswer);
      taskWindow.appendChild(pForImage);
      taskWindow.appendChild(solutionArea);
      taskWindow.appendChild(enterButton);
      document.getElementById("globalPlayWindow").appendChild(taskWindow.div);

      $("#solutionArea").keyup(function(event) {
        if (event.keyCode == 13) {
          $("#enterButton3").click();
        }
      });

      enterButton.addEventListener("click", function() {
        const cSR = new checkSolutionPicture();
        cSR.check(solutionArea.value(), numberTask);
        taskWindow.remove();
        document.getElementById("spellbook").remove();
      });
    });
    request.send();
  }
}
