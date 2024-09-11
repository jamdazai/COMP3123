/**
 * Week 2 - Exercise 4
 * @author: Jam Furaque
 */
// Using array.proto.filter create a function that will filter out all the values of the array that are less
// than twenty.

var values = [1, 60, 34, 30, 20, 5];
var array = {};
array.proto = {};
array.proto.filter = function (arr, callback){
    return arr.filter(callback);
};

const filterLessThan20 = (value) => {
    return array.proto.filter(value, function(lessThan){
        return lessThan < 20;
    });
};

console.log(filterLessThan20(values));