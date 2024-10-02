// Program to find the maximum possible sum of some of its k consecutive numbers.
// of a given array of positive integers.
function array_max_sum(num, k){
    if (num.length < k ){
        return "Numbers length is less than the consecutive numbers.";
    }

    let max_sum = 0;
    for (let i = 0; i < k; i++){
        max_sum += num[i];
    }

    let total_sum = max_sum;
    for (let i = k; i < num.length; i++){
        total_sum += num[i] - num[i - k];
        max_sum = Math.max(max_sum, total_sum);
    }
    return max_sum;
}

// Sample Output
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));