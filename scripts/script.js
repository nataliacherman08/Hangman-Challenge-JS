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
let maxAnswers = 7;
let mistakes = 0;
let guessed = [];
let unknown = null;


//Random Word---------------------------------------------------------------------------------------------
function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
}
randomWord();

//Count Mistakes-----------------------------------------------------------------------------------------
document.getElementById('maxAnswers').innerHTML = maxAnswers;


//Indication of number of letters------------------------------------------------------------------------
function unknownWord() {
    if (answer === answer.length) {
        unknown = '_';
        document.getElementById('word').innerHTML = unknown;
    }
}


//Keyboard-------------------------------------------------------------------------------------------------
function alphabetButtons() {
    let letterButtons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
        <button class = 'letter-btn' id = '`+ letter + `' onClick = '('` + letter + `')'>
            `+ letter + `
        </button>
        `
    ).join('');

    document.getElementById('keyboard').innerHTML = letterButtons;
}
alphabetButtons();



//Type writer effect for the h1-------------------------------------------------------------------------
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


//Change the color background (for fun)--------------------------------------------------------------
(() => {

    //Pink bg
    document.getElementById('purple').onclick = bgPurple;

    function bgPurple() {
        document.body.style.backgroundColor = '#e0cce2';
    }

    //Blue bg
    document.getElementById('blue').onclick = bgBlue;

    function bgBlue() {
        document.body.style.backgroundColor = '#97e5e4';
    }

    //Yellow bg
    document.getElementById('yellow').onclick = bgYellow;

    function bgYellow() {
        document.body.style.backgroundColor = '#fdffbf';
    }

    //Green bg
    document.getElementById('green').onclick = bgGreen;

    function bgGreen() {
        document.body.style.backgroundColor = '#7ce29b';
    }

})();

//Canvas----------------------------------
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 180;
canvas.height = 250;

ctx.strokeStyle = '#000';
ctx.lineWidth = 2;
