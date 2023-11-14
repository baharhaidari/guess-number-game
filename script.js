'use strict';

document.querySelector('.guess').value = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

// document.querySelector('.number').textContent = secretNumber;

let score = 20;
document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);

  if (!guessNumber) {
    document.querySelector('.message').textContent = 'No Number!';
  }

  // Win
  else if (secretNumber === guessNumber) {
    document.querySelector('.message').textContent = 'Correct Guess! 🏆';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '25rem';
  }

  // low
  else if (secretNumber > guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }

  // High
  else if (secretNumber < guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

// Homework 13 ⬇️

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 21);
  score = 20;

  document.querySelector('.guess').value = 0;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
