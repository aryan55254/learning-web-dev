// 3. Write a function called `canVote` that returns true or false if the `age` of a user is > 18
function canVote(age) {
    // if age is greater than 18, it returns true, else it returns false
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

let ans3 = canVote(20);
console.log(ans3); // true