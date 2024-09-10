function sum(num) {
    // define a variable called `total` and set it to 0
    let total = 0;

    // this loop runs from 1 to the input number 
    for (let i = 1; i <= num; i++) {
        // adds the value of `i` to the `total` variable
        total += i;
    }

    // returns the value of `total`
    return total;
}

// logs the value of the function `sum` with the input 5
console.log(sum(5)); // 15

// logs the value of the function `sum` with the input 10
console.log(sum(10)); // 55