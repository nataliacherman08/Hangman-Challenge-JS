//Array of words
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
    'knight'];

//Hangman as an Object
let hangman = {
    guesses: 7,
    word: null,
    letters: 0,
    rights: 0,
    wrongs: 0,
    image: null,
    secretWord: null,
    keyboard: null,
    chances: null,

    //Init
    init: function () {
        hangman.image = document.getElementById('image');
        hangman.secretWord = document.getElementById("secret-word");
        hangman.keyboard = document.getElementById('keyboard');
        hangman.chances = document.getElementById('guess');

        //Keyboard
        for (i = 65; i < 91; i++) {
            let characters = document.createElement('input');
            characters.type = 'button';
            characters.value = String.fromCharCode(i);
            characters.disabled = true;
            characters.addEventListener('click', hangman.check);
            hangman.keyboard.appendChild(characters);
        }

        //Infinite reset
        let startAgain = document.getElementById('start-again');
        startAgain.addEventListener('click', hangman.reset);
        startAgain.disabled = false;
        hangman.reset();
    },


    //Disable and enable
    toggle: function (disable) {
        let all = hangman.keyboard.getElementsByTagName("input");
        for (i of all) { i.disabled = disable; }
    },

    //Reset
    reset: function () {
        hangman.rights = 0;
        hangman.wrongs = 0;
        hangman.chances.innerHTML = hangman.guesses;
        hangman.image.style.opacity = 0;

        //Choose secret Word
        hangman.word = words[Math.floor(Math.random() * Math.floor(words.length))];
        hangman.word = hangman.word.toUpperCase();
        hangman.letters = hangman.word.length;
        console.log(hangman.word);//To show the answer in the console

        //Blanks
        hangman.secretWord.innerHTML = "";
        for (i = 0; i < hangman.word.length; i++) {
            var charnow = document.createElement("span");
            charnow.innerHTML = "_";
            charnow.id = "hangword-" + i;
            hangman.secretWord.appendChild(charnow);
        }

        //Enable characters
        hangman.toggle(false);
    },

    //Check
    check: function () {
        var index = 0, hits = [];
        while (index >= 0) {
            index = hangman.word.indexOf(this.value, index);
            if (index == -1) { break; }
            else {
                hits.push(index);
                index++;
            }
        }

        if (hits.length > 0) {
            // Reveal words
            for (hit of hits) {
                document.getElementById("hangword-" + hit).innerHTML = this.value;
            }

            hangman.rights += hits.length;
            if (hangman.rights == hangman.letters) {
                hangman.toggle(true);
                alert("YOU WIN!");
            }
        }


        else {
            hangman.wrongs++;
            var livesleft = hangman.guesses - hangman.wrongs;
            hangman.chances.innerHTML = livesleft;
            hangman.image.style.opacity = (1 - (livesleft / hangman.guesses)).toFixed(2);

            if (hangman.wrongs == hangman.guesses) {
                hangman.toggle(true);
                alert("YOU LOSE!");
            }
        }

        //disable selected characters
        this.disabled = true;
    }
};

window.addEventListener("DOMContentLoaded", hangman.init);



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
/*let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 180;
canvas.height = 250;

ctx.strokeStyle = '#000';
ctx.lineWidth = 2;*/
