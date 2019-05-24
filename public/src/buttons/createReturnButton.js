import objectOnThePage from '../page_elements/objectOnThePage'

export default class createReturnButton {
    constructor() {
        let ReturnButton = new objectOnThePage('button');
        ReturnButton.create('4.125em', '2.563em', "&#9668", undefined);
        ReturnButton.positioning('1100', undefined, 'absolute');
        ReturnButton.addEventListener('click', function () {
            ReturnButton.remove();
            document.getElementById('additionalWindow').remove();
            document.getElementById('playButton').style.display = 'inline-block';
            document.getElementById('screenButton').style.display = 'inline-block';
            document.getElementById('scoreButton').style.display = 'inline-block';
            document.getElementById('nameOfGame').style.display = 'block';
        })
        document.body.appendChild(ReturnButton.div);
    }
}