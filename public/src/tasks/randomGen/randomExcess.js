export default class randomExcess {

    constructor(pictures) {
        this.pictures = pictures;
        console.log(this.pictures);
    }

    random() {
        
        let srcArr = [];
        for (let i = 0; i < 3; i++){
            let keyGen = Object.keys(this.pictures)[Math.floor(Math.random() * Object.keys(this.pictures).length)];
            srcArr[i] = this.pictures[keyGen];
            delete this.pictures[keyGen];
        }
        console.log(srcArr);
        return srcArr;
    }

    randomOne() {
        return this.pictures[Object.keys(this.pictures)[Math.floor(Math.random() * Object.keys(this.pictures).length)]];
    }

}