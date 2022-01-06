let computerGuess
let userGuesses = [];

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
    startGameView()
}

function hardMode(){
    startGameView()
}

function compareGuess(){
    const userGuess = Number(document.getElementById("inputBox").value);
    userGuesses.push(" " + userGuess); // the numbers in the array get a space after ,
    document.getElementById("guesses").innerHTML = userGuesses;

    if(userGuess > computerGuess) {
        document.getElementById("textOutput").innerHTML = "Your guess is too high! ❌";
        document.getElementById("inputBox").value = ""; //resets input field, so that the guess number disappears once guess has been checked

    } else if (userGuess < computerGuess) {
        document.getElementById("textOutput").innerHTML = "Your guess is too low! ❌";
        document.getElementById("inputBox").value = ""; 
        
    } else {
        document.getElementById("textOutput").innerHTML = "Bravo! 👏";
    }
}



