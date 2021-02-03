import WallEnemy from './WallEnemy.js';
import Bullet from '../ammunition/Bullets.js'
import { enemyData } from "./enemyData.js";
import { BulletDirection } from '../utils/Enums.js';
import { setXandYForBullet } from '../utils/utilities.js'

/**
 *  These class is for the wall cannon that attacks the player. 
 */
export default class Cannon extends WallEnemy {
    constructor(x, y) {
        super(x, y, enemyData.cannon.show);
    }
    update(player) {

        this.shoot = this.frames % 50 === 0 ? true : false;

        this.dx = 0;

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

        if (!this.hide) {
            if (playerY + playerHeight >= this.y + this.height) {
                this.frameArr = enemyData.cannon.left;
                this.bulletDirection = BulletDirection.LEFT;
                this.shoot = false;
            }
            else if (playerY + playerHeight < this.y + this.height) {
                this.frameArr = (playerX + playerWidth > this.x - 100) ? enemyData.cannon.farLeftUp : enemyData.cannon.LeftUp;
                this.bulletDirection = (playerX + playerWidth > this.x - 100) ? BulletDirection.LEFT_UP : BulletDirection.LEFT_UP;
                this.shoot = false;
            }
        }
        else if (this.hide) {
            if (playerX + playerWidth >= this.x - 200) {
                this.show = true;
                this.frameArr = enemyData.cannon.show;
                this.bulletDirection = BulletDirection.LEFT;
                this.shoot = false;
            }
        }

        if (this.x <= 0) {
            this.dead = true;
        }

        this.checkBulletCollision(player);

        if (player.camera) {
            this.dx = -2.5;
        }
        this.x += this.dx;
    }
}
