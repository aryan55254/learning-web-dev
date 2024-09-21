//sync code this is 
//loops are cpu bound task
const fs =require("fs");//i/o bound task
const contents = fs.readFileSync("./a.txt","utf-8");
console.log("contents");//sync
const contents = fs.readFile("./a.txt","utf-8");
console.log("contents");//async
