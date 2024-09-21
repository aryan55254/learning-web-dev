function sum(n){
    let total = 0;
    for (let i=1;i<=n;i++){
        total += i
    }
    return total;
}
let ans = sum(3);
console.log(ans);