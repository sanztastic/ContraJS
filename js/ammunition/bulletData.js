/**
 * contains image data of different bullets in sprite for different weapons including player and enemy
 */
export const bulletData = {
    src: "./assets/ammunition.gif",
    default: {
        xPos: 510,
        yPos: 1002,
        width: 6,
        height: 6
    },
    other: {
        xPos: 516,
        yPos: 974,
        width: 12,
        height: 12
    }
};

export const blastData = {
    blast: [
        {
            xPos: 318,
            yPos: 1024,
            width: 60,
            height: 60
        },
        {
            xPos: 384,
            yPos: 1032,
            width: 46,
            height: 55
        },
        {
            xPos: 438,
            yPos: 1050,
            width: 30,
            height: 36
        }
    ],
    hitShot: [
        {
            xPos: 472,
            yPos: 1038,
            width: 49,
            height: 49
        },
        {
            xPos: 524,
            yPos: 1030,
            width: 57,
            height: 57
        },
        {
            xPos: 586,
            yPos: 1020,
            width: 65,
            height: 65
        }
    ]
}