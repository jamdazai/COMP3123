/**
 * Week 2 - Exercise 2
 * @author: Jam Furaque
 */
// Using destructuring assignment syntax and the spread operator, write a function will capitalize the
// first letter of a string.

// EXPECTED OUTPUT:
// Foobar
// Nodejs

const capitalize =  ([letter, ...string]) => {
    return letter.toUpperCase() + string.join('').toLowerCase();
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));