//Words
let words = [
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
    'knight'
]

//Variables-----------------------------------------------------------------------------------------------
let answer = '';
let maxAnswers = 8;
let mistakes = 0;
let guessed = [];


//Random Word---------------------------------------------------------------------------------------------
function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
}
randomWord();


//Keyboard-------------------------------------------------------------------------------------------------
function alphabetButtons() {
    let letterButtons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
        <button class = 'btn' id = '`+ letter + `' onClick = '('` + letter + `')'>
            `+ letter + `
        </button>
        `
    ).join('');

    document.getElementById('keyboard').innerHTML = letterButtons;
}
alphabetButtons();


//Count Mistakes-----------------------------------------------------------------------------------------
document.getElementById('maxAnswers').innerHTML = maxAnswers;


//The guessed word---------------------------------------------------------------------------------------
function guessedWord() {

}


//Type writer effect for the h1
let speed = 200;
let i = 0;

let h = document.getElementById('typeWriter');
let text = 'Hangman Game';

function typeWriterEffect() {
    if (i < text.length) {
        h.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriterEffect, speed);
    }
}
typeWriterEffect();