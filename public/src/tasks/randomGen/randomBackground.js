export default class randomBackground {
  constructor() {
    this.backgrounds = [
      "img/backgrounds/BGLAYERS_EXAMPLE[1].png",
      "img/backgrounds/desert_day[1].jpg",
      "img/backgrounds/terrain.png",
      "img/backgrounds/fon14[1].png"
    ];
  }

  generateBackgrounds() {
    return this.backgrounds[
      Math.floor(Math.random() * this.backgrounds.length)
    ];
  }
}
