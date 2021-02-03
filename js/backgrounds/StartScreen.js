import * as CONSTANTS from '../utils/constants.js';
import { createImageElement } from '../utils/utilities.js';

/**
 * class to draw the start screen of the game
 */
export default class StartScreen {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.height = CONSTANTS.gameHeight;
        this.width = CONSTANTS.gameWidth;
        this.sourceX = 514;
        this.sourceY = 0;
        this.image = createImageElement("./assets/startScreenAndBg.png");
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.sourceX, this.sourceY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}