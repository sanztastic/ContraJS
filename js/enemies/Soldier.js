import HumanEnemy from './HumanEnemy.js';
import { enemyData } from './enemyData.js';

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
    update() {
        if (this.onGround) {
            this.dy = 0;
            this.dx = -2.5;
        } else {
            this.dy += this.gravity;
        }
        if (this.x <= 0) {
            this.dead = true;
            this.onGround = false;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}