
// Math way

function solve(number){

    let result = 0;
    while(number > 0) {

        result += number % 10;
        number = Math.trunc(number/10);
    }

    console.log(result);
}

// String way


/**
 * @param {number} number 
 */
function solveString(number) {
    let textNumber = number.toString();
    let sum = 0;
    for(let i = 0; i < textNumber.length; i++) {
        sum += Number(textNumber[i]);
    }
    console.log(sum);
}


solveString(245678);