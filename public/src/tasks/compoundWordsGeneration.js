import objectOnThePage from "../page_elements/objectOnThePage";
import faerbolRender from "../character/gg/faerbolRender";
import monsterFaerbolRender from "../character/monster/monsterFaerbolRender";
import randomCompounds from "./randomGen/randomCompounds";

export default class compoundWordsGeneration {
  constructor(bigCapacity) {
    let request = new XMLHttpRequest();
    request.open("POST", "/getWords", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", () => {
      this.words = {};
      for (let i = 0; i < JSON.parse(request.response).length; i++) {
        let key = String(JSON.parse(request.response)[i].main_part);
        this.words[`${key}`] = String(
          JSON.parse(request.response)[i].second_part
        );
      }
      this.getWords(bigCapacity);
    });
    request.send();
  }

  getWords(bigCapacity) {
    let numberTask;
    let rightArr = [];
    let newCompounds = new randomCompounds(this.words);
    numberTask = newCompounds.random();
    let taskWindow = new objectOnThePage("div");
    taskWindow.create("100%", "100%", undefined, "taskWindow", "auto", undefined);
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
    let compoundAnswer = new objectOnThePage("h2");
    compoundAnswer.create(
      undefined,
      undefined,
      undefined,
      undefined,
      "0",
      "Drag parts of words from right to left to create compound word!"
    );
    compoundAnswer.fonts("3em", "sans-serif");
    taskWindow.appendChild(compoundAnswer);
    const allTask = new objectOnThePage("div");
    allTask.create(
      undefined,
      undefined,
      undefined,
      "allTask",
      undefined,
      undefined,
      "word-wrapper"
    );
    const leftTask = new objectOnThePage("div");
    leftTask.create("290px", "380px", undefined, "leftTask", "0");
    leftTask.positioning(1110, "inline-block");
    const rightTask = new objectOnThePage("div");
    rightTask.create("165px", "380px", undefined, "rightTask", "0");
    rightTask.positioning(1110, "inline-block");
    for (let i = 0; i < 4; i++) {
      rightArr[i] = String(newCompounds.keys[i] + numberTask[i]);
    }
    for (let i = 0; i < 4; i++) {
      let task = new objectOnThePage("div");
      let secondTask = new objectOnThePage("div");
      let item = Math.round(Math.random() * (numberTask.length - 1));
      task.create(
        "250px",
        "70px",
        undefined,
        undefined,
        "20px",
        newCompounds.keys[i],
        "task"
      );
      task.positioning(1110, "inline-block");
      task.borders("1px solid black");
      task.setPaddings("20px", "60px");
      task.fonts("2em");
      leftTask.appendChild(task);

      secondTask.create(
        "125px",
        "70px",
        undefined,
        undefined,
        "20px",
        numberTask[item],
        "ui-widget ui-corner-all ui-state-error"
      );
      secondTask.positioning(1110, "relative");
      secondTask.fonts("2em");
      secondTask.specialSettings("true");
      rightTask.appendChild(secondTask);
      numberTask.splice(item, 1);
    }

    console.log(newCompounds.keys);
    allTask.appendChild(leftTask);
    allTask.appendChild(rightTask);
    taskWindow.appendChild(allTask);

    let enterButton = new objectOnThePage("button");
    enterButton.create(
      undefined,
      undefined,
      undefined,
      undefined,
      "6em",
      "Check result!"
    );
    enterButton.fonts("1.5em");
    taskWindow.appendChild(enterButton);
    document.getElementById("globalPlayWindow").appendChild(taskWindow.div);
    this.dragAndDrop(rightArr);

    enterButton.addEventListener("click", function() {
      if (
        document.getElementById("wrong") ||
        !document.getElementById("right")
      ) {
        const mFR = new monsterFaerbolRender();
        mFR.createFaerbol();
      } else {
        const mFR = new faerbolRender();
        mFR.createFaerbol(bigCapacity, 'img/ugly.gif');
      }
      $(".ui-widget").remove();
      taskWindow.remove();
      document.getElementById("spellbook").remove();
    });
  }

  dragAndDrop(rightArr) {
    for (let i = 0; i < 4; i++) {
      let dragTask = document.getElementsByClassName("ui-widget")[i];

      dragTask.onmousedown = function (e) {
        var coords = getCoords(dragTask);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        dragTask.style.position = "absolute";
        document.body.appendChild(dragTask);
        moveAt(e);

        dragTask.style.zIndex = 2000; // над другими элементами

        function moveAt(e) {
          dragTask.style.left = e.pageX - shiftX + "px";
          dragTask.style.top = e.pageY - shiftY + "px";
        }

        document.onmousemove = function (e) {
          moveAt(e);
        };

        dragTask.onmouseup = function (e) {
          document.onmousemove = null;
          for (
            let j = 0;
            j < document.getElementsByClassName("task").length;
            j++
          ) {
            let leftC = getCoords(document.getElementsByClassName("task")[j])
              .left;
            let topC = getCoords(document.getElementsByClassName("task")[j])
              .top;
            if (
              e.pageX >= leftC &&
              e.pageX <= leftC + 250 &&
              (e.pageY >= topC && e.pageY <= topC + 70)
            ) {
              document.getElementsByClassName("task")[j].innerText +=
                dragTask.innerText;
              if (
                rightArr.indexOf(
                  String(document.getElementsByClassName("task")[j].innerText)
                ) !== -1
              ) {
                document.getElementsByClassName("task")[j].className +=
                  " right";
                document.getElementsByClassName("task")[j].id = "right";
              } else {
                document.getElementsByClassName("task")[j].className +=
                  " wrong";
                document.getElementsByClassName("task")[j].id = "wrong";
              }
              dragTask.remove();
              e.stopPropagation();
              break;
            }
          }
          dragTask.onmouseup = null;
        };
      };

      dragTask.ondragstart = function () {
        return false;
      };

      function getCoords(elem) {
        // кроме IE8-
        let box = elem.getBoundingClientRect();
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
      }
    }
}

}
