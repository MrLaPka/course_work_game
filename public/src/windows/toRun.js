import getName from "../tasks/randomGen/randomName";
import monsterRender from "../character/monster/monsterGeneration";
import randomBackground from "../tasks/randomGen/randomBackground";
import ggRender from "../character/gg/ggRender";
import interfaceGgRender from "../character/gg/interfaceGgRender";
import interfaceMonsterRender from "../character/monster/interfaceMonsterRender";
import spellBookButtonRender from "../buttons/spellBookButtonRender";
import objectOnThePage from "../page_elements/objectOnThePage";
import Image from "../page_elements/Image";
import spellBookRender from "./spellBookRender";

export default class toRun {
  static run() {
    if (document.getElementById("startMenu")) {
      document.getElementById("startMenu").remove();
    }
    const rBack = new randomBackground();
    let globalPlayWindow = new objectOnThePage("div");
    globalPlayWindow.create("100%", "100%", undefined, "globalPlayWindow");
    globalPlayWindow.pointBack(
      undefined,
      `url(${rBack.generateBackgrounds()})`,
      "100%"
    );
    let gg = new Image();
    let monster = new objectOnThePage("div");
    let spellBook = new objectOnThePage("button");
    globalPlayWindow.appendChild(gg);
    globalPlayWindow.appendChild(spellBook);
    globalPlayWindow.appendChild(monster);
    let audioPlay = new objectOnThePage("div");
    let audioMortal = `<audio src='audio/glavnaya-tema-iz-8-bitnoy-igry-mortal-kombat.mp3' id = 'mortalCombat' autoplay = 'autoplay' loop></audio>`;
    audioPlay.create("0%", "0%", audioMortal);
    globalPlayWindow.appendChild(audioPlay);
    document.body.appendChild(globalPlayWindow.div);
    let enabled;
    if (document.getElementById("mortalCombat")) {
      console.log("denabled");
      if (document.getElementById("disabled")) {
        console.log("disabled");
        document.getElementById("mortalCombat").volume = 0;
        enabled = false;
      } else if (document.getElementById("enabled")) {
        console.log("enabled");
        document.getElementById("mortalCombat").volume = 1;
        enabled = true;
      }
    }

    if (document.getElementById("audiomain")) {
      console.log("denabled");
      if (document.getElementById("disabled")) {
        console.log("disabled");
        document.getElementById("audiomain").volume = 0;
        enabled = false;
      } else if (document.getElementById("enabled")) {
        console.log("enabled");
        document.getElementById("audiomain").volume = 1;
        enabled = true;
      }
    }
    let AudioOnOff = new objectOnThePage("button");

    if (enabled) {
      AudioOnOff.create(
        "3.125em",
        "1.563em",
        "&#128266",
        "enabled",
        undefined,
        undefined,
        "toRunAudio"
      );
    } else {
      AudioOnOff.create(
        "3.125em",
        "1.563em",
        "&#128263",
        "disabled",
        undefined,
        undefined,
        "toRunAudio"
      );
    }
    AudioOnOff.positioning("1010", undefined, "absolute");
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
          "toRunAudio"
        );
        enabled = false;
        if (document.getElementById("audiomain"))
          document.getElementById("audiomain").volume = 0;
        if (document.getElementById("mortalCombat"))
          document.getElementById("mortalCombat").volume = 0;
        if (document.getElementById("fail"))
          document.getElementById("fail").volume = 0;
        if (document.getElementById("victory"))
          document.getElementById("victory").volume = 0;
      } else {
        AudioOnOff.create(
          undefined,
          undefined,
          "&#128266",
          "enabled",
          undefined,
          undefined,
          "toRunAudio"
        );
        enabled = true;
        if (document.getElementById("audiomain"))
          document.getElementById("audiomain").volume = 1;
        if (document.getElementById("mortalCombat"))
          document.getElementById("mortalCombat").volume = 1;
        if (document.getElementById("fail"))
          document.getElementById("fail").volume = 1;
        if (document.getElementById("victory"))
          document.getElementById("victory").volume = 1;
      }

      if (document.getElementsByClassName("firstButton")[0]) {
        document.getElementsByClassName("firstButton")[0].remove();
      }
    });
    document.body.appendChild(AudioOnOff.div);

    let sBBRender = new spellBookButtonRender(spellBook);
    this.createGg(gg);
    this.createMonster(monster);
    spellBook.addEventListener("click", function() {
      spellBook.forButton(undefined, true);
      const sBR = new spellBookRender();
      sBR.createСhoice();
    });
  }

  static createMonster(monster) {
    let newMonster = new monsterRender();
    newMonster.createHead();
    newMonster.createBody();
    newMonster.createArms();
    newMonster.createLegs();
    newMonster.createWeapon();
    newMonster.createMonster(monster);
    const nameOfMonster = new getName();
    interfaceMonsterRender.create(nameOfMonster.getMonsterName());
  }

  static createGg(gg) {
    let Gg = new ggRender(gg);
    interfaceGgRender.create(document.getElementById("nameArea").value);
  }
}
