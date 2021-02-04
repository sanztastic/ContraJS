import { createImageElement } from "../../utils/utilities.js";

/**
 * These are the the guard cannon that are placed in the body of the gate(main boss)
 * to defend the gate
 * 
 */
export default class GuardCannon {
    constructor(x, y, positionArr) {
        this.x = x;
        this.y = y;
        this.height = positionArr.height;
        this.width = positionArr.width;
        this.sourceX = positionArr.xPos;
        this.sourceY = positionArr.yPos;
        this.img = createImageElement("./assets/boss.gif");
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.sourceX, this.sourceY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    update(player) {

    }
}