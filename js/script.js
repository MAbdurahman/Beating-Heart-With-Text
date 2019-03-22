/*/////SCRIPT SHEET FOR BEATING HEART WITH TEXT/////*/

const words = ['I love everything about you!'];
let count = 0;
let index = 0;
let currentWords = '';
let letter = '';

(function type() {
    if (count === words.length) {
        count = 0;

    }
    currentWords = words[count];
    letter = currentWords.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;

    if (letter.length === currentWords.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 500);
})();