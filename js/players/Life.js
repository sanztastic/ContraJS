import { createImageElement } from '../utils/utilities.js';

/**
 * These class consist of a live of the player
 */
export default class Life {
    constructor() {
        this.sourceX = 568;
        this.sourceY = 534;
        this.width = 18;
        this.height = 34;
        this.x = 10;
        this.y = 10;
        this.lives = 3;
        this.image = createImageElement("./assets/ammunition.gif");
        this.gameOver = false;
    }

    draw(ctx) {
        let temp = 0;
        for (var i = 0; i < this.lives; i++) {
            ctx.drawImage(this.image, this.sourceX, this.sourceY, this.width, this.height, this.x + temp, this.y, this.width, this.height);
            temp += this.width + 10;
        }
    }

    update() {
        if (this.lives <= 0) {
            this.gameOver = true;
        }
    }
}