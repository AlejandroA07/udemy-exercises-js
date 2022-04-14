"use strict"

let diceRoll = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');
let currentScoreInDom = document.getElementById('current--0');
let newGame = document.querySelector('.btn--new');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let currentScore = 0;
let activePlayer = 0;
let playing = true;



function rollDice() {
    if (playing) {
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
        currentScore = 0;
    }
    }
}

diceRoll.addEventListener('click', rollDice);
hold.addEventListener('click', holdenScore);
newGame.addEventListener('click', startOver);
// (a + kn) % n
// q = (q + 1) % n
const scores = [0, 0];
const players = [0, 1];


function switchPlayer() {
    activePlayer = (activePlayer + 1) % players.length;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
    return activePlayer;
};


function holdenScore() {
    if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 10) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    

    switchPlayer();
    }
    }
}

function startOver() {
    scores[0] = 0;
    scores[1] = 0;
    //scores = scores.map(el => el - el);
    console.log(scores);
    playing = true;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    currentScore = 0;
    activePlayer = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    document.querySelector('.dice').src = 'dice-6.png';
}
