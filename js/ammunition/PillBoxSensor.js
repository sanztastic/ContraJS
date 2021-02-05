import { createImageElement } from '../utils/utilities.js';
import { bulletData } from './bulletData.js';
import * as CONSTANT from '../utils/constants.js';

/**
 * The box which consist of weapon when destroyed.
 */
export default class PillBoxSensor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.data = bulletData.pillbox;
        this.image = createImageElement("./assets/ammunition.gif");
        this.destroyed = false;
        this.finish = false;
        this.dx = 0;
        this.show = false;
        this.dy = 0.25;
        this.gunSelect = false;
        this.end = false;
        this.onGround = false;
    }

    draw(ctx) {
        if (!this.end) {
            this.width = this.data.width;
            this.height = this.data.height;
            this.sourceX = this.data.xPos;
            this.sourceY = this.data.yPos;

            console.log("time for me to this.show up")
            ctx.drawImage(this.image, this.sourceX, this.sourceY, this.width, this.height, this.x, this.y, this.width, this.height);
        }
    }

    update(player) {
        if (this.destroyed) {
            // console.log("destroyed");
            console.log(this.data);
            this.destroyed = false;
            this.gunSelect = true;
            if (this.onGround) {
                this.dx *= 0.8;
                this.dy = 0;
            } else {
                this.dx = 0;
                this.dy = 2;
            }
            if ((player.x <= this.x + this.width && player.x + player.width >= this.x + this.width)
                && (player.y + player.height >= this.y + this.height && player.y <= this.y + this.height)) {
                console.log("gun select")
                player.gun = this.data.name;
                this.end = true;
            }

        } else {
            // console.log("not yet destroyed0");
            if (this.y >= CONSTANT.gameHeight / 2) {
                this.dy = -2
            } else if (this.y <= 0) {
                this.dy = 2;
            }
            this.dx = -2.5;
        }

        if (this.x + this.width <= 0) {
            this.end = true;
        }
        this.checkBulletCollision(player);

        this.x += this.dx;
        this.y += this.dy;
    }

    checkBulletCollision(player) {
        if (!this.dead) {
            player.bullets.forEach((bullet) => {

                if ((bullet.x + bullet.width >= this.x && bullet.x + bullet.width < this.x + this.width && bullet.y >= this.y && bullet.y <= this.y + this.height)) {
                    if (!this.gunSelect) {
                        bullet.dead = true;
                        this.destroyed = true;
                        console.log("owww!!");
                        player.score += 100;
                        this.data = bulletData.gunData[Math.floor(Math.random() * bulletData.gunData.length)];
                        player.gun = this.data.name;
                        console.log(this.data, "hey");
                    }
                }
            });
        }
    }
}