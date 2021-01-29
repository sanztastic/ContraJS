import { createImageElement } from '../utils/utilities.js';
import { playerData } from './playerData.js';
import * as CONSTANTS from '../utils/constants.js';

/**
 * These class does the logic for the player on the game from drawing and updating the player
 * to it's movement and all other stuff that the player does in the game.
 * 
 * @author Shanand Shrestha
 */
class Player {
    constructor() {
        this.frameArr = playerData.jump; //the frames array for the player movement animation
        this.sourceX = 0;
        this.sourceY = 0;
        this.destinationX = 0; //x position of the player
        this.destinationY = 0; //y position of the player
        this.height = 0;
        this.width = 0;
        this.src = './assets/character.png';
        this.playerImg = createImageElement(this.src);
        this.gravity = 0.10;
        this.jump = -30;
        this.dx = 2; // horizontal(x) velocity of a player 
        this.dy = 0; //vertical(y) velocity of a player
        this.onGround = false; //to check whether player is in ground 
        this.onWater = false;  //to check whether player is in ground
        this.holdLeft = false;
        this.holdRight = false;
        this.jumping = false;
        this.isProne = false;
        this.camera = false;
        this.fall = false; //to make the player fall one tile down
        this.frame = 0;
        this.frames = 0;
        this.period = 8; //hold time for player animation

        document.addEventListener('keydown', this.keyPressed.bind(this));
        document.addEventListener('keyup', this.keyReleased.bind(this));
    }
    keyPressed(evt) {
        // console.log(this);
        switch (evt.keyCode) {

            case 37: //left arrow
                this.holdLeft = true;
                break;

            case 38: //up arrow
                break;

            case 39: //right arrow
                this.holdRight = true;
                break;

            case 40: // down arrow
                this.isProne = true;
                // this.holdLeft = false;
                // this.holdRight = false;
                // this.jumping = false;
                this.frameArr = playerData.prone;
                this.dx = 0;
                break;

            case 88: //x for jumping
                this.dy = this.jump;
                this.jumping = true;
                this.onGround = false;
                this.frameArr = playerData.jump;
                break;

            case 90: //z for proning

                break;
        }
    }
    keyReleased(evt) {
        switch (evt.keyCode) {

            case 37: //left arrow
                this.holdLeft = false;
                this.frame = 0;
                break;

            case 38: //up arrow
                //up arroww stufff 
                break;

            case 39: //right arrow
                this.holdRight = false;
                this.frameArr = playerData.default;
                this.frame = 0;
                break;

            case 40: // down arrow is for proning
                this.isProne = false;
                this.frameArr = playerData.default;
                this.frame = 0;
                break;

            case 88: //x for jumping
                if (this.dy < -3) {
                    this.dy = 4;
                }
                break;

            case 90: //z for shooting
                //shooting stufff 
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
        // }
        // ctx.fillStyle = "rgba(0,0,0,0.5)";
        // ctx.fillRect(this.destinationX, this.destinationY, this.width, this.height);
    }
    update() {
        if (this.holdLeft && this.onGround) {
            this.dx = -2.5;
        }
        if (this.holdRight && this.onGround) {
            //the number 3 is the no. of frames available for moving right
            if (!this.jumping) {
                this.frameArr = playerData.right;
            }
            this.dx = 2.5;
        }
        /**
         * what happens when player is in the ground
         */
        if ((this.onGround)) {
            this.jumping = false;
            if (!(this.holdRight || this.holdLeft || this.isProne)) {
                this.frameArr = playerData.default;
                this.dx *= 0.8;
                this.frame = 0;
            }
        } else {
            this.dy += this.gravity;
        }
        /**
         * stuff to do when the player on the water
         */
        if (this.onWater) {

        }

        if (this.destinationX <= 0) {
            this.destinationX = 0;
        }
        if (this.destinationX + this.width > (CONSTANTS.gameWidth / 2)) {
            this.destinationX = ((CONSTANTS.gameWidth / 2) - this.width) - 2;
            this.camera = true;
        } else {
            this.camera = false;
        }
        this.destinationX += this.dx;
        this.destinationY += this.dy;
    }
}

export default Player;