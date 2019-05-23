import objectOnThePage from "../page_elements/objectOnThePage";
import Image from "../page_elements/Image";
import enterName from "./enterName";
import createReturnButton from "../buttons/createReturnButton";

export default class init {
  startWindowRender() {
    this.startFaerbol = new Image();
    this.startFaerbol.create(
      "img/rotate.gif",
      "31.250em",
      "43.750em",
      undefined,
      "startFaerbol",
      "auto"
    );
    this.startFaerbol.positioning("1010", "block");
    this.startMenu = new objectOnThePage("div");
    this.startMenu.create(100 + "%", 100 + "%", undefined, "startMenu");
    this.startMenu.pointBack(
      "center",
      "url(img/fon_lenty_radiaciya_opasnost_stena_18526_1280x1280[1].jpg)",
      "100%"
    );
    document.body.appendChild(this.startMenu.div);
  }

  startWindowInterface() {
    this.nameOfGame = new objectOnThePage("h1");
    this.nameOfGame.create(
      undefined,
      undefined,
      undefined,
      "nameOfGame",
      undefined,
      "MONSTER KILL"
    );
    this.startMenu.appendChild(this.nameOfGame);
    this.playButton = new objectOnThePage("button");
    this.playButton.create(
      "12.500em",
      "5.625em",
      undefined,
      "playButton",
      undefined,
      "Play"
    );
    this.startMenu.appendChild(this.playButton);
    this.scoreButton = new objectOnThePage("button");
    this.scoreButton.create(
      "12.500em",
      "5.625em",
      undefined,
      "scoreButton",
      undefined,
      "Score"
    );
    this.startMenu.appendChild(this.scoreButton);
    this.screenButton = new objectOnThePage("button");
    this.screenButton.create(
      "12.500em",
      "5.625em",
      undefined,
      "screenButton",
      undefined,
      "A screenshot of gameplay"
    );
    this.screenButton.setPaddings("1.48em");
      this.startMenu.appendChild(this.screenButton);
      this.startMenu.appendChild(this.startFaerbol);
  }

  audioCreate() {
    let enabled;
    let innerAudio = `<audio src="audio/BGsound.mp3" width="0" height="0" align = "center" id = "audiomain" autoplay="autoplay"></audio>`;
    let audio = new objectOnThePage("div");
    audio.create(undefined, undefined, innerAudio);
      this.startMenu.appendChild(audio);
    let AudioOnOff = new objectOnThePage("button");
    if (document.getElementById("disabled")) {
      console.log("disabled");
      if (document.getElementById("audiomain")) {
        document.getElementById("audiomain").volume = 0;
      }
      enabled = false;
      AudioOnOff.create(
        "3.125em",
        "1.563em",
        "&#128263",
        "disabled",
        undefined,
        undefined,
        "firstButton"
      );
    } else if (document.getElementById("enabled")) {
      console.log("enabled");
      if (document.getElementById("audiomain")) {
        document.getElementById("audiomain").volume = 1;
      }
      enabled = true;
      AudioOnOff.create(
        "3.125em",
        "1.563em",
        "&#128266",
        "enabled",
        undefined,
        undefined,
        "firstButton"
      );
    } else {
      enabled = true;
      AudioOnOff.create(
        "3.125em",
        "1.563em",
        "&#128266",
        "enabled",
        undefined,
        undefined,
        "firstButton"
      );
    }

    if (document.getElementsByClassName("firstButton")[0]) {
      if (
        document.getElementsByClassName("firstButton")[0].innerHTML ===
        "&#128266"
      ) {
        if (document.getElementById("audiomain")) {
          document.getElementById("audiomain").volume = 1;
        }
      } else if (
        document.getElementsByClassName("firstButton")[0].innerHTML ===
        "&#128263"
      ) {
        if (document.getElementById("audiomain")) {
          document.getElementById("audiomain").volume = 0;
        }
      }
    }

    AudioOnOff.positioning("1000", undefined, "absolute");
    AudioOnOff.setDistance("0", undefined, "0");
    AudioOnOff.addEventListener("click", function() {
      console.log("click");
      if (enabled) {
        AudioOnOff.create(
          undefined,
          undefined,
          "&#128263",
          "disabled",
          undefined,
          undefined,
          "firstButton"
        );
        enabled = false;
        if (document.getElementById("audiomain"))
          document.getElementById("audiomain").volume = 0;
        if (document.getElementById("mortalCombat"))
          document.getElementById("mortalCombat").volume = 0;
      } else {
        AudioOnOff.create(
          undefined,
          undefined,
          "&#128266",
          "enabled",
          undefined,
          undefined,
          "firstButton"
        );
        enabled = true;
        if (document.getElementById("audiomain"))
          document.getElementById("audiomain").volume = 1;
        if (document.getElementById("mortalCombat"))
          document.getElementById("mortalCombat").volume = 1;

        if (document.getElementsByClassName("toRunAudio")[0]) {
          document.getElementsByClassName("toRunAudio")[0].remove();
        }
      }
    });
    document.body.appendChild(AudioOnOff.div);
    }
    
