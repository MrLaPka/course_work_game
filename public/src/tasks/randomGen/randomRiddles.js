export default class randomRiddles {

constructor(riddles) {
    this.riddles = riddles;
}

    random() {
        const keys = Object.keys(this.riddles);
        return this.riddles[keys[Math.floor(Math.random() * keys.length)]];
    }

        getKeyByValue(value) {
            for (let prop in this.riddles) {
                    if (this.riddles.hasOwnProperty(prop)) {
                            if (this.riddles[prop] === value)
                    return prop;
            }
        }
    }

}