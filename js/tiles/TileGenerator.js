import { landTileData, waterTileData } from '../utils/gameData.js';
import BasicTile from './BasicTile.js';
import WaterTile from './WaterTile.js';

/**
 * These class generates the tiles in the game. These is just a generator class that generates
 * tiles in the game
 * 
 * @author Shanand Shrestha
 */
export default class TileGenerator {
    constructor() {
        this.tileArr = [];
        landTileData.forEach(data => {
            this.tileArr.push(new BasicTile(data.x, data.y, data.height, data.width));
        });
        this.waterTile = new WaterTile(waterTileData.x, waterTileData.y, waterTileData.width, waterTileData.height);
    }
    draw(ctx) {
        this.tileArr.forEach(tile => {
            tile.draw(ctx);
        })
        this.waterTile.draw(ctx);
    }
    update(player) {
        this.tileArr.forEach(tile => {
            tile.update(player);
        })
        this.waterTile.update(player);
    }
}