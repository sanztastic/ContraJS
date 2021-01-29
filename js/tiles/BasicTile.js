import TileFactory from './TileFactory.js';

export default class BasicTile extends TileFactory {
    constructor(x, y, height, width) {
        super(x, y, height, width);
        this.dx = 0;
    }
    update(player) {
        this.dx = 0;
        if (!player.fall) {
            if (player.destinationX + player.width > this.x && player.destinationX < this.x + this.width &&
                player.destinationY + player.height > this.y && player.destinationY < this.y + this.height) {

                player.onGround = true;
                player.destinationY = this.y - player.height;
            }
        }
        if (player.camera) {
            this.dx = -2;
        }
        this.x += this.dx;
    }
}

















































































