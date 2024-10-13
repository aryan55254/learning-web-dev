function adding (num1){
    return function(num2){
        return num1 + num2;
    };
}
let sum = adding(4);
console.log(sum(3));