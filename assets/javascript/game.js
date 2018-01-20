//Determine varibales
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var guessThisLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    var chosen = alphabet[guessThisLetter];

    var wins = 0;
    var losses = 0;
    var numberOfGuesses = 9;
    var guessesSoFar = [];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

      var userGuess = event.key.toLowerCase();
      console.log("user guess " + userGuess);

// everything that happens due to a player hitting the appropriate key, either a - z, should be contained within these following if statements:
      if (alphabet.indexOf(userGuess) >= 0 && guessesSoFar.indexOf(userGuess) < 0) {
        guessesSoFar.push(userGuess);
        numberOfGuesses--;
      }

      if (numberOfGuesses === 0){
        numberOfGuesses = 9;
        guessesSoFar = [];
        losses++;
        guessThisLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      }

      if (userGuess === guessThisLetter) {
        numberOfGuesses = 9;
        guessesSoFar = [];
        wins++;
        guessThisLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      }

// Prints the values to the page, contained within the onkeyup bracket:
        document.getElementById("wins").innerHTML = wins;

        document.getElementById("losses").innerHTML = losses;

        document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;

        document.getElementById("guessesSoFar").innerHTML = (guessesSoFar);

} // onkeyup closing bracket 