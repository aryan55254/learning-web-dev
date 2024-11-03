//sync
let a = 1;
let b = 2;
let result = a+b;
//console.log(result);
//promise used for long tasks it will inform after it is done
//async
let resultfromserver = fetch("https://jsonplaceholder.typicode.com/posts");
console.log(resultfromserver)
// async doesn't wait and returns a promise
console.log(result);