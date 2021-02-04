import { landTileData, waterTileData, bridgeTileData } from '../utils/gameData.js';
import BasicTile from './BasicTile.js';
import BridgeTile from './BridgeTile.js';
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
        this.bridgeArr = [];
        landTileData.forEach(data => {
            this.tileArr.push(new BasicTile(data.x, data.y, data.height, data.width));
        });
        this.waterTile = new WaterTile(waterTileData.x, waterTileData.y, waterTileData.width, waterTileData.height);
        bridgeTileData.forEach(data => {
            this.bridgeArr.push(new BridgeTile(data.x, data.y, data.height, data.width));
        });
    }
    draw(ctx) {
        this.tileArr.forEach(tile => {
            tile.draw(ctx);
        })
        this.waterTile.draw(ctx);
        this.bridgeArr.forEach(data => {
            data.draw(ctx);
        });
    }
    update(player, soldierArr, snipers) {
        this.tileArr.forEach(tile => {
            tile.update(player, soldierArr, snipers);
        })
        this.waterTile.update(player, soldierArr, snipers);
        this.bridgeArr.forEach(data => {
            data.update(player, soldierArr, snipers);
        });
    }
    reset() {
        this.tileArr.forEach(tile => {
            tile.reset();
        })
        this.waterTile.reset();
    }
}