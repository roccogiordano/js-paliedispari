// Variables Initialization

let userSentence = prompt("Inserisci una frase:");

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


// Input Validation

while (userSentence === null || userSentence === undefined) {

    userSentence = prompt("Perfavore inserisci una frase:");

};

if (userSentence.length > 100) {

    userSentence = prompt("Perfavore inserisci al massimo 100 caratteri:");
 
} else {

    userSentence = userSentence.toString().toLowerCase();

};

//


// Output

if (isPalindrome(userSentence)) {

    alert("La frase che hai inserito è palindroma!");

} else {

    alert("La frase che hai inserito non è palindroma :(");

};

//