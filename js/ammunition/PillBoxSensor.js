import { createImageElement } from '../utils/utilities.js';
import { bulletData } from './bulletData.js';
import * as CONSTANT from '../utils/constants.js';

/**
 * The box which consist of weapon when destroyed.
 */
export default class PillBoxSensor {
    constructor(x, y) {
        this.x = x;
        this.x = y;
        this.data = bulletData.pillbox;
        this.width = this.data.width;
        this.height = this.data.height;
        this.sourceX = this.data.xPos;
        this.sourceY = this.data.yPos;
        this.image = createImageElement("./assets/ammunition.gif");
        this.destroyed = false;
        this.finish = false;
        this.dx = 2;
    }

    draw(ctx) {
        if (!this.finish) {
            // console.log(this.data);
            ctx.drawImage(this.image, this.sourceX, this.sourceY, this.width, this.height, this.x, this.y, this.width, this.height);
        }
    }

    update(player) {
        if (!this.destroyed) {
            this.dy = Math.floor(Math.random() * CONSTANT.gameHeight);
            this.checkBulletCollision(player);
        } else {
            this.dx = 0;
            this.dy = 2;
            if ((this.x <= player.destinationX + player.width && this.x + this.width >= player.destinationX + player.width)
                && (this.y + this.height >= player.destinationY + player.height && this.y <= player.destinationY + player.height)) {
                this.dead = true;
                player.gun = this.data.name;
                // this.dy = -3;
            }

        }

        this.x += this.dx;
        this.y += this.dy;
    }

    checkBulletCollision(player) {
        if (!this.dead) {
            player.bullets.forEach((bullet) => {
                if ((bullet.x + bullet.width >= this.x && bullet.x + bullet.width < this.x + this.width && bullet.y >= this.y && bullet.y <= this.y + this.height)) {
                    bullet.dead = true;
                    this.destroyed = true;
                    player.score += 100;
                    this.data = bulletData.gunData[Math.floor(Math.random() * bulletData.gunData.length)];
                }
            });
        }
    }
}