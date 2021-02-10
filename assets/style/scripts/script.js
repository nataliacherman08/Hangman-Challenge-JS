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

    init: function () {
        hangman.image = document.getElementById('image');
        hangman.secretWord = document.getElementById("secret-word");
        hangman.keyboard = document.getElementById('keyboard');
        hangman.chances = document.getElementById('guess');

        //Choose secret Word
        hangman.word = words[Math.floor(Math.random() * words.length)];
        hangman.word = hangman.word.toUpperCase();
        hangman.letters = hangman.word.length;
        console.log(hangman.word);//To show the answer in the console


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
        let all = hangman.keyboard.getElementsByTagName('input');
        for (i of all) { i.disabled = disable; }
    },

    //Reset
    reset: function () {
        hangman.rights = 0;
        hangman.wrongs = 0;
        hangman.chances.innerHTML = hangman.guesses;
        hangman.image.style.opacity = 0;

        //Blanks '_' It's important to put that after reset
        hangman.secretWord.innerHTML = '';
        for (i = 0; i < hangman.word.length; i++) {
            let char = document.createElement("span");
            char.innerHTML = "_";
            char.id = "hangword-" + i;
            hangman.secretWord.appendChild(char);
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
                document.getElementById('hangword-' + hit).innerHTML = this.value;
            }

            hangman.rights += hits.length;
            if (hangman.rights == hangman.letters) {
                hangman.toggle(true);
                alert('Congratulations !');
            }
        }


        else {
            hangman.wrongs++;
            var livesleft = hangman.guesses - hangman.wrongs;
            hangman.chances.innerHTML = livesleft;
            hangman.image.style.opacity = (1 - (livesleft / hangman.guesses)).toFixed(2);

            if (hangman.wrongs == hangman.guesses) {
                hangman.toggle(true);
                alert(`So sorry, maybe the next time ! The guessed word was : ${hangman.word}`);
            }
        }

        //disable selected characters
        this.disabled = true;
    }
};

window.addEventListener("DOMContentLoaded", hangman.init);




//Canvas----------------------------------
/*let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 180;
canvas.height = 250;

ctx.strokeStyle = '#000';
ctx.lineWidth = 2;*/
