import objectOnThePage from '../page_elements/objectOnThePage'

export default class createReturnButton {
    constructor() {
        let ReturnButton = new objectOnThePage('button');
        ReturnButton.create('3.125em', '1.563em', "&#9668", undefined);
        ReturnButton.positioning('1100', undefined, 'absolute');
        ReturnButton.addEventListener('click', function () {
            ReturnButton.remove();
            document.getElementById('additionalWindow').remove();
            document.getElementById('playButton').style.display = 'inline-block';
            document.getElementById('screenButton').style.display = 'inline-block';
            document.getElementById('scoreButton').style.display = 'inline-block';
            document.getElementById('startFaerbol').style.display = 'block';
            document.getElementById('nameOfGame').style.display = 'block';
        })
        document.body.appendChild(ReturnButton.div);
    }
}