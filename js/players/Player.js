import { createImageElement } from '../utils/utilities.js';
import { playerData } from './playerData.js';
import * as CONSTANTS from '../utils/constants.js';
import { Direction, Key, Gun } from '../utils/Enums.js';
import Bullet from '../ammunition/Bullets.js';

/**
 * These class does the logic for the player on the game from drawing and updating the player
 * to it's movement and all other stuff that the player does in the game.
 * 
 * @author Shanand Shrestha
 */
class Player {
    constructor() {
        this.frameArr = playerData.jumpRight; //the frames array for the player movement animation
        this.sourceX = 0;
        this.sourceY = 0;
        this.destinationX = 0; //x position of the player
        this.destinationY = 0; //y position of the player
        this.height = 0;
        this.width = 0;
        this.src = './assets/contra.gif';
        this.playerImg = createImageElement(this.src);
        this.gravity = 0.2;
        this.jump = -30;
        this.dx = 2; // horizontal(x) velocity of a player 
        this.dy = 0; //vertical(y) velocity of a player
        this.onGround = false; //to check whether player is in ground 
        this.onWater = false;  //to check whether player is in water
        this.jumping = false;
        this.isProne = false;
        this.camera = false; //to check whether the camera is moving or not wit the player
        this.fall = false; //to make the player fall one tile down
        this.frame = 0;
        this.frames = 0;
        this.period = 8; //hold time for player animation
        this.drop = false;
        this.direction = Direction.RIGHT; //to check which direction the player is facing curently
        this.bullets = [];
        this.gun = Gun.DEFAULT; // to check which gun is the player holding
        this.dead = false; // check if the player is dead or not

        document.addEventListener('keydown', this.keyPressed.bind(this));
        document.addEventListener('keyup', this.keyReleased.bind(this));
    }
    keyPressed(evt) {
        // console.log(this);
        switch (evt.keyCode) {

            case 37: //left arrow
                Key.LEFT = true;
                this.dx = -2.5;
                this.direction = Direction.LEFT;
                break;

            case 38: //up arrow
                Key.UP = true;
                if (this.onGround) {
                    this.frameArr = this.direction == Direction.RIGHT ? playerData.pointUpRightDir : playerData.pointUpLeftDir;
                } else if (this.onWater) {
                    this.frameArr = this.direction == Direction.RIGHT ? playerData.water.pointUpRightDir : playerData.water.pointUpLeftDir;
                }
                this.dx = 0;
                break;

            case 39: //right arrow
                Key.RIGHT = true;
                this.dx = 2.5;
                this.direction = Direction.RIGHT;
                break;

            case 40: // down arrow
                this.isProne = true;
                // this.holdLeft = false;
                // this.holdRight = false;
                // this.jumping = false;
                Key.DOWN = true;
                this.dx = 0;
                this.frameArr = this.onGround ? ((this.direction == Direction.RIGHT) ? playerData.proneRight : playerData.proneLeft) : playerData.water.prone;
                break;

            case 88: //x for jumping
                Key.X = true;
                if (!this.onWater && this.onGround) {
                    this.dy = this.jump;
                    this.jumping = true;
                    this.onGround = false;
                    this.frameArr = this.frameArr = this.direction == Direction.RIGHT ? playerData.jumpRight : playerData.jumpLeft;
                }
                break;

            case 90: //z for shooting
                Key.Z = true;
                this.bullets.push(new Bullet(this.destinationX, this.destinationY, 6, 6));
                break;
        }
    }
    keyReleased(evt) {
        switch (evt.keyCode) {

            case 37: //left arrow
                Key.LEFT = false;
                this.frame = 0;
                break;

            case 38: //up arrow
                //up arroww stufff 
                Key.UP = false;
                this.frame = 0;
                break;

            case 39: //right arrow
                Key.RIGHT = false;
                // this.frameArr = playerData.default;
                this.frame = 0;
                break;

            case 40: // down arrow is for proning
                this.isProne = false;
                Key.DOWN = false;
                // this.frameArr = this.onGround ? playerData.default : playerData.water.default;
                this.frame = 0;
                break;

            case 88: //x for jumping
                Key.X = false;
                if (!this.onWater) {
                    if (this.dy < -3) {
                        this.dy = 1;
                    }
                }
                break;

            case 90: //z for shooting
                //shooting stufff
                Key.Z = false;
                break;
        }
    }
    draw(ctx) {
        // this.playerImg.onload = () => {
        this.sourceX = this.frameArr[this.frame % this.frameArr.length].xPos;
        this.sourceY = this.frameArr[this.frame % this.frameArr.length].yPos;
        this.height = this.frameArr[this.frame % this.frameArr.length].height;
        this.width = this.frameArr[this.frame % this.frameArr.length].width;

        ctx.drawImage(this.playerImg, this.sourceX, this.sourceY, this.width, this.height,
            this.destinationX, this.destinationY, this.width, this.height);

        this.frame += this.frames % this.period === 0 ? 1 : 0;
        this.frames++;

        if (this.onWater) {
            if (this.frame === playerData.water.drop.length) {
                this.drop = true;
            }
        }
        if (this.dead) {
            if (this.frame === ((this.direction == Direction.RIGHT) ? playerData.deadRight.length : playerData.deadLeft.length)) {
                this.dead = false;
                // this.onGround = true;
                this.destinationX = 0 + this.dx;
                this.destinationY = 0;
            }
        }
        // }
        // ctx.fillStyle = "rgba(0,0,0,0.5)";
        // ctx.fillRect(this.destinationX, this.destinationY, this.width, this.height);
    }
    update(soldierArr) {
        if (Key.LEFT && !this.dead) {
            if (!this.jumping) {
                if (!(Key.UP || Key.DOWN || Key.Z)) {
                    this.frameArr = this.onWater ? playerData.water.left : playerData.left;
                } else if (Key.UP) {
                    this.frameArr = this.onWater ? playerData.water.upLeft : playerData.upLeft;
                } else if (Key.DOWN && !this.onWater) {
                    this.prone = false;
                    this.frameArr = playerData.downLeft;
                } else if (Key.Z) {
                    this.frameArr = this.onWater ? playerData.water.shootLeft : playerData.shootLeft;
                }
            }
        }

        if (Key.RIGHT && !this.dead) {
            if (!this.jumping) {
                if (!(Key.UP || Key.DOWN || Key.Z)) {
                    this.frameArr = this.onWater ? playerData.water.right : playerData.right;
                } else if (Key.UP) {
                    this.frameArr = this.onWater ? playerData.water.upRight : playerData.upRight;
                } else if (Key.DOWN && !this.onWater) {
                    this.prone = false;
                    this.frameArr = playerData.downRight;
                } else if (Key.Z) {
                    this.frameArr = this.onWater ? playerData.water.shootRight : playerData.shootRight;
                }
            }
        }
        /**
         * what happens when player is in the ground
         */
        if ((this.onGround) && !this.dead) {
            this.jumping = false;
            this.drop = false;
            this.onWater = false;
            if (!(Key.RIGHT || Key.LEFT || this.isProne || Key.UP)) {
                this.frameArr = (this.direction == Direction.RIGHT) ? playerData.defaultRight : playerData.defaultLeft;
                this.dx *= 0.8;
                this.frame = 0;
            }
        }
        /**
         * stuff to do when the player on the water
         */
        else if (this.onWater && !this.dead) {
            if (!(Key.RIGHT || Key.LEFT || this.isProne || Key.UP) && (this.drop)) {
                this.frameArr = (this.direction == Direction.RIGHT) ? playerData.water.defaultRight : playerData.water.defaultLeft;
                this.dx *= 0.8;
                this.frame = 0;
            }
        }
        else {
            this.dy += this.gravity;
        }

        if (this.destinationX <= 0) {
            this.destinationX = 0;
        }
        if (this.destinationY + this.height > CONSTANTS.gameHeight) {

            this.dead = true;
            this.destinationY = CONSTANTS.gameHeight - this.height;
            this.onGround = false;
            this.onWater = false;
        }
        if (!this.dead) {
            soldierArr.forEach(soldier => {
                if ((soldier.x <= this.destinationX + this.width && soldier.x + soldier.width >= this.destinationX + this.width)
                    && (soldier.y + soldier.height >= this.destinationY + this.height && soldier.y <= this.destinationY + this.height)) {
                    console.log(true);
                    this.dead = true;
                    this.frameArr = this.direction == Direction.RIGHT ? playerData.deadRight : playerData.deadLeft;
                }
            });
        }
        // if (this.destinationY <= 50) {
        //     this.destinationY = 0;
        // }
        if (this.destinationX + this.width > (CONSTANTS.gameWidth / 2)) {
            this.destinationX = ((CONSTANTS.gameWidth / 2) - this.width) - 2;
            this.camera = true;
        } else {
            this.camera = false;
        }
        this.destinationX += this.dx;
        this.destinationY += this.dy;
    }
    _collideWithEnemies(soldierArr) {

    }
}

export default Player;