import { createImageElement, setXandYForBullet } from "../../utils/utilities.js";
import { Gun, BulletOwner, BulletDirection } from '../../utils/Enums.js';
import Bullet from '../../ammunition/Bullets.js';

/**
 * These are the the guard cannon that are placed in the body of the gate(main boss)
 * to defend the gate
 * 
 */
export default class GuardCannon {
    constructor(x, y, positionArr) {
        this.x = x;
        this.y = y;
        this.height = positionArr.height;
        this.width = positionArr.width;
        this.sourceX = positionArr.xPos;
        this.sourceY = positionArr.yPos;
        this.img = createImageElement("./assets/MainBoss.gif");
        this.dx = 0;
        this.gun = Gun.MACHINE_GUN;
        this.bulletDirection = BulletDirection.BOSS_LEFT;
        this.bulletArr = [];
        this.bulletOwner = BulletOwner.BOSS;
        this.shoot = false;
        this.health = 800;
        this.frames = 0;
        this.dead = false;
    }
    draw(ctx) {
        if (!this.dead) {
            ctx.drawImage(this.img, this.sourceX, this.sourceY, this.width, this.height, this.x, this.y, this.width, this.height);
        }
    }
    update(player) {
        this.dx = 0;

        this.shoot = this.frames % 50 === 0 ? true : false;

        let bulletX = setXandYForBullet(this).x;
        let bulletY = setXandYForBullet(this).y;
        let bulletVelX = setXandYForBullet(this).dx;
        let bulletVelY = setXandYForBullet(this).dy;

        if (this.shoot) {
            let bullet = new Bullet(bulletX, bulletY, bulletVelX, bulletVelY);
            bullet.bulletOwner = this.bulletOwner;
            bullet.direction = this.bulletDirection;
            this.bulletArr.push(bullet);
        }

        let playerX = player.destinationX;
        let playerY = player.destinationY;
        let playerHeight = player.height;
        let playerWidth = player.width;

        if (player.destinationX + player.width >= this.x - 300) {
            console.log("near");
            this.shoot = true;
        }

        this.checkBulletCollision(player);

        if (player.camera) {
            this.dx = -2.5;
        }
        this.x += this.dx;
        this.frames++;
    }

    checkBulletCollision(player) {
        if (!this.dead) {
            player.bullets.forEach((bullet) => {
                if ((bullet.x + bullet.width >= this.x && bullet.x + bullet.width < this.x + this.width && bullet.y >= this.y && bullet.y <= this.y + this.height)) {

                    bullet.dead = true;
                    this.health -= bullet.damage;
                    if (this.health <= 0) {
                        this.dead = true;
                        player.score += 5000;
                    }

                }
            });
        }
    }
}