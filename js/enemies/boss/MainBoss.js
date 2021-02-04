import { bossData } from '../enemyData.js';
import * as CONSTANT from '../../utils/constants.js';
import { createImageElement } from '../../utils/utilities.js';
import GuardCannon from './GuardCannon.js';
import GateLocker from './GateLocker.js';

/**
 * These class is for the the main boss of the game
 */
export default class MainBoss {
    constructor() {
        this.x = 6432;
        this.y = 110;
        this.height = bossData.body.height;
        this.width = bossData.body.width;
        this.sourceX = bossData.body.xPos;
        this.sourceY = bossData.body.yPos;
        this.src = "./assets/MainBoss.gif";
        this.bossImg = createImageElement(this.src);
        this.guardCannons = [];
        this.guardCannons.push(new GuardCannon(6432, 275, bossData.wallCannonLeft));
        this.guardCannons.push(new GuardCannon(6480, 275, bossData.wallCannonRight));
        this.gateLocker = new GateLocker(6448, 340, bossData.gate);
        this.dx = 0;
        this.dead = false;
        this.deadCount = 0;
    }
    draw(ctx) {
        if (!this.dead) {
            ctx.drawImage(this.bossImg, this.sourceX, this.sourceY, this.width, this.height,
                this.x, this.y, this.width, this.height);
            this.guardCannons.forEach((cannon, index) => {
                if (cannon.dead) {
                    this.guardCannons.splice(index, 1);
                    this.deadCount++;
                }
                cannon.draw(ctx);
            });

            if (!this.gateLocker.dead) this.gateLocker.draw(ctx);

            this.guardCannons.forEach(cannon => {
                cannon.bulletArr.forEach(bullet => {
                    bullet.draw(ctx);
                })
            });
        }
    }
    update(player) {
        this.dx = 0;
        this.guardCannons.forEach(cannon => {
            cannon.update(player);
        });

        if (!this.gateLocker.dead) this.gateLocker.update(player);

        this.guardCannons.forEach(cannon => {
            cannon.bulletArr.forEach(bullet => {
                bullet.update(cannon);
            })
        });
        if (this.gateLocker.dead) {
            this.deadCount++;
        }
        if (this.deadCount === 3) {
            this.dead = true;
        }

        if (player.camera) {
            this.dx = -2.5;
        }
        this.x += this.dx;
    }
}