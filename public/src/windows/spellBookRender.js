import objectOnThePage from "../page_elements/objectOnThePage";
import taskGeneration from "../tasks/taskGeneration";
import riddlesGeneration from "../tasks/riddlesGeneration";
import pictureGeneration from "../tasks/pictureGeneration";
import chosePictureGeneration from "../tasks/chosePictureGeneration";
import compoundWordsGeneration from "../tasks/compoundWordsGeneration";
import logoGeneration from "../tasks/logoGeneration";

export default class spellBookRender {
  constructor() {
    if (document.getElementById("getDamage")) {
      document.getElementById("getDamage").remove();
    }
    this.spellBookMain = new objectOnThePage("div");
    this.spellBookMain.create("65.6em", "46.70em", undefined, "spellbook");
    this.spellBookMain.positioning("1000", undefined, "absolute");
    this.spellBookMain.setMargins("1.250em", "28.125em");
    this.spellBookMain.pointBack(undefined, "url(img/spellbook.png)", "100%");
  }

  createСhoice() {
    let pToChoose = new objectOnThePage("p");
    pToChoose.create(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "Please select a spell"
    );
    pToChoose.positioning(undefined, "block");
    pToChoose.pointBack(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      "#0000ff"
    );
    pToChoose.fonts("2.500em", "COMMERCIALSCRIPT BT");
    pToChoose.setPaddings("4.250em", "5.5em");
    this.spellBookMain.appendChild(pToChoose);

    let normalDamage = new objectOnThePage("button");
    let doubleDamage = new objectOnThePage("button");
    normalDamage.create(
      "12.500em",
      "5.625em",
      undefined,
      "normalDamage",
      undefined,
      "NORMAL DAMAGE"
    );
    normalDamage.positioning(undefined, "inline-block");
    normalDamage.setMargins(undefined, "15.625em");
    normalDamage.pointBack(undefined, undefined, undefined, "yellow");
    normalDamage.addEventListener("click", () => {
      normalDamage.positioning(undefined, "none");
      doubleDamage.positioning(undefined, "none");

      this.createNormalTasksButtons();
    });
    this.spellBookMain.appendChild(normalDamage);

    doubleDamage.create(
      "12.500em",
      "5.625em",
      undefined,
      "doubleDamage",
      undefined,
      "DOUBLE DAMAGE"
    );
    doubleDamage.positioning(undefined, "inline-block");
    doubleDamage.setMargins(undefined, "6.250em");
    doubleDamage.pointBack(undefined, undefined, undefined, "yellow");
    doubleDamage.addEventListener("click", () => {
      doubleDamage.positioning(undefined, "none");
      normalDamage.positioning(undefined, "none");

      this.createHardTasksButtons(true);
    });
    this.spellBookMain.appendChild(doubleDamage);
    document
      .getElementById("globalPlayWindow")
      .appendChild(this.spellBookMain.div);
  }

  createNormalTasksButtons() {
    this.createHardTasksButtons();
    let puzzleButton = new objectOnThePage("button");
    puzzleButton.create(
      "12.500em",
      "5.625em",
      undefined,
      undefined,
      undefined,
      "Guess the puzzle"
    );
    puzzleButton.positioning(undefined, "inline-block");
    puzzleButton.setMargins("2em", "15.625em");
    puzzleButton.pointBack(undefined, undefined, undefined, "yellow");
    puzzleButton.addEventListener("click", () => {
      const rG = new riddlesGeneration();
      rG.createInterface();

      this.spellBookMain.positioning(undefined, "none");
    });
    this.spellBookMain.appendChild(puzzleButton);

    let pictureTaskButton = new objectOnThePage("button");
    pictureTaskButton.create(
      "12.500em",
      "5.625em",
      undefined,
      undefined,
      undefined,
      "Who is in the picture"
    );
    pictureTaskButton.positioning(undefined, "inline-block");
    pictureTaskButton.setMargins("2em", "6.250em");
    pictureTaskButton.pointBack(undefined, undefined, undefined, "yellow");
    pictureTaskButton.addEventListener("click", () => {
      const pG = new pictureGeneration();

      this.spellBookMain.positioning(undefined, "none");
    });
    this.spellBookMain.appendChild(pictureTaskButton);

    let chosePicture = new objectOnThePage("button");
    chosePicture.create(
      "12.500em",
      "5.625em",
      undefined,
      undefined,
      undefined,
      "Find excess image"
    );
    chosePicture.positioning(undefined, "inline-block");
    chosePicture.setMargins("2em", "15.625em");
    chosePicture.pointBack(undefined, undefined, undefined, "yellow");
    chosePicture.addEventListener("click", () => {
      const cPG = new chosePictureGeneration();
      this.spellBookMain.positioning(undefined, "none");
    });
    this.spellBookMain.appendChild(chosePicture);

    let choseLogo = new objectOnThePage("button");
    choseLogo.create(
      "12.500em",
      "5.625em",
      undefined,
      undefined,
      undefined,
      "Cars logo"
    );
    choseLogo.positioning(undefined, "inline-block");
    choseLogo.setMargins("2em", "6.250em");
    choseLogo.pointBack(undefined, undefined, undefined, "yellow");
    choseLogo.addEventListener("click", () => {
      const cW = new logoGeneration();
      this.spellBookMain.positioning(undefined, "none");
    });
    this.spellBookMain.appendChild(choseLogo);
  }

  createHardTasksButtons(bigCapacity) {
    let ariphmeticButton = new objectOnThePage("button");
    ariphmeticButton.create(
      "12.500em",
      "5.625em",
      undefined,
      undefined,
      undefined,
      "Solve the example"
    );
    ariphmeticButton.positioning(undefined, "inline-block");
    ariphmeticButton.setMargins(undefined, "15.625em");
    ariphmeticButton.pointBack(undefined, undefined, undefined, "yellow");
    ariphmeticButton.addEventListener("click", () => {
      taskGeneration.generate(bigCapacity);
      this.spellBookMain.positioning(undefined, "none");
    });
    this.spellBookMain.appendChild(ariphmeticButton);

    let compoundWords = new objectOnThePage("button");
    compoundWords.create(
      "12.500em",
      "5.625em",
      undefined,
      undefined,
      undefined,
      "Compound Words"
    );
    compoundWords.positioning(undefined, "inline-block");
    compoundWords.setMargins(undefined, "6.250em");
    compoundWords.pointBack(undefined, undefined, undefined, "yellow");
    compoundWords.addEventListener("click", () => {
      const cW = new compoundWordsGeneration(bigCapacity);
      this.spellBookMain.positioning(undefined, "none");
    });
    this.spellBookMain.appendChild(compoundWords);
  }
}
