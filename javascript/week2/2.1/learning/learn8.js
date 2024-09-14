//callbacks
const fs = require("fs");

function print(err,data){
    console.log(data);
}
fs.readFile("./a.txt","utf-8",print);//async

fs.readFile("./b.txt","utf-8",print);//async

console.log("done");