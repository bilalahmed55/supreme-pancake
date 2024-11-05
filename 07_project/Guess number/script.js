let random = parseInt(Math.random() * 100 + 1);
console.log(random)

const submitbtn = document.querySelector('#subt')
const userInput = document.querySelector('.guessField')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const message = document.querySelector('.lowOrHi')
const restart = document.querySelector('#restart')

let prevGuess = []
let numGuess=1

let playGame = true;

if (playGame) {
    submitbtn.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validate(guess)
    })
}

restart.addEventListener('click',(e) => {
    e.preventDefault();
    restartGame();
} )

function validate(guess){
    if (isNaN(guess)) {
        message.innerHTML = 'Please enter valid number'
    }
    else if (guess < 1){
        message.innerHTML = 'please enter number greater than 1'
    }
    else if (guess > 100){
        message.innerHTML = 'please enter number less than 100'
    }
    else {
        prevGuess.push(guess)
        guesses.innerHTML += `${guess}, `
        userInput.value = ''
        numGuess++
        remaining.innerHTML = 11 - numGuess
        checkGuess(guess)
    }
}

function checkGuess(guess) {
    if (guess === random) {
        message.innerHTML = 'Congrats, you have guessed the number!';
        endGame();
    } else if (numGuess >= 10) {
        message.innerHTML = `Better luck next time! The number was ${random}.`;
        endGame();
    } else if (guess < random) {
        message.innerHTML = 'Entered guess is low';
    } else if (guess > random) {
        message.innerHTML = 'Entered guess is high';
    }
}

function endGame(){
    playGame = false;
    userInput.disabled = true;
    submitbtn.disabled = true;
    message.innerHTML += '<br>Game Over! Click "Start New Game" to play again.';
}

function restartGame() {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    playGame = true;

    guesses.innerHTML = '';
    remaining.innerHTML = 10;
    message.innerHTML = 'Game restarted. Guess a new number!';
    userInput.disabled = false;
    submitbtn.disabled = false;
    userInput.value = '';
}
