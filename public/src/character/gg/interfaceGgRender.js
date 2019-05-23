import objectOnThePage from '../../page_elements/objectOnThePage'

export default class interfaceGgRender {

    static create(value) {
        this.hpGg = 12.563;
        let hp = new objectOnThePage('div');
        hp.create('12.563em', '1.250em', undefined, 'gghp');
        hp.positioning('1000', "inline-block", "absolute");
        hp.setMargins('9.375em', '20.625em');
        hp.pointBack(undefined, "repeating-linear-gradient(-45deg,#606dbc,#606dbc 0.625em,#465298 0.625em,#465298 1.250em)");
        document.getElementById('globalPlayWindow').appendChild(hp.div);
        let nameGg = new objectOnThePage('div');
        nameGg.create('18.750em', '1.875em', undefined, 'namegg');
        nameGg.setMargins('4.375em', '21.875em');
        nameGg.positioning('1000', "inline-block", "absolute");
        let pName = new objectOnThePage('p');
        pName.create(undefined, undefined, undefined, undefined, undefined, value);
        pName.pointBack(undefined, undefined, undefined, undefined, undefined, 'Lime');
        pName.fonts('1.875em');
        nameGg.appendChild(pName);
        document.getElementById('globalPlayWindow').appendChild(nameGg.div);
    }

    static getDamage() {
        this.hpGg -= 4.1876;
        document.getElementById('gghp').style.width = this.hpGg + 'em';
    }  

}