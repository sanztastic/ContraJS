import { createImageElement } from '../utils/utilities.js';
import { blastData } from './bulletData.js';
/**
 * These class is for showing blast animation when enemy dies or is being shooted at
 */
export default class Blast {
    consructor(x, y) {
        this.x = x;
        this.y = y;
        this.src = "./assets/ammunition.gif";
        this.blastImg = createImageElement(this.src);
    }
}