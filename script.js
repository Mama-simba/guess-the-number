let computerGuess
let userGuesses = [];
let attempts = 0;
let maxGuesses;

function init(){
    computerGuess = Math.floor(Math.random() * 100 + 1); // generates a number between 1-100
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}


function startGameView(){
        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("gameArea").style.display = "block";
}

function easyMode(){
    maxGuesses= 10;
    startGameView()
}

function hardMode(){
    maxGuesses= 5;
    startGameView()
}

function compareGuess(){
    const userGuess = Number(document.getElementById("inputBox").value);
    userGuesses.push(" " + userGuess); // the numbers in the array get a space after ,
    document.getElementById("guesses").innerHTML = userGuesses;

    // Updates number of attempts
    attempts++; 
    document.getElementById("attempts").innerHTML = attempts;

    if(attempts < maxGuesses){
        if(userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = "Your guess is too high! ❌";
            document.getElementById("inputBox").value = ""; //resets input field, so that the guess number disappears once guess has been checked
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "Your guess is too low! ❌";
            document.getElementById("inputBox").value = ""; 
        } else {
            document.getElementById("textOutput").innerHTML = "Bravo! 👏 You got it in " + attempts + " attempts";
            gameEnded()
        }
    } else {
        if(userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = "YOU LOSE! 😞 <br> The number was " + computerGuess;
            gameEnded()
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "YOU LOSE! 😞 <br> The number was " + computerGuess;
            gameEnded()
        } else {
            document.getElementById("textOutput").innerHTML = "Bravo! 👏 You got it in " + attempts + " attempts";
            gameEnded()
        }
    }
}


function gameEnded(){
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputBox").setAttribute("readonly", "readonly");

}

 
 function newGame(){
     window.location.reload();
 }
