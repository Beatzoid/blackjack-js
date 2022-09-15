import { widthSize, heightSize } from "./utils.js";
import { hitSound, GAME_DETAILS } from "./constants.js";

export const showCard = (card, activePlayer) => {
    if (activePlayer.score <= 21) {
        const cardImg = document.createElement("img");

        cardImg.width = widthSize();
        cardImg.height = heightSize();
        cardImg.src = `images/${card}.png`;

        document.querySelector(activePlayer.div).appendChild(cardImg);
        hitSound.play();
    }
};

export const getRandomCard = () => {
    const randInt = Math.floor(Math.random() * GAME_DETAILS.cards.length);
    return GAME_DETAILS.cards[randInt];
};
