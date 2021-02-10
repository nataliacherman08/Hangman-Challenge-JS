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

//Images
let image = document.getElementById('image');

let gallery = [
    '../../hangman.png',
    '../../hangman1.png',
    '../../hangman2.png',
    '../../hangman3.png',
    '../../hangman4.png',
    '../../hangman5.png',
    '../../hangman6.png',
    '../../hangman7.png'
];

let indexGallery = 1;


function change() {
    image.setAttribute('src', gallery[indexGallery]);
    indexGallery++;
}

//Hangman as an Object-------------------------------------------------
let hangman = {
    guesses: 7,
    word: null,
    letters: 0,
    rights: 0,
    wrongs: 0,
    secretWord: null,
    keyboard: null,
    chances: null,

    //1)
    init: function () {
        /*hangman.image = document.getElementById('image');*/
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

    //2) Disable characters
    toggle: function (disable) {
        let all = hangman.keyboard.getElementsByTagName('input');
        for (i of all) { i.disabled = disable; }
    },

    //3) Reset "Everytime we push the reset button,"
    reset: function () {
        hangman.rights = 0;
        hangman.wrongs = 0;
        hangman.chances.innerHTML = hangman.guesses;

        //Choose a new secret Word
        hangman.word = words[Math.floor(Math.random() * Math.floor(words.length))];
        hangman.word = hangman.word.toUpperCase();
        hangman.letters = hangman.word.length;

        console.log(hangman.word);//To show the answer in the console


        //Blanks '_'
        hangman.secretWord.innerHTML = '';
        for (i = 0; i < hangman.word.length; i++) {
            let char = document.createElement("span");
            char.innerHTML = '_';
            char.id = "blank-" + i;
            hangman.secretWord.appendChild(char);
        }

        //Enable characters
        hangman.toggle(false);
    },




    //4) Check
    check: function () {
        let index = 0, tries = [];
        while (index >= 0) {
            index = hangman.word.indexOf(this.value, index);
            if (index == -1) { break; }
            else {
                tries.push(index);
                index++;
            }
        }

        if (tries.length > 0) {
            // Reveal words
            for (hit of tries) {
                document.getElementById('blank-' + hit).innerHTML = this.value;
            }

            hangman.rights += tries.length;
            if (hangman.rights == hangman.letters) {
                hangman.toggle(true);
                alert('Congratulations !');
            }
        }


        else {
            hangman.wrongs++;
            var livesleft = hangman.guesses - hangman.wrongs;
            hangman.chances.innerHTML = livesleft;
            change();

            if (hangman.wrongs == hangman.guesses) {
                hangman.toggle(true);
                alert(`So sorry, maybe the next time ! The guessed word was : ${hangman.word}`);
            }
        }

        //disable selected characters
        this.disabled = true;
    }
};

//-------------------------------------------------------------------------------------------------------------------

window.addEventListener("DOMContentLoaded", hangman.init);




//Canvas----------------------------------
/*let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 180;
canvas.height = 250;

ctx.strokeStyle = '#000';
ctx.lineWidth = 2;*/
