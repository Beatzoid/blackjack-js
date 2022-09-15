import { DEALER, GAME_DETAILS, loseSound, winSound, YOU } from "./constants.js";

export const updateScore = (card, activePlayer) => {
    if (card === "A") {
        // If the player can set the Ace's value to 11 without going over
        // 21, do it, overwise set the value to 1
        if (activePlayer.score + GAME_DETAILS.cardMap[card][1] <= 21) {
            activePlayer.score += GAME_DETAILS.cardMap[card][1];
        } else {
            activePlayer.score += GAME_DETAILS.cardMap[card][0];
        }
    } else {
        activePlayer.score += GAME_DETAILS.cardMap[card];
    }
};

export const showScore = (activePlayer) => {
    if (activePlayer.score > 21) {
        document.querySelector(activePlayer.scoreSpan).textContent = "BUST!";
        document.querySelector(activePlayer.scoreSpan).style.color = "red";
    } else {
        document.querySelector(activePlayer.scoreSpan).textContent =
            activePlayer.score;
    }
};

export const computeWinner = () => {
    let winner;

    if (YOU.score <= 21) {
        if (YOU.score > DEALER.score || DEALER.score > 21) {
            winner = YOU;
        } else if (YOU.score < DEALER.score) {
            winner = DEALER;
        } else if (YOU.score === DEALER.score) {
            winner = "DRAW";
        }
    } else if (YOU.score > 21 && DEALER.score <= 21) {
        winner = DEALER;
    } else if (YOU.score > 21 && DEALER.score > 21) {
        winner = "None";
    }

    return winner;
};

export const showWinner = (winner) => {
    let message;
    let messageColor;

    if (winner === YOU) {
        message = "You Won!";
        messageColor = "#00e676";
        document.querySelector("#wins").textContent = GAME_DETAILS.wins += 1;
        winSound.play();
    } else if (winner === DEALER) {
        message = "You Lost";
        messageColor = "red";
        document.querySelector("#losses").textContent =
            GAME_DETAILS.losses += 1;
        loseSound.play();
    } else if (winner === "Draw") {
        message = "You Drew";
        messageColor = "yellow";
        document.querySelector("#draws").textContent = GAME_DETAILS.draws += 1;
        loseSound.play();
    } else if (winner === "None") {
        message = "You both busted!";
        messageColor = "orange";
        loseSound.play();
    }

    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
};

export const dealReset = () => {
    const yourImages = document
        .querySelector("#your-box")
        .querySelectorAll("img");
    const dealerImages = document
        .querySelector("#dealer-box")
        .querySelectorAll("img");

    YOU.score = 0;
    DEALER.score = 0;

    document.querySelector("#your-blackjack-result").textContent = 0;
    document.querySelector("#dealer-blackjack-result").textContent = 0;

    document.querySelector("#your-blackjack-result").style.color = "white";
    document.querySelector("#dealer-blackjack-result").style.color = "white";

    document.querySelector("#blackjack-result").textContent = "Let's Play";
    document.querySelector("#blackjack-result").style.color = "white";

    for (let i = 0; i < yourImages.length; i += 1) {
        yourImages[i].remove();
        dealerImages[i].remove();
    }

    GAME_DETAILS.isStand = false;
    GAME_DETAILS.pressOnce = false;
    GAME_DETAILS.isTurnsOver = false;
};
