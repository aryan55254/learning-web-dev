function sum (n){
    let ans = 0;
    for (let i=0;i<=n;i++){
        ans = ans + i;
    }
    return ans;
}
let k = sum(5);
console.log(k);
//sync code executed line by line in order it is written