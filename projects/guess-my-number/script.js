'use strict';

let messageText = document.querySelector('.message');
let scoreText = document.querySelector('.score');
const btnCheck = document.querySelector('.check');
let highScoreText = document.querySelector('.highscore');
let numberText = document.querySelector('.number');
let guessText = document.querySelector('.guess');
let bodyText = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

btnCheck.addEventListener('click', function () {
  const guessed = Number(guessText.value);
  if (!guessed) {
    displayMessage('Type a number...');
  } else if (guessed === secretNumber)  {
    displayMessage('Right number...');
    numberText.textContent = secretNumber;
    bodyText.style.backgroundColor = '#60b347';
    numberText.style.width = '30rem';
    if ( score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
    
  } else if (guessed !== secretNumber) {
    wrongGuess()
  }
  function wrongGuess() {
    if (score > 1) {
      displayMessage(guessed > secretNumber ? 'Too high...' : 'Too low...')
      score --;
      scoreText.textContent = score;
    } else {
      displayMessage('You lost the game...');
      scoreText.textContent = 0;
    }
  }
})



document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  bodyText.style.backgroundColor = '#222';
  numberText.style.width = '15rem';
  numberText.textContent = '?';
  scoreText.textContent = score;
  guessText.value = '';
  displayMessage('Start guessing...');

});

function displayMessage(message) {
  messageText.textContent = message
}