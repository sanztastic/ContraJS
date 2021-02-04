export const enemyData = {
    soldier: {
        generateAt: {
            xPos: [800, 2500]
        },
        left: [
            {
                xPos: 270,
                yPos: 94,
                width: 34,
                height: 64
            },
            {
                xPos: 228,
                yPos: 92,
                width: 36,
                height: 66
            },
            {
                xPos: 186,
                yPos: 96,
                width: 34,
                height: 62
            },
            {
                xPos: 144,
                yPos: 94,
                width: 32,
                height: 64
            },
            {
                xPos: 102,
                yPos: 92,
                width: 36,
                height: 66
            },
            {
                xPos: 56,
                yPos: 102,
                width: 36,
                height: 56
            }
        ]
    },
    rifleMan: {
        generateAt: {
            xPos: [620, 1230, 2500, 2700, 3000, 4710],
            yPos: [320, 330, 120, 80, 80, 200]
        },
        left: [
            {
                xPos: 204,
                yPos: 24,
                width: 48,
                height: 62
            },
            {
                xPos: 152,
                yPos: 22,
                width: 48,
                height: 64
            }
        ],
        right: [
            {
                xPos: 360,
                yPos: 24,
                width: 48,
                height: 62
            },
            {
                xPos: 412,
                yPos: 22,
                width: 48,
                height: 64
            }
        ],
        upLeft: [
            {
                xPos: 112,
                yPos: 10,
                width: 36,
                height: 76
            },
            {
                xPos: 70,
                yPos: 8,
                width: 36,
                height: 78
            }
        ],
        upRight: [
            {
                xPos: 464,
                yPos: 10,
                width: 36,
                height: 76
            },
            {
                xPos: 506,
                yPos: 8,
                width: 36,
                height: 78
            }
        ],
        downLeft: [
            {
                xPos: 256,
                yPos: 24,
                width: 48,
                height: 62
            }
        ],
        downRight: [
            {
                xPos: 308,
                yPos: 24,
                width: 48,
                height: 62
            }
        ]
    },
    cannon: {
        generateAt: {
            xPos: [4095, 4548, 5505],
            yPos: [290, 165, 226]
        },
        show: [
            {
                xPos: 148,
                yPos: 416,
                width: 65,
                height: 65
            },
            {
                xPos: 216,
                yPos: 416,
                width: 65,
                height: 65
            },
            {
                xPos: 282,
                yPos: 416,
                width: 65,
                height: 65
            }
        ],
        left: [
            {
                xPos: 282,
                yPos: 416,
                width: 65,
                height: 65
            },
            {
                xPos: 282,
                yPos: 484,
                width: 65,
                height: 65
            },
            {
                xPos: 282,
                yPos: 552,
                width: 65,
                height: 65
            }
        ],
        farLeftUp: [
            {
                xPos: 350,
                yPos: 416,
                width: 65,
                height: 65
            },
            {
                xPos: 350,
                yPos: 484,
                width: 65,
                height: 65
            },
            {
                xPos: 350,
                yPos: 552,
                width: 65,
                height: 65
            }
        ],
        LeftUp: [
            {
                xPos: 418,
                yPos: 416,
                width: 65,
                height: 65
            },
            {
                xPos: 418,
                yPos: 484,
                width: 65,
                height: 65
            },
            {
                xPos: 418,
                yPos: 552,
                width: 65,
                height: 65
            }
        ]
    },
    wallTurret: {
        generateAt: {
            xPos: [2498, 3265, 3650, 5950, 6207],
            yPos: [290, 225, 225, 352, 352]
        },
        default: [
            {
                xPos: 78,
                yPos: 212,
                width: 64,
                height: 64
            }
        ],
        show: [
            {
                xPos: 78,
                yPos: 212,
                width: 64,
                height: 64
            },
            {
                xPos: 78,
                yPos: 144,
                width: 64,
                height: 64
            }
        ],
        left: [
            {
                xPos: 10,
                yPos: 144,
                width: 64,
                height: 64
            },
            {
                xPos: 10,
                yPos: 212,
                width: 64,
                height: 64
            }
        ],
        right: [
            {
                xPos: 146,
                yPos: 144,
                width: 64,
                height: 64
            },
            {
                xPos: 146,
                yPos: 212,
                width: 64,
                height: 64
            }
        ],
        up: [
            {
                xPos: 78,
                yPos: 76,
                width: 64,
                height: 64
            }
        ],
        down: [
            {
                xPos: 78,
                yPos: 348,
                width: 64,
                height: 64
            }
        ],
        topLeft: [
            {
                xPos: 10,
                yPos: 76,
                width: 64,
                height: 64
            }
        ],
        topRight: [
            {
                xPos: 146,
                yPos: 76,
                width: 64,
                height: 64
            }
        ],
        downLeft: [
            {
                xPos: 10,
                yPos: 280,
                width: 64,
                height: 64
            },
            {
                xPos: 10,
                yPos: 348,
                width: 64,
                height: 64
            }
        ],
        downRight: [
            {
                xPos: 146,
                yPos: 280,
                width: 64,
                height: 64
            },
            {
                xPos: 146,
                yPos: 348,
                width: 64,
                height: 64
            }
        ]

    }
}

export const bossData = {
    body: {
        xPos: 386,
        yPos: 16,
        width: 226,
        height: 372
    },
    wallCannonRight: {
        xPos: 404,
        yPos: 432,
        width: 26,
        height: 12
    },
    wallCannonLeft: {
        xPos: 404,
        yPos: 446,
        width: 22,
        height: 12
    },
    gate: [
        {
            xPos: 438,
            yPos: 396,
            width: 48,
            height: 62
        },
        {
            xPos: 494,
            yPos: 396,
            width: 48,
            height: 62
        },
        {
            xPos: 550,
            yPos: 396,
            width: 48,
            height: 62
        }
    ]

};