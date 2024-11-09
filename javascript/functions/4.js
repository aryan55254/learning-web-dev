function addnum(...numb){
    let ans = 0;
    for (let i =0;i<numb.length;i++){
        ans = ans + numb[i];
    }
    return ans
}
let r = addnum(5,6,5,6);
console.log(r);