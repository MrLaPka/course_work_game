import interfaceMonsterRender from "../monster/interfaceMonsterRender";
import objectOnThePage from "../../page_elements/objectOnThePage";
import Image from "../../page_elements/Image";
import endWindow from "../../windows/endWindow";

export default class faerbolRender {
  createFaerbol(bigCapacity, src) {
    this.backgroundBlock();
    let faerbol = new Image();
    faerbol.create(`${src}`, "10.000em", "4.375em");
    faerbol.positioning("1000", undefined, "absolute");
    faerbol.setMargins("40em", "25.625em");
    document.getElementById("globalPlayWindow").appendChild(faerbol.div);
    $(faerbol.div).queue(function(){
      setTimeout(function(){
        document.getElementById('rightAnswer').remove();
      }, 1000);
      $(this).dequeue();
    });
    $(faerbol.div).queue(function() {
      {
        $(faerbol.div).animate({ left: "+=940" }, 2000);
      }
      $(this).dequeue();
    });
    $(faerbol.div).queue(function() {
      $(this).hide();
      $(this).dequeue();
    });
    $(faerbol.div).queue(function() {
      interfaceMonsterRender.getDamage(bigCapacity);
      if (Math.round(interfaceMonsterRender.hpMonster) === 0) {
        document.getElementById("mortalCombat").remove();
        let audioMonsterDie = `<audio src='audio/krik-orka.mp3' id = 'MonsterDie' autoplay = 'autoplay'></audio>`;
        document.getElementById(
          "globalPlayWindow"
        ).innerHTML += audioMonsterDie;
        if (document.getElementById("disabled")) {
          document.getElementById("MonsterDie").volume = 0;
        } else if (document.getElementById("enabled")) {
          document.getElementById("MonsterDie").volume = 1;
        }
        setTimeout(function() {
          document.getElementById("monster").style.marginLeft = "88.938em";
          document.getElementById("monster").style.marginTop = "20em";
          document.getElementById("monster").innerHTML =
            '<img src ="img/vzrbIV.gif">';
        }, 500);
        setTimeout(function() {
          document.getElementById("monster").style.marginTop = "9em";
          document.getElementById("monster").style.marginLeft = "83em";
          document.getElementById(
            "monster"
          ).innerHTML = `<img src = 'img/faer.gif'>`;
        }, 1000);
        setTimeout(function() {
          const eW = new endWindow();
          eW.endWinCreate();
        }, 500);
      } else {
        document.getElementById("spellbutton").disabled = false;
      }
      $(this).dequeue();
    });
    let audioGetDamage = new objectOnThePage("div");
    audioGetDamage.create("0%", "0%", undefined, "getDamage");
    $(faerbol.div).queue(function() {
      const audioElem = `<audio src='audio/muzhskie-stony (mp3cut.ru).mp3' id = 'getdamage' autoplay = 'autoplay'></audio>`;
      audioGetDamage.create(undefined, undefined, audioElem);
      document
        .getElementById("globalPlayWindow")
        .appendChild(audioGetDamage.div);
      if (document.getElementById("disabled")) {
        document.getElementById("getdamage").volume = 0;
      } else {
        document.getElementById("getdamage").volume = 1;
      }
      document.getElementById("monster").style.filter = "hue-rotate(290deg)";
      setTimeout(function() {
        document.getElementById("monster").style.filter = "hue-rotate(360deg)";
      }, 1000);
      $(this).dequeue();
    });
    $(faerbol.div).queue(function() {
      faerbol.remove();
      $(this).dequeue();
    });
  }

  backgroundBlock() {
    this.rightAnswer = new objectOnThePage("div");
    this.rightAnswer.create(
      "100%",
      "100%",
      "<p>You answer is right!</p>",
      "rightAnswer",
      "auto"
    );
    this.rightAnswer.positioning("2100", "block", "absolute", "center");
    this.rightAnswer.setDistance("0", "0", "0", "0");
    this.rightAnswer.pointBack(
      undefined,
      undefined,
      undefined,
      "limegreen",
      "0.35",
      "white"
    );

    this.rightAnswer.fonts("3em");
    document.getElementById("globalPlayWindow").appendChild(this.rightAnswer.div);
}

}
