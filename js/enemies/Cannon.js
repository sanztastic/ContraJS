import WallEnemy from './WallEnemy.js';
import { enemyData } from "./enemyData.js";

/**
 *  These class is for the wall cannon that attacks the player. 
 */
export default class Cannon extends WallEnemy {
    constructor(x, y) {
        super(x, y, enemyData.cannon.show);
    }
    update(player) {
        this.dx = 0;

        let playerX = player.destinationX;
        let playerY = player.destinationY;
        let playerHeight = player.height;
        let playerWidth = player.width;

        if (!this.hide) {
            if (playerY + playerHeight >= this.y + this.height) {
                this.frameArr = enemyData.cannon.left;
            }
            else if (playerY + playerHeight < this.y + this.height) {
                this.frameArr = (playerX + playerWidth > this.x - 100) ? enemyData.cannon.farLeftUp : enemyData.cannon.LeftUp;
            }
        }
        else if (this.hide) {
            if (playerX + playerWidth >= this.x - 200) {
                this.show = true;
                this.frameArr = enemyData.cannon.show;
            }
        }

        if (this.x <= 0) {
            this.dead = true;
        }
        if (player.camera) {
            this.dx = -2.5;
        }
        this.x += this.dx;
    }
}
