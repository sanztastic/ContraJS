import TileFactory from "./TileFactory.js";
import { playerData } from '../players/playerData.js';

/**
 * The class to generate the water tiles where the player can swim and have some different
 * functionalities
 * 
 * @author Shanand Shrestha
 */
export default class WaterTile extends TileFactory {
    constructor(x, y, width, height) {
        super(x, y, height, width);
        this.dx = 0;
    }
    update(player) {
        this.dx = 0;
        if (player.destinationX + player.width > this.x && player.destinationX < this.x + this.width &&
            player.destinationY + player.height > this.y && player.destinationY < this.y + this.height) {

            player.onGround = false;
            player.onWater = true;
            player.jumping = false;
            player.destinationY = this.y - player.height;
            if (!player.drop) player.frameArr = playerData.water.drop;
        }
        if (player.camera) {
            this.dx = -2;
        }
        this.x += this.dx;
    }
}