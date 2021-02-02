import WallEnemy from './WallEnemy.js';
import { enemyData } from './enemyData.js';

/**
 * THese class describes the wall turret that appears and attacks the player.
 * It extends from the class WallEnemy and share common parent with Cannon class.
 */
export default class wallTurret extends WallEnemy {

    constructor(x, y) {
        super(x, y, enemyData.wallTurret.default);
    }

    update(player) {
        this.dx = 0;

        let playerX = player.destinationX;
        let playerY = player.destinationY;
        let playerHeight = player.height;
        let playerWidth = player.width;
        if (!this.hide) {

            if (playerY + playerHeight === this.y + this.height) {
                this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.wallTurret.right : enemyData.wallTurret.left;
            }
            else if (playerY + playerHeight > this.y + this.height) {
                this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.wallTurret.downRight : enemyData.wallTurret.downLeft;
            }
            else if (playerY + playerHeight < this.y + this.height) {
                this.frameArr = (playerX + playerWidth > this.x + this.width) ? enemyData.wallTurret.topRight : enemyData.wallTurret.topLeft;
            }
            else if (playerY + playerHeight < this.y && (playerX >= this.x && playerX + playerWidth <= this.x + this.width)) {
                this.frameArr = enemyData.wallTurret.up;
            }
            else if (playerY + playerHeight > this.y && (playerX >= this.x && playerX + playerWidth <= this.x + this.width)) {
                this.frameArr = enemyData.wallTurret.down;
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

        if (player.camera) {
            this.dx = -2.5;
        }

        this.x += this.dx;
    }
}