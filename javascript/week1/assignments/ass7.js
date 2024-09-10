function geteven(numbers)
{
    let evennumbers = numbers.filter(
        (number) => number%2 == 0
    );
    console.log(evennumbers);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(geteven(numbers));