/**
 * Week 2 - Exercise 1
 * @author: Jam Furaque
 */
// Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
// and for..of

const greeter = (myArray, counter) => {
    const greetText = 'Hello';
    for (let i = 0; i < myArray.length; i++){
        console.log(`${greetText} ${myArray[i]}!`);
    }
}
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan', 3]);
