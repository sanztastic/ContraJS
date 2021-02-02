import { enemyData } from './enemyData.js';
import Soldier from './Soldier.js';
import RifleMen from './RifleMen.js';
import Cannon from './Cannon.js';

/**
 * These class generates the enemies into the game.
 * 
 * @author Shanand Shrestha
 */
export default class Enemies {

    constructor() {
        this.enemyArr = [];
        this.cannonTurretArr = [];
        // this.sensorMachineArr = [];
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
            this.cannonTurretArr.push(new Cannon(pos, enemyData.rifleMan.generateAt.yPos[index]));
        });
    }
    getEnemies() {
        return this.enemyArr;
    }
    getCannonTurret(){
        return this.cannonTurretArr;
    }
}