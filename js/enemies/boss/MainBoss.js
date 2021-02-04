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
        this.x = 6434;
        this.y = CONSTANT.gameHeight - bossData.body.height;
        this.height = bossData.body.height;
        this.width = bossData.body.width;
        this.sourceX = bossData.body.xPos;
        this.sourceY = bossData.body.yPos;
        this.bossImg = createImageElement("./assets/boss.gif");
        this.guardCannons = [];
        this.guardCannons.push(new GuardCannon(20, 20, bossData.wallCannonLeft));
        this.guardCannons.push(new GuardCannon(80, 80, bossData.wallCannonRight));
        this.gateLocker = new GateLocker(0, 0, bossData.gate);
    }
    draw(ctx) {
        ctx.drawImage(this.bossImg, this.sourceX, this.sourceY, this.width, this.height,
            this.x, this.y, this.width, this.height);
        this.guardCannons.forEach(cannon => {
            cannon.draw(ctx);
        });
        this.gateLocker.draw(ctx);
    }
    update(player) {
        this.guardCannons.forEach(cannon => {
            cannon.update(player);
        });
        this.gateLocker.update(player);
    }
}