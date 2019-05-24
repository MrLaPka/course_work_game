import objectOnThePage from "../page_elements/objectOnThePage";
import Image from "../page_elements/Image";
import enterName from "./enterName";
import createReturnButton from "../buttons/createReturnButton";

export default class init {
  startWindowRender() {
    this.startMenu = new objectOnThePage("div");
    this.startMenu.create(100 + "%", 100 + "%", undefined, "startMenu");
    this.startMenu.pointBack("center", "url(img/mainBackground.jpg) center center fixed", "cover");
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
    this.nameOfGame.pointBack(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "black"
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
  }

  audioCreate() {
    let enabled;
    let innerAudio = `<audio src="audio/BGsound.mp3" width="0" height="0" align = "center" id = "audiomain" autoplay="autoplay" loop></audio>`;
    let audio = new objectOnThePage("div");
    audio.create("0", "0", innerAudio);
    this.startMenu.appendChild(audio);

    const firstRunAudio = `<object width="0" height="0" align="center" id = "mainaudio">

<param name="movie" value="audio/BGsound.mp3">
<embed src="audio/BGsound.mp3"
autostart="true"
width="0"
height="0"
align="center"
type="audio/mid"
pluginspage="http://www.macromedia.com/go/getflashplayer"
loop = "True">
</object>`;

    const firstAudioDiv = new objectOnThePage("div");
    firstAudioDiv.create("0", "0", firstRunAudio);
    this.startMenu.appendChild(firstAudioDiv);
    let AudioOnOff = new objectOnThePage("button");
    if (document.getElementById("disabled")) {
      if (document.getElementById("mainaudio"))
        document.getElementById("mainaudio").remove();
      console.log("disabled");
      if (document.getElementById("audiomain")) {
        document.getElementById("audiomain").volume = 0;
      }
      enabled = false;
      AudioOnOff.create(
        "4.125em",
        "2.563em",
        "&#128263",
        "disabled",
        undefined,
        undefined,
        "firstButton"
      );
    } else if (document.getElementById("enabled")) {
      if (document.getElementById("mainaudio"))
        document.getElementById("mainaudio").remove();
      console.log("enabled");
      if (document.getElementById("audiomain")) {
        document.getElementById("audiomain").volume = 1;
      }
      enabled = true;
      AudioOnOff.create(
        "4.125em",
        "2.563em",
        "&#128266",
        "enabled",
        undefined,
        undefined,
        "firstButton"
      );
    } else {
      enabled = true;
      AudioOnOff.create(
        "4.125em",
        "2.563em",
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
    AudioOnOff.addEventListener("click", () => {
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
        if (document.getElementById("mainaudio"))
          document.getElementById("mainaudio").remove();
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
        firstAudioDiv.create("0", "0", firstRunAudio);
        this.startMenu.appendChild(firstAudioDiv);
      }
    });
    document.body.appendChild(AudioOnOff.div);
  }

  createScore() {
    this.scoreButton.addEventListener("click", () => {
      let additionalWindow = new objectOnThePage("div");
      additionalWindow.create("100%", "100%", undefined, "additionalWindow");
      additionalWindow.positioning(undefined, undefined, "absolute");
      this.screenButton.positioning(undefined, "none");
      this.playButton.positioning(undefined, "none");
      this.scoreButton.positioning(undefined, "none");
      document.getElementById("nameOfGame").style.display = "none";
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
      document.body.style.background = 'url(img/mainBackground.jpg) center center fixed';
      document.body.style.backgroundSize = 'cover';
      const eN = new enterName();
      eN.run();
    });
  }
}
