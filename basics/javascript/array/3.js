//slice,splice
myarr = [0,1,2,3,4,5];
console.log("A",myarr);
const ma = myarr.slice(1,3);//doesn't show 2nd index doesn't change original array
console.log(ma);
console.log(myarr);
const a = myarr.splice(1,3);//changes original array
console.log(a);//includes the 2nd index
console.log(myarr);