  createScore() {
    this.scoreButton.addEventListener("click", () =>{
      let additionalWindow = new objectOnThePage("div");
      additionalWindow.create("100%", "100%", undefined, "additionalWindow");
      additionalWindow.positioning(undefined, undefined, "absolute");
      this.screenButton.positioning(undefined, "none");
      this.playButton.positioning(undefined, "none");
      this.scoreButton.positioning(undefined, "none");
      document.getElementById("nameOfGame").style.display = "none";
      this.startFaerbol.positioning(undefined, "none");
      this.startMenu.positioning(undefined, undefined, "absolute");

      const scoreTable = new objectOnThePage("table");
      scoreTable.create(undefined, undefined, undefined, "scoreTable", "auto");
      scoreTable.positioning("1000", undefined, "relative");
      additionalWindow.appendChild(scoreTable);
      let request = new XMLHttpRequest();
      request.open("POST", "/score", true);
      request.setRequestHeader("Content-Type", "application/json");
      request.addEventListener("load", () => {
        document.getElementById("scoreTable").innerHTML = `
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Score
                                </th>
                            </tr>
                        </thead>
                        <tbody id = 'scoreTbody'>
                        </tbody>`;
        const cells = JSON.parse(request.response).map(item => {
          return `<tr>
                                <td>${item.name}</td>
                                <td>${item.score}</td>
                            </tr>
                        </tbody>
                    </table>`;
        });
        document.getElementById("scoreTbody").innerHTML += cells;
      });
      request.send();

      additionalWindow.positioning(undefined, "block");
      //additionalWindow.appendChild(scoreTable);

      document.body.appendChild(additionalWindow.div);
      const cRB = new createReturnButton();
    });
  }

  createScreen() {
    this.startMenu.positioning(undefined, "block", "absolute");
    this.screenButton.addEventListener("click", () => {
      let additionalWindow = new objectOnThePage("div");
      additionalWindow.create("100%", "100%", undefined, "additionalWindow");
      additionalWindow.positioning(undefined, undefined, "absolute");
      additionalWindow.setDistance(0, 0);
      this.screenButton.positioning(undefined, "none");
      this.playButton.positioning(undefined, "none");
      this.scoreButton.positioning(undefined, "none");

      let imageGameplay = new Image();
      imageGameplay.create(
        "img/Gameplay.png",
        "80%",
        "70%",
        undefined,
        undefined,
        "auto"
      );
      imageGameplay.positioning("1000", "block");
      additionalWindow.positioning(undefined, "block");
      additionalWindow.appendChild(imageGameplay);
      document.body.appendChild(additionalWindow.div);
      const cRB = new createReturnButton();
    });
    this.playButton.addEventListener("click", () => {
      this.startMenu.positioning(undefined, "none", "absolute");
      document.getElementById("info").style.display = "none";
      const eN = new enterName();
      eN.run();
    });
  }
}
