import TileFactory from './TileFactory.js';

export default class BasicTile extends TileFactory {
    constructor(x, y, height, width) {
        super(x, y, height, width);
        this.dx = 0;
    }
    update(player, soldierArr, snipers) {
        this.dx = 0;
        // if (!player.fall) {
        if (player.destinationX + player.width > this.x && player.destinationX < this.x + this.width &&
            player.destinationY + player.height > this.y && player.destinationY < this.y + this.height) {

            player.onGround = true;
            player.onWater = false;
            player.destinationY = this.y - player.height;
        }
        // }
        soldierArr.forEach(soldier => {
            if (soldier.x + soldier.width > this.x && soldier.x < this.x + this.width &&
                soldier.y + soldier.height > this.y && soldier.y < this.y + this.height) {

                soldier.onGround = true;
                soldier.dead = false;
                soldier.y = this.y - soldier.height;
            }
        });

        snipers.forEach(sniper => {
            if (sniper.x + sniper.width > this.x && sniper.x < this.x + this.width &&
                sniper.y + sniper.height > this.y && sniper.y < this.y + this.height) {

                sniper.onGround = true;
                // sniper.dead = false;
                sniper.y = this.y - sniper.height;
            }
        });

        player.pillboxArr.forEach(box => {
            if (box.destinationX + box.width > this.x && box.destinationX < this.x + this.width &&
                box.destinationY + box.height > this.y && box.destinationY < this.y + this.height) {

                box.onGround = true;
                box.onWater = false;
                box.y = this.y - box.height;
            }
        })

        if (player.camera) {
            this.dx = -2.5;
        }
        this.x += this.dx;
    }
}

















































































