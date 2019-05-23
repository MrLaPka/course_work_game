import randomRiddles from '../randomGen/randomRiddles'
import faerbolRender from '../../character/gg/faerbolRender'
import monsterFaerbolRender from '../../character/monster/monsterFaerbolRender'

export default class checkSolutionRiddle {
    check(solution, numberTask) {

        let request = new XMLHttpRequest();
        request.open('POST', '/getRiddles', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener('load', () => {
            let riddles = {};
            for (let i = 0; i < JSON.parse(request.response).length; i++) {
                let key = String(JSON.parse(request.response)[i].key);
                riddles[`${key}`] = String(JSON.parse(request.response)[i].riddle);
            }

            let newRiddles = new randomRiddles(riddles);
            if (newRiddles.getKeyByValue(String(numberTask)) === solution) {
                const fR = new faerbolRender();
                fR.createFaerbol(undefined, 'img/bluefaerball.gif');
            }
            else if (newRiddles.getKeyByValue(String(numberTask)) !== solution) {
                const mFR = new monsterFaerbolRender();
                mFR.createFaerbol();
            }

         });
        request.send();
    }
}