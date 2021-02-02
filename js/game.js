import * as CONSTANTS from './utils/constants.js'
import Map from './backgrounds/Map.js';
import Player from './players/Player.js';
import TileGenerator from './tiles/TileGenerator.js';
import Enemies from './enemies/Enemies.js';

/**
 * These class holds the main game logic and is the main class from which the game is ran.
 * @author Shanand Shrestha 
 */
export default class Game {
    /**
     * 
     * @param {string} canvasName name of the canvas in html element to fetch the canvas object. 
     */
    constructor(canvasName) {
        this.canvas = document.getElementById(canvasName);
        this.canvas.height = CONSTANTS.gameHeight;
        this.canvas.width = CONSTANTS.gameWidth;
        this.ctx = canvas.getContext('2d');
        this.map = new Map();
        this.player = new Player();
        this.tileGenerator = new TileGenerator();
        this.enemies = new Enemies();
        this.enemies.generateEnemies();
        this.enemyArr = this.enemies.getEnemies();
        this.cannonTurretArr = this.enemies.getCannonTurret();
    }
    draw() {
        this.map.draw(this.ctx);
        this.player.draw(this.ctx);
        this.tileGenerator.draw(this.ctx);
        this.enemyArr.forEach((enemy, index) => {
            if (enemy.dead) {
                this.enemyArr.splice(index, 1);
            }
            enemy.draw(this.ctx);
        });
        this.cannonTurretArr.forEach((cannon, index) => {
            if (cannon.dead) {
                this.cannonTurretArr.splice(index, 1);
            }
            this.cannonTurretArr.draw(this.ctx);
        });
        // console.log(this.enemyArr.length);
    }
    update() {
        this.map.update(this.player);
        this.player.update(this.enemyArr);
        this.enemyArr.forEach(enemy => enemy.update(this.player));
        this.cannonTurretArr.forEach(cannon => cannon.update(this.player));
        this.tileGenerator.update(this.player, this.enemyArr);
    }
    start() {
        this.ctx.clearRect(0, 0, CONSTANTS.gameWidth, CONSTANTS.gameHeight);
        this.update();
        this.draw();
        requestAnimationFrame(this.start.bind(this));
    }
}