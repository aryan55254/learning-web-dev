let fs = require("fs")

const data = fs.readFileSync('./a.txt','utf-8');
console.log(data);

const contents = fs.readFileSync('./b.txt','utf-8');
console.log(contents);//read files sync

const content = fs.readFile('./b.txt','utf-8');
console.log(contents);//read files async