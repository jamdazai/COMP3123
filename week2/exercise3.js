/**
 * Week 2 - Exercise 3
 * @author: Jam Furaque
 */
// Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
// the first character of each Color

// EXAMPLE OUTPUT SHOULD BE:
// ['Red', 'Green', 'Blue']
const colors = ['red', 'green', 'blue'];
const capitalize = ([letter, ...string]) => {
    return letter.toUpperCase() + string.join('').toLowerCase();
};

const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors);

