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
            if (userGuess < high) high = userGuess;
            document.getElementById("textOutput").innerHTML = "Your guess is too high! ❌";
            document.getElementById("inputBox").value = ""; //resets input field, so that the guess number disappears once guess has been checked
        } else if (userGuess < computerGuess) {
            if(userGuess > low) low = userGuess;
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
    updateRange()
}


function gameEnded(){
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputBox").setAttribute("readonly", "readonly");

}

 
 function newGame(){
     window.location.reload();
 }


let low = 1;
let high = 100;

function updateRange(){
    const rangeOutput = document.getElementById("rangeOutput"); //updates the text
    rangeOutput.innerText = `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + "%";
    rangeOutput.style.marginRight = 100 - high + "%";
    rangeOutput.classList.add("flash");

    const lowValue = document.getElementById("low");
    lowValue.style.flex = low + "%";
    lowValue.style.background = "#fe5542";

    const space = document.getElementById("space");
    space.style.flex = high - low + "%";
    space.style.background = "#83e1d0";

    const highValue = document.getElementById("high");
    highValue.style.flex = 100 - high + "%";
    highValue.style.background = "#fe5542";
}