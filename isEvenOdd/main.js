// Variables Initialization

let userChoice = undefined;
let userNum = undefined;
const rndNumber = getRndInteger(1, 5);
let sumNum = undefined;

//


// Functions Declaration

/**
 * Checks if a the sum of two given number is even or odd.
 * @param {number} num1
 * @param {number} num2
 * @returns {string}
 */

function isSumEvenOdd(num1, num2) {

    sumNum = num1 + num2;

    if (sumNum % 2 === 0) {

        result = "pari";

    } else {

        result = "dispari";

    }

    return result;

};

/**
 * Gives a random number between num1 and num2 (both included).
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */

function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

};

//


// Input Validation


    // userChoice Validation

    userChoice = prompt("Scegli pari o dispari:");

    while (userChoice === null || userChoice === undefined || (userChoice.toLowerCase() !== "pari" && userChoice.toLowerCase() !== "dispari")) {

        userChoice = prompt("Perfavore scegli pari o dispari:");

    }

    userChoice = userChoice.toLowerCase;

    //


    // userNum Validation

    userNum = parseInt(prompt("Scegli un numero da 1 a 5:"));

    while (userNum < 1 || userNum > 5 || isNaN(userNum)) {

        userNum = parseInt(prompt("Perfavore scegli un numero da 1 a 5:"));

    }

    //


//


// Output

isSumEvenOdd(userNum, rndNumber);

if (userChoice === result) {

    alert(`Il numero generato randomicamente è ${rndNumber}, sommato con il numero che hai scelto fa ${sumNum}, che è ${result} come avevi previsto! Hai vinto :)`);

} else {

    alert(`Il numero generato randomicamente è ${rndNumber}, sommato con il numero che hai scelto fa ${sumNum}, che è ${result}. Hai perso :(`);

};

//