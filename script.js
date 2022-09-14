'use strict';

const diceImage = document.querySelector(".dice");
diceImage.classList.add("hidden");

let currentScorePlayer0 = 0;
let currentScorePlayer1 = 0;

let activePlayer0 = true;
let activePlayer1 = false;

let diceRoll = function() {
    return Math.floor(Math.random() * 6 + 1);
}

const currentScoreEl = document.querySelectorAll(".current-score");
const sectionEl = document.querySelectorAll(".player");

const rollDiceBtn = document.querySelector(".btn--roll");

rollDiceBtn.addEventListener('click', function() {
    const diceNumber = diceRoll();
    diceImage.setAttribute("src", `dice-${diceNumber}.png`);
    diceImage.classList.remove("hidden");

    if(diceNumber != 1) {
        if(activePlayer0) {
            currentScorePlayer0 += diceNumber;
            currentScoreEl[0].textContent = currentScorePlayer0;
        } else {
            currentScorePlayer1 += diceNumber;
            currentScoreEl[1].textContent = currentScorePlayer1;
        }
    } else {
        if(activePlayer0) {
            currentScorePlayer0 = 0;
            currentScoreEl[0].textContent = currentScorePlayer0;
            sectionEl[0].classList.remove("player--active");
            sectionEl[1].classList.add("player--active");
            activePlayer0 = false;
            activePlayer1 = true;
        }
        else {
            currentScorePlayer1 = 0;
            currentScoreEl[1].textContent = currentScorePlayer1;
            sectionEl[1].classList.remove("player--active");
            sectionEl[0].classList.add("player--active");
            activePlayer1 = false;
            activePlayer0 = true;
        }
    }
});

const scoreEl = document.querySelectorAll(".score");
let finalScorePlayer0 = 0;
let finalScorePlayer1 = 0;

const holdBtn = document.querySelector(".btn--hold");
holdBtn.addEventListener('click', function() {
    if(activePlayer0) {
        finalScorePlayer0 += currentScorePlayer0;
        scoreEl[0].textContent = finalScorePlayer0;
        
        sectionEl[0].classList.remove("player--active");
        sectionEl[1].classList.add("player--active");
        currentScorePlayer0 = 0;
        currentScoreEl[0].textContent = currentScorePlayer0;
        if(finalScorePlayer0 >= 100) {
            alert("Player 1 wins 🏆🏆!!");
            newGame();
        }
        
        activePlayer0 = false;
        activePlayer1 = true;
    } else {
        finalScorePlayer1 += currentScorePlayer1;
        scoreEl[1].textContent = finalScorePlayer1;
        
        sectionEl[1].classList.remove("player--active");
        sectionEl[0].classList.add("player--active");
        currentScorePlayer1 = 0;
        currentScoreEl[1].textContent = currentScorePlayer1;
        if(finalScorePlayer1 >= 100) {
            alert("Player 2 wins 🏆🏆!!");
            newGame();
        }
        
        activePlayer1 = false;
        activePlayer0 = true;
    }
});

const newGameBtn = document.querySelector(".btn--new");
const newGame = function() {
    currentScorePlayer0 = 0;
    currentScorePlayer1 = 0;

    activePlayer0 = true;
    activePlayer1 = false;

    finalScorePlayer0 = 0;
    finalScorePlayer1 = 0;

    if(sectionEl[1].classList.contains("player--active")) {
        sectionEl[1].classList.remove("player--active");
        sectionEl[0].classList.add("player--active");
    }

    currentScoreEl[0].textContent = currentScorePlayer0;
    currentScoreEl[1].textContent = currentScorePlayer1;

    scoreEl[0].textContent = finalScorePlayer0;
    scoreEl[1].textContent = finalScorePlayer1;

    diceImage.classList.add("hidden");
};
newGameBtn.addEventListener('click', newGame);

