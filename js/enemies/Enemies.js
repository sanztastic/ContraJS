import { enemyData } from './enemyData.js';
import Soldier from './Soldier.js';
import RifleMen from './RifleMen.js';
import Cannon from './Cannon.js';
import WallTurret from './WallTurret.js';

/**
 * These class generates the enemies into the game.
 * 
 * @author Shanand Shrestha
 */
export default class Enemies {

    constructor() {
        this.enemyArr = [];
        this.wallEnemies = [];
    }

    generateEnemies() {
        enemyData.soldier.generateAt.xPos.forEach(pos => {
            for (let i = 0; i < 3; i++) {
                this.enemyArr.push(new Soldier(pos, 0));
                pos += 100;
            }
        });
        enemyData.rifleMan.generateAt.xPos.forEach((pos, index) => {
            this.enemyArr.push(new RifleMen(pos, enemyData.rifleMan.generateAt.yPos[index]));
        });
        enemyData.cannon.generateAt.xPos.forEach((pos, index) => {
            this.wallEnemies.push(new Cannon(pos, enemyData.cannon.generateAt.yPos[index]));
        });
        enemyData.wallTurret.generateAt.xPos.forEach((pos, index) => {
            this.wallEnemies.push(new WallTurret(pos, enemyData.wallTurret.generateAt.yPos[index]))
        });
    }

    getEnemies() {
        return this.enemyArr;
    }

    getWallEnemies() {
        return this.wallEnemies;
    }
}