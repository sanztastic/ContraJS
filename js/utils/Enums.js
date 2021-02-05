/**
 * Enum to check which direction the player is facing
 */
export const Direction = {
    LEFT: 0,
    RIGHT: 1
};

/**
 * Enum to check which keys had been pressed 
 */
export const Key = {
    UP: false,
    DOWN: false,
    LEFT: false,
    RIGHT: false,
    X: false,
    Z: false
};

/**
 *  Enum to check which gun has been selected
 */
export const Gun = {
    DEFAULT: 0,
    MACHINE_GUN: 1,
    SPREAD_GUN: 2
};

/**
 * Enum for the direction of the Bullet
 */
export const BulletDirection = {
    LEFT: 0,
    LEFT_UP: 1,
    UP: 2,
    RIGHT_UP: 3,
    RIGHT: 4,
    DOWN_RIGHT: 5,
    DOWN: 6,
    DOWN_LEFT: 7,
    BOSS_LEFT: 8
};

/**
 * Enum for who shot the bullet
 */
export const BulletOwner = {
    PLAYER: 0,
    ENEMY: 1,
    BOSS: 2
};

/**
 * Enum to keep track of game state
 */
export const GameState = {
    INTRO: 0,
    BEGINING: 1,
    IN_GAME: 2,
    GAME_OVER: 3,
    FINISH: 4
};