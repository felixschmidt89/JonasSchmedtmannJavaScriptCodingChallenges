/* JavaScript in the Browser: DOM and Events

Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK � */

'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number entered...');
  } else if (guess === secretNumber) {
    displayMessage('Yeah! You have won the game!');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayScore(score);
      displayMessage(
        guess > secretNumber ? 'Number is too high.' : 'Number is too low.'
      );
    } else {
      score--;
      displayNumber(secretNumber);
      document.body.style.backgroundColor = '#ff7b7b';
      displayScore(0);
      displayMessage('Too many attempts. You have lost the game :(');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
