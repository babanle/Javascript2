'use strict';

// 1. Générer un nombre aléatoire entre 1 et 20
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Sélection des éléments
const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const highscoreLabel = document.querySelector('.highscore');
const numberDisplay = document.querySelector('.number');
const body = document.querySelector('body');
const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// Fonction pour afficher un message
const displayMessage = function (msg) {
  message.textContent = msg;
};

// 2. Vérifier l'entrée utilisateur avec le bouton "Check"
checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // Si aucune valeur n'est entrée
  if (!guess) {
    displayMessage('⛔️ No entry!');
  
  // Joueur a gagné
  } else if (guess === secretNumber) {
    displayMessage('🎉 Congratulation! You found the right number!');
    numberDisplay.textContent = secretNumber;
    body.style.backgroundColor = 'green'; // Couleur verte
    numberDisplay.style.width = '30rem'; // Augmentation de la taille du nombre

    // Mettre à jour le highscore
    if (score > highscore) {
      highscore = score;
      highscoreLabel.textContent = highscore;
    }

  // Mauvaise supposition
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreLabel.textContent = score;
    } else {
      displayMessage('💥 You lost!');
      scoreLabel.textContent = 0;
    }
  }
});

// 3. Réinitialisation du jeu avec "Again"
againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreLabel.textContent = score;
  numberDisplay.textContent = '?';
  guessInput.value = '';

  body.style.backgroundColor = '#222'; // Rétablir la couleur initiale
  numberDisplay.style.width = '15rem'; // Rétablir la taille du nombre
});
