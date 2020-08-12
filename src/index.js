import React, { setGlobal, addReducer } from 'reactn';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

setGlobal({
    frames: [""],
    frameCount: 1,
    frameIndex: 0
});

addReducer("changeFrameIndex", (global, dispatch, newFrameIndex) => {
    if (newFrameIndex >= 0 && newFrameIndex < global.frameCount)
        return { frameIndex: newFrameIndex };
});

addReducer("updateFrame", (global, dispatch, newFrame) => {
    global.frames[global.frameIndex] = newFrame;

    return { frames: global.frames };
});

addReducer("addFrame", (global, dispatch) => {
    global.frames.splice(global.frameIndex + 1, 0, "");

    return {
        frames: global.frames,
        frameCount: global.frameCount+1,
        frameIndex: global.frameIndex+1
    };
});

addReducer("removeFrame", (global, dispatch) => {
    if (global.frameCount-1 > 0) {
        global.frames.splice(global.frameIndex, 1);

        return {
            frames: global.frames,
            frameCount: global.frameCount - 1,
            frameIndex: global.frameIndex - 1
        };
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
