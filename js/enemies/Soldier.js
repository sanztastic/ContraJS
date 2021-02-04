import HumanEnemy from './HumanEnemy.js';
import { enemyData } from './enemyData.js';
import { blastData } from '../ammunition/bulletData.js';

/**
 * These class is for one of the enemy troops soldier that runs towards the player
 * and kills player if it touches the player.
 * 
 * @author Shanand Shrestha
 */
export default class Soldier extends HumanEnemy {
    /**
     * 
     * @param {number} x x-cordinate or horizontal position of the enemy. 
     * @param {number} y y-cordinate or vertical position of the enemy.
     */
    constructor(x, y) {
        super(x, y, enemyData.soldier.left);
    }
    update(player) {
        this.ground = false;
        if (this.onGround) {
            this.dy = 0;
            this.dx = -2.5;
        } else {
            this.ground = false;
            this.dy += this.gravity;
            this.dx *= 0.8;
        }

        if (this.x + this.height <= 0) {
            this.dead = true;
            this.onGround = false;
            this.blast = true;
        }
        // if (this.dead) {
        //     this.frameArr = blastData.hitShot;
        // }

        this.checkBulletCollision(player);

        this.x += this.dx;
        this.y += this.dy;
    }
}