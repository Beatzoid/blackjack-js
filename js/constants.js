export const GAME_DETAILS = {
    you: {
        scoreSpan: "#your-blackjack-result",
        div: "#your-box",
        boxSize: ".flex-row-2 div",
        score: 0
    },
    dealer: {
        scoreSpan: "#dealer-blackjack-result",
        div: "#dealer-box",
        boxSize: ".flex-row-2 div",
        score: 0
    },
    cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "A"],
    cardMap: {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 10,
        K: 10,
        Q: 10,
        A: [1, 11]
    },
    wins: 0,
    losses: 0,
    draws: 0,
    isStand: false,
    isTurnsOver: false,
    pressOnce: false
};

export const YOU = GAME_DETAILS.you;
export const DEALER = GAME_DETAILS.dealer;

export const hitSound = new Audio("sounds/swish.m4a");
export const winSound = new Audio("sounds/cash.mp3");
export const loseSound = new Audio("sounds/aww.mp3");

export const WINDOW_HEIGHT = window.screen.height;
export const WINDOW_WIDTH = window.screen.width;
