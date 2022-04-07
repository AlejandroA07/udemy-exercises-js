"use strict"

let diceRoll = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');
let currentScoreInDom = document.getElementById('current--0');
let player1Score = document.getElementById('score--0').textContent;
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let currentScore = 0;
let activePlayer = 0;



function rollDice() {
    let num = Math.trunc(Math.random() * 6) + 1;
    let dice = document.querySelector('.dice');
    dice.src = `dice-${num}.png`; 
    dice.classList.remove('hidden');
    
    if (num != 1) {
    currentScore = currentScore + num;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else { 
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        //activePlayer = activePlayer === 0 ? 1 : 0;
        switchPlayer()
        addStyleToActivePlayer()
        currentScore = 0;
    }
}

diceRoll.addEventListener('click', rollDice);
hold.addEventListener('click', holdenScore)
// (a + kn) % n
// q = (q + 1) % n
const scores = [0, 0];
const players = [0, 1];


function switchPlayer() {
    activePlayer = (activePlayer + 1) % players.length;
    return activePlayer;
};

function addStyleToActivePlayer() {
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

function holdenScore() {
    
    document.getElementById(`score--${activePlayer}`).textContent = Number(document.getElementById(`score--${activePlayer}`).textContent) + currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    switchPlayer();
}


