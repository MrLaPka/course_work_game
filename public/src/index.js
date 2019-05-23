import init from './windows/init'
// The main game loop

const letStart = new init();
letStart.startWindowRender();
letStart.startWindowInterface();
letStart.audioCreate();
letStart.createScore();
letStart.createScreen();
