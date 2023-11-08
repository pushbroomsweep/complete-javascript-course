'use strict';

/*
// Get textContent from the element
console.log(document.querySelector('.message').textContent);

// Set content
document.querySelector('.message').textContent = '🎉 Correct Number!';

// Get textContent from the element
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/* click events */
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess)
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
});
