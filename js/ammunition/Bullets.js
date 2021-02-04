import { bulletData } from './bulletData.js';
import { createImageElement } from '../utils/utilities.js';
import { BulletDirection, BulletOwner, Gun } from '../utils/Enums.js';
import * as CONSTANTS from '../utils/constants.js';

/**
 * Bullet class that generates or draws bullets for player, enemy.
 */
export default class Bullet {
    constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.sourceX = 0;
        this.sourceY = 0;
        this.width = 0;
        this.height = 0;
        this.blast = false;
        this.dx = dx;
        this.dy = dy;
        this.dead = false;
        this.bulletImg = createImageElement(bulletData.src);
        this.bullet = bulletData.default;
        this.direction = BulletDirection.LEFT;
        this.shoot = false;
        this.bulletOwner = BulletOwner.PLAYER;
        this.damage = 75;
    }

    draw(ctx) {
        if (!this.dead) {
            this.sourceX = this.bullet.xPos;
            this.sourceY = this.bullet.yPos;
            this.width = this.bullet.width;
            this.height = this.bullet.height;

            ctx.drawImage(this.bulletImg, this.sourceX, this.sourceY, this.width, this.height, this.x,
                this.y, this.width, this.height);
        }
    }
    /**
     * 
     * @param {object} player  can be player or enemies that can shoot
     */
    update(player) {
        if (this.x >= CONSTANTS.gameWidth || this.x <= 0 || this.y <= 0 || this.y >= CONSTANTS.gameHeight) {
            this.dead = true;
        }

        this.bullet = ((this.bulletOwner == BulletOwner.PLAYER) || (this.bulletOwner = BulletOwner.BOSS)) ? ((player.gun == Gun.DEFAULT) ? bulletData.default : bulletData.other) : bulletData.default;

        // this.dx = 5;
        this.damage = (player.gun == Gun.DEFAULT) ? 75 : 150;

        // if (this.bulletOwner == BulletOwner.BOSS) {
        //     this.dy += 2;
        //     this.dy--;
        // }

        this.x += this.dx;
        this.y += this.dy;
    }


}