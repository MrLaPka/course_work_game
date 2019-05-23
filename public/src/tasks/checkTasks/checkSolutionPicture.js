import randomPictures from '../randomGen/randomPictures'
import faerbolRender from '../../character/gg/faerbolRender'
import monsterFaerbolRender from '../../character/monster/monsterFaerbolRender'

export default class checkSolutionPicture {
    check(solution, numberTask) {

        let request = new XMLHttpRequest();
        request.open('POST', '/getPictures', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener('load', () => {
            let pictures = {};
            for (let i = 0; i < JSON.parse(request.response).length; i++) {
                let key = String(JSON.parse(request.response)[i].answer);
                pictures[`${key}`] = String(JSON.parse(request.response)[i].src);
            }

            let newPictures = new randomPictures(pictures);
            if (newPictures.getKeyByValue(String(numberTask)) === solution) {
                const fR = new faerbolRender();
                fR.createFaerbol(undefined, 'img/lazer.gif');
            }
            else if (newPictures.getKeyByValue(String(numberTask)) !== solution) {
                const mFR = new monsterFaerbolRender();
                mFR.createFaerbol();
            }

        });
        request.send();
    }
}