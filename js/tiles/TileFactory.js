/**
 * These class is the parent class for all tiles class that extends from these class
 */
export default class TileFactory {
    /**
     * 
     * @param {number} x the x-coordinate or horizontal position 
     * @param {number} y the y-coordinate or the vertical position
     * @param {number} height the height of the tile
     * @param {number} width  the width of the tile
     */
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    draw(ctx) {
        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}