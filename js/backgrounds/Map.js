import { createImageElement } from '../utils/utilities.js';
import { mapData } from '../utils/gameData.js'

/**
 * These class deals with the background of the game which consist of all the map stuff that are 
 * included in the game as a background and all
 * 
 * @author Shanand Shrestha
 */
export default class Map {
    constructor() {
        this.destinationX = 0;
        this.destinationY = 0;
        this.bg = createImageElement(mapData.src);
        this.dx = 0;
    }

    draw(ctx) {
        // this.bg.onload = () => {
        ctx.drawImage(this.bg, mapData.xPos, mapData.yPos, mapData.width, mapData.height,
            this.destinationX, this.destinationY, mapData.width, mapData.height);
        // }
    }
    update(player) {
        this.dx = 0;
        if (player.camera) {
            this.dx = -2.5;
        }
        this.destinationX += this.dx;
    }
}