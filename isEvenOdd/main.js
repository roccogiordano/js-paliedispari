// Variables Initialization

const userChoice = prompt("Scegli pari o dispari:").toLowerCase();
const userNum = parseInt(prompt("Scegli un numero da 1 a 5:"));
const rndNumber = getRndInteger(1, 5);
let sumNum = undefined;

//


// Functions Declaration

/**
 * Checks if a given number is even or odd.
 * @param {number} num1
 * @param {number} num2
 * @returns {string}
 */

function isEvenOdd(num1, num2) {

    sumNum = num1 + num2;

    if (sumNum % 2 === 0) {

        result = "pari";

    } else {

        result = "dispari";

    }

    return result;

};

/**
 * Gives a random number between 1 and 5.
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */

function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

};

//


// Output

isEvenOdd(userNum, rndNumber);

if (userChoice === result) {

    alert(`Il numero generato randomicamente è ${rndNumber}, sommato con il numero che hai scelto fa ${sumNum}, che è ${result} come avevi previsto! Hai vinto :)`);

} else {

    alert(`Il numero generato randomicamente è ${rndNumber}, sommato con il numero che hai scelto fa ${sumNum}, che è ${result}. Hai perso :(`);

};

//