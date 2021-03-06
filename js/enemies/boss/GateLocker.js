import { createImageElement } from "../../utils/utilities.js";

/**
 * These clas is the gate locker that is in the main body of the main boss(gate)
 */
export default class GateLocker {
    constructor(x, y, lockArr) {
        this.x = x;
        this.y = y;
        this.image = createImageElement('./assets/MainBoss.gif');
        this.frameArr = lockArr;
        this.frames = 0;
        this.frame = 0;
        this.period = 8;
        this.dx = 0;
        this.dead = false;
        this.health = 10000;
    }
    draw(ctx) {
        this.sourceX = this.frameArr[this.frame % this.frameArr.length].xPos;
        this.sourceY = this.frameArr[this.frame % this.frameArr.length].yPos;
        this.height = this.frameArr[this.frame % this.frameArr.length].height;
        this.width = this.frameArr[this.frame % this.frameArr.length].width;

        ctx.drawImage(this.image, this.sourceX, this.sourceY, this.width, this.height,
            this.x, this.y, this.width, this.height);

        this.frame += this.frames % this.period === 0 ? 1 : 0;
        this.frames++;
    }
    update(player) {
        this.dx = 0;

        this.checkBulletCollision(player);

        if (player.camera) {
            this.dx = -2.5;
        }
        this.x += this.dx;
    }

    checkBulletCollision(player) {
        if (!this.dead) {
            player.bullets.forEach((bullet) => {
                if ((bullet.x + bullet.width >= this.x && bullet.x + bullet.width < this.x + this.width && bullet.y >= this.y && bullet.y <= this.y + this.height)) {

                    bullet.dead = true;
                    this.health -= bullet.damage;
                    if (this.health <= 0) {
                        this.dead = true;
                        player.score += 20000;
                    }

                }
            });
        }
    }
}