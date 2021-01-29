/**
 * the object that contains the object that contains the array of objects which consist of the player
 * sprite images for animation based on the location and the activities of a player.
 */
export const playerData = {
    default: [{
        xPos: 0,
        yPos: 16,
        width: 48,
        height: 68
    },
    {
        xPos: 48,
        yPos: 16,
        width: 45,
        height: 68
    }],
    right: [{
        xPos: 0,
        yPos: 86,
        width: 35,
        height: 70
    },
    {
        xPos: 35,
        yPos: 86,
        width: 40,
        height: 70
    },
    {
        xPos: 75,
        yPos: 86,
        width: 42,
        height: 70
    },
    {
        xPos: 117,
        yPos: 86,
        width: 35,
        height: 70
    },
    {
        xPos: 152,
        yPos: 86,
        width: 38,
        height: 70
    },
    {
        xPos: 192,
        yPos: 86,
        width: 40,
        height: 70
    }
    ],
    left: {

    },
    prone: [{
        xPos: 158,
        yPos: 50,
        width: 66,
        height: 35
    },
    {
        xPos: 224,
        yPos: 50,
        width: 66,
        height: 35
    }
    ],
    jump: [{
        xPos: 232,
        yPos: 104,
        width: 40,
        height: 40
    },
    {
        xPos: 272,
        yPos: 104,
        width: 40,
        height: 40
    },
    {
        xPos: 312,
        yPos: 104,
        width: 40,
        height: 40
    },
    {
        xPos: 352,
        yPos: 104,
        width: 40,
        height: 40
    }],
    dead: [{

    }],
    water: {
        default: [{
            xPos: 352,
            yPos: 104,
            width: 40,
            height: 40
        }],
        left: [

        ],
        right: [
            {
                xPos: 352,
                yPos: 104,
                width: 40,
                height: 40
            }
        ],
        prone: [

        ],
    }
}