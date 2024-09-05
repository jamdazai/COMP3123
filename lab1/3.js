// Program to move last three characters to the start of given string.
function right(input){
    
    // Check if string length is greater than three.
    if (input.length < 3){
        return input;
    }

    // Condition if letters are divisible by 3.
    if (input.length % 3 === 0){
        let lastThreeLetters = input.slice(-3);
        let remainingLetters = input.slice(0, -3);
        return lastThreeLetters + remainingLetters;
    } return input;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));