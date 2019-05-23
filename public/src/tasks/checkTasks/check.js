import faerbolRender from '../../character/gg/faerbolRender'
import monsterFaerbolRender from '../../character/monster/monsterFaerbolRender'

export default class check {
    check(solution, numberTask, bigCapacity) {
        Math.round(solution);
        let taskArr = numberTask.split(' ');
        let firstNumber = Math.round(parseInt(taskArr[0]));
        let secondNumber = Math.round(parseInt(taskArr[2]));
        let trueAnswer = 0;
        if (taskArr[1] == '+') {
            trueAnswer = firstNumber + secondNumber;
        }
        else if (taskArr[1] == '-') {
            trueAnswer = firstNumber - secondNumber;
        }

        else if (taskArr[1] == '*') {
            trueAnswer = firstNumber * secondNumber;
        }
        if (solution === trueAnswer) {
            const fR = new faerbolRender();
            fR.createFaerbol(bigCapacity, 'img/faerbol.gif');
        }
        else if (solution != trueAnswer) {
            const mFR = new monsterFaerbolRender();
            mFR.createFaerbol();
        }
    }
}