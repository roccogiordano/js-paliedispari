// Variables Initialization

const userSentence = prompt("Inserisci una frase:").toString().toLowerCase();

//


// Function Declaration

/**
 * Checks if a given sentence is palindrome.
 * @param {string || number} word
 * @returns {boolean}
 */

function isPalindrome(word) {

    const splitSentence = word.split("");
    const reverseSentence = splitSentence.reverse().join("");

    return reverseSentence === userSentence;

};

//


// Output

if (isPalindrome(userSentence)) {

    alert("La frase che hai inserito è palindroma!");

} else {

    alert("La frase che hai inserito non è palindroma :(");

};

//