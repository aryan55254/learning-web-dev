//way to have embedded expressions in strings
//let obj ={
    //item:"pen",
    //price:10,
//};
//console.log("the cost of " , obj.item , "is" , obj.price);

//let sentance = `this is a template` ;
//console.log(typeof sentance);
let obj ={
    item:"pen",
    price:18,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees.`
console.log(output);
//this is string interpolation 
//you can do expressions inside template literals
//escape characters
console.log("aryan\nmishra");//line break
console.log("aryan\tmishra");//space