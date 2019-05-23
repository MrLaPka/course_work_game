export default class objectOnThePage {
  constructor(div) {
    this.div = document.createElement(div);
  }
  create(width, height, innerHTML, id, margin, innerText, className) {
    if (width !== undefined) this.div.style.width = width;
    if (height !== undefined) this.div.style.height = height;
    if (innerHTML !== undefined) this.div.innerHTML = innerHTML;
    if (id !== undefined) this.div.id = id;
    if (margin !== undefined) this.div.style.margin = margin;
    if (innerText !== undefined) this.div.innerText = innerText;
    if (className !== undefined) this.div.className = className;
  }

  positioning(zIndex, display, position, textAlign) {
    if (zIndex !== undefined) this.div.style.zIndex = zIndex;
    if (display !== undefined) this.div.style.display = display;
    if (position !== undefined) this.div.style.position = position;
    if (textAlign !== undefined) this.div.style.textAlign = textAlign;
  }

  pointBack(
    align,
    background,
    backgroundSize,
    backgroundColor,
    opacity,
    color,
    visibility
  ) {
    if (align !== undefined) this.div.align = align;
    if (background !== undefined) this.div.style.background = background;
    if (backgroundSize !== undefined)
      this.div.style.backgroundSize = backgroundSize;
    if (backgroundColor !== undefined)
      this.div.style.backgroundColor = backgroundColor;
    if (opacity !== undefined) this.div.style.opacity = opacity;
    if (color !== undefined) this.div.style.color = color;
    if (visibility !== undefined) this.div.style.visibility = visibility;
  }

  addEventListener(event, callback) {
    this.div.addEventListener(event, callback);
  }

  appendChild(elem) {
    this.div.appendChild(elem.div);
  }

  setPaddings(paddingTop, paddingLeft, paddingRight, paddingBottom) {
    if (paddingTop !== undefined) this.div.style.paddingTop = paddingTop;
    if (paddingLeft !== undefined) this.div.style.paddingLeft = paddingLeft;
    if (paddingRight !== undefined) this.div.style.paddingRight = paddingRight;
    if (paddingBottom !== undefined)
      this.div.style.paddingBottom = paddingBottom;
  }

  setDistance(top, bottom, left, right) {
    if (top !== undefined) this.div.style.top = top;
    if (bottom !== undefined) this.div.style.bottom = bottom;
    if (left !== undefined) this.div.style.left = left;
    if (right !== undefined) this.div.style.right = right;
  }

  remove() {
    this.div.remove();
  }

  fonts(fontSize, fontFamily) {
    if (fontSize !== undefined) this.div.style.fontSize = fontSize;
    if (fontFamily !== undefined) this.div.style.fontFamily = fontFamily;
  }

  borders(border, borderColor) {
    if (borderColor !== undefined) this.div.style.borderColor = borderColor;
    if (border !== undefined) this.div.style.border = border;
  }

  setMargins(marginTop, marginLeft, marginRight, marginBottom) {
    if (marginTop !== undefined) this.div.style.marginTop = marginTop;
    if (marginLeft !== undefined) this.div.style.marginLeft = marginLeft;
    if (marginRight !== undefined) this.div.style.marginRight = marginRight;
    if (marginBottom !== undefined) this.div.style.marginBottom = marginBottom;
  }

  forButton(enabled, disabled) {
    if (enabled !== undefined) this.div.enabled = enabled;
    if (disabled !== undefined) this.div.disabled = disabled;
    }
    
    specialSettings(draggable) {
        if (draggable !== undefined) this.div.draggable = draggable;
    }

}
