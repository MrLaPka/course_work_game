export default class randomLogo {

    constructor(pictures) {
        this.pictures = pictures;
        this.keys = [];
    }

    random() {

        let srcArr = [];
        for (let i = 0; i < 3; i++) {
            let keyGen = Object.keys(this.pictures)[Math.floor(Math.random() * Object.keys(this.pictures).length)];
            srcArr[i] = this.pictures[keyGen];
            this.keys[i] = this.getKeyByValue(srcArr[i]);
            delete this.pictures[keyGen];
        }
        return srcArr;
    }

    getKeyByValue(value) {
        for (let prop in this.pictures) {
            if (this.pictures.hasOwnProperty(prop)) {
                if (this.pictures[prop] === value) { return prop; }
            }
        }
    }

}