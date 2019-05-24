import interfaceGgRender from "../gg/interfaceGgRender";
import objectOnThePage from "../../page_elements/objectOnThePage";
import Image from "../../page_elements/Image";
import endWindow from "../../windows/endWindow";

export default class monsterFaerbolRender {
  createFaerbol() {
    this.wrongAnswer();
    let faerbol = new Image();
    faerbol.create("img/monsterfaerbol1.gif", "10.000em", "4.375em");
    faerbol.positioning("1000", undefined, "absolute");
    faerbol.setMargins("40em", "78.125em");
    document.getElementById("globalPlayWindow").appendChild(faerbol.div);
    $(faerbol.div).queue(function() {
      setTimeout(function() {
        document.getElementById("wrongAnswer").remove();
      }, 1000);
      $(this).dequeue();
    });
    $("#leftArm").toggleClass("transform");
    $("#weapon").toggleClass("transform");
    setTimeout($(faerbol.div).animate({ left: "-=815" }, 2000), 600);
    setTimeout(function() {
      $("#leftArm").toggleClass("transform");
      setTimeout(function() {
        $("#weapon").toggleClass("transform");
      }, 0);
    }, 600);
    $(faerbol.div).queue(function() {
      $(this).hide();
      $(this).dequeue();
    });
    $(faerbol.div).queue(function() {
      interfaceGgRender.getDamage();
      if (Math.round(interfaceGgRender.hpGg) === 0) {
        document.getElementById("mortalCombat").remove();
        const eW = new endWindow();
        eW.endWinCreate();
      } else {
        document.getElementById("spellbutton").disabled = false;
      }
      $(this).dequeue();
    });
    let audioGetDamage = new objectOnThePage("div");
    $(faerbol.div).queue(function() {
      const audioElem = `<audio src='audio/muzhskie-stony (mp3cut.ru).mp3' id = 'getDamage' autoplay = 'autoplay'></audio>`;
      audioGetDamage.create("0%", "0%", audioElem, "Damage");
      document
        .getElementById("globalPlayWindow")
        .appendChild(audioGetDamage.div);
      if (document.getElementById("disabled")) {
        document.getElementById("getDamage").volume = 0;
      } else if (document.getElementById("enabled")) {
        document.getElementById("getDamage").volume = 1;
      }
      document.getElementById("ggId").style.filter = "hue-rotate(290deg)";
      if (Math.round(interfaceGgRender.hpGg) != 0) {
        setTimeout(function() {
          document.getElementById("ggId").style.filter = "hue-rotate(360deg)";
        }, 1000);
      }
      $(this).dequeue();
    });
    $(faerbol.div).queue(function() {
      faerbol.remove();
      $(this).dequeue();
    });
  }

  wrongAnswer() {
    let wrongAnswer = new objectOnThePage("div");
    wrongAnswer.create(
      "100%",
      "100%",
      "<p>You answer is wrong!</p>",
      "wrongAnswer",
      "auto"
    );
    wrongAnswer.positioning("2100", "block", "absolute", "center");
    wrongAnswer.setDistance("0", "0", "0", "0");
    wrongAnswer.pointBack(
      undefined,
      undefined,
      undefined,
      "rgb(255, 107, 107)",
      "0.35",
      "white"
    );

    wrongAnswer.fonts("3em");
    document.getElementById("globalPlayWindow").appendChild(wrongAnswer.div);
}

}
