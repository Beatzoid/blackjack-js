import { WINDOW_WIDTH, WINDOW_HEIGHT } from "./constants.js";

export const widthSize = () => {
    if (WINDOW_WIDTH > 1000) return window.screen.width * 0.1;
    return window.screen.width * 0.18;
};

export const heightSize = () => {
    if (WINDOW_HEIGHT > 700) return window.screen.height * 0.18;
    return window.screen.height * 0.15;
};
