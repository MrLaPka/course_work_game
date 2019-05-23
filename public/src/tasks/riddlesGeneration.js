import objectOnThePage from "../page_elements/objectOnThePage";
import Input from "../page_elements/Input";
import randomRiddles from "./randomGen/randomRiddles";
import checkSolutionRiddle from "./checkTasks/checkSolutionRiddle";

export default class riddlesGeneration {
  constructor() {
    this.riddles = {}
  }
  
  createInterface() {
    let request = new XMLHttpRequest();
    request.open("POST", "/getRiddles", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", () => {
      
      for (let i = 0; i < JSON.parse(request.response).length; i++) {
        let key = String(JSON.parse(request.response)[i].key);
        this.riddles[`${key}`] = String(JSON.parse(request.response)[i].riddle);
      }

      let taskWindow = new objectOnThePage("div");
      taskWindow.create("32.000em", "31.250em", undefined, undefined, "auto");
      taskWindow.positioning("1", "block", "absolute", "center");
      taskWindow.setDistance("0", "0", "0", "0");
      taskWindow.pointBack(
        undefined,
        undefined,
        undefined,
        "white",
        "1",
        "black"
      );
      let solutionOfRiddleH2 = new objectOnThePage("h2");
      solutionOfRiddleH2.create(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        "Write the solution in small letters in an empty field"
      );
      solutionOfRiddleH2.fonts("3em", "sans-serif");
      let task = new objectOnThePage("h3");
      task.fonts(undefined, "sans-serif");
      let newRiddle = new randomRiddles(this.riddles);
      let numberTask = newRiddle.random();
      task.create(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        String(numberTask)
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
        "enterButton2",
        undefined,
        "Check the answer!"
      );
      enterButton.fonts("1.5em");
      taskWindow.appendChild(solutionOfRiddleH2);
      taskWindow.appendChild(task);
      taskWindow.appendChild(solutionArea);
      taskWindow.appendChild(enterButton);
      document.getElementById("globalPlayWindow").appendChild(taskWindow.div);

      $("#solutionArea").keyup(function(event) {
        if (event.keyCode == 13) {
          $("#enterButton2").click();
        }
      });

      enterButton.addEventListener("click", function() {
        const cSR = new checkSolutionRiddle();
        cSR.check(solutionArea.value(), numberTask);
        taskWindow.remove();
        document.getElementById("spellbook").remove();
      });
    });
    request.send();
  }
}
