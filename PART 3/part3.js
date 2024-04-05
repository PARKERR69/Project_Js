// Génération d'un nombre aléatoire entre 1 et 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); // Pour des fins de test, à retirer ensuite

const guessInput = document.getElementById('guessInput');
const checkButton = document.getElementById('checkButton');
const feedback = document.getElementById('feedback');

checkButton.addEventListener('click', function() {
  // Récupérer la proposition de l'utilisateur
  const userGuess = parseInt(guessInput.value);

  // Vérifier si la proposition est correcte
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Veuillez saisir un nombre entre 1 et 100.';
  } else if (userGuess === randomNumber) {
    feedback.textContent = 'Bravo ! Vous avez deviné le nombre correctement.';
  } else if (userGuess < randomNumber) {
    feedback.textContent = 'Le nombre est trop petit. Essayez à nouveau.';
  } else {
    feedback.textContent = 'Le nombre est trop grand. Essayez à nouveau.';
  }

  // Effacer le champ de saisie après chaque vérification
  guessInput.value = '';
});