import objectOnThePage from '../../page_elements/objectOnThePage.js'
class monsterRender {

    createHead() {
        const monsterHeaders = ["img/Monster_parts/head01.png", "img/Monster_parts/head02.png", "img/Monster_parts/head03.png"];
        let randomHead = monsterHeaders[Math.floor(Math.random() * monsterHeaders.length)];
        this.Head = new objectOnThePage('div');
        this.Head.create('3.750em', '3.563em');
        this.Head.positioning("1010", undefined, "absolute");
        this.Head.setMargins("24.3em", "90.3em");
        this.Head.pointBack(undefined, `url(${randomHead})`, "100%");
    }

    createBody() {
        const monsterBodies = ["img/Monster_parts/body01.png", "img/Monster_parts/body02.png", "img/Monster_parts/body03.png"];
        let randomBody = monsterBodies[Math.floor(Math.random() * monsterBodies.length)];
        this.Body = new objectOnThePage('div');
        this.Body.create('5.000em', '5.313em');
        this.Body.positioning("1000", undefined, "absolute");
        this.Body.setMargins("25.625em", "89.813em");
        this.Body.pointBack(undefined, `url(${randomBody})`, "100%");
    }
    
    createArms() {
        const monsterArms = ["img/Monster_parts/arm01.png", "img/Monster_parts/arm02.png", "img/Monster_parts/arm03.png"];
        let randomArms = monsterArms[Math.floor(Math.random() * monsterArms.length)];
        this.leftArm = new objectOnThePage('div');
        this.leftArm.create('2.188em', '3.750em', undefined, 'leftArm');
        this.leftArm.positioning("900", undefined, "absolute");
        this.leftArm.setMargins("26.563em", "88.938em");
        this.leftArm.pointBack(undefined, `url(${randomArms})`, "100%");
        this.rightArm = new objectOnThePage('div');
        this.rightArm.create('2.188em', '3.550em', undefined);
        this.rightArm.positioning("1010", undefined, "absolute");
        this.rightArm.setMargins("26.875em", "93.563em");
        if (randomArms === "img/Monster_parts/arm01.png") {
            this.rightArm.pointBack(undefined, `url(img/Monster_parts/arm06.png)`, "100%");
        }
        else if (randomArms === "img/Monster_parts/arm02.png") {
            this.rightArm.pointBack(undefined, `url(img/Monster_parts/arm05.png)`, "100%");
        }
        else if (randomArms === "img/Monster_parts/arm03.png") {
            this.rightArm.pointBack(undefined, `url(img/Monster_parts/arm04.png)`, "100%");
        }
    }
    
    createLegs() {
        const monsterLegs = ["img/Monster_parts/leg01.png", "img/Monster_parts/leg02.png", "img/Monster_parts/leg03.png"];
        let randomLegs = monsterLegs[Math.floor(Math.random() * monsterLegs.length)];
        this.leftLeg = new objectOnThePage('div');
        this.leftLeg.create('2.188em', '3.125em', undefined);
        this.leftLeg.positioning("900", undefined, "absolute");
        this.leftLeg.setMargins("30.188em", "90.438em");
        this.leftLeg.pointBack(undefined, `url(${randomLegs})`, "100%");
        this.rightLeg = new objectOnThePage('div');
        this.rightLeg.create('2.188em', '3.063em', undefined);
        this.rightLeg.positioning("910", undefined, "absolute");
        this.rightLeg.setMargins("30.438em", "91.875em");
        if (randomLegs === "img/Monster_parts/leg01.png") {
            this.rightLeg.pointBack(undefined, `url(img/Monster_parts/leg04.png)`, "100%");
        }
        else if (randomLegs === "img/Monster_parts/leg02.png") {
            this.rightLeg.pointBack(undefined, `url(img/Monster_parts/leg05.png)`, "100%");
        }
        else if (randomLegs === "img/Monster_parts/leg03.png") {
            this.rightLeg.pointBack(undefined, `url(img/Monster_parts/leg06.png)`, "100%");
        }
    }

    createWeapon() {
        const monsterWeapons = ["img/Monster_parts/weapon01.png", "img/Monster_parts/weapon02.png", "img/Monster_parts/weapon03.png"];
        let randomWeapon = monsterWeapons[Math.floor(Math.random() * monsterWeapons.length)];
        this.Weapon = new objectOnThePage('div');
        this.Weapon.create('10.000em', '7.000em', undefined, 'weapon');
        this.Weapon.positioning("1010", undefined, "absolute");
        this.Weapon.setMargins("27.000em", "85.750em");
        this.Weapon.pointBack(undefined, `url(${randomWeapon}) no-repeat`, "50%");
}

    createMonster(monster) {
        monster.create(undefined, undefined, undefined, 'monster');
        monster.positioning(undefined, undefined, "absolute");
        monster.appendChild(this.Head);
        monster.appendChild(this.Body);
        monster.appendChild(this.leftArm);
        monster.appendChild(this.rightArm);
        monster.appendChild(this.leftLeg);
        monster.appendChild(this.rightLeg);
        monster.appendChild(this.Weapon);
    }

}

export default monsterRender;