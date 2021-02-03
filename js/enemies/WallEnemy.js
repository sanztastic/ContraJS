import Bullet from '../ammunition/Bullets.js';
import { Gun, BulletOwner, BulletDirection } from '../utils/Enums.js';
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
        this.health = 500;

        this.gun = Gun.DEFAULT;
        this.bulletDirection = BulletDirection.RIGHT;
        this.bulletArr = [];
        this.bulletOwner = BulletOwner.ENEMY;
        this.shoot = false;
        this.shootHold = 0;
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
                this.hide = false;
                this.show = false;
            }
        }

        this.frame += this.frames % this.period === 0 ? 1 : 0;
        this.frames++;
    }

    checkBulletCollision(player) {
        player.bullets.forEach((bullet) => {
            if ((bullet.x + bullet.width >= this.x && bullet.x + bullet.width < this.x + this.width && bullet.y >= this.y && bullet.y <= this.y + this.height)) {

                bullet.dead = true;
                this.health -= bullet.damage;
                if (this.health <= 0) {
                    this.dead = true;
                    player.score += 500;
                }


            }
        });
    }
}