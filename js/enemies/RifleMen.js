import HumanEnemy from './HumanEnemy.js';
import { enemyData } from './enemyData.js';

/**
 * These class generates one of the enemies called rifle men which can hold gun and shoot at you
 * at 6 different directions
 * 
 * @author Shanand Shrestha
 */
export default class RifleMen extends HumanEnemy {
    constructor(x, y) {
        super(x, y, enemyData.rifleMan.upLeft);
    }
    update(player) {
        this.dx = 0;
        if (!this.onGround) {
            this.dy += this.gravity;
        }

        let playerX = player.destinationX;
        let playerY = player.destinationY;
        let playerHeight = player.height;
        let playerWidth = player.width;

        if (playerY + playerHeight === this.y + this.height) {
            this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.rifleMan.right : enemyData.rifleMan.left;
        }
        else if (playerY + playerHeight > this.y + this.height) {
            this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.rifleMan.downRight : enemyData.rifleMan.downLeft;
        }
        else if (playerY + playerHeight < this.y + this.height) {
            this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.rifleMan.upRight : enemyData.rifleMan.upLeft;
        }

        if (this.x <= 0) {
            this.dead = true;
            this.onGround = false;
        }
        if (player.camera) {
            this.dx = -2.5;
        }
        this.x += this.dx;

        this.y += this.dy;
    }
}