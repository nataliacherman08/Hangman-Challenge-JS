//1) Create an array of words (const because we will not change this array)
const words = [
    'witchery',
    'wizzard',
    'dragon',
    'fairy',
    'unicorn',
    'moonstone',
    'elf',
    'magic',
    'dwarf',
    'fantasy',
    'cauldron',
    'wand',
    'potion',
    'troll',
    'legends',
    'tales',
    'yggdrasil',
    'princess',
    'castle',
    'knight',
    'ghost',
    'crystal',
    'tarot',
    'wendigo',
    'goblin',
    'werewolf',
    'vampire',
    'elixir'
];


//2) Declare Variables (It's important to declare the variables outside the code blocs for the scope)
let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let image = document.getElementById('hangedMan');


//3) Pick a secretWord
function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];

    console.log(answer); //To show the answer in the console
}



//Update the maximum permissible wrong answers 
document.getElementById('maxWrong').innerHTML = maxWrong;



//4) Generate a keyboard dynamically by JS
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
      <button
        class='alphabet'
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');//To delete the commas

    document.getElementById('keyboard').innerHTML = buttonsHTML;//To insert this keyboard in HTML
}


//5) Function for changing picture everytime the user makes a mistake
function updatePicture() {
    document.getElementById('hangedMan').src = 'assets/images/' + mistakes + '.png';
}


// ====The function of the Game========
function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;

    if (answer.indexOf(chosenLetter) >= 0) { //if the letter exists in the word
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) { //if the letter doesn't exist in the word
        mistakes++; //count mistakes, add 1
        updateMistakes();
        checkIfGameLost();
        updatePicture();
    }
}


function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}



//Function to check if the user won
function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'Congratulations, play again ?';
    }
}

//Function to check if the user lose
function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('blanks').innerHTML = 'The secret word was : ' + answer;
        document.getElementById('keyboard').innerHTML = 'Sorry, maybe the next time.';
    }
}


//Function to replace the letters of the word bu '_'
function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('blanks').innerHTML = wordStatus;
}



//Reset
function reset() {
    mistakes = 0;
    guessed = [];
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
    document.getElementById('hangedMan').src = "assets/hanged.png";
}


//Launch the functions
randomWord();
generateButtons();
guessedWord();