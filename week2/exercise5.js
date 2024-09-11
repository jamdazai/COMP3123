/**
 * Week 2 - Exercise 5
 * @author: Jam Furaque
 */
// Using array.proto.reduce create calculate the sum and product of a given array.
// SAMPLE OUTPUT
// 10
// 24

var array = [1, 2, 3, 4]
var arrayProto = {};
arrayProto.reduce = function(arr, callback, numValue) {
    return arr.reduce(callback, numValue);
};

const calculateSum = arrayProto.reduce(array, (num, value) => num + value, 0);
const calculateProduct = arrayProto.reduce(array, (num, value) => num * value, 1);

console.log(calculateSum);
console.log(calculateProduct);

