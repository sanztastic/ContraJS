import { createImageElement } from '../utils/utilities.js';

/**
 * These is the parent class form every human enemies. All the enemies like soldiers and rifle man 
 * inherits from these class.
 */
export default class HumanEnemy {
    constructor(x, y, enemyArr) {
        this.x = x;
        this.y = y;
        this.sourceX = 0;
        this.sourceY = 0;
        this.height = 0;
        this.width = 0;
        this.enemyImg = createImageElement("./assets/humanEnemies.gif");
        this.frameArr = enemyArr;
        this.dead = false;
        this.dx = 0;
        this.dy = 0;
        this.gravity = 0.25;
        this.onGround = false;
        this.period = 8;
        this.frame = 0;
        this.frames = 0;
    }
    draw(ctx) {
        if (!this.dead) {
            this.sourceX = this.frameArr[this.frame % this.frameArr.length].xPos;
            this.sourceY = this.frameArr[this.frame % this.frameArr.length].yPos;
            this.height = this.frameArr[this.frame % this.frameArr.length].height;
            this.width = this.frameArr[this.frame % this.frameArr.length].width;

            ctx.drawImage(this.enemyImg, this.sourceX, this.sourceY, this.width, this.height,
                this.x, this.y, this.width, this.height);

            this.frame += this.frames % this.period === 0 ? 1 : 0;
            this.frames++;
        }
    }
    checkBulletCollision(player) {
        player.bullets.forEach((bullet) => {
            if ((bullet.x + bullet.width >= this.x && bullet.x + bullet.width < this.x + this.width && bullet.y >= this.y && bullet.y <= this.y + this.height)) {
                bullet.dead = true;
                this.dead = true;
                console.log(this);
                player.score += 100;
            }
        });
    }
}