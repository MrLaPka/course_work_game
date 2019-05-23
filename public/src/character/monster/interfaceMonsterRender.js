import objectOnThePage from '../../page_elements/objectOnThePage.js'
export default class interfaceMonsterRender {

    static setRound() {
        this.round = 1;
    }

    static changeRound() {
        if (this.round < 3) {
            this.round ++;
        }
    }

    static create(getMonsterName) {
        if (this.round === undefined) {
            this.setRound();
        }
        console.log(this.round);
        this.hpMonster = this.round*12.563;
        let hp = new objectOnThePage('div');
        hp.create(this.hpMonster + 'em', '1.250em', undefined, 'monsterhp');
        hp.setMargins('9.375em', '80.625em');
        hp.positioning('1000', "inline-block", "absolute");
        hp.pointBack(undefined, "repeating-linear-gradient(45deg,#606dbc,#606dbc 0.625em,#465298 0.625em,#465298 1.250em)");
        document.getElementById('globalPlayWindow').appendChild(hp.div);
        let nameMonster = new objectOnThePage('div');
        nameMonster.create('25.000em', '1.875em', undefined, 'namemonster');
        nameMonster.setMargins('4.375em', '79.375em');
        nameMonster.positioning('1000', "inline-block", "absolute");
        let pName = new objectOnThePage('p');
        pName.create(undefined, undefined, undefined, undefined, undefined, getMonsterName);
        pName.pointBack(undefined, undefined, undefined, undefined, undefined, 'OrangeRed');
        pName.fonts('1.875em');
        nameMonster.appendChild(pName);
        document.getElementById('globalPlayWindow').appendChild(nameMonster.div);
    }

    static getDamage(bigCapacity) {
        let damage;
        if (bigCapacity) damage = 8.3752;
        else { damage = 4.1876; }
        console.log(damage);
        this.hpMonster -= damage;
        if (this.hpMonster < 0) {
            this.hpMonster = 0;
        }
        document.getElementById('monsterhp').style.width = this.hpMonster + 'em';
    }  

}