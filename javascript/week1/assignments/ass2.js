// 1. Write a function sum that finds the `sum` of two numbers. 
function sum(a, b) {
    // calculates the sum of a and b and stores it in the variable `total`
    let total = a + b;

    // returns the value of `total`
    return total;
}

let ans1 = sum(5, 10);
console.log(ans1); // 15

// 2. Side quest - Try passing in a string instead of a number and see what happens?
let ans2 = sum("5", "6"); 
console.log(ans2); // 56
