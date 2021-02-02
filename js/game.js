import * as CONSTANTS from './utils/constants.js'
import Map from './backgrounds/Map.js';
import Player from './players/Player.js';
import TileGenerator from './tiles/TileGenerator.js';
import Enemies from './enemies/Enemies.js';
import WallEnemy from './enemies/WallEnemy.js';

/**
 * These class holds the main game logic and is the main class from which the game is ran.
 * 
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
        this.wallEnemies = this.enemies.getWallEnemies();
    }

    draw() {
        this.map.draw(this.ctx);
        this.player.draw(this.ctx);
        this.tileGenerator.draw(this.ctx);
        /**
         * adding soldiers and snipers(rifleman)
         */
        this.enemyArr.forEach((enemy, index) => {
            if (enemy.dead) {
                this.enemyArr.splice(index, 1);
            }
            enemy.draw(this.ctx);
        });
        /**
         * adding wall cannons and wall turrets
         */
        this.wallEnemies.forEach((wallEnemy, i) => {
            if (wallEnemy.dead) {
                this.wallEnemies.splice(i, 1);
            }
            wallEnemy.draw(this.ctx);
        });
        // console.log(this.enemyArr.length);
    }

    update() {
        this.map.update(this.player);
        this.player.update(this.enemyArr);
        this.enemyArr.forEach(enemy => enemy.update(this.player));
        this.wallEnemies.forEach(wallEnemy => wallEnemy.update(this.player));
        this.tileGenerator.update(this.player, this.enemyArr);
    }

    start() {
        this.ctx.clearRect(0, 0, CONSTANTS.gameWidth, CONSTANTS.gameHeight);
        this.update();
        this.draw();
        requestAnimationFrame(this.start.bind(this));
    }
}