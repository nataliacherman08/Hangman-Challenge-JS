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

//Variables
let answer = '';
let maxAnswers = 10;
let mistakes = 0;
let guessed = [];

//Random Word
function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
}
randomWord();

//Keyboard
function alphabetButtons() {
    let letterButtons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
        <button class = 'btn' id = '`+ letter + `' onClick = 'handleGuess('` + letter + `')'>
            `+ letter + `
        </button>
        `
    ).join('');

    document.getElementById('keyboard').innerHTML = letterButtons;
}
alphabetButtons();



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