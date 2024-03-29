import * as CONSTANTS from './utils/constants.js'
import Map from './backgrounds/Map.js';
import Player from './players/Player.js';
import TileGenerator from './tiles/TileGenerator.js';
import Enemies from './enemies/Enemies.js';
import { GameState } from './utils/Enums.js';
import StartScreen from './backgrounds/StartScreen.js';
import GameOver from './backgrounds/GameOver.js';
import Life from './players/Life.js';
import MainBoss from './enemies/boss/MainBoss.js';

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
        this.init();
    }

    init() {
        this.canvas.height = CONSTANTS.gameHeight;
        this.canvas.width = CONSTANTS.gameWidth;
        this.ctx = canvas.getContext('2d');
        this.map = new Map();
        this.player = new Player();
        this.tileGenerator = new TileGenerator();
        this.enemies = new Enemies();
        this.enemies.generateEnemies();
        this.enemyArr = this.enemies.getEnemies();
        this.snipers = this.enemies.getRifleMen();
        this.wallEnemies = this.enemies.getWallEnemies();
        this.mainBoss = new MainBoss();
        this.startScreen = new StartScreen();
        this.gameOver = new GameOver("GAME OVER");
        this.gameFinish = new GameOver("YOU WON");
        this.gameState = GameState.INTRO;
        this.life = new Life();
        // this.pillbox = new PillBoxSensor(0, 0);

        document.addEventListener('DOMContentLoaded', () => {
            let theme = new Audio('./sounds/theme.mp3');
            theme.autoplay = true;
            theme.play();
        });

        document.addEventListener('keyup', (evt) => {
            if (evt.keyCode === 32 && this.gameState != GameState.IN_GAME) {
                if (this.gameState == GameState.INTRO) this.gameState = GameState.IN_GAME;
                if (this.gameState == GameState.GAME_OVER || this.gameState == GameState.FINISH) location.reload();
            }

        });
    }

    draw() {
        this.map.draw(this.ctx);
        this.tileGenerator.draw(this.ctx);
        this.player.draw(this.ctx);
        this.life.draw(this.ctx);
        this.mainBoss.draw(this.ctx);
        /**
         * adding soldiers
         */
        this.enemyArr.forEach((enemy, index) => {
            if (enemy.blast) {
                // enemy.blast.draw(this.ctx);
                this.enemyArr.splice(index, 1);
            }
            enemy.draw(this.ctx);
        });
        /**
         * adding snipers(riflemen)
         */
        this.snipers.forEach((enemy, index) => {
            if (enemy.blast) {
                // enemy.blast.draw(this.ctx);
                this.snipers.splice(index, 1);
            }
            enemy.draw(this.ctx);
        });
        /**
         * adding wall cannons and wall turrets
         */
        this.wallEnemies.forEach((wallEnemy, i) => {
            if (wallEnemy.dead) {
                // wallEnemy.blast.draw(this.ctx);
                this.wallEnemies.splice(i, 1);
            }
            wallEnemy.draw(this.ctx);
        });
        /**
         * Drawing bullets from player
         */
        this.player.bullets.forEach((bullet, index) => {
            if (bullet.dead) this.player.bullets.splice(index, 1);
            bullet.draw(this.ctx);
        });
        /**
         * Drawing bullet from sniper
         */
        this.snipers.forEach(enemy => {
            enemy.bulletArr.forEach((bullet, i) => {
                if (bullet.dead) enemy.bulletArr.splice(i, 1);
                bullet.draw(this.ctx);
            });
        });
        /**
         * Drawing bullets for cannon and wall turrets
         */
        this.wallEnemies.forEach(enemy => {
            enemy.bulletArr.forEach((bullet, i) => {
                if (bullet.dead) enemy.bulletArr.splice(i, 1);
                bullet.draw(this.ctx);
            });
        });

        this.player.pillboxArr.forEach((pillbox, index) => {
            if (this.end) {
                this.pillboxArr.splice(index, 1);
            }
            pillbox.draw(this.ctx);
        });

        // this.pillbox.draw(this.ctx);

    }

    update() {
        this.map.update(this.player);
        this.player.update(this.enemyArr, this.snipers, this.wallEnemies, this.mainBoss, this.life);
        this.life.update();
        this.mainBoss.update(this.player);
        this.enemyArr.forEach(enemy => enemy.update(this.player));
        this.snipers.forEach(sniper => sniper.update(this.player, this.ctx));
        this.wallEnemies.forEach(wallEnemy => wallEnemy.update(this.player));
        this.tileGenerator.update(this.player, this.enemyArr, this.snipers);
        this.player.bullets.forEach(bullet => bullet.update(this.player));
        this.snipers.forEach(enemy => {
            enemy.bulletArr.forEach(bullet => bullet.update(enemy));
        });
        this.wallEnemies.forEach(enemy => {
            enemy.bulletArr.forEach(bullet => bullet.update(enemy));
        });
        this.player.pillboxArr.forEach(pillbox => {
            pillbox.update(this.player, this.life);
        });
        // this.pillbox.update(this.player);

        if (this.life.gameOver) this.gameState = GameState.GAME_OVER;
        if (this.mainBoss.dead) this.gameState = GameState.FINISH;
    }

    start() {
        this.ctx.clearRect(0, 0, CONSTANTS.gameWidth, CONSTANTS.gameHeight);
        switch (this.gameState) {
            case GameState.INTRO:
                this.startScreen.draw(this.ctx);
                break;
            case GameState.BEGINING:
                this.init();
                break;
            case GameState.IN_GAME:
                this.update();
                this.draw();
                break;
            case GameState.DIED:
                this.reset();
                this.gameState = GameState.BEGINING;
                break;
            case GameState.GAME_OVER:
                this.gameOver.draw(this.ctx, this.player);
                break;
            case GameState.FINISH:
                this.gameFinish.draw(this.ctx, this.player);
                break;
        }
        // this.update();
        // this.draw();
        requestAnimationFrame(this.start.bind(this));
    }

    reset() {
        this.player.reset();
        this.tileGenerator.reset();
        this.map.reset();
        this.enemies.reset();
    }
}
