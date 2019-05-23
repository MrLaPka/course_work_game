export default class getName {
  constructor() {
    this.firstName = [
      "Vicious",
      "Terrible",
      "Huge",
      "Smelly",
      "Snotty",
      "Stuped",
      "Fierce",
      "Poisonous",
      "Thorny",
      "Toothy"
    ];

    this.secondName = [
      "Ogre",
      "Gnome",
      "Elf",
      "Giant",
      "Troll",
      "Zombie",
      "Orc",
      "Trent",
      "Centaur",
      "Spirit"
    ];

    this.thirdName = [
      "Pharaoph",
      "Egor Kreed",
      "Drake",
      "Lil Pump",
      "Face",
      "Eljey",
      "Kizaru",
      "Obladaet",
      "Poroshenko",
      "Tramp"
    ];
  }
  randomName(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  getMonsterName() {
    return `${this.randomName(this.firstName)} ${this.randomName(
      this.secondName
    )} ${this.randomName(this.thirdName)}`;
  }
}
