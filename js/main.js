import { DEALER, GAME_DETAILS, YOU } from "./constants.js";
import { showCard, getRandomCard } from "./card.js";
import {
    showScore,
    updateScore,
    computeWinner,
    showWinner,
    dealReset
} from "./game.js";

const blackjackHit = () => {
    if (!GAME_DETAILS.isStand) {
        const card = getRandomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
};

const blackjackStand = () => {
    if (!GAME_DETAILS.pressOnce) {
        GAME_DETAILS.isStand = true;
        const yourImages = document
            .querySelector("#your-box")
            .querySelectorAll("img");

        for (let i = 0; i < yourImages.length; i += 1) {
            //     ((ii) => {
            //         setTimeout(() => {
            const card = getRandomCard();
            showCard(card, DEALER);
            updateScore(card, DEALER);
            showScore(DEALER);
            //         }, ii * 1000);
            //     })(i);
        }

        GAME_DETAILS.isTurnsOver = true;

        showWinner(computeWinner());
    }

    GAME_DETAILS.pressOnce = true;
};

const blackjackDeal = () => {
    if (GAME_DETAILS.isTurnsOver) {
        dealReset();
    }
};

const blackjackRestart = () => {
    blackjackDeal();

    document.querySelector("#wins").textContent = 0;
    document.querySelector("#losses").textContent = 0;
    document.querySelector("#draws").textContent = 0;

    GAME_DETAILS.wins = 0;
    GAME_DETAILS.losses = 0;
    GAME_DETAILS.draws = 0;
};

document
    .querySelector("#blackjack-hit-button")
    .addEventListener("click", blackjackHit);

document
    .querySelector("#blackjack-stand-button")
    .addEventListener("click", blackjackStand);

document
    .querySelector("#blackjack-deal-button")
    .addEventListener("click", blackjackDeal);

document
    .querySelector("#blackjack-restart-button")
    .addEventListener("click", blackjackRestart);
