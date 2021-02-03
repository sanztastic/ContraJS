import WallEnemy from './WallEnemy.js';
import Bullet from '../ammunition/Bullets.js'
import { enemyData } from './enemyData.js';
import { BulletDirection } from '../utils/Enums.js';
import { setXandYForBullet } from '../utils/utilities.js';

/**
 * THese class describes the wall turret that appears and attacks the player.
 * It extends from the class WallEnemy and share common parent with Cannon class.
 */
export default class wallTurret extends WallEnemy {

    constructor(x, y) {
        super(x, y, enemyData.wallTurret.default);
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

            if (playerY + playerHeight > this.y + this.height) {
                this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.wallTurret.downRight : enemyData.wallTurret.downLeft;
                this.bulletDirection = (playerX + playerWidth > this.x + this.width) ? BulletDirection.DOWN_RIGHT : BulletDirection.DOWN_LEFT;
                this.shoot = false;
            }
            else if (playerY + playerHeight < this.y + this.height) {
                this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.wallTurret.topRight : enemyData.wallTurret.topLeft;
                this.bulletDirection = (playerX + playerWidth > this.x + this.width) ? BulletDirection.RIGHT_UP : BulletDirection.LEFT_UP;
                this.shoot = false;
            }
            else if (playerY + playerHeight === this.y + this.height) {
                this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.wallTurret.right : enemyData.wallTurret.left;
                this.bulletDirection = (playerX + playerWidth > this.x + this.width) ? BulletDirection.RIGHT : BulletDirection.LEFT;
                this.shoot = false;
            }
            else if (playerY + playerHeight < this.y && (playerX >= this.x && playerX + playerWidth <= this.x + this.width)) {
                this.frameArr = enemyData.wallTurret.up;
                this.bulletDirection = BulletDirection.UP;
                this.shoot = false;
            }
            else if (playerY + playerHeight > this.y && (playerX >= this.x && playerX + playerWidth <= this.x + this.width)) {
                this.frameArr = enemyData.wallTurret.down;
                this.bulletDirection = BulletDirection.DOWN;
                this.shoot = false;
            }
        }

        if (this.hide && playerX + playerWidth >= this.x - 200) {
            console.log("wall turret thingy");
            this.frameArr = enemyData.wallTurret.show;
            this.show = true;
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