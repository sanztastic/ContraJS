/**
 * the object that contains the object that contains the array of objects which consist of the player
 * sprite images for animation based on the location and the activities of a player.
 */
export const playerData = {
    defaultRight: [{
        xPos: 290,
        yPos: 35,
        width: 48,
        height: 69
    },
    {
        xPos: 348,
        yPos: 37,
        width: 48,
        height: 67
    }],
    defaultLeft: [{
        xPos: 222,
        yPos: 35,
        width: 48,
        height: 69
    },
    {
        xPos: 348,
        yPos: 37,
        width: 48,
        height: 67
    }],
    right: [{
        xPos: 290,
        yPos: 268,
        width: 40,
        height: 68
    },
    {
        xPos: 338,
        yPos: 268,
        width: 36,
        height: 68
    },
    {
        xPos: 380,
        yPos: 274,
        width: 44,
        height: 62
    },
    {
        xPos: 434,
        yPos: 264,
        width: 42,
        height: 72
    },
    {
        xPos: 482,
        yPos: 264,
        width: 36,
        height: 72
    },
    {
        xPos: 380,
        yPos: 274,
        width: 36,
        height: 68
    }
    ],
    left: [{
        xPos: 230,
        yPos: 268,
        width: 40,
        height: 68
    },
    {
        xPos: 186,
        yPos: 268,
        width: 36,
        height: 68
    },
    {
        xPos: 136,
        yPos: 274,
        width: 44,
        height: 62
    },
    {
        xPos: 84,
        yPos: 264,
        width: 42,
        height: 72
    },
    {
        xPos: 42,
        yPos: 264,
        width: 36,
        height: 72
    },
    {
        xPos: 136,
        yPos: 274,
        width: 36,
        height: 68
    }],
    pointUpLeftDir: [
        {
            xPos: 86,
            yPos: 14,
            width: 28,
            height: 90
        },
        {
            xPos: 86,
            yPos: 12,
            width: 28,
            height: 92
        }
    ],
    pointUpRightDir: [
        {
            xPos: 406,
            yPos: 14,
            width: 28,
            height: 90
        },
        {
            xPos: 446,
            yPos: 12,
            width: 28,
            height: 92
        }
    ],
    proneRight: [{
        xPos: 290,
        yPos: 348,
        width: 68,
        height: 35
    }
    ],
    proneLeft: [{
        xPos: 202,
        yPos: 348,
        width: 68,
        height: 35
    }
    ],
    jumpRight: [
        {
            xPos: 366,
            yPos: 350,
            width: 40,
            height: 32
        },
        {
            xPos: 412,
            yPos: 342,
            width: 32,
            height: 40
        },
        {
            xPos: 450,
            yPos: 350,
            width: 40,
            height: 32
        },
        {
            xPos: 498,
            yPos: 342,
            width: 32,
            height: 40
        },
    ],
    jumpLeft: [
        {
            xPos: 154,
            yPos: 350,
            width: 40,
            height: 32
        },
        {
            xPos: 116,
            yPos: 342,
            width: 32,
            height: 40
        },
        {
            xPos: 70,
            yPos: 350,
            width: 40,
            height: 32
        },
        {
            xPos: 30,
            yPos: 342,
            width: 32,
            height: 40
        },
    ],
    dead: [{

    }],
    water: {
        drop: [{
            xPos: 0,
            yPos: 444,
            width: 35,
            height: 33
        },
        {
            xPos: 35,
            yPos: 452,
            width: 35,
            height: 16
        },
        {
            xPos: 70,
            yPos: 450,
            width: 35,
            height: 16
        }],
        defaultRight: [
            {
                xPos: 300,
                yPos: 436,
                width: 32,
                height: 30
            }
        ],
        defaultLeft: [
            {
                xPos: 228,
                yPos: 436,
                width: 32,
                height: 30
            }
        ],
        left: [
            {
                xPos: 228,
                yPos: 436,
                width: 32,
                height: 30
            }

        ],
        right: [
            {
                xPos: 300,
                yPos: 436,
                width: 32,
                height: 30
            }
        ],
        prone: [
            {
                xPos: 35,
                yPos: 452,
                width: 35,
                height: 16
            },
            {
                xPos: 70,
                yPos: 450,
                width: 35,
                height: 16
            }
        ],
    }
}