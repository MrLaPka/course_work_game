export default class randomPictures {

    constructor(pictures) {
        this.pictures = pictures;
    }

    random() {
        const keys = Object.keys(this.pictures);
        return this.pictures[keys[Math.floor(Math.random() * keys.length)]];
    }

    getKeyByValue(value) {
        for (let prop in this.pictures) {
            if (this.pictures.hasOwnProperty(prop)) {
                if (this.pictures[prop] === value)
                    return prop;
            }
        }
    }

}