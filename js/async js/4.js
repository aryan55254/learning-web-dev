const data = require("fs");
const content1 = data.readFile("./js/async js/3.txt","utf-8",afterfileread);
function afterfileread(err,contents){
    console.log(err);
};
console.log("hello"); 
//cpu intensive task >>> i/o bound tasks
