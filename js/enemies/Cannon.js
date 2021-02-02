import { enemyData } from "./enemyData.js";
import { createImageElement } from '../utils/utilities.js';

/**
 * 
 */
export default class Cannon {
    constructor(x, y) {
        this.img = createImageElement("./assets/wallEnemies.gif");
        this.x = x;
        this.y = y;
        this.sourceX = 0;
        this.sourceY = 0;
        this.height = 0;
        this.width = 0;
        this.frameArr = enemyData.cannon.show;
        this.dead = false;
        this.show = true;
        this.hide = false;
        this.dx = 0;
        this.period = 8;
        this.frame = 0;
        this.frames = 0;
    }

    draw(ctx) {

        this.sourceX = this.frameArr[this.frame % this.frameArr.length].xPos;
        this.sourceY = this.frameArr[this.frame % this.frameArr.length].yPos;
        this.height = this.frameArr[this.frame % this.frameArr.length].height;
        this.width = this.frameArr[this.frame % this.frameArr.length].width;

        ctx.drawImage(this.img, this.sourceX, this.sourceY, this.width, this.height,
            this.x, this.y, this.width, this.height);

        this.frame += this.frames % this.period === 0 ? 1 : 0;
        this.frames++;

        if (this.show && this.frame === this.frameArr.length) {
            this.show = false;
            this.hide = false;
        }
    }

    update(player) {
        this.dx = 0;

        let playerX = player.destinationX;
        let playerY = player.destinationY;
        let playerHeight = player.height;
        let playerWidth = player.width;

        if (!this.show) {
            if (playerY + playerHeight >= this.y + this.height) {
                this.frameArr = enemyData.cannon.left;
            }
            else if (playerY + playerHeight < this.y + this.height) {
                this.frameArr = (playerX + playerWidth > this.x - 100) ? enemyData.cannon.farLeftUp : enemyData.cannon.LeftUp;
            }
        }
        else {
            // if (playerX + playerWidth <= this.x - 300) {
            //     this.show = true;
            //     this.frameArr = enemyData.cannon.show;
            // }
        }

        if (this.x <= 0) {
            this.dead = true;
        }
        if (player.camera) {
            this.dx = -2.5;
        }
        this.x += this.dx;

        this.y += this.dy;
    }
}