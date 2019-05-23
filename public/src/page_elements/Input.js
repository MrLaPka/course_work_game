import objectOnThePage from './objectOnThePage.js'
export default class Input extends objectOnThePage {

    constructor() {
        super('input');
    }

    create(type, required, width, height, innerHTML, id, margin, innerText, className) {
        super.create(width, height, innerHTML, id, margin, innerText);
        if (type !== undefined)
            this.div.type = type;
        if (required !== undefined)
            this.div.required = required;
    }

    value(val) {
        if (val)
            this.div.value = val;
        else
        return this.div.value;
}

}