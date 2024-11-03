//i/o heavy operation 
const fs = require("fs");
const content = fs.readFileSync("./js/async js/3.txt","utf-8");
console.log(content);