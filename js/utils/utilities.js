import { BulletDirection, Direction, BulletOwner } from './Enums.js';

/**
 * These fucntion creates an html image element and return it
 * @param {string} source source consist of the path to the image asset.
 */
export const createImageElement = (source) => {
    const image = document.createElement('img');
    image.setAttribute('src', source);
    return image;
}

/**
 * These function is the helper function to get the X and Y position of the bullets
 * @param {Player or Enemy} object 
 */
export const setXandYForBullet = (object) => {
    let x = 0;
    let y = 0;
    let dx = 0;
    let dy = 0;

    let objectX = (object.bulletOwner == BulletOwner.PLAYER) ? object.destinationX : object.x;
    let objectY = (object.bulletOwner == BulletOwner.PLAYER) ? object.destinationY : object.y;

    switch (object.bulletDirection) {
        case BulletDirection.LEFT:
            y = objectY + (object.height / 4);
            x = objectX;
            dx = -5;
            dy = 0;
            break;
        case BulletDirection.LEFT_UP:
            x = objectX;
            y = objectY;
            dx = -5;
            dy = -5;
            break;
        case BulletDirection.UP:
            x = object.direction = Direction.LEFT ? -objectX : objectX + object.width;
            y = objectY;
            dx = 0;
            dy = -5;
            break;
        case BulletDirection.RIGHT_UP:
            x = objectX + object.width;
            y = objectY;
            dx = 5;
            dy = -5;
            break;
        case BulletDirection.RIGHT:
            y = objectY + (object.height / 4);
            x = objectX + object.width;
            dx = 5;
            break;
        case BulletDirection.DOWN_RIGHT:
            x = objectX + object.width;
            y = objectY + (object.height / 2);
            dx = 5;
            dy = 5;
            break;
        case BulletDirection.DOWN:
            x = object.direction = Direction.LEFT ? objectX : objectX + object.width;
            y = objectY + object.height;
            dx = 0;
            dy = 5;
            break;
        case BulletDirection.DOWN_LEFT:
            x = objectX;
            y = objectY + (object.height / 2);
            dx = -5;
            dy = 5;
            break;
        case BulletDirection.BOSS_LEFT:
            x = objectX;
            y = objectY;
            dx = -5;
            dy = 0;
    }
    return { x, y, dx, dy };
}