import objectOnThePage from "../page_elements/objectOnThePage";
import Input from "../page_elements/Input";
import check from "./checkTasks/check";
import getOperation from "../tasks/randomGen/getOperation";

export default class taskGeneration {
  static setCapacity() {
    this.capacity = 1;
  }

  static changeCapacity() {
    if (this.capacity < 3) {
      this.capacity += 1;
    }
  }

  static generate(bigCapacity) {
    let taskWindow = new objectOnThePage("div");
    taskWindow.create("32.000em", "25.000em", undefined, undefined, "auto");
    taskWindow.positioning("1", "block", "absolute", "center");
    taskWindow.pointBack(
      undefined,
      undefined,
      undefined,
      "white",
      "1",
      "black"
    );
    taskWindow.setDistance("0", "0", "0", "0");
    let solutionExH2 = new objectOnThePage("h2");
    solutionExH2.create(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "Write the solution in an empty field"
    );
    solutionExH2.fonts("3em", "sans-serif");
    let task = new objectOnThePage("h3");
    task.fonts(undefined, "sans-serif");
    let newOperation = new getOperation();
    if (this.capacity === undefined) {
      this.setCapacity();
    }
    let numberTask = newOperation.createOperation(this.capacity, bigCapacity);
    task.create(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      numberTask
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
      "enterButton1",
      undefined,
      "Check the answer!"
    );
    enterButton.fonts("1.5em");
    taskWindow.appendChild(solutionExH2);
    taskWindow.appendChild(task);
    taskWindow.appendChild(solutionArea);
    taskWindow.appendChild(enterButton);
    document.getElementById("globalPlayWindow").appendChild(taskWindow.div);

    $("#solutionArea").keyup(function(event) {
      if (event.keyCode == 13) {
        $("#enterButton1").click();
      }
    });

    enterButton.addEventListener("click", function() {
      if (
        solutionArea.value().match(/\D/g) ||
        !solutionArea.value().match(/\d/)
      ) {
        alert("Please enter correctly you solution to continue!");
      } else {
        const checking = new check();
        checking.check(
          parseInt(solutionArea.value()),
          numberTask,
          bigCapacity
       );
        taskWindow.remove();
        document.getElementById("spellbook").remove();
      }
    });
  }
}
