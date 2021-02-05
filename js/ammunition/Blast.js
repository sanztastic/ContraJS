import { enemyData } from '../enemies/enemyData.js';
import { createImageElement } from '../utils/utilities.js';
import { blastData } from './bulletData.js';
/**
 * These class is for showing blast animation when enemy dies or is being shooted at
 */
export default class Blast {
    consructor(enemy) {
        this.enemy = enemy;
        this.x = enemy.x;
        this.y = enemy.y;
        this.src = "./assets/ammunition.gif";
        this.blastImg = createImageElement(this.src);
        this.frameArr = blastData.hitShot;
        this.dead = false;
        this.frame = 0;
        this.frames = 0;
    }

    draw(ctx) {
        if (this.dead) {
            this.sourceX = this.frameArr[this.frame % this.frameArr.length].xPos;
            this.sourceY = this.frameArr[this.frame % this.frameArr.length].yPos;
            this.height = this.frameArr[this.frame % this.frameArr.length].height;
            this.width = this.frameArr[this.frame % this.frameArr.length].width;

            ctx.drawImage(this.playerImg, this.sourceX, this.sourceY, this.width, this.height,
                this.destinationX, this.destinationY, this.width, this.height);

            this.frame += this.frames % this.period === 0 ? 1 : 0;
            this.frames++;

            if (this.frame % this.frameArr.length === this.frameArr.length - 1) {
                this.dead = false;
                this.enemy.dead = true;
            }
        }
    }
}