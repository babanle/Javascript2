'use strict';

// 1️⃣ Générer un nombre aléatoire entre 1 et 20
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// 2️⃣ Sélection des éléments HTML
const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const highscoreLabel = document.querySelector('.highscore');
const numberDisplay = document.querySelector('.number');
const body = document.querySelector('body');
const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// 3️⃣ Vérification que tous les éléments sont bien sélectionnés
console.log(message, scoreLabel, highscoreLabel, numberDisplay, body, guessInput, checkBtn, againBtn);

// 4️⃣ Fonction pour afficher un message
const displayMessage = function (msg) {
  message.textContent = msg;
};

// 5️⃣ Vérification de l'entrée utilisateur avec le bouton "Check"
checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // Cas où aucune valeur n'est entrée
  if (!guess) {
    displayMessage('⛔️ Please enter a number!');

  // Joueur a trouvé le bon nombre
  } else if (guess === secretNumber) {
    displayMessage('🎉 Congratulations! You found the right number!');
    numberDisplay.textContent = secretNumber;
    document.body.style.backgroundColor = 'green'; // Changement de couleur de fond
    numberDisplay.style.width = '30rem'; // Agrandissement du numéro

    // Mise à jour du highscore si nécessaire
    if (score > highscore) {
      highscore = score;
      highscoreLabel.textContent = highscore;
    }

  // Mauvaise supposition
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreLabel.textContent = score;
    } else {
      displayMessage('💥 You lost!');
      scoreLabel.textContent = 0;
      body.style.backgroundColor = 'red'; // Indication de défaite
    }
  }
});

// 6️⃣ Réinitialisation du jeu avec "Again"
againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreLabel.textContent = score;
  numberDisplay.textContent = '?';
  guessInput.value = ''; // Réinitialisation du champ d'entrée

  body.style.backgroundColor = '#222'; // Rétablissement de la couleur d'origine
  numberDisplay.style.width = '15rem'; // Rétablissement de la taille d'origine
});
