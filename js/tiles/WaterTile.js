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
    update(player, soldierArr, snipers) {
        this.dx = 0;
        if (player.destinationX + player.width > this.x && player.destinationX < this.x + this.width &&
            player.destinationY + player.height > this.y && player.destinationY < this.y + this.height) {

            player.onGround = false;
            player.onWater = true;
            player.jumping = false;
            player.destinationY = this.y - player.height;
            if (!player.drop) player.frameArr = playerData.water.drop;
        }
        soldierArr.forEach(soldier => {
            if (soldier.x + soldier.width > this.x && soldier.x < this.x + this.width &&
                soldier.y + soldier.height > this.y && soldier.y < this.y + this.height) {

                soldier.onGround = false;
                soldier.dead = true;
            }
        });
        snipers.forEach(sniper => {
            if (sniper.x + sniper.width > this.x && sniper.x < this.x + this.width &&
                sniper.y + sniper.height > this.y && sniper.y < this.y + this.height) {

                sniper.onGround = false;
                sniper.dead = true;
            }
        });
        if (player.camera) {
            this.dx = -2.5;
        }
        this.x += this.dx;
    }
}