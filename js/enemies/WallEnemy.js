import { createImageElement } from '../utils/utilities.js';

/**
 * These class is the parent class for the enemies which are stuck to
 * the wall and inhuman like cannon and wall turrets.
 *
 * @author Shanand Shrestha
 */

export default class WallEnemy {
    constructor(x, y, enemyArr) {
        this.x = x;
        this.y = y;
        this.src = "./assets/wallEnemies.gif";
        this.image = createImageElement(this.src);
        this.frameArr = enemyArr;
        this.hide = true;
        this.frame = 0;
        this.frames = 0;
        this.period = 8;
        this.dx = 0;
        this.dead = false;
        this.show = false;
    }

    draw(ctx) {
        this.sourceX = this.frameArr[this.frame % this.frameArr.length].xPos;
        this.sourceY = this.frameArr[this.frame % this.frameArr.length].yPos;
        this.height = this.frameArr[this.frame % this.frameArr.length].height;
        this.width = this.frameArr[this.frame % this.frameArr.length].width;

        ctx.drawImage(this.image, this.sourceX, this.sourceY, this.width, this.height,
            this.x, this.y, this.width, this.height);

        if (this.show) {
            if (this.frame % this.frameArr.length == this.frameArr.length - 1) {
                console.log("making sow and hode false");
                console.log('eh');
                this.hide = false;
                this.show = false;
            }
        }
        this.frame += this.frames % this.period === 0 ? 1 : 0;
        this.frames++;
    }
}