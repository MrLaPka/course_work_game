import objectOnThePage from "./objectOnThePage.js";
export default class Image extends objectOnThePage {
  constructor() {
    super("img");
  }

  create(src, width, height, innerHTML, id, margin, innerText, className) {
    super.create(width, height, innerHTML, id, margin, innerText);
    if (src !== undefined) this.div.src = src;
  }
}
