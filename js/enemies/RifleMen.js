import Bullet from '../ammunition/Bullets.js';
import HumanEnemy from './HumanEnemy.js';
import { enemyData } from './enemyData.js';
import { Gun, BulletOwner, BulletDirection } from '../utils/Enums.js';
import { setXandYForBullet } from '../utils/utilities.js';
import { blastData } from '../ammunition/bulletData.js';

/**
 * These class generates one of the enemies called rifle men which can hold gun and shoot at you
 * at 6 different directions
 * 
 * @author Shanand Shrestha
 */
export default class RifleMen extends HumanEnemy {
    constructor(x, y) {
        super(x, y, enemyData.rifleMan.left);

        this.gun = Gun.DEFAULT;
        this.bulletDirection = BulletDirection.RIGHT;
        this.bulletArr = [];
        this.bulletOwner = BulletOwner.ENEMY;
        this.shoot = false;
    }

    update(player) {
        this.shoot = this.frames % 50 === 0 ? true : false;
        this.dx = 0;
        if (!this.onGround) {
            this.dy += this.gravity;
        }

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


        if (playerY + playerHeight === this.y + this.height) {
            this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.rifleMan.right : enemyData.rifleMan.left;
            this.bulletDirection = (playerX + playerWidth > this.x + this.width) ? BulletDirection.RIGHT : BulletDirection.LEFT;
            this.shoot = false;
        }
        else if (playerY + playerHeight > this.y + this.height) {
            this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.rifleMan.downRight : enemyData.rifleMan.downLeft;
            this.bulletDirection = (playerX + playerWidth > this.x + this.width) ? BulletDirection.DOWN_RIGHT : BulletDirection.DOWN_LEFT;
            this.shoot = false;
        }
        else if (playerY + playerHeight < this.y + this.height) {
            this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.rifleMan.upRight : enemyData.rifleMan.upLeft;
            this.bulletDirection = (playerX + playerWidth > this.x + this.width) ? BulletDirection.RIGHT_UP : BulletDirection.LEFT_UP;
            this.shoot = false;
        }


        if (this.x <= 0) {
            this.dead = true;
            this.onGround = false;
            this.blast = true;
        }

        // if (this.dead) {
        //     this.frameArr = blastData.hitShot;
        // }


        this.checkBulletCollision(player);

        if (player.camera) {
            this.dx = -2.5;
        }
        this.x += this.dx;

        this.y += this.dy;
    }
}