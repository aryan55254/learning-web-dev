//i/o heavy operation 
const fs = require("fs");
const content = fs.readFileSync("./js/async js/3.txt","utf-8");
const content2 = fs.readFileSync("./js/async js/3.2.txt","utf-8")
console.log(content);
console.log(content2);
//for loop  cpu bound
//sync one by one
//async start all together which finish first runs
