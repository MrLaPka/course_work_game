import interfaceGgRender from '../character/gg/interfaceGgRender';
import interfaceMonsterRender from '../character/monster/interfaceMonsterRender';
import objectOnThePage from '../page_elements/objectOnThePage'
import taskGeneration from '../tasks/taskGeneration'
import toRun from './toRun'
import getInfo from '../getInfo'
import init from './init'

export default class endWindow {
    endWinCreate() {
        let score;
        score = interfaceMonsterRender.round * Math.round(interfaceGgRender.hpGg * 7.9598) + (interfaceMonsterRender.round * 100 - Math.round(interfaceMonsterRender.hpMonster * 7.9598));
        let windowEnd = new objectOnThePage('div');
        windowEnd.create('32.000em', '12.500em', undefined, undefined, 'auto');
        windowEnd.positioning('1', 'block', 'absolute', 'center');
        windowEnd.setDistance('0', '0', '0', '0');
        windowEnd.pointBack(undefined, undefined, undefined, 'black', '.5', 'white');
        let victoryH2 = new objectOnThePage('h2');
        victoryH2.fonts('3em', 'sans-serif');
        let playAgainButton = new objectOnThePage('button');
        playAgainButton.create(undefined, undefined, undefined, undefined, undefined, "PLAY AGAIN");
        playAgainButton.fonts('1.5em');
        playAgainButton.addEventListener('click', function () {
            windowEnd.remove();
            interfaceGgRender.hpGg = 12.563;
            interfaceMonsterRender.hpMonster = interfaceGgRender.hpGg;
            document.getElementById('globalPlayWindow').remove();


            toRun.run();
        });
        if (Math.round(interfaceMonsterRender.hpMonster) === 0) {
            const audioElem = `<audio src='audio/Sound_15630.mp3' id = 'victory' autoplay = 'autoplay'></audio>`;
            windowEnd.create(undefined, undefined, audioElem);
            victoryH2.create(undefined, undefined, undefined, undefined, undefined, "VICTORY");
            let NextRoundButton = new objectOnThePage('button');
            NextRoundButton.create(undefined, undefined, undefined, undefined, undefined, "NEXT ROUND");
            NextRoundButton.fonts('1.5em');
            let ScorePlace = new objectOnThePage('h3');
            ScorePlace.create(undefined, undefined, undefined, undefined, undefined, "Score: " + score);
            ScorePlace.fonts(undefined, 'sans-serif');
            windowEnd.appendChild(ScorePlace);
            windowEnd.appendChild(victoryH2);
            windowEnd.appendChild(playAgainButton);
            windowEnd.appendChild(NextRoundButton);
            NextRoundButton.addEventListener('click', function () {
                taskGeneration.changeCapacity();
                interfaceMonsterRender.changeRound();
                const updateSQL = JSON.stringify({ id: getInfo.users, score: score });
                let request = new XMLHttpRequest();
                request.open('POST', '/update', true);
                request.setRequestHeader('Content-Type', 'application/json');
                request.addEventListener('load', () => {
                });
                request.send(updateSQL);
                windowEnd.remove();
                interfaceGgRender.hpGg = 12.563;
                interfaceMonsterRender.hpMonster = interfaceGgRender.hpGg;
                document.getElementById('globalPlayWindow').remove();

                toRun.run();
            });
        }
        else {
            const audioElem = `<audio src='audio/pole_chudes_-_zvuk_proigrysha_(SongHouse.me).mp3' id = 'fail' autoplay = 'autoplay'></audio>`;
            windowEnd.create(undefined, undefined, audioElem);
            victoryH2.create(undefined, undefined, undefined, undefined, undefined, "GAME OVER!");
            let ScorePlace = new objectOnThePage('h3');
            ScorePlace.create(undefined, undefined, undefined, undefined, undefined, "Score: " + score);
            ScorePlace.fonts(undefined, 'sans-serif');
            windowEnd.appendChild(victoryH2);
            windowEnd.appendChild(ScorePlace);
            windowEnd.appendChild(playAgainButton);
        }
        let mainMenuButton = new objectOnThePage('button');
        mainMenuButton.create(undefined, undefined, undefined, undefined, undefined, "MENU");
        mainMenuButton.fonts('1.5em');
        windowEnd.appendChild(mainMenuButton);
        document.body.appendChild(windowEnd.div);
        if (document.getElementById('fail')) {
            if (document.getElementById('disabled')) {
                document.getElementById('fail').volume = 0;
            }
            else if (document.getElementById('enabled')) {
                document.getElementById('fail').volume = 1;
            }
        }

        if (document.getElementById('victory')) {
            if (document.getElementById('disabled')) {
                document.getElementById('victory').volume = 0;
            }
            else if (document.getElementById('enabled')) {
                document.getElementById('victory').volume = 1;
            }
        }

        mainMenuButton.addEventListener('click', function () {
            if (Math.round(interfaceMonsterRender.hpMonster) === 0) {
                taskGeneration.changeCapacity();
                interfaceMonsterRender.changeRound();
            }
            const updateSQL = JSON.stringify({ id: getInfo.users, score: score });
            let request = new XMLHttpRequest();
            request.open('POST', '/update', true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(updateSQL);

            interfaceGgRender.hpGg = 12.563;
            interfaceMonsterRender.hpMonster = interfaceGgRender.hpGg;
            windowEnd.remove();
            document.getElementById('globalPlayWindow').remove();
            const letStart = new init();
            letStart.startWindowRender();
            letStart.startWindowInterface();
            letStart.audioCreate();
            letStart.createScore();
            letStart.createScreen();
            document.getElementById("info").style.display = 'block';
        });
    }
